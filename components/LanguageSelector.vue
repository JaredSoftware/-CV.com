<template>
  <div class="fixed top-4 left-4 z-50" ref="dropdownRef">
    <div class="relative">
      <button
        @click="toggleDropdown"
        class="p-3 rounded-lg bg-card-light dark:bg-card-dark border border-border-light dark:border-border-dark shadow-soft hover:shadow-lg transition-all duration-300 flex items-center gap-2"
        :aria-label="$t('languageSelector.selectLanguage')"
      >
        <span class="material-symbols-outlined text-text-primary-light dark:text-text-primary-dark">language</span>
        <span class="text-sm font-medium text-text-primary-light dark:text-text-primary-dark uppercase">{{ currentLocale }}</span>
        <span class="material-symbols-outlined text-text-primary-light dark:text-text-primary-dark !text-sm transition-transform duration-300" :class="{ 'rotate-180': isOpen }">expand_more</span>
      </button>
      
      <div
        v-if="isOpen"
        class="absolute top-full left-0 mt-2 bg-card-light dark:bg-card-dark border border-border-light dark:border-border-dark rounded-lg shadow-lg min-w-[120px] overflow-hidden"
      >
        <button
          v-for="locale in availableLocales"
          :key="locale.code"
          @click="switchLanguage(locale.code)"
          class="w-full px-4 py-2 text-left text-sm text-text-primary-light dark:text-text-primary-dark hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors flex items-center justify-between"
          :class="{ 'bg-blue-50 dark:bg-blue-900/20 font-semibold': locale.code === currentLocale }"
        >
          <span>{{ locale.name }}</span>
          <span v-if="locale.code === currentLocale" class="material-symbols-outlined !text-sm text-primary dark:text-blue-400">check</span>
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
const { locale, locales, setLocale } = useI18n()
const currentLocale = computed(() => locale.value)
const availableLocales = computed(() => locales.value)
const isOpen = ref(false)
const dropdownRef = ref(null)

const toggleDropdown = () => {
  isOpen.value = !isOpen.value
}

const switchLanguage = async (lang) => {
  await setLocale(lang)
  isOpen.value = false
}

// Cerrar el dropdown al hacer clic fuera
const handleClickOutside = (event) => {
  if (isOpen.value && dropdownRef.value && !dropdownRef.value.contains(event.target)) {
    isOpen.value = false
  }
}

onMounted(() => {
  if (process.client) {
    document.addEventListener('click', handleClickOutside)
  }
})

onUnmounted(() => {
  if (process.client) {
    document.removeEventListener('click', handleClickOutside)
  }
})
</script>

