"use client"

import { motion, AnimatePresence } from "framer-motion"
import { useInView } from "@/hooks/use-in-view"
import { ChevronDown } from "lucide-react"
import { useState } from "react"

interface FAQItem {
  question: string
  answer: string
  highlight?: string
}

const faqs: FAQItem[] = [
  {
    question: "¿Cuánto cuesta DEFCA?",
    answer:
      "Ofrecemos planes de suscripción mensual que incluyen todos los servicios del sistema. Los planes se diferencian por la cantidad de análisis y escaneos mensuales que puedes realizar, adaptándose al tamaño de tu operación.",
    highlight: "Planes desde básico hasta empresarial",
  },
  {
    question: "¿Funciona sin conexión a internet?",
    answer:
      "Puedes capturar y guardar imágenes localmente, revisar tu historial de análisis previos y consultar recomendaciones del asistente sin conexión. El análisis con IA requiere internet, pero los datos se sincronizan automáticamente cuando recuperas señal. Para zonas sin cobertura, ofrecemos planes con Starlink Mini incluido.",
    highlight: "Funcionalidad básica offline con sincronización automática",
  },
  {
    question: "¿Qué tan precisa es la detección de IA?",
    answer:
      "Actualmente utilizamos modelos de IA generativa de última generación para el análisis de imágenes. En la fase final del proyecto, desarrollaremos un modelo especializado entrenado específicamente con enfermedades foliares del avellano chileno, lo que aumentará significativamente la precisión.",
    highlight: "IA generativa en prototipo actual",
  },
  {
    question: "¿Con qué celulares es compatible?",
    answer:
      "DEFCA es una WebApp (aplicación web progresiva) compatible con cualquier smartphone moderno que tenga navegador actualizado: Chrome, Safari, Firefox o Edge. No requiere instalación desde tiendas de apps. Funciona en Android e iOS.",
    highlight: "Compatible con todos los smartphones modernos",
  },
  {
    question: "¿Qué incluyen los planes con Starlink?",
    answer:
      "Para predios en zonas sin conectividad, ofrecemos planes especiales que incluyen el equipo Starlink Mini en comodato, instalación, configuración y soporte técnico. Esto garantiza que puedas usar DEFCA sin limitaciones, independiente de tu ubicación.",
    highlight: "Conectividad garantizada en cualquier ubicación",
  },
]

export function FAQ() {
  const { ref, isInView } = useInView({ threshold: 0.1 })
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section ref={ref} className="py-16 sm:py-24 md:py-32 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center mb-12 sm:mb-16"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 text-balance">
            Preguntas <span className="text-primary">Frecuentes</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground text-pretty leading-relaxed">
            Todo lo que necesitas saber sobre DEFCA
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto space-y-3 sm:space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full text-left bg-background rounded-2xl border border-border/40 hover:border-primary/40 transition-all overflow-hidden"
              >
                <div className="flex items-center justify-between p-4 sm:p-6">
                  <div className="flex-1 pr-3 sm:pr-4">
                    <h3 className="text-sm sm:text-base md:text-lg font-semibold mb-1">{faq.question}</h3>
                    {faq.highlight && openIndex !== index && (
                      <span className="text-[10px] sm:text-xs text-primary font-medium">{faq.highlight}</span>
                    )}
                  </div>
                  <motion.div
                    animate={{ rotate: openIndex === index ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="flex-shrink-0"
                  >
                    <ChevronDown className="w-4 h-4 sm:w-5 sm:h-5 text-muted-foreground" />
                  </motion.div>
                </div>

                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="px-4 sm:px-6 pb-4 sm:pb-6 pt-0">
                        <div className="bg-muted/50 rounded-xl p-3 sm:p-4 border-l-4 border-primary">
                          <p className="text-xs sm:text-sm md:text-base text-muted-foreground leading-relaxed">{faq.answer}</p>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </button>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-8 sm:mt-12"
        >
          <p className="text-sm sm:text-base text-muted-foreground mb-3 sm:mb-4">¿Tienes más preguntas?</p>
          <a
            href="https://wa.me/56926873545"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm sm:text-base text-primary font-medium hover:underline"
          >
            Contáctanos por WhatsApp
            <svg className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  )
}
