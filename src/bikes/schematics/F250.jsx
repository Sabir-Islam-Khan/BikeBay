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

export default function F250Schematic({ health, selected, onSelect, onHover, onHoverEnd, plain = false }) {
  const P = (id, hit, props) => (
    <Part id={id} health={health(id)} selected={selected === id} onSelect={onSelect} onHover={onHover} onHoverEnd={onHoverEnd} hit={hit} {...props}>
      {props.children}
    </Part>
  )

  return (
    <svg className="schematic" viewBox="0 0 1000 620" xmlns="http://www.w3.org/2000/svg">
      {!plain && (
        <BlueprintDecor
          title="PULSAR F250"
          sub="UNIT 09 · HALF-FAIRED SPORT"
          unit="REV 1.0"
          wheelbaseText="1351 MM"
          fx={F.x}
          rx={R.x}
        />
      )}
      {!plain && <Callout x={330} y={244} dx={-90} dy={-44} text="PROJECTOR NOSE + SCREEN" />}
      {!plain && <Callout x={370} y={360} dx={-94} dy={-44} text="HALF FAIRING SHELL" />}
      {!plain && <Callout x={510} y={462} dx={-80} dy={44} text="OIL-COOLED 249CC" />}
      {!plain && <Callout x={660} y={430} dx={60} dy={44} text="SPORT UNDERBELLY" />}
      {!plain && <Callout x={680} y={310} dx={-70} dy={-44} text="SPLIT SEAT + TAIL" />}
      {!plain && <LogoBlock cx={F.x} cy={F.y + 62} text="F250" w={44} />}
      {!plain && <LogoBlock cx={R.x} cy={R.y + 62} text="BAJAJ" w={56} />}

      {/* frame — perimeter frame, partially visible through half-fairing */}
      {P('frame',
        <path className="hitpath" d="M 366 318 C 424 348 504 388 588 424 L 698 304 M 588 424 L 708 442 M 588 424 L 610 310 L 698 304" strokeWidth={24} />,
        {
          children: (
            <g>
              <path d="M 366 318 C 424 348 504 388 588 424" className="pstroke" />
              <path d="M 588 424 L 698 304" className="pstroke-thin" />
              <path d="M 588 424 L 710 440 L 702 454 L 588 438 Z" className="pstroke-thin" />
              {/* trellis brace — visible behind half-fairing */}
              <path d="M 588 424 L 612 312 L 698 304" className="pstroke-thin" opacity={0.35} />
              <path d="M 612 312 L 698 304" className="pstroke-thin" opacity={0.25} strokeDasharray="4 3" />
            </g>
          ),
        }
      )}

      {/* engine — lower portion exposed below half-fairing */}
      {P('engine',
        <path className="hitpath" d="M 442 356 C 484 346 544 354 568 378 C 584 398 586 428 570 452 C 548 464 488 464 464 450 C 446 438 440 420 446 406 C 450 386 442 372 442 356 Z" strokeWidth={22} />,
        {
          children: (
            <g>
              <path d="M 450 360 C 488 348 540 356 564 380 C 580 400 582 426 566 450 C 546 460 490 460 466 448 C 448 436 442 420 448 406 C 452 386 444 372 450 360 Z" className="pfill" fill="rgba(0,229,255,0.05)" />
              {/* cylinder head fins */}
              <line x1={458} y1={380} x2={568} y2={380} className="pstroke-thin" opacity={0.55} />
              <line x1={460} y1={396} x2={572} y2={396} className="pstroke-thin" opacity={0.55} />
              <line x1={462} y1={412} x2={574} y2={412} className="pstroke-thin" opacity={0.55} />
              <line x1={464} y1={428} x2={572} y2={428} className="pstroke-thin" opacity={0.45} />
              {/* crankcase detail */}
              <path d="M 470 440 L 556 438" className="pstroke-thin" opacity={0.35} />
              <path d="M 478 448 L 548 446" className="pstroke-thin" opacity={0.3} />
            </g>
          ),
        }
      )}

      {/* cooling — oil cooler, prominent on F250 */}
      {P('cooling',
        <path className="hitpath" d="M 356 322 L 386 326 L 384 364 L 354 360 Z" strokeWidth={20} />,
        {
          children: (
            <g>
              <path d="M 358 326 L 382 330 L 380 360 L 356 356 Z" className="pfill" fill="rgba(0,229,255,0.07)" />
              <line x1={364} y1={328} x2={362} y2={358} className="pstroke-thin" opacity={0.6} />
              <line x1={372} y1={330} x2={370} y2={358} className="pstroke-thin" opacity={0.6} />
              <line x1={378} y1={330} x2={376} y2={358} className="pstroke-thin" opacity={0.5} />
            </g>
          ),
        }
      )}

      {/* exhaust — sport underbelly, short stubby end-can */}
      {P('exhaust',
        <path className="hitpath" d="M 474 444 C 460 460 464 480 494 482 C 532 484 578 480 620 458 M 620 458 L 638 442" strokeWidth={22} />,
        {
          children: (
            <g>
              <path d="M 474 444 C 460 460 464 480 494 482 C 532 484 578 480 620 458" className="pstroke" />
              <path d="M 620 458 C 632 450 638 444 642 436" className="pstroke-thin" />
              {/* end-can tip */}
              <ellipse cx={640} cy={438} rx={5} ry={3.5} className="pstroke-thin" opacity={0.6} />
              <line x1={520} y1={486} x2={520} y2={494} className="pstroke-thin" opacity={0.4} />
              <line x1={544} y1={484} x2={544} y2={492} className="pstroke-thin" opacity={0.4} />
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

      {/* rear suspension — mono-shock */}
      {P('rear-susp',
        <path className="hitpath" d="M 602 326 L 686 434 M 608 328 L 686 434" strokeWidth={22} />,
        {
          children: (
            <g>
              <path d="M 604 324 L 686 434" className="pstroke" />
              <CoilSpring x1={610} y1={334} x2={682} y2={424} coils={8} amp={3.5} />
              <circle cx={604} cy={324} r={4} className="pstroke-thin" />
              <circle cx={686} cy={434} r={4} className="pstroke-thin" />
            </g>
          ),
        }
      )}

      {/* front fork — conventional telescopic */}
      {P('front-fork',
        <path className="hitpath" d="M 366 322 L 232 458 M 380 324 L 238 458" strokeWidth={22} />,
        {
          children: (
            <g>
              <path d="M 370 324 L 230 460" className="pstroke" />
              <path d="M 384 326 L 238 460" className="pstroke-thin" opacity={0.7} />
            </g>
          ),
        }
      )}

      {/* cockpit — sport clip-ons, slightly higher than R15 for semi-sport position */}
      {P('cockpit',
        <path className="hitpath" d="M 380 316 C 366 306 354 298 344 292 M 382 318 L 372 294" strokeWidth={22} />,
        {
          children: (
            <g>
              <path d="M 380 316 C 368 308 358 302 350 297" className="pstroke" />
              <path d="M 382 318 L 374 296" className="pstroke-thin" />
              <rect x={344} y={290} width={12} height={10} rx={2} className="pstroke-thin" />
            </g>
          ),
        }
      )}

      {/* HALF FAIRING — nose cowl + windscreen + side panels covering upper engine only */}
      {P('bodywork',
        <path className="hitpath" d="M 368 320 C 352 290 356 254 338 240 M 368 320 C 382 302 388 282 388 268 M 336 242 C 352 226 370 220 382 218 M 368 320 C 384 338 400 362 408 386 L 408 400 M 408 400 C 418 410 436 418 456 422" strokeWidth={20} />,
        {
          children: (
            <g>
              {/* half-fairing body — angular shell wrapping nose and upper engine */}
              <path
                d="M 338 242 C 348 234 362 228 376 222 L 390 218
                   C 394 232 394 248 394 264 L 394 322
                   C 394 340 400 362 408 386 L 408 402
                   C 420 412 440 420 458 424
                   L 430 426
                   C 414 426 400 420 388 410
                   L 374 382
                   C 366 362 360 340 358 322
                   L 354 300 C 350 276 346 258 338 242 Z"
                className="pfill"
                fill="rgba(0,229,255,0.05)"
              />
              {/* upper fairing edge — nose contour */}
              <path d="M 338 242 C 348 234 362 228 376 222 L 390 218" className="pstroke" />
              {/* windscreen — moderate height, angled */}
              <path d="M 332 248 C 328 234 334 218 350 208 L 376 200 L 390 218" className="pstroke-thin" opacity={0.7} />
              <path d="M 336 242 L 356 214 M 338 250 L 358 222" className="pstroke-thin" opacity={0.35} />
              {/* fairing side panel — extends back toward tank */}
              <path d="M 394 264 C 418 272 450 284 482 296" className="pstroke-thin" opacity={0.45} />
              <path d="M 394 300 C 420 310 456 322 494 332" className="pstroke-thin" opacity={0.45} />
              {/* angular vent lines — Pulsar F250 signature */}
              <path d="M 400 328 L 428 322 L 458 318 L 488 322" className="pstroke-thin" opacity={0.5} />
              <path d="M 404 344 L 430 336 L 460 332 L 490 336" className="pstroke-thin" opacity={0.5} />
              {/* vent cutouts */}
              <path d="M 418 326 L 438 320 L 440 326 L 418 332 Z" className="pfill" fill="rgba(0,229,255,0.08)" />
              <path d="M 420 342 L 440 336 L 442 342 L 420 348 Z" className="pfill" fill="rgba(0,229,255,0.08)" />
              {/* fairing lower edge — stops at mid-engine (HALF fairing) */}
              <path d="M 374 382 L 408 402 L 458 424" className="pstroke-thin" opacity={0.5} />
              {/* projector headlamp housing */}
              <circle cx={358} cy={256} r={12} className="pstroke-thin" opacity={0.8} />
              <circle cx={358} cy={256} r={7} className="pstroke-thin" opacity={0.5} />
              <circle cx={358} cy={256} r={3} fill="rgba(0,229,255,0.25)" />
              {/* DRL strip around headlamp */}
              <path d="M 346 248 A 16 16 0 0 1 358 242" className="pstroke-thin" opacity={0.55} />
              <path d="M 346 264 A 16 16 0 0 0 358 270" className="pstroke-thin" opacity={0.55} />
            </g>
          ),
        }
      )}

      {/* fuel tank — muscular Pulsar shape with knee recesses */}
      {P('fuel-system',
        <path className="hitpath" d="M 392 324 C 428 332 474 344 514 354 C 552 364 578 386 588 410 L 594 424 M 588 410 C 568 420 540 424 510 422 L 474 418" strokeWidth={24} />,
        {
          children: (
            <g>
              <path d="M 392 324 C 428 334 474 346 514 356 C 552 366 578 386 588 410" className="pstroke" />
              <path d="M 588 410 L 594 424" className="pstroke-thin" />
              <path d="M 474 354 C 522 366 558 386 576 410 C 556 420 530 424 502 422 L 474 420 C 446 418 424 406 416 394 C 406 382 400 370 398 354 Z" className="pfill" fill="rgba(0,229,255,0.05)" />
              {/* muscular tank contour */}
              <path d="M 444 348 L 520 368 M 444 348 L 452 368" className="pstroke-thin" opacity={0.4} />
              {/* knee recesses */}
              <path d="M 538 368 L 562 388 M 554 364 L 578 384" className="pstroke-thin" opacity={0.45} />
              <path d="M 534 376 C 548 386 556 390 562 388" className="pstroke-thin" opacity={0.35} />
              {/* fuel cap */}
              <circle cx={448} cy={356} r={6} className="pstroke-thin" opacity={0.5} />
              <circle cx={448} cy={356} r={2.5} className="pstroke-thin" opacity={0.35} />
            </g>
          ),
        }
      )}

      {/* split seat — rider low, pillion stepped up, sharp Pulsar tail */}
      {P('bodywork', null, {
        children: (
          <g>
            {/* rider seat — lower, wider */}
            <path d="M 590 414 C 616 408 644 404 670 402 C 684 400 694 400 700 402" className="pstroke" />
            <path d="M 590 414 C 616 416 644 416 670 414 C 684 412 694 410 700 408" className="pstroke-thin" opacity={0.5} />
            <path d="M 590 414 C 616 408 644 404 670 402 C 684 400 694 400 700 402 L 700 408 C 694 410 684 412 670 414 C 644 416 616 416 590 414 Z" className="pfill" fill="rgba(0,229,255,0.04)" />
            {/* pillion seat — stepped up */}
            <path d="M 700 402 C 710 396 722 392 734 390 C 742 388 748 388 754 390" className="pstroke" />
            <path d="M 700 408 C 710 402 722 398 734 396 C 742 394 748 394 754 396" className="pstroke-thin" opacity={0.5} />
            {/* seat step — distinctive height difference */}
            <path d="M 700 402 L 700 408" className="pstroke-thin" />
            <path d="M 700 402 L 704 396 L 708 398 L 704 404 Z" className="pfill" fill="rgba(0,229,255,0.06)" />
            {/* tail section — sharp, angular, raised */}
            <path d="M 734 390 C 746 384 756 380 766 378 L 774 376 C 784 374 790 376 792 382 L 762 394 L 734 402 C 722 404 710 404 700 408" className="pstroke" />
            <path d="M 774 376 L 790 372 L 794 380" className="pstroke-thin" />
            {/* sharp LED tail lamp */}
            <path d="M 790 374 L 802 370 L 804 376 L 792 380 Z" className="pfill" fill="rgba(0,229,255,0.08)" />
            <line x1={794} y1={372} x2={802} y2={374} className="pstroke-thin" opacity={0.7} />
            {/* under-tail panel */}
            <path d="M 734 402 C 746 398 758 394 770 390" className="pstroke-thin" opacity={0.35} />
          </g>
        ),
      })}

      {/* wheels — alloy petal style */}
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

      {/* front brake — petal disc */}
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

      {/* battery — mounted behind half-fairing */}
      {P('battery',
        <path className="hitpath" d="M 392 326 C 404 338 418 348 434 354 L 394 334 Z M 716 300 L 728 296 L 726 306" strokeWidth={20} />,
        {
          children: (
            <g>
              <rect x={404} y={334} width={28} height={18} rx={2} className="pfill" fill="rgba(0,229,255,0.05)" />
              <line x1={412} y1={334} x2={412} y2={352} className="pstroke-thin" opacity={0.6} />
              <line x1={424} y1={334} x2={424} y2={352} className="pstroke-thin" opacity={0.6} />
              <path d="M 716 300 L 728 296 L 726 306 L 716 308 Z" className="pstroke-thin" />
            </g>
          ),
        }
      )}

      <Axle cx={F.x} cy={F.y} />
      <Axle cx={R.x} cy={R.y} />
    </svg>
  )
}
