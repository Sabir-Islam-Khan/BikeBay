import React from 'react'

/* ---------- shared schematic building blocks ---------- */

export function ringPath(cx, cy, outer, inner) {
  return [
    `M ${cx} ${cy - outer}`,
    `A ${outer} ${outer} 0 1 0 ${cx} ${cy + outer}`,
    `A ${outer} ${outer} 0 1 0 ${cx} ${cy - outer}`,
    'Z',
    `M ${cx} ${cy - inner}`,
    `A ${inner} ${inner} 0 1 1 ${cx} ${cy + inner}`,
    `A ${inner} ${inner} 0 1 1 ${cx} ${cy - inner}`,
    'Z',
  ].join(' ')
}

export function arc(cx, cy, r, a0, a1, steps = 48) {
  const pts = []
  for (let i = 0; i <= steps; i++) {
    const a = (a0 + ((a1 - a0) * i) / steps) * (Math.PI / 180)
    pts.push(`${(cx + Math.cos(a) * r).toFixed(1)} ${(cy + Math.sin(a) * r).toFixed(1)}`)
  }
  return pts
}

export function Part({ id, health, selected, onSelect, onHover, onHoverEnd, hit, children }) {
  return (
    <g
      className={`part ${selected ? 'is-selected' : ''}`}
      data-part={id}
      data-health={health}
      onClick={(e) => {
        e.stopPropagation()
        onSelect(id)
      }}
      onMouseEnter={(e) => onHover && onHover(id, e)}
      onMouseMove={(e) => onHover && onHover(id, e)}
      onMouseLeave={onHoverEnd}
    >
      {hit}
      {children}
    </g>
  )
}

export function TyreRing({ cx, cy, r = 100, inner = 78, fat = false }) {
  return (
    <>
      <path d={ringPath(cx, cy, r, inner)} fill="rgba(0,229,255,0.05)" />
      <circle cx={cx} cy={cy} r={r} className="pstroke" strokeWidth={fat ? 3 : 2.5} />
      <circle cx={cx} cy={cy} r={inner} className="pstroke-thin" />
      <circle cx={cx} cy={cy} r={r - (fat ? 4 : 2)} className="pstroke-thin" opacity={0.5} />
      <circle cx={cx} cy={cy} r={inner + 3} className="pstroke-thin" opacity={0.35} />
    </>
  )
}

export function WheelRim({ cx, cy, rim = 68, hub = 9, spokes = 10, rotate = 0, double = false }) {
  const lines = []
  const innerRim = double ? rim * 0.62 : 0
  for (let i = 0; i < spokes; i++) {
    const a = ((rotate + (360 / spokes) * i) * Math.PI) / 180
    if (double) {
      lines.push(
        <line
          key={i}
          x1={cx + Math.cos(a) * innerRim}
          y1={cy + Math.sin(a) * innerRim}
          x2={cx + Math.cos(a) * rim}
          y2={cy + Math.sin(a) * rim}
          className="pstroke-thin"
        />
      )
    } else {
      lines.push(
        <line
          key={i}
          x1={cx}
          y1={cy}
          x2={cx + Math.cos(a) * rim}
          y2={cy + Math.sin(a) * rim}
          className="pstroke-thin"
        />
      )
    }
  }
  return (
    <>
      <circle cx={cx} cy={cy} r={rim} className="pstroke" />
      <circle cx={cx} cy={cy} r={rim - 5} className="pstroke-thin" opacity={0.45} />
      {double && <circle cx={cx} cy={cy} r={innerRim} className="pstroke-thin" opacity={0.45} />}
      {lines}
      <circle cx={cx} cy={cy} r={hub} className="pstroke" />
      <circle cx={cx} cy={cy} r={hub * 0.5} fill="rgba(0,229,255,0.25)" />
    </>
  )
}

export function BrakeDisc({ cx, cy, r = 26, holes = 6, rotate = 0 }) {
  const dots = []
  for (let i = 0; i < holes; i++) {
    const a = ((rotate + (360 / holes) * i) * Math.PI) / 180
    dots.push(<circle key={i} cx={cx + Math.cos(a) * r * 0.55} cy={cy + Math.sin(a) * r * 0.55} r={2.2} fill="currentColor" opacity={0.5} />)
  }
  return (
    <>
      <circle cx={cx} cy={cy} r={r} className="pstroke" strokeWidth={2.8} />
      <circle cx={cx} cy={cy} r={r * 0.75} className="pstroke-thin" opacity={0.5} />
      {dots}
      <circle cx={cx} cy={cy} r={4} fill="currentColor" opacity={0.4} />
    </>
  )
}

export function ChainRun({ sp1, sp2, sag = 8, segments = 26 }) {
  const x1 = sp1.x
  const y1 = sp1.y
  const x2 = sp2.x
  const y2 = sp2.y
  const d = Math.hypot(x2 - x1, y2 - y1)
  const px = -(y2 - y1) / d
  const py = (x2 - x1) / d
  const mx = (x1 + x2) / 2 + px * sag
  const my = (y1 + y2) / 2 + py * sag
  const pts = []
  for (let i = 0; i <= segments; i++) {
    const t = i / segments
    const cx = (1 - t) * (1 - t) * x1 + 2 * (1 - t) * t * mx + t * t * x2
    const cy = (1 - t) * (1 - t) * y1 + 2 * (1 - t) * t * my + t * t * y2
    pts.push(`${cx.toFixed(1)} ${cy.toFixed(1)}`)
  }
  const links = []
  for (let i = 0; i < segments; i++) {
    links.push(
      <line
        key={i}
        x1={pts[i].split(' ')[0]}
        y1={pts[i].split(' ')[1]}
        x2={pts[i + 1].split(' ')[0]}
        y2={pts[i + 1].split(' ')[1]}
        className="pstroke-thin"
        strokeWidth={2.2}
        opacity={0.9}
      />
    )
  }
  return (
    <>
      <path d={`M ${pts.join(' L ')}`} fill="none" strokeWidth={1.4} opacity={0.35} />
      {links}
      <Sprocket cx={sp1.x} cy={sp1.y} r={14} />
      <Sprocket cx={sp2.x} cy={sp2.y} r={20} teeth={10} />
    </>
  )
}

export function Sprocket({ cx, cy, r, teeth = 8 }) {
  const pts = []
  for (let i = 0; i < teeth * 2; i++) {
    const a = (i * 180) / teeth * (Math.PI / 180) * 2
    const rr = i % 2 === 0 ? r : r + 3
    pts.push(`${(cx + Math.cos(a) * rr).toFixed(1)} ${(cy + Math.sin(a) * rr).toFixed(1)}`)
  }
  return (
    <>
      <polygon points={pts.join(' ')} fill="none" strokeWidth={1.4} opacity={0.7} />
      <circle cx={cx} cy={cy} r={r * 0.4} className="pstroke-thin" />
    </>
  )
}

export function TwinShock({ x1, y1, x2, y2 }) {
  return (
    <g>
      <line x1={x1} y1={y1} x2={x2} y2={y2} className="pstroke" />
      <line x1={x1} y1={y1 - 4} x2={x2 - 6} y2={y2 - 3} className="pstroke-thin" opacity={0.5} />
      <line x1={x1} y1={y1 + 4} x2={x2 - 6} y2={y2 + 3} className="pstroke-thin" opacity={0.5} />
      <circle cx={x1} cy={y1} r={3.5} className="pstroke-thin" />
      <circle cx={x2} cy={y2} r={3.5} className="pstroke-thin" />
    </g>
  )
}

export function CoilSpring({ x1, y1, x2, y2, coils = 7, amp = 4 }) {
  const len = Math.hypot(x2 - x1, y2 - y1)
  const dx = (x2 - x1) / len
  const dy = (y2 - y1) / len
  const px = -dy
  const py = dx
  const pts = []
  for (let i = 0; i <= coils * 2; i++) {
    const t = i / (coils * 2)
    const along = i % 2 === 0 ? amp : -amp
    pts.push([
      (x1 + dx * len * t + px * along).toFixed(1),
      (y1 + dy * len * t + py * along).toFixed(1),
    ])
  }
  return <polyline points={pts.map((p) => p.join(' ')).join(' ')} fill="none" strokeWidth={1.3} opacity={0.6} />
}

export function Axle({ cx, cy, r = 5 }) {
  return (
    <g>
      <circle cx={cx} cy={cy} r={r} className="pstroke-thin" />
      <circle cx={cx} cy={cy} r={r * 0.5} fill="rgba(0,229,255,0.3)" />
    </g>
  )
}

export function GroundGuide({ y = 560, x1 = 60, x2 = 940 }) {
  return (
    <g className="guide">
      <line x1={x1} y1={y} x2={x2} y2={y} />
      <line x1={x1} y1={y - 12} x2={x1} y2={y + 12} />
      <line x1={x2} y1={y - 12} x2={x2} y2={y + 12} />
    </g>
  )
}

export function DimLine({ x1, y1, x2, y2, text, textX, textY }) {
  return (
    <g className="guide-dim">
      <line x1={x1} y1={y1} x2={x2} y2={y2} />
      <line x1={x1} y1={y1 - 5} x2={x1} y2={y1 + 5} />
      <line x1={x2} y1={y2 - 5} x2={x2} y2={y2 + 5} />
      {text && (
        <text
          x={textX || (x1 + x2) / 2}
          y={textY || y1 - 12}
          textAnchor="middle"
          className="dim-text"
        >
          {text}
        </text>
      )}
    </g>
  )
}

export function Callout({ x, y, dx, dy, text, anchor = 'start' }) {
  return (
    <g className="guide-dim">
      <line x1={x} y1={y} x2={x + dx} y2={y + dy} />
      <circle cx={x} cy={y} r={3} fill="rgba(0,229,255,0.5)" />
      <text x={x + dx} y={y + dy} dy={-6} textAnchor={anchor} className="dim-text">
        {text}
      </text>
    </g>
  )
}

export function LogoBlock({ cx, cy, text, w = 60 }) {
  return (
    <g className="decal">
      <rect x={cx - w / 2} y={cy - 7} width={w} height={14} rx={1} />
      <text
        x={cx}
        y={cy + 3.5}
        textAnchor="middle"
        fontFamily="Orbitron"
        fontSize={7}
        letterSpacing={2}
        fill="rgba(0,229,255,0.35)"
      >
        {text}
      </text>
    </g>
  )
}

export function BlueprintDecor({ title, sub, unit, wheelbaseText, groundY = 560, fx = 230, rx = 790, scale = '1:24' }) {
  const brackets = [
    [20, 18, 1, 1],
    [980, 18, -1, 1],
    [20, 602, 1, -1],
    [980, 602, -1, -1],
  ]
  return (
    <g>
      <text x={46} y={54} fontFamily="Orbitron" fontSize={22} fontWeight={800} letterSpacing={4} fill="#00e5ff">
        {title}
      </text>
      <text x={48} y={74} fontFamily="Orbitron" fontSize={10} letterSpacing={4} fill="#6f8aa0">
        {sub}
      </text>
      <text x={48} y={90} fontFamily="Orbitron" fontSize={8} letterSpacing={3} fill="rgba(0,229,255,0.5)">
        SIDE ELEVATION — DIAGNOSTIC SCHEMATIC
      </text>
      <text x={954} y={54} textAnchor="end" fontFamily="Orbitron" fontSize={9} letterSpacing={3} fill="rgba(0,229,255,0.5)">
        {unit}
      </text>
      <text x={954} y={70} textAnchor="end" fontFamily="Orbitron" fontSize={9} letterSpacing={3} fill="rgba(0,229,255,0.5)">
        SCALE {scale}
      </text>

      <GroundGuide y={groundY} />

      {wheelbaseText && (
        <DimLine x1={fx} y1={groundY + 26} x2={rx} y2={groundY + 26} text={wheelbaseText} />
      )}

      <g className="crosshair">
        <line x1={fx - 14} y1={460} x2={fx + 14} y2={460} />
        <line x1={fx} y1={446} x2={fx} y2={474} />
        <line x1={rx - 14} y1={460} x2={rx + 14} y2={460} />
        <line x1={rx} y1={446} x2={rx} y2={474} />
      </g>

      {brackets.map(([x, y, dx, dy], i) => (
        <g className="guide-dim" key={i}>
          <path d={`M ${x} ${y} l ${dx * 22} 0 M ${x} ${y} l 0 ${dy * 22}`} />
        </g>
      ))}
    </g>
  )
}
