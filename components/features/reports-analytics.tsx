"use client"

import { motion } from "framer-motion"
import { useInView } from "@/hooks/use-in-view"
import { FileText, TrendingUp, AlertTriangle, CheckCircle2 } from "lucide-react"
import { useState } from "react"

type ReportType = "detection" | "mapping" | null

export function ReportsAnalytics() {
  const { ref, isInView } = useInView({ threshold: 0.2 })
  const [selectedReport, setSelectedReport] = useState<ReportType>(null)

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8 }}
      className="grid md:grid-cols-2 gap-12 items-center"
    >
      <div className="order-1">
        <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
          <FileText className="w-4 h-4" />
          Reportes Inteligentes
        </div>
        <h3 className="text-3xl md:text-4xl font-bold mb-6 text-balance">
          Análisis Detallados y Recomendaciones Precisas
        </h3>
        <p className="text-lg text-muted-foreground mb-8 text-pretty">
          Generamos reportes completos de cada detección y del mapeo digital de tu cultivo, con recomendaciones
          específicas sobre cómo actuar ante cada situación.
        </p>

        <div className="space-y-4">
          <motion.button
            onClick={() => setSelectedReport(selectedReport === "detection" ? null : "detection")}
            className="w-full text-left p-4 rounded-xl border-2 transition-all hover:border-primary/50"
            style={{
              borderColor: selectedReport === "detection" ? "hsl(var(--primary))" : "hsl(var(--border))",
              backgroundColor: selectedReport === "detection" ? "hsl(var(--primary) / 0.05)" : "transparent",
            }}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                <AlertTriangle className="w-5 h-5 text-primary" />
              </div>
              <div className="flex-1">
                <h4 className="font-semibold mb-1">Reportes de Detección</h4>
                <p className="text-sm text-muted-foreground">
                  Análisis individual de cada planta escaneada con nivel de confianza, tipo de enfermedad y acciones
                  recomendadas
                </p>
              </div>
            </div>
          </motion.button>

          <motion.button
            onClick={() => setSelectedReport(selectedReport === "mapping" ? null : "mapping")}
            className="w-full text-left p-4 rounded-xl border-2 transition-all hover:border-primary/50"
            style={{
              borderColor: selectedReport === "mapping" ? "hsl(var(--primary))" : "hsl(var(--border))",
              backgroundColor: selectedReport === "mapping" ? "hsl(var(--primary) / 0.05)" : "transparent",
            }}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                <TrendingUp className="w-5 h-5 text-primary" />
              </div>
              <div className="flex-1">
                <h4 className="font-semibold mb-1">Análisis de Mapeo Digital</h4>
                <p className="text-sm text-muted-foreground">
                  Reportes completos del estado sanitario de tu campo con tendencias, zonas críticas y estrategias de
                  tratamiento
                </p>
              </div>
            </div>
          </motion.button>
        </div>
      </div>

      <div className="relative order-2">
        <motion.div
          className="bg-gradient-to-br from-muted/90 to-muted/70 rounded-2xl p-8 shadow-xl"
          animate={selectedReport ? { scale: 1.02 } : { scale: 1 }}
          transition={{ duration: 0.3 }}
        >
          {!selectedReport && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center py-12">
              <FileText className="w-16 h-16 text-muted-foreground/30 mx-auto mb-4" />
              <p className="text-muted-foreground">Selecciona un tipo de reporte para ver un ejemplo</p>
            </motion.div>
          )}

          {selectedReport === "detection" && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="space-y-4"
            >
              <div className="flex items-center justify-between mb-6">
                <h4 className="font-bold text-lg">Reporte de Detección</h4>
                <span className="text-xs text-muted-foreground">15 Oct 2024</span>
              </div>

              <div className="bg-background rounded-lg p-4 space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">Estado</span>
                  <span className="flex items-center gap-2 text-sm font-semibold text-red-500">
                    <AlertTriangle className="w-4 h-4" />
                    Enfermedad Detectada
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">Tipo</span>
                  <span className="text-sm font-semibold">Tizón del avellano</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">Confianza</span>
                  <span className="text-sm font-semibold">94%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">Severidad</span>
                  <span className="text-sm font-semibold text-orange-500">Media</span>
                </div>
              </div>

              <div className="bg-primary/5 border border-primary/20 rounded-lg p-4">
                <h5 className="font-semibold text-sm mb-2 flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-primary" />
                  Recomendaciones
                </h5>
                <ul className="text-sm text-muted-foreground space-y-1 ml-6 list-disc">
                  <li>Aplicar fungicida de contacto en zona afectada</li>
                  <li>Monitorear plantas cercanas cada 3 días</li>
                  <li>Mejorar ventilación en el área</li>
                  <li>Revisar sistema de riego</li>
                </ul>
              </div>
            </motion.div>
          )}

          {selectedReport === "mapping" && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="space-y-4"
            >
              <div className="flex items-center justify-between mb-6">
                <h4 className="font-bold text-lg">Análisis de Campo</h4>
                <span className="text-xs text-muted-foreground">Octubre 2024</span>
              </div>

              <div className="bg-background rounded-lg p-4 space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">Estado General</span>
                  <span className="text-sm font-semibold text-green-500">Bueno</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">Plantas Sanas</span>
                  <span className="text-sm font-semibold">87%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">Zonas Críticas</span>
                  <span className="text-sm font-semibold">2 detectadas</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">Tendencia</span>
                  <span className="text-sm font-semibold text-green-500 flex items-center gap-1">
                    <TrendingUp className="w-3 h-3" />
                    Mejorando
                  </span>
                </div>
              </div>

              <div className="bg-primary/5 border border-primary/20 rounded-lg p-4">
                <h5 className="font-semibold text-sm mb-2 flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-primary" />
                  Estrategia Recomendada
                </h5>
                <ul className="text-sm text-muted-foreground space-y-1 ml-6 list-disc">
                  <li>Tratamiento preventivo en sector noreste</li>
                  <li>Aumentar frecuencia de monitoreo en zona crítica</li>
                  <li>Mantener protocolo actual en áreas sanas</li>
                  <li>Programar revisión completa en 2 semanas</li>
                </ul>
              </div>
            </motion.div>
          )}
        </motion.div>
      </div>
    </motion.div>
  )
}
