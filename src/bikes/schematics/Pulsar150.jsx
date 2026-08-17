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
      {!plain && <Callout x={356} y={262} dx={-96} dy={-40} text="ROUND LAMP + COWL" />}
      {!plain && <Callout x={500} y={458} dx={-84} dy={44} text="AIR-COOLED 149.5CC" />}
      {!plain && <Callout x={668} y={446} dx={60} dy={40} text="CHROME MUFFLER" />}
      {!plain && <Callout x={500} y={272} dx={-70} dy={-44} text="TEARDROP TANK" />}
      {!plain && <LogoBlock cx={F.x} cy={F.y + 62} text="PULSAR" w={54} />}
      {!plain && <LogoBlock cx={R.x} cy={R.y + 62} text="BAJAJ" w={56} />}

      {/* frame */}
      {P('frame',
        <path className="hitpath" d="M 378 320 C 430 348 510 388 594 424 L 700 306 M 594 424 L 708 442" strokeWidth={24} />,
        {
          children: (
            <g>
              <path d="M 378 320 C 430 350 510 390 594 424" className="pstroke" />
              <path d="M 594 424 L 700 306" className="pstroke-thin" />
              <path d="M 594 424 L 712 440 L 704 454 L 594 438 Z" className="pstroke-thin" />
            </g>
          ),
        }
      )}

      {/* engine */}
      {P('engine',
        <path className="hitpath" d="M 444 356 C 484 346 542 352 564 376 C 580 396 582 426 566 450 C 546 462 488 462 464 450 C 446 438 440 420 446 406 C 450 386 442 372 444 356 Z" strokeWidth={22} />,
        {
          children: (
            <g>
              <path d="M 452 360 C 486 348 538 354 560 378 C 576 398 578 424 562 448 C 544 458 490 458 466 448 C 448 436 442 420 448 406 C 452 386 444 372 452 360 Z" className="pfill" fill="rgba(0,229,255,0.05)" />
              <line x1={458} y1={382} x2={566} y2={382} className="pstroke-thin" opacity={0.55} />
              <line x1={460} y1={398} x2={568} y2={398} className="pstroke-thin" opacity={0.55} />
              <line x1={462} y1={414} x2={570} y2={414} className="pstroke-thin" opacity={0.55} />
            </g>
          ),
        }
      )}

      {/* cooling — fins */}
      {P('cooling',
        <path className="hitpath" d="M 444 362 L 452 334 M 462 336 L 472 362 M 472 338 L 480 362" strokeWidth={20} />,
        {
          children: (
            <g>
              <path d="M 454 332 L 460 364 L 478 360 L 472 332 Z" className="pfill" fill="rgba(0,229,255,0.06)" />
              <line x1={456} y1={340} x2={474} y2={338} className="pstroke-thin" />
              <line x1={454} y1={348} x2={474} y2={346} className="pstroke-thin" />
              <line x1={452} y1={356} x2={474} y2={354} className="pstroke-thin" />
            </g>
          ),
        }
      )}

      {/* exhaust — long with big chrome muffler */}
      {P('exhaust',
        <path className="hitpath" d="M 474 444 C 460 460 466 480 496 482 C 540 486 596 486 650 478 M 650 478 L 676 468" strokeWidth={22} />,
        {
          children: (
            <g>
              <path d="M 474 444 C 460 460 466 480 496 482 C 540 486 596 486 650 478" className="pstroke" />
              <path d="M 650 478 L 676 468" className="pstroke-thin" />
              <path d="M 560 487 L 560 496 M 610 484 L 610 493" className="pstroke-thin" opacity={0.5} />
              <path d="M 640 480 L 660 474" className="pstroke-thin" opacity={0.6} />
            </g>
          ),
        }
      )}

      {/* chain */}
      {P('chain',
        <path className="hitpath" d="M 564 448 L 758 452" strokeWidth={20} />,
        {
          children: <ChainRun sp1={{ x: 564, y: 448 }} sp2={{ x: 758, y: 452 }} sag={5} />,
        }
      )}

      {/* rear suspension — twin shocks */}
      {P('rear-susp',
        <path className="hitpath" d="M 604 330 L 696 440 M 620 332 L 710 440" strokeWidth={22} />,
        {
          children: (
            <g>
              <TwinShock x1={608} y1={328} x2={694} y2={440} />
              <TwinShock x1={624} y1={330} x2={708} y2={440} />
            </g>
          ),
        }
      )}

      {/* front fork */}
      {P('front-fork',
        <path className="hitpath" d="M 372 322 L 232 458 M 384 324 L 238 458" strokeWidth={22} />,
        {
          children: (
            <g>
              <path d="M 376 324 L 230 460" className="pstroke" />
              <path d="M 388 326 L 238 460" className="pstroke-thin" opacity={0.7} />
            </g>
          ),
        }
      )}

      {/* cockpit — tall upright bar */}
      {P('cockpit',
        <path className="hitpath" d="M 394 310 C 380 296 366 288 348 284 M 396 312 L 384 286" strokeWidth={22} />,
        {
          children: (
            <g>
              <path d="M 394 310 C 382 298 370 292 356 288" className="pstroke" />
              <path d="M 396 312 L 386 286" className="pstroke-thin" />
              <rect x={350} y={280} width={14} height={12} rx={2} className="pstroke-thin" />
            </g>
          ),
        }
      )}

      {/* round headlamp with cowl */}
      {P('bodywork',
        <path className="hitpath" d="M 372 322 C 360 298 366 268 348 258 M 372 322 C 384 302 390 288 388 274" strokeWidth={20} />,
        {
          children: (
            <g>
              <circle cx={356} cy={260} r={16} className="pstroke" />
              <circle cx={356} cy={260} r={11} className="pstroke-thin" opacity={0.7} />
              <path d="M 340 246 L 372 246 L 366 266 L 348 266 Z" className="pfill" fill="rgba(0,229,255,0.05)" />
              <path d="M 358 270 L 370 272" className="pstroke-thin" opacity={0.6} />
            </g>
          ),
        }
      )}

      {/* fuel system — smooth teardrop */}
      {P('fuel-system',
        <path className="hitpath" d="M 400 262 C 428 248 480 246 512 254 C 544 264 570 290 580 320 C 562 342 518 352 484 346 L 442 336 C 414 326 402 306 400 262 Z" strokeWidth={22} />,
        {
          children: (
            <g>
              <path
                d="M 402 264 C 428 250 480 248 512 256 C 544 266 568 292 578 320 C 560 340 518 350 484 344 L 444 334 C 416 324 404 308 402 264 Z"
                className="pfill"
                fill="rgba(0,229,255,0.06)"
              />
              <path d="M 460 258 C 496 266 522 280 542 302" className="pstroke-thin" opacity={0.45} />
              <circle cx={450} cy={266} r={6} className="pstroke-thin" opacity={0.5} />
            </g>
          ),
        }
      )}

      {/* seat + tail — two-up, lower tail */}
      {P('bodywork', null, {
        children: (
          <g>
            <path d="M 580 328 C 620 324 660 322 700 322 L 708 318 C 728 312 738 314 742 320 L 714 330 L 676 336 C 646 340 610 342 580 348 Z" className="pstroke" />
            <path d="M 702 320 L 734 316 L 738 324" className="pstroke-thin" />
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
        <path className="hitpath" d="M 400 262 C 410 276 424 288 440 294 L 402 270 Z M 720 302 L 732 298 L 730 308" strokeWidth={20} />,
        {
          children: (
            <g>
              <rect x={412} y={278} width={30} height={20} rx={2} className="pfill" fill="rgba(0,229,255,0.05)" />
              <line x1={420} y1={278} x2={420} y2={298} className="pstroke-thin" opacity={0.6} />
              <line x1={434} y1={278} x2={434} y2={298} className="pstroke-thin" opacity={0.6} />
              <path d="M 720 302 L 732 298 L 730 308 L 720 310 Z" className="pstroke-thin" />
            </g>
          ),
        }
      )}

      <Sprocket cx={564} cy={448} r={14} />
      <Axle cx={F.x} cy={F.y} />
      <Axle cx={R.x} cy={R.y} />
    </svg>
  )
}