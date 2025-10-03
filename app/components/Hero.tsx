'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useMemo } from 'react';

const HERO_IMG = '/brand/hero-card-eye.png';
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
      {/* Línea divisoria moderna */}
      <div className="absolute left-0 right-0 top-0 h-[2px] bg-[#9434ec] z-[1]" />

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        {/* TALENTS - arriba del título */}
        <nav
          aria-label="Talentos"
          className="flex flex-wrap justify-center gap-3 sm:gap-4 mb-6"
        >
          {talents.map((t) => (
            <Link
              key={t.href}
              href={t.href}
              className="rounded-2xl px-5 py-2 text-sm sm:text-base font-medium border border-[#9434ec] text-[#9434ec] bg-white hover:bg-[#9434ec] hover:text-white transition"
            >
              {t.label}
            </Link>
          ))}
        </nav>

        {/* TITLE */}
        <h1 className="text-3xl sm:text-5xl leading-snug text-center font-normal text-[#1f1630] mb-6">
          El universo se comunica en{' '}
          <span className="text-[#9434ec]">símbolos, energía y estrellas.</span>
        </h1>

        {/* LEFT: BULLETS */}
        <div className="grid grid-cols-12 gap-6 items-center">
          <div className="col-span-12 lg:col-span-6">
            <div className="bullets-grid p-4 shadow-bullets rounded-lg bg-transparent relative z-10">
              {bullets.map((item, idx) => (
                <div key={idx} className="flex items-start gap-2 mt-2">
                  <span className="flex-shrink-0 mt-1 h-5 w-5 flex items-center justify-center rounded-full bg-[#9434ec] text-white text-sm font-bold">
                    ✓
                  </span>
                  <span className="bullet-text text-[#22172f]/90">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="relative col-span-12 lg:col-span-6 flex justify-center">
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
        .shadow-bullets {
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.12);
        }
        .bullet-text {
          font-size: 15px;
          line-height: 1.45;
        }
      `}</style>
    </section>
  );
}
