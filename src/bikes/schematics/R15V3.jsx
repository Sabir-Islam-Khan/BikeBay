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

export default function R15V3Schematic({ health, selected, onSelect, onHover, onHoverEnd, plain = false }) {
  const P = (id, hit, props) => (
    <Part id={id} health={health(id)} selected={selected === id} onSelect={onSelect} onHover={onHover} onHoverEnd={onHoverEnd} hit={hit} {...props}>
      {props.children}
    </Part>
  )

  return (
    <svg className="schematic" viewBox="0 0 1000 620" xmlns="http://www.w3.org/2000/svg">
      {!plain && (
        <BlueprintDecor
          title="YZF-R15 V3"
          sub="UNIT 03 · FULL FAIRED SPORT"
          unit="REV 2.0"
          wheelbaseText="1325 MM"
          fx={F.x}
          rx={R.x}
        />
      )}
      {!plain && <Callout x={310} y={218} dx={-80} dy={-44} text="TALL WINDSCREEN" />}
      {!plain && <Callout x={420} y={380} dx={-76} dy={-44} text="RADIATOR" />}
      {!plain && <Callout x={510} y={460} dx={-80} dy={44} text="LIQUID-COOLED 155CC VVA" />}
      {!plain && <Callout x={680} y={370} dx={60} dy={-44} text="UPSWEPT CAN" />}
      {!plain && <Callout x={640} y={310} dx={-70} dy={-44} text="SPLIT TAIL" />}
      {!plain && <LogoBlock cx={F.x} cy={F.y + 62} text="R15" w={40} />}
      {!plain && <LogoBlock cx={R.x} cy={R.y + 62} text="YAMAHA" w={58} />}

      {/* frame — deltabox frame visible at rear */}
      {P('frame',
        <path className="hitpath" d="M 370 310 C 430 338 510 382 590 420 L 694 300 M 590 420 L 706 440 M 590 420 L 620 310 L 694 300" strokeWidth={24} />,
        {
          children: (
            <g>
              <path d="M 370 310 C 428 340 508 384 590 420" className="pstroke" />
              <path d="M 590 420 L 694 300" className="pstroke-thin" />
              <path d="M 590 420 L 708 438 L 700 452 L 590 434 Z" className="pstroke-thin" />
              {/* deltabox visible section */}
              <path d="M 590 420 L 620 310 L 694 300" className="pstroke-thin" opacity={0.5} />
              <path d="M 620 310 L 694 300" className="pstroke-thin" opacity={0.35} strokeDasharray="4 3" />
            </g>
          ),
        }
      )}

      {/* engine — mostly hidden behind fairing, only lower portion visible */}
      {P('engine',
        <path className="hitpath" d="M 448 360 C 490 348 544 354 568 378 C 584 398 586 428 570 452 C 548 466 492 466 468 452 C 450 438 444 420 450 406 C 454 386 444 372 448 360 Z" strokeWidth={22} />,
        {
          children: (
            <g>
              <path d="M 454 364 C 492 352 540 358 564 380 C 580 400 582 426 566 450 C 546 462 494 462 470 450 C 452 436 446 420 452 406 C 456 386 446 372 454 364 Z" className="pfill" fill="rgba(0,229,255,0.05)" />
              <line x1={462} y1={386} x2={568} y2={386} className="pstroke-thin" opacity={0.55} />
              <line x1={464} y1={402} x2={572} y2={402} className="pstroke-thin" opacity={0.55} />
              <line x1={466} y1={418} x2={574} y2={418} className="pstroke-thin" opacity={0.55} />
            </g>
          ),
        }
      )}

      {/* cooling — radiator behind fairing */}
      {P('cooling',
        <path className="hitpath" d="M 356 318 L 388 322 L 386 370 L 354 366 Z" strokeWidth={20} />,
        {
          children: (
            <g>
              <path d="M 358 322 L 384 326 L 382 366 L 356 362 Z" className="pfill" fill="rgba(0,229,255,0.07)" />
              <line x1={364} y1={324} x2={362} y2={364} className="pstroke-thin" opacity={0.6} />
              <line x1={372} y1={326} x2={370} y2={364} className="pstroke-thin" opacity={0.6} />
              <line x1={378} y1={326} x2={376} y2={364} className="pstroke-thin" opacity={0.6} />
            </g>
          ),
        }
      )}

      {/* exhaust — upswept canister, exits high near tail */}
      {P('exhaust',
        <path className="hitpath" d="M 486 444 C 474 456 476 472 496 478 C 544 486 606 484 654 470 C 668 464 674 448 670 432 C 666 418 660 412 652 408" strokeWidth={22} />,
        {
          children: (
            <g>
              <path d="M 486 444 C 474 456 476 472 496 478 C 544 486 606 484 654 470" className="pstroke" />
              <path d="M 654 470 C 668 464 674 448 670 432 C 666 418 660 412 652 408" className="pstroke-thin" />
              <path d="M 662 436 C 664 428 662 420 658 414" className="pstroke-thin" opacity={0.5} />
              {/* canister end */}
              <ellipse cx={652} cy={410} rx={6} ry={4} className="pstroke-thin" opacity={0.7} />
            </g>
          ),
        }
      )}

      {/* chain */}
      {P('chain',
        <path className="hitpath" d="M 568 448 L 758 454" strokeWidth={20} />,
        {
          children: <ChainRun sp1={{ x: 568, y: 448 }} sp2={{ x: 758, y: 454 }} sag={5} />,
        }
      )}

      {/* rear suspension — mono-shock, mostly hidden */}
      {P('rear-susp',
        <path className="hitpath" d="M 600 328 L 684 436 M 606 330 L 684 436" strokeWidth={22} />,
        {
          children: (
            <g>
              <path d="M 602 326 L 684 436" className="pstroke" />
              <CoilSpring x1={608} y1={336} x2={680} y2={426} coils={8} amp={3.5} />
              <circle cx={602} cy={326} r={4} className="pstroke-thin" />
              <circle cx={684} cy={436} r={4} className="pstroke-thin" />
            </g>
          ),
        }
      )}

      {/* front fork — USD (upside-down) forks */}
      {P('front-fork',
        <path className="hitpath" d="M 362 316 L 232 458 M 376 318 L 238 458" strokeWidth={22} />,
        {
          children: (
            <g>
              <path d="M 366 318 L 230 460" className="pstroke" />
              <path d="M 380 320 L 238 460" className="pstroke-thin" opacity={0.7} />
              {/* USD fork upper tube (thicker) */}
              <line x1={290} y1={394} x2={348} y2={380} className="pstroke" opacity={0.4} />
              {/* fork brace */}
              <line x1={270} y1={410} x2={310} y2={404} className="pstroke-thin" opacity={0.45} />
            </g>
          ),
        }
      )}

      {/* cockpit — low clip-ons (aggressive riding position) */}
      {P('cockpit',
        <path className="hitpath" d="M 370 308 C 354 298 340 290 328 284 M 372 310 L 360 286" strokeWidth={22} />,
        {
          children: (
            <g>
              <path d="M 370 308 C 356 300 344 294 334 289" className="pstroke" />
              <path d="M 372 310 L 362 288" className="pstroke-thin" />
              <rect x={326} y={280} width={12} height={10} rx={2} className="pstroke-thin" />
              {/* clip-on bracket */}
              <line x1={338} y1={282} x2={354} y2={286} className="pstroke-thin" opacity={0.4} />
            </g>
          ),
        }
      )}

      {/* FULL FAIRING — dominant angular shell covering engine */}
      {P('bodywork',
        <path className="hitpath" d="M 340 248 C 346 238 358 230 372 226 L 384 222 M 384 222 C 390 232 392 246 392 260 L 392 320 M 392 320 C 420 332 470 348 520 360 L 580 380 M 340 248 C 340 270 350 294 358 310 L 370 324 M 370 324 C 366 340 362 356 358 372 L 352 380 M 352 380 C 358 398 368 412 380 420 L 420 434" strokeWidth={24} />,
        {
          children: (
            <g>
              {/* main fairing body — large angular shell */}
              <path
                d="M 334 250 C 338 238 350 228 366 224 L 384 220
                   C 390 234 392 250 392 266 L 392 322
                   C 422 334 472 350 522 362 L 582 382
                   L 580 398 L 560 420 L 530 434
                   C 490 444 440 444 400 436
                   L 360 420
                   C 352 410 346 396 342 382
                   L 338 356 C 334 330 332 300 334 250 Z"
                className="pfill"
                fill="rgba(0,229,255,0.05)"
              />
              {/* upper fairing edge */}
              <path d="M 334 250 C 338 238 350 228 366 224 L 384 220" className="pstroke" />
              {/* windscreen */}
              <path d="M 328 256 C 326 242 332 228 344 218 L 370 210 L 386 220" className="pstroke-thin" opacity={0.7} />
              <path d="M 330 252 L 350 224 M 334 260 L 354 232" className="pstroke-thin" opacity={0.35} />
              {/* fairing panel line — top */}
              <path d="M 392 266 C 420 274 452 286 484 298" className="pstroke-thin" opacity={0.45} />
              {/* fairing panel line — mid */}
              <path d="M 392 300 C 420 310 458 322 498 334" className="pstroke-thin" opacity={0.45} />
              {/* angular vent lines — distinctive R15 V3 feature */}
              <path d="M 400 320 L 430 314 L 460 312 L 490 316" className="pstroke-thin" opacity={0.55} />
              <path d="M 404 338 L 432 330 L 462 326 L 492 330" className="pstroke-thin" opacity={0.55} />
              <path d="M 408 354 L 436 346 L 466 342 L 496 346" className="pstroke-thin" opacity={0.55} />
              {/* vent openings — dark angular cuts */}
              <path d="M 420 318 L 440 312 L 442 318 L 420 324 Z" className="pfill" fill="rgba(0,229,255,0.08)" />
              <path d="M 424 336 L 444 330 L 446 336 L 424 342 Z" className="pfill" fill="rgba(0,229,255,0.08)" />
              {/* lower fairing — belly pan */}
              <path d="M 360 420 C 380 432 410 438 440 438 C 470 438 500 434 530 428" className="pstroke-thin" opacity={0.4} />
              {/* fairing lower edge */}
              <path d="M 352 380 L 380 420 L 420 434" className="pstroke-thin" opacity={0.5} />
              {/* nose intake */}
              <path d="M 340 250 L 344 264 L 356 270 L 348 252 Z" className="pfill" fill="rgba(0,229,255,0.06)" />
            </g>
          ),
        }
      )}

      {/* fuel tank — muscular, rises into fairing */}
      {P('fuel-system',
        <path className="hitpath" d="M 392 260 C 418 250 456 244 492 248 C 534 254 568 272 590 298 C 600 316 602 334 598 350 L 596 364 M 598 350 C 580 362 556 370 528 372 L 492 370" strokeWidth={24} />,
        {
          children: (
            <g>
              <path d="M 394 262 C 420 252 458 246 494 250 C 536 256 568 274 590 300 C 600 318 602 336 598 352" className="pstroke" />
              <path d="M 598 352 L 596 364" className="pstroke-thin" />
              <path d="M 494 254 C 536 262 568 280 588 304 C 580 320 564 334 544 340 C 520 346 494 346 470 342 C 448 338 430 328 420 314 C 412 300 406 284 402 270 Z" className="pfill" fill="rgba(0,229,255,0.05)" />
              {/* tank knee cutouts */}
              <path d="M 458 254 C 478 258 498 266 516 280" className="pstroke-thin" opacity={0.4} />
              <path d="M 462 250 C 482 256 502 264 520 278" className="pstroke-thin" opacity={0.3} />
              {/* tank ridge */}
              <path d="M 440 252 L 520 268 M 440 252 L 448 270" className="pstroke-thin" opacity={0.35} />
              <circle cx={436} cy={262} r={5} className="pstroke-thin" opacity={0.5} />
            </g>
          ),
        }
      )}

      {/* SPLIT SEAT — rider low, pillion high, distinctive stepped profile */}
      {P('bodywork', null, {
        children: (
          <g>
            {/* rider seat — lower, wider */}
            <path d="M 596 354 C 614 348 636 344 658 342 C 672 340 684 340 692 342" className="pstroke" />
            <path d="M 596 354 C 614 356 636 356 658 354 C 672 352 684 350 692 348" className="pstroke-thin" opacity={0.5} />
            {/* rider seat fill */}
            <path d="M 596 354 C 614 348 636 344 658 342 C 672 340 684 340 692 342 L 692 348 C 684 350 672 352 658 354 C 636 356 614 356 596 354 Z" className="pfill" fill="rgba(0,229,255,0.04)" />
            {/* pillion seat — higher, stepped up */}
            <path d="M 692 342 C 700 338 710 334 720 332 C 728 330 734 330 740 332" className="pstroke" />
            <path d="M 692 348 C 700 344 710 340 720 338 C 728 336 734 336 740 338" className="pstroke-thin" opacity={0.5} />
            {/* seat step — the distinctive height difference */}
            <path d="M 692 342 L 692 348" className="pstroke-thin" />
            <path d="M 692 342 L 696 336 L 700 338 L 696 344 Z" className="pfill" fill="rgba(0,229,255,0.06)" />
            {/* tail section — sharp, high, angular */}
            <path d="M 720 332 C 732 326 742 322 752 320 L 762 318 C 772 316 778 318 780 324 L 750 336 L 720 344 C 710 346 700 346 692 348" className="pstroke" />
            <path d="M 762 318 L 778 314 L 782 322" className="pstroke-thin" />
            {/* sharp LED tail lamp */}
            <path d="M 778 316 L 790 312 L 792 318 L 780 322 Z" className="pfill" fill="rgba(0,229,255,0.08)" />
            <line x1={782} y1={314} x2={790} y2={316} className="pstroke-thin" opacity={0.7} />
            {/* under-tail panel */}
            <path d="M 720 344 C 732 340 744 336 756 332" className="pstroke-thin" opacity={0.35} />
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
        <path className="hitpath" d="M 394 264 C 406 276 418 286 432 292 L 396 272 Z M 718 302 L 730 298 L 728 308" strokeWidth={20} />,
        {
          children: (
            <g>
              <rect x={406} y={274} width={28} height={18} rx={2} className="pfill" fill="rgba(0,229,255,0.05)" />
              <line x1={414} y1={274} x2={414} y2={292} className="pstroke-thin" opacity={0.6} />
              <line x1={426} y1={274} x2={426} y2={292} className="pstroke-thin" opacity={0.6} />
              <path d="M 718 302 L 730 298 L 728 308 L 718 310 Z" className="pstroke-thin" />
            </g>
          ),
        }
      )}

      <Axle cx={F.x} cy={F.y} />
      <Axle cx={R.x} cy={R.y} />
    </svg>
  )
}
