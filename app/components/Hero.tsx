'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useMemo } from 'react';

const HERO_IMG = '/brand/hero-card-eye.png';
const CLOUD_IMG = '/brand/Nube1.png';
const BTN_PURPLE = '#9434ec';
const LIGHT_PURPLE = '#c9a6ff';

export default function Hero() {
  const talents = useMemo(
    () => [
      { href: '/lecturas', label: 'Lecturas' },
      { href: '/astrologia', label: 'Astrología' },
      { href: '/sanacion', label: 'Sanación' },
      { href: '/adivinacion', label: 'Adivinación' },
      { href: '/hipnosis', label: 'Hipnosis' },
      { href: '/numerologia', label: 'Numerología' },
    ],
    []
  );

  const bullets = [
    'Conecta con videntes, sanadores y guías',
    'Descubre tu camino de vida y amor',
    'Explora talentos como Tarot y Astrología',
    'Ilumina las áreas que se sienten estancadas',
    'Encuentra claridad y respuestas clave',
    'Obtén seguridad para decidir con confianza',
  ];

  return (
    <section className="relative overflow-hidden bg-[#FBF3FB] pt-6 sm:pt-8 pb-12 sm:pb-14">
      {/* Línea divisoria morada */}
      <div className="absolute left-0 right-0 top-0 h-[2px] bg-[#9434ec] z-[1]" />

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        {/* TALENTS */}
        <nav
          aria-label="Talentos"
          className="flex flex-wrap gap-3 sm:gap-3.5 mb-3 sm:mb-4 talents-row"
        >
          {talents.map((t) => (
            <Link
              key={t.href}
              href={t.href}
              className="group rounded-full inline-flex items-center border border-[--chip-border] bg-[--chip-bg] hover:bg-[--chip-bg-hover] hover:shadow-[0_0_0_3px_rgba(148,52,236,0.15)] transition-colors"
              style={{
                ['--chip-border' as any]: BTN_PURPLE,
                ['--chip-bg' as any]: 'transparent',
                ['--chip-bg-hover' as any]: 'rgba(148,52,236,0.06)',
                color: BTN_PURPLE,
                height: 40,
                fontSize: 15,
                paddingLeft: 16,
                paddingRight: 16,
              } as React.CSSProperties}
            >
              {t.label}
            </Link>
          ))}
        </nav>

        {/* GRID HERO */}
        <div className="relative mt-0 grid grid-cols-12 gap-y-4 lg:gap-x-10 hero-grid">
          {/* LEFT */}
          <div className="hero-left col-span-12 lg:col-span-6 flex flex-col justify-center">
            {/* DESKTOP TITLE */}
            <h1 className="hero-title-1 hidden sm:block text-[65px] font-normal leading-[1.15]">
              <span className="text-[#22172f]">El universo se comunica en </span>
              <span className="text-[#c9a6ff]">símbolos, energía y estrellas</span>
            </h1>

            {/* MOBILE: Título + Carta lado a lado */}
            <div className="hero-mobile-row sm:hidden flex w-full gap-4 mt-4 items-center">
              <h1 className="mobile-text w-3/5 text-[#22172f] text-[30px] leading-[1.15] font-normal">
                El universo se comunica en <br />
                <span className="text-[#c9a6ff]">símbolos, energía y estrellas</span>
              </h1>
              <div className="hero-card-mobile w-2/5">
                <Image
                  src={HERO_IMG}
                  alt="Carta / símbolo místico"
                  width={560}
                  height={790}
                  priority
                  className="h-auto w-full scale-[0.94]" // incrementado +20%
                />
              </div>
            </div>

            {/* BULLETS */}
            <div className="mt-4 bullets-grid p-4 shadow-bullets rounded-lg bg-transparent">
              {bullets.map((item, idx) => (
                <div key={idx} className="flex items-start gap-2 mt-2">
                  <span className="flex-shrink-0 mt-1 h-5 w-5 flex items-center justify-center rounded-full bg-[#9434ec] text-white text-sm font-bold">
                    ✓
                  </span>
                  <span className="bullet-text text-[#22172f]/90">{item}</span>
                </div>
              ))}
            </div>

            {/* CTA DESKTOP */}
            <div className="hidden lg:flex lg:gap-6 mt-5">
              <a
                href="#"
                className="inline-flex items-center justify-center rounded-2xl px-6 h-14 text-white text-base font-semibold"
                style={{
                  backgroundColor: BTN_PURPLE,
                  boxShadow: '0 12px 40px -10px rgba(148,52,236,0.55)',
                }}
              >
                Agendar una consulta
              </a>
              <a
                href="#"
                className="inline-flex items-center justify-center rounded-2xl px-6 h-14 text-[#1f1630] font-semibold bg-transparent ring-1 ring-[#9434ec] hover:bg-[#9434ec]/10 transition"
              >
                Únete como especialista
              </a>
            </div>
          </div>

          {/* RIGHT */}
          <div className="relative col-span-12 lg:col-span-6 flex flex-col items-center justify-center min-h-[1px] hidden sm:flex">
            <img
              src={CLOUD_IMG}
              alt=""
              aria-hidden="true"
              className="cloud-img absolute z-0 select-none pointer-events-none"
            />
            <div className="hero-card relative z-10 select-none">
              <Image
                src={HERO_IMG}
                alt="Carta / símbolo místico"
                width={560}
                height={790}
                priority
                className="h-auto w-[330px] lg:w-[390px]"
              />
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .cloud-img {
          top: 50%;
          left: 50%;
          width: 680px;
          opacity: 0.42;
          transform: translate(-50%, -50%);
          animation: cloud-sway 26s ease-in-out infinite;
          -webkit-mask-image: radial-gradient(140% 120% at 56% 46%, #000 62%, transparent 100%);
          mask-image: radial-gradient(140% 120% at 56% 46%, #000 62%, transparent 100%);
        }
        @keyframes cloud-sway {
          0% {
            transform: translateX(-52%);
          }
          50% {
            transform: translateX(-44%);
          }
          100% {
            transform: translateX(-52%);
          }
        }

        /* MOBILE */
        @media (max-width: 639px) {
          .talents-row {
            flex-wrap: wrap;
            justify-content: flex-start;
            gap: 4px;
          }
          .talents-row a {
            font-size: 10px;
            height: 24px;
            padding-left: 8px;
            padding-right: 8px;
            max-width: calc(50% - 4px);
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
          }
          .bullets-grid {
            grid-template-columns: 1fr;
            gap-y: 12px;
            margin-top: 16px;
            border: 1px solid rgba(148,52,236,0.3); /* borde más marcado pero elegante */
          }
          .bullet-text {
            font-size: 14px;
            line-height: 1.4;
          }
          .hero-mobile-row {
            margin-bottom: 20px; /* espacio entre fila y bullets */
          }
        }

        /* DESKTOP */
        @media (min-width: 1024px) {
          .hero-title-1 {
            font-size: 65px;
            line-height: 1.15;
          }
          .bullet-text {
            font-size: 16px;
          }
          .bullets-grid {
            border: 1px solid rgba(148,52,236,0.2); /* borde más marcado pero elegante */
          }
        }

        /* Bullets recuadro */
        .shadow-bullets {
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
        }
      `}</style>
    </section>
  );
}
