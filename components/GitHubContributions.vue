<template>
  <section class="bg-card-light dark:bg-card-dark rounded-xl shadow-soft p-6">
    <div class="flex items-center justify-between mb-4">
      <h3 class="text-lg font-bold text-text-primary-light dark:text-white flex items-center gap-2">
        <svg aria-hidden="true" class="w-5 h-5 text-primary dark:text-blue-400" fill="currentColor" viewBox="0 0 24 24">
          <path clip-rule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.168 6.839 9.492.5.092.682-.217.682-.482 0-.237-.009-.868-.014-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.031-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.338 4.695-4.566 4.942.359.308.678.92.678 1.852 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.001 10.001 0 0022 12c0-5.523-4.477-10-10-10z" fill-rule="evenodd"></path>
        </svg>
        {{ $t('sections.githubContributions') }}
      </h3>
      <select 
        v-model="selectedYear" 
        class="text-sm bg-background-light dark:bg-background-dark border border-border-light dark:border-border-dark rounded-lg px-3 py-1.5 text-text-primary-light dark:text-text-primary-dark focus:outline-none focus:ring-2 focus:ring-primary dark:focus:ring-blue-400"
      >
        <option v-for="year in availableYears" :key="year" :value="year">{{ year }}</option>
      </select>
    </div>

    <!-- Gráfico de contribuciones usando SVG -->
    <div class="w-full overflow-hidden rounded-lg bg-white dark:bg-gray-800 p-4">
      <img
        :src="contributionsUrl"
        :alt="`GitHub contributions for ${username}`"
        class="w-full h-auto"
        loading="lazy"
        @error="handleImageError"
      />
    </div>

    <!-- Opción 2: Enlace directo a GitHub (fallback si el iframe no funciona) -->
    <div class="mt-4 pt-4 border-t border-border-light dark:border-border-dark">
      <a 
        :href="`https://github.com/${username}`" 
        target="_blank"
        class="text-sm text-primary dark:text-blue-400 hover:underline flex items-center gap-2"
      >
        <span>{{ $t('githubContributions.viewOnGitHub') }}</span>
        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
        </svg>
      </a>
    </div>
  </section>
</template>

<script setup>
import { computed, ref } from 'vue'

const props = defineProps({
  username: {
    type: String,
    default: 'JaredSoftware'
  },
  year: {
    type: Number,
    default: () => new Date().getFullYear()
  },
  showTotal: {
    type: Boolean,
    default: true
  },
  showLegend: {
    type: Boolean,
    default: true
  }
})

const imageError = ref(false)
const selectedYear = ref(props.year || new Date().getFullYear())

// Generar lista de años disponibles (últimos 6 años)
const availableYears = computed(() => {
  const currentYear = new Date().getFullYear()
  const years = []
  for (let i = currentYear; i >= currentYear - 5; i--) {
    years.push(i)
  }
  return years
})

// Construir la URL del servicio con parámetros
const contributionsUrl = computed(() => {
  const baseUrl = `https://github-contributions-api.deno.dev/${props.username}.svg`
  const params = new URLSearchParams()
  
  // Fechas para el año seleccionado
  const from = `${selectedYear.value}-01-01`
  const to = `${selectedYear.value}-12-31`
  params.append('from', from)
  params.append('to', to)
  
  // Colores para modo oscuro/claro
  if (!props.showTotal) {
    params.append('no-total', 'true')
  }
  if (!props.showLegend) {
    params.append('no-legend', 'true')
  }
  
  // Color de fondo según el tema (se puede ajustar)
  // params.append('bg', 'ffffff') // blanco para modo claro
  // params.append('frame', '1f2937') // gris oscuro para modo oscuro
  
  return `${baseUrl}?${params.toString()}`
})

const handleImageError = () => {
  imageError.value = true
  console.error('Error al cargar el gráfico de contribuciones')
}
</script>

