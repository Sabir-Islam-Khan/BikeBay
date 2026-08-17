import React, { useState } from 'react'
import HomePage from './components/HomePage.jsx'
import AddBikeCatalog from './components/AddBikeCatalog.jsx'
import EngineeringBay from './components/EngineeringBay.jsx'

const GARAGE_KEY = 'bikelab:garage'

function loadGarage() {
  try {
    const raw = localStorage.getItem(GARAGE_KEY)
    return raw ? JSON.parse(raw) : []
  } catch {
    return []
  }
}

export default function App() {
  const [view, setView] = useState('home')
  const [garage, setGarage] = useState(loadGarage)
  const [activeId, setActiveId] = useState(null)

  const persist = (next) => {
    setGarage(next)
    localStorage.setItem(GARAGE_KEY, JSON.stringify(next))
  }

  const addBike = (id) => persist(garage.includes(id) ? garage : [...garage, id])
  const removeBike = (id) => persist(garage.filter((g) => g !== id))
  const openBay = (id) => {
    setActiveId(id)
    setView('bay')
  }

  if (view === 'bay') return <EngineeringBay bikeId={activeId} onBack={() => setView('home')} />
  if (view === 'catalog') return <AddBikeCatalog garage={garage} onAdd={addBike} onBack={() => setView('home')} />
  return <HomePage garage={garage} onAdd={() => setView('catalog')} onOpen={openBay} onRemove={removeBike} />
}