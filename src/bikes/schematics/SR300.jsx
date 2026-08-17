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

export default function SR300Schematic({ health, selected, onSelect, onHover, onHoverEnd, plain = false }) {
  const P = (id, hit, props) => (
    <Part id={id} health={health(id)} selected={selected === id} onSelect={onSelect} onHover={onHover} onHoverEnd={onHoverEnd} hit={hit} {...props}>
      {props.children}
    </Part>
  )

  return (
    <svg className="schematic" viewBox="0 0 1000 620" xmlns="http://www.w3.org/2000/svg">
      {!plain && (
        <BlueprintDecor
          title="SR300"
          sub="UNIT 09 · FULL FAIRED SPORT"
          unit="REV 1.0"
          wheelbaseText="1360 MM"
          fx={F.x}
          rx={R.x}
        />
      )}
      {!plain && <Callout x={368} y={232} dx={-92} dy={-40} text="SHARP LED NOSE" />}
      {!plain && <Callout x={360} y={330} dx={-84} dy={-44} text="RADIATOR" />}
      {!plain && <Callout x={440} y={442} dx={-84} dy={44} text="BELLY PAN" />}
      {!plain && <Callout x={505} y={458} dx={-80} dy={44} text="LIQUID 292CC" />}
      {!plain && <Callout x={660} y={404} dx={60} dy={-44} text="SINGLE-SEAT COWL" />}
      {!plain && <LogoBlock cx={F.x} cy={F.y + 62} text="SR" w={36} />}
      {!plain && <LogoBlock cx={R.x} cy={R.y + 62} text="CFMOTO" w={58} />}

      {/* frame */}
      {P('frame',
        <path className="hitpath" d="M 360 318 C 420 344 500 386 588 424 L 696 304 M 588 424 L 706 442" strokeWidth={24} />,
        {
          children: (
            <g>
              <path d="M 360 318 C 424 346 502 388 588 424" className="pstroke" />
              <path d="M 588 424 L 696 304" className="pstroke-thin" />
              <path d="M 588 424 L 708 440 L 700 454 L 588 438 Z" className="pstroke-thin" />
            </g>
          ),
        }
      )}

      {/* engine */}
      {P('engine',
        <path className="hitpath" d="M 440 354 C 482 344 542 352 566 376 C 582 396 584 426 568 450 C 546 462 486 462 462 448 C 444 436 438 418 444 404 C 448 384 440 370 440 354 Z" strokeWidth={22} />,
        {
          children: (
            <g>
              <path d="M 448 358 C 486 346 538 354 562 378 C 578 398 580 424 564 448 C 544 458 488 458 464 446 C 446 434 440 418 446 404 C 450 384 442 370 448 358 Z" className="pfill" fill="rgba(0,229,255,0.05)" />
              <line x1={456} y1={380} x2={566} y2={380} className="pstroke-thin" opacity={0.55} />
              <line x1={458} y1={396} x2={570} y2={396} className="pstroke-thin" opacity={0.55} />
              <line x1={460} y1={412} x2={572} y2={412} className="pstroke-thin" opacity={0.55} />
            </g>
          ),
        }
      )}

      {/* cooling — radiator */}
      {P('cooling',
        <path className="hitpath" d="M 350 320 L 382 324 L 380 364 L 348 360 Z" strokeWidth={20} />,
        {
          children: (
            <g>
              <path d="M 352 324 L 378 328 L 376 360 L 350 356 Z" className="pfill" fill="rgba(0,229,255,0.07)" />
              <line x1={358} y1={326} x2={356} y2={358} className="pstroke-thin" opacity={0.6} />
              <line x1={366} y1={328} x2={364} y2={358} className="pstroke-thin" opacity={0.6} />
              <line x1={374} y1={328} x2={372} y2={358} className="pstroke-thin" opacity={0.6} />
            </g>
          ),
        }
      )}

      {/* exhaust — stubby upswept */}
      {P('exhaust',
        <path className="hitpath" d="M 478 440 C 466 452 468 470 490 476 C 538 484 596 482 640 468 C 652 462 658 448 654 436" strokeWidth={22} />,
        {
          children: (
            <g>
              <path d="M 478 440 C 466 452 468 470 490 476 C 538 484 596 482 640 468" className="pstroke" />
              <path d="M 640 468 C 652 462 658 448 654 436" className="pstroke-thin" />
              <path d="M 644 446 C 648 440 648 432 646 426" className="pstroke-thin" opacity={0.5} />
            </g>
          ),
        }
      )}

      {/* chain */}
      {P('chain',
        <path className="hitpath" d="M 564 446 L 756 452" strokeWidth={20} />,
        {
          children: <ChainRun sp1={{ x: 564, y: 446 }} sp2={{ x: 756, y: 452 }} sag={5} />,
        }
      )}

      {/* rear suspension */}
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
        <path className="hitpath" d="M 364 322 L 232 458 M 376 324 L 238 458" strokeWidth={22} />,
        {
          children: (
            <g>
              <path d="M 368 324 L 230 460" className="pstroke" />
              <path d="M 380 326 L 238 460" className="pstroke-thin" opacity={0.7} />
              <line x1={284} y1={392} x2={330} y2={386} className="pstroke-thin" opacity={0.5} />
            </g>
          ),
        }
      )}

      {/* cockpit — low clip-ons */}
      {P('cockpit',
        <path className="hitpath" d="M 372 316 C 358 306 346 298 336 292 M 374 318 L 364 294" strokeWidth={22} />,
        {
          children: (
            <g>
              <path d="M 372 316 C 360 308 350 302 342 297" className="pstroke" />
              <path d="M 374 318 L 366 296" className="pstroke-thin" />
              <rect x={336} y={290} width={12} height={10} rx={2} className="pstroke-thin" />
            </g>
          ),
        }
      )}

      {/* sharp LED nose + windscreen */}
      {P('bodywork',
        <path className="hitpath" d="M 358 318 C 344 292 348 260 330 248 M 358 318 C 370 300 376 286 376 272 M 324 250 C 344 232 368 224 378 224" strokeWidth={20} />,
        {
          children: (
            <g>
              <path d="M 330 248 C 340 242 348 238 356 236 L 376 226" className="pstroke-thin" opacity={0.7} />
              <path d="M 330 256 L 354 250 M 332 266 L 354 260" className="pstroke-thin" opacity={0.4} />
              <path d="M 322 252 L 344 228 L 376 222 L 362 250 Z" className="pfill" fill="rgba(0,229,255,0.04)" />
              <path d="M 360 246 L 380 258" className="pstroke-thin" opacity={0.6} />
              <path d="M 336 262 L 350 258 M 342 270 L 352 266" className="pstroke-thin" opacity={0.7} />
            </g>
          ),
        }
      )}

      {/* full fairing + belly pan */}
      {P('fuel-system',
        <path className="hitpath" d="M 376 322 C 416 332 464 344 506 354 C 544 364 570 384 580 408 L 586 420 M 580 408 C 560 418 530 422 500 420 L 464 416 M 400 430 L 480 438 C 448 430 420 420 404 410" strokeWidth={24} />,
        {
          children: (
            <g>
              <path d="M 376 322 C 414 332 462 344 506 354 C 544 364 570 384 580 408" className="pstroke" />
              <path d="M 580 408 L 586 420" className="pstroke-thin" />
              <path d="M 464 352 C 514 364 550 382 568 408 C 548 418 520 422 494 420 L 464 418 C 436 416 412 404 404 392 C 394 378 388 366 386 350 Z" className="pfill" fill="rgba(0,229,255,0.05)" />
              <path d="M 402 430 L 480 438 C 448 430 420 420 404 410" className="pstroke-thin" />
              <path d="M 404 410 L 390 420" className="pstroke-thin" />
            </g>
          ),
        }
      )}

      {/* single-seat tail */}
      {P('bodywork', null, {
        children: (
          <g>
            <path d="M 580 412 C 612 402 648 396 686 392 L 694 388 C 714 380 730 378 738 384 L 706 402 L 672 410 C 644 416 610 420 588 424 Z" className="pstroke" />
            <path d="M 694 388 L 734 382 L 738 392" className="pstroke-thin" />
            <path d="M 600 352 L 694 390" className="pstroke-thin" opacity={0.45} />
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
        <path className="hitpath" d="M 376 322 C 388 334 402 344 418 350 L 378 330 Z M 716 300 L 728 296 L 726 306" strokeWidth={20} />,
        {
          children: (
            <g>
              <rect x={388} y={330} width={28} height={18} rx={2} className="pfill" fill="rgba(0,229,255,0.05)" />
              <line x1={396} y1={330} x2={396} y2={348} className="pstroke-thin" opacity={0.6} />
              <line x1={408} y1={330} x2={408} y2={348} className="pstroke-thin" opacity={0.6} />
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