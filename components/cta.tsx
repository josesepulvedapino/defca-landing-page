"use client"

import { motion } from "framer-motion"
import { useInView } from "@/hooks/use-in-view"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function CTA() {
  const { ref, isInView } = useInView({ threshold: 0.3 })

  return (
    <section ref={ref} className="py-32 bg-background relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/5" />

      <div className="container mx-auto px-4 relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto text-center space-y-8"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-balance">Conceptualizado y Listo para el Campo</h2>

          <p className="text-xl text-muted-foreground text-pretty leading-relaxed">
            Hemos sentado las bases para una solución con alto potencial. Ahora, avanzamos hacia el prototipado y el
            testeo en terreno con productores locales en Ñuble.
          </p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="pt-8"
          >
            <p className="text-lg font-medium mb-6">¿Listo para llevar su gestión fitosanitaria al siguiente nivel?</p>

            <a
              href="https://wa.me/56926873545"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block"
            >
              <Button size="lg" className="h-12 px-8 group">
                Solicitar Acceso Anticipado
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
