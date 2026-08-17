import React from 'react'
import PlainSchematic from './PlainSchematic.jsx'
import { BIKE_MAP, BIKE_CLASSES, BIKES } from '../data/bikes.js'

const FEATURED_BIKES = BIKES.slice(0, 6)

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
          <div className="empty-state">
            <div className="empty-hero">
              <div className="empty-hero-badge">MOTORCYCLE MAINTENANCE</div>
              <h1 className="empty-hero-title">
                TRACK EVERY PART.<br />
                <span className="empty-hero-accent">NEVER MISS A SERVICE.</span>
              </h1>
              <p className="empty-hero-desc">
                Add your motorcycles to BIKELAB and get interactive schematics,
                service logging, and smart maintenance reminders for every part.
              </p>
              <button className="solid-btn solid-btn-accent big" onClick={onAdd}>
                ADD YOUR FIRST BIKE
              </button>
            </div>

            <div className="empty-features">
              <div className="empty-feature">
                <div className="empty-feature-icon">
                  <svg viewBox="0 0 32 32" width="32" height="32">
                    <circle cx="16" cy="16" r="14" fill="none" stroke="var(--p-accent)" strokeWidth="1.5" />
                    <circle cx="10" cy="18" r="5" fill="none" stroke="var(--p-accent)" strokeWidth="1.2" />
                    <circle cx="22" cy="18" r="5" fill="none" stroke="var(--p-accent)" strokeWidth="1.2" />
                    <line x1="10" y1="18" x2="22" y2="18" stroke="var(--p-accent)" strokeWidth="0.8" strokeDasharray="2 2" />
                  </svg>
                </div>
                <div className="empty-feature-title">INTERACTIVE SCHEMATICS</div>
                <div className="empty-feature-desc">Click any part on the blueprint to inspect it</div>
              </div>
              <div className="empty-feature">
                <div className="empty-feature-icon">
                  <svg viewBox="0 0 32 32" width="32" height="32">
                    <rect x="4" y="6" width="24" height="20" rx="3" fill="none" stroke="var(--p-accent)" strokeWidth="1.5" />
                    <line x1="4" y1="12" x2="28" y2="12" stroke="var(--p-accent)" strokeWidth="1" />
                    <line x1="10" y1="16" x2="22" y2="16" stroke="var(--p-accent)" strokeWidth="1" opacity="0.6" />
                    <line x1="10" y1="20" x2="18" y2="20" stroke="var(--p-accent)" strokeWidth="1" opacity="0.4" />
                  </svg>
                </div>
                <div className="empty-feature-title">SERVICE LOGGING</div>
                <div className="empty-feature-desc">Record every oil change, brake pad swap, and chain clean</div>
              </div>
              <div className="empty-feature">
                <div className="empty-feature-icon">
                  <svg viewBox="0 0 32 32" width="32" height="32">
                    <circle cx="16" cy="16" r="12" fill="none" stroke="var(--p-accent)" strokeWidth="1.5" />
                    <circle cx="16" cy="16" r="4" fill="#00c853" opacity="0.6" />
                    <path d="M 16 4 L 16 8 M 16 24 L 16 28 M 4 16 L 8 16 M 24 16 L 28 16" stroke="var(--p-accent)" strokeWidth="1" />
                  </svg>
                </div>
                <div className="empty-feature-title">HEALTH MONITORING</div>
                <div className="empty-feature-desc">Parts glow green, amber, or red based on wear</div>
              </div>
            </div>

            <div className="empty-preview">
              <div className="empty-preview-header">
                <span className="empty-preview-label">AVAILABLE BIKES</span>
                <span className="empty-preview-count">{BIKES.length} MODELS</span>
              </div>
              <div className="empty-preview-grid">
                {FEATURED_BIKES.map((bike) => (
                  <div className="empty-preview-card" key={bike.id}>
                    <div className="empty-preview-svg">
                      <PlainSchematic bikeId={bike.id} />
                    </div>
                    <div className="empty-preview-info">
                      <div className="empty-preview-name">{bike.name}</div>
                      <div className="empty-preview-brand">{bike.brand}</div>
                      <div className="empty-preview-specs">
                        {bike.cc}cc · {bike.power}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="empty-preview-more">
                <button className="solid-btn solid-btn-accent" onClick={onAdd}>
                  VIEW ALL {BIKES.length} BIKES →
                </button>
              </div>
            </div>
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
