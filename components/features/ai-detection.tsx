"use client"

import { motion } from "framer-motion"
import { useInView } from "@/hooks/use-in-view"
import { Sparkles } from "lucide-react"

export function AIDetection() {
  const { ref, isInView } = useInView({ threshold: 0.3 })

  return (
    <div ref={ref} className="grid lg:grid-cols-2 gap-12 items-center">
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={isInView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.8 }}
        className="space-y-6"
      >
        <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium">
          <Sparkles className="w-4 h-4" />
          Detección Inteligente
        </div>

        <h3 className="text-3xl md:text-4xl font-bold text-balance">Detección por IA en Segundos</h3>

        <p className="text-lg text-muted-foreground leading-relaxed">
          Tome una foto de una hoja y obtenga un análisis de IA al instante. Identifique qué está pasando y reciba
          recomendaciones claras.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={isInView ? { opacity: 1, scale: 1 } : {}}
        transition={{ duration: 0.8 }}
        className="relative"
      >
        <div className="relative bg-gradient-to-br from-primary/15 to-primary/5 rounded-3xl p-8 aspect-square flex items-center justify-center">
          <motion.div
            animate={
              isInView
                ? {
                    scale: [1, 1.2, 1],
                    rotate: [0, 5, -5, 0],
                  }
                : {}
            }
            transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, repeatDelay: 2 }}
            className="relative w-48 h-48"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-green-500 to-green-700 rounded-3xl" />

            {isInView && (
              <>
                <motion.div
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 2, delay: 0.5 }}
                  className="absolute inset-0"
                >
                  <svg className="w-full h-full" viewBox="0 0 100 100">
                    <motion.circle
                      cx="50"
                      cy="50"
                      r="45"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      className="text-primary"
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                      transition={{ duration: 1.5 }}
                    />
                  </svg>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1.5 }}
                  className="absolute -top-4 -right-4 bg-primary text-primary-foreground px-4 py-2 rounded-full text-sm font-bold shadow-lg"
                >
                  IA Generativa
                </motion.div>
              </>
            )}
          </motion.div>
        </div>
      </motion.div>
    </div>
  )
}
