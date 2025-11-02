"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Leaf } from "lucide-react"

export function Header() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" })
    }
  }

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border/60"
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 gap-2">
          {/* Logo */}
          <motion.button
            onClick={() => scrollToSection("hero")}
            className="flex items-center gap-2 group cursor-pointer flex-shrink-0"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <div className="relative w-8 h-8 sm:w-10 sm:h-10 bg-primary rounded-xl flex items-center justify-center group-hover:shadow-lg transition-shadow">
              <Leaf className="w-5 h-5 sm:w-6 sm:h-6 text-primary-foreground" strokeWidth={2.5} />
              <motion.div
                className="absolute inset-0 bg-primary/20 rounded-xl"
                initial={{ scale: 0 }}
                animate={{ scale: [0, 1.2, 0] }}
                transition={{ duration: 2, repeat: Infinity, repeatDelay: 1 }}
              />
            </div>
            <div className="flex flex-col items-start">
              <span className="text-lg sm:text-xl font-bold tracking-tight">DEFCA</span>
              <span className="text-[10px] text-muted-foreground -mt-1 hidden sm:block">Sistema de gestión fitosanitario</span>
            </div>
          </motion.button>

          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-1">
            {[
              { label: "Inicio", id: "hero" },
              { label: "Nosotros", id: "about" },
              { label: "Características", id: "features" },
              { label: "Roadmap", id: "roadmap" },
            ].map((item, index) => (
              <motion.button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index, duration: 0.4 }}
                className="px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors rounded-lg hover:bg-muted/50"
              >
                {item.label}
              </motion.button>
            ))}
          </nav>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.4 }}
            className="flex-shrink-0"
          >
            <a
              href="https://wa.me/56926873545"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                size="sm"
                className="shadow-sm hover:shadow-md transition-shadow text-xs sm:text-sm px-3 sm:px-4"
              >
                <span className="hidden sm:inline">Solicitar Acceso</span>
                <span className="sm:hidden">Solicitar</span>
              </Button>
            </a>
          </motion.div>
        </div>
      </div>
    </motion.header>
  )
}
