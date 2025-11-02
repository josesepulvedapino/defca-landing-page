"use client"

import { motion } from "framer-motion"
import { useInView } from "@/hooks/use-in-view"
import { MessageSquare } from "lucide-react"
import { useState, useEffect } from "react"

export function AIAssistant() {
  const { ref, isInView } = useInView({ threshold: 0.3 })
  const [showMessage, setShowMessage] = useState(false)

  useEffect(() => {
    if (isInView) {
      const timer = setTimeout(() => setShowMessage(true), 1000)
      return () => clearTimeout(timer)
    } else {
      setShowMessage(false)
    }
  }, [isInView])

  return (
    <div ref={ref} className="grid lg:grid-cols-2 gap-12 items-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={isInView ? { opacity: 1, scale: 1 } : {}}
        transition={{ duration: 0.8 }}
        className="relative order-2 lg:order-1"
      >
        <div className="bg-gradient-to-br from-muted/80 to-muted rounded-3xl p-8 shadow-xl">
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                <MessageSquare className="w-5 h-5 text-primary-foreground" />
              </div>
              <div className="flex-1">
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={showMessage ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                  className="bg-primary/10 rounded-2xl rounded-tl-none p-4"
                >
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={showMessage ? { opacity: 1 } : { opacity: 0 }}
                    transition={{ duration: 0.4 }}
                    className="text-sm font-medium mb-2"
                  >
                    Alerta Preventiva
                  </motion.p>
                  {showMessage && (
                    <motion.p
                      initial={{ opacity: 0, y: 5 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
                      className="text-sm text-muted-foreground leading-relaxed"
                    >
                      Se pronostican lluvias para los próximos 3 días en su zona. Riesgo alto de Phytophthora.
                      Recomendamos inspección preventiva en sectores bajos.
                    </motion.p>
                  )}
                </motion.div>
              </div>
            </div>

            {showMessage && (
              <motion.div
                initial={{ opacity: 0, y: 20, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ delay: 1.3, duration: 0.5, ease: "easeOut" }}
                className="flex justify-end"
              >
                <div className="bg-primary text-primary-foreground rounded-2xl rounded-tr-none p-4 max-w-[80%]">
                  <p className="text-sm">Gracias, revisaré el sector norte</p>
                </div>
              </motion.div>
            )}
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={isInView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.8 }}
        className="space-y-6 order-1 lg:order-2"
      >
        <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium">
          <MessageSquare className="w-4 h-4" />
          Asistente Proactivo
        </div>

        <h3 className="text-3xl md:text-4xl font-bold text-balance">Asistente Agronómico Predictivo</h3>

        <p className="text-lg text-muted-foreground leading-relaxed">
          Reciba alertas y consejos proactivos basados en el pronóstico del tiempo de su zona y los riesgos de
          enfermedades.
        </p>
      </motion.div>
    </div>
  )
}
