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

const F = { x: 270, y: 456 }
const R = { x: 770, y: 466 }
const G = 560

export default function Meteor350Schematic({ health, selected, onSelect, onHover, onHoverEnd, plain = false }) {
  const P = (id, hit, props) => (
    <Part id={id} health={health(id)} selected={selected === id} onSelect={onSelect} onHover={onHover} onHoverEnd={onHoverEnd} hit={hit} {...props}>
      {props.children}
    </Part>
  )

  return (
    <svg className="schematic" viewBox="0 0 1000 620" xmlns="http://www.w3.org/2000/svg">
      {!plain && (
        <BlueprintDecor
          title="METEOR 350"
          sub="UNIT 10 · CRUISER"
          unit="REV 1.0"
          wheelbaseText="1400 MM"
          fx={F.x}
          rx={R.x}
          groundY={G}
        />
      )}
      {!plain && <Callout x={366} y={244} dx={-86} dy={-44} text="ROUND HEADLAMP + BEZEL" />}
      {!plain && <Callout x={505} y={470} dx={-80} dy={44} text="AIR-OIL 349CC SINGLE" />}
      {!plain && <Callout x={690} y={478} dx={60} dy={38} text="CHROME EXHAUST" />}
      {!plain && <Callout x={492} y={292} dx={-80} dy={-36} text="TEARDROP 15L TANK" />}
      {!plain && <Callout x={640} y={330} dx={60} dy={-40} text="TWIN SHOCKS" />}
      {!plain && <LogoBlock cx={F.x} cy={F.y + 60} text="METEOR" w={56} />}
      {!plain && <LogoBlock cx={R.x} cy={R.y + 60} text="R.E." w={40} />}

      {/* frame */}
      {P('frame',
        <path className="hitpath" d="M 356 322 C 420 362 490 400 580 440 L 780 470 M 380 252 L 570 276 L 660 302 M 660 302 L 726 302 M 726 302 L 748 296" strokeWidth={24} />,
        {
          children: (
            <g>
              <path d="M 380 252 C 440 260 510 270 570 278 L 660 302" className="pstroke" />
              <path d="M 366 320 C 400 356 470 400 560 434" className="pstroke" />
              <path d="M 560 434 L 770 466 L 760 478 L 560 448 Z" className="pstroke-thin" />
              <path d="M 660 302 L 726 302 L 748 296" className="pstroke-thin" />
            </g>
          ),
        }
      )}

      {/* engine */}
      {P('engine',
        <path className="hitpath" d="M 444 362 C 464 352 506 350 536 360 C 554 368 572 382 580 408 C 584 426 574 442 556 452 C 528 462 488 462 470 452 C 454 444 448 428 452 410 C 456 390 448 376 444 362 Z" strokeWidth={22} />,
        {
          children: (
            <g>
              <path d="M 452 362 C 466 352 508 350 536 360 C 554 366 572 380 580 406 C 584 424 574 442 556 452 C 528 462 486 462 468 452 C 454 444 448 428 452 410 C 456 388 448 374 452 362 Z" className="pfill" fill="rgba(0,229,255,0.04)" />
              <line x1={458} y1={386} x2={574} y2={386} className="pstroke-thin" opacity={0.55} />
              <line x1={460} y1={400} x2={576} y2={400} className="pstroke-thin" opacity={0.55} />
              <line x1={464} y1={414} x2={570} y2={414} className="pstroke-thin" opacity={0.55} />
            </g>
          ),
        }
      )}

      {/* cooling — fins */}
      {P('cooling',
        <path className="hitpath" d="M 418 372 L 450 372 L 454 416 L 424 416 Z" strokeWidth={20} />,
        {
          children: (
            <g>
              <path d="M 420 376 L 446 376 L 450 414 L 424 414 Z" className="pfill" fill="rgba(0,229,255,0.05)" />
              <line x1={430} y1={378} x2={428} y2={412} className="pstroke-thin" opacity={0.6} />
              <line x1={438} y1={378} x2={436} y2={412} className="pstroke-thin" opacity={0.6} />
            </g>
          ),
        }
      )}

      {/* exhaust — long chrome */}
      {P('exhaust',
        <path className="hitpath" d="M 458 410 C 442 436 446 462 472 470 C 504 478 566 480 626 478 L 716 472 M 716 472 L 736 470" strokeWidth={22} />,
        {
          children: (
            <g>
              <path d="M 458 410 C 442 436 446 462 472 470 C 504 478 566 480 626 478 L 716 472" className="pstroke" />
              <path d="M 716 472 L 736 470" className="pstroke-thin" />
              <line x1={570} y1={480} x2={570} y2={489} className="pstroke-thin" opacity={0.5} />
              <line x1={640} y1={478} x2={640} y2={487} className="pstroke-thin" opacity={0.5} />
            </g>
          ),
        }
      )}

      {/* chain */}
      {P('chain',
        <path className="hitpath" d="M 580 450 L 748 456 M 580 450 L 748 456" strokeWidth={20} />,
        {
          children: <ChainRun sp1={{ x: 580, y: 450 }} sp2={{ x: 748, y: 456 }} sag={5} />,
        }
      )}

      {/* rear suspension — twin shocks */}
      {P('rear-susp',
        <path className="hitpath" d="M 640 324 L 728 456 M 656 326 L 742 456" strokeWidth={22} />,
        {
          children: (
            <g>
              <TwinShock x1={644} y1={322} x2={726} y2={454} />
              <TwinShock x1={658} y1={324} x2={740} y2={454} />
            </g>
          ),
        }
      )}

      {/* front fork + gaiters */}
      {P('front-fork',
        <path className="hitpath" d="M 362 318 L 272 452 M 374 318 L 280 452" strokeWidth={22} />,
        {
          children: (
            <g>
              <path d="M 366 320 L 270 456" className="pstroke" />
              <path d="M 378 322 L 280 456" className="pstroke-thin" opacity={0.7} />
              <path d="M 358 340 L 358 370 M 370 340 L 370 370 M 358 388 L 358 418 M 370 388 L 370 418" className="pstroke-thin" opacity={0.5} />
            </g>
          ),
        }
      )}

      {/* cockpit — wide pull-back bars */}
      {P('cockpit',
        <path className="hitpath" d="M 380 252 C 362 244 346 238 330 234 M 364 242 L 356 212" strokeWidth={22} />,
        {
          children: (
            <g>
              <path d="M 380 252 C 364 246 350 242 338 238" className="pstroke" />
              <rect x={332} y={228} width={14} height={12} rx={2} className="pstroke-thin" />
              <path d="M 364 244 L 356 214" className="pstroke-thin" />
              <ellipse cx={354} cy={208} rx={11} ry={7} className="pstroke-thin" />
            </g>
          ),
        }
      )}

      {/* fuel system — teardrop tank */}
      {P('fuel-system',
        <path className="hitpath" d="M 410 244 C 432 216 486 206 524 214 C 560 222 580 246 588 272 C 570 292 522 298 484 292 L 440 282 C 420 276 408 262 410 244 Z" strokeWidth={22} />,
        {
          children: (
            <g>
              <path
                d="M 410 244 C 432 216 486 206 524 214 C 560 222 580 246 588 272 C 570 292 522 298 484 292 L 440 282 C 420 276 408 262 410 244 Z"
                className="pfill"
                fill="rgba(0,229,255,0.05)"
              />
              <rect x={428} y={202} width={40} height={22} rx={2} className="pstroke-thin" opacity={0.6} />
              <path d="M 478 236 C 504 232 526 238 540 250 M 486 250 C 508 248 522 254 532 262" className="pstroke-thin" opacity={0.4} />
              <circle cx={456} cy={244} r={6} className="pstroke-thin" opacity={0.5} />
            </g>
          ),
        }
      )}

      {/* bodywork — fenders */}
      {P('bodywork',
        <path className="hitpath" d="M 588 276 C 612 270 648 270 672 278 L 678 300 C 650 296 620 292 588 288 Z M 678 300 L 720 302 L 726 306 L 678 306 Z M 720 304 L 746 298 L 750 304 L 726 310 Z M 180 430 A 120 120 0 0 1 362 420 M 770 452 C 800 440 830 440 850 452 L 848 464" strokeWidth={20} />,
        {
          children: (
            <g>
              <path d="M 588 276 C 612 270 648 270 672 278 L 678 300 C 650 296 620 292 588 288 Z" className="pfill" fill="rgba(0,229,255,0.05)" />
              <path d="M 678 300 L 720 302 L 726 306 L 678 306 Z" className="pfill" fill="rgba(0,229,255,0.05)" />
              <path d="M 720 304 L 746 298 L 750 304 L 726 310 Z" className="pfill" fill="rgba(0,229,255,0.06)" />
              <path d="M 180 430 A 120 120 0 0 1 362 420" className="pstroke" />
              <path d="M 770 452 C 800 440 830 440 850 452 L 848 464 C 826 452 800 452 776 462 Z" className="pstroke-thin" />
              <path d="M 680 492 L 690 494" className="pstroke-thin" opacity={0.5} />
            </g>
          ),
        }
      )}

      {/* sculpted seat + backrest */}
      {P('bodywork', null, {
        children: (
          <g>
            <path d="M 588 288 C 624 282 662 280 700 280 L 708 278 C 730 274 742 276 748 282 L 722 296 L 684 300 C 654 304 620 306 588 306 Z" className="pstroke" />
            <path d="M 706 278 C 716 268 724 262 732 262" className="pstroke-thin" opacity={0.6} />
          </g>
        ),
      })}

      {/* wheels */}
      {P('front-wheel', <circle className="hitpath" cx={F.x} cy={F.y} r={70} fill="none" strokeWidth={30} />, {
        children: <WheelRim cx={F.x} cy={F.y} rim={60} rotate={-10} double />,
      })}
      {P('rear-wheel', <circle className="hitpath" cx={R.x} cy={R.y} r={68} fill="none" strokeWidth={30} />, {
        children: <WheelRim cx={R.x} cy={R.y} rim={60} rotate={-6} double />,
      })}

      {/* tyres */}
      {P('tyres', null, {
        children: (
          <>
            <TyreRing cx={F.x} cy={F.y} r={104} inner={84} />
            <TyreRing cx={R.x} cy={R.y} r={94} inner={74} fat />
          </>
        ),
      })}

      {/* brakes */}
      {P('front-brake', <circle className="hitpath" cx={F.x} cy={F.y} r={26} fill="none" strokeWidth={22} />, {
        children: (
          <g>
            <BrakeDisc cx={F.x} cy={F.y} r={24} holes={5} rotate={12} />
            <path d="M 246 462 L 262 464 L 260 478 L 244 474 Z" className="pstroke-thin" />
          </g>
        ),
      })}

      {/* rear brake */}
      {P('rear-brake', <circle className="hitpath" cx={R.x} cy={R.y} r={24} fill="none" strokeWidth={22} />, {
        children: (
          <g>
            <BrakeDisc cx={R.x} cy={R.y} r={22} holes={5} rotate={30} />
            <path d="M 758 470 L 772 472 L 770 484 L 756 482 Z" className="pstroke-thin" />
          </g>
        ),
      })}

      {/* battery */}
      {P('battery',
        <path className="hitpath" d="M 352 222 A 22 22 0 1 1 352 266 A 22 22 0 1 1 352 222 Z M 704 320 L 742 320 L 742 344 L 704 344 Z M 748 298 L 760 294 L 758 302" strokeWidth={20} />,
        {
          children: (
            <g>
              <circle cx={366} cy={244} r={20} className="pstroke" />
              <circle cx={366} cy={244} r={14} className="pstroke-thin" opacity={0.7} />
              <circle cx={366} cy={244} r={9} className="pstroke-thin" opacity={0.5} />
              <path d="M 748 298 L 760 294 L 758 302 L 748 306 Z" className="pstroke-thin" />
              <rect x={704} y={320} width={38} height={24} rx={2} className="pfill" fill="rgba(0,229,255,0.05)" />
              <line x1={716} y1={320} x2={716} y2={344} className="pstroke-thin" opacity={0.6} />
              <line x1={730} y1={320} x2={730} y2={344} className="pstroke-thin" opacity={0.6} />
            </g>
          ),
        }
      )}

      <Axle cx={F.x} cy={F.y} />
      <Axle cx={R.x} cy={R.y} />
    </svg>
  )
}