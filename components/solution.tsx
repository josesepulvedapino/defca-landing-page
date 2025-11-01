"use client"

import { motion } from "framer-motion"
import { useInView } from "@/hooks/use-in-view"
import { Shield, Smartphone, TrendingUp } from "lucide-react"

const attributes = [
  {
    icon: Shield,
    title: "Confiable",
    description: "Análisis impulsados por IA generativa avanzada, con modelo especializado en desarrollo.",
  },
  {
    icon: Smartphone,
    title: "Accesible",
    description: "Un diseño centrado en la máxima simplicidad.",
  },
  {
    icon: TrendingUp,
    title: "Preventivo",
    description: "Integramos un asistente proactivo para que pueda anticiparse a los problemas.",
  },
]

export function Solution() {
  const { ref, isInView } = useInView({ threshold: 0.2 })

  return (
    <section ref={ref} className="py-32 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance">
            DEFCA: Su <span className="text-primary">Doctor de Bolsillo</span> para el Cultivo
          </h2>
          <p className="text-xl text-muted-foreground text-pretty leading-relaxed">
            DEFCA es una aplicación web (WebApp) que convierte su celular en un poderoso asistente fitosanitario. Usamos
            Inteligencia Artificial especializada para darle respuestas claras y accionables, basadas en tres atributos
            clave:
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {attributes.map((attr, index) => (
            <motion.div
              key={attr.title}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-primary/5 rounded-3xl blur-xl group-hover:blur-2xl transition-all" />
              <div className="relative bg-background border-2 border-primary/20 rounded-3xl p-8 hover:border-primary/40 transition-colors">
                <motion.div
                  initial={{ rotate: -180, scale: 0 }}
                  animate={isInView ? { rotate: 0, scale: 1 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.15 + 0.3 }}
                  className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center mb-6"
                >
                  <attr.icon className="w-8 h-8 text-primary-foreground" />
                </motion.div>

                <h3 className="text-2xl font-bold mb-4">{attr.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{attr.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
