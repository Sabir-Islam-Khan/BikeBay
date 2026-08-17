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
      {!plain && <Callout x={380} y={262} dx={-100} dy={-40} text="WIDE LED CLUSTER" />}
      {!plain && <Callout x={505} y={458} dx={-84} dy={44} text="AIR-COOLED 155CC" />}
      {!plain && <Callout x={672} y={440} dx={60} dy={44} text="STUBBY MUFFLER" />}
      {!plain && <Callout x={520} y={270} dx={-60} dy={-44} text="KNEE RECESS TANK" />}
      {!plain && <LogoBlock cx={F.x} cy={F.y + 62} text="GIXXER" w={52} />}
      {!plain && <LogoBlock cx={R.x} cy={R.y + 62} text="SUZUKI" w={56} />}

      {/* frame */}
      {P('frame',
        <path className="hitpath" d="M 376 318 C 430 344 510 384 590 420 L 700 300 M 590 420 L 712 438" strokeWidth={24} />,
        {
          children: (
            <g>
              <path d="M 376 318 C 430 348 510 388 590 420" className="pstroke" />
              <path d="M 590 420 L 700 300" className="pstroke-thin" />
              <path d="M 590 420 L 714 436 L 704 450 L 590 432 Z" className="pstroke-thin" />
            </g>
          ),
        }
      )}

      {/* engine — air cooled, tall fins */}
      {P('engine',
        <path className="hitpath" d="M 442 352 C 482 342 542 350 566 374 C 582 394 584 426 568 450 C 546 464 486 464 462 450 C 444 436 438 416 444 402 C 448 382 440 368 442 352 Z" strokeWidth={22} />,
        {
          children: (
            <g>
              <path d="M 450 356 C 486 344 538 352 562 376 C 578 396 580 424 564 448 C 544 460 488 460 464 448 C 446 434 440 416 446 402 C 450 382 442 368 450 356 Z" className="pfill" fill="rgba(0,229,255,0.05)" />
              <line x1={458} y1={378} x2={566} y2={378} className="pstroke-thin" opacity={0.55} />
              <line x1={460} y1={394} x2={570} y2={394} className="pstroke-thin" opacity={0.55} />
              <line x1={462} y1={410} x2={572} y2={410} className="pstroke-thin" opacity={0.55} />
            </g>
          ),
        }
      )}

      {/* cooling — cylinder fins */}
      {P('cooling',
        <path className="hitpath" d="M 442 358 L 450 330 M 452 332 L 460 358 M 462 334 L 470 358" strokeWidth={20} />,
        {
          children: (
            <g>
              <path d="M 452 330 L 458 362 L 474 358 L 468 330 Z" className="pfill" fill="rgba(0,229,255,0.06)" />
              <line x1={454} y1={338} x2={470} y2={336} className="pstroke-thin" />
              <line x1={452} y1={346} x2={470} y2={344} className="pstroke-thin" />
              <line x1={450} y1={354} x2={470} y2={352} className="pstroke-thin" />
            </g>
          ),
        }
      )}

      {/* exhaust — short stubby */}
      {P('exhaust',
        <path className="hitpath" d="M 472 442 C 458 458 462 478 492 480 C 530 482 576 478 618 458 M 618 458 L 636 442" strokeWidth={22} />,
        {
          children: (
            <g>
              <path d="M 472 442 C 458 458 462 478 492 480 C 530 482 576 478 618 458" className="pstroke" />
              <path d="M 618 458 C 630 450 636 444 640 436" className="pstroke-thin" />
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

      {/* rear suspension — mono-shock */}
      {P('rear-susp',
        <path className="hitpath" d="M 600 326 L 686 434 M 606 328 L 686 434" strokeWidth={22} />,
        {
          children: (
            <g>
              <path d="M 602 324 L 686 434" className="pstroke" />
              <CoilSpring x1={608} y1={334} x2={682} y2={424} coils={8} amp={3.5} />
              <circle cx={602} cy={324} r={4} className="pstroke-thin" />
              <circle cx={686} cy={434} r={4} className="pstroke-thin" />
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

      {/* cockpit — flat bar */}
      {P('cockpit',
        <path className="hitpath" d="M 388 308 C 376 294 360 286 342 282 M 390 310 L 378 284" strokeWidth={22} />,
        {
          children: (
            <g>
              <path d="M 388 308 C 376 296 364 290 350 286" className="pstroke" />
              <path d="M 390 310 L 380 284" className="pstroke-thin" />
              <rect x={344} y={278} width={14} height={12} rx={2} className="pstroke-thin" />
            </g>
          ),
        }
      )}

      {/* wide LED headlamp cluster */}
      {P('bodywork',
        <path className="hitpath" d="M 372 318 C 360 292 366 262 352 254 M 372 318 C 386 296 392 280 392 266" strokeWidth={20} />,
        {
          children: (
            <g>
              <path d="M 338 260 C 338 246 362 242 386 248 C 398 252 402 258 398 266 C 384 276 352 276 342 270 C 336 266 338 262 338 260 Z" className="pfill" fill="rgba(0,229,255,0.06)" />
              <path d="M 344 256 L 390 252" className="pstroke-thin" opacity={0.7} />
              <circle cx={352} cy={258} r={10} className="pstroke-thin" opacity={0.8} />
              <circle cx={384} cy={258} r={10} className="pstroke-thin" opacity={0.8} />
              <path d="M 346 270 C 358 276 372 276 384 272" className="pstroke-thin" opacity={0.6} />
            </g>
          ),
        }
      )}

      {/* fuel system — knee recess tank */}
      {P('fuel-system',
        <path className="hitpath" d="M 398 258 C 430 244 480 242 508 250 C 540 260 566 286 578 320 C 562 342 520 352 486 346 L 442 336 C 414 326 402 302 398 258 Z" strokeWidth={22} />,
        {
          children: (
            <g>
              <path
                d="M 400 260 C 430 246 480 244 508 252 C 540 262 564 288 576 320 C 560 340 520 350 486 344 L 444 334 C 416 324 404 304 400 260 Z"
                className="pfill"
                fill="rgba(0,229,255,0.06)"
              />
              <path d="M 462 254 C 498 262 522 276 542 300" className="pstroke-thin" opacity={0.45} />
              <path d="M 500 250 L 470 344 M 520 256 L 492 344 M 540 268 L 516 344" className="pstroke-thin" opacity={0.4} />
              <circle cx={450} cy={262} r={6} className="pstroke-thin" opacity={0.5} />
            </g>
          ),
        }
      )}

      {/* seat + tail with grab rail */}
      {P('bodywork', null, {
        children: (
          <g>
            <path d="M 578 324 C 614 318 650 316 686 316 L 694 312 C 714 302 724 302 730 308 L 700 320 L 664 328 C 636 332 602 336 578 342 Z" className="pstroke" />
            <path d="M 694 312 L 724 306 L 728 314" className="pstroke-thin" />
            <path d="M 700 316 L 710 300 M 708 318 L 720 302" className="pstroke-thin" opacity={0.5} />
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
        <path className="hitpath" d="M 398 258 C 408 272 422 284 438 290 L 400 266 Z M 718 300 L 730 296 L 728 306" strokeWidth={20} />,
        {
          children: (
            <g>
              <rect x={410} y={276} width={30} height={20} rx={2} className="pfill" fill="rgba(0,229,255,0.05)" />
              <line x1={418} y1={276} x2={418} y2={296} className="pstroke-thin" opacity={0.6} />
              <line x1={432} y1={276} x2={432} y2={296} className="pstroke-thin" opacity={0.6} />
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