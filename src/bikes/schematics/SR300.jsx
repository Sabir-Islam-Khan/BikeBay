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

export default function SR300Schematic({ health, selected, onSelect, onHover, onHoverEnd, plain = false }) {
  const P = (id, hit, props) => (
    <Part id={id} health={health(id)} selected={selected === id} onSelect={onSelect} onHover={onHover} onHoverEnd={onHoverEnd} hit={hit} {...props}>
      {props.children}
    </Part>
  )

  return (
    <svg className="schematic" viewBox="0 0 1000 620" xmlns="http://www.w3.org/2000/svg">
      {!plain && (
        <BlueprintDecor
          title="CFMOTO SR300"
          sub="UNIT 09 · PREMIUM SPORT COUPE"
          unit="REV 2.0"
          wheelbaseText="1390 MM"
          fx={F.x}
          rx={R.x}
        />
      )}
      {!plain && <Callout x={340} y={222} dx={-88} dy={-44} text="POINTED LED NOSE" />}
      {!plain && <Callout x={400} y={370} dx={-88} dy={-44} text="RADIATOR" />}
      {!plain && <Callout x={480} y={458} dx={-80} dy={44} text="BELLY PAN" />}
      {!plain && <Callout x={530} y={468} dx={-80} dy={44} text="LIQUID 292CC" />}
      {!plain && <Callout x={700} y={350} dx={68} dy={-44} text="MONOPOSTO COWL" />}
      {!plain && <Callout x={660} y={404} dx={60} dy={-44} text="UPSWEPT CAN" />}
      {!plain && <LogoBlock cx={F.x} cy={F.y + 62} text="SR" w={36} />}
      {!plain && <LogoBlock cx={R.x} cy={R.y + 62} text="CFMOTO" w={62} />}

      {/* frame — trellis-style visible through fairing */}
      {P('frame',
        <path className="hitpath" d="M 364 312 C 424 340 506 384 590 420 L 696 300 M 590 420 L 710 444 M 590 420 L 622 306 L 696 300" strokeWidth={24} />,
        {
          children: (
            <g>
              <path d="M 364 312 C 426 342 504 386 590 420" className="pstroke" />
              <path d="M 590 420 L 696 300" className="pstroke-thin" />
              <path d="M 590 420 L 712 442 L 704 456 L 590 436 Z" className="pstroke-thin" />
              {/* trellis triangulation */}
              <path d="M 590 420 L 622 306 L 696 300" className="pstroke-thin" opacity={0.4} />
              <path d="M 622 306 L 696 300" className="pstroke-thin" opacity={0.3} strokeDasharray="4 3" />
              <path d="M 604 364 L 658 308" className="pstroke-thin" opacity={0.25} strokeDasharray="3 4" />
            </g>
          ),
        }
      )}

      {/* engine — 292cc single, mostly hidden, lower block visible */}
      {P('engine',
        <path className="hitpath" d="M 444 358 C 488 346 546 352 570 378 C 586 398 588 428 572 454 C 550 466 490 466 466 450 C 448 438 442 420 448 406 C 452 386 444 372 444 358 Z" strokeWidth={22} />,
        {
          children: (
            <g>
              <path d="M 450 362 C 490 350 542 356 566 380 C 582 400 584 426 568 452 C 548 462 492 462 468 448 C 450 436 444 420 450 406 C 454 386 446 372 450 362 Z" className="pfill" fill="rgba(0,229,255,0.05)" />
              {/* cooling fins — angular CFMoto style */}
              <line x1={458} y1={382} x2={570} y2={382} className="pstroke-thin" opacity={0.5} />
              <line x1={460} y1={398} x2={574} y2={398} className="pstroke-thin" opacity={0.5} />
              <line x1={462} y1={414} x2={576} y2={414} className="pstroke-thin" opacity={0.5} />
              {/* cylinder head detail */}
              <path d="M 472 364 L 472 380 M 490 360 L 490 376" className="pstroke-thin" opacity={0.35} />
            </g>
          ),
        }
      )}

      {/* cooling — radiator, wider on SR300 */}
      {P('cooling',
        <path className="hitpath" d="M 344 316 L 380 320 L 378 368 L 342 364 Z" strokeWidth={20} />,
        {
          children: (
            <g>
              <path d="M 346 320 L 376 324 L 374 364 L 344 360 Z" className="pfill" fill="rgba(0,229,255,0.07)" />
              <line x1={352} y1={322} x2={350} y2={362} className="pstroke-thin" opacity={0.6} />
              <line x1={360} y1={324} x2={358} y2={362} className="pstroke-thin" opacity={0.6} />
              <line x1={368} y1={324} x2={366} y2={362} className="pstroke-thin" opacity={0.6} />
            </g>
          ),
        }
      )}

      {/* exhaust — stubby upswept canister, CFMoto style */}
      {P('exhaust',
        <path className="hitpath" d="M 492 444 C 480 456 482 474 502 480 C 548 488 608 486 658 472 C 672 466 678 450 674 436 C 670 422 662 414 652 408" strokeWidth={22} />,
        {
          children: (
            <g>
              <path d="M 492 444 C 480 456 482 474 502 480 C 548 488 608 486 658 472" className="pstroke" />
              <path d="M 658 472 C 672 466 678 450 674 436 C 670 422 662 414 652 408" className="pstroke-thin" />
              {/* canister end cap */}
              <path d="M 664 442 C 666 434 664 426 660 418" className="pstroke-thin" opacity={0.5} />
              <ellipse cx={652} cy={410} rx={7} ry={5} className="pstroke-thin" opacity={0.65} />
              {/* heat shield */}
              <path d="M 540 486 C 560 488 580 486 600 482" className="pstroke-thin" opacity={0.35} />
            </g>
          ),
        }
      )}

      {/* chain */}
      {P('chain',
        <path className="hitpath" d="M 570 450 L 760 456" strokeWidth={20} />,
        {
          children: <ChainRun sp1={{ x: 570, y: 450 }} sp2={{ x: 760, y: 456 }} sag={5} />,
        }
      )}

      {/* rear suspension — monoshock, more angled for aggressive stance */}
      {P('rear-susp',
        <path className="hitpath" d="M 602 324 L 686 436 M 608 326 L 686 436" strokeWidth={22} />,
        {
          children: (
            <g>
              <path d="M 604 322 L 686 436" className="pstroke" />
              <CoilSpring x1={610} y1={332} x2={682} y2={426} coils={8} amp={3.5} />
              <circle cx={604} cy={322} r={4} className="pstroke-thin" />
              <circle cx={686} cy={436} r={4} className="pstroke-thin" />
            </g>
          ),
        }
      )}

      {/* front fork — USD (upside-down), thicker for premium look */}
      {P('front-fork',
        <path className="hitpath" d="M 356 314 L 232 458 M 372 316 L 240 458" strokeWidth={24} />,
        {
          children: (
            <g>
              <path d="M 360 316 L 230 460" className="pstroke" strokeWidth={2.8} />
              <path d="M 376 318 L 240 460" className="pstroke-thin" opacity={0.7} />
              {/* USD upper tube — thicker for premium */}
              <line x1={282} y1={390} x2={338} y2={378} className="pstroke" opacity={0.45} strokeWidth={2.5} />
              {/* fork brace */}
              <line x1={268} y1={408} x2={312} y2={400} className="pstroke-thin" opacity={0.45} />
            </g>
          ),
        }
      )}

      {/* cockpit — low clip-ons, aggressive forward lean */}
      {P('cockpit',
        <path className="hitpath" d="M 366 310 C 352 300 338 290 326 284 M 368 312 L 358 288" strokeWidth={22} />,
        {
          children: (
            <g>
              <path d="M 366 310 C 354 302 342 294 332 288" className="pstroke" />
              <path d="M 368 312 L 360 290" className="pstroke-thin" />
              <rect x={324} y={282} width={14} height={10} rx={2} className="pstroke-thin" />
              {/* clip-on bracket */}
              <line x1={336} y1={284} x2={352} y2={288} className="pstroke-thin" opacity={0.4} />
            </g>
          ),
        }
      )}

      {/* SHARP ANGULAR NOSE — distinctly CFMoto pointed design */}
      {P('bodywork',
        <path className="hitpath" d="M 338 244 C 344 234 356 226 370 222 L 386 218 M 386 218 C 392 228 394 242 394 256 L 394 316 M 394 316 C 422 328 472 344 524 358 L 586 376 M 338 244 C 338 266 348 290 356 306 L 368 320 M 368 320 C 364 336 360 352 356 368 L 350 376 M 350 376 C 356 394 366 408 378 416 L 418 430" strokeWidth={26} />,
        {
          children: (
            <g>
              {/* main angular fairing shell — sharper than R15 */}
              <path
                d="M 332 246 C 336 234 348 224 364 220 L 386 216
                   C 392 230 394 248 394 264 L 394 318
                   C 424 330 474 346 526 360 L 588 378
                   L 586 394 L 566 416 L 534 430
                   C 494 440 444 440 404 432
                   L 362 416
                   C 354 406 348 392 344 378
                   L 340 352 C 336 326 334 296 332 246 Z"
                className="pfill"
                fill="rgba(0,229,255,0.05)"
              />
              {/* upper fairing edge — more angular */}
              <path d="M 332 246 C 336 234 348 224 364 220 L 386 216" className="pstroke" />
              {/* windscreen — taller on SR300 */}
              <path d="M 326 252 C 324 236 330 222 342 212 L 370 204 L 388 216" className="pstroke-thin" opacity={0.7} />
              <path d="M 328 248 L 348 218 M 332 256 L 352 226" className="pstroke-thin" opacity={0.35} />
              {/* fairing panel line — top, angular CFMoto style */}
              <path d="M 394 264 C 422 272 454 284 486 296" className="pstroke-thin" opacity={0.45} />
              {/* fairing panel line — mid */}
              <path d="M 394 298 C 422 308 460 320 500 332" className="pstroke-thin" opacity={0.45} />
              {/* angular vent slits — CFMoto design language */}
              <path d="M 398 316 L 430 308 L 462 306 L 494 312" className="pstroke-thin" opacity={0.55} />
              <path d="M 402 334 L 432 326 L 464 322 L 496 328" className="pstroke-thin" opacity={0.55} />
              <path d="M 406 350 L 436 342 L 468 338 L 498 344" className="pstroke-thin" opacity={0.55} />
              {/* vent openings — angular dark cuts */}
              <path d="M 418 314 L 442 308 L 444 316 L 420 322 Z" className="pfill" fill="rgba(0,229,255,0.08)" />
              <path d="M 422 332 L 446 326 L 448 334 L 424 340 Z" className="pfill" fill="rgba(0,229,255,0.08)" />
              {/* nose intake — distinctive CFMoto angular shape */}
              <path d="M 336 248 L 340 264 L 354 272 L 346 250 Z" className="pfill" fill="rgba(0,229,255,0.06)" />
              <path d="M 334 260 L 352 254 L 354 262 L 334 268 Z" className="pfill" fill="rgba(0,229,255,0.06)" />
              {/* fairing lower edge */}
              <path d="M 350 376 L 378 416 L 418 430" className="pstroke-thin" opacity={0.5} />
            </g>
          ),
        }
      )}

      {/* BELLY PAN — prominent, extends low, CFMoto signature */}
      {P('bodywork', null, {
        children: (
          <g>
            <path
              d="M 362 416 C 384 428 416 436 450 438 C 484 438 518 434 548 426
                 L 566 416 L 586 400 L 588 394 L 572 408 L 548 426
                 C 518 434 484 438 450 438 C 416 436 384 428 362 416 Z"
              className="pfill"
              fill="rgba(0,229,255,0.06)"
            />
            <path d="M 362 416 C 384 428 416 436 450 438 C 484 438 518 434 548 426" className="pstroke-thin" opacity={0.55} />
            <path d="M 362 416 L 356 428 L 350 440 L 344 448" className="pstroke-thin" opacity={0.4} />
            <path d="M 356 428 L 368 430 L 380 428" className="pstroke-thin" opacity={0.3} />
            {/* belly pan air vent */}
            <path d="M 370 434 L 394 438 L 396 444 L 372 442 Z" className="pfill" fill="rgba(0,229,255,0.05)" />
          </g>
        ),
      })}

      {/* fuel tank — angular, rises aggressively into fairing */}
      {P('fuel-system',
        <path className="hitpath" d="M 394 258 C 420 248 458 242 494 246 C 536 252 570 270 592 296 C 602 314 604 332 600 348 L 598 362 M 600 348 C 582 360 558 368 530 370 L 494 368" strokeWidth={24} />,
        {
          children: (
            <g>
              <path d="M 396 260 C 422 250 460 244 496 248 C 538 254 570 272 592 298 C 602 316 604 334 600 350" className="pstroke" />
              <path d="M 600 350 L 598 362" className="pstroke-thin" />
              <path d="M 496 252 C 538 260 570 278 590 302 C 582 318 566 332 546 338 C 522 344 496 344 472 340 C 450 336 432 326 422 312 C 414 298 408 282 404 268 Z" className="pfill" fill="rgba(0,229,255,0.05)" />
              {/* tank knee cutouts — angular CFMoto style */}
              <path d="M 460 252 C 480 256 500 264 518 278" className="pstroke-thin" opacity={0.4} />
              <path d="M 464 248 C 484 254 504 262 522 276" className="pstroke-thin" opacity={0.3} />
              {/* tank ridge — sharp CFMoto line */}
              <path d="M 442 250 L 522 266 M 442 250 L 450 268" className="pstroke-thin" opacity={0.35} />
              <circle cx={438} cy={260} r={5} className="pstroke-thin" opacity={0.5} />
              {/* tank filler cap */}
              <circle cx={480} cy={254} r={6} className="pstroke-thin" opacity={0.35} />
            </g>
          ),
        }
      )}

      {/* MONOPOSTO SEAT — single-seat cowl, CFMoto SR300 signature */}
      {P('bodywork', null, {
        children: (
          <g>
            {/* rider seat — low, sport-bike contour */}
            <path d="M 596 352 C 614 346 636 342 658 340 C 674 338 686 338 694 340" className="pstroke" />
            <path d="M 596 352 C 614 354 636 354 658 352 C 674 350 686 348 694 346" className="pstroke-thin" opacity={0.5} />
            <path d="M 596 352 C 614 346 636 342 658 340 C 674 338 686 338 694 340 L 694 346 C 686 348 674 350 658 352 C 636 354 614 354 596 352 Z" className="pfill" fill="rgba(0,229,255,0.04)" />
            {/* SINGLE-SEAT COWL — sharp monoposto tail, CFMoto signature */}
            <path
              d="M 694 340 C 702 334 714 328 726 324 C 736 320 744 318 752 316
                 L 764 314 C 774 312 780 314 782 320
                 L 784 328 L 782 336 L 770 342 L 752 346
                 L 730 348 C 714 348 702 346 694 346"
              className="pstroke"
            />
            <path
              d="M 694 340 C 702 334 714 328 726 324 C 736 320 744 318 752 316
                 L 764 314 C 774 312 780 314 782 320
                 L 784 328 L 782 336 L 770 342 L 752 346
                 L 730 348 C 714 348 702 346 694 346 Z"
              className="pfill"
              fill="rgba(0,229,255,0.04)"
            />
            {/* cowl vent line — angular */}
            <path d="M 710 332 L 740 324 L 760 318" className="pstroke-thin" opacity={0.45} />
            <path d="M 706 338 L 736 330 L 756 324" className="pstroke-thin" opacity={0.35} />
            {/* sharp LED tail lamp — CFMoto angular style */}
            <path d="M 780 318 L 792 314 L 794 320 L 782 324 Z" className="pfill" fill="rgba(0,229,255,0.08)" />
            <line x1={784} y1={316} x2={792} y2={318} className="pstroke-thin" opacity={0.7} />
            {/* cowl center line */}
            <path d="M 694 340 L 784 326" className="pstroke-thin" opacity={0.25} strokeDasharray="3 4" />
          </g>
        ),
      })}

      {/* wheels — larger for premium sport look */}
      {P('front-wheel', <circle className="hitpath" cx={F.x} cy={F.y} r={70} fill="none" strokeWidth={30} />, {
        children: <WheelRim cx={F.x} cy={F.y} rim={68} rotate={-10} double />,
      })}
      {P('rear-wheel', <circle className="hitpath" cx={R.x} cy={R.y} r={70} fill="none" strokeWidth={30} />, {
        children: <WheelRim cx={R.x} cy={R.y} rim={68} rotate={-6} double />,
      })}

      {/* tyres — wide rear for premium sport */}
      {P('tyres', null, {
        children: (
          <>
            <TyreRing cx={F.x} cy={F.y} />
            <TyreRing cx={R.x} cy={R.y} inner={76} fat />
          </>
        ),
      })}

      {/* brakes — large front disc */}
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
        <path className="hitpath" d="M 396 262 C 408 274 420 284 434 290 L 398 270 Z M 720 300 L 732 296 L 730 306" strokeWidth={20} />,
        {
          children: (
            <g>
              <rect x={408} y={272} width={28} height={18} rx={2} className="pfill" fill="rgba(0,229,255,0.05)" />
              <line x1={416} y1={272} x2={416} y2={290} className="pstroke-thin" opacity={0.6} />
              <line x1={428} y1={272} x2={428} y2={290} className="pstroke-thin" opacity={0.6} />
              <path d="M 720 300 L 732 296 L 730 306 L 720 308 Z" className="pstroke-thin" />
            </g>
          ),
        }
      )}

      <Axle cx={F.x} cy={F.y} />
      <Axle cx={R.x} cy={R.y} />
    </svg>
  )
}
