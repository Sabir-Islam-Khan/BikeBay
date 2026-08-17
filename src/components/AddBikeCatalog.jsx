import React from 'react'
import PlainSchematic from './PlainSchematic.jsx'
import { BIKES, BIKE_CLASSES } from '../data/bikes.js'

export default function AddBikeCatalog({ garage, onAdd, onBack }) {
  const added = new Set(garage)

  return (
    <div className="page-solid">
      <header className="solid-header">
        <button className="solid-btn" onClick={onBack}>
          ← BACK
        </button>
        <div className="solid-brand">
          <div className="solid-logo">CHOOSE YOUR BIKE</div>
          <div className="solid-tag">ADD TO GARAGE</div>
        </div>
        <div className="solid-header-count">{added.size}/10 ADDED</div>
      </header>

      <main className="solid-main">
        <div className="catalog-grid">
          {BIKES.map((bike) => {
            const has = added.has(bike.id)
            return (
              <div className="catalog-card" key={bike.id}>
                <div className="cc-top">
                  <span className="cc-class">{BIKE_CLASSES[bike.cls].label}</span>
                  {has && <span className="cc-added">IN GARAGE</span>}
                </div>
                <div className="cc-svg">
                  <PlainSchematic bikeId={bike.id} />
                </div>
                <div className="cc-name">{bike.name}</div>
                <div className="cc-brand">{bike.brand}</div>
                <div className="cc-specs">
                  <span>{bike.cc} cc</span>
                  <span>{bike.power}</span>
                  <span>{bike.tank}</span>
                  <span>{bike.weight}</span>
                  <span>{bike.transmission}</span>
                </div>
                <button className="solid-btn cc-add" disabled={has} onClick={() => onAdd(bike.id)}>
                  {has ? 'ADDED ✓' : '+ ADD TO GARAGE'}
                </button>
              </div>
            )
          })}
        </div>
      </main>
    </div>
  )
}