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
          sub="UNIT 04 · NAKED STREETFIGHTER"
          unit="REV 1.0"
          wheelbaseText="1330 MM"
          fx={F.x}
          rx={R.x}
        />
      )}
      {!plain && <Callout x={370} y={252} dx={-96} dy={-40} text="WIDE SHOULDER TANK" />}
      {!plain && <Callout x={500} y={458} dx={-84} dy={44} text="AIR-COOLED 149CC" />}
      {!plain && <Callout x={668} y={438} dx={60} dy={44} text="STUBBY MUFFLER" />}
      {!plain && <Callout x={370} y={300} dx={-80} dy={-40} text="LED HEADLIGHT" />}
      {!plain && <LogoBlock cx={F.x} cy={F.y + 62} text="FZ" w={36} />}
      {!plain && <LogoBlock cx={R.x} cy={R.y + 62} text="YAMAHA" w={58} />}

      {/* frame */}
      {P('frame',
        <path className="hitpath" d="M 378 316 C 436 344 512 384 590 420 L 700 300 M 590 420 L 712 438" strokeWidth={24} />,
        {
          children: (
            <g>
              <path d="M 378 316 C 436 348 512 388 590 420" className="pstroke" />
              <path d="M 590 420 L 700 300" className="pstroke-thin" />
              <path d="M 590 420 L 714 436 L 704 450 L 590 432 Z" className="pstroke-thin" />
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

      {/* cooling — fins */}
      {P('cooling',
        <path className="hitpath" d="M 440 358 L 448 330 M 458 332 L 468 358 M 468 334 L 476 358" strokeWidth={20} />,
        {
          children: (
            <g>
              <path d="M 450 328 L 456 360 L 474 356 L 468 328 Z" className="pfill" fill="rgba(0,229,255,0.06)" />
              <line x1={452} y1={336} x2={470} y2={334} className="pstroke-thin" />
              <line x1={450} y1={344} x2={470} y2={342} className="pstroke-thin" />
              <line x1={448} y1={352} x2={470} y2={350} className="pstroke-thin" />
            </g>
          ),
        }
      )}

      {/* exhaust */}
      {P('exhaust',
        <path className="hitpath" d="M 472 442 C 458 458 462 478 492 480 C 528 482 574 478 616 456 M 616 456 L 634 440" strokeWidth={22} />,
        {
          children: (
            <g>
              <path d="M 472 442 C 458 458 462 478 492 480 C 528 482 574 478 616 456" className="pstroke" />
              <path d="M 616 456 C 628 448 634 442 638 434" className="pstroke-thin" />
            </g>
          ),
        }
      )}

      {/* chain */}
      {P('chain',
        <path className="hitpath" d="M 566 448 L 758 452" strokeWidth={20} />,
        {
          children: <ChainRun sp1={{ x: 566, y: 448 }} sp2={{ x: 758, y: 452 }} sag={5} />,
        }
      )}

      {/* rear suspension */}
      {P('rear-susp',
        <path className="hitpath" d="M 600 324 L 684 432 M 606 326 L 684 432" strokeWidth={22} />,
        {
          children: (
            <g>
              <path d="M 602 322 L 684 432" className="pstroke" />
              <CoilSpring x1={608} y1={332} x2={680} y2={422} coils={8} amp={3.5} />
              <circle cx={602} cy={322} r={4} className="pstroke-thin" />
              <circle cx={684} cy={432} r={4} className="pstroke-thin" />
            </g>
          ),
        }
      )}

      {/* front fork */}
      {P('front-fork',
        <path className="hitpath" d="M 368 320 L 232 458 M 380 322 L 238 458" strokeWidth={22} />,
        {
          children: (
            <g>
              <path d="M 372 322 L 230 460" className="pstroke" />
              <path d="M 384 324 L 238 460" className="pstroke-thin" opacity={0.7} />
            </g>
          ),
        }
      )}

      {/* cockpit — wide flat bar */}
      {P('cockpit',
        <path className="hitpath" d="M 392 306 C 376 290 358 282 336 278 M 394 308 L 382 280" strokeWidth={22} />,
        {
          children: (
            <g>
              <path d="M 392 306 C 378 294 364 288 348 284" className="pstroke" />
              <path d="M 394 308 L 384 280" className="pstroke-thin" />
              <rect x={340} y={276} width={14} height={12} rx={2} className="pstroke-thin" />
            </g>
          ),
        }
      )}

      {/* LED headlamp — small pointed */}
      {P('bodywork',
        <path className="hitpath" d="M 372 318 C 358 292 366 262 350 252 M 372 318 C 384 298 390 282 388 268" strokeWidth={20} />,
        {
          children: (
            <g>
              <path d="M 340 260 C 342 244 366 240 386 248 C 396 252 398 258 392 266 C 380 276 352 276 344 268 C 340 264 340 262 340 260 Z" className="pfill" fill="rgba(0,229,255,0.06)" />
              <path d="M 346 252 L 386 250" className="pstroke-thin" opacity={0.7} />
              <circle cx={362} cy={260} r={9} className="pstroke-thin" opacity={0.8} />
              <path d="M 366 268 L 376 270 M 366 272 L 380 273" className="pstroke-thin" opacity={0.6} />
            </g>
          ),
        }
      )}

      {/* fuel system — very wide shoulder tank */}
      {P('fuel-system',
        <path className="hitpath" d="M 396 250 C 424 234 476 232 510 240 C 560 254 588 288 596 322 C 576 346 524 358 486 352 L 440 340 C 410 328 398 302 396 250 Z" strokeWidth={24} />,
        {
          children: (
            <g>
              <path
                d="M 398 252 C 424 236 476 234 510 242 C 560 256 586 290 594 322 C 574 344 524 356 486 350 L 442 338 C 412 326 400 304 398 252 Z"
                className="pfill"
                fill="rgba(0,229,255,0.06)"
              />
              <path d="M 452 244 C 486 250 516 262 540 286" className="pstroke-thin" opacity={0.45} />
              <path d="M 456 240 C 492 250 522 262 546 290" className="pstroke-thin" opacity={0.3} />
              <path d="M 544 320 L 566 336 M 560 318 L 582 332" className="pstroke-thin" opacity={0.5} />
              <circle cx={446} cy={252} r={6} className="pstroke-thin" opacity={0.5} />
            </g>
          ),
        }
      )}

      {/* seat + tail */}
      {P('bodywork', null, {
        children: (
          <g>
            <path d="M 596 326 C 630 320 662 318 694 316 L 702 312 C 720 302 730 302 736 308 L 708 320 L 672 328 C 646 332 614 336 596 342 Z" className="pstroke" />
            <path d="M 700 312 L 730 306 L 734 314" className="pstroke-thin" />
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

      {/* battery */}
      {P('battery',
        <path className="hitpath" d="M 396 250 C 406 264 420 276 436 282 L 398 258 Z M 718 300 L 730 296 L 728 306" strokeWidth={20} />,
        {
          children: (
            <g>
              <rect x={408} y={268} width={30} height={20} rx={2} className="pfill" fill="rgba(0,229,255,0.05)" />
              <line x1={416} y1={268} x2={416} y2={288} className="pstroke-thin" opacity={0.6} />
              <line x1={430} y1={268} x2={430} y2={288} className="pstroke-thin" opacity={0.6} />
              <path d="M 718 300 L 730 296 L 728 306 L 718 308 Z" className="pstroke-thin" />
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