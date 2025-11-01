"use client"

import { motion, AnimatePresence } from "framer-motion"
import { useState } from "react"
import { AlertCircle, CheckCircle } from "lucide-react"

type ScanState = "idle" | "scanning" | "healthy" | "diseased"

export function ScanAnimation() {
  const [scanState, setScanState] = useState<ScanState>("idle")

  const handleScan = () => {
    setScanState("scanning")

    setTimeout(() => {
      const isHealthy = Math.random() > 0.5
      setScanState(isHealthy ? "healthy" : "diseased")

      setTimeout(() => {
        setScanState("idle")
      }, 4000)
    }, 2500)
  }

  return (
    <div className="relative w-full max-w-md mx-auto aspect-[3/4] bg-gradient-to-br from-muted to-muted/50 rounded-3xl shadow-2xl overflow-hidden">
      {/* Phone mockup */}
      <div className="absolute inset-4 bg-background rounded-2xl overflow-hidden">
        {/* Leaf image */}
        <div className="relative w-full h-full flex items-center justify-center bg-gradient-to-br from-green-50 to-amber-50">
          <motion.div
            className="relative w-48 h-48"
            animate={scanState === "scanning" ? { scale: [1, 1.05, 1] } : {}}
            transition={{ duration: 2 }}
          >
            {/* Leaf placeholder */}
            <div className="w-full h-full bg-gradient-to-br from-green-600 to-green-800 rounded-full opacity-20" />

            {/* Scanning effect */}
            {scanState === "scanning" && (
              <>
                <motion.div
                  className="absolute inset-0 border-4 border-primary rounded-full"
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1.5, opacity: [0, 1, 0] }}
                  transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                />
                <motion.div
                  className="absolute inset-0 border-4 border-primary rounded-full"
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1.5, opacity: [0, 1, 0] }}
                  transition={{ duration: 2, delay: 0.5, repeat: Number.POSITIVE_INFINITY }}
                />
              </>
            )}

            <AnimatePresence mode="wait">
              {scanState === "scanning" && (
                <motion.div
                  key="scanning"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  className="absolute -bottom-16 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground px-6 py-3 rounded-full text-sm font-medium whitespace-nowrap shadow-lg"
                >
                  Analizando...
                </motion.div>
              )}

              {scanState === "healthy" && (
                <motion.div
                  key="healthy"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  className="absolute -top-40 left-1/2 -translate-x-1/2 bg-green-500 text-white px-6 py-3 rounded-full text-sm font-bold whitespace-nowrap shadow-lg flex items-center gap-2"
                >
                  <CheckCircle className="w-5 h-5" />
                  Planta Sana
                </motion.div>
              )}

              {scanState === "diseased" && (
                <motion.div
                  key="diseased"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  className="absolute -top-40 left-1/2 -translate-x-1/2 w-64"
                >
                  <div className="bg-red-500 text-white px-4 py-3 rounded-2xl shadow-2xl">
                    <div className="flex items-center gap-2 mb-2">
                      <AlertCircle className="w-5 h-5" />
                      <span className="font-bold text-sm">Enfermedad Detectada</span>
                    </div>
                    <div className="text-xs space-y-1 bg-red-600/50 rounded-lg p-2">
                      <div className="flex justify-between">
                        <span>Tipo:</span>
                        <span className="font-semibold">Tizón del avellano</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Confianza:</span>
                        <span className="font-semibold">92%</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Severidad:</span>
                        <span className="font-semibold">Media</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>

        {/* Scan button */}
        <motion.button
          className="absolute bottom-8 left-1/2 -translate-x-1/2 w-16 h-16 bg-primary rounded-full shadow-lg flex items-center justify-center cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
          whileTap={{ scale: 0.9 }}
          onClick={handleScan}
          disabled={scanState !== "idle"}
        >
          <div className="w-12 h-12 border-4 border-primary-foreground rounded-full" />
        </motion.button>
      </div>
    </div>
  )
}
