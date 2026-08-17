import React, { useState } from 'react'
import { BIKES, BIKE_CLASSES } from '../data/bikes.js'
import PlainSchematic from './PlainSchematic.jsx'

const STEPS = [
  {
    title: 'WELCOME TO BIKELAB',
    subtitle: 'YOUR MOTORCYCLE MAINTENANCE COMMAND CENTER',
    desc: 'Track every part of your motorcycle. Log services. Get alerts before things go wrong.',
  },
  {
    title: 'ADD YOUR BIKES',
    subtitle: 'BUILD YOUR DIGITAL GARAGE',
    desc: 'Pick from our catalog of 10 popular motorcycles. Each one gets its own detailed schematic and service tracker.',
  },
  {
    title: 'ENGINEERING BAY',
    subtitle: 'INTERACTIVE BLUEPRINT SCHEMATICS',
    desc: 'Click any part on the blueprint to see its health status, service history, and maintenance tips. Log oil changes, brake pads, chain cleaning and more.',
  },
  {
    title: 'STAY ON TOP',
    subtitle: 'SMART SERVICE REMINDERS',
    desc: 'Parts change color based on wear — green means good, amber means coming due, red means overdue. Never miss a service interval again.',
  },
]

export default function Onboarding({ onComplete }) {
  const [step, setStep] = useState(0)
  const [dontShow, setDontShow] = useState(false)

  const isLast = step === STEPS.length - 1
  const current = STEPS[step]

  const handleFinish = () => {
    if (dontShow) {
      localStorage.setItem('bikelab:onboarding-done', '1')
    }
    onComplete()
  }

  const handleNext = () => {
    if (isLast) {
      handleFinish()
    } else {
      setStep(step + 1)
    }
  }

  const previewBikes = BIKES.slice(0, 4)

  return (
    <div className="onboarding-overlay">
      <div className="onboarding-card">
        <div className="onboarding-step-indicator">
          {STEPS.map((_, i) => (
            <div key={i} className={`onb-dot ${i === step ? 'active' : i < step ? 'done' : ''}`} />
          ))}
        </div>

        <div className="onboarding-content">
          <div className="onboarding-icon">
            {step === 0 && (
              <svg viewBox="0 0 80 80" width="80" height="80">
                <circle cx="40" cy="40" r="36" fill="none" stroke="var(--p-accent)" strokeWidth="2" strokeDasharray="4 4" />
                <circle cx="40" cy="40" r="24" fill="none" stroke="var(--p-accent)" strokeWidth="1.5" opacity="0.5" />
                <circle cx="40" cy="40" r="8" fill="var(--p-accent)" opacity="0.3" />
                <circle cx="40" cy="40" r="3" fill="var(--p-accent)" />
              </svg>
            )}
            {step === 1 && (
              <svg viewBox="0 0 80 80" width="80" height="80">
                <rect x="8" y="20" width="28" height="40" rx="4" fill="none" stroke="var(--p-accent)" strokeWidth="1.5" />
                <rect x="44" y="20" width="28" height="40" rx="4" fill="none" stroke="var(--p-accent)" strokeWidth="1.5" opacity="0.5" />
                <line x1="22" y1="34" x2="22" y2="46" stroke="var(--p-accent)" strokeWidth="2" />
                <line x1="16" y1="40" x2="28" y2="40" stroke="var(--p-accent)" strokeWidth="2" />
              </svg>
            )}
            {step === 2 && (
              <svg viewBox="0 0 80 80" width="80" height="80">
                <rect x="10" y="10" width="60" height="60" rx="6" fill="none" stroke="var(--p-accent)" strokeWidth="1.5" />
                <circle cx="30" cy="44" r="12" fill="none" stroke="var(--p-accent)" strokeWidth="1.5" />
                <circle cx="56" cy="44" r="12" fill="none" stroke="var(--p-accent)" strokeWidth="1.5" />
                <line x1="30" y1="44" x2="56" y2="44" stroke="var(--p-accent)" strokeWidth="1" strokeDasharray="3 3" />
                <circle cx="43" cy="44" r="3" fill="var(--p-accent)" opacity="0.5" />
              </svg>
            )}
            {step === 3 && (
              <svg viewBox="0 0 80 80" width="80" height="80">
                <circle cx="24" cy="40" r="10" fill="none" stroke="#00c853" strokeWidth="2" />
                <circle cx="40" cy="40" r="10" fill="none" stroke="#ffb020" strokeWidth="2" />
                <circle cx="56" cy="40" r="10" fill="none" stroke="#ff3b3b" strokeWidth="2" />
                <circle cx="24" cy="40" r="4" fill="#00c853" opacity="0.5" />
                <circle cx="40" cy="40" r="4" fill="#ffb020" opacity="0.5" />
                <circle cx="56" cy="40" r="4" fill="#ff3b3b" opacity="0.5" />
              </svg>
            )}
          </div>

          <h2 className="onboarding-title">{current.title}</h2>
          <p className="onboarding-subtitle">{current.subtitle}</p>
          <p className="onboarding-desc">{current.desc}</p>

          {step === 1 && (
            <div className="onboarding-preview-bikes">
              {previewBikes.map((bike) => (
                <div className="onb-preview-bike" key={bike.id}>
                  <div className="onb-preview-svg">
                    <PlainSchematic bikeId={bike.id} />
                  </div>
                  <div className="onb-preview-name">{bike.name}</div>
                </div>
              ))}
              <div className="onb-preview-more">+{BIKES.length - 4} MORE</div>
            </div>
          )}

          {step === 2 && (
            <div className="onboarding-bay-preview">
              <div className="onb-bay-grid">
                <div className="onb-bay-item">
                  <div className="onb-bay-dot green" />
                  <span>15 clickable parts</span>
                </div>
                <div className="onb-bay-item">
                  <div className="onb-bay-dot cyan" />
                  <span>Service logging</span>
                </div>
                <div className="onb-bay-item">
                  <div className="onb-bay-dot amber" />
                  <span>Health tracking</span>
                </div>
                <div className="onb-bay-item">
                  <div className="onb-bay-dot red" />
                  <span>Maintenance tips</span>
                </div>
              </div>
            </div>
          )}
        </div>

        <div className="onboarding-actions">
          <label className="onb-checkbox-label">
            <input
              type="checkbox"
              className="onb-checkbox"
              checked={dontShow}
              onChange={(e) => setDontShow(e.target.checked)}
            />
            <span className="onb-checkbox-custom" />
            <span className="onb-checkbox-text">Don't show this again</span>
          </label>

          <div className="onb-btn-group">
            {step > 0 && (
              <button className="onb-btn onb-btn-ghost" onClick={() => setStep(step - 1)}>
                BACK
              </button>
            )}
            <button className="onb-btn onb-btn-primary" onClick={handleNext}>
              {isLast ? 'GET STARTED' : 'NEXT'}
            </button>
          </div>
        </div>

        <button className="onb-skip" onClick={handleFinish}>
          SKIP INTRO
        </button>
      </div>
    </div>
  )
}
