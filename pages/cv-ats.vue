<template>
  <div>
    <!-- Botón para descargar PDF -->
    <div id="pdf-button" style="position: fixed; top: 20px; right: 20px; z-index: 1000;">
      <button 
        @click="downloadPDF"
        style="padding: 10px 20px; background: #2563eb; color: white; border: none; border-radius: 5px; cursor: pointer; font-size: 14px; font-weight: bold; box-shadow: 0 2px 4px rgba(0,0,0,0.2);"
      >
        📥 Descargar PDF ATS
      </button>
    </div>
    
    <div id="cv-ats" class="cv-ats-container">
      <!-- Header -->
      <header class="cv-header">
        <h1 class="cv-name">Jared Wesley Vargas Cortes</h1>
        <div class="cv-contact">
          <span>Bogotá, Colombia</span> | 
          <span>jaredwesley27@hotmail.com</span> | 
          <span>+57 322 926 6046</span> | 
          <span>GitHub: github.com/JaredSoftware</span> | 
          <span>LinkedIn: linkedin.com/in/jared-wesley-vargas-cortes-0ab9a71a8</span> | 
          <span>Portfolio: lollool2.github.io/-CV.com/</span>
        </div>
      </header>

      <!-- Professional Summary -->
      <section class="cv-section">
        <h2 class="cv-section-title">RESUMEN PROFESIONAL</h2>
        <p class="cv-text">
          Desarrollador full-stack con más de 3 años de experiencia en Node.js, Express, MongoDB, PostgreSQL, Vue.js, Nuxt.js, React y microservicios. Especializado en desarrollo de APIs RESTful, aplicaciones escalables y optimización de rendimiento. Experiencia en Docker, Git, CI/CD, arquitectura de microservicios y metodologías ágiles.
        </p>
      </section>

      <!-- Technical Skills -->
      <section class="cv-section">
        <h2 class="cv-section-title">HABILIDADES TÉCNICAS</h2>
        <div class="cv-skills">
          <p><strong>Lenguajes:</strong> JavaScript, TypeScript, SQL</p>
          <p><strong>Frameworks y Librerías:</strong> Node.js, Express, Vue.js, Nuxt.js, React, Next.js, Sails.js</p>
          <p><strong>Bases de Datos:</strong> PostgreSQL, MySQL, MongoDB, SQL</p>
          <p><strong>Frontend:</strong> HTML5, CSS3, Tailwind CSS, Bootstrap, Sass, Socket.io</p>
          <p><strong>DevOps y Herramientas:</strong> Docker, PM2, Git, GitHub, CI/CD, NPM</p>
          <p><strong>Arquitectura:</strong> Microservicios, API REST, WebSockets, Arquitectura de software</p>
          <p><strong>Sistemas Operativos:</strong> Ubuntu, CentOS, Linux</p>
          <p><strong>Metodologías:</strong> Scrum, Agile, Desarrollo ágil</p>
          <p><strong>Testing:</strong> Unit Testing, Pruebas de software</p>
        </div>
      </section>

      <!-- Work Experience -->
      <section class="cv-section">
        <h2 class="cv-section-title">EXPERIENCIA LABORAL</h2>
        
        <div class="cv-job">
          <div class="cv-job-header">
            <strong>Desarrollador Full Stack</strong> — FreeLance
          </div>
          <div class="cv-job-date">Mayo 2022 - Presente</div>
          <ul class="cv-job-list">
            <li>Desarrollo de aplicaciones web full-stack para clientes diversos, implementando APIs RESTful con Node.js y Express</li>
            <li>Desarrollo de interfaces responsivas con Vue.js, Nuxt.js, React y Tailwind CSS</li>
            <li>Gestión y optimización de bases de datos PostgreSQL y MongoDB</li>
            <li>Tecnologías: Node.js, Express, Vue.js, Nuxt.js, React, PostgreSQL, MongoDB, Docker, Git</li>
          </ul>
        </div>

        <div class="cv-job">
          <div class="cv-job-header">
            <strong>Desarrollador</strong> — Bercont
          </div>
          <div class="cv-job-date">Mayo 2021 - Mayo 2022</div>
          <ul class="cv-job-list">
            <li>Desarrollo de aplicaciones web con Node.js y MongoDB para clientes empresariales</li>
            <li>Implementación de arquitectura de microservicios y APIs eficientes</li>
            <li>Colaboración en equipos ágiles para entrega de productos de calidad</li>
            <li>Tecnologías: Node.js, MongoDB, Express, JavaScript, Git, PM2</li>
          </ul>
        </div>

        <div class="cv-job">
          <div class="cv-job-header">
            <strong>Prácticas Laborales</strong> — Bercont
          </div>
          <div class="cv-job-date">Enero 2021 - Mayo 2021</div>
          <ul class="cv-job-list">
            <li>Apoyo en desarrollo de software bajo supervisión de ingeniero senior</li>
            <li>Participación en proyectos web y aplicación de mejores prácticas</li>
            <li>Tecnologías: Node.js, JavaScript, HTML, CSS, Git</li>
          </ul>
        </div>
      </section>

      <!-- Education -->
      <section class="cv-section">
        <h2 class="cv-section-title">EDUCACIÓN</h2>
        <div class="cv-education">
          <p><strong>Técnico En Desarrollo De Software</strong> — Institución Educativa — Junio 2021</p>
          <p><strong>Bachiller</strong> — Educación Media — Noviembre 2019</p>
        </div>
      </section>

      <!-- Additional Skills & Languages -->
      <section class="cv-section">
        <h2 class="cv-section-title">APTITUDES E IDIOMAS</h2>
        <div class="cv-text">
          <p><strong>Aptitudes:</strong> Comunicación, pensamiento crítico, trabajo en equipo, atención al detalle, aprendizaje continuo.</p>
          <p><strong>Idiomas:</strong> Español (Nativo), Inglés (Intermedio - 7.5/10)</p>
        </div>
      </section>
    </div>
  </div>
</template>

<script setup>
const { generatePDF } = usePDFGenerator()

const downloadPDF = async () => {
  try {
    await generatePDF('cv-ats', 'CV_Jared_Wesley_Vargas_Cortes_ATS.pdf')
  } catch (error) {
    console.error('Error al generar PDF:', error)
    alert('Error al generar el PDF. Por favor, intenta usar la función de imprimir del navegador (Ctrl+P).')
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
