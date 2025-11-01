"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ScanAnimation } from "@/components/scan-animation"

export function Hero() {
    const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" })
    }
  }
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-background to-muted/20 pt-16">
      <div className="container mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-balance">
              La Salud de sus Avellanos, <span className="text-primary">en sus Manos</span>
            </h1>

            <p className="text-xl md:text-2xl text-muted-foreground text-pretty leading-relaxed">
              DEFCA: La plataforma inteligente que detecta enfermedades foliares con su celular. Rápida, confiable y
              diseñada para el campo chileno.
            </p>

            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4, duration: 0.6 }}>
              <a
                href="https://wa.me/56926873545"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button size="lg" className="text-lg px-8 py-6 h-auto" >
                  Solicitar Acceso
                </Button>
              </a>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative"
          >
            <ScanAnimation />
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  )
}
