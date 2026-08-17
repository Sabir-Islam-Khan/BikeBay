import React, { useState, useEffect } from 'react'

const LINES = [
  'INITIALIZING FLEET DATABASE ......... OK',
  'CALIBRATING SENSOR GRID ............. OK',
  'LOADING SCHEMATIC ENGINE ............ OK',
  'AUTH: SERVICE KEY VALIDATED ......... OK',
  'BOOTING BIKELAB DIAGNOSTICS HUD ..... READY',
]

export default function BootScreen({ onDone }) {
  const [line, setLine] = useState(0)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const iv = setInterval(() => {
      setProgress((p) => {
        if (p >= 100) {
          clearInterval(iv)
          return 100
        }
        return p + 1
      })
    }, 28)
    return () => clearInterval(iv)
  }, [])

  useEffect(() => {
    const lineIdx = Math.min(LINES.length - 1, Math.floor((progress / 100) * LINES.length))
    setLine(lineIdx)
  }, [progress])

  useEffect(() => {
    if (progress >= 100) {
      const t = setTimeout(onDone, 450)
      return () => clearTimeout(t)
    }
  }, [progress, onDone])

  return (
    <div className="boot">
      <div className="boot-core">
        <svg width="40" height="40" viewBox="0 0 40 40">
          <circle cx="20" cy="20" r="16" fill="none" stroke="#00e5ff" strokeWidth="2" />
          <circle cx="20" cy="20" r="7" fill="#00e5ff" />
        </svg>
      </div>
      <div className="boot-title">BIKELAB</div>
      <div className="boot-bar">
        <div className="boot-bar-fill" style={{ width: `${progress}%` }} />
      </div>
      <div className="boot-log">{LINES[line]}</div>
      <button className="btn boot-skip" onClick={onDone}>
        SKIP &#9654;
      </button>
    </div>
  )
}
