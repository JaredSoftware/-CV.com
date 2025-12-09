<template>
  <div>
    <LanguageSelector v-if="showLanguageSelector" />
    <ThemeToggle v-if="showThemeToggle" />
    <NuxtPage />
  </div>
</template>

<script setup>
const route = useRoute()
const { locale } = useI18n()

const showThemeToggle = computed(() => {
  // No mostrar el toggle en la página CV ATS
  return route.path !== '/cv-ats' && !route.path.includes('/cv-ats')
})

const showLanguageSelector = computed(() => {
  // No mostrar el selector de idioma en la página CV ATS
  return route.path !== '/cv-ats' && !route.path.includes('/cv-ats')
})

watch(locale, (newLocale) => {
  if (process.client) {
    document.documentElement.lang = newLocale
  }
})

const router = useRouter()
const basePath = computed(() => {
  const base = router.options.history?.base || '/cv/'
  return base.replace(/\/$/, '') + '/'
})

useHead({
  htmlAttrs: {
    class: 'light',
    lang: locale.value
  },
  link: [
    {
      rel: 'stylesheet',
      href: 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap'
    },
    {
      rel: 'stylesheet',
      href: 'https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200'
    },
    // Precargar el modelo 3D con baja prioridad para no bloquear otros recursos
    {
      rel: 'preload',
      href: `${basePath.value}robot.glb`,
      as: 'fetch',
      crossorigin: 'anonymous',
      fetchpriority: 'low'
    }
  ]
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
