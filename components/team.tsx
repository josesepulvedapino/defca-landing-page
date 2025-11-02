"use client"

import { motion } from "framer-motion"
import { useInView } from "@/hooks/use-in-view"

export function Team() {
  const { ref, isInView } = useInView({ threshold: 0.1 })

  return (
    <section ref={ref} className="py-16 sm:py-24 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-balance">
            El Equipo detrás de <span className="text-primary">DEFCA</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Desarrolladores apasionados por llevar tecnología al campo chileno
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 md:gap-12 max-w-5xl mx-auto">
          {/* José Sepúlveda */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative group"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-primary/5 rounded-3xl blur-xl group-hover:blur-2xl transition-all" />
            <div className="relative bg-gradient-to-br from-muted/80 to-muted/50 rounded-3xl p-8 hover:shadow-2xl transition-all">
              <div className="flex flex-col items-center text-center">
                {/* Avatar con foto */}
                <img 
                  src="/team/jose.jpg" 
                  alt="José Sepúlveda"
                  className="w-32 h-32 rounded-full object-cover mb-6 shadow-lg ring-4 ring-background"
                />
                
                <h3 className="text-2xl font-bold mb-2">José Sepúlveda</h3>
                <p className="text-primary font-semibold mb-4">Co-founder & Software Engineer</p>
                
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Software Engineer especializado en implementación de IA generativa y sistemas inteligentes. 
                  Enfocado en desarrollar soluciones innovadoras que transforman prácticas agrícolas y empoderan a los agricultores.
                </p>
                
                <a
                  href="https://www.linkedin.com/in/josesepulvedapino/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-full font-medium hover:bg-primary/90 transition-colors"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                  Ver Perfil
                </a>
              </div>
            </div>
          </motion.div>

          {/* Luis Soto */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="relative group"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-primary/5 rounded-3xl blur-xl group-hover:blur-2xl transition-all" />
            <div className="relative bg-gradient-to-br from-muted/80 to-muted/50 rounded-3xl p-8 hover:shadow-2xl transition-all">
              <div className="flex flex-col items-center text-center">
                {/* Avatar con foto */}
                <img 
                  src="/team/luis.jpg" 
                  alt="Luis Soto"
                  className="w-32 h-32 rounded-full object-cover mb-6 shadow-lg ring-4 ring-background"
                />
                
                <h3 className="text-2xl font-bold mb-2">Luis Soto</h3>
                <p className="text-primary font-semibold mb-4">Co-founder & Software Engineer</p>
                
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Software Engineer con experiencia en tecnología de marketing y estrategias de engagement con clientes. 
                  Dedicado a construir soluciones centradas en el usuario que impulsan el crecimiento del negocio.
                </p>
                
                <a
                  href="https://www.linkedin.com/in/luis-eduardo-soto-guti%C3%A9rrez-99a53a256/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-full font-medium hover:bg-primary/90 transition-colors"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                  Ver Perfil
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
