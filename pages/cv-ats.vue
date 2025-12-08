<template>
  <div>
    <!-- Botón para descargar PDF -->
    <div id="pdf-button" style="position: fixed; top: 20px; right: 20px; z-index: 1000;">
      <button 
        @click="downloadPDF"
        style="padding: 10px 20px; background: #2563eb; color: white; border: none; border-radius: 5px; cursor: pointer; font-size: 14px; font-weight: bold; box-shadow: 0 2px 4px rgba(0,0,0,0.2);"
      >
        📥 {{ $t('cvAts.downloadPDF') }}
      </button>
    </div>
    
    <div id="cv-ats" class="cv-ats-container">
      <!-- Header -->
      <header class="cv-header">
        <h1 class="cv-name">{{ $t('name') }}</h1>
        <div class="cv-contact">
          <span>{{ $t('cvAts.contact.location') }}</span> | 
          <span>{{ $t('cvAts.contact.email') }}</span> | 
          <span>{{ $t('cvAts.contact.phone') }}</span> | 
          <span>{{ $t('cvAts.contact.github') }}</span> | 
          <span>{{ $t('cvAts.contact.linkedin') }}</span> | 
          <span>{{ $t('cvAts.contact.portfolio') }}</span>
        </div>
      </header>

      <!-- Professional Summary -->
      <section class="cv-section">
        <h2 class="cv-section-title">{{ $t('cvAts.professionalSummary.title') }}</h2>
        <p class="cv-text">
          {{ $t('cvAts.professionalSummary.content') }}
        </p>
      </section>

      <!-- Technical Skills -->
      <section class="cv-section">
        <h2 class="cv-section-title">{{ $t('cvAts.technicalSkills.title') }}</h2>
        <div class="cv-skills">
          <p><strong>{{ $t('cvAts.technicalSkills.languages') }}</strong> {{ $t('cvAts.technicalSkills.languagesList') }}</p>
          <p><strong>{{ $t('cvAts.technicalSkills.frameworks') }}</strong> {{ $t('cvAts.technicalSkills.frameworksList') }}</p>
          <p><strong>{{ $t('cvAts.technicalSkills.databases') }}</strong> {{ $t('cvAts.technicalSkills.databasesList') }}</p>
          <p><strong>{{ $t('cvAts.technicalSkills.frontend') }}</strong> {{ $t('cvAts.technicalSkills.frontendList') }}</p>
          <p><strong>{{ $t('cvAts.technicalSkills.devops') }}</strong> {{ $t('cvAts.technicalSkills.devopsList') }}</p>
          <p><strong>{{ $t('cvAts.technicalSkills.architecture') }}</strong> {{ $t('cvAts.technicalSkills.architectureList') }}</p>
          <p><strong>{{ $t('cvAts.technicalSkills.os') }}</strong> {{ $t('cvAts.technicalSkills.osList') }}</p>
          <p><strong>{{ $t('cvAts.technicalSkills.methodologies') }}</strong> {{ $t('cvAts.technicalSkills.methodologiesList') }}</p>
          <p><strong>{{ $t('cvAts.technicalSkills.testing') }}</strong> {{ $t('cvAts.technicalSkills.testingList') }}</p>
        </div>
      </section>

      <!-- Work Experience -->
      <section class="cv-section">
        <h2 class="cv-section-title">{{ $t('cvAts.workExperience.title') }}</h2>
        
        <div class="cv-job">
          <div class="cv-job-header">
            <strong>{{ $t('cvAts.workExperience.freelance.position') }}</strong> — {{ $t('cvAts.workExperience.freelance.company') }}
          </div>
          <div class="cv-job-date">{{ $t('cvAts.workExperience.freelance.period') }}</div>
          <ul class="cv-job-list">
            <li v-for="(point, index) in freelancePoints" :key="index">{{ point }}</li>
          </ul>
        </div>

        <div class="cv-job">
          <div class="cv-job-header">
            <strong>{{ $t('cvAts.workExperience.bercontDeveloper.position') }}</strong> — {{ $t('cvAts.workExperience.bercontDeveloper.company') }}
          </div>
          <div class="cv-job-date">{{ $t('cvAts.workExperience.bercontDeveloper.period') }}</div>
          <ul class="cv-job-list">
            <li v-for="(point, index) in bercontDeveloperPoints" :key="index">{{ point }}</li>
          </ul>
        </div>

        <div class="cv-job">
          <div class="cv-job-header">
            <strong>{{ $t('cvAts.workExperience.internship.position') }}</strong> — {{ $t('cvAts.workExperience.internship.company') }}
          </div>
          <div class="cv-job-date">{{ $t('cvAts.workExperience.internship.period') }}</div>
          <ul class="cv-job-list">
            <li v-for="(point, index) in internshipPoints" :key="index">{{ point }}</li>
          </ul>
        </div>
      </section>

      <!-- Education -->
      <section class="cv-section">
        <h2 class="cv-section-title">{{ $t('cvAts.education.title') }}</h2>
        <div class="cv-education">
          <p>{{ $t('cvAts.education.technician') }}</p>
          <p>{{ $t('cvAts.education.highschool') }}</p>
        </div>
      </section>

      <!-- Additional Skills & Languages -->
      <section class="cv-section">
        <h2 class="cv-section-title">{{ $t('cvAts.aptitudesAndLanguages.title') }}</h2>
        <div class="cv-text">
          <p><strong>{{ $t('cvAts.aptitudesAndLanguages.aptitudes') }}</strong> {{ $t('cvAts.aptitudesAndLanguages.aptitudesList') }}</p>
          <p><strong>{{ $t('cvAts.aptitudesAndLanguages.languages') }}</strong> {{ $t('cvAts.aptitudesAndLanguages.languagesList') }}</p>
        </div>
      </section>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'

const { generatePDF } = usePDFGenerator()
const { t, tm, messages, locale } = useI18n()

// Función para extraer strings de arrays de traducciones
const extractStrings = (items) => {
  if (!items || !Array.isArray(items)) {
    return []
  }
  
  return items.map(item => {
    if (typeof item === 'string') {
      return item
    }
    if (item && typeof item === 'object') {
      if (item.body && typeof item.body === 'object' && typeof item.body.static === 'string') {
        return item.body.static
      }
      if (typeof item.static === 'string') {
        return item.static
      }
      if (typeof item.source === 'string') {
        return item.source
      }
    }
    return ''
  }).filter(item => item && typeof item === 'string' && item.length > 0)
}

// Función para obtener arrays de traducciones
const getTranslationArray = (key) => {
  try {
    const result = tm(key)
    if (Array.isArray(result)) {
      return extractStrings(result)
    }
    const localeMessages = messages.value?.[locale.value]
    if (localeMessages) {
      const keys = key.split('.')
      let value = localeMessages
      for (const k of keys) {
        if (value && typeof value === 'object' && k in value) {
          value = value[k]
        } else {
          value = null
          break
        }
      }
      if (Array.isArray(value)) {
        return extractStrings(value)
      }
    }
    return []
  } catch (e) {
    console.error('Error loading translation:', key, e)
    return []
  }
}

const freelancePoints = computed(() => getTranslationArray('cvAts.workExperience.freelance.points'))
const bercontDeveloperPoints = computed(() => getTranslationArray('cvAts.workExperience.bercontDeveloper.points'))
const internshipPoints = computed(() => getTranslationArray('cvAts.workExperience.internship.points'))

const downloadPDF = async () => {
  try {
    const fileName = locale.value === 'es' 
      ? 'CV_Jared_Wesley_Vargas_Cortes_ATS.pdf'
      : 'CV_Jared_Wesley_Vargas_Cortes_ATS.pdf'
    await generatePDF('cv-ats', fileName)
  } catch (error) {
    console.error('Error al generar PDF:', error)
    const errorMessage = locale.value === 'es'
      ? 'Error al generar el PDF. Por favor, intenta usar la función de imprimir del navegador (Ctrl+P).'
      : 'Error generating PDF. Please try using the browser print function (Ctrl+P).'
    alert(errorMessage)
  }
}
</script>

<style>
.cv-ats-container {
  max-width: 210mm;
  width: 210mm;
  max-height: 297mm;
  margin: 0 auto;
  padding: 12mm;
  background: white;
  color: #000;
  font-family: 'Arial', 'Calibri', 'Helvetica', sans-serif;
  font-size: 10pt;
  line-height: 1.3;
  box-sizing: border-box;
  overflow: hidden;
}

.cv-header {
  margin-bottom: 12px;
  border-bottom: 2px solid #000;
  padding-bottom: 8px;
}

.cv-name {
  font-size: 20pt;
  font-weight: bold;
  margin: 0 0 6px 0;
  color: #000;
}

.cv-contact {
  font-size: 9pt;
  color: #333;
  line-height: 1.4;
}

.cv-section {
  margin-bottom: 10px;
  page-break-inside: avoid;
}

.cv-section-title {
  font-size: 12pt;
  font-weight: bold;
  margin: 0 0 6px 0;
  color: #000;
  text-transform: uppercase;
  border-bottom: 1px solid #ccc;
  padding-bottom: 3px;
}

.cv-text {
  margin: 0;
  text-align: justify;
  font-size: 10pt;
  line-height: 1.4;
}

.cv-skills p {
  margin: 2px 0;
  font-size: 10pt;
  line-height: 1.2;
}

.cv-job {
  margin-bottom: 12px;
  page-break-inside: avoid;
}

.cv-job-header {
  font-size: 11pt;
  font-weight: bold;
  margin-bottom: 2px;
}

.cv-job-date {
  font-size: 9pt;
  font-style: italic;
  margin-bottom: 5px;
  color: #555;
}

.cv-job-list {
  margin: 5px 0 0 18px;
  padding: 0;
  list-style-type: disc;
}

.cv-job-list li {
  margin: 3px 0;
  font-size: 10pt;
  line-height: 1.3;
}

.cv-education p {
  margin: 5px 0;
  font-size: 10pt;
  line-height: 1.3;
}

/* Estilos para impresión/PDF */
@media print {
  body {
    background: white;
    margin: 0;
    padding: 0;
  }
  
  .cv-ats-container {
    padding: 15mm;
    margin: 0;
    box-shadow: none;
  }
  
  .cv-section {
    page-break-inside: avoid;
  }
  
  .cv-job {
    page-break-inside: avoid;
  }
  
  /* Ocultar botón al imprimir */
  #pdf-button {
    display: none !important;
  }
}

/* Mostrar en pantalla para preview */
@media screen {
  body {
    background: #f5f5f5;
    margin: 0;
    padding: 20px;
  }
  
  .cv-ats-container {
    background: white;
    box-shadow: 0 0 10px rgba(0,0,0,0.1);
    margin: 20px auto;
  }
}
</style>
