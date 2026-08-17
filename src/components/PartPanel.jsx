import React, { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { PART_MAP } from '../data/partsCatalog.js'

function FieldInput({ field, value, onChange }) {
  if (field.type === 'select') {
    return (
      <select value={value || ''} onChange={(e) => onChange(e.target.value)}>
        <option value="">—</option>
        {field.options.map((o) => (
          <option key={o} value={o}>
            {o}
          </option>
        ))}
      </select>
    )
  }
  if (field.type === 'date') {
    return <input type="date" value={value || ''} onChange={(e) => onChange(e.target.value)} />
  }
  if (field.type === 'number') {
    return (
      <input
        type="number"
        value={value ?? ''}
        placeholder={field.unit || ''}
        onChange={(e) => onChange(e.target.value)}
      />
    )
  }
  return <input type="text" value={value || ''} placeholder={field.unit || ''} onChange={(e) => onChange(e.target.value)} />
}

function LogForm({ part, initial, onSave, onCancel }) {
  const [values, setValues] = useState(() =>
    Object.fromEntries(part.fields.map((f) => [f.key, initial[f.key] ?? '']))
  )

  const submit = (e) => {
    e.preventDefault()
    const cleaned = {}
    for (const [k, v] of Object.entries(values)) {
      if (v !== '' && v !== null) cleaned[k] = v
    }
    onSave(cleaned)
  }

  return (
    <motion.form
      className="log-form"
      onSubmit={submit}
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 8 }}
    >
      <div className="log-form-title">&#9656; LOG SERVICE ENTRY</div>
      <div className="form-grid">
        {part.fields.map((f) => (
          <div className={`form-field ${f.type === 'text' ? 'full' : ''}`} key={f.key}>
            <label>{f.label}</label>
            <FieldInput field={f} value={values[f.key]} onChange={(v) => setValues((p) => ({ ...p, [f.key]: v }))} />
          </div>
        ))}
      </div>
      <div style={{ display: 'flex', gap: 10, marginTop: 14 }}>
        <button type="submit" className="btn btn-amber" style={{ flex: 1 }}>
          COMMIT RECORD
        </button>
        <button type="button" className="btn" onClick={onCancel}>
          CANCEL
        </button>
      </div>
    </motion.form>
  )
}

export default function PartPanel({ partId, log, health, dueText, onLog, onRemove }) {
  const [showForm, setShowForm] = useState(false)
  const [showProtocol, setShowProtocol] = useState(false)
  const part = PART_MAP[partId]

  if (!part) return null

  const values = log?.values || {}
  const history = log?.history || []

  return (
    <div className="dossier">
      <div className="dossier-head">
        <div className="dossier-part-label">PART DOSSIER</div>
        <div className="dossier-part-name">{part.label}</div>
        <div className="dossier-tagline">{part.tagline}</div>
        <div className="dossier-status">
          <span className={`status-lamp ${health}`} />
          <span className={`status-text ${health}`}>
            {health === 'green' && 'OPERATIONAL'}
            {health === 'amber' && 'DUE SOON'}
            {health === 'red' && 'OVERDUE — FLAG'}
            {health === 'unknown' && 'NO SERVICE DATA'}
          </span>
          {dueText && <span className="dossier-due">{dueText}</span>}
        </div>
      </div>

      <div className="dossier-body">
        <div className="section-title">LAST RECORDED</div>
        <div className="readout-grid">
          {part.fields.map((f) => (
            <div className="readout" key={f.key}>
              <span className="rk">{f.label}</span>
              <span className={`rv ${values[f.key] === undefined || values[f.key] === '' ? 'empty' : ''}`}>
                {values[f.key] !== undefined && values[f.key] !== '' ? (
                  <>
                    {values[f.key]}
                    {f.unit && <span style={{ fontSize: 10, color: 'var(--muted)', marginLeft: 4 }}>{f.unit}</span>}
                  </>
                ) : (
                  '—'
                )}
              </span>
            </div>
          ))}
        </div>

        <div className="section-title">SERVICE HISTORY</div>
        {history.length === 0 ? (
          <div className="dossier-empty">
            No service records on file. Log the first entry to begin tracking this component.
          </div>
        ) : (
          <div className="history-list">
            {history.map((h, i) => (
              <div className="history-item" key={i}>
                <span className="hid">
                  {h.__loggedAt ? new Date(h.__loggedAt).toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' }) : 'RECORD'}
                </span>
                <span className="hv">
                  {Object.entries(h)
                    .filter(([k]) => k !== '__loggedAt')
                    .map(([k, v]) => `${v}`)
                    .join(' · ')
                    .slice(0, 34)}
                </span>
              </div>
            ))}
          </div>
        )}

        <div className="dossier-actions">
          <button className="btn btn-amber" style={{ flex: 1 }} onClick={() => setShowForm((v) => !v)}>
            {showForm ? 'COLLAPSE FORM' : '+ LOG SERVICE'}
          </button>
          <button className="btn" onClick={() => setShowProtocol((v) => !v)}>
            {showProtocol ? 'HIDE PROTOCOL' : 'PROTOCOL'}
          </button>
        </div>

        <AnimatePresence>
          {showForm && (
            <LogForm
              part={part}
              initial={values}
              onSave={(vals) => {
                onLog(part.id, vals)
                setShowForm(false)
              }}
              onCancel={() => setShowForm(false)}
            />
          )}
        </AnimatePresence>

        <AnimatePresence>
          {showProtocol && (
            <motion.div
              className="protocol"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
            >
              <div className="protocol-title">MAINTENANCE PROTOCOL // {part.label}</div>
              <div className="tip-block">
                <div className="tip-head do">DO</div>
                <ul className="tip-list">
                  {part.tips.do.map((t, i) => (
                    <li key={i}>{t}</li>
                  ))}
                </ul>
              </div>
              <div className="tip-block">
                <div className="tip-head dont">DON'T</div>
                <ul className="tip-list">
                  {part.tips.dont.map((t, i) => (
                    <li key={i}>{t}</li>
                  ))}
                </ul>
              </div>
              <div className="tip-block">
                <div className="tip-head sym">WATCH FOR</div>
                <ul className="tip-list">
                  {part.tips.symptoms.map((t, i) => (
                    <li key={i}>{t}</li>
                  ))}
                </ul>
              </div>
              <div style={{ marginTop: 14 }}>
                <button className="btn" style={{ width: '100%' }} onClick={() => onRemove(part.id)}>
                  CLEAR RECORDS
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  )
}