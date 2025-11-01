"use client"

import { motion } from "framer-motion"
import { useInView } from "@/hooks/use-in-view"
import { WifiOff, Cloud, Check, ImageIcon, History } from "lucide-react"
import { useState, useEffect } from "react"

export function OfflineFirst() {
  const { ref, isInView } = useInView({ threshold: 0.3 })
  const [isSynced, setIsSynced] = useState(false)

  useEffect(() => {
    if (isInView) {
      const timer = setTimeout(() => setIsSynced(true), 2000)
      return () => {
        clearTimeout(timer)
        setIsSynced(false)
      }
    }
  }, [isInView])

  return (
    <div ref={ref} className="grid lg:grid-cols-2 gap-12 items-center">
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={isInView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.8 }}
        className="space-y-6 order-1"
      >
        <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium">
          <Cloud className="w-4 h-4" />
          Conectividad Garantizada
        </div>

        <h3 className="text-3xl md:text-4xl font-bold text-balance">Funcionalidad con Conectividad</h3>

        <p className="text-lg text-muted-foreground leading-relaxed">
          DEFCA requiere internet para análisis con IA. Para zonas sin cobertura, ofrecemos planes con Starlink Mini incluido, garantizando conectividad constante en tu predio.
        </p>

        <div className="space-y-3 pt-4">
          <div className="flex items-start gap-3">
            <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
              <Cloud className="w-5 h-5 text-primary" />
            </div>
            <div>
              <h4 className="font-semibold mb-1">Análisis en la Nube</h4>
              <p className="text-sm text-muted-foreground">Procesamiento mediante IA generativa avanzada</p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
              <WifiOff className="w-5 h-5 text-primary" />
            </div>
            <div>
              <h4 className="font-semibold mb-1">Starlink Mini Disponible</h4>
              <p className="text-sm text-muted-foreground">Planes especiales con conectividad incluida</p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
              <History className="w-5 h-5 text-primary" />
            </div>
            <div>
              <h4 className="font-semibold mb-1">Historial Completo</h4>
              <p className="text-sm text-muted-foreground">Acceda a todas sus detecciones anteriores</p>
            </div>
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={isInView ? { opacity: 1, scale: 1 } : {}}
        transition={{ duration: 0.8 }}
        className="relative order-2"
      >
        <div className="relative bg-gradient-to-br from-background to-muted rounded-3xl p-12 aspect-square flex items-center justify-center">
          <motion.div
            animate={isSynced ? { scale: 0, opacity: 0 } : { scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="absolute"
          >
            <div className="relative">
              <WifiOff className="w-24 h-24 text-muted-foreground" />
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                className="absolute inset-0 border-4 border-muted-foreground/20 rounded-full"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={isSynced ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="absolute"
          >
            <div className="relative">
              <div className="w-24 h-24 bg-primary rounded-full flex items-center justify-center">
                <Cloud className="w-12 h-12 text-primary-foreground" />
              </div>
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.3 }}
                className="absolute -top-2 -right-2 w-10 h-10 bg-green-500 rounded-full flex items-center justify-center"
              >
                <Check className="w-6 h-6 text-white" />
              </motion.div>
            </div>
          </motion.div>

          {isSynced && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-green-500 text-white px-6 py-3 rounded-full text-sm font-bold shadow-lg whitespace-nowrap"
            >
              Sincronizado
            </motion.div>
          )}
        </div>
      </motion.div>
    </div>
  )
}
