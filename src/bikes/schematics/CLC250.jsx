import React from 'react'
import {
  Part,
  TyreRing,
  WheelRim,
  BrakeDisc,
  ChainRun,
  Axle,
  BlueprintDecor,
  Callout,
  LogoBlock,
  TwinShock,
} from '../../components/schematic/Shared.jsx'

const F = { x: 255, y: 468 }
const R = { x: 765, y: 468 }
const G = 560

export default function CLC250Schematic({ health, selected, onSelect, onHover, onHoverEnd, plain = false }) {
  const P = (id, hit, props) => (
    <Part id={id} health={health(id)} selected={selected === id} onSelect={onSelect} onHover={onHover} onHoverEnd={onHoverEnd} hit={hit} {...props}>
      {props.children}
    </Part>
  )

  return (
    <svg className="schematic" viewBox="0 0 1000 620" xmlns="http://www.w3.org/2000/svg">
      {!plain && (
        <BlueprintDecor
          title="CL-C 250"
          sub="UNIT 07 · CRUISER"
          unit="REV 1.0"
          wheelbaseText="1470 MM"
          fx={F.x}
          rx={R.x}
          groundY={G}
        />
      )}
      {!plain && <Callout x={350} y={248} dx={-86} dy={-44} text="ROUND LED HEADLIGHT" />}
      {!plain && <Callout x={500} y={470} dx={-80} dy={44} text="LIQUID-COOLED 249CC" />}
      {!plain && <Callout x={690} y={474} dx={60} dy={40} text="CHROME SLASH-CUT" />}
      {!plain && <Callout x={480} y={292} dx={-80} dy={-36} text="WATER-DROP TANK" />}
      {!plain && <LogoBlock cx={F.x} cy={F.y + 60} text="CL-C" w={44} />}
      {!plain && <LogoBlock cx={R.x} cy={R.y + 60} text="CFMOTO" w={56} />}

      {/* frame */}
      {P('frame',
        <path className="hitpath" d="M 342 316 C 410 356 490 396 580 440 L 780 470 M 368 250 L 570 272 L 640 300 M 640 300 L 720 296 M 720 296 L 748 292" strokeWidth={24} />,
        {
          children: (
            <g>
              <path d="M 368 250 C 430 258 500 268 560 274 L 640 300" className="pstroke" />
              <path d="M 352 318 C 390 354 470 400 560 432" className="pstroke" />
              <path d="M 560 432 L 765 468 L 758 480 L 560 446 Z" className="pstroke-thin" />
              <path d="M 640 300 L 720 296 L 748 292" className="pstroke-thin" />
            </g>
          ),
        }
      )}

      {/* engine */}
      {P('engine',
        <path className="hitpath" d="M 440 356 C 460 346 504 344 534 354 C 552 362 570 378 578 404 C 582 424 572 440 554 450 C 526 460 486 460 468 450 C 452 442 446 426 450 408 C 454 388 448 372 440 356 Z" strokeWidth={22} />,
        {
          children: (
            <g>
              <path d="M 448 358 C 462 348 504 346 532 356 C 548 362 566 376 576 402 C 580 420 570 438 552 448 C 524 458 480 458 462 448 C 448 440 442 424 446 406 C 450 384 444 370 448 358 Z" className="pfill" fill="rgba(0,229,255,0.04)" />
              <line x1={456} y1={382} x2={570} y2={382} className="pstroke-thin" opacity={0.55} />
              <line x1={458} y1={396} x2={572} y2={396} className="pstroke-thin" opacity={0.55} />
              <line x1={464} y1={410} x2={566} y2={410} className="pstroke-thin" opacity={0.55} />
            </g>
          ),
        }
      )}

      {/* cooling */}
      {P('cooling',
        <path className="hitpath" d="M 412 366 L 444 366 L 448 412 L 420 412 Z" strokeWidth={20} />,
        {
          children: (
            <g>
              <path d="M 414 370 L 442 370 L 446 410 L 418 410 Z" className="pfill" fill="rgba(0,229,255,0.05)" />
              <line x1={422} y1={372} x2={420} y2={408} className="pstroke-thin" opacity={0.6} />
              <line x1={430} y1={372} x2={428} y2={408} className="pstroke-thin" opacity={0.6} />
            </g>
          ),
        }
      )}

      {/* exhaust */}
      {P('exhaust',
        <path className="hitpath" d="M 452 408 C 436 434 440 460 468 468 C 500 476 560 478 620 476 L 704 470 M 704 470 C 710 474 716 478 724 478" strokeWidth={22} />,
        {
          children: (
            <g>
              <path d="M 452 408 C 436 434 440 460 468 468 C 500 476 560 478 620 476 L 704 470" className="pstroke" />
              <path d="M 704 470 C 710 474 716 478 724 478" className="pstroke-thin" />
              <line x1={560} y1={477} x2={560} y2={486} className="pstroke-thin" opacity={0.5} />
              <line x1={620} y1={476} x2={620} y2={485} className="pstroke-thin" opacity={0.5} />
            </g>
          ),
        }
      )}

      {/* chain */}
      {P('chain',
        <path className="hitpath" d="M 578 448 L 744 452 M 578 448 L 744 452" strokeWidth={20} />,
        {
          children: <ChainRun sp1={{ x: 578, y: 448 }} sp2={{ x: 744, y: 454 }} sag={5} />,
        }
      )}

      {/* rear suspension — twin shocks, raked */}
      {P('rear-susp',
        <path className="hitpath" d="M 632 320 L 720 452 M 648 322 L 734 452" strokeWidth={22} />,
        {
          children: (
            <g>
              <TwinShock x1={636} y1={318} x2={718} y2={450} />
              <TwinShock x1={650} y1={320} x2={732} y2={450} />
            </g>
          ),
        }
      )}

      {/* front fork + gaiters */}
      {P('front-fork',
        <path className="hitpath" d="M 348 314 L 257 466 M 360 314 L 264 466" strokeWidth={22} />,
        {
          children: (
            <g>
              <path d="M 352 316 L 255 468" className="pstroke" />
              <path d="M 364 318 L 264 468" className="pstroke-thin" opacity={0.7} />
              <path d="M 344 330 L 344 360 M 356 330 L 356 360 M 344 380 L 344 410 M 356 380 L 356 410" className="pstroke-thin" opacity={0.5} />
            </g>
          ),
        }
      )}

      {/* cockpit — wide swept bars */}
      {P('cockpit',
        <path className="hitpath" d="M 368 250 C 352 242 336 236 322 232 M 352 240 L 344 212" strokeWidth={22} />,
        {
          children: (
            <g>
              <path d="M 368 250 C 354 244 342 240 332 236" className="pstroke" />
              <rect x={326} y={226} width={14} height={12} rx={2} className="pstroke-thin" />
              <path d="M 352 242 L 344 214" className="pstroke-thin" />
              <ellipse cx={342} cy={208} rx={11} ry={7} className="pstroke-thin" />
            </g>
          ),
        }
      )}

      {/* fuel system — water-drop tank */}
      {P('fuel-system',
        <path className="hitpath" d="M 400 240 C 420 216 470 208 510 214 C 546 220 566 240 574 264 C 560 282 520 288 486 284 L 440 276 C 420 270 404 258 400 240 Z" strokeWidth={22} />,
        {
          children: (
            <g>
              <path
                d="M 400 240 C 420 216 470 208 510 214 C 546 220 566 240 574 264 C 560 282 520 288 486 284 L 440 276 C 420 270 404 258 400 240 Z"
                className="pfill"
                fill="rgba(0,229,255,0.05)"
              />
              <path d="M 460 226 C 490 222 520 228 538 240 M 470 240 C 496 238 516 244 530 254" className="pstroke-thin" opacity={0.4} />
              <circle cx={448} cy={236} r={6} className="pstroke-thin" opacity={0.5} />
            </g>
          ),
        }
      )}

      {/* bodywork — rear fender + front fender */}
      {P('bodywork',
        <path className="hitpath" d="M 574 268 C 600 262 636 262 656 270 L 660 292 C 632 288 600 284 574 282 Z M 660 292 L 720 296 L 726 300 L 660 302 Z M 720 298 L 760 286 L 766 292 L 726 304 Z M 180 424 A 110 110 0 0 1 330 412 M 770 448 C 798 434 826 434 848 448 L 846 460" strokeWidth={20} />,
        {
          children: (
            <g>
              <path d="M 574 268 C 600 262 636 262 656 270 L 660 292 C 632 288 600 284 574 282 Z" className="pfill" fill="rgba(0,229,255,0.05)" />
              <path d="M 660 292 L 720 296 L 726 300 L 660 302 Z" className="pfill" fill="rgba(0,229,255,0.05)" />
              <path d="M 720 298 L 760 286 L 766 292 L 726 304 Z" className="pfill" fill="rgba(0,229,255,0.06)" />
              <path d="M 180 424 A 110 110 0 0 1 330 412" className="pstroke" />
              <path d="M 770 448 C 798 434 826 434 848 448 L 846 460 C 826 448 798 448 772 458 Z" className="pstroke-thin" />
              <path d="M 668 490 L 678 490" className="pstroke-thin" opacity={0.5} />
            </g>
          ),
        }
      )}

      {/* low cruiser seat */}
      {P('bodywork', null, {
        children: (
          <g>
            <path d="M 574 282 C 610 276 646 274 682 276 L 690 274 C 712 270 726 272 732 278 L 706 292 L 668 298 C 640 302 606 304 574 306 Z" className="pstroke" />
          </g>
        ),
      })}

      {/* wheels */}
      {P('front-wheel', <circle className="hitpath" cx={F.x} cy={F.y} r={66} fill="none" strokeWidth={30} />, {
        children: <WheelRim cx={F.x} cy={F.y} rim={58} rotate={-8} double />,
      })}
      {P('rear-wheel', <circle className="hitpath" cx={R.x} cy={R.y} r={68} fill="none" strokeWidth={30} />, {
        children: <WheelRim cx={R.x} cy={R.y} rim={62} rotate={-4} double />,
      })}

      {/* tyres */}
      {P('tyres', null, {
        children: (
          <>
            <TyreRing cx={F.x} cy={F.y} r={92} inner={72} fat />
            <TyreRing cx={R.x} cy={R.y} r={92} inner={72} fat />
          </>
        ),
      })}

      {/* brakes */}
      {P('front-brake', <circle className="hitpath" cx={F.x} cy={F.y} r={28} fill="none" strokeWidth={22} />, {
        children: (
          <g>
            <BrakeDisc cx={F.x} cy={F.y} r={26} holes={6} rotate={12} />
            <path d="M 231 474 L 247 476 L 245 490 L 229 486 Z" className="pstroke-thin" />
          </g>
        ),
      })}

      {/* rear brake */}
      {P('rear-brake', <circle className="hitpath" cx={R.x} cy={R.y} r={24} fill="none" strokeWidth={22} />, {
        children: (
          <g>
            <BrakeDisc cx={R.x} cy={R.y} r={22} holes={5} rotate={30} />
            <path d="M 758 474 L 772 476 L 770 488 L 756 486 Z" className="pstroke-thin" />
          </g>
        ),
      })}

      {/* battery */}
      {P('battery',
        <path className="hitpath" d="M 348 224 A 20 20 0 1 1 348 264 A 20 20 0 1 1 348 224 Z M 700 314 L 738 314 L 738 338 L 700 338 Z" strokeWidth={20} />,
        {
          children: (
            <g>
              <circle cx={352} cy={242} r={18} className="pstroke" />
              <circle cx={352} cy={242} r={13} className="pstroke-thin" opacity={0.7} />
              <circle cx={352} cy={242} r={8} className="pstroke-thin" opacity={0.5} />
              <path d="M 758 292 L 770 288 L 768 296 L 758 300 Z" className="pstroke-thin" />
              <rect x={700} y={314} width={38} height={24} rx={2} className="pfill" fill="rgba(0,229,255,0.05)" />
              <line x1={712} y1={314} x2={712} y2={338} className="pstroke-thin" opacity={0.6} />
              <line x1={726} y1={314} x2={726} y2={338} className="pstroke-thin" opacity={0.6} />
            </g>
          ),
        }
      )}

      <Axle cx={F.x} cy={F.y} />
      <Axle cx={R.x} cy={R.y} />
    </svg>
  )
}