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
      {!plain && <Callout x={340} y={248} dx={-90} dy={-50} text="ROUND HEADLAMP + BEZEL" />}
      {!plain && <Callout x={510} y={468} dx={-84} dy={44} text="AIR-OIL 349CC SINGLE" />}
      {!plain && <Callout x={700} y={478} dx={64} dy={36} text="LONG CHROME EXHAUST" />}
      {!plain && <Callout x={500} y={286} dx={-84} dy={-38} text="TEARDROP 15L TANK" />}
      {!plain && <Callout x={650} y={328} dx={58} dy={-42} text="TWIN SHOCKS" />}
      {!plain && <Callout x={688} y={262} dx={54} dy={-46} text="PILLION BACKREST" />}
      {!plain && <Callout x={310} y={194} dx={-60} dy={-40} text="WINDSCREEN" />}
      {!plain && <LogoBlock cx={F.x} cy={F.y + 62} text="METEOR" w={56} />}
      {!plain && <LogoBlock cx={R.x} cy={R.y + 62} text="R.E." w={40} />}

      {/* windshield / windscreen */}
      {P('bodywork',
        <path className="hitpath" d="M 310 230 C 306 210 310 180 322 168 C 334 156 348 156 356 168 C 364 180 366 210 362 230 Z" strokeWidth={20} />,
        {
          children: (
            <g>
              <path d="M 316 226 C 314 208 316 182 326 172 C 334 162 346 162 354 172 C 362 182 364 208 362 226 Z" className="pfill" fill="rgba(0,229,255,0.03)" />
              <path d="M 316 226 C 314 208 316 182 326 172 C 334 162 346 162 354 172 C 362 182 364 208 362 226 Z" className="pstroke-thin" opacity={0.45} />
              <line x1={338} y1={170} x2={338} y2={224} className="pstroke-thin" opacity={0.25} />
            </g>
          ),
        }
      )}

      {/* frame — heavier downtube, longer backbone for 350cc */}
      {P('frame',
        <path className="hitpath" d="M 362 318 C 430 364 500 404 590 444 L 782 472 M 386 252 L 580 278 L 668 304 M 668 304 L 732 304 M 732 304 L 756 298" strokeWidth={26} />,
        {
          children: (
            <g>
              <path d="M 386 252 C 450 262 520 272 580 280 L 668 304" className="pstroke" />
              <path d="M 370 320 C 408 360 478 402 570 438" className="pstroke" />
              <path d="M 570 438 L 770 466 L 762 480 L 570 452 Z" className="pstroke-thin" />
              <path d="M 668 304 L 732 304 L 756 298" className="pstroke-thin" />
              <path d="M 440 360 L 454 408" className="pstroke-thin" opacity={0.4} />
            </g>
          ),
        }
      )}

      {/* engine — larger, bulkier 349cc single with fins */}
      {P('engine',
        <path className="hitpath" d="M 438 356 C 460 344 510 340 544 352 C 564 360 584 378 592 408 C 596 430 584 448 564 458 C 534 470 490 470 468 458 C 448 448 440 430 444 410 C 448 388 440 370 438 356 Z" strokeWidth={24} />,
        {
          children: (
            <g>
              <path d="M 444 358 C 464 346 512 342 544 354 C 562 362 582 380 590 410 C 594 428 582 446 562 456 C 532 468 488 468 466 456 C 448 446 440 430 444 410 C 448 386 442 372 444 358 Z" className="pfill" fill="rgba(0,229,255,0.05)" />
              <line x1={452} y1={382} x2={582} y2={382} className="pstroke-thin" opacity={0.5} />
              <line x1={454} y1={396} x2={584} y2={396} className="pstroke-thin" opacity={0.5} />
              <line x1={458} y1={410} x2={580} y2={410} className="pstroke-thin" opacity={0.5} />
              <line x1={462} y1={424} x2={574} y2={424} className="pstroke-thin" opacity={0.45} />
              <line x1={468} y1={438} x2={566} y2={438} className="pstroke-thin" opacity={0.4} />
              <ellipse cx={518} cy={370} rx={16} ry={10} className="pstroke-thin" opacity={0.35} />
            </g>
          ),
        }
      )}

      {/* cooling — air-oil fins on cylinder barrel */}
      {P('cooling',
        <path className="hitpath" d="M 414 366 L 448 366 L 452 420 L 420 420 Z" strokeWidth={20} />,
        {
          children: (
            <g>
              <path d="M 418 370 L 444 370 L 448 418 L 422 418 Z" className="pfill" fill="rgba(0,229,255,0.06)" />
              <line x1={426} y1={372} x2={424} y2={416} className="pstroke-thin" opacity={0.6} />
              <line x1={432} y1={372} x2={430} y2={416} className="pstroke-thin" opacity={0.6} />
              <line x1={438} y1={372} x2={436} y2={416} className="pstroke-thin" opacity={0.6} />
            </g>
          ),
        }
      )}

      {/* exhaust — long chrome sweeping peashooter, extends past rear axle */}
      {P('exhaust',
        <path className="hitpath" d="M 456 414 C 438 442 442 466 474 474 C 508 482 574 484 640 482 L 730 476 C 738 476 744 474 750 472 L 768 470 M 750 472 C 758 476 764 480 770 480" strokeWidth={22} />,
        {
          children: (
            <g>
              <path d="M 456 414 C 438 442 442 466 474 474 C 508 482 574 484 640 482 L 730 476" className="pstroke" />
              <path d="M 730 476 C 738 476 744 474 750 472" className="pstroke-thin" />
              <path d="M 750 472 C 758 476 764 480 770 480" className="pstroke-thin" />
              <ellipse cx={768} cy={474} rx={6} ry={4} className="pstroke-thin" opacity={0.55} />
              <line x1={574} y1={484} x2={574} y2={493} className="pstroke-thin" opacity={0.45} />
              <line x1={640} y1={482} x2={640} y2={491} className="pstroke-thin" opacity={0.45} />
            </g>
          ),
        }
      )}

      {/* chain */}
      {P('chain',
        <path className="hitpath" d="M 586 454 L 750 460 M 586 454 L 750 460" strokeWidth={20} />,
        {
          children: <ChainRun sp1={{ x: 586, y: 454 }} sp2={{ x: 750, y: 460 }} sag={5} />,
        }
      )}

      {/* rear suspension — twin shocks, angled more for cruiser look */}
      {P('rear-susp',
        <path className="hitpath" d="M 644 326 L 730 460 M 662 328 L 746 460" strokeWidth={22} />,
        {
          children: (
            <g>
              <TwinShock x1={648} y1={324} x2={728} y2={458} />
              <TwinShock x1={666} y1={326} x2={744} y2={458} />
            </g>
          ),
        }
      )}

      {/* front fork — long, raked cruiser fork with gaiters */}
      {P('front-fork',
        <path className="hitpath" d="M 366 316 L 272 452 M 380 316 L 286 452" strokeWidth={24} />,
        {
          children: (
            <g>
              <path d="M 370 318 L 270 456" className="pstroke" />
              <path d="M 384 320 L 284 456" className="pstroke-thin" opacity={0.7} />
              <path d="M 362 338 L 362 372 M 376 338 L 376 372" className="pstroke-thin" opacity={0.5} />
              <path d="M 358 390 L 358 424 M 372 390 L 372 424" className="pstroke-thin" opacity={0.5} />
              <ellipse cx={368} cy={350} rx={14} ry={3} className="pstroke-thin" opacity={0.3} />
              <ellipse cx={368} cy={382} rx={14} ry={3} className="pstroke-thin" opacity={0.3} />
            </g>
          ),
        }
      )}

      {/* cockpit — wide pulled-back cruiser bars */}
      {P('cockpit',
        <path className="hitpath" d="M 386 252 C 366 242 348 236 332 232 M 370 242 L 362 208" strokeWidth={22} />,
        {
          children: (
            <g>
              <path d="M 386 252 C 368 244 354 240 340 236" className="pstroke" />
              <rect x={334} y={226} width={14} height={12} rx={2} className="pstroke-thin" />
              <path d="M 370 242 L 362 210" className="pstroke-thin" />
              <ellipse cx={360} cy={204} rx={11} ry={7} className="pstroke-thin" />
            </g>
          ),
        }
      )}

      {/* fuel system — teardrop tank, bigger for 15L capacity */}
      {P('fuel-system',
        <path className="hitpath" d="M 414 244 C 436 212 494 200 536 210 C 574 220 596 248 604 278 C 586 300 530 308 490 300 L 444 290 C 424 284 412 266 414 244 Z" strokeWidth={24} />,
        {
          children: (
            <g>
              <path
                d="M 414 244 C 436 212 494 200 536 210 C 574 220 596 248 604 278 C 586 300 530 308 490 300 L 444 290 C 424 284 412 266 414 244 Z"
                className="pfill"
                fill="rgba(0,229,255,0.05)"
              />
              <rect x={440} y={196} width={44} height={24} rx={2} className="pstroke-thin" opacity={0.6} />
              <path d="M 486 240 C 516 236 540 244 556 258 M 494 256 C 518 254 534 262 546 272" className="pstroke-thin" opacity={0.4} />
              <circle cx={462} cy={248} r={7} className="pstroke-thin" opacity={0.5} />
              <circle cx={462} cy={248} r={3} fill="rgba(0,229,255,0.15)" />
            </g>
          ),
        }
      )}

      {/* bodywork — front fender hugging tyre */}
      {P('bodywork',
        <path className="hitpath" d="M 182 428 A 124 124 0 0 1 366 422 M 780 454 C 808 442 836 442 856 454 L 854 466" strokeWidth={20} />,
        {
          children: (
            <g>
              <path d="M 182 428 A 124 124 0 0 1 366 422" className="pstroke" />
              <path d="M 186 432 A 120 120 0 0 1 362 426" className="pstroke-thin" opacity={0.35} />
              <path d="M 780 454 C 808 442 836 442 856 454 L 854 466 C 834 454 808 454 784 464 Z" className="pstroke-thin" />
              <path d="M 690 494 L 700 496" className="pstroke-thin" opacity={0.5} />
            </g>
          ),
        }
      )}

      {/* sculpted low seat with pillion backrest */}
      {P('bodywork', null, {
        children: (
          <g>
            <path d="M 600 290 C 636 284 674 282 710 282 L 718 280 C 738 276 750 278 756 284 L 730 298 L 692 302 C 662 306 628 308 600 308 Z" className="pstroke" />
            <path d="M 714 280 L 720 274 C 722 266 726 260 732 256 C 738 252 744 252 748 258 C 750 262 750 270 748 276 L 744 282" className="pstroke" />
            <path d="M 720 274 C 722 268 726 262 730 258" className="pstroke-thin" opacity={0.4} />
            <rect x={726} y={254} width={20} height={4} rx={2} className="pstroke-thin" opacity={0.5} />
          </g>
        ),
      })}

      {/* wheels — spoked, slightly larger for cruiser */}
      {P('front-wheel', <circle className="hitpath" cx={F.x} cy={F.y} r={72} fill="none" strokeWidth={32} />, {
        children: <WheelRim cx={F.x} cy={F.y} rim={62} rotate={-10} double />,
      })}
      {P('rear-wheel', <circle className="hitpath" cx={R.x} cy={R.y} r={70} fill="none" strokeWidth={32} />, {
        children: <WheelRim cx={R.x} cy={R.y} rim={62} rotate={-6} double />,
      })}

      {/* tyres — beefier for cruiser stance */}
      {P('tyres', null, {
        children: (
          <>
            <TyreRing cx={F.x} cy={F.y} r={108} inner={86} fat />
            <TyreRing cx={R.x} cy={R.y} r={98} inner={76} fat />
          </>
        ),
      })}

      {/* front brake — larger disc for 350cc */}
      {P('front-brake', <circle className="hitpath" cx={F.x} cy={F.y} r={28} fill="none" strokeWidth={22} />, {
        children: (
          <g>
            <BrakeDisc cx={F.x} cy={F.y} r={26} holes={6} rotate={12} />
            <path d="M 246 462 L 262 464 L 260 478 L 244 474 Z" className="pstroke-thin" />
          </g>
        ),
      })}

      {/* rear brake */}
      {P('rear-brake', <circle className="hitpath" cx={R.x} cy={R.y} r={24} fill="none" strokeWidth={22} />, {
        children: (
          <g>
            <BrakeDisc cx={R.x} cy={R.y} r={22} holes={5} rotate={30} />
            <path d="M 760 472 L 774 474 L 772 486 L 758 484 Z" className="pstroke-thin" />
          </g>
        ),
      })}

      {/* battery — positioned under seat area */}
      {P('battery',
        <path className="hitpath" d="M 356 220 A 22 22 0 1 1 356 264 A 22 22 0 1 1 356 220 Z M 710 322 L 748 322 L 748 348 L 710 348 Z M 756 300 L 768 296 L 766 304" strokeWidth={20} />,
        {
          children: (
            <g>
              <circle cx={370} cy={242} r={20} className="pstroke" />
              <circle cx={370} cy={242} r={14} className="pstroke-thin" opacity={0.7} />
              <circle cx={370} cy={242} r={9} className="pstroke-thin" opacity={0.5} />
              <path d="M 756 300 L 768 296 L 766 304 L 756 308 Z" className="pstroke-thin" />
              <rect x={710} y={322} width={38} height={26} rx={2} className="pfill" fill="rgba(0,229,255,0.05)" />
              <line x1={722} y1={322} x2={722} y2={348} className="pstroke-thin" opacity={0.6} />
              <line x1={736} y1={322} x2={736} y2={348} className="pstroke-thin" opacity={0.6} />
            </g>
          ),
        }
      )}

      {/* forward foot controls — pegs mounted forward of engine */}
      {P('frame',
        <path className="hitpath" d="M 420 440 L 410 460 M 434 444 L 424 464" strokeWidth={18} />,
        {
          children: (
            <g>
              <line x1={422} y1={442} x2={412} y2={462} className="pstroke" />
              <line x1={436} y1={446} x2={426} y2={466} className="pstroke" />
              <rect x={406} y={458} width={12} height={6} rx={2} className="pstroke-thin" opacity={0.6} />
              <rect x={422} y={464} width={12} height={6} rx={2} className="pstroke-thin" opacity={0.6} />
            </g>
          ),
        }
      )}

      <Axle cx={F.x} cy={F.y} />
      <Axle cx={R.x} cy={R.y} />
    </svg>
  )
}
