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
      
      // Ocultar el botón antes de generar el PDF
      const buttonContainer = document.getElementById('pdf-button')
      if (buttonContainer) {
        buttonContainer.style.display = 'none'
      }
      
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
          scale: 1,
          useCORS: true,
          letterRendering: true,
          logging: false,
          width: rect.width,
          height: rect.height,
          x: 0,
          y: 0,
          scrollX: 0,
          scrollY: 0,
          windowWidth: rect.width,
          windowHeight: rect.height
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

