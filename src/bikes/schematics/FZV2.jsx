import React from 'react'
import {
  Part,
  TyreRing,
  WheelRim,
  BrakeDisc,
  ChainRun,
  Sprocket,
  CoilSpring,
  Axle,
  BlueprintDecor,
  Callout,
  LogoBlock,
} from '../../components/schematic/Shared.jsx'

const F = { x: 230, y: 460 }
const R = { x: 790, y: 460 }

export default function FZV2Schematic({ health, selected, onSelect, onHover, onHoverEnd, plain = false }) {
  const P = (id, hit, props) => (
    <Part id={id} health={health(id)} selected={selected === id} onSelect={onSelect} onHover={onHover} onHoverEnd={onHoverEnd} hit={hit} {...props}>
      {props.children}
    </Part>
  )

  return (
    <svg className="schematic" viewBox="0 0 1000 620" xmlns="http://www.w3.org/2000/svg">
      {!plain && (
        <BlueprintDecor
          title="FZ-S V2"
          sub="UNIT 04 · MUSCULAR NAKED"
          unit="REV 2.0"
          wheelbaseText="1330 MM"
          fx={F.x}
          rx={R.x}
        />
      )}
      {!plain && <Callout x={420} y={244} dx={-100} dy={-44} text="WIDE-SHOULDER TANK" />}
      {!plain && <Callout x={360} y={334} dx={-96} dy={-36} text="AIR SCOOPS" />}
      {!plain && <Callout x={504} y={458} dx={-84} dy={44} text="AIR-COOLED 149CC" />}
      {!plain && <Callout x={540} y={484} dx={60} dy={38} text="UNDERBELLY EXHAUST" />}
      {!plain && <Callout x={370} y={278} dx={-88} dy={-40} text="COMPACT LED" />}
      {!plain && <LogoBlock cx={F.x} cy={F.y + 62} text="FZ" w={36} />}
      {!plain && <LogoBlock cx={R.x} cy={R.y + 62} text="YAMAHA" w={58} />}

      {/* frame — compact trellis backbone */}
      {P('frame',
        <path className="hitpath" d="M 382 318 C 440 348 516 388 592 422 L 700 302 M 592 422 L 714 440 M 382 318 L 370 278" strokeWidth={24} />,
        {
          children: (
            <g>
              <path d="M 382 318 C 440 350 516 390 592 422" className="pstroke" />
              <path d="M 592 422 L 700 302" className="pstroke-thin" />
              <path d="M 592 422 L 716 438 L 706 452 L 592 434 Z" className="pstroke-thin" />
              <path d="M 382 318 L 370 280" className="pstroke-thin" opacity={0.5} />
            </g>
          ),
        }
      )}

      {/* engine — compact air-cooled single */}
      {P('engine',
        <path className="hitpath" d="M 442 356 C 484 344 548 352 572 378 C 590 400 590 430 574 454 C 552 468 490 468 466 454 C 448 440 442 420 448 406 C 452 386 444 372 442 356 Z" strokeWidth={22} />,
        {
          children: (
            <g>
              <path d="M 450 360 C 488 348 542 356 566 380 C 582 400 584 428 568 450 C 550 462 492 462 468 450 C 450 438 444 418 450 404 C 454 386 446 372 450 360 Z" className="pfill" fill="rgba(0,229,255,0.05)" />
              <line x1={458} y1={382} x2={570} y2={382} className="pstroke-thin" opacity={0.55} />
              <line x1={460} y1={398} x2={574} y2={398} className="pstroke-thin" opacity={0.55} />
              <line x1={462} y1={414} x2={576} y2={414} className="pstroke-thin" opacity={0.55} />
              <line x1={464} y1={430} x2={570} y2={430} className="pstroke-thin" opacity={0.45} />
              <path d="M 486 356 L 486 346 M 502 354 L 502 344 M 518 354 L 518 344" className="pstroke-thin" opacity={0.5} />
            </g>
          ),
        }
      )}

      {/* cooling — air-cool fins on cylinder head */}
      {P('cooling',
        <path className="hitpath" d="M 436 364 L 444 336 M 452 336 L 462 362 M 468 338 L 478 364 M 482 340 L 490 364" strokeWidth={20} />,
        {
          children: (
            <g>
              <path d="M 440 334 L 492 338 L 490 368 L 438 364 Z" className="pfill" fill="rgba(0,229,255,0.06)" />
              <line x1={448} y1={336} x2={446} y2={364} className="pstroke-thin" opacity={0.55} />
              <line x1={460} y1={336} x2={458} y2={364} className="pstroke-thin" opacity={0.55} />
              <line x1={472} y1={338} x2={470} y2={366} className="pstroke-thin" opacity={0.55} />
              <line x1={484} y1={340} x2={482} y2={366} className="pstroke-thin" opacity={0.55} />
            </g>
          ),
        }
      )}

      {/* exhaust — underbelly stubby */}
      {P('exhaust',
        <path className="hitpath" d="M 470 446 C 456 464 462 484 496 486 C 536 488 590 486 630 476 L 660 466 M 660 466 L 668 462" strokeWidth={22} />,
        {
          children: (
            <g>
              <path d="M 470 446 C 456 464 462 484 496 486 C 536 488 590 486 630 476 L 660 466" className="pstroke" />
              <path d="M 660 466 L 670 462" className="pstroke-thin" />
              <path d="M 496 486 L 496 494" className="pstroke-thin" opacity={0.4} />
              <path d="M 540 486 L 540 494" className="pstroke-thin" opacity={0.4} />
              <path d="M 586 484 L 586 492" className="pstroke-thin" opacity={0.4} />
            </g>
          ),
        }
      )}

      {/* chain */}
      {P('chain',
        <path className="hitpath" d="M 570 450 L 758 454" strokeWidth={20} />,
        {
          children: <ChainRun sp1={{ x: 570, y: 450 }} sp2={{ x: 758, y: 454 }} sag={5} />,
        }
      )}

      {/* rear suspension — mono-shock under seat */}
      {P('rear-susp',
        <path className="hitpath" d="M 604 328 L 688 436 M 610 330 L 688 436" strokeWidth={22} />,
        {
          children: (
            <g>
              <path d="M 606 326 L 688 436" className="pstroke" />
              <CoilSpring x1={612} y1={336} x2={684} y2={426} coils={8} amp={3.5} />
              <circle cx={606} cy={326} r={4} className="pstroke-thin" />
              <circle cx={688} cy={436} r={4} className="pstroke-thin" />
            </g>
          ),
        }
      )}

      {/* front fork — telescopic, chunky */}
      {P('front-fork',
        <path className="hitpath" d="M 374 322 L 232 458 M 386 324 L 240 458" strokeWidth={22} />,
        {
          children: (
            <g>
              <path d="M 378 324 L 230 460" className="pstroke" strokeWidth={3} />
              <path d="M 390 326 L 238 460" className="pstroke-thin" opacity={0.7} strokeWidth={2.5} />
              <line x1={306} y1={392} x2={340} y2={386} className="pstroke-thin" opacity={0.45} />
            </g>
          ),
        }
      )}

      {/* cockpit — wide flat bar, upright */}
      {P('cockpit',
        <path className="hitpath" d="M 396 308 C 380 290 362 280 340 274 M 398 310 L 386 276" strokeWidth={22} />,
        {
          children: (
            <g>
              <path d="M 396 308 C 382 294 368 286 352 280" className="pstroke" />
              <path d="M 398 310 L 388 278" className="pstroke-thin" />
              <rect x={342} y={270} width={16} height={12} rx={2} className="pstroke-thin" />
              <path d="M 336 276 L 342 274 M 358 274 L 364 272" className="pstroke-thin" opacity={0.5} />
            </g>
          ),
        }
      )}

      {/* compact pointed LED headlight — the FZ signature */}
      {P('bodywork',
        <path className="hitpath" d="M 374 320 C 360 294 368 266 352 256 M 374 320 C 386 298 392 280 390 266" strokeWidth={20} />,
        {
          children: (
            <g>
              {/* compact pointed headlamp housing */}
              <path d="M 344 264 L 380 248 L 394 260 L 386 272 L 348 276 Z" className="pfill" fill="rgba(0,229,255,0.06)" />
              <path d="M 344 264 L 380 248 L 394 260 L 386 272 L 348 276 Z" className="pstroke" strokeWidth={1.8} />
              {/* LED projector lens */}
              <ellipse cx={366} cy={262} rx={10} ry={7} className="pstroke-thin" opacity={0.8} />
              <circle cx={366} cy={262} r={4} fill="rgba(0,229,255,0.15)" />
              {/* DRL strip */}
              <path d="M 350 270 L 382 258" className="pstroke-thin" opacity={0.6} strokeWidth={1.5} />
            </g>
          ),
        }
      )}

      {/* fuel system — ultra-wide shoulder tank with air scoops */}
      {P('fuel-system',
        <path className="hitpath" d="M 400 248 C 430 228 486 224 522 234 C 576 252 610 292 618 332 C 596 356 538 368 494 362 L 444 350 C 412 338 400 310 400 248 Z" strokeWidth={24} />,
        {
          children: (
            <g>
              {/* main tank body — VERY wide at shoulders */}
              <path
                d="M 402 250 C 432 230 486 226 522 236 C 574 254 608 294 616 332 C 594 354 538 366 494 360 L 446 348 C 414 336 402 312 402 250 Z"
                className="pfill"
                fill="rgba(0,229,255,0.06)"
              />
              {/* tank shoulder contour — emphasizes the width */}
              <path d="M 438 244 C 478 248 518 260 552 286" className="pstroke-thin" opacity={0.45} />
              <path d="M 444 238 C 486 246 528 262 562 294" className="pstroke-thin" opacity={0.3} />
              {/* tank ridge line */}
              <path d="M 460 236 L 540 248" className="pstroke-thin" opacity={0.35} />
              {/* filler cap */}
              <circle cx={460} cy={244} r={7} className="pstroke-thin" opacity={0.55} />
              <circle cx={460} cy={244} r={3} className="pstroke-thin" opacity={0.4} />
            </g>
          ),
        }
      )}

      {/* air scoops — prominent FZ signature feature */}
      {P('bodywork',
        <path className="hitpath" d="M 426 320 L 460 310 L 458 348 L 424 358 Z M 540 318 L 572 306 L 576 344 L 544 354 Z" strokeWidth={20} />,
        {
          children: (
            <g>
              {/* left air scoop */}
              <path d="M 428 324 L 458 314 L 456 350 L 426 360 Z" className="pfill" fill="rgba(0,229,255,0.06)" />
              <path d="M 428 324 L 458 314 L 456 350 L 426 360 Z" className="pstroke" strokeWidth={1.4} />
              <line x1={436} y1={328} x2={434} y2={354} className="pstroke-thin" opacity={0.45} />
              <line x1={444} y1={322} x2={442} y2={352} className="pstroke-thin" opacity={0.45} />
              {/* right air scoop (further back on tank) */}
              <path d="M 542 320 L 572 308 L 574 344 L 544 356 Z" className="pfill" fill="rgba(0,229,255,0.06)" />
              <path d="M 542 320 L 572 308 L 574 344 L 544 356 Z" className="pstroke" strokeWidth={1.4} />
              <line x1={550} y1={320} x2={548} y2={350} className="pstroke-thin" opacity={0.45} />
              <line x1={560} y1={314} x2={558} y2={348} className="pstroke-thin" opacity={0.45} />
            </g>
          ),
        }
      )}

      {/* seat + tail — compact, stepped single-piece */}
      {P('bodywork', null, {
        children: (
          <g>
            <path d="M 618 336 C 650 328 680 324 710 320 L 718 316 C 736 306 744 306 750 312 L 720 324 L 686 332 C 658 338 630 342 618 348 Z" className="pstroke" />
            <path d="M 716 314 L 746 308 L 750 318" className="pstroke-thin" />
            <path d="M 620 346 L 650 342 L 680 336" className="pstroke-thin" opacity={0.35} />
          </g>
        ),
      })}

      {/* wheels */}
      {P('front-wheel', <circle className="hitpath" cx={F.x} cy={F.y} r={70} fill="none" strokeWidth={30} />, {
        children: <WheelRim cx={F.x} cy={F.y} rim={68} rotate={-10} double />,
      })}
      {P('rear-wheel', <circle className="hitpath" cx={R.x} cy={R.y} r={70} fill="none" strokeWidth={30} />, {
        children: <WheelRim cx={R.x} cy={R.y} rim={68} rotate={-4} double />,
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

      {/* battery + electrical */}
      {P('battery',
        <path className="hitpath" d="M 400 250 C 410 266 426 280 444 286 L 402 258 Z M 720 302 L 732 298 L 730 308" strokeWidth={20} />,
        {
          children: (
            <g>
              <rect x={412} y={270} width={30} height={20} rx={2} className="pfill" fill="rgba(0,229,255,0.05)" />
              <line x1={420} y1={270} x2={420} y2={290} className="pstroke-thin" opacity={0.6} />
              <line x1={434} y1={270} x2={434} y2={290} className="pstroke-thin" opacity={0.6} />
              <path d="M 720 302 L 732 298 L 730 308 L 720 310 Z" className="pstroke-thin" />
            </g>
          ),
        }
      )}

      <Sprocket cx={570} cy={450} r={14} />
      <Axle cx={F.x} cy={F.y} />
      <Axle cx={R.x} cy={R.y} />
    </svg>
  )
}
