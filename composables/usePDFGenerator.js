export const usePDFGenerator = () => {
  const generatePDF = async (elementId, filename = 'CV.pdf') => {
    if (!process.client) return
    
    try {
      // Importar html2pdf dinámicamente
      const html2pdf = (await import('html2pdf.js')).default
      
      const element = document.getElementById(elementId)
      if (!element) {
        console.error(`Elemento con id "${elementId}" no encontrado`)
        return
      }
      
      // Esperar a que las fuentes y el contenido estén completamente cargados
      await document.fonts.ready
      
      // Esperar un momento adicional para asegurar que Vue haya renderizado todo
      await new Promise(resolve => setTimeout(resolve, 200))
      
      // Verificar que el contenido está visible (no está vacío)
      const textContent = element.textContent || element.innerText
      if (!textContent || textContent.trim().length === 0) {
        console.warn('El elemento parece estar vacío, esperando más tiempo...')
        await new Promise(resolve => setTimeout(resolve, 500))
      }
      
      // Ocultar el botón antes de generar el PDF
      const buttonContainer = document.getElementById('pdf-button')
      if (buttonContainer) {
        buttonContainer.style.display = 'none'
      }
      
      // Esperar un frame adicional antes de capturar
      await new Promise(resolve => requestAnimationFrame(resolve))
      
      // Asegurar que el elemento tenga dimensiones correctas
      const rect = element.getBoundingClientRect()
      
      // Configuración optimizada para ATS - una sola página
      const opt = {
        margin: [8, 8, 8, 8],
        filename: filename,
        image: { 
          type: 'jpeg', 
          quality: 0.92 
        },
        html2canvas: { 
          scale: 2, // Aumentar escala para mejor calidad
          useCORS: true,
          letterRendering: true,
          logging: false,
          allowTaint: false,
          backgroundColor: '#ffffff',
          removeContainer: false,
          width: rect.width,
          height: rect.height,
          x: 0,
          y: 0,
          scrollX: 0,
          scrollY: 0,
          windowWidth: rect.width,
          windowHeight: rect.height,
          onclone: (clonedDoc) => {
            // Asegurar que el clon también tiene el contenido renderizado
            const clonedElement = clonedDoc.getElementById(elementId)
            if (clonedElement) {
              // Forzar que los estilos estén aplicados
              clonedElement.style.visibility = 'visible'
              clonedElement.style.opacity = '1'
            }
          }
        },
        jsPDF: { 
          unit: 'mm', 
          format: 'a4', 
          orientation: 'portrait',
          compress: true
        },
        pagebreak: { 
          mode: 'avoid-all'
        }
      }
      
      // Generar PDF solo del elemento específico
      await html2pdf().set(opt).from(element).save()
      
      // Mostrar el botón de nuevo
      if (buttonContainer) {
        buttonContainer.style.display = ''
      }
    } catch (error) {
      console.error('Error generando PDF:', error)
      throw error
    }
  }
  
  return {
    generatePDF
  }
}

