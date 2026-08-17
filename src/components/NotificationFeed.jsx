import React from 'react'
import { PARTS } from '../data/partsCatalog.js'
import { partHealth, partDueText } from '../utils/health.js'

export default function NotificationFeed({ bikeId, logs, odo }) {
  const alerts = []
  for (const part of PARTS) {
    const h = partHealth(part, logs[part.id], odo)
    if (h === 'red' || h === 'amber') {
      alerts.push({ part, h, due: partDueText(part, logs[part.id], odo) })
    }
  }
  alerts.sort((a, b) => (a.h === 'red' ? -1 : 1) - (b.h === 'red' ? -1 : 1))

  if (alerts.length === 0) {
    return (
      <div className="ticker">
        <div className="ticker-label">FLEET FEED</div>
        <div className="ticker-stream">
          <div className="ticker-marquee">
            {[0, 1].map((n) => (
              <React.Fragment key={n}>
                <span className="ticker-msg ok">
                  <b>ALL SYSTEMS NOMINAL</b> — NO OVERDUE COMPONENTS ON {String(bikeId).toUpperCase()}
                </span>
                <span className="ticker-msg ok">
                  NEXT SCHEDULED SCAN IN <b>72H</b> · STANDBY
                </span>
                <span className="ticker-msg ok">
                  USE THE <b>PROTOCOL</b> BUTTON FOR PART-SPECIFIC CARE TIPS
                </span>
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="ticker">
      <div className="ticker-label">FLEET FEED</div>
      <div className="ticker-stream">
        <div className="ticker-marquee">
          {[0, 1].map((n) => (
            <React.Fragment key={n}>
              {alerts.map(({ part, h, due }) => (
                <span className={`ticker-msg ${h}`} key={`${n}-${part.id}`}>
                  <b>{part.label}</b> — {h === 'red' ? 'OVERDUE' : 'DUE'} · {due}
                </span>
              ))}
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  )
}