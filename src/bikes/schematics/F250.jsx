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

export default function F250Schematic({ health, selected, onSelect, onHover, onHoverEnd, plain = false }) {
  const P = (id, hit, props) => (
    <Part id={id} health={health(id)} selected={selected === id} onSelect={onSelect} onHover={onHover} onHoverEnd={onHoverEnd} hit={hit} {...props}>
      {props.children}
    </Part>
  )

  return (
    <svg className="schematic" viewBox="0 0 1000 620" xmlns="http://www.w3.org/2000/svg">
      {!plain && (
        <BlueprintDecor
          title="PULSAR F250"
          sub="UNIT 08 · FULL FAIRED SPORT"
          unit="REV 1.0"
          wheelbaseText="1351 MM"
          fx={F.x}
          rx={R.x}
        />
      )}
      {!plain && <Callout x={362} y={238} dx={-88} dy={-40} text="WINDSCREEN + FAIRING" />}
      {!plain && <Callout x={358} y={340} dx={-84} dy={-44} text="PROJECTOR LAMP" />}
      {!plain && <Callout x={505} y={458} dx={-84} dy={44} text="OIL-COOLED 249CC" />}
      {!plain && <Callout x={660} y={430} dx={60} dy={44} text="SPORT CAN" />}
      {!plain && <LogoBlock cx={F.x} cy={F.y + 62} text="F250" w={44} />}
      {!plain && <LogoBlock cx={R.x} cy={R.y + 62} text="BAJAJ" w={56} />}

      {/* frame */}
      {P('frame',
        <path className="hitpath" d="M 366 318 C 426 344 506 386 588 424 L 698 304 M 588 424 L 706 442" strokeWidth={24} />,
        {
          children: (
            <g>
              <path d="M 366 318 C 424 348 504 388 588 424" className="pstroke" />
              <path d="M 588 424 L 698 304" className="pstroke-thin" />
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

      {/* cooling — oil cooler */}
      {P('cooling',
        <path className="hitpath" d="M 356 320 L 384 324 L 382 360 L 354 356 Z" strokeWidth={20} />,
        {
          children: (
            <g>
              <path d="M 358 324 L 380 328 L 378 356 L 356 352 Z" className="pfill" fill="rgba(0,229,255,0.07)" />
              <line x1={364} y1={326} x2={362} y2={354} className="pstroke-thin" opacity={0.6} />
              <line x1={372} y1={328} x2={370} y2={354} className="pstroke-thin" opacity={0.6} />
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

      {/* fairing + windscreen + projector lamp */}
      {P('bodywork',
        <path className="hitpath" d="M 368 318 C 354 292 360 260 344 250 M 368 318 C 380 300 386 286 386 272 M 340 252 C 356 236 372 230 380 228" strokeWidth={20} />,
        {
          children: (
            <g>
              <path d="M 344 250 C 354 244 362 240 368 238 L 380 230" className="pstroke-thin" opacity={0.7} />
              <path d="M 344 258 L 366 252 M 346 268 L 366 262" className="pstroke-thin" opacity={0.4} />
              <path d="M 334 254 L 356 232 L 382 226 L 370 252 Z" className="pfill" fill="rgba(0,229,255,0.04)" />
              <circle cx={366} cy={266} r={10} className="pstroke-thin" opacity={0.8} />
              <circle cx={366} cy={266} r={5} className="pstroke-thin" opacity={0.5} />
              <path d="M 366 300 C 378 288 384 276 386 266 L 386 322 Z" className="pfill" fill="rgba(0,229,255,0.05)" />
            </g>
          ),
        }
      )}

      {/* tank + fairing belly */}
      {P('fuel-system',
        <path className="hitpath" d="M 386 322 C 424 330 470 342 510 352 C 548 362 574 384 584 408 L 590 420 M 584 408 C 564 418 536 422 506 420 L 470 416" strokeWidth={24} />,
        {
          children: (
            <g>
              <path d="M 386 322 C 424 332 470 344 510 354 C 548 364 574 384 584 408" className="pstroke" />
              <path d="M 584 408 L 590 420" className="pstroke-thin" />
              <path d="M 470 352 C 518 364 554 384 572 408 C 552 418 526 422 498 420 L 470 418 C 442 416 420 404 412 392 C 402 380 396 368 394 352 Z" className="pfill" fill="rgba(0,229,255,0.05)" />
              <path d="M 442 350 L 518 368 M 442 350 L 450 368" className="pstroke-thin" opacity={0.4} />
            </g>
          ),
        }
      )}

      {/* tail */}
      {P('bodywork', null, {
        children: (
          <g>
            <path d="M 584 412 C 618 404 654 398 692 394 L 700 390 C 720 382 734 380 742 386 L 710 404 L 676 412 C 648 418 612 422 590 426 Z" className="pstroke" />
            <path d="M 700 390 L 738 384 L 742 394" className="pstroke-thin" />
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
        <path className="hitpath" d="M 386 322 C 398 334 412 344 428 350 L 388 330 Z M 716 300 L 728 296 L 726 306" strokeWidth={20} />,
        {
          children: (
            <g>
              <rect x={398} y={330} width={28} height={18} rx={2} className="pfill" fill="rgba(0,229,255,0.05)" />
              <line x1={406} y1={330} x2={406} y2={348} className="pstroke-thin" opacity={0.6} />
              <line x1={418} y1={330} x2={418} y2={348} className="pstroke-thin" opacity={0.6} />
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