import React from 'react'
import PulsarN160 from './schematics/PulsarN160.jsx'
import GixxerM150 from './schematics/GixxerM150.jsx'
import R15V3 from './schematics/R15V3.jsx'
import FZV2 from './schematics/FZV2.jsx'
import Pulsar150 from './schematics/Pulsar150.jsx'
import SF250 from './schematics/SF250.jsx'
import CLC250 from './schematics/CLC250.jsx'
import F250 from './schematics/F250.jsx'
import SR300 from './schematics/SR300.jsx'
import Meteor350 from './schematics/Meteor350.jsx'

export const SCHEMATICS = {
  'pulsar-n160': PulsarN160,
  'gixxer-m150': GixxerM150,
  'r15-v3': R15V3,
  'fz-v2': FZV2,
  'pulsar-150': Pulsar150,
  'gixxer-sf250': SF250,
  'clc-250': CLC250,
  'pulsar-f250': F250,
  'sr300': SR300,
  'meteor-350': Meteor350,
}

export default function Schematic({ bikeId, health, selected, onSelect, onHover, onHoverEnd, plain = false }) {
  const Comp = SCHEMATICS[bikeId]
  if (!Comp) return null
  return <Comp health={health} selected={selected} onSelect={onSelect} onHover={onHover} onHoverEnd={onHoverEnd} plain={plain} />
}