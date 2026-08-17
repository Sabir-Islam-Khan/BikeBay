export const PARTS = [
  {
    id: 'engine',
    label: 'ENGINE',
    tagline: 'POWERPLANT / OIL SYSTEM',
    metric: 'km',
    intervalKm: 2500,
    healthField: 'oilChangeOdo',
    fields: [
      { key: 'odo', label: 'Odometer', type: 'number', unit: 'km' },
      { key: 'oilBrand', label: 'Engine Oil Brand', type: 'text' },
      { key: 'lastTopUp', label: 'Last Top-Up', type: 'date' },
      { key: 'oilChangeOdo', label: 'Last Oil Change Odo', type: 'number', unit: 'km' },
    ],
    tips: {
      do: [
        'Change oil and filter every 2,500 km or 3 months.',
        'Check level on the centre stand, on level ground, cold.',
        'Warm the engine before aggressive riding.',
        'Use the grade in your manual (typically 20W50 / 10W40).',
      ],
      dont: [
        'Never overfill — excess oil pressurises seals.',
        "Don't run low on oil at sustained high RPM.",
        "Don't mix two different oil brands or grades.",
      ],
      symptoms: [
        'Knock from the lower end under load.',
        'Blue smoke on start-up or overrun.',
        'Clutch slippage under full power.',
        'Oil pressure lamp flickering at idle.',
      ],
    },
  },
  {
    id: 'tyres',
    label: 'TYRES',
    tagline: 'GRIP / PRESSURE / TREAD',
    metric: 'days',
    intervalDays: 14,
    healthField: 'pressureCheckDate',
    fields: [
      { key: 'pressureCheckDate', label: 'Last Pressure Check', type: 'date' },
      { key: 'frontPsi', label: 'Front Pressure', type: 'number', unit: 'PSI' },
      { key: 'rearPsi', label: 'Rear Pressure', type: 'number', unit: 'PSI' },
      { key: 'purchasedDate', label: 'Purchased On', type: 'date' },
      { key: 'changedOdo', label: 'Changed At Odo', type: 'number', unit: 'km' },
    ],
    tips: {
      do: [
        'Check pressure weekly when tyres are cold.',
        'Inspect tread depth and wear bars monthly.',
        'Match pressure to load — add ~4 PSI rear with a pillion.',
      ],
      dont: [
        "Don't ride on bald or glazed rubber.",
        "Don't over-inflate chasing 'mileage' — you lose grip.",
        "Don't ignore a slow leak; it's usually a puncture.",
      ],
      symptoms: [
        'Wobble or weave at highway speed.',
        'Vibration under hard braking.',
        'Wear bars touching — replacement time.',
      ],
    },
  },
  {
    id: 'chain',
    label: 'CHAIN',
    tagline: 'DRIVE / TENSION / LUBE',
    metric: 'km',
    intervalKm: 500,
    healthField: 'lastLubeOdo',
    fields: [
      { key: 'lastCleanOdo', label: 'Last Cleaned At', type: 'number', unit: 'km' },
      { key: 'lastLubeOdo', label: 'Last Lubed At', type: 'number', unit: 'km' },
      { key: 'slackMm', label: 'Slack', type: 'number', unit: 'mm' },
    ],
    tips: {
      do: [
        'Lube every 500 km, and after every wet ride.',
        'Clean and re-tension every 1,000 km.',
        'Measure slack at the tightest spot, wheel off ground.',
      ],
      dont: [
        "Don't lube a dirty chain — grit grinds the rollers.",
        "Don't use engine oil as chain lube.",
        "Don't over-tighten; the suspension needs that play.",
      ],
      symptoms: [
        'Skipping or clunking under acceleration.',
        'Stiff links after rain or washing.',
        'Zinging / whine at speed — chain is binding.',
      ],
    },
  },
  {
    id: 'front-brake',
    label: 'FRONT BRAKE',
    tagline: 'DISC / PADS / FLUID',
    metric: 'km',
    intervalKm: 8000,
    healthField: 'lastPadChangeOdo',
    fields: [
      { key: 'padThicknessMm', label: 'Pad Thickness', type: 'number', unit: 'mm' },
      { key: 'lastPadChangeOdo', label: 'Last Pad Change Odo', type: 'number', unit: 'km' },
      { key: 'fluidFlushDate', label: 'Fluid Last Flushed', type: 'date' },
      { key: 'brakeFluidType', label: 'Fluid Type', type: 'select', options: ['DOT 4', 'DOT 5.1'] },
    ],
    tips: {
      do: [
        'Check pad thickness monthly — replace under 2 mm.',
        'Flush DOT 4 fluid every 2 years.',
        'Bed in new pads with repeated slow stops.',
      ],
      dont: [
        "Don't ride a spongy lever — bleed it now.",
        "Don't mix DOT 4 with silicone DOT 5.",
        "Don't track-day your street pads to the wire.",
      ],
      symptoms: [
        'Spongy lever travel to the bar.',
        'Squeal or howl on braking.',
        'Pulsing at the lever — warped disc.',
      ],
    },
  },
  {
    id: 'rear-brake',
    label: 'REAR BRAKE',
    tagline: 'DISC / PADS / FLUID',
    metric: 'km',
    intervalKm: 8000,
    healthField: 'lastPadChangeOdo',
    fields: [
      { key: 'padThicknessMm', label: 'Pad Thickness', type: 'number', unit: 'mm' },
      { key: 'lastPadChangeOdo', label: 'Last Pad Change Odo', type: 'number', unit: 'km' },
      { key: 'fluidFlushDate', label: 'Fluid Last Flushed', type: 'date' },
    ],
    tips: {
      do: [
        'Use the rear brake to settle the bike, not stop it.',
        'Check pad wear with the fronts.',
        'Keep the pedal firm — no slack float.',
      ],
      dont: [
        "Don't drag the rear brake on descents.",
        "Don't ignore a low pedal after brake work.",
      ],
      symptoms: [
        'Pedal sinks to the floor slowly.',
        'Rear locks early on wet asphalt.',
        'Squeal when cold.',
      ],
    },
  },
  {
    id: 'front-fork',
    label: 'FRONT FORK',
    tagline: 'SUSPENSION / SEALS',
    metric: 'days',
    intervalDays: 365,
    healthField: 'forkOilChangeDate',
    fields: [
      { key: 'forkOilChangeDate', label: 'Fork Oil Changed', type: 'date' },
      { key: 'lastServiceOdo', label: 'Last Service Odo', type: 'number', unit: 'km' },
      { key: 'psi', label: 'Air Preload', type: 'number', unit: 'PSI' },
    ],
    tips: {
      do: [
        'Rebuild fork oil every 12 months or 20,000 km.',
        'Wipe stanchions after every wet or dusty ride.',
        'Check seals for wetness at each wash.',
      ],
      dont: [
        "Don't bottom out hard repeatedly.",
        "Don't adjust compression mid-corner.",
        "Don't ignore weeping seals — dirt gets in.",
      ],
      symptoms: [
        'Oil film on the stanchion — seal failure.',
        'Dive hard under braking.',
        'Clunk over square-edged bumps.',
      ],
    },
  },
  {
    id: 'rear-susp',
    label: 'REAR SHOCK',
    tagline: 'SPRING / DAMPING / SAG',
    metric: 'days',
    intervalDays: 90,
    healthField: 'preloadCheckDate',
    fields: [
      { key: 'preloadCheckDate', label: 'Preload Checked', type: 'date' },
      { key: 'lastServiceOdo', label: 'Last Service Odo', type: 'number', unit: 'km' },
      { key: 'sagMm', label: 'Sag', type: 'number', unit: 'mm' },
    ],
    tips: {
      do: [
        'Set sag to your weight (25–35 mm typical).',
        'Check preload adjusters every 3 months.',
        'Service the shock at 20,000 km.',
      ],
      dont: [
        "Don't run damping pinned to full stiff.",
        "Don't ignore a bouncing rear end.",
      ],
      symptoms: [
        'Pogo after a speed bump.',
        'Bottoming out with a pillion aboard.',
        'Rear end stepping out under power.',
      ],
    },
  },
  {
    id: 'fuel-system',
    label: 'FUEL SYSTEM',
    tagline: 'TANK / FILTER / DELIVERY',
    metric: 'km',
    intervalKm: 5000,
    healthField: 'lastFilterCleanOdo',
    fields: [
      { key: 'tankCapacityL', label: 'Tank Capacity', type: 'number', unit: 'L' },
      { key: 'lastFilterCleanOdo', label: 'Filter Last Cleaned', type: 'number', unit: 'km' },
      { key: 'lastFuelAddDate', label: 'Last Fuel System Check', type: 'date' },
    ],
    tips: {
      do: [
        'Clean the fuel filter every 5,000 km.',
        'Drain the tank before long-term storage.',
        'Use fuel from busy, high-turnover pumps.',
      ],
      dont: [
        "Don't run the tank dry — the pump hates it.",
        "Don't store with stale fuel in the lines.",
        "Don't ignore a strong fuel smell.",
      ],
      symptoms: [
        'Stutter or hesitation under throttle.',
        'Hard starting when warm.',
        'Poor fuel economy all of a sudden.',
      ],
    },
  },
  {
    id: 'cooling',
    label: 'COOLING',
    tagline: 'COOLANT / RADIATOR / FAN',
    metric: 'days',
    intervalDays: 365,
    healthField: 'lastFlushDate',
    fields: [
      { key: 'coolantLevelPct', label: 'Coolant Level', type: 'number', unit: '%' },
      { key: 'lastFlushDate', label: 'Last Flush', type: 'date' },
      { key: 'coolantType', label: 'Coolant Type', type: 'select', options: ['OAT', 'IAT', 'Hybrid'] },
    ],
    tips: {
      do: [
        'Check coolant level weekly at the cold mark.',
        'Flush and replace coolant every year.',
        'Keep a 50/50 coolant + distilled water mix.',
      ],
      dont: [
        "Don't open the cap while the engine is hot.",
        "Don't mix different coolant colours.",
        "Don't run plain water in summer.",
      ],
      symptoms: [
        'Needle climbs in traffic — fan not kicking in.',
        'Sweet smell or steam from the front.',
        'Pink / green residue around the radiator cap.',
      ],
    },
  },
  {
    id: 'battery',
    label: 'BATTERY',
    tagline: '12V / START / CHARGE',
    metric: 'days',
    intervalDays: 60,
    healthField: 'lastChargeDate',
    fields: [
      { key: 'voltageV', label: 'Resting Voltage', type: 'number', unit: 'V' },
      { key: 'lastChargeDate', label: 'Last Charged / Checked', type: 'date' },
      { key: 'replacedDate', label: 'Replaced On', type: 'date' },
    ],
    tips: {
      do: [
        'Check resting voltage monthly — 12.4 V minimum.',
        'Trickle charge when parked for weeks.',
        'Keep terminals clean, greased and tight.',
      ],
      dont: [
        "Don't deep-discharge it repeatedly.",
        "Don't jump-start with reversed polarity.",
        "Don't top up a sealed battery with water.",
      ],
      symptoms: [
        'Clicking starter solenoid, no crank.',
        'Lights dim at idle, bright on throttle.',
        'Slow cranking on cold mornings.',
      ],
    },
  },
  {
    id: 'wheels',
    label: 'WHEELS',
    tagline: 'SPOKES / RIMS / BEARINGS',
    metric: 'days',
    intervalDays: 90,
    healthField: 'spokeTorqueDate',
    fields: [
      { key: 'spokeTorqueDate', label: 'Spokes Torqued', type: 'date' },
      { key: 'rimInspectionDate', label: 'Rim Inspected', type: 'date' },
      { key: 'bearingCheckDate', label: 'Bearings Checked', type: 'date' },
    ],
    tips: {
      do: [
        'Torque-check spokes every 3 months.',
        'Inspect rims for dents after potholes.',
        'Grease and preload wheel bearings yearly.',
      ],
      dont: [
        "Don't overtighten spokes into the rim bed.",
        "Don't ride on a dented or cracked rim.",
        "Don't ignore play in the bearings.",
      ],
      symptoms: [
        'Front-end wobble at low speed.',
        'Clicking from the hub when cornering.',
        'Wheel out of true after a hard hit.',
      ],
    },
  },
  {
    id: 'frame',
    label: 'FRAME',
    tagline: 'CHASSIS / BOLTS / PIVOTS',
    metric: 'days',
    intervalDays: 180,
    healthField: 'boltTorqueDate',
    fields: [
      { key: 'boltTorqueDate', label: 'Bolts Torque-Checked', type: 'date' },
      { key: 'crashInspectionDate', label: 'Crash / Drop Inspected', type: 'date' },
      { key: 'torqueSpecNm', label: 'Reference Torque', type: 'number', unit: 'Nm' },
    ],
    tips: {
      do: [
        'Torque-check major fasteners every 6 months.',
        'Inspect the frame and weld zones after any drop.',
        'Check swingarm pivot and head bearings.',
      ],
      dont: [
        "Don't ride a cracked or bent frame.",
        "Don't guess torque — use a wrench.",
      ],
      symptoms: [
        'New creaks under acceleration or braking.',
        'Steering feels notchy at the centre.',
        'Wheels no longer aligned in a straight line.',
      ],
    },
  },
  {
    id: 'exhaust',
    label: 'EXHAUST',
    tagline: 'HEADER / MUFFLER / GASKET',
    metric: 'days',
    intervalDays: 90,
    healthField: 'leakCheckDate',
    fields: [
      { key: 'leakCheckDate', label: 'Leak Checked', type: 'date' },
      { key: 'carbonBuildDate', label: 'Carbon Checked', type: 'date' },
      { key: 'gasketDate', label: 'Header Gasket Replaced', type: 'date' },
    ],
    tips: {
      do: [
        'Check header and slip joints for leaks quarterly.',
        'Tighten exhaust mounts if it rattles.',
        'Inspect the heatshield for loose rivets.',
      ],
      dont: [
        "Don't ignore popping backfires.",
        "Don't remove the baffle for road riding.",
        "Don't touch a hot header with bare hands.",
      ],
      symptoms: [
        'Popping on deceleration.',
        'Bluing on the header near the head.',
        'Rattling heatshield at 4,000 rpm.',
      ],
    },
  },
  {
    id: 'cockpit',
    label: 'COCKPIT',
    tagline: 'BARS / CABLES / LEVERS',
    metric: 'days',
    intervalDays: 30,
    healthField: 'cableLubeDate',
    fields: [
      { key: 'cableLubeDate', label: 'Cables Lubed', type: 'date' },
      { key: 'leverAdjustDate', label: 'Levers Adjusted', type: 'date' },
      { key: 'freeplayMm', label: 'Clutch Freeplay', type: 'number', unit: 'mm' },
    ],
    tips: {
      do: [
        'Lube throttle and clutch cables monthly.',
        'Set lever reach to your hand size.',
        'Inspect brake and clutch lines for cracks.',
      ],
      dont: [
        "Don't ride a frayed cable.",
        "Don't ride with loose bar-clamp bolts.",
        "Don't over-lube — wipe off the excess.",
      ],
      symptoms: [
        'Sticky or notchy throttle.',
        'Hard clutch pull that worsens in heat.',
        'Buzzing vibration through the bars.',
      ],
    },
  },
  {
    id: 'bodywork',
    label: 'BODYWORK',
    tagline: 'PANELS / FAIRING / PAINT',
    metric: 'days',
    intervalDays: 30,
    healthField: 'lastPolishDate',
    fields: [
      { key: 'lastPolishDate', label: 'Last Polish', type: 'date' },
      { key: 'decalCheckDate', label: 'Decals Checked', type: 'date' },
      { key: 'fairingBoltCheck', label: 'Fairing Bolts Checked', type: 'date' },
    ],
    tips: {
      do: [
        'Wash with pH-neutral cleaner and two buckets.',
        'Polish painted panels monthly.',
        'Check fairing fasteners after every wash.',
      ],
      dont: [
        "Don't pressure-wash into bearings and seals.",
        "Don't use abrasive pads on decals.",
        "Don't wipe dust with a dry rag.",
      ],
      symptoms: [
        'Paint fading or chipping.',
        'Fairing rattling at speed.',
        'Decals lifting at the edges.',
      ],
    },
  },
]

export const PART_MAP = Object.fromEntries(PARTS.map((p) => [p.id, p]))
