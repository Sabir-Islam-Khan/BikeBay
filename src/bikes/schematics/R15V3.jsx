import React from 'react'
import {
  Part,
  TyreRing,
  WheelRim,
  BrakeDisc,
  ChainRun,
  CoilSpring,
  Axle,
  BlueprintDecor,
  Callout,
  LogoBlock,
} from '../../components/schematic/Shared.jsx'

const F = { x: 230, y: 460 }
const R = { x: 790, y: 460 }

export default function R15V3Schematic({ health, selected, onSelect, onHover, onHoverEnd, plain = false }) {
  const P = (id, hit, props) => (
    <Part id={id} health={health(id)} selected={selected === id} onSelect={onSelect} onHover={onHover} onHoverEnd={onHoverEnd} hit={hit} {...props}>
      {props.children}
    </Part>
  )

  return (
    <svg className="schematic" viewBox="0 0 1000 620" xmlns="http://www.w3.org/2000/svg">
      {!plain && (
        <BlueprintDecor
          title="YZF-R15 V3"
          sub="UNIT 03 · FULL FAIRED SPORT"
          unit="REV 1.0"
          wheelbaseText="1325 MM"
          fx={F.x}
          rx={R.x}
        />
      )}
      {!plain && <Callout x={368} y={226} dx={-88} dy={-40} text="TALL SCREEN" />}
      {!plain && <Callout x={352} y={330} dx={-84} dy={-44} text="RADIATOR" />}
      {!plain && <Callout x={505} y={458} dx={-84} dy={44} text="LIQUID-COOLED 155CC VVA" />}
      {!plain && <Callout x={640} y={410} dx={60} dy={-44} text="UPSWEPT CAN" />}
      {!plain && <Callout x={600} y={300} dx={-70} dy={-44} text="STEPPED TAIL" />}
      {!plain && <LogoBlock cx={F.x} cy={F.y + 62} text="R15" w={40} />}
      {!plain && <LogoBlock cx={R.x} cy={R.y + 62} text="YAMAHA" w={58} />}

      {/* frame — sport frame */}
      {P('frame',
        <path className="hitpath" d="M 360 318 C 420 344 500 386 588 424 L 696 306 M 588 424 L 706 442" strokeWidth={24} />,
        {
          children: (
            <g>
              <path d="M 360 318 C 424 346 502 388 588 424" className="pstroke" />
              <path d="M 588 424 L 696 306" className="pstroke-thin" />
              <path d="M 588 424 L 708 440 L 700 454 L 588 438 Z" className="pstroke-thin" />
            </g>
          ),
        }
      )}

      {/* engine */}
      {P('engine',
        <path className="hitpath" d="M 442 354 C 484 344 542 350 566 374 C 582 394 584 424 568 448 C 546 462 488 462 464 448 C 446 436 440 418 446 404 C 450 384 440 370 442 354 Z" strokeWidth={22} />,
        {
          children: (
            <g>
              <path d="M 450 358 C 486 346 538 352 562 376 C 578 396 580 422 564 446 C 544 458 490 458 466 446 C 448 434 442 418 448 404 C 452 384 442 370 450 358 Z" className="pfill" fill="rgba(0,229,255,0.05)" />
              <line x1={456} y1={380} x2={566} y2={380} className="pstroke-thin" opacity={0.55} />
              <line x1={458} y1={396} x2={570} y2={396} className="pstroke-thin" opacity={0.55} />
              <line x1={460} y1={412} x2={572} y2={412} className="pstroke-thin" opacity={0.55} />
            </g>
          ),
        }
      )}

      {/* cooling — radiator */}
      {P('cooling',
        <path className="hitpath" d="M 352 320 L 384 324 L 382 366 L 350 362 Z" strokeWidth={20} />,
        {
          children: (
            <g>
              <path d="M 354 324 L 380 328 L 378 362 L 352 358 Z" className="pfill" fill="rgba(0,229,255,0.07)" />
              <line x1={360} y1={326} x2={358} y2={360} className="pstroke-thin" opacity={0.6} />
              <line x1={368} y1={328} x2={366} y2={360} className="pstroke-thin" opacity={0.6} />
              <line x1={376} y1={328} x2={374} y2={360} className="pstroke-thin" opacity={0.6} />
            </g>
          ),
        }
      )}

      {/* exhaust — upswept under tail */}
      {P('exhaust',
        <path className="hitpath" d="M 480 440 C 468 452 470 470 492 476 C 540 484 600 482 644 468 C 656 462 660 448 656 436" strokeWidth={22} />,
        {
          children: (
            <g>
              <path d="M 480 440 C 468 452 470 470 492 476 C 540 484 600 482 644 468" className="pstroke" />
              <path d="M 644 468 C 656 462 660 448 656 436" className="pstroke-thin" />
              <path d="M 648 444 C 652 438 652 430 650 424" className="pstroke-thin" opacity={0.5} />
            </g>
          ),
        }
      )}

      {/* chain */}
      {P('chain',
        <path className="hitpath" d="M 566 446 L 756 452" strokeWidth={20} />,
        {
          children: <ChainRun sp1={{ x: 566, y: 446 }} sp2={{ x: 756, y: 452 }} sag={5} />,
        }
      )}

      {/* rear suspension — mono-shock */}
      {P('rear-susp',
        <path className="hitpath" d="M 598 326 L 682 434 M 604 328 L 682 434" strokeWidth={22} />,
        {
          children: (
            <g>
              <path d="M 600 324 L 682 434" className="pstroke" />
              <CoilSpring x1={606} y1={334} x2={678} y2={424} coils={8} amp={3.5} />
              <circle cx={600} cy={324} r={4} className="pstroke-thin" />
              <circle cx={682} cy={434} r={4} className="pstroke-thin" />
            </g>
          ),
        }
      )}

      {/* front fork — USD */}
      {P('front-fork',
        <path className="hitpath" d="M 366 322 L 232 458 M 378 324 L 238 458" strokeWidth={22} />,
        {
          children: (
            <g>
              <path d="M 370 324 L 230 460" className="pstroke" />
              <path d="M 382 326 L 238 460" className="pstroke-thin" opacity={0.7} />
              <line x1={288} y1={392} x2={332} y2={386} className="pstroke-thin" opacity={0.5} />
            </g>
          ),
        }
      )}

      {/* cockpit — clip-ons low */}
      {P('cockpit',
        <path className="hitpath" d="M 374 316 C 360 306 348 298 338 292 M 376 318 L 366 294" strokeWidth={22} />,
        {
          children: (
            <g>
              <path d="M 374 316 C 362 308 352 302 344 297" className="pstroke" />
              <path d="M 376 318 L 368 296" className="pstroke-thin" />
              <rect x={338} y={290} width={12} height={10} rx={2} className="pstroke-thin" />
            </g>
          ),
        }
      )}

      {/* nose + windscreen */}
      {P('bodywork',
        <path className="hitpath" d="M 360 318 C 346 292 352 262 338 250 M 360 318 C 372 300 378 286 378 272 M 332 252 C 352 236 372 228 380 228" strokeWidth={20} />,
        {
          children: (
            <g>
              <path d="M 338 250 C 348 244 356 240 362 238 M 362 238 C 370 234 376 232 380 230" className="pstroke-thin" opacity={0.7} />
              <path d="M 340 258 L 362 252 M 344 268 L 360 262 M 348 278 L 362 272" className="pstroke-thin" opacity={0.4} />
              <path d="M 332 252 L 352 232 L 380 226 L 368 250 Z" className="pfill" fill="rgba(0,229,255,0.04)" />
              <path d="M 366 248 L 384 262" className="pstroke-thin" opacity={0.6} />
            </g>
          ),
        }
      )}

      {/* full fairing belly + tank */}
      {P('fuel-system',
        <path className="hitpath" d="M 384 322 C 420 330 470 344 516 356 C 556 366 580 384 590 408 L 596 422 M 590 408 C 570 420 540 426 508 424 L 470 420" strokeWidth={24} />,
        {
          children: (
            <g>
              <path d="M 384 322 C 424 332 472 346 516 358 C 554 368 578 386 588 408" className="pstroke" />
              <path d="M 588 408 L 594 420" className="pstroke-thin" />
              <path d="M 470 354 C 520 366 556 384 572 408 C 552 418 524 422 498 420 L 470 418 C 442 416 418 404 408 392 C 398 378 392 366 390 350 Z" className="pfill" fill="rgba(0,229,255,0.05)" />
              <path d="M 440 350 L 520 368 L 500 350 M 440 350 L 450 368" className="pstroke-thin" opacity={0.4} />
            </g>
          ),
        }
      )}

      {/* stepped tail */}
      {P('bodywork', null, {
        children: (
          <g>
            <path d="M 588 414 C 620 408 656 404 692 400 L 700 396 C 720 388 732 386 740 392 L 710 408 L 676 416 C 648 422 614 426 592 430 Z" className="pstroke" />
            <path d="M 700 396 L 736 390 L 740 400" className="pstroke-thin" />
            <path d="M 604 352 L 700 400" className="pstroke-thin" opacity={0.45} />
          </g>
        ),
      })}

      {/* wheels */}
      {P('front-wheel', <circle className="hitpath" cx={F.x} cy={F.y} r={70} fill="none" strokeWidth={30} />, {
        children: <WheelRim cx={F.x} cy={F.y} rim={68} rotate={-10} double />,
      })}
      {P('rear-wheel', <circle className="hitpath" cx={R.x} cy={R.y} r={70} fill="none" strokeWidth={30} />, {
        children: <WheelRim cx={R.x} cy={R.y} rim={68} rotate={-6} double />,
      })}

      {/* tyres */}
      {P('tyres', null, {
        children: (
          <>
            <TyreRing cx={F.x} cy={F.y} />
            <TyreRing cx={R.x} cy={R.y} inner={76} fat />
          </>
        ),
      })}

      {/* brakes */}
      {P('front-brake', <circle className="hitpath" cx={F.x} cy={F.y} r={26} fill="none" strokeWidth={22} />, {
        children: (
          <g>
            <BrakeDisc cx={F.x} cy={F.y} r={24} holes={5} rotate={12} />
            <path d="M 206 466 L 222 468 L 220 482 L 204 478 Z" className="pstroke-thin" />
          </g>
        ),
      })}

      {/* rear brake */}
      {P('rear-brake', <circle className="hitpath" cx={R.x} cy={R.y} r={24} fill="none" strokeWidth={22} />, {
        children: (
          <g>
            <BrakeDisc cx={R.x} cy={R.y} r={22} holes={5} rotate={30} />
            <path d="M 780 468 L 794 470 L 792 482 L 778 480 Z" className="pstroke-thin" />
          </g>
        ),
      })}

      {/* battery */}
      {P('battery',
        <path className="hitpath" d="M 384 322 C 396 334 410 344 426 350 L 386 330 Z M 716 300 L 728 296 L 726 306" strokeWidth={20} />,
        {
          children: (
            <g>
              <rect x={396} y={330} width={28} height={18} rx={2} className="pfill" fill="rgba(0,229,255,0.05)" />
              <line x1={404} y1={330} x2={404} y2={348} className="pstroke-thin" opacity={0.6} />
              <line x1={416} y1={330} x2={416} y2={348} className="pstroke-thin" opacity={0.6} />
              <path d="M 716 300 L 728 296 L 726 306 L 716 308 Z" className="pstroke-thin" />
            </g>
          ),
        }
      )}

      <Axle cx={F.x} cy={F.y} />
      <Axle cx={R.x} cy={R.y} />
    </svg>
  )
}