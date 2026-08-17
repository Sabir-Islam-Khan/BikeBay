import React, { useState, useCallback } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import Schematic from '../bikes/index.jsx'
import { PART_MAP } from '../data/partsCatalog.js'

export default function BikeViewport({ bike, health, selected, onSelect }) {
  const [tip, setTip] = useState(null)

  const handleHover = useCallback((partId, e) => {
    const part = PART_MAP[partId]
    if (!part) return
    setTip({ partId, x: e.clientX, y: e.clientY })
  }, [])

  const handleHoverEnd = useCallback(() => setTip(null), [])

  return (
    <div className="viewport-wrap">
      <div className="bike-label">SIDE ELEVATION · HOVER TO SCAN · CLICK TO OPEN DOSSIER</div>
      <div className="scan-status">&#9673; LIVE TELEMETRY</div>
      <div className="scan-sweep" />
      <Schematic
        bikeId={bike.id}
        health={health}
        selected={selected}
        onSelect={onSelect}
        onHover={handleHover}
        onHoverEnd={handleHoverEnd}
      />

      <AnimatePresence>
        {tip && PART_MAP[tip.partId] && (
          <motion.div
            className="pt-tooltip"
            style={{ left: tip.x, top: tip.y }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.12 }}
          >
            {PART_MAP[tip.partId].label}
            <span className="tt-status" style={{ color: statusColor(health(tip.partId)) }}>
              {statusText(health(tip.partId))}
            </span>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

function statusColor(h) {
  if (h === 'green') return 'var(--green)'
  if (h === 'amber') return 'var(--amber)'
  if (h === 'red') return 'var(--red)'
  return 'var(--muted)'
}

function statusText(h) {
  return { green: 'OPERATIONAL', amber: 'DUE SOON', red: 'OVERDUE — FLAG', unknown: 'NO SERVICE DATA' }[h] || ''
}