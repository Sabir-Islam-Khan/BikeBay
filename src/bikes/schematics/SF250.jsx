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

export default function SF250Schematic({ health, selected, onSelect, onHover, onHoverEnd, plain = false }) {
  const P = (id, hit, props) => (
    <Part id={id} health={health(id)} selected={selected === id} onSelect={onSelect} onHover={onHover} onHoverEnd={onHoverEnd} hit={hit} {...props}>
      {props.children}
    </Part>
  )

  return (
    <svg className="schematic" viewBox="0 0 1000 620" xmlns="http://www.w3.org/2000/svg">
      {!plain && (
        <BlueprintDecor
          title="GIXXER SF250"
          sub="UNIT 06 · SPORT TOURER"
          unit="REV 2.0"
          wheelbaseText="1340 MM"
          fx={F.x}
          rx={R.x}
        />
      )}
      {!plain && <Callout x={348} y={226} dx={-88} dy={-44} text="TOURING WINDSCREEN" />}
      {!plain && <Callout x={505} y={458} dx={-84} dy={44} text="OIL-COOLED 249CC" />}
      {!plain && <Callout x={680} y={420} dx={60} dy={44} text="SPORT CANISTER" />}
      {!plain && <Callout x={660} y={330} dx={-70} dy={-44} text="RAISED TAIL" />}
      {!plain && <Callout x={418} y={350} dx={-80} dy={-36} text="OIL COOLER" />}
      {!plain && <LogoBlock cx={F.x} cy={F.y + 62} text="SF" w={36} />}
      {!plain && <LogoBlock cx={R.x} cy={F.y + 62} text="SUZUKI" w={56} />}

      {/* frame — trellis-style, slightly more visible than R15 */}
      {P('frame',
        <path className="hitpath" d="M 374 316 C 432 342 510 382 592 418 L 698 306 M 592 418 L 706 438" strokeWidth={24} />,
        {
          children: (
            <g>
              <path d="M 374 316 C 430 346 508 386 592 418" className="pstroke" />
              <path d="M 592 418 L 698 306" className="pstroke-thin" />
              <path d="M 592 418 L 708 436 L 700 450 L 592 432 Z" className="pstroke-thin" />
            </g>
          ),
        }
      )}

      {/* engine — oil-cooled single, partially visible behind fairing */}
      {P('engine',
        <path className="hitpath" d="M 444 356 C 484 346 544 352 568 376 C 584 396 586 426 570 450 C 548 464 488 464 464 450 C 446 436 440 418 446 404 C 450 384 442 370 444 356 Z" strokeWidth={22} />,
        {
          children: (
            <g>
              <path d="M 450 360 C 488 348 540 354 564 378 C 580 398 582 424 566 448 C 546 460 490 460 466 448 C 448 434 442 418 448 404 C 452 384 444 370 450 360 Z" className="pfill" fill="rgba(0,229,255,0.05)" />
              <line x1={458} y1={382} x2={568} y2={382} className="pstroke-thin" opacity={0.55} />
              <line x1={460} y1={398} x2={572} y2={398} className="pstroke-thin" opacity={0.55} />
              <line x1={462} y1={414} x2={574} y2={414} className="pstroke-thin" opacity={0.55} />
              {/* cylinder fins — oil-cooled detail */}
              <line x1={458} y1={370} x2={566} y2={370} className="pstroke-thin" opacity={0.35} />
            </g>
          ),
        }
      )}

      {/* cooling — oil cooler, larger than R15 */}
      {P('cooling',
        <path className="hitpath" d="M 352 316 L 386 320 L 384 368 L 350 364 Z" strokeWidth={20} />,
        {
          children: (
            <g>
              <path d="M 354 320 L 382 324 L 380 364 L 352 360 Z" className="pfill" fill="rgba(0,229,255,0.07)" />
              <line x1={360} y1={322} x2={358} y2={362} className="pstroke-thin" opacity={0.6} />
              <line x1={368} y1={324} x2={366} y2={362} className="pstroke-thin" opacity={0.6} />
              <line x1={376} y1={324} x2={374} y2={362} className="pstroke-thin" opacity={0.6} />
            </g>
          ),
        }
      )}

      {/* exhaust — smooth flowing canister, not aggressively upswept */}
      {P('exhaust',
        <path className="hitpath" d="M 476 444 C 462 460 466 480 496 482 C 534 484 580 480 622 460 C 636 452 642 440 640 428" strokeWidth={22} />,
        {
          children: (
            <g>
              <path d="M 476 444 C 462 460 466 480 496 482 C 534 484 580 480 622 460" className="pstroke" />
              <path d="M 622 460 C 634 454 640 442 640 428" className="pstroke-thin" />
              <path d="M 636 432 C 638 426 636 420 632 416" className="pstroke-thin" opacity={0.5} />
              {/* canister end cap */}
              <ellipse cx={634} cy={418} rx={5} ry={3.5} className="pstroke-thin" opacity={0.7} />
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

      {/* rear suspension — monoshock, slightly more upright than R15 */}
      {P('rear-susp',
        <path className="hitpath" d="M 604 324 L 686 430 M 610 326 L 686 430" strokeWidth={22} />,
        {
          children: (
            <g>
              <path d="M 606 322 L 686 430" className="pstroke" />
              <CoilSpring x1={612} y1={332} x2={682} y2={420} coils={8} amp={3.5} />
              <circle cx={606} cy={322} r={4} className="pstroke-thin" />
              <circle cx={686} cy={430} r={4} className="pstroke-thin" />
            </g>
          ),
        }
      )}

      {/* front fork — standard telescopic, slightly more upright than R15 */}
      {P('front-fork',
        <path className="hitpath" d="M 370 320 L 232 458 M 382 322 L 238 458" strokeWidth={22} />,
        {
          children: (
            <g>
              <path d="M 374 322 L 230 460" className="pstroke" />
              <path d="M 386 324 L 238 460" className="pstroke-thin" opacity={0.7} />
            </g>
          ),
        }
      )}

      {/* cockpit — clip-ons, slightly higher than R15 for touring comfort */}
      {P('cockpit',
        <path className="hitpath" d="M 382 312 C 370 302 360 294 350 288 M 384 314 L 374 290" strokeWidth={22} />,
        {
          children: (
            <g>
              <path d="M 382 312 C 372 304 362 298 354 293" className="pstroke" />
              <path d="M 384 314 L 376 292" className="pstroke-thin" />
              <rect x={346} y={284} width={12} height={10} rx={2} className="pstroke-thin" />
            </g>
          ),
        }
      )}

      {/* SMOOTH FULL FAIRING — flowing lines, not angular like R15 */}
      {P('bodywork',
        <path className="hitpath" d="M 342 244 C 350 232 364 224 378 220 L 390 216 M 390 216 C 394 232 396 250 396 268 L 396 322 M 396 322 C 426 336 476 354 526 366 L 584 382 M 342 244 C 342 268 352 294 362 312 L 374 326 M 374 326 C 370 342 366 358 362 374 L 356 382 M 356 382 C 364 400 374 414 386 422 L 426 436" strokeWidth={24} />,
        {
          children: (
            <g>
              {/* main fairing body — smooth, flowing shell */}
              <path
                d="M 336 248 C 340 234 354 224 370 220 L 390 216
                   C 394 234 396 254 396 272 L 396 324
                   C 426 338 476 356 528 368 L 586 384
                   L 584 400 L 564 422 L 534 436
                   C 494 446 444 446 404 438
                   L 364 422
                   C 356 412 350 398 346 384
                   L 342 358 C 338 332 336 302 336 248 Z"
                className="pfill"
                fill="rgba(0,229,255,0.05)"
              />
              {/* upper fairing edge — smooth curve */}
              <path d="M 336 248 C 340 234 354 224 370 220 L 390 216" className="pstroke" />
              {/* windscreen — tall touring screen */}
              <path d="M 332 252 C 328 236 334 220 348 210 L 376 200 L 390 214" className="pstroke-thin" opacity={0.7} />
              <path d="M 334 248 L 354 218 M 338 256 L 358 226" className="pstroke-thin" opacity={0.35} />
              {/* fairing panel lines — gentle curves, not angular vents */}
              <path d="M 396 272 C 424 280 456 292 488 304" className="pstroke-thin" opacity={0.45} />
              <path d="M 396 302 C 424 312 462 326 502 338" className="pstroke-thin" opacity={0.45} />
              {/* flowing vent lines — smooth, not angular like R15 */}
              <path d="M 404 322 C 432 318 464 316 496 320" className="pstroke-thin" opacity={0.5} />
              <path d="M 408 338 C 436 334 468 332 500 336" className="pstroke-thin" opacity={0.5} />
              <path d="M 412 354 C 440 350 472 348 504 352" className="pstroke-thin" opacity={0.5} />
              {/* subtle vent openings — rounded, not angular */}
              <ellipse cx={430} cy={320} rx={12} ry={4} className="pfill" fill="rgba(0,229,255,0.06)" opacity={0.7} />
              <ellipse cx={434} cy={336} rx={12} ry={4} className="pfill" fill="rgba(0,229,255,0.06)" opacity={0.7} />
              {/* lower fairing — smooth belly pan */}
              <path d="M 364 422 C 384 434 414 440 444 440 C 474 440 504 436 534 430" className="pstroke-thin" opacity={0.4} />
              {/* fairing lower edge */}
              <path d="M 356 382 L 386 422 L 426 436" className="pstroke-thin" opacity={0.5} />
              {/* nose intake — smooth, integrated */}
              <path d="M 342 248 L 346 264 C 350 268 354 268 356 264 L 352 248 Z" className="pfill" fill="rgba(0,229,255,0.06)" />
            </g>
          ),
        }
      )}

      {/* fuel tank — flowing into fairing, muscular but not as aggressive as R15 */}
      {P('fuel-system',
        <path className="hitpath" d="M 396 264 C 424 254 462 248 498 252 C 538 258 572 278 594 304 C 604 322 606 340 602 356 L 600 370 M 602 356 C 584 368 560 376 532 378 L 498 376" strokeWidth={24} />,
        {
          children: (
            <g>
              <path d="M 398 266 C 426 256 464 250 500 254 C 540 260 572 280 594 306 C 604 324 606 342 602 358" className="pstroke" />
              <path d="M 602 358 L 600 370" className="pstroke-thin" />
              <path d="M 500 258 C 540 266 572 284 592 308 C 584 324 568 338 548 344 C 524 350 498 350 474 346 C 452 342 434 332 424 318 C 416 304 410 288 406 274 Z" className="pfill" fill="rgba(0,229,255,0.05)" />
              {/* tank knee cutouts — subtle */}
              <path d="M 462 258 C 482 262 502 270 520 284" className="pstroke-thin" opacity={0.4} />
              <path d="M 466 254 C 486 260 506 268 524 282" className="pstroke-thin" opacity={0.3} />
              {/* tank ridge — flowing */}
              <path d="M 444 256 L 524 272 M 444 256 L 452 274" className="pstroke-thin" opacity={0.35} />
              <circle cx={440} cy={266} r={5} className="pstroke-thin" opacity={0.5} />
            </g>
          ),
        }
      )}

      {/* TAIL SECTION — raised but less extreme than R15, more flowing */}
      {P('bodywork', null, {
        children: (
          <g>
            {/* rider seat — wider, more touring-oriented */}
            <path d="M 600 358 C 618 352 640 348 662 346 C 676 344 688 344 696 346" className="pstroke" />
            <path d="M 600 358 C 618 360 640 360 662 358 C 676 356 688 354 696 352" className="pstroke-thin" opacity={0.5} />
            <path d="M 600 358 C 618 352 640 348 662 346 C 676 344 688 344 696 346 L 696 352 C 688 354 676 356 662 358 C 640 360 618 360 600 358 Z" className="pfill" fill="rgba(0,229,255,0.04)" />
            {/* pillion seat — slightly higher, moderate step */}
            <path d="M 696 346 C 706 342 718 338 728 336 C 736 334 742 334 748 336" className="pstroke" />
            <path d="M 696 352 C 706 348 718 344 728 342 C 736 340 742 340 748 342" className="pstroke-thin" opacity={0.5} />
            {/* seat step — moderate, not as extreme as R15 */}
            <path d="M 696 346 L 696 352" className="pstroke-thin" />
            <path d="M 696 346 L 700 340 L 704 342 L 700 348 Z" className="pfill" fill="rgba(0,229,255,0.06)" />
            {/* tail section — raised but flowing, not sharp/angular */}
            <path d="M 728 336 C 740 330 750 326 760 324 L 768 322 C 776 320 782 322 784 328 L 754 340 L 728 348 C 718 350 708 350 696 352" className="pstroke" />
            <path d="M 768 322 L 782 318 L 786 326" className="pstroke-thin" />
            {/* LED tail lamp — smooth, integrated */}
            <path d="M 782 320 L 794 316 L 796 322 L 784 326 Z" className="pfill" fill="rgba(0,229,255,0.08)" />
            <line x1={786} y1={318} x2={794} y2={320} className="pstroke-thin" opacity={0.7} />
            {/* under-tail panel */}
            <path d="M 728 348 C 740 344 752 340 764 336" className="pstroke-thin" opacity={0.35} />
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

      {/* front brake */}
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
        <path className="hitpath" d="M 398 268 C 410 280 424 290 440 296 L 400 276 Z M 718 304 L 730 300 L 728 310" strokeWidth={20} />,
        {
          children: (
            <g>
              <rect x={410} y={278} width={28} height={18} rx={2} className="pfill" fill="rgba(0,229,255,0.05)" />
              <line x1={418} y1={278} x2={418} y2={296} className="pstroke-thin" opacity={0.6} />
              <line x1={430} y1={278} x2={430} y2={296} className="pstroke-thin" opacity={0.6} />
              <path d="M 718 304 L 730 300 L 728 310 L 718 312 Z" className="pstroke-thin" />
            </g>
          ),
        }
      )}

      <Axle cx={F.x} cy={F.y} />
      <Axle cx={R.x} cy={R.y} />
    </svg>
  )
}
