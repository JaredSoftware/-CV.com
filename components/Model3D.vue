<template>
  <ClientOnly>
    <div 
      ref="containerRef" 
      class="model-3d-container w-full h-64 md:h-80 flex items-center justify-center overflow-hidden rounded-lg relative"
      v-if="isMounted"
    >
      <div v-if="isLoading" class="absolute inset-0 flex items-center justify-center bg-background-light/80 dark:bg-background-dark/80 rounded-lg z-10">
        <div class="text-center">
          <div class="animate-spin rounded-full h-12 w-12 border-b-2 border-primary dark:border-blue-400 mx-auto mb-2"></div>
          <p class="text-text-secondary-light dark:text-text-secondary-dark text-sm">Cargando modelo...</p>
        </div>
      </div>
    </div>
    <template #fallback>
      <div class="w-full h-64 md:h-80 flex items-center justify-center bg-background-light/50 dark:bg-background-dark/50 rounded-lg">
        <p class="text-text-secondary-light dark:text-text-secondary-dark">Cargando modelo 3D...</p>
      </div>
    </template>
  </ClientOnly>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount, nextTick } from 'vue'

const props = defineProps({
  modelPath: {
    type: String,
    required: true
  },
  autoRotate: {
    type: Boolean,
    default: true
  },
  rotationSpeed: {
    type: Number,
    default: 0.005
  }
})

const containerRef = ref(null)
const isLoading = ref(true)
const isMounted = ref(false)
const shouldLoad = ref(false)
let scene = null
let camera = null
let renderer = null
let model = null
let animationId = null
let THREE = null
let GLTFLoader = null
let controls = null
let interactionTimeout = null
let handleResize = null
let onStartInteraction = null
let onEndInteraction = null
let observer = null

const initThreeJS = async () => {
  if (!containerRef.value || !process.client || !isMounted.value || !shouldLoad.value) return
  
  try {
    // Importar Three.js solo en el cliente
    const threeModule = await import('three')
    THREE = threeModule.default || threeModule
    
    const loaderModule = await import('three/examples/jsm/loaders/GLTFLoader.js')
    GLTFLoader = loaderModule.GLTFLoader || loaderModule.default?.GLTFLoader || loaderModule.default
    
    // Pre-cargar OrbitControls para usarlo después
    const controlsModule = await import('three/examples/jsm/controls/OrbitControls.js')
    
    if (!THREE || !GLTFLoader) {
      console.error('Failed to load Three.js or GLTFLoader')
      isLoading.value = false
      return
    }

    // Crear escena
    scene = new THREE.Scene()
    
    // Crear cámara
    const width = containerRef.value.clientWidth
    const height = containerRef.value.clientHeight
    camera = new THREE.PerspectiveCamera(50, width / height, 0.1, 1000)
    camera.position.set(0, 0, 5)
    
    // Crear renderer
    renderer = new THREE.WebGLRenderer({ 
      alpha: true, 
      antialias: true,
      powerPreference: 'high-performance'
    })
    renderer.setSize(width, height)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    renderer.outputColorSpace = THREE.SRGBColorSpace
    
    // Añadir el canvas al DOM solo si el componente está montado
    if (isMounted.value && containerRef.value && renderer.domElement) {
      try {
        containerRef.value.appendChild(renderer.domElement)
      } catch (e) {
        console.error('Error appending renderer to DOM:', e)
        isLoading.value = false
        return
      }
    } else {
      console.warn('Component not mounted or container not available')
      isLoading.value = false
      return
    }
    
    // Iluminación
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.6)
    scene.add(ambientLight)
    
    const directionalLight1 = new THREE.DirectionalLight(0xffffff, 0.8)
    directionalLight1.position.set(5, 5, 5)
    scene.add(directionalLight1)
    
    const directionalLight2 = new THREE.DirectionalLight(0xffffff, 0.4)
    directionalLight2.position.set(-5, -5, -5)
    scene.add(directionalLight2)
    
    // Cargar modelo GLB con loading manager para progreso
    const loadingManager = new THREE.LoadingManager()
    
    loadingManager.onProgress = (url, itemsLoaded, itemsTotal) => {
      const percentage = Math.min((itemsLoaded / itemsTotal) * 100, 100)
      if (percentage < 100) {
        console.log(`Loading model: ${Math.round(percentage)}%`)
      }
    }
    
    loadingManager.onLoad = () => {
      console.log('Model loading complete')
    }
    
    const loader = new GLTFLoader(loadingManager)
    
    // Usar directamente la prop que ya viene con el path correcto desde el componente padre
    const modelUrl = props.modelPath
    
    console.log('Loading model from URL:', modelUrl)
    console.log('Model path prop:', props.modelPath)
    
    loader.load(
      modelUrl,
      (gltf) => {
        // Verificar que el componente aún está montado antes de continuar
        if (!isMounted.value || !containerRef.value || !renderer || !scene || !camera) {
          console.warn('Component unmounted before model could be loaded')
          isLoading.value = false
          return
        }
        
        model = gltf.scene
        
        // Calcular el tamaño del modelo y ajustar la cámara
        const box = new THREE.Box3().setFromObject(model)
        const center = box.getCenter(new THREE.Vector3())
        const size = box.getSize(new THREE.Vector3())
        
        // Centrar el modelo
        model.position.x += (model.position.x - center.x)
        model.position.y += (model.position.y - center.y)
        model.position.z += (model.position.z - center.z)
        
        // Ajustar cámara para que el modelo quepa en vista
        const maxDim = Math.max(size.x, size.y, size.z)
        const fov = camera.fov * (Math.PI / 180)
        let cameraZ = Math.abs(maxDim / 2 / Math.tan(fov / 2))
        cameraZ *= 1.5 // Añadir un poco de espacio
        camera.position.set(0, 0, cameraZ)
        camera.lookAt(0, 0, 0)
        
        scene.add(model)
        
        // Inicializar controles de órbita después de cargar el modelo
        if (isMounted.value && renderer && renderer.domElement) {
          const OrbitControlsClass = controlsModule.OrbitControls || controlsModule.default?.OrbitControls || controlsModule.default
          controls = new OrbitControlsClass(camera, renderer.domElement)
          controls.enableDamping = true // Suaviza el movimiento
          controls.dampingFactor = 0.05
          controls.enableZoom = true // Permitir zoom con la rueda del mouse
          controls.enablePan = false // Desactivar pan (mover lateralmente)
          controls.minDistance = cameraZ * 0.5 // Distancia mínima de zoom (50% de la distancia inicial)
          controls.maxDistance = cameraZ * 3 // Distancia máxima de zoom (3x la distancia inicial)
          controls.autoRotate = props.autoRotate // Rotación automática si está habilitada
          controls.autoRotateSpeed = props.rotationSpeed * 100 // Velocidad de rotación automática
          controls.target.set(0, 0, 0) // Centrar el objetivo en el origen
        }
        
        isLoading.value = false
        
        // Iniciar animación solo si el componente está montado
        if (isMounted.value) {
          animate()
        }
      },
      (progress) => {
        // Callback de progreso opcional
        if (progress && progress.lengthComputable) {
          const percentage = Math.min((progress.loaded / progress.total) * 100, 100)
          console.log(`Loading model: ${Math.round(percentage)}%`)
        } else if (typeof progress === 'number') {
          const percentage = Math.min(progress, 100)
          console.log(`Loading model: ${Math.round(percentage)}%`)
        }
      },
      (error) => {
        console.error('Error loading GLB model:', error)
        console.error('Model URL attempted:', modelUrl)
        console.error('Full error details:', {
          message: error?.message,
          stack: error?.stack,
          url: modelUrl
        })
        isLoading.value = false
      }
    )
    
    // Detectar cuando el usuario interactúa con los controles
    onStartInteraction = () => {
      if (controls && isMounted.value) {
        controls.autoRotate = false
      }
      // Limpiar timeout anterior si existe
      if (interactionTimeout) {
        clearTimeout(interactionTimeout)
        interactionTimeout = null
      }
    }
    
    onEndInteraction = () => {
      // Reactivar rotación automática después de 2 segundos sin interacción
      if (interactionTimeout) {
        clearTimeout(interactionTimeout)
      }
      interactionTimeout = setTimeout(() => {
        if (controls && props.autoRotate && isMounted.value) {
          controls.autoRotate = true
        }
      }, 2000)
    }
    
    if (renderer && renderer.domElement && isMounted.value) {
      renderer.domElement.addEventListener('mousedown', onStartInteraction)
      renderer.domElement.addEventListener('mouseup', onEndInteraction)
      renderer.domElement.addEventListener('wheel', onStartInteraction)
    }
    
    // Manejar resize
    handleResize = () => {
      if (!containerRef.value || !camera || !renderer || !isMounted.value) return
      
      const width = containerRef.value.clientWidth
      const height = containerRef.value.clientHeight
      
      if (width > 0 && height > 0) {
        camera.aspect = width / height
        camera.updateProjectionMatrix()
        renderer.setSize(width, height)
      }
    }
    
    if (process.client) {
      window.addEventListener('resize', handleResize)
    }
  } catch (error) {
    console.error('Error initializing Three.js:', error)
    isLoading.value = false
  }
}

const animate = () => {
  if (!scene || !camera || !renderer || !isMounted.value) {
    // Si el componente ya no está montado, cancelar la animación
    if (animationId) {
      cancelAnimationFrame(animationId)
      animationId = null
    }
    return
  }
  
  animationId = requestAnimationFrame(animate)
  
  // Actualizar controles (necesario para damping y rotación automática)
  if (controls && isMounted.value) {
    try {
      controls.update()
    } catch (e) {
      // Ignorar errores silenciosamente
    }
  }
  
  // Renderizar solo si el componente está montado
  if (isMounted.value && renderer && scene && camera) {
    try {
      renderer.render(scene, camera)
    } catch (e) {
      // Ignorar errores silenciosamente
    }
  }
}

const cleanup = () => {
  // Limpiar observer si existe
  if (observer && containerRef.value) {
    try {
      observer.unobserve(containerRef.value)
    } catch (e) {
      // Ignorar errores
    }
    observer = null
  }
  
  // Marcar como desmontado PRIMERO para detener todas las operaciones
  isMounted.value = false
  shouldLoad.value = false
  
  // Cancelar animación INMEDIATAMENTE
  if (animationId) {
    cancelAnimationFrame(animationId)
    animationId = null
  }
  
  // Limpiar timeout de interacción
  if (interactionTimeout) {
    clearTimeout(interactionTimeout)
    interactionTimeout = null
  }
  
  // Remover event listeners del resize
  if (handleResize && process.client) {
    try {
      window.removeEventListener('resize', handleResize)
    } catch (e) {
      // Ignorar errores
    }
    handleResize = null
  }
  
  // Remover event listeners del renderer ANTES de remover el canvas
  if (renderer && renderer.domElement) {
    if (onStartInteraction) {
      try {
        renderer.domElement.removeEventListener('mousedown', onStartInteraction)
      } catch (e) {}
    }
    if (onEndInteraction) {
      try {
        renderer.domElement.removeEventListener('mouseup', onEndInteraction)
        renderer.domElement.removeEventListener('wheel', onStartInteraction)
      } catch (e) {}
    }
    onStartInteraction = null
    onEndInteraction = null
  }
  
  // Limpiar controles ANTES de remover el canvas
  if (controls) {
    try {
      controls.dispose()
    } catch (e) {
      // Ignorar errores
    }
    controls = null
  }
  
  // CRÍTICO: Remover el canvas del DOM ANTES de que Vue lo intente
  // Esto debe hacerse de forma muy agresiva y segura
  if (renderer && renderer.domElement) {
    const canvas = renderer.domElement
    
    // Intentar múltiples formas de remover el canvas
    try {
      // Método 1: Si tiene parentNode y es el containerRef
      if (canvas.parentNode && containerRef.value && canvas.parentNode === containerRef.value) {
        containerRef.value.removeChild(canvas)
      }
      // Método 2: Si tiene parentNode pero containerRef ya no existe
      else if (canvas.parentNode) {
        canvas.parentNode.removeChild(canvas)
      }
      // Método 3: Si el canvas todavía existe en algún lugar del DOM
      else if (document.body.contains(canvas)) {
        document.body.removeChild(canvas)
      }
    } catch (e) {
      // Si falla todo, intentar remover por ID o clase
      try {
        if (canvas.id) {
          const el = document.getElementById(canvas.id)
          if (el && el.parentNode) {
            el.parentNode.removeChild(el)
          }
        }
      } catch (e2) {
        // Ignorar todos los errores - el elemento puede ya estar removido
      }
    }
    
    // Dispose del renderer
    try {
      renderer.dispose()
    } catch (e) {
      // Ignorar errores
    }
    renderer = null
  }
  
  // Limpiar la escena y sus recursos
  if (scene) {
    try {
      scene.traverse((object) => {
        if (object && object.isMesh) {
          if (object.geometry) {
            try {
              object.geometry.dispose()
            } catch (e) {}
          }
          if (object.material) {
            try {
              if (Array.isArray(object.material)) {
                object.material.forEach((material) => {
                  if (material) {
                    try {
                      material.dispose()
                    } catch (e) {}
                  }
                })
              } else {
                object.material.dispose()
              }
            } catch (e) {}
          }
        }
      })
    } catch (e) {
      // Ignorar errores
    }
    scene = null
  }
  
  model = null
  camera = null
}

onMounted(async () => {
  if (process.client) {
    isMounted.value = true
    // Esperar un tick para asegurar que el DOM esté listo
    await nextTick()
    if (isMounted.value && containerRef.value) {
      // Usar Intersection Observer para lazy loading
      if ('IntersectionObserver' in window) {
        observer = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting && !shouldLoad.value) {
                shouldLoad.value = true
                initThreeJS()
                // Dejar de observar una vez que se inicia la carga
                if (observer && containerRef.value) {
                  observer.unobserve(containerRef.value)
                }
              }
            })
          },
          {
            rootMargin: '50px', // Comenzar a cargar 50px antes de que sea visible
            threshold: 0.1
          }
        )
        observer.observe(containerRef.value)
      } else {
        // Fallback para navegadores sin Intersection Observer
        shouldLoad.value = true
        initThreeJS()
      }
    }
  }
})

onBeforeUnmount(() => {
  cleanup()
})
</script>

<style scoped>
.model-3d-container {
  background: transparent;
}

.model-3d-container canvas {
  display: block;
  width: 100%;
  height: 100%;
}
</style>
