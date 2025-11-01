"use client"

import { motion } from "framer-motion"
import { useInView } from "@/hooks/use-in-view"
import { DollarSign, Wifi, Users } from "lucide-react"

const barriers = [
  {
    icon: DollarSign,
    title: "Económica",
    description: "Los diagnósticos tradicionales son lentos e impiden una respuesta preventiva.",
  },
  {
    icon: Wifi,
    title: "Tecnológica",
    description: "La baja conectividad rural en zonas clave hace inviables la mayoría de las soluciones digitales.",
  },
  {
    icon: Users,
    title: "Humana",
    description:
      "Las herramientas suelen ser demasiado complejas, creando una barrera de adopción para el trabajo diario en el campo.",
  },
]

export function Problem() {
  const { ref, isInView } = useInView({ threshold: 0.2 })

  return (
    <section ref={ref} className="py-32 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance">
            El Manejo Fitosanitario Tradicional Ya No es Suficiente
          </h2>
          <p className="text-xl text-muted-foreground text-pretty leading-relaxed">
            Proteger su inversión en avellanos es un desafío constante. El manejo de enfermedades enfrenta hoy una
            triple barrera:
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {barriers.map((barrier, index) => (
            <motion.div
              key={barrier.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-background rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow"
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={isInView ? { scale: 1 } : {}}
                transition={{ duration: 0.5, delay: index * 0.2 + 0.3 }}
                className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-6"
              >
                <barrier.icon className="w-8 h-8 text-primary" />
              </motion.div>

              <h3 className="text-2xl font-bold mb-4">{barrier.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{barrier.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
