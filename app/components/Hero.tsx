'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useMemo } from 'react';

const HERO_IMG = '/brand/hero-card-eye.png';
const CLOUD_IMG = '/brand/Nube1.png';

// Color botón (morado) y morado claro ya usados en el sitio
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
    <section className="relative overflow-hidden bg-[#FBF3FB]">
      {/* Línea divisoria morada (misma posición) */}
      <div className="absolute left-0 right-0 top-0 h-[2px] bg-[#9434ec] z-[1]" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 pt-10 pb-14 sm:pt-14 sm:pb-16">
        {/* FILA TALENTOS (chips) */}
        <nav
          aria-label="Talentos"
          className="flex flex-wrap gap-3 sm:gap-3.5 pt-3"
        >
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
        <div className="relative mt-6 sm:mt-10 grid grid-cols-12 gap-y-10 lg:gap-x-10">
          {/* LADO IZQUIERDO */}
          <div className="hero-left col-span-12 lg:col-span-7 xl:col-span-7">
            {/* Títulos sin bold */}
            <h1 className="hero-title-1 text-[#22172f] font-normal tracking-tight text-[40px] leading-[1.05] sm:text-[56px] sm:leading-[1.04]">
              El universo se comunica en
            </h1>
            <h2
              className="hero-title-2 font-normal tracking-tight text-[42px] leading-[1.05] sm:text-[60px] sm:leading-[1.04]"
              style={{ color: LIGHT_PURPLE }}
            >
              símbolos, energía y estrellas
            </h2>

            {/* Bullets (2 col en móvil, 3 col desde sm) */}
            <div className="mt-7 max-w-[820px] grid grid-cols-2 sm:grid-cols-3 gap-x-6 gap-y-4 text-[15px] sm:text-[16.5px] text-[#2b2140]">
              {[
                'Conecta con videntes, sanadores y guías',
                'Descubre tu camino de vida y amor',
                'Explora talentos como Tarot y Astrología',
                'Ilumina las áreas que se sienten estancadas',
                'Encuentra claridad y respuestas clave',
                'Obtén seguridad para decidir con confianza',
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-2">
                  <span
                    className="mt-[2px] inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full border"
                    style={{
                      borderColor: BTN_PURPLE,
                    }}
                  >
                    {/* check minimal */}
                    <svg
                      viewBox="0 0 24 24"
                      className="h-[14px] w-[14px]"
                      stroke={BTN_PURPLE}
                      strokeWidth="3"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M5 12l4 4 10-10" />
                    </svg>
                  </span>
                  <span>{item}</span>
                </div>
              ))}
            </div>

            {/* Botones CTA */}
            <div className="mt-8 flex flex-wrap gap-4">
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
                className="inline-flex items-center justify-center rounded-2xl px-6 h-14 text-[15px] font-semibold text-[#2b2140] bg-white/55 ring-1"
                style={{ borderColor: 'rgba(148,52,236,0.35)' }}
              >
                Únete como especialista
              </a>
            </div>
          </div>

          {/* LADO DERECHO – Carta + nube */}
          <div className="relative col-span-12 lg:col-span-5 xl:col-span-5 min-h-[320px] sm:min-h-[400px]">
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
                className="h-auto w-[320px] sm:w-[380px] lg:w-[440px]"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Estilos locales */}
      <style jsx>{`
        /* Nube ping-pong suave por defecto (desktop/tablet) */
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
          position: absolute;
          right: 1.25rem; /* ~20px */
          top: 4.5rem;
          transform: translateX(0) rotate(0deg);
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

        /* ====== Ajustes SOLO móvil (<= 639px) ====== */
        @media (max-width: 639px) {
          /* Títulos más contenidos (~2 líneas) */
          .hero-title-1 {
            font-size: 26px;
            line-height: 1.08;
          }
          .hero-title-2 {
            font-size: 28px;
            line-height: 1.08;
          }

          /* Reserva de ancho para que la carta no pise el texto */
          .hero-left {
            padding-right: 180px;
          }

          /* Carta: al lado del título, tamaño controlado */
          .hero-card {
            position: absolute;
            right: 10px;
            top: 7.75rem;
            transform: translateX(0) rotate(0deg);
          }
          .hero-card :global(img) {
            width: 140px !important;
          }

          /* Nube: más a la derecha y más discreta */
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
