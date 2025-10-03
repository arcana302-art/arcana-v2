'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useMemo } from 'react';

const HERO_IMG = '/brand/hero-card-eye.png';
const CLOUD_IMG = '/brand/Nube1.png';
const BTN_PURPLE = '#9434ec';

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
      {/* Línea divisoria morada moderna */}
      <div className="absolute left-0 right-0 top-0 h-[3px] bg-gradient-to-r from-[#9434ec] via-[#c79dff] to-[#9434ec] shadow-lg z-[1]" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 grid grid-cols-12 gap-6">
        {/* LEFT SIDE */}
        <div className="col-span-12 lg:col-span-6 flex flex-col justify-center">
          {/* TALENTS - ahora arriba del título */}
          <nav
            aria-label="Talentos"
            className="flex flex-wrap gap-3 sm:gap-3.5 mb-5 talents-row"
          >
            {talents.map((t, idx) => (
              <a
                key={idx}
                href={t.href}
                className="rounded-full border border-[#9434ec] px-3.5 py-1.5 text-sm font-medium text-[#9434ec] hover:bg-[#9434ec] hover:text-white transition"
              >
                {t.label}
              </a>
            ))}
          </nav>

          {/* TITLE */}
          <h1 className="text-[32px] sm:text-[44px] lg:text-[58px] font-bold leading-tight text-[#22172f] mb-4">
            El universo se comunica en{' '}
            <span className="text-[#9434ec]">símbolos</span>,{' '}
            <span className="text-[#9434ec]">energía</span> y{' '}
            <span className="text-[#9434ec]">estrellas</span>.
          </h1>

          {/* BULLETS */}
          <div className="mt-4 bullets-grid p-4 shadow-bullets rounded-lg bg-transparent relative z-10">
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
          <div className="hidden lg:flex lg:gap-6 mt-6">
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

      <style jsx>{`
        /* Bullets recuadro */
        .shadow-bullets {
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.12);
        }

        /* MOBILE */
        @media (max-width: 639px) {
          .talents-row a {
            font-size: 10px;
            height: 24px;
            padding-left: 8px;
            padding-right: 8px;
            max-width: calc(50% - 4px);
          }
          .bullet-text {
            font-size: 14px;
            line-height: 1.4;
          }
        }

        /* DESKTOP */
        @media (min-width: 1024px) {
          .bullet-text {
            font-size: 16px;
          }
        }
      `}</style>
    </section>
  );
}
