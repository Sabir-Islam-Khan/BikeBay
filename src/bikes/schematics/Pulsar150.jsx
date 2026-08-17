import React from 'react'
import {
  Part,
  TyreRing,
  WheelRim,
  BrakeDisc,
  ChainRun,
  Sprocket,
  Axle,
  BlueprintDecor,
  Callout,
  LogoBlock,
  TwinShock,
} from '../../components/schematic/Shared.jsx'

const F = { x: 230, y: 460 }
const R = { x: 790, y: 460 }

export default function Pulsar150Schematic({ health, selected, onSelect, onHover, onHoverEnd, plain = false }) {
  const P = (id, hit, props) => (
    <Part id={id} health={health(id)} selected={selected === id} onSelect={onSelect} onHover={onHover} onHoverEnd={onHoverEnd} hit={hit} {...props}>
      {props.children}
    </Part>
  )

  return (
    <svg className="schematic" viewBox="0 0 1000 620" xmlns="http://www.w3.org/2000/svg">
      {!plain && (
        <BlueprintDecor
          title="PULSAR 150"
          sub="UNIT 05 · CLASSIC NAKED"
          unit="REV 1.0"
          wheelbaseText="1320 MM"
          fx={F.x}
          rx={R.x}
        />
      )}
      {!plain && <Callout x={348} y={254} dx={-100} dy={-40} text="ROUND LAMP + COWL" />}
      {!plain && <Callout x={500} y={458} dx={-84} dy={44} text="AIR-COOLED 149.5CC" />}
      {!plain && <Callout x={700} y={468} dx={60} dy={36} text="CHROME MUFFLER" />}
      {!plain && <Callout x={504} y={268} dx={-70} dy={-44} text="TEARDROP TANK" />}
      {!plain && <Callout x={640} y={328} dx={56} dy={-36} text="TWIN SHOCKS" />}
      {!plain && <LogoBlock cx={F.x} cy={F.y + 62} text="PULSAR" w={54} />}
      {!plain && <LogoBlock cx={R.x} cy={R.y + 62} text="BAJAJ" w={56} />}

      {/* frame — commuter cradle */}
      {P('frame',
        <path className="hitpath" d="M 368 318 C 420 348 510 390 600 426 L 708 310 M 600 426 L 716 444" strokeWidth={24} />,
        {
          children: (
            <g>
              <path d="M 368 318 C 422 350 512 392 600 426" className="pstroke" />
              <path d="M 600 426 L 708 310" className="pstroke-thin" />
              <path d="M 600 426 L 718 442 L 710 456 L 600 440 Z" className="pstroke-thin" />
            </g>
          ),
        }
      )}

      {/* engine — compact single cylinder */}
      {P('engine',
        <path className="hitpath" d="M 450 360 C 490 350 546 356 568 378 C 584 398 586 426 570 448 C 550 460 492 462 468 450 C 450 438 444 418 450 404 C 454 384 446 372 450 360 Z" strokeWidth={22} />,
        {
          children: (
            <g>
              <path d="M 456 362 C 490 352 542 358 564 380 C 580 400 582 424 566 446 C 548 458 494 458 470 448 C 452 436 446 418 452 404 C 456 384 448 372 456 362 Z" className="pfill" fill="rgba(0,229,255,0.05)" />
              <line x1={462} y1={384} x2={570} y2={384} className="pstroke-thin" opacity={0.55} />
              <line x1={464} y1={400} x2={572} y2={400} className="pstroke-thin" opacity={0.55} />
              <line x1={466} y1={416} x2={574} y2={416} className="pstroke-thin" opacity={0.55} />
            </g>
          ),
        }
      )}

      {/* cooling — air-cooled fins */}
      {P('cooling',
        <path className="hitpath" d="M 450 366 L 456 336 M 468 338 L 476 366 M 480 340 L 488 366" strokeWidth={20} />,
        {
          children: (
            <g>
              <path d="M 458 334 L 464 366 L 486 362 L 480 332 Z" className="pfill" fill="rgba(0,229,255,0.06)" />
              <line x1={460} y1={342} x2={482} y2={340} className="pstroke-thin" />
              <line x1={458} y1={350} x2={482} y2={348} className="pstroke-thin" />
              <line x1={456} y1={358} x2={482} y2={356} className="pstroke-thin" />
            </g>
          ),
        }
      )}

      {/* exhaust — long chrome horizontal muffler */}
      {P('exhaust',
        <path className="hitpath" d="M 480 444 C 464 458 468 478 498 480 C 544 484 604 484 664 480 C 700 478 724 474 740 470 M 740 470 L 756 466" strokeWidth={22} />,
        {
          children: (
            <g>
              <path d="M 480 444 C 464 458 468 478 498 480 C 544 484 604 484 664 480 C 700 478 724 474 740 470" className="pstroke" />
              <path d="M 740 470 L 756 466" className="pstroke-thin" />
              <path d="M 570 486 L 570 495 M 630 484 L 630 493 M 690 480 L 690 489" className="pstroke-thin" opacity={0.45} />
              <path d="M 720 476 L 742 470" className="pstroke-thin" opacity={0.55} />
            </g>
          ),
        }
      )}

      {/* chain */}
      {P('chain',
        <path className="hitpath" d="M 568 448 L 760 452" strokeWidth={20} />,
        {
          children: <ChainRun sp1={{ x: 568, y: 448 }} sp2={{ x: 760, y: 452 }} sag={5} />,
        }
      )}

      {/* rear suspension — twin shocks (distinctive Pulsar 150) */}
      {P('rear-susp',
        <path className="hitpath" d="M 610 332 L 702 442 M 626 334 L 716 442" strokeWidth={22} />,
        {
          children: (
            <g>
              <TwinShock x1={614} y1={330} x2={700} y2={442} />
              <TwinShock x1={630} y1={332} x2={714} y2={442} />
            </g>
          ),
        }
      )}

      {/* front fork — telescopic */}
      {P('front-fork',
        <path className="hitpath" d="M 364 320 L 232 458 M 376 322 L 238 458" strokeWidth={22} />,
        {
          children: (
            <g>
              <path d="M 368 322 L 230 460" className="pstroke" />
              <path d="M 380 324 L 238 460" className="pstroke-thin" opacity={0.7} />
            </g>
          ),
        }
      )}

      {/* cockpit — upright commuter handlebar */}
      {P('cockpit',
        <path className="hitpath" d="M 390 308 C 378 294 364 286 346 282 M 392 310 L 382 284" strokeWidth={22} />,
        {
          children: (
            <g>
              <path d="M 390 308 C 378 296 366 290 354 286" className="pstroke" />
              <path d="M 392 310 L 384 284" className="pstroke-thin" />
              <rect x={348} y={278} width={14} height={12} rx={2} className="pstroke-thin" />
            </g>
          ),
        }
      )}

      {/* round headlamp with bikini cowl — key Pulsar 150 feature */}
      {P('bodywork',
        <path className="hitpath" d="M 364 320 C 352 296 358 264 340 252 M 364 320 C 376 298 384 284 382 268" strokeWidth={20} />,
        {
          children: (
            <g>
              <circle cx={348} cy={254} r={18} className="pstroke" />
              <circle cx={348} cy={254} r={13} className="pstroke-thin" opacity={0.7} />
              <circle cx={348} cy={254} r={7} className="pstroke-thin" opacity={0.4} />
              <path d="M 328 238 L 368 238 L 362 262 L 334 262 Z" className="pfill" fill="rgba(0,229,255,0.05)" />
              <path d="M 330 240 C 338 234 358 234 366 240" className="pstroke-thin" opacity={0.5} />
              <path d="M 350 266 L 362 268" className="pstroke-thin" opacity={0.6} />
            </g>
          ),
        }
      )}

      {/* fuel system — smooth teardrop (NOT muscular) */}
      {P('fuel-system',
        <path className="hitpath" d="M 396 258 C 420 244 472 240 508 248 C 542 258 568 284 578 316 C 562 340 520 350 486 344 L 440 334 C 414 324 402 304 396 258 Z" strokeWidth={22} />,
        {
          children: (
            <g>
              <path
                d="M 398 260 C 422 246 472 242 508 250 C 542 260 566 286 576 316 C 560 338 520 348 486 342 L 442 332 C 416 322 404 306 398 260 Z"
                className="pfill"
                fill="rgba(0,229,255,0.06)"
              />
              <path d="M 456 254 C 490 262 518 276 538 298" className="pstroke-thin" opacity={0.45} />
              <circle cx={446} cy={262} r={6} className="pstroke-thin" opacity={0.5} />
            </g>
          ),
        }
      )}

      {/* seat — long, flat, single-piece (NOT stepped) */}
      {P('bodywork', null, {
        children: (
          <g>
            <path d="M 578 326 C 616 320 658 318 700 318 L 712 314 C 734 308 744 310 748 316 L 718 326 L 678 332 C 646 336 612 338 578 346 Z" className="pstroke" />
            <path d="M 578 336 C 616 332 658 330 700 330" className="pstroke-thin" opacity={0.35} />
            <path d="M 702 316 L 738 312 L 742 320" className="pstroke-thin" />
          </g>
        ),
      })}

      {/* wheels */}
      {P('front-wheel', <circle className="hitpath" cx={F.x} cy={F.y} r={68} fill="none" strokeWidth={30} />, {
        children: <WheelRim cx={F.x} cy={F.y} rim={66} rotate={-10} double />,
      })}
      {P('rear-wheel', <circle className="hitpath" cx={R.x} cy={R.y} r={68} fill="none" strokeWidth={30} />, {
        children: <WheelRim cx={R.x} cy={R.y} rim={66} rotate={-6} double />,
      })}

      {/* tyres */}
      {P('tyres', null, {
        children: (
          <>
            <TyreRing cx={F.x} cy={F.y} inner={79} />
            <TyreRing cx={R.x} cy={R.y} inner={77} fat />
          </>
        ),
      })}

      {/* brakes */}
      {P('front-brake', <circle className="hitpath" cx={F.x} cy={F.y} r={24} fill="none" strokeWidth={22} />, {
        children: (
          <g>
            <BrakeDisc cx={F.x} cy={F.y} r={22} holes={5} rotate={12} />
            <path d="M 206 466 L 222 468 L 220 482 L 204 478 Z" className="pstroke-thin" />
          </g>
        ),
      })}

      {/* rear brake */}
      {P('rear-brake', <circle className="hitpath" cx={R.x} cy={R.y} r={22} fill="none" strokeWidth={22} />, {
        children: (
          <g>
            <BrakeDisc cx={R.x} cy={R.y} r={20} holes={5} rotate={30} />
            <path d="M 780 468 L 794 470 L 792 482 L 778 480 Z" className="pstroke-thin" />
          </g>
        ),
      })}

      {/* battery */}
      {P('battery',
        <path className="hitpath" d="M 396 258 C 406 272 420 284 436 290 L 398 266 Z M 722 304 L 734 300 L 732 310" strokeWidth={20} />,
        {
          children: (
            <g>
              <rect x={410} y={276} width={30} height={20} rx={2} className="pfill" fill="rgba(0,229,255,0.05)" />
              <line x1={418} y1={276} x2={418} y2={296} className="pstroke-thin" opacity={0.6} />
              <line x1={432} y1={276} x2={432} y2={296} className="pstroke-thin" opacity={0.6} />
              <path d="M 722 304 L 734 300 L 732 310 L 722 312 Z" className="pstroke-thin" />
            </g>
          ),
        }
      )}

      <Sprocket cx={568} cy={448} r={14} />
      <Axle cx={F.x} cy={F.y} />
      <Axle cx={R.x} cy={R.y} />
    </svg>
  )
}
