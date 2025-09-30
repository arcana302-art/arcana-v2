'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useMemo } from 'react';

const HERO_IMG = '/brand/hero-card-eye.png';
const CLOUD_IMG = '/brand/Nube1.png';

// Colores
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
    <section className="relative overflow-hidden bg-[#FBF3FB] pt-3 sm:pt-4 pb-14 sm:pb-16">
      {/* Línea divisoria morada */}
      <div className="absolute left-0 right-0 top-0 h-[2px] bg-[#9434ec] z-[1]" />

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        {/* FILA TALENTOS (chips) */}
        <nav aria-label="Talentos" className="flex flex-wrap gap-3 sm:gap-3.5">
          {talents.map((t) => (
            <Link
              key={t.href}
              href={t.href}
              className="
                group rounded-full px-4 sm:px-5 h-10 inline-flex items-center
                text-[15px] sm:text-[15.5px]
                border border-[--chip-border] bg-[--chip-bg]
                hover:bg-[--chip-bg-hover] hover:shadow-[0_0_0_3px_rgba(148,52,236,0.15)]
                transition-colors
              "
              style={
                {
                  ['--chip-border' as any]: BTN_PURPLE,
                  ['--chip-bg' as any]: 'transparent',
                  ['--chip-bg-hover' as any]: 'rgba(148,52,236,0.06)',
                  color: BTN_PURPLE,
                } as React.CSSProperties
              }
            >
              {t.label}
            </Link>
          ))}
        </nav>

        {/* GRID HERO */}
        <div className="relative mt-2 sm:mt-3 grid grid-cols-12 gap-y-8 lg:gap-x-10">
          {/* LADO IZQUIERDO */}
          <div className="hero-left col-span-12 lg:col-span-7 xl:col-span-7 flex flex-col justify-center">
            {/* Títulos */}
            <h1 className="hero-title-1 text-[#22172f] font-normal tracking-tight text-[40px] leading-[1.05] sm:text-[56px] sm:leading-[1.04]">
              El universo se comunica en
            </h1>
            <h2
              className="hero-title-2 font-normal tracking-tight text-[42px] leading-[1.05] sm:text-[60px] sm:leading-[1.04]"
              style={{ color: LIGHT_PURPLE }}
            >
              símbolos, energía y estrellas
            </h2>

            {/* BULLETS CON CHECKS */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-2 sm:mt-3">
              {bullets.map((item, idx) => (
                <div key={idx} className="flex items-start gap-2">
                  <span
                    className="flex-shrink-0 mt-1 h-5 w-5 flex items-center justify-center rounded-full bg-[#9434ec] text-white text-sm font-bold"
                  >
                    ✓
                  </span>
                  <span className="text-lg text-[#22172f]/90">{item}</span>
                </div>
              ))}
            </div>

            {/* Botones CTA */}
            <div className="mt-4 flex flex-wrap gap-4">
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

          {/* LADO DERECHO – Carta + nube */}
          <div className="relative col-span-12 lg:col-span-5 xl:col-span-5 flex items-center justify-center min-h-[1px]">
            {/* Nube (detrás) */}
            <img
              src={CLOUD_IMG}
              alt=""
              aria-hidden="true"
              className="cloud-img absolute z-0 select-none pointer-events-none"
            />

            {/* Carta */}
            <div className="hero-card relative z-10 select-none">
              <Image
                src={HERO_IMG}
                alt="Carta / símbolo místico"
                width={640}
                height={900}
                priority
                className="h-auto w-[320px] sm:w-[380px] lg:w-[440px] scale-[0.825]" 
              />
            </div>
          </div>
        </div>
      </div>

      {/* Estilos locales */}
      <style jsx>{`
        .cloud-img {
          top: 30%;
          left: 58%;
          width: 680px;
          opacity: 0.42;
          filter: none;
          transform: translateX(-50%);
          animation: cloud-sway 26s ease-in-out infinite;
          -webkit-mask-image: radial-gradient(
            140% 120% at 56% 46%,
            #000 62%,
            transparent 100%
          );
          mask-image: radial-gradient(
            140% 120% at 56% 46%,
            #000 62%,
            transparent 100%
          );
        }

        .hero-card {
          position: relative;
          transform: scale(0.825);
        }

        @keyframes cloud-sway {
          0% { transform: translateX(-52%); }
          50% { transform: translateX(-44%); }
          100% { transform: translateX(-52%); }
        }

        @media (max-width: 639px) {
          .hero-title-1 { font-size: 26px; line-height: 1.08; }
          .hero-title-2 { font-size: 28px; line-height: 1.08; }

          .hero-left { padding-right: 140px; }

          .hero-card :global(img) {
            width: 160px !important;
            scale: 0.825;
          }

          .cloud-img {
            top: 26%;
            left: 62%;
            width: 460px;
            opacity: 0.38;
            animation: cloud-sway 34s ease-in-out infinite;
          }
        }
      `}</style>
    </section>
  );
}
