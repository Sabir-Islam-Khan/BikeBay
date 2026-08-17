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

export default function PulsarN160Schematic({ health, selected, onSelect, onHover, onHoverEnd, plain = false }) {
  const P = (id, hit, props) => (
    <Part id={id} health={health(id)} selected={selected === id} onSelect={onSelect} onHover={onHover} onHoverEnd={onHoverEnd} hit={hit} {...props}>
      {props.children}
    </Part>
  )

  return (
    <svg className="schematic" viewBox="0 0 1000 620" xmlns="http://www.w3.org/2000/svg">
      {!plain && (
        <BlueprintDecor
          title="PULSAR N160"
          sub="UNIT 01 · NAKED STREETFIGHTER"
          unit="REV 1.0"
          wheelbaseText="1358 MM"
          fx={F.x}
          rx={R.x}
        />
      )}
      {!plain && <Callout x={368} y={258} dx={-96} dy={-40} text="TWIN-POD LED LAMPS" />}
      {!plain && <Callout x={500} y={460} dx={-80} dy={44} text="AIR-OIL COOLED 165CC" />}
      {!plain && <Callout x={690} y={440} dx={60} dy={44} text="UPSWEPT MUFFLER" />}
      {!plain && <Callout x={588} y={322} dx={-70} dy={-44} text="MUSCULAR KNEE TANK" />}
      {!plain && <LogoBlock cx={F.x} cy={F.y + 62} text="PULSAR" w={54} />}
      {!plain && <LogoBlock cx={R.x} cy={R.y + 62} text="BAJAJ" w={56} />}

      {/* frame — diamond steel frame */}
      {P('frame',
        <path className="hitpath" d="M 372 316 C 420 340 500 380 588 420 L 700 440 M 588 420 L 720 300 M 372 316 L 700 300" strokeWidth={24} />,
        {
          children: (
            <g>
              <path d="M 372 316 C 420 344 500 384 588 420" className="pstroke" />
              <path d="M 588 420 L 700 300" className="pstroke-thin" />
              <path d="M 588 420 L 716 438 L 706 452 L 588 432 Z" className="pstroke-thin" />
            </g>
          ),
        }
      )}

      {/* engine — angular air/oil cooled */}
      {P('engine',
        <path className="hitpath" d="M 444 352 C 480 340 540 348 566 372 C 584 392 586 424 570 448 C 548 462 486 462 462 448 C 444 434 438 414 444 400 C 448 380 442 366 444 352 Z" strokeWidth={22} />,
        {
          children: (
            <g>
              <path d="M 452 356 C 486 344 536 352 562 374 C 580 394 582 422 566 446 C 546 458 488 458 464 446 C 446 432 440 414 446 400 C 450 380 444 366 452 356 Z" className="pfill" fill="rgba(0,229,255,0.05)" />
              <line x1={462} y1={376} x2={568} y2={376} className="pstroke-thin" opacity={0.55} />
              <line x1={464} y1={392} x2={572} y2={392} className="pstroke-thin" opacity={0.55} />
              <line x1={466} y1={408} x2={574} y2={408} className="pstroke-thin" opacity={0.55} />
              <path d="M 480 350 L 480 340 M 496 348 L 496 338 M 512 348 L 512 338" className="pstroke-thin" opacity={0.5} />
            </g>
          ),
        }
      )}

      {/* cooling — oil-cooler fins */}
      {P('cooling',
        <path className="hitpath" d="M 444 372 L 448 342 M 444 344 L 440 374 M 462 344 L 458 374" strokeWidth={20} />,
        {
          children: (
            <g>
              <path d="M 452 340 L 440 342 L 444 374 L 456 372 Z" className="pfill" fill="rgba(0,229,255,0.06)" />
              <line x1={444} y1={350} x2={454} y2={348} className="pstroke-thin" />
              <line x1={443} y1={358} x2={454} y2={356} className="pstroke-thin" />
              <line x1={442} y1={366} x2={455} y2={364} className="pstroke-thin" />
            </g>
          ),
        }
      )}

      {/* exhaust — stubby upswept */}
      {P('exhaust',
        <path className="hitpath" d="M 470 440 C 452 456 456 476 486 478 C 520 480 566 476 604 460 L 620 442" strokeWidth={22} />,
        {
          children: (
            <g>
              <path d="M 470 440 C 452 456 456 476 486 478 C 520 480 566 476 604 460" className="pstroke" />
              <path d="M 604 460 C 616 452 622 446 624 438" className="pstroke-thin" />
              <line x1={540} y1={480} x2={540} y2={490} className="pstroke-thin" opacity={0.5} />
            </g>
          ),
        }
      )}

      {/* chain */}
      {P('chain',
        <path className="hitpath" d="M 566 448 L 758 450" strokeWidth={20} />,
        {
          children: <ChainRun sp1={{ x: 566, y: 448 }} sp2={{ x: 758, y: 452 }} sag={5} />,
        }
      )}

      {/* rear suspension — mono-shock */}
      {P('rear-susp',
        <path className="hitpath" d="M 598 328 L 688 432 M 604 330 L 688 432" strokeWidth={22} />,
        {
          children: (
            <g>
              <path d="M 600 326 L 688 432" className="pstroke" />
              <CoilSpring x1={606} y1={336} x2={684} y2={422} coils={8} amp={3.5} />
              <circle cx={600} cy={326} r={4} className="pstroke-thin" />
              <circle cx={688} cy={432} r={4} className="pstroke-thin" />
            </g>
          ),
        }
      )}

      {/* front fork */}
      {P('front-fork',
        <path className="hitpath" d="M 366 318 L 232 458 M 378 320 L 238 458" strokeWidth={22} />,
        {
          children: (
            <g>
              <path d="M 370 320 L 230 460" className="pstroke" />
              <path d="M 382 322 L 238 460" className="pstroke-thin" opacity={0.7} />
            </g>
          ),
        }
      )}

      {/* cockpit — flat bar + twin pods */}
      {P('cockpit',
        <path className="hitpath" d="M 384 306 C 372 292 356 284 340 280 M 386 308 L 374 282" strokeWidth={22} />,
        {
          children: (
            <g>
              <path d="M 384 306 C 372 294 360 288 348 284" className="pstroke" />
              <path d="M 386 308 L 376 282" className="pstroke-thin" />
              <rect x={340} y={276} width={14} height={12} rx={2} className="pstroke-thin" />
            </g>
          ),
        }
      )}

      {/* twin-pod headlamps */}
      {P('bodywork',
        <path className="hitpath" d="M 372 320 C 360 296 368 270 352 258 M 372 320 C 386 300 396 282 392 266" strokeWidth={20} />,
        {
          children: (
            <g>
              <circle cx={352} cy={254} r={15} className="pstroke" />
              <circle cx={352} cy={254} r={10} className="pstroke-thin" opacity={0.7} />
              <path d="M 336 244 A 18 18 0 0 1 352 238 M 344 250 L 360 244" className="pstroke-thin" opacity={0.6} />
              <circle cx={388} cy={262} r={11} className="pstroke" />
              <circle cx={388} cy={262} r={7} className="pstroke-thin" opacity={0.7} />
              <path d="M 386 252 L 398 256 M 394 252 L 400 258" className="pstroke-thin" opacity={0.6} />
            </g>
          ),
        }
      )}

      {/* fuel system — muscular tank */}
      {P('fuel-system',
        <path className="hitpath" d="M 400 254 C 428 242 474 240 502 248 C 540 258 574 284 584 320 C 566 344 520 354 486 348 L 440 338 C 414 326 402 300 400 254 Z" strokeWidth={22} />,
        {
          children: (
            <g>
              <path
                d="M 402 256 C 430 244 474 242 502 250 C 540 260 572 286 582 320 C 564 342 520 352 486 346 L 442 336 C 416 324 404 302 402 256 Z"
                className="pfill"
                fill="rgba(0,229,255,0.06)"
              />
              <path d="M 460 250 C 496 258 520 272 540 296" className="pstroke-thin" opacity={0.45} />
              <path d="M 520 330 L 540 344 M 540 330 L 558 342" className="pstroke-thin" opacity={0.5} />
              <circle cx={448} cy={258} r={6} className="pstroke-thin" opacity={0.5} />
            </g>
          ),
        }
      )}

      {/* seat + tail — stepped */}
      {P('bodywork', null, {
        children: (
          <g>
            <path d="M 584 322 C 620 316 656 314 692 314 L 700 310 C 720 300 730 300 736 306 L 706 318 L 668 326 C 640 330 604 334 584 340 Z" className="pstroke" />
            <path d="M 696 312 L 736 310 L 740 320" className="pstroke-thin" />
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
            <TyreRing cx={R.x} cy={R.y} inner={77} fat />
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
        <path className="hitpath" d="M 400 254 C 410 268 424 280 440 286 L 402 262 Z M 720 300 L 732 296 L 730 306" strokeWidth={20} />,
        {
          children: (
            <g>
              <rect x={412} y={272} width={30} height={20} rx={2} className="pfill" fill="rgba(0,229,255,0.05)" />
              <line x1={420} y1={272} x2={420} y2={292} className="pstroke-thin" opacity={0.6} />
              <line x1={434} y1={272} x2={434} y2={292} className="pstroke-thin" opacity={0.6} />
              <path d="M 720 300 L 732 296 L 730 306 L 720 308 Z" className="pstroke-thin" />
            </g>
          ),
        }
      )}

      <Sprocket cx={566} cy={448} r={14} />
      <Axle cx={F.x} cy={F.y} />
      <Axle cx={R.x} cy={R.y} />
    </svg>
  )
}