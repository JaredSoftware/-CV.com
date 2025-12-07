<template>
  <div>
    <ThemeToggle v-if="showThemeToggle" />
    <NuxtPage />
  </div>
</template>

<script setup>
const route = useRoute()
const showThemeToggle = computed(() => {
  // No mostrar el toggle en la página CV ATS
  return route.path !== '/cv-ats' && route.path !== '/dist/cv-ats'
})

useHead({
  htmlAttrs: {
    class: 'light',
    lang: 'en'
  },
  script: [
    {
      src: 'https://cdn.tailwindcss.com?plugins=forms,container-queries'
    }
  ],
  link: [
    {
      rel: 'stylesheet',
      href: 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap'
    },
    {
      rel: 'stylesheet',
      href: 'https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200'
    }
  ]
})

onMounted(() => {
  if (process.client) {
    // Asegurarse de que el script de configuración esté antes del CDN
    const existingConfig = document.getElementById('tailwind-config')
    if (!existingConfig) {
      const script = document.createElement('script')
      script.id = 'tailwind-config'
      script.type = 'text/javascript'
      script.textContent = `
        tailwind.config = {
          darkMode: "class",
          theme: {
            extend: {
              colors: {
                "primary": {
                  DEFAULT: "#2563eb",
                  hover: "#1d4ed8"
                },
                "background-light": "#f8f9fa",
                "background-dark": "#0d1117",
                "card-light": "#ffffff",
                "card-dark": "#161b22",
                "text-primary-light": "#1f2937",
                "text-primary-dark": "#e5e7eb",
                "text-secondary-light": "#4b5563",
                "text-secondary-dark": "#9ca3af",
                "border-light": "#e5e7eb",
                "border-dark": "#30363d",
              },
              fontFamily: {
                "display": ["Inter", "sans-serif"]
              },
              borderRadius: {
                "DEFAULT": "0.5rem",
                "lg": "0.75rem",
                "xl": "1rem",
                "full": "9999px"
              },
              boxShadow: {
                'soft': '0 4px 6px -1px rgb(0 0 0 / 0.05), 0 2px 4px -2px rgb(0 0 0 / 0.05)',
              }
            },
          },
        }
      `
      
      // Insertar antes del script de Tailwind CDN
      const tailwindScript = document.querySelector('script[src*="cdn.tailwindcss.com"]')
      if (tailwindScript) {
        tailwindScript.parentNode.insertBefore(script, tailwindScript)
      } else {
        document.head.appendChild(script)
      }
    }
  }
})
</script>

<style>
.material-symbols-outlined {
  font-variation-settings:
  'FILL' 0,
  'wght' 400,
  'GRAD' 0,
  'opsz' 24
}
</style>
