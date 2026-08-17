import React from 'react'
import { motion } from 'framer-motion'
import { BIKES, BIKE_CLASSES } from '../data/bikes.js'
import { bikeSummary } from '../utils/summary.js'

function MiniSilhouette({ cls }) {
  const color = BIKE_CLASSES[cls].color
  const common = {
    fill: 'none',
    stroke: color,
    strokeWidth: 1.6,
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  }
  if (cls === 'sport') {
    return (
      <svg width="120" height="72" viewBox="0 0 120 72">
        <g {...common}>
          <circle cx="16" cy="54" r="15" />
          <circle cx="104" cy="54" r="15" />
          <path d="M16 39 L40 20 L52 18 L58 30 L44 42 Z" />
          <path d="M52 18 L58 30 L64 26" />
          <path d="M44 42 L70 46 L66 52 L46 50 Z" />
          <path d="M16 39 L24 40 M70 46 L104 54" />
          <path d="M30 44 L34 38 M40 40 L44 34" />
        </g>
      </svg>
    )
  }
  if (cls === 'cruiser') {
    return (
      <svg width="130" height="66" viewBox="0 0 130 66">
        <g {...common}>
          <circle cx="16" cy="50" r="14" />
          <circle cx="112" cy="50" r="14" />
          <path d="M24 46 C38 34 46 30 56 30 L64 44 L34 46 Z" />
          <path d="M56 30 L70 30 L86 44 L66 46 Z" />
          <path d="M16 50 L24 46 M86 44 L112 50" />
          <circle cx="34" cy="26" r="5" />
          <path d="M30 42 L34 34 L40 34" />
        </g>
      </svg>
    )
  }
  return (
    <svg width="120" height="70" viewBox="0 0 120 70">
      <g {...common}>
        <circle cx="16" cy="53" r="15" />
        <circle cx="104" cy="53" r="15" />
        <path d="M16 38 L40 24 L52 22 L60 36 L44 44 Z" />
        <path d="M60 36 L78 42 L86 44 L68 40 Z" />
        <path d="M40 24 L46 40 M16 38 L22 38" />
        <path d="M30 44 L34 38 M86 44 L104 53" />
      </g>
    </svg>
  )
}

export default function BikeSelector({ onSelect }) {
  return (
    <div className="fleet">
      <div className="fleet-header fade-in">
        <div className="fleet-title">
          FLEET <span>REGISTRY</span>
        </div>
        <div className="fleet-meta">
          {String(BIKES.length).padStart(2, '0')} UNITS · SELECT VEHICLE FOR DIAGNOSTICS
        </div>
      </div>
      <div className="fleet-grid">
        {BIKES.map((bike, i) => {
          const s = bikeSummary(bike)
          return (
            <motion.div
              key={bike.id}
              className="bike-card"
              onClick={() => onSelect(bike.id)}
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.04 * i, duration: 0.4, ease: 'easeOut' }}
            >
              <div className="card-top">
                <span className="card-index">UNIT {String(i + 1).padStart(2, '0')}</span>
                <span className="card-class">{BIKE_CLASSES[bike.cls].label}</span>
              </div>
              <div className="card-name">{bike.name}</div>
              <div className="card-brand">{bike.brand}</div>
              <div className="card-specs">
                <span>
                  <b>{bike.cc}</b> cc
                </span>
                <span>
                  <b>{bike.power}</b>
                </span>
                <span>
                  <b>{bike.tank}</b>
                </span>
              </div>
              <div className="card-health">
                <span className="health-pip ok">{s.green} OK</span>
                <span className="health-pip warn">{s.amber} DUE</span>
                <span className="health-pip bad">{s.red} FLAG</span>
              </div>
              <div className="card-silhouette">
                <MiniSilhouette cls={bike.cls} />
              </div>
            </motion.div>
          )
        })}
      </div>
    </div>
  )
}