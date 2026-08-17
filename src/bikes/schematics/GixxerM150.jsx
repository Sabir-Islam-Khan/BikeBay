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

export default function GixxerM150Schematic({ health, selected, onSelect, onHover, onHoverEnd, plain = false }) {
  const P = (id, hit, props) => (
    <Part id={id} health={health(id)} selected={selected === id} onSelect={onSelect} onHover={onHover} onHoverEnd={onHoverEnd} hit={hit} {...props}>
      {props.children}
    </Part>
  )

  return (
    <svg className="schematic" viewBox="0 0 1000 620" xmlns="http://www.w3.org/2000/svg">
      {!plain && (
        <BlueprintDecor
          title="GIXXER M150"
          sub="UNIT 02 · NAKED STREET"
          unit="REV 1.0"
          wheelbaseText="1330 MM"
          fx={F.x}
          rx={R.x}
        />
      )}
      {!plain && <Callout x={330} y={250} dx={-80} dy={-40} text="WIDE LED CLUSTER" />}
      {!plain && <Callout x={510} y={458} dx={-80} dy={44} text="AIR-COOLED 155CC" />}
      {!plain && <Callout x={640} y={480} dx={60} dy={30} text="STUBBY MUFFLER" />}
      {!plain && <Callout x={530} y={240} dx={-60} dy={-44} text="KNEE-SCULPTED TANK" />}
      {!plain && <LogoBlock cx={F.x} cy={F.y + 62} text="GIXXER" w={52} />}
      {!plain && <LogoBlock cx={R.x} cy={R.y + 62} text="SUZUKI" w={56} />}

      {/* frame — cradle-style, more upright */}
      {P('frame',
        <path className="hitpath" d="M 378 322 C 430 350 520 390 600 424 L 710 310 M 600 424 L 720 442" strokeWidth={24} />,
        {
          children: (
            <g>
              <path d="M 378 322 C 432 352 520 392 600 424" className="pstroke" />
              <path d="M 600 424 L 700 310" className="pstroke-thin" />
              <path d="M 600 424 L 716 440 L 706 454 L 600 436 Z" className="pstroke-thin" />
            </g>
          ),
        }
      )}

      {/* engine — air cooled, horizontal fin layout */}
      {P('engine',
        <path className="hitpath" d="M 450 358 C 490 346 548 354 572 380 C 590 400 590 432 574 456 C 552 468 492 468 468 454 C 450 440 444 420 450 406 C 454 386 446 372 450 358 Z" strokeWidth={22} />,
        {
          children: (
            <g>
              <path d="M 458 362 C 494 350 544 358 568 382 C 586 402 586 430 570 452 C 550 464 494 464 470 452 C 452 438 446 418 452 404 C 456 384 448 372 458 362 Z" className="pfill" fill="rgba(0,229,255,0.05)" />
              <line x1={466} y1={382} x2={574} y2={382} className="pstroke-thin" opacity={0.55} />
              <line x1={468} y1={398} x2={578} y2={398} className="pstroke-thin" opacity={0.55} />
              <line x1={470} y1={414} x2={580} y2={414} className="pstroke-thin" opacity={0.55} />
            </g>
          ),
        }
      )}

      {/* cooling — cylinder head fins */}
      {P('cooling',
        <path className="hitpath" d="M 448 364 L 456 336 M 458 338 L 466 364 M 468 340 L 476 364" strokeWidth={20} />,
        {
          children: (
            <g>
              <path d="M 456 336 L 462 368 L 478 364 L 472 336 Z" className="pfill" fill="rgba(0,229,255,0.06)" />
              <line x1={460} y1={344} x2={474} y2={342} className="pstroke-thin" />
              <line x1={458} y1={352} x2={474} y2={350} className="pstroke-thin" />
              <line x1={456} y1={360} x2={474} y2={358} className="pstroke-thin" />
            </g>
          ),
        }
      )}

      {/* exhaust — short stubby, LOW position */}
      {P('exhaust',
        <path className="hitpath" d="M 480 448 C 466 464 470 484 500 486 C 538 488 574 484 610 468 C 628 460 638 454 648 450" strokeWidth={22} />,
        {
          children: (
            <g>
              <path d="M 480 448 C 466 464 470 484 500 486 C 538 488 574 484 610 468" className="pstroke" />
              <path d="M 610 468 C 622 462 632 456 642 452" className="pstroke-thin" />
              <circle cx={644} cy={450} r={4} className="pstroke-thin" opacity={0.6} />
            </g>
          ),
        }
      )}

      {/* chain */}
      {P('chain',
        <path className="hitpath" d="M 572 454 L 760 458" strokeWidth={20} />,
        {
          children: <ChainRun sp1={{ x: 572, y: 454 }} sp2={{ x: 760, y: 458 }} sag={5} />,
        }
      )}

      {/* rear suspension — mono-shock */}
      {P('rear-susp',
        <path className="hitpath" d="M 608 332 L 694 438 M 614 334 L 694 438" strokeWidth={22} />,
        {
          children: (
            <g>
              <path d="M 610 330 L 694 438" className="pstroke" />
              <CoilSpring x1={616} y1={340} x2={690} y2={428} coils={8} amp={3.5} />
              <circle cx={610} cy={330} r={4} className="pstroke-thin" />
              <circle cx={694} cy={438} r={4} className="pstroke-thin" />
            </g>
          ),
        }
      )}

      {/* front fork — telescopic, more upright rake */}
      {P('front-fork',
        <path className="hitpath" d="M 374 326 L 234 458 M 386 328 L 242 458" strokeWidth={22} />,
        {
          children: (
            <g>
              <path d="M 378 328 L 230 460" className="pstroke" />
              <path d="M 390 330 L 240 460" className="pstroke-thin" opacity={0.7} />
            </g>
          ),
        }
      )}

      {/* cockpit — wide flat bar */}
      {P('cockpit',
        <path className="hitpath" d="M 392 314 C 380 300 362 292 344 288 M 394 316 L 382 290" strokeWidth={22} />,
        {
          children: (
            <g>
              <path d="M 392 314 C 380 302 366 296 352 292" className="pstroke" />
              <path d="M 394 316 L 384 290" className="pstroke-thin" />
              <rect x={346} y={284} width={16} height={12} rx={2} className="pstroke-thin" />
            </g>
          ),
        }
      )}

      {/* wide angular LED headlamp cluster — NOT twin-pod */}
      {P('bodywork',
        <path className="hitpath" d="M 374 322 C 360 294 354 262 336 252 M 374 322 C 388 298 396 278 394 264" strokeWidth={20} />,
        {
          children: (
            <g>
              <path d="M 310 262 C 308 248 328 238 356 236 C 378 234 396 240 404 250 C 410 258 406 268 396 274 C 378 282 336 282 318 274 C 312 270 310 266 310 262 Z" className="pfill" fill="rgba(0,229,255,0.06)" />
              <path d="M 318 254 L 396 248" className="pstroke-thin" opacity={0.7} />
              <path d="M 324 262 L 392 258" className="pstroke-thin" opacity={0.5} />
              <path d="M 320 270 L 388 268" className="pstroke-thin" opacity={0.4} />
              <path d="M 310 264 C 324 250 362 244 394 252" className="pstroke-thin" opacity={0.6} />
              <path d="M 316 274 C 336 280 368 280 390 276" className="pstroke-thin" opacity={0.4} />
            </g>
          ),
        }
      )}

      {/* fuel system — wide bulbous tank with knee air scoops */}
      {P('fuel-system',
        <path className="hitpath" d="M 404 250 C 438 234 498 230 530 240 C 568 252 600 280 610 324 C 594 350 546 362 508 356 L 450 346 C 418 334 408 308 404 250 Z" strokeWidth={22} />,
        {
          children: (
            <g>
              <path
                d="M 406 252 C 440 236 498 232 530 242 C 568 254 598 282 608 324 C 592 348 546 360 508 354 L 452 344 C 420 332 410 310 406 252 Z"
                className="pfill"
                fill="rgba(0,229,255,0.06)"
              />
              <path d="M 470 238 C 510 248 536 262 558 290" className="pstroke-thin" opacity={0.45} />
              {/* knee air scoop — right side */}
              <path d="M 490 288 L 520 278 L 530 300 L 500 310 Z" className="pstroke-thin" opacity={0.55} />
              <path d="M 494 294 L 522 284" className="pstroke-thin" opacity={0.35} />
              <path d="M 496 302 L 524 292" className="pstroke-thin" opacity={0.35} />
              {/* knee air scoop — left side (mirrored) */}
              <path d="M 460 280 L 480 272 L 488 292 L 468 300 Z" className="pstroke-thin" opacity={0.45} />
              <circle cx={456} cy={254} r={6} className="pstroke-thin" opacity={0.5} />
              <path d="M 510 338 L 540 352 M 530 336 L 560 348" className="pstroke-thin" opacity={0.35} />
            </g>
          ),
        }
      )}

      {/* engine cowl / belly pan */}
      {P('bodywork', null, {
        children: (
          <g>
            <path d="M 438 448 C 426 458 432 476 460 480 C 490 482 526 478 548 464 L 562 456" className="pstroke-thin" opacity={0.5} />
            <path d="M 438 448 L 460 480 L 548 464 L 562 456 L 562 452 L 438 444 Z" className="pfill" fill="rgba(0,229,255,0.03)" />
          </g>
        ),
      })}

      {/* seat + sharp tail section — single piece, slight step */}
      {P('bodywork', null, {
        children: (
          <g>
            <path d="M 610 326 C 648 318 690 316 720 316 L 730 312 C 748 302 756 302 762 308 L 730 320 L 694 328 C 660 334 626 338 610 346 Z" className="pstroke" />
            <path d="M 722 314 L 758 308 L 762 316" className="pstroke-thin" />
            <path d="M 730 318 L 742 302 M 740 320 L 754 306" className="pstroke-thin" opacity={0.45} />
          </g>
        ),
      })}

      {/* wheels */}
      {P('wheels', <circle className="hitpath" cx={F.x} cy={F.y} r={70} fill="none" strokeWidth={30} />, {
        children: <WheelRim cx={F.x} cy={F.y} rim={68} rotate={-10} double />,
      })}
      {P('wheels', <circle className="hitpath" cx={R.x} cy={R.y} r={70} fill="none" strokeWidth={30} />, {
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

      {/* front brake — petal disc */}
      {P('front-brake', <circle className="hitpath" cx={F.x} cy={F.y} r={26} fill="none" strokeWidth={22} />, {
        children: (
          <g>
            <BrakeDisc cx={F.x} cy={F.y} r={24} holes={5} rotate={12} />
            <path d="M 206 466 L 222 468 L 220 482 L 204 478 Z" className="pstroke-thin" />
          </g>
        ),
      })}

      {/* rear brake — petal disc */}
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
        <path className="hitpath" d="M 406 250 C 416 266 430 278 446 284 L 408 260 Z M 726 302 L 738 298 L 736 308" strokeWidth={20} />,
        {
          children: (
            <g>
              <rect x={418} y={274} width={30} height={20} rx={2} className="pfill" fill="rgba(0,229,255,0.05)" />
              <line x1={426} y1={274} x2={426} y2={294} className="pstroke-thin" opacity={0.6} />
              <line x1={440} y1={274} x2={440} y2={294} className="pstroke-thin" opacity={0.6} />
              <path d="M 726 302 L 738 298 L 736 308 L 726 310 Z" className="pstroke-thin" />
            </g>
          ),
        }
      )}

      <Sprocket cx={572} cy={454} r={14} />
      <Axle cx={F.x} cy={F.y} />
      <Axle cx={R.x} cy={R.y} />
    </svg>
  )
}
