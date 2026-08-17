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
      {!plain && <Callout x={320} y={256} dx={-86} dy={-44} text="ROUND LED HEADLIGHT" />}
      {!plain && <Callout x={500} y={470} dx={-80} dy={44} text="LIQUID-COOLED 249CC" />}
      {!plain && <Callout x={700} y={476} dx={60} dy={40} text="CHROME SLASH-CUT" />}
      {!plain && <Callout x={480} y={278} dx={-80} dy={-36} text="WATER-DROP TANK" />}
      {!plain && <Callout x={660} y={336} dx={60} dy={-40} text="TWIN REAR SHOCKS" />}
      {!plain && <LogoBlock cx={F.x} cy={F.y + 60} text="CL-C" w={44} />}
      {!plain && <LogoBlock cx={R.x} cy={R.y + 60} text="CFMOTO" w={56} />}

      {/* frame — low cruiser backbone, relaxed geometry */}
      {P('frame',
        <path className="hitpath" d="M 338 332 C 408 368 488 406 578 444 L 782 474 M 362 258 L 562 280 L 642 308 M 642 308 L 724 304 M 724 304 L 750 300" strokeWidth={24} />,
        {
          children: (
            <g>
              <path d="M 362 258 C 428 264 500 274 562 282 L 642 308" className="pstroke" />
              <path d="M 348 330 C 392 362 470 404 560 436" className="pstroke" />
              <path d="M 560 436 L 765 468 L 758 480 L 560 450 Z" className="pstroke-thin" />
              <path d="M 642 308 L 724 304 L 750 300" className="pstroke-thin" />
            </g>
          ),
        }
      )}

      {/* engine — parallel twin with V-twin styling */}
      {P('engine',
        <path className="hitpath" d="M 436 362 C 456 350 500 348 530 358 C 548 366 566 380 574 406 C 578 424 568 440 550 450 C 522 460 482 460 464 450 C 448 442 442 426 446 408 C 450 388 442 374 436 362 Z" strokeWidth={22} />,
        {
          children: (
            <g>
              <path d="M 444 364 C 460 352 502 350 530 360 C 546 366 564 380 574 404 C 578 422 568 440 550 450 C 522 460 478 460 460 450 C 446 442 440 426 444 406 C 448 386 442 372 444 364 Z" className="pfill" fill="rgba(0,229,255,0.04)" />
              <line x1={452} y1={388} x2={568} y2={388} className="pstroke-thin" opacity={0.55} />
              <line x1={454} y1={402} x2={570} y2={402} className="pstroke-thin" opacity={0.55} />
              <line x1={460} y1={416} x2={564} y2={416} className="pstroke-thin" opacity={0.55} />
              <path d="M 470 380 C 478 374 492 372 504 376" className="pstroke-thin" opacity={0.35} />
              <path d="M 472 396 C 480 390 494 388 506 392" className="pstroke-thin" opacity={0.35} />
            </g>
          ),
        }
      )}

      {/* cooling — radiator with vertical fins */}
      {P('cooling',
        <path className="hitpath" d="M 406 372 L 438 372 L 442 418 L 414 418 Z" strokeWidth={20} />,
        {
          children: (
            <g>
              <path d="M 408 376 L 436 376 L 440 416 L 412 416 Z" className="pfill" fill="rgba(0,229,255,0.05)" />
              <line x1={418} y1={378} x2={416} y2={414} className="pstroke-thin" opacity={0.6} />
              <line x1={426} y1={378} x2={424} y2={414} className="pstroke-thin" opacity={0.6} />
            </g>
          ),
        }
      )}

      {/* exhaust — chrome slash-cut, low-slung cruiser style */}
      {P('exhaust',
        <path className="hitpath" d="M 448 412 C 432 438 436 464 464 472 C 496 480 556 482 616 480 L 698 474 M 698 474 C 704 478 712 482 722 482" strokeWidth={22} />,
        {
          children: (
            <g>
              <path d="M 448 412 C 432 438 436 464 464 472 C 496 480 556 482 616 480 L 698 474" className="pstroke" />
              <path d="M 698 474 C 704 478 712 482 722 482" className="pstroke-thin" />
              <line x1={556} y1={482} x2={556} y2={491} className="pstroke-thin" opacity={0.5} />
              <line x1={616} y1={480} x2={616} y2={489} className="pstroke-thin" opacity={0.5} />
              <path d="M 698 474 L 722 474" className="pstroke" strokeWidth={3.5} opacity={0.7} />
            </g>
          ),
        }
      )}

      {/* chain */}
      {P('chain',
        <path className="hitpath" d="M 576 452 L 746 456 M 576 452 L 746 456" strokeWidth={20} />,
        {
          children: <ChainRun sp1={{ x: 576, y: 452 }} sp2={{ x: 746, y: 458 }} sag={5} />,
        }
      )}

      {/* rear suspension — twin shocks, raked */}
      {P('rear-susp',
        <path className="hitpath" d="M 634 326 L 722 456 M 650 328 L 738 456" strokeWidth={22} />,
        {
          children: (
            <g>
              <TwinShock x1={638} y1={324} x2={720} y2={454} />
              <TwinShock x1={652} y1={326} x2={736} y2={454} />
            </g>
          ),
        }
      )}

      {/* front fork — raked cruiser fork with gaiters */}
      {P('front-fork',
        <path className="hitpath" d="M 344 324 L 253 466 M 356 324 L 262 466" strokeWidth={22} />,
        {
          children: (
            <g>
              <path d="M 348 326 L 251 468" className="pstroke" />
              <path d="M 360 328 L 262 468" className="pstroke-thin" opacity={0.7} />
              <path d="M 340 344 L 340 374 M 352 344 L 352 374 M 340 394 L 340 424 M 352 394 L 352 424" className="pstroke-thin" opacity={0.5} />
            </g>
          ),
        }
      )}

      {/* cockpit — wide swept-back pullback bars */}
      {P('cockpit',
        <path className="hitpath" d="M 362 258 C 344 248 326 240 312 234 M 346 248 L 340 216" strokeWidth={22} />,
        {
          children: (
            <g>
              <path d="M 362 258 C 346 250 334 244 322 238" className="pstroke" />
              <rect x={314} y={228} width={14} height={12} rx={2} className="pstroke-thin" />
              <path d="M 346 248 L 340 216" className="pstroke-thin" />
              <ellipse cx={338} cy={210} rx={11} ry={7} className="pstroke-thin" />
              <path d="M 322 238 C 316 234 308 230 298 226" className="pstroke-thin" opacity={0.5} />
              <circle cx={296} cy={224} r={4} className="pstroke-thin" opacity={0.4} />
            </g>
          ),
        }
      )}

      {/* fuel system — water-drop / teardrop tank, low and long */}
      {P('fuel-system',
        <path className="hitpath" d="M 394 250 C 414 224 462 214 502 220 C 540 226 562 246 570 270 C 556 290 516 296 482 292 L 436 284 C 416 278 400 266 394 250 Z" strokeWidth={22} />,
        {
          children: (
            <g>
              <path
                d="M 394 250 C 414 224 462 214 502 220 C 540 226 562 246 570 270 C 556 290 516 296 482 292 L 436 284 C 416 278 400 266 394 250 Z"
                className="pfill"
                fill="rgba(0,229,255,0.05)"
              />
              <path d="M 454 232 C 484 228 514 234 532 246 M 464 246 C 490 244 510 250 524 260" className="pstroke-thin" opacity={0.4} />
              <circle cx={442} cy={242} r={6} className="pstroke-thin" opacity={0.5} />
            </g>
          ),
        }
      )}

      {/* bodywork — rear fender + front fender */}
      {P('bodywork',
        <path className="hitpath" d="M 570 274 C 596 268 632 268 654 276 L 658 298 C 630 294 598 290 570 286 Z M 658 298 L 722 302 L 728 306 L 658 308 Z M 722 304 L 762 292 L 768 298 L 728 310 Z M 176 428 A 108 108 0 0 1 326 416 M 772 450 C 800 436 828 436 850 450 L 848 462" strokeWidth={20} />,
        {
          children: (
            <g>
              <path d="M 570 274 C 596 268 632 268 654 276 L 658 298 C 630 294 598 290 570 286 Z" className="pfill" fill="rgba(0,229,255,0.05)" />
              <path d="M 658 298 L 722 302 L 728 306 L 658 308 Z" className="pfill" fill="rgba(0,229,255,0.05)" />
              <path d="M 722 304 L 762 292 L 768 298 L 728 310 Z" className="pfill" fill="rgba(0,229,255,0.06)" />
              <path d="M 176 428 A 108 108 0 0 1 326 416" className="pstroke" />
              <path d="M 772 450 C 800 436 828 436 850 450 L 848 462 C 828 450 800 450 776 460 Z" className="pstroke-thin" />
              <path d="M 666 492 L 676 492" className="pstroke-thin" opacity={0.5} />
            </g>
          ),
        }
      )}

      {/* low sculpted cruiser seat — rider sits IN the bike */}
      {P('bodywork', null, {
        children: (
          <g>
            <path d="M 570 286 C 606 280 642 278 680 280 L 688 278 C 710 274 724 276 730 282 L 704 296 L 666 302 C 638 306 604 308 570 310 Z" className="pstroke" />
            <path d="M 590 294 C 618 290 648 288 676 290" className="pstroke-thin" opacity={0.35} />
          </g>
        ),
      })}

      {/* wheels — spoked cruiser style */}
      {P('front-wheel', <circle className="hitpath" cx={F.x} cy={F.y} r={66} fill="none" strokeWidth={30} />, {
        children: <WheelRim cx={F.x} cy={F.y} rim={58} rotate={-8} double />,
      })}
      {P('rear-wheel', <circle className="hitpath" cx={R.x} cy={R.y} r={68} fill="none" strokeWidth={30} />, {
        children: <WheelRim cx={R.x} cy={R.y} rim={62} rotate={-4} double />,
      })}

      {/* tyres — fat cruiser rubber */}
      {P('tyres', null, {
        children: (
          <>
            <TyreRing cx={F.x} cy={F.y} r={92} inner={72} fat />
            <TyreRing cx={R.x} cy={R.y} r={92} inner={72} fat />
          </>
        ),
      })}

      {/* front brake */}
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
