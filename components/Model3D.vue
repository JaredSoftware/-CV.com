<template>
  <ClientOnly>
    <div ref="containerRef" class="model-3d-container w-full h-64 md:h-80 flex items-center justify-center overflow-hidden rounded-lg relative">
      <div v-if="isLoading" class="absolute inset-0 flex items-center justify-center bg-background-light/80 dark:bg-background-dark/80 rounded-lg">
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
import { ref, onMounted, onUnmounted, nextTick } from 'vue'

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
let scene = null
let camera = null
let renderer = null
let model = null
let animationId = null
let THREE = null
let GLTFLoader = null
let controls = null

const initThreeJS = async () => {
  if (!containerRef.value || !process.client) return
  
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
    containerRef.value.appendChild(renderer.domElement)
    
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
      const percentage = (itemsLoaded / itemsTotal) * 100
      if (percentage < 100) {
        console.log(`Loading model: ${percentage.toFixed(0)}%`)
      }
    }
    
    const loader = new GLTFLoader(loadingManager)
    
    // Construir la URL completa del modelo - usar directamente la prop que ya viene con el path correcto
    let modelUrl = props.modelPath
    
    // Si la ruta no comienza con http/https, construir la URL completa
    if (!modelUrl.startsWith('http')) {
      // Si ya tiene el path completo con /cv/, usarlo directamente
      if (modelUrl.startsWith('/cv/')) {
        // URL relativa correcta
        modelUrl = modelUrl
      } else if (modelUrl.startsWith('/')) {
        // Si comienza con / pero no tiene /cv/, agregarlo
        modelUrl = `/cv${modelUrl}`
      } else {
        // Si no comienza con /, agregar el base path completo
        modelUrl = `/cv/${modelUrl}`
      }
    }
    
    console.log('Loading model from URL:', modelUrl)
    console.log('Model path prop:', props.modelPath)
    
    loader.load(
      modelUrl,
      (gltf) => {
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
        
        isLoading.value = false
        animate()
      },
      (progress) => {
        // Callback de progreso opcional
        if (progress && progress.lengthComputable) {
          const percentage = (progress.loaded / progress.total) * 100
          console.log(`Loading model: ${percentage.toFixed(0)}%`)
        } else if (typeof progress === 'number') {
          console.log(`Loading model: ${progress}%`)
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
    let interactionTimeout = null
    const onStartInteraction = () => {
      if (controls) {
        controls.autoRotate = false
      }
      // Limpiar timeout anterior si existe
      if (interactionTimeout) {
        clearTimeout(interactionTimeout)
      }
    }
    const onEndInteraction = () => {
      // Reactivar rotación automática después de 2 segundos sin interacción
      if (interactionTimeout) {
        clearTimeout(interactionTimeout)
      }
      interactionTimeout = setTimeout(() => {
        if (controls && props.autoRotate) {
          controls.autoRotate = true
        }
      }, 2000)
    }
    
    renderer.domElement.addEventListener('mousedown', onStartInteraction)
    renderer.domElement.addEventListener('mouseup', onEndInteraction)
    renderer.domElement.addEventListener('wheel', onStartInteraction)
    
    // Manejar resize
    const handleResize = () => {
      if (!containerRef.value || !camera || !renderer) return
      
      const width = containerRef.value.clientWidth
      const height = containerRef.value.clientHeight
      
      camera.aspect = width / height
      camera.updateProjectionMatrix()
      renderer.setSize(width, height)
    }
    
    window.addEventListener('resize', handleResize)
    
    onUnmounted(() => {
      window.removeEventListener('resize', handleResize)
      if (interactionTimeout) {
        clearTimeout(interactionTimeout)
      }
      if (renderer && renderer.domElement) {
        renderer.domElement.removeEventListener('mousedown', onStartInteraction)
        renderer.domElement.removeEventListener('mouseup', onEndInteraction)
        renderer.domElement.removeEventListener('wheel', onStartInteraction)
      }
    })
  } catch (error) {
    console.error('Error initializing Three.js:', error)
    isLoading.value = false
  }
}

const animate = () => {
  if (!scene || !camera || !renderer) return
  
  animationId = requestAnimationFrame(animate)
  
  // Actualizar controles (necesario para damping y rotación automática)
  if (controls) {
    controls.update()
  }
  
  renderer.render(scene, camera)
}

const cleanup = () => {
  if (animationId) {
    cancelAnimationFrame(animationId)
    animationId = null
  }
  
  if (controls) {
    controls.dispose()
    controls = null
  }
  
  if (renderer && renderer.domElement) {
    try {
      // Verificar que el elemento aún existe y tiene un parentNode antes de removerlo
      if (containerRef.value && renderer.domElement.parentNode === containerRef.value) {
        containerRef.value.removeChild(renderer.domElement)
      }
    } catch (e) {
      console.warn('Error removing renderer DOM element:', e)
    }
    renderer.dispose()
    renderer = null
  }
  
  if (scene) {
    scene.traverse((object) => {
      if (object.isMesh) {
        object.geometry?.dispose()
        if (object.material) {
          if (Array.isArray(object.material)) {
            object.material.forEach((material) => material.dispose())
          } else {
            object.material.dispose()
          }
        }
      }
    })
    scene = null
  }
  
  model = null
  camera = null
}

onMounted(async () => {
  if (process.client) {
    // Esperar un tick para asegurar que el DOM esté listo
    await nextTick()
    initThreeJS()
  }
})

onUnmounted(() => {
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
