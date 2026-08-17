import React, { useState } from 'react'
import TopHUD from './TopHUD.jsx'
import BikeViewport from './BikeViewport.jsx'
import PartPanel from './PartPanel.jsx'
import NotificationFeed from './NotificationFeed.jsx'
import { BIKE_MAP } from '../data/bikes.js'
import { PART_MAP } from '../data/partsCatalog.js'
import { partHealth, partDueText } from '../utils/health.js'
import { useBikeLogs } from '../hooks/useBikeLogs.js'

export default function EngineeringBay({ bikeId, onBack }) {
  const [selectedPart, setSelectedPart] = useState(null)
  const bike = BIKE_MAP[bikeId]
  const { logs, odo, setOdo, updateLog, removeLog } = useBikeLogs(bikeId, bike.odo)

  const health = (partId) => partHealth(PART_MAP[partId], logs[partId], odo)
  const dueText = (partId) => partDueText(PART_MAP[partId], logs[partId], odo)

  const goBack = () => {
    setSelectedPart(null)
    onBack()
  }

  return (
    <div className="app">
      <div className="backdrop" />
      <div className="grid-bg" />
      <div className="scanlines" />
      <div className="vignette" />
      <TopHUD />

      <div className="lab-titlebar">
        <span className="lab-back" onClick={goBack}>
          &#9664; GARAGE
        </span>
        <div>
          <div className="lab-name">{bike.name}</div>
          <div className="lab-brand">
            {bike.brand} · {bike.engine}
          </div>
        </div>
        <div className="lab-odo">
          ODO
          <input type="number" value={odo} onChange={(e) => setOdo(e.target.value)} />
          <span>KM</span>
        </div>
      </div>

      <div className="lab">
        <div className="lab-main">
          <BikeViewport bike={bike} health={health} selected={selectedPart} onSelect={setSelectedPart} />
        </div>
        <PartPanel
          partId={selectedPart}
          log={selectedPart ? logs[selectedPart] : null}
          health={selectedPart ? health(selectedPart) : 'unknown'}
          dueText={selectedPart ? dueText(selectedPart) : null}
          onLog={updateLog}
          onRemove={removeLog}
        />
      </div>

      <NotificationFeed bikeId={bikeId} logs={logs} odo={odo} />
    </div>
  )
}