import { PARTS } from '../data/partsCatalog.js'
import { partHealth } from './health.js'

export function readBikeLogs(bikeId) {
  try {
    const raw = localStorage.getItem(`bikelab:logs:${bikeId}`)
    return raw ? JSON.parse(raw) : {}
  } catch {
    return {}
  }
}

export function readBikeOdo(bikeId, fallback) {
  try {
    const raw = localStorage.getItem(`bikelab:odo:${bikeId}`)
    return raw ? JSON.parse(raw) : fallback
  } catch {
    return fallback
  }
}

export function bikeSummary(bike) {
  const logs = readBikeLogs(bike.id)
  const odo = readBikeOdo(bike.id, bike.odo)
  const counts = { green: 0, amber: 0, red: 0, unknown: 0 }
  for (const part of PARTS) {
    const h = partHealth(part, logs[part.id], odo)
    counts[h] = (counts[h] || 0) + 1
  }
  return counts
}

export function fleetCounts() {
  return null
}