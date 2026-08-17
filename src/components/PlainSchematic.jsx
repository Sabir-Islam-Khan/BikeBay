import React from 'react'
import Schematic from '../bikes/index.jsx'

export default function PlainSchematic({ bikeId }) {
  return (
    <div className="plain-schematic">
      <Schematic
        bikeId={bikeId}
        plain
        health={() => 'unknown'}
        selected={null}
        onSelect={() => {}}
        onHover={() => {}}
        onHoverEnd={() => {}}
      />
    </div>
  )
}