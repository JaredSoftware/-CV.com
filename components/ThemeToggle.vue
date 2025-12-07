<template>
  <button
    @click="toggleTheme"
    class="fixed top-4 right-4 z-50 p-3 rounded-lg bg-card-light dark:bg-card-dark border border-border-light dark:border-border-dark shadow-soft hover:shadow-lg transition-all duration-300 group"
    :aria-label="currentTheme === 'dark' ? $t('theme.toLight') : $t('theme.toDark')"
    :title="$t('theme.toggle')"
  >
    <span 
      v-if="currentTheme === 'dark'" 
      class="material-symbols-outlined text-text-primary-light dark:text-text-primary-dark !text-2xl transition-transform duration-300 group-hover:rotate-180"
    >
      light_mode
    </span>
    <span 
      v-else 
      class="material-symbols-outlined text-text-primary-light dark:text-text-primary-dark !text-2xl transition-transform duration-300 group-hover:rotate-180"
    >
      dark_mode
    </span>
  </button>
</template>

<script setup>
const currentTheme = ref('light')

onMounted(() => {
  // Verificar si hay una preferencia guardada o usar la del sistema
  if (process.client) {
    const savedTheme = localStorage.getItem('theme')
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
    
    if (savedTheme) {
      currentTheme.value = savedTheme
    } else if (systemPrefersDark) {
      currentTheme.value = 'dark'
    } else {
      currentTheme.value = 'light'
    }
    
    updateTheme(currentTheme.value)
  }
})

const toggleTheme = () => {
  currentTheme.value = currentTheme.value === 'dark' ? 'light' : 'dark'
  updateTheme(currentTheme.value)
  
  // Guardar preferencia
  if (process.client) {
    localStorage.setItem('theme', currentTheme.value)
  }
}

const updateTheme = (theme) => {
  if (process.client) {
    const html = document.documentElement
    html.classList.remove('light', 'dark')
    html.classList.add(theme)
  }
}
</script>

