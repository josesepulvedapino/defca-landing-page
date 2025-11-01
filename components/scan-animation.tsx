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
        <div className="relative w-full h-full flex items-center justify-center bg-gradient-to-br from-green-50 to-amber-50 overflow-hidden">
          {/* Floating background particles */}
          <motion.div
            className="absolute top-10 left-10 w-2 h-2 bg-primary/20 rounded-full"
            animate={{
              y: [0, -20, 0],
              x: [0, 10, 0],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute bottom-20 right-16 w-3 h-3 bg-green-400/30 rounded-full"
            animate={{
              y: [0, 15, 0],
              x: [0, -8, 0],
              opacity: [0.4, 0.7, 0.4],
            }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          />
          <motion.div
            className="absolute top-32 right-12 w-2 h-2 bg-amber-400/25 rounded-full"
            animate={{
              y: [0, -15, 0],
              x: [0, -12, 0],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          />

          <motion.div
            className="relative w-48 h-48"
            animate={
              scanState === "scanning"
                ? { scale: [1, 1.05, 1] }
                : {
                    y: [0, -8, 0],
                    rotate: [0, 2, 0, -2, 0],
                  }
            }
            transition={
              scanState === "scanning"
                ? { duration: 2 }
                : { duration: 6, repeat: Infinity, ease: "easeInOut" }
            }
          >
            {/* Realistic Leaf SVG */}
            <svg
              viewBox="0 0 200 200"
              className="w-full h-full drop-shadow-2xl"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Leaf shape */}
              <defs>
                <linearGradient id="leafGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" style={{ stopColor: "#059669", stopOpacity: 1 }} />
                  <stop offset="50%" style={{ stopColor: "#10b981", stopOpacity: 1 }} />
                  <stop offset="100%" style={{ stopColor: "#047857", stopOpacity: 1 }} />
                </linearGradient>
                <filter id="leafShadow">
                  <feDropShadow dx="0" dy="4" stdDeviation="3" floodOpacity="0.3" />
                </filter>
              </defs>

              {/* Main leaf body */}
              <ellipse
                cx="100"
                cy="100"
                rx="70"
                ry="85"
                fill="url(#leafGradient)"
                filter="url(#leafShadow)"
              />

              {/* Central vein */}
              <line
                x1="100"
                y1="20"
                x2="100"
                y2="180"
                stroke="#047857"
                strokeWidth="3"
                strokeLinecap="round"
              />

              {/* Side veins */}
              <path
                d="M 100 40 Q 75 50, 60 70"
                stroke="#047857"
                strokeWidth="1.5"
                fill="none"
                strokeLinecap="round"
                opacity="0.7"
              />
              <path
                d="M 100 40 Q 125 50, 140 70"
                stroke="#047857"
                strokeWidth="1.5"
                fill="none"
                strokeLinecap="round"
                opacity="0.7"
              />
              <path
                d="M 100 70 Q 70 80, 55 100"
                stroke="#047857"
                strokeWidth="1.5"
                fill="none"
                strokeLinecap="round"
                opacity="0.7"
              />
              <path
                d="M 100 70 Q 130 80, 145 100"
                stroke="#047857"
                strokeWidth="1.5"
                fill="none"
                strokeLinecap="round"
                opacity="0.7"
              />
              <path
                d="M 100 100 Q 75 110, 60 130"
                stroke="#047857"
                strokeWidth="1.5"
                fill="none"
                strokeLinecap="round"
                opacity="0.7"
              />
              <path
                d="M 100 100 Q 125 110, 140 130"
                stroke="#047857"
                strokeWidth="1.5"
                fill="none"
                strokeLinecap="round"
                opacity="0.7"
              />
              <path
                d="M 100 130 Q 80 140, 70 160"
                stroke="#047857"
                strokeWidth="1.5"
                fill="none"
                strokeLinecap="round"
                opacity="0.7"
              />
              <path
                d="M 100 130 Q 120 140, 130 160"
                stroke="#047857"
                strokeWidth="1.5"
                fill="none"
                strokeLinecap="round"
                opacity="0.7"
              />

              {/* Subtle highlights */}
              <ellipse
                cx="80"
                cy="60"
                rx="15"
                ry="20"
                fill="white"
                opacity="0.15"
              />
              <ellipse
                cx="120"
                cy="90"
                rx="12"
                ry="15"
                fill="white"
                opacity="0.1"
              />

              {/* Disease spots (only visible when diseased) */}
              {scanState === "diseased" && (
                <>
                  <motion.circle
                    cx="75"
                    cy="80"
                    r="8"
                    fill="#78350f"
                    opacity="0.6"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.2 }}
                  />
                  <motion.circle
                    cx="120"
                    cy="110"
                    r="6"
                    fill="#78350f"
                    opacity="0.5"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.3 }}
                  />
                  <motion.circle
                    cx="95"
                    cy="140"
                    r="7"
                    fill="#78350f"
                    opacity="0.55"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.4 }}
                  />
                </>
              )}
            </svg>

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
