"use client"

import { motion, AnimatePresence } from "framer-motion"
import { useInView } from "@/hooks/use-in-view"
import { Map, X } from "lucide-react"
import { useState } from "react"

type CellStatus = "healthy" | "warning" | "danger"

interface CellData {
  id: number
  status: CellStatus
  plants: number
  affected: number
}

export function HealthMapping() {
  const { ref, isInView } = useInView({ threshold: 0.3 })
  const [selectedCell, setSelectedCell] = useState<CellData | null>(null)

  const gridCells: CellData[] = Array.from({ length: 25 }, (_, i) => ({
    id: i,
    status: i % 7 === 0 ? "warning" : i % 11 === 0 ? "danger" : "healthy",
    plants: Math.floor(Math.random() * 50) + 20,
    affected: i % 7 === 0 ? Math.floor(Math.random() * 10) + 5 : i % 11 === 0 ? Math.floor(Math.random() * 20) + 10 : 0,
  }))

  const getColor = (status: CellStatus) => {
    switch (status) {
      case "healthy":
        return "rgb(34, 197, 94)"
      case "warning":
        return "rgb(234, 179, 8)"
      case "danger":
        return "rgb(239, 68, 68)"
    }
  }

  return (
    <div ref={ref} className="grid lg:grid-cols-2 gap-12 items-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={isInView ? { opacity: 1, scale: 1 } : {}}
        transition={{ duration: 0.8 }}
        className="relative order-2 lg:order-1"
      >
        <div className="relative bg-gradient-to-br from-background to-muted rounded-3xl p-8 aspect-square">
          <div className="grid grid-cols-5 gap-2 h-full">
            {gridCells.map((cell) => (
              <motion.button
                key={cell.id}
                initial={{ opacity: 0, scale: 0 }}
                animate={
                  isInView
                    ? {
                        opacity: 1,
                        scale: 1,
                        backgroundColor: ["rgb(34, 197, 94)", getColor(cell.status)],
                      }
                    : {}
                }
                transition={{
                  duration: 0.5,
                  delay: cell.id * 0.05,
                  backgroundColor: { duration: 1, delay: cell.id * 0.05 + 0.5 },
                }}
                className="rounded-lg cursor-pointer hover:scale-110 transition-transform"
                onClick={() => setSelectedCell(cell)}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              />
            ))}
          </div>

          {isInView && !selectedCell && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 2 }}
              className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-background border-2 border-primary px-6 py-3 rounded-full shadow-lg whitespace-nowrap"
            >
              <span className="text-sm font-medium">Mapa de salud generado</span>
            </motion.div>
          )}

          <AnimatePresence>
            {selectedCell && (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                className="absolute inset-0 flex items-center justify-center p-4"
              >
                <div className="bg-background border-2 border-primary rounded-2xl p-6 shadow-2xl max-w-xs w-full">
                  <div className="flex items-start justify-between mb-4">
                    <h4 className="text-lg font-bold">Segmento {selectedCell.id + 1}</h4>
                    <button
                      onClick={() => setSelectedCell(null)}
                      className="text-muted-foreground hover:text-foreground transition-colors"
                    >
                      <X className="w-5 h-5" />
                    </button>
                  </div>

                  <div className="space-y-3">
                    <div className="flex items-center gap-2">
                      <div className="w-4 h-4 rounded" style={{ backgroundColor: getColor(selectedCell.status) }} />
                      <span className="text-sm font-medium">
                        {selectedCell.status === "healthy" && "Saludable"}
                        {selectedCell.status === "warning" && "Atención"}
                        {selectedCell.status === "danger" && "Crítico"}
                      </span>
                    </div>

                    <div className="text-sm space-y-2 bg-muted rounded-lg p-3">
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Plantas:</span>
                        <span className="font-semibold">{selectedCell.plants}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Afectadas:</span>
                        <span className="font-semibold">{selectedCell.affected}</span>
                      </div>
                      {selectedCell.affected > 0 && (
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Porcentaje:</span>
                          <span className="font-semibold">
                            {Math.round((selectedCell.affected / selectedCell.plants) * 100)}%
                          </span>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={isInView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.8 }}
        className="space-y-6 order-1 lg:order-2"
      >
        <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium">
          <Map className="w-4 h-4" />
          Mapeo Inteligente
        </div>

        <h3 className="text-3xl md:text-4xl font-bold text-balance">Mapeo Sanitario</h3>

        <p className="text-lg text-muted-foreground leading-relaxed">
          Mapee la salud de su predio, segmento por segmento. Visualice focos de infección y gestione su campo, no solo
          una planta.
        </p>
      </motion.div>
    </div>
  )
}
