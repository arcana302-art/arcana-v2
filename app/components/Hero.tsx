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

  return (
    <section className="relative overflow-hidden bg-[#FBF3FB] pt-8 pb-12 sm:pb-16">
      {/* Línea divisoria curva */}
      <svg
        className="absolute left-0 right-0 top-0 w-full h-6 text-[#9434ec] z-[1]"
        viewBox="0 0 1440 50"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
      >
        <path
          d="M0,20 C480,60 960,-20 1440,20"
          stroke="currentColor"
          strokeWidth="2"
          fill="transparent"
        />
      </svg>

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        {/* TITLE */}
        <h1 className="text-3xl sm:text-5xl leading-snug text-center font-normal text-[#1f1630] mb-6">
          El universo se comunica en{' '}
          <span className="text-[#9434ec]">símbolos, energía y estrellas.</span>
        </h1>

        {/* TALENTS */}
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

        {/* LEFT: BULLETS */}
        <div className="grid grid-cols-12 gap-6 items-center">
          <div className="col-span-12 lg:col-span-6">
            <div className="bullets-grid p-4 shadow-bullets rounded-lg bg-transparent relative z-10">
              {[
                'Conecta con videntes, sanadores y guías',
                'Descubre tu camino de vida y amor',
                'Explora talentos como Tarot y Astrología',
                'Ilumina las áreas que se sienten estancadas',
                'Encuentra claridad y respuestas clave',
                'Obtén seguridad para decidir con confianza',
              ].map((item, idx) => (
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
        /* Bullets recuadro */
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
