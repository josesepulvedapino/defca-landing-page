// Additional page-specific metadata
export const pageMetadata = {
  jsonLd: {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Organization',
        '@id': 'https://defca.app/#organization',
        name: 'DEFCA',
        url: 'https://defca.app',
        logo: {
          '@type': 'ImageObject',
          url: 'https://defca.app/logo.jpg',
          width: 512,
          height: 512,
        },
        description: 'Sistema inteligente de detección de enfermedades en avellanos con IA',
        foundingDate: '2024',
        founders: [
          {
            '@type': 'Person',
            name: 'José Sepúlveda',
            jobTitle: 'Co-founder & Software Engineer',
            url: 'https://www.linkedin.com/in/josesepulvedapino/',
          },
          {
            '@type': 'Person',
            name: 'Luis Soto',
            jobTitle: 'Co-founder & Software Engineer',
            url: 'https://www.linkedin.com/in/luis-eduardo-soto-guti%C3%A9rrez-99a53a256/',
          },
        ],
      },
      {
        '@type': 'WebSite',
        '@id': 'https://defca.app/#website',
        url: 'https://defca.app',
        name: 'DEFCA',
        description: 'Sistema de detección de enfermedades del avellano con inteligencia artificial',
        publisher: {
          '@id': 'https://defca.app/#organization',
        },
        inLanguage: 'es-CL',
      },
      {
        '@type': 'WebPage',
        '@id': 'https://defca.app/#webpage',
        url: 'https://defca.app',
        name: 'DEFCA - Detecte Enfermedades del Avellano con IA en Segundos',
        isPartOf: {
          '@id': 'https://defca.app/#website',
        },
        about: {
          '@id': 'https://defca.app/#organization',
        },
        description: 'Detecte enfermedades del avellano en segundos con inteligencia artificial. Tome una foto, obtenga diagnóstico instantáneo con IA, mapee la salud de su huerto y reciba recomendaciones de tratamiento.',
        inLanguage: 'es-CL',
      },
      {
        '@type': 'SoftwareApplication',
        '@id': 'https://defca.app/#softwareapplication',
        name: 'DEFCA',
        applicationCategory: 'BusinessApplication',
        applicationSubCategory: 'Agriculture',
        operatingSystem: 'Android, iOS',
        offers: {
          '@type': 'Offer',
          price: '0',
          priceCurrency: 'CLP',
        },
        description: 'Detecte enfermedades del avellano con inteligencia artificial en segundos. Sistema offline-first con diagnóstico instantáneo, mapeo de salud y recomendaciones de tratamiento.',
        featureList: [
          'Detección de enfermedades con IA',
          'Diagnóstico instantáneo en segundos',
          'Mapeo geográfico de salud del huerto',
          'Recomendaciones personalizadas de tratamiento',
          'Funcionamiento offline en el campo',
          'Análisis de reportes y estadísticas',
          'Asistente IA agrónomo 24/7',
        ],
        screenshot: 'https://defca.app/logo.jpg',
        aggregateRating: {
          '@type': 'AggregateRating',
          ratingValue: '5',
          ratingCount: '1',
        },
      },
      {
        '@type': 'FAQPage',
        '@id': 'https://defca.app/#faqpage',
        mainEntity: [
          {
            '@type': 'Question',
            name: '¿Qué es DEFCA?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'DEFCA es un sistema de gestión fitosanitaria inteligente diseñado específicamente para la detección temprana de enfermedades foliares en cultivos de avellano europeo (Corylus avellana), implementando tecnología de inteligencia artificial para proporcionar diagnósticos rápidos y precisos en campo.',
            },
          },
          {
            '@type': 'Question',
            name: '¿Cómo funciona la detección con IA?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Utilizamos modelos de deep learning entrenados con miles de imágenes de hojas de avellano. El sistema analiza patrones visuales, texturas y coloraciones para identificar enfermedades con alta precisión, todo en segundos y directamente desde tu dispositivo móvil.',
            },
          },
          {
            '@type': 'Question',
            name: '¿Funciona sin conexión a internet?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Sí, DEFCA está diseñado con arquitectura offline-first. Puedes realizar diagnósticos, registrar observaciones y mapear tu huerto sin necesidad de conexión. Los datos se sincronizan automáticamente cuando vuelves a tener internet.',
            },
          },
          {
            '@type': 'Question',
            name: '¿Qué enfermedades puede detectar?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Actualmente detectamos las principales enfermedades foliares del avellano en Chile, incluyendo tizón de la hoja, antracnosis, y otras patologías comunes. Estamos constantemente expandiendo nuestra base de datos con nuevas enfermedades.',
            },
          },
        ],
      },
    ],
  },
}
