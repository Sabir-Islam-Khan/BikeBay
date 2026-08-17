import React, { useEffect, useState } from 'react'

export default function TopHUD() {
  const [now, setNow] = useState(new Date())

  useEffect(() => {
    const iv = setInterval(() => setNow(new Date()), 1000)
    return () => clearInterval(iv)
  }, [])

  const time = now.toLocaleTimeString('en-GB', { hour: '2-digit', minute: '2-digit', second: '2-digit' })
  const date = now.toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' })

  return (
    <div className="top-hud">
      <div className="brand-mark">
        <div className="brand-halo">
          <svg width="26" height="26" viewBox="0 0 40 40">
            <circle cx="20" cy="20" r="15" fill="none" stroke="#00e5ff" strokeWidth="2.5" />
            <circle cx="20" cy="20" r="6" fill="#00e5ff" />
          </svg>
        </div>
        <div>
          <div className="brand-title">BIKELAB</div>
          <div className="brand-sub">FLEET DIAGNOSTICS HUD</div>
        </div>
      </div>
      <div className="hud-clock">
        <div className="time">{time}</div>
        <div>{date.toUpperCase()}</div>
      </div>
    </div>
  )
}