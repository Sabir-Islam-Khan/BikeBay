import React from 'react'
import PlainSchematic from './PlainSchematic.jsx'
import { BIKE_MAP, BIKE_CLASSES } from '../data/bikes.js'

export default function HomePage({ garage, onAdd, onOpen, onRemove }) {
  const bikes = garage.map((id) => BIKE_MAP[id]).filter(Boolean)

  return (
    <div className="page-solid">
      <header className="solid-header">
        <div className="solid-brand">
          <div className="solid-logo">BIKELAB</div>
          <div className="solid-tag">YOUR GARAGE</div>
        </div>
        <button className="solid-btn solid-btn-accent" onClick={onAdd}>
          + ADD BIKE
        </button>
      </header>

      <main className="solid-main">
        {bikes.length === 0 ? (
          <div className="empty-garage">
            <h2>Your garage is empty</h2>
            <p>Add the bikes you own. Each one gets its own engineering bay with a full schematic and service tracking.</p>
            <button className="solid-btn solid-btn-accent big" onClick={onAdd}>
              ADD YOUR FIRST BIKE
            </button>
          </div>
        ) : (
          <>
            <div className="garage-head">
              <h1>YOUR BIKES</h1>
              <span>{bikes.length} OF 10</span>
            </div>
            <div className="garage-grid">
              {bikes.map((bike) => (
                <div className="garage-card" key={bike.id}>
                  <div className="gc-head">
                    <div>
                      <div className="gc-name">{bike.name}</div>
                      <div className="gc-brand">
                        {bike.brand} · {BIKE_CLASSES[bike.cls].label}
                      </div>
                    </div>
                    <button className="gc-remove" onClick={() => onRemove(bike.id)} aria-label="remove bike" title="Remove">
                      ✕
                    </button>
                  </div>

                  <div className="gc-svg">
                    <PlainSchematic bikeId={bike.id} />
                  </div>

                  <div className="gc-specs">
                    <span>
                      <b>{bike.cc}</b> cc
                    </span>
                    <span>
                      <b>{bike.power}</b>
                    </span>
                    <span>
                      <b>{bike.tank}</b> tank
                    </span>
                    <span>
                      <b>{bike.weight}</b>
                    </span>
                  </div>

                  <div className="gc-meta">
                    <span>ODO {bike.odo} KM</span>
                    <span>{bike.transmission}</span>
                  </div>

                  <button className="solid-btn gc-open" onClick={() => onOpen(bike.id)}>
                    OPEN ENGINEERING BAY →
                  </button>
                </div>
              ))}
            </div>
          </>
        )}
      </main>
    </div>
  )
}