"use client"

import { motion } from "framer-motion"
import { useInView } from "@/hooks/use-in-view"
import { AIDetection } from "@/components/features/ai-detection"
import { HealthMapping } from "@/components/features/health-mapping"
import { AIAssistant } from "@/components/features/ai-assistant"
import { OfflineFirst } from "@/components/features/offline-first"
import { ReportsAnalytics } from "@/components/features/reports-analytics"

export function Features() {
  const { ref, isInView } = useInView({ threshold: 0.1 })

  return (
    <section ref={ref} className="py-16 sm:py-24 md:py-32 bg-muted/50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center mb-12 sm:mb-16 md:mb-20"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 text-balance">
            Tecnología de Punta, <span className="text-primary">Aplicada al Campo</span>
          </h2>
        </motion.div>

        <div className="space-y-16 sm:space-y-24 md:space-y-32 max-w-6xl mx-auto">
          <AIDetection />
          <HealthMapping />
          <ReportsAnalytics />
          <AIAssistant />
          <OfflineFirst />
        </div>
      </div>
    </section>
  )
}
