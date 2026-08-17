export const HEALTH = {
  green: { label: 'OPERATIONAL', order: 0 },
  amber: { label: 'DUE SOON', order: 1 },
  red: { label: 'OVERDUE', order: 2 },
  unknown: { label: 'NO DATA', order: 3 },
}

export function partHealth(part, log, odo) {
  if (!part || !log || !log.values) return 'unknown'
  const ref = log.values[part.healthField]
  if (ref === undefined || ref === null || ref === '') return 'unknown'

  let elapsed
  let interval
  if (part.metric === 'km') {
    const base = Number(odo) || 0
    elapsed = Math.max(0, base - Number(ref))
    interval = part.intervalKm
  } else {
    const t = new Date(ref).getTime()
    if (Number.isNaN(t)) return 'unknown'
    elapsed = Math.max(0, (Date.now() - t) / 86400000)
    interval = part.intervalDays
  }

  if (!interval || interval <= 0) return 'unknown'
  const ratio = elapsed / interval
  if (ratio <= 0.75) return 'green'
  if (ratio <= 1.2) return 'amber'
  return 'red'
}

export function partDueText(part, log, odo) {
  if (!part || !log || !log.values) return null
  const ref = log.values[part.healthField]
  if (ref === undefined || ref === null || ref === '') return null

  if (part.metric === 'km') {
    const base = Number(odo) || 0
    const kmSince = Math.max(0, base - Number(ref))
    const remain = Math.max(0, part.intervalKm - kmSince)
    return `${remain.toLocaleString()} km until due`
  }
  const t = new Date(ref).getTime()
  if (Number.isNaN(t)) return null
  const days = Math.max(0, Math.round((Date.now() - t) / 86400000))
  const remain = Math.max(0, part.intervalDays - days)
  return `${remain} days until due`
}

export function fleetHealth(bikeId, logs, odo) {
  // placeholder that returns counts
  return { green: 0, amber: 0, red: 0, unknown: 0 }
}
