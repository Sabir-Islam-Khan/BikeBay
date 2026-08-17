import { useCallback, useEffect, useState } from 'react'

const KEY = (bikeId) => `bikelab:logs:${bikeId}`
const ODO_KEY = (bikeId) => `bikelab:odo:${bikeId}`

function load(key, fallback) {
  try {
    const raw = localStorage.getItem(key)
    return raw ? JSON.parse(raw) : fallback
  } catch {
    return fallback
  }
}

export function useBikeLogs(bikeId, defaultOdo) {
  const [logs, setLogs] = useState(() => load(KEY(bikeId), {}))
  const [odo, setOdoState] = useState(() => load(ODO_KEY(bikeId), defaultOdo))

  useEffect(() => {
    setLogs(load(KEY(bikeId), {}))
    setOdoState(load(ODO_KEY(bikeId), defaultOdo))
  }, [bikeId, defaultOdo])

  useEffect(() => {
    try {
      localStorage.setItem(KEY(bikeId), JSON.stringify(logs))
    } catch { /* storage full / blocked */ }
  }, [bikeId, logs])

  useEffect(() => {
    try {
      localStorage.setItem(ODO_KEY(bikeId), JSON.stringify(odo))
    } catch { /* noop */ }
  }, [bikeId, odo])

  const updateLog = useCallback(
    (partId, values) => {
      setLogs((prev) => {
        const existing = prev[partId] || { values: {}, history: [] }
        const entry = {
          ...values,
          __loggedAt: new Date().toISOString(),
        }
        return {
          ...prev,
          [partId]: {
            values: { ...existing.values, ...entry },
            history: [entry, ...(existing.history || [])].slice(0, 12),
          },
        }
      })
    },
    []
  )

  const removeLog = useCallback((partId) => {
    setLogs((prev) => {
      const next = { ...prev }
      delete next[partId]
      return next
    })
  }, [])

  const setOdo = useCallback((value) => {
    setOdoState(Number(value) || 0)
  }, [])

  const resetBike = useCallback(() => {
    try {
      localStorage.removeItem(KEY(bikeId))
      localStorage.removeItem(ODO_KEY(bikeId))
    } catch { /* noop */ }
    setLogs({})
    setOdoState(defaultOdo)
  }, [bikeId, defaultOdo])

  return { logs, odo, setOdo, updateLog, removeLog, resetBike }
}
