"use client"

import { motion } from "framer-motion"
import { useInView } from "@/hooks/use-in-view"
import { CheckCircle2, Clock, Rocket } from "lucide-react"
import { useState } from "react"

interface Phase {
  name: string
  status: "completed" | "current" | "upcoming"
  period: string
  description: string
  icon: "check" | "current" | "upcoming"
}

const phases: Phase[] = [
  {
    name: "Conceptualización",
    status: "completed",
    period: "Ago 2025",
    description: "Definición del producto, historias de usuario y arquitectura del sistema.",
    icon: "check",
  },
  {
    name: "Integración de IA",
    status: "completed",
    period: "Sep 2025",
    description: "Implementación de modelos de IA generativa para análisis de imágenes.",
    icon: "check",
  },
  {
    name: "Desarrollo del Sistema",
    status: "completed",
    period: "Oct-Nov 2025",
    description: "Implementación de frontend, backend y funcionalidades principales.",
    icon: "check",
  },
  {
    name: "Prueba Piloto",
    status: "current",
    period: "Dic 2025",
    description: "Validación en terreno con productores de la Región de Ñuble.",
    icon: "current",
  },
  {
    name: "Dataset Especializado",
    status: "upcoming",
    period: "Ene-Mar 2026",
    description: "Recopilación y anotación de dataset específico de enfermedades del avellano.",
    icon: "upcoming",
  },
  {
    name: "Modelo Especializado",
    status: "upcoming",
    period: "Abr-Jul 2026",
    description: "Entrenamiento del modelo de IA especializado para máxima precisión.",
    icon: "upcoming",
  },
  {
    name: "Lanzamiento Beta",
    status: "upcoming",
    period: "Ago 2026",
    description: "Lanzamiento oficial con modelo especializado para productores de la región.",
    icon: "upcoming",
  },
]

export function Roadmap() {
  const { ref, isInView } = useInView({ threshold: 0.1 })
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  const getIcon = (icon: Phase["icon"]) => {
    switch (icon) {
      case "check":
        return CheckCircle2
      case "current":
        return Clock
      case "upcoming":
        return Rocket
    }
  }

  const getStatusColor = (status: Phase["status"]) => {
    switch (status) {
      case "completed":
        return "text-green-500"
      case "current":
        return "text-primary"
      case "upcoming":
        return "text-muted-foreground"
    }
  }

  const getStatusBg = (status: Phase["status"]) => {
    switch (status) {
      case "completed":
        return "bg-green-500/10 border-green-500/20"
      case "current":
        return "bg-primary/10 border-primary/40"
      case "upcoming":
        return "bg-muted border-border/40"
    }
  }

  return (
    <section ref={ref} className="py-16 sm:py-24 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center mb-12 sm:mb-16"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 text-balance">
            Nuestro <span className="text-primary">Roadmap</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground text-pretty leading-relaxed">
            Actualmente en fase de pruebas piloto con agricultores de la Región de Ñuble
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto relative">
          {/* Timeline line */}
          <div className="absolute left-6 sm:left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-green-500 via-primary to-muted-foreground/30 hidden md:block" />

          <div className="space-y-4 sm:space-y-6">
            {phases.map((phase, index) => {
              const Icon = getIcon(phase.icon)
              const isHovered = hoveredIndex === index
              const isCurrent = phase.status === "current"

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -50 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                  className="relative"
                >
                  <div
                    className={`relative ml-12 sm:ml-16 md:ml-20 rounded-2xl border-2 transition-all duration-300 ${getStatusBg(
                      phase.status
                    )} ${isHovered ? "scale-[1.02] shadow-xl" : "shadow-sm"} ${
                      isCurrent ? "ring-2 ring-primary ring-offset-2 ring-offset-background" : ""
                    }`}
                  >
                    {/* Icon badge */}
                    <div className="absolute -left-8 sm:-left-9 md:-left-11 top-6 sm:top-1/2 sm:-translate-y-1/2">
                      <motion.div
                        animate={
                          isCurrent
                            ? {
                                scale: [1, 1.2, 1],
                              }
                            : {}
                        }
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          repeatDelay: 0.5,
                        }}
                        className={`w-10 h-10 sm:w-12 sm:h-12 rounded-full border-3 sm:border-4 border-background flex items-center justify-center ${
                          phase.status === "completed"
                            ? "bg-green-500"
                            : phase.status === "current"
                              ? "bg-primary"
                              : "bg-muted-foreground/50"
                        }`}
                      >
                        <Icon className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                      </motion.div>

                      {isCurrent && (
                        <motion.div
                          className="absolute inset-0 rounded-full bg-primary"
                          animate={{
                            scale: [1, 1.5, 1],
                            opacity: [0.5, 0, 0.5],
                          }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                          }}
                        />
                      )}
                    </div>

                    <div className="p-4 sm:p-6">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2 sm:mb-3 gap-1 sm:gap-0">
                        <h3 className="text-base sm:text-lg md:text-xl font-bold">{phase.name}</h3>
                        <span
                          className={`text-xs sm:text-sm font-semibold ${getStatusColor(phase.status)} ${
                            isCurrent ? "flex items-center gap-2" : ""
                          }`}
                        >
                          {isCurrent && <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                          </span>}
                          {phase.period}
                        </span>
                      </div>
                      <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">{phase.description}</p>
                      {isCurrent && (
                        <div className="mt-3 sm:mt-4 inline-flex items-center px-2 sm:px-3 py-1 rounded-full bg-primary/10 text-primary text-[10px] sm:text-xs font-semibold">
                          En progreso ahora
                        </div>
                      )}
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-12 sm:mt-16"
        >
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 sm:px-6 py-2 sm:py-3 rounded-full text-xs sm:text-sm md:text-base font-medium">
            <Clock className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" />
            <span className="whitespace-nowrap">Próximo hito: Lanzamiento MVP - Diciembre 2025</span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
