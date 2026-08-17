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

export default function SF250Schematic({ health, selected, onSelect, onHover, onHoverEnd, plain = false }) {
  const P = (id, hit, props) => (
    <Part id={id} health={health(id)} selected={selected === id} onSelect={onSelect} onHover={onHover} onHoverEnd={onHoverEnd} hit={hit} {...props}>
      {props.children}
    </Part>
  )

  return (
    <svg className="schematic" viewBox="0 0 1000 620" xmlns="http://www.w3.org/2000/svg">
      {!plain && (
        <BlueprintDecor
          title="GIXXER SF250"
          sub="UNIT 06 · SPORT FAIRED"
          unit="REV 1.0"
          wheelbaseText="1345 MM"
          fx={F.x}
          rx={R.x}
        />
      )}
      {!plain && <Callout x={366} y={238} dx={-88} dy={-40} text="SCREEN + FAIRING" />}
      {!plain && <Callout x={505} y={458} dx={-84} dy={44} text="OIL-COOLED 249CC" />}
      {!plain && <Callout x={660} y={430} dx={60} dy={44} text="SPORT CAN" />}
      {!plain && <Callout x={600} y={308} dx={-70} dy={-44} text="RAISED TAIL" />}
      {!plain && <LogoBlock cx={F.x} cy={F.y + 62} text="SF" w={36} />}
      {!plain && <LogoBlock cx={R.x} cy={R.y + 62} text="SUZUKI" w={56} />}

      {/* frame */}
      {P('frame',
        <path className="hitpath" d="M 368 318 C 430 344 508 386 590 422 L 700 302 M 590 422 L 708 440" strokeWidth={24} />,
        {
          children: (
            <g>
              <path d="M 368 318 C 428 348 508 388 590 422" className="pstroke" />
              <path d="M 590 422 L 700 302" className="pstroke-thin" />
              <path d="M 590 422 L 710 438 L 702 452 L 590 436 Z" className="pstroke-thin" />
            </g>
          ),
        }
      )}

      {/* engine */}
      {P('engine',
        <path className="hitpath" d="M 440 352 C 482 342 542 350 566 374 C 582 394 584 426 568 450 C 546 464 486 464 462 450 C 444 436 438 416 444 402 C 448 382 440 368 440 352 Z" strokeWidth={22} />,
        {
          children: (
            <g>
              <path d="M 448 356 C 486 344 538 352 562 376 C 578 396 580 424 564 448 C 544 460 488 460 464 448 C 446 434 440 416 446 402 C 450 382 442 368 448 356 Z" className="pfill" fill="rgba(0,229,255,0.05)" />
              <line x1={456} y1={378} x2={566} y2={378} className="pstroke-thin" opacity={0.55} />
              <line x1={458} y1={394} x2={570} y2={394} className="pstroke-thin" opacity={0.55} />
              <line x1={460} y1={410} x2={572} y2={410} className="pstroke-thin" opacity={0.55} />
            </g>
          ),
        }
      )}

      {/* cooling — oil cooler */}
      {P('cooling',
        <path className="hitpath" d="M 356 318 L 384 322 L 382 358 L 354 354 Z" strokeWidth={20} />,
        {
          children: (
            <g>
              <path d="M 358 322 L 380 326 L 378 354 L 356 350 Z" className="pfill" fill="rgba(0,229,255,0.07)" />
              <line x1={364} y1={324} x2={362} y2={352} className="pstroke-thin" opacity={0.6} />
              <line x1={372} y1={326} x2={370} y2={352} className="pstroke-thin" opacity={0.6} />
            </g>
          ),
        }
      )}

      {/* exhaust */}
      {P('exhaust',
        <path className="hitpath" d="M 472 442 C 458 458 462 478 492 480 C 530 482 576 478 618 456 M 618 456 L 636 440" strokeWidth={22} />,
        {
          children: (
            <g>
              <path d="M 472 442 C 458 458 462 478 492 480 C 530 482 576 478 618 456" className="pstroke" />
              <path d="M 618 456 C 630 448 636 442 640 434" className="pstroke-thin" />
            </g>
          ),
        }
      )}

      {/* chain */}
      {P('chain',
        <path className="hitpath" d="M 566 446 L 758 452" strokeWidth={20} />,
        {
          children: <ChainRun sp1={{ x: 566, y: 446 }} sp2={{ x: 758, y: 452 }} sag={5} />,
        }
      )}

      {/* rear suspension */}
      {P('rear-susp',
        <path className="hitpath" d="M 600 326 L 684 432 M 606 328 L 684 432" strokeWidth={22} />,
        {
          children: (
            <g>
              <path d="M 602 324 L 684 432" className="pstroke" />
              <CoilSpring x1={608} y1={334} x2={680} y2={422} coils={8} amp={3.5} />
              <circle cx={602} cy={324} r={4} className="pstroke-thin" />
              <circle cx={684} cy={432} r={4} className="pstroke-thin" />
            </g>
          ),
        }
      )}

      {/* front fork */}
      {P('front-fork',
        <path className="hitpath" d="M 368 322 L 232 458 M 380 324 L 238 458" strokeWidth={22} />,
        {
          children: (
            <g>
              <path d="M 372 324 L 230 460" className="pstroke" />
              <path d="M 384 326 L 238 460" className="pstroke-thin" opacity={0.7} />
            </g>
          ),
        }
      )}

      {/* cockpit — sport clip-ons */}
      {P('cockpit',
        <path className="hitpath" d="M 380 314 C 366 304 354 296 344 290 M 382 316 L 372 292" strokeWidth={22} />,
        {
          children: (
            <g>
              <path d="M 380 314 C 368 306 358 300 350 295" className="pstroke" />
              <path d="M 382 316 L 374 294" className="pstroke-thin" />
              <rect x={344} y={288} width={12} height={10} rx={2} className="pstroke-thin" />
            </g>
          ),
        }
      )}

      {/* fairing + windscreen */}
      {P('bodywork',
        <path className="hitpath" d="M 370 318 C 356 292 360 260 344 250 M 370 318 C 382 300 388 286 388 272 M 340 252 C 356 236 372 230 380 228" strokeWidth={20} />,
        {
          children: (
            <g>
              <path d="M 344 250 C 354 244 362 240 368 238 L 380 230" className="pstroke-thin" opacity={0.7} />
              <path d="M 344 258 L 366 252 M 346 268 L 366 262" className="pstroke-thin" opacity={0.4} />
              <path d="M 334 254 L 356 232 L 382 226 L 370 252 Z" className="pfill" fill="rgba(0,229,255,0.04)" />
              <path d="M 368 252 L 384 266" className="pstroke-thin" opacity={0.6} />
              <path d="M 366 300 C 378 288 384 276 386 266 L 386 322 Z" className="pfill" fill="rgba(0,229,255,0.05)" />
            </g>
          ),
        }
      )}

      {/* tank */}
      {P('fuel-system',
        <path className="hitpath" d="M 388 322 C 424 330 468 342 508 352 C 546 362 572 382 582 406 L 588 420 M 582 406 C 562 416 534 420 504 418 L 468 414" strokeWidth={24} />,
        {
          children: (
            <g>
              <path d="M 388 322 C 424 332 468 344 508 354 C 546 364 572 384 582 406" className="pstroke" />
              <path d="M 582 406 L 588 420" className="pstroke-thin" />
              <path d="M 468 352 C 516 364 552 382 570 406 C 550 416 524 420 496 418 L 468 416 C 440 414 418 402 410 390 C 400 378 394 366 392 350 Z" className="pfill" fill="rgba(0,229,255,0.05)" />
              <path d="M 440 348 L 516 366 M 440 348 L 448 366" className="pstroke-thin" opacity={0.4} />
            </g>
          ),
        }
      )}

      {/* raised tail */}
      {P('bodywork', null, {
        children: (
          <g>
            <path d="M 584 410 C 616 402 652 396 690 392 L 698 388 C 718 380 732 378 740 384 L 708 402 L 674 410 C 646 416 612 420 590 424 Z" className="pstroke" />
            <path d="M 698 388 L 736 382 L 740 392" className="pstroke-thin" />
            <path d="M 600 350 L 698 390" className="pstroke-thin" opacity={0.45} />
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
        <path className="hitpath" d="M 388 322 C 400 334 414 344 430 350 L 390 330 Z M 716 300 L 728 296 L 726 306" strokeWidth={20} />,
        {
          children: (
            <g>
              <rect x={400} y={330} width={28} height={18} rx={2} className="pfill" fill="rgba(0,229,255,0.05)" />
              <line x1={408} y1={330} x2={408} y2={348} className="pstroke-thin" opacity={0.6} />
              <line x1={420} y1={330} x2={420} y2={348} className="pstroke-thin" opacity={0.6} />
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