"use client"

import { motion } from "framer-motion"
import { useInView } from "@/hooks/use-in-view"
import { MapPin, Users, Wifi, Smartphone } from "lucide-react"

const stats = [
  {
    icon: MapPin,
    value: "Ñuble",
    label: "Región de Origen",
    description: "Corazón agrícola de Chile",
  },
  {
    icon: Wifi,
    value: "33.8%",
    label: "Cobertura Rural",
    description: "Internet estable en zonas productivas",
  },
  {
    icon: Users,
    value: "69%",
    label: "Sector Frutícola",
    description: "En fase inicial de digitalización",
  },
  {
    icon: Smartphone,
    value: "48%",
    label: "Trabajadores 35-65",
    description: "Con habilidades digitales limitadas",
  },
]

const solutions = [
  {
    title: "Conectividad Garantizada",
    description:
      "Para zonas sin cobertura, ofrecemos planes especiales que incluyen Starlink Mini, asegurando acceso constante.",
    highlight: "Starlink Mini incluido",
  },
  {
    title: "Diseño Ultra-Simplificado",
    description:
      "Interfaz intuitiva diseñada para trabajadores del campo, sin complejidad técnica. Capacitación incluida.",
    highlight: "Sin curva de aprendizaje",
  },
  {
    title: "Capacidad Offline",
    description:
      "Funcionalidades básicas disponibles sin internet. La sincronización y análisis avanzados requieren conectividad.",
    highlight: "Funcionalidad básica offline",
  },
]

export function About() {
  const { ref, isInView } = useInView({ threshold: 0.1 })

  return (
    <section ref={ref} className="py-32 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance">
            Nacimos en el Campo, <span className="text-primary">para el Campo</span>
          </h2>
          <p className="text-xl text-muted-foreground text-pretty leading-relaxed">
            DEFCA surge desde la Región de Ñuble, entendiendo de primera mano los desafíos reales que enfrentan los
            productores agrícolas chilenos.
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-24 max-w-6xl mx-auto">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-muted/30 rounded-2xl p-6 text-center hover:bg-muted/50 transition-colors"
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={isInView ? { scale: 1 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
                className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4"
              >
                <stat.icon className="w-6 h-6 text-primary" />
              </motion.div>
              <div className="text-3xl font-bold text-primary mb-2">{stat.value}</div>
              <div className="text-sm font-semibold mb-1">{stat.label}</div>
              <div className="text-xs text-muted-foreground">{stat.description}</div>
            </motion.div>
          ))}
        </div>

        {/* Challenge */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="max-w-4xl mx-auto mb-20"
        >
          <div className="bg-gradient-to-br from-muted/50 to-muted/30 rounded-3xl p-8 md:p-12 border border-border/40">
            <h3 className="text-2xl md:text-3xl font-bold mb-6 text-balance">El Desafío de la Digitalización Rural</h3>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              Con apenas <strong className="text-foreground">5-10 Mbps</strong> de velocidad promedio en zonas rurales
              y trabajadores con habilidades digitales limitadas, la adopción tecnológica en la agricultura representa
              un desafío complejo.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              La realidad del sector frutícola chileno muestra que el{" "}
              <strong className="text-foreground">69% de las empresas</strong> apenas está iniciando su proceso de
              digitalización, mientras que solo el <strong className="text-foreground">3%</strong> ha logrado una
              integración completa.
            </p>
          </div>
        </motion.div>

        {/* Our Solutions */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="max-w-5xl mx-auto"
        >
          <h3 className="text-3xl md:text-4xl font-bold text-center mb-12 text-balance">
            Nuestra <span className="text-primary">Solución Integral</span>
          </h3>

          <div className="grid md:grid-cols-3 gap-8">
            {solutions.map((solution, index) => (
              <motion.div
                key={solution.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.8 + index * 0.15 }}
                className="relative group"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-primary/5 rounded-2xl blur-xl group-hover:blur-2xl transition-all" />
                <div className="relative bg-background border border-border/40 rounded-2xl p-6 hover:border-primary/40 transition-colors h-full">
                  <div className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold mb-4">
                    {solution.highlight}
                  </div>
                  <h4 className="text-xl font-bold mb-3">{solution.title}</h4>
                  <p className="text-muted-foreground leading-relaxed">{solution.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
