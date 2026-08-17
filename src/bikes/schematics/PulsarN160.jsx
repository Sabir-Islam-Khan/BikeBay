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
      {!plain && <Callout x={370} y={238} dx={-100} dy={-44} text="TWIN-POD LED LAMPS" />}
      {!plain && <Callout x={500} y={460} dx={-80} dy={44} text="AIR-OIL COOLED 164.8CC" />}
      {!plain && <Callout x={660} y={418} dx={68} dy={-36} text="STUBBY UPSWEPT MUFFLER" />}
      {!plain && <Callout x={540} y={310} dx={-80} dy={-48} text="MUSCULAR KNEE TANK" />}
      {!plain && <LogoBlock cx={F.x} cy={F.y + 62} text="PULSAR" w={54} />}
      {!plain && <LogoBlock cx={R.x} cy={R.y + 62} text="BAJAJ" w={56} />}

      {/* perimeter frame — visible trellis-style */}
      {P('frame',
        <path className="hitpath" d="M 374 310 C 424 338 506 378 590 414 L 702 296 M 590 414 L 714 434 M 590 414 L 722 432 L 712 448 L 590 428 Z" strokeWidth={24} />,
        {
          children: (
            <g>
              <path d="M 374 310 C 424 340 506 380 590 414" className="pstroke" />
              <path d="M 590 414 L 702 296" className="pstroke-thin" />
              <path d="M 590 414 L 722 432 L 712 448 L 590 428 Z" className="pstroke-thin" />
              <path d="M 440 318 L 500 370 L 580 412" className="pstroke-thin" opacity={0.4} />
              <path d="M 374 310 L 440 318 L 500 370" className="pstroke-thin" opacity={0.35} />
            </g>
          ),
        }
      )}

      {/* engine — muscular angular block */}
      {P('engine',
        <path className="hitpath" d="M 438 348 C 476 334 542 342 572 368 C 592 390 594 424 576 452 C 552 468 482 470 456 456 C 436 442 430 416 436 400 C 440 378 434 360 438 348 Z" strokeWidth={22} />,
        {
          children: (
            <g>
              <path d="M 446 352 C 480 340 538 348 568 372 C 588 392 590 422 572 450 C 550 464 484 466 458 452 C 440 438 434 416 440 400 C 444 380 438 362 446 352 Z" className="pfill" fill="rgba(0,229,255,0.05)" />
              <line x1={456} y1={374} x2={574} y2={374} className="pstroke-thin" opacity={0.55} />
              <line x1={458} y1={392} x2={578} y2={392} className="pstroke-thin" opacity={0.55} />
              <line x1={460} y1={410} x2={580} y2={410} className="pstroke-thin" opacity={0.55} />
              <line x1={462} y1={428} x2={576} y2={428} className="pstroke-thin" opacity={0.45} />
              <path d="M 476 346 L 476 332 M 494 342 L 494 328 M 512 342 L 512 328 M 530 344 L 530 330" className="pstroke-thin" opacity={0.5} />
            </g>
          ),
        }
      )}

      {/* cooling — oil-cooler with prominent fins */}
      {P('cooling',
        <path className="hitpath" d="M 438 366 L 442 330 M 438 332 L 434 368 M 456 334 L 452 368 M 470 334 L 466 368" strokeWidth={20} />,
        {
          children: (
            <g>
              <path d="M 446 326 L 434 328 L 438 370 L 450 368 Z" className="pfill" fill="rgba(0,229,255,0.06)" />
              <line x1={440} y1={342} x2={454} y2={340} className="pstroke-thin" />
              <line x1={439} y1={352} x2={454} y2={350} className="pstroke-thin" />
              <line x1={438} y1={362} x2={454} y2={360} className="pstroke-thin" />
              <line x1={456} y1={340} x2={466} y2={338} className="pstroke-thin" opacity={0.5} />
              <line x1={455} y1={350} x2={466} y2={348} className="pstroke-thin" opacity={0.5} />
            </g>
          ),
        }
      )}

      {/* exhaust — short stubby upswept, exits high on right */}
      {P('exhaust',
        <path className="hitpath" d="M 476 448 C 462 464 468 484 498 486 C 530 488 558 484 584 472 L 628 430 L 642 410" strokeWidth={22} />,
        {
          children: (
            <g>
              <path d="M 476 448 C 462 464 468 484 498 486 C 530 488 558 484 584 472" className="pstroke" />
              <path d="M 584 472 L 628 430 L 642 410" className="pstroke" />
              <path d="M 642 410 L 652 404 C 656 402 658 404 656 408" className="pstroke-thin" />
              <circle cx={650} cy={406} r={6} className="pstroke-thin" opacity={0.6} />
              <line x1={540} y1={488} x2={540} y2={496} className="pstroke-thin" opacity={0.45} />
              <line x1={564} y1={482} x2={564} y2={490} className="pstroke-thin" opacity={0.45} />
            </g>
          ),
        }
      )}

      {/* chain */}
      {P('chain',
        <path className="hitpath" d="M 574 452 L 758 454" strokeWidth={20} />,
        {
          children: <ChainRun sp1={{ x: 574, y: 452 }} sp2={{ x: 758, y: 454 }} sag={5} />,
        }
      )}

      {/* rear suspension — mono-shock */}
      {P('rear-susp',
        <path className="hitpath" d="M 602 324 L 690 430 M 608 326 L 690 430" strokeWidth={22} />,
        {
          children: (
            <g>
              <path d="M 604 322 L 690 430" className="pstroke" />
              <CoilSpring x1={610} y1={332} x2={686} y2={420} coils={8} amp={3.5} />
              <circle cx={604} cy={322} r={4} className="pstroke-thin" />
              <circle cx={690} cy={430} r={4} className="pstroke-thin" />
            </g>
          ),
        }
      )}

      {/* front fork — USD (upside-down), thicker at top */}
      {P('front-fork',
        <path className="hitpath" d="M 368 310 L 232 458 M 382 312 L 240 458" strokeWidth={26} />,
        {
          children: (
            <g>
              <path d="M 372 312 L 230 460" className="pstroke" strokeWidth={4} />
              <path d="M 386 314 L 240 460" className="pstroke-thin" strokeWidth={3} opacity={0.7} />
              <path d="M 366 308 L 388 308" className="pstroke" strokeWidth={3} />
              <rect x={364} y={304} width={28} height={10} rx={2} className="pfill" fill="rgba(0,229,255,0.08)" />
              <circle cx={376} cy={308} r={2.5} className="pstroke-thin" opacity={0.6} />
              <circle cx={384} cy={308} r={2.5} className="pstroke-thin" opacity={0.6} />
            </g>
          ),
        }
      )}

      {/* cockpit — clip-on style bars */}
      {P('cockpit',
        <path className="hitpath" d="M 386 298 C 374 284 360 276 342 272 M 390 300 L 378 274" strokeWidth={22} />,
        {
          children: (
            <g>
              <path d="M 386 298 C 374 286 362 280 348 276" className="pstroke" />
              <path d="M 390 300 L 380 274" className="pstroke-thin" />
              <rect x={340} y={268} width={16} height={10} rx={2} className="pstroke-thin" />
              <circle cx={348} cy={270} r={2} className="pstroke-thin" opacity={0.5} />
            </g>
          ),
        }
      )}

      {/* twin-pod LED headlamps — SIGNATURE feature, two round pods side by side */}
      {P('bodywork',
        <path className="hitpath" d="M 372 312 C 362 286 368 252 354 238 M 372 312 C 386 288 396 264 392 248 M 348 238 L 364 238 L 364 258 L 348 258 Z M 380 244 L 400 244 L 400 262 L 380 262 Z" strokeWidth={20} />,
        {
          children: (
            <g>
              {/* left pod */}
              <circle cx={350} cy={244} r={17} className="pstroke" />
              <circle cx={350} cy={244} r={12} className="pstroke-thin" opacity={0.8} />
              <circle cx={350} cy={244} r={6} className="pstroke-thin" opacity={0.5} />
              <path d="M 334 234 A 20 20 0 0 1 350 228" className="pstroke-thin" opacity={0.5} />
              <path d="M 338 240 L 362 238 M 338 248 L 362 250" className="pstroke-thin" opacity={0.35} />
              {/* right pod */}
              <circle cx={392} cy={248} r={14} className="pstroke" />
              <circle cx={392} cy={248} r={9} className="pstroke-thin" opacity={0.8} />
              <circle cx={392} cy={248} r={5} className="pstroke-thin" opacity={0.5} />
              <path d="M 380 240 L 404 240 M 380 252 L 404 254" className="pstroke-thin" opacity={0.35} />
              {/* housing cowl */}
              <path d="M 330 256 C 332 240 342 228 360 226 C 378 224 396 232 404 248 C 400 262 388 272 372 274 C 356 274 338 268 330 256 Z" className="pfill" fill="rgba(0,229,255,0.04)" />
              <path d="M 356 228 L 380 228" className="pstroke-thin" opacity={0.3} />
            </g>
          ),
        }
      )}

      {/* fuel system — WIDE muscular tank with deep knee recesses */}
      {P('fuel-system',
        <path className="hitpath" d="M 396 244 C 426 226 480 222 516 232 C 562 246 596 280 606 322 C 588 350 530 366 492 358 L 440 344 C 412 332 398 306 396 244 Z" strokeWidth={24} />,
        {
          children: (
            <g>
              <path
                d="M 398 246 C 426 228 480 224 516 234 C 562 248 594 282 604 322 C 586 348 530 364 492 356 L 442 342 C 414 330 400 308 398 246 Z"
                className="pfill"
                fill="rgba(0,229,255,0.06)"
              />
              {/* muscular contour lines */}
              <path d="M 450 234 C 486 242 520 258 548 286" className="pstroke-thin" opacity={0.5} />
              <path d="M 440 230 C 474 238 508 254 538 282" className="pstroke-thin" opacity={0.3} />
              {/* knee recesses */}
              <path d="M 540 318 L 564 340 M 558 314 L 582 336" className="pstroke-thin" opacity={0.55} />
              <path d="M 536 326 C 550 336 558 340 564 340" className="pstroke-thin" opacity={0.4} />
              {/* tank pad / grip area */}
              <path d="M 490 298 L 510 308 M 488 308 L 508 318" className="pstroke-thin" opacity={0.3} />
              {/* fuel cap */}
              <circle cx={454} cy={248} r={7} className="pstroke-thin" opacity={0.5} />
              <circle cx={454} cy={248} r={3} className="pstroke-thin" opacity={0.35} />
              {/* tank extensions */}
              <path d="M 440 344 L 432 360 L 446 366 L 452 350" className="pstroke-thin" opacity={0.45} />
              <path d="M 492 358 L 502 370 L 488 374 L 482 362" className="pstroke-thin" opacity={0.45} />
            </g>
          ),
        }
      )}

      {/* underbelly engine cowl */}
      {P('bodywork', null, {
        children: (
          <g>
            <path d="M 448 448 C 456 464 478 472 506 472 C 534 472 556 466 562 452 L 556 448 L 448 448 Z" className="pfill" fill="rgba(0,229,255,0.04)" />
            <path d="M 448 448 C 456 464 478 472 506 472 C 534 472 556 466 562 452" className="pstroke-thin" opacity={0.5} />
            <path d="M 470 460 L 542 458" className="pstroke-thin" opacity={0.3} />
          </g>
        ),
      })}

      {/* seat + tail — sharp split-seat with upswept tail */}
      {P('bodywork', null, {
        children: (
          <g>
            {/* rider seat — lower */}
            <path d="M 588 324 C 624 318 660 314 696 312" className="pstroke" />
            <path d="M 588 324 L 588 338 C 624 332 660 330 696 328" className="pstroke-thin" opacity={0.5} />
            {/* pillion seat — stepped up */}
            <path d="M 696 312 C 710 306 724 302 738 300" className="pstroke" />
            <path d="M 696 328 C 710 322 724 318 738 316" className="pstroke-thin" opacity={0.5} />
            {/* tail section — sharp upswept */}
            <path d="M 738 300 L 758 288 L 762 296 L 740 308 L 738 316" className="pstroke" />
            <path d="M 758 288 C 764 284 768 286 766 292" className="pstroke-thin" opacity={0.6} />
            {/* tail lamp */}
            <rect x={754} y={286} width={12} height={8} rx={2} className="pfill" fill="rgba(0,229,255,0.08)" />
            <path d="M 756 288 L 764 288 M 756 292 L 764 292" className="pstroke-thin" opacity={0.5} />
          </g>
        ),
      })}

      {/* wheels — petal disc style */}
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

      {/* front brake — petal disc */}
      {P('front-brake', <circle className="hitpath" cx={F.x} cy={F.y} r={26} fill="none" strokeWidth={22} />, {
        children: (
          <g>
            <BrakeDisc cx={F.x} cy={F.y} r={24} holes={5} rotate={12} />
            <path d="M 210 466 L 226 468 L 224 482 L 208 478 Z" className="pstroke-thin" />
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
        <path className="hitpath" d="M 396 244 C 406 262 420 278 438 286 L 398 258 Z M 720 296 L 732 292 L 730 302" strokeWidth={20} />,
        {
          children: (
            <g>
              <rect x={410} y={270} width={32} height={22} rx={2} className="pfill" fill="rgba(0,229,255,0.05)" />
              <line x1={418} y1={270} x2={418} y2={292} className="pstroke-thin" opacity={0.6} />
              <line x1={434} y1={270} x2={434} y2={292} className="pstroke-thin" opacity={0.6} />
              <path d="M 720 296 L 732 292 L 730 302 L 720 304 Z" className="pstroke-thin" />
            </g>
          ),
        }
      )}

      <Sprocket cx={574} cy={452} r={14} />
      <Axle cx={F.x} cy={F.y} />
      <Axle cx={R.x} cy={R.y} />
    </svg>
  )
}
