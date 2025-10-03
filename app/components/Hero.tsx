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
      {/* Curva morada superior (delgada y moderna) */}
      <svg
        className="absolute left-0 right-0 top-0 w-full h-[26px] z-[1] pointer-events-none"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 26"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <defs>
          <linearGradient id="g1" x1="0" x2="1">
            <stop offset="0%" stopColor="#9434ec" stopOpacity="0.95" />
            <stop offset="50%" stopColor="#c9a6ff" stopOpacity="0.85" />
            <stop offset="100%" stopColor="#9434ec" stopOpacity="0.95" />
          </linearGradient>
        </defs>

        {/* trazo fino y curvo */}
        <path
          d="M0 18 C 240 0 480 30 720 12 C 960 -6 1200 18 1440 8"
          fill="none"
          stroke="url(#g1)"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        {/* TALENTS (encima del título) */}
        <nav
          aria-label="Talentos"
          className="flex flex-wrap gap-3 mb-4 talents-row"
        >
          {talents.map((t) => (
            <Link
              key={t.href}
              href={t.href}
              className="talent-btn"
              style={{
                // variante: borde morado + fondo transparente
                borderColor: BTN_PURPLE,
                color: BTN_PURPLE,
              }}
            >
              {t.label}
            </Link>
          ))}
        </nav>

        {/* GRID HERO */}
        <div className="relative mt-0 grid grid-cols-12 gap-y-6 lg:gap-x-10 hero-grid items-start">
          {/* LEFT: título + bullets + ctas */}
          <div className="hero-left col-span-12 lg:col-span-6 flex flex-col justify-center">
            {/* TÍTULO: parte negra + parte morada (todo en morado la sección símbolos, energía y estrellas) */}
            <h1 className="hero-title-1 text-[30px] sm:text-[40px] lg:text-[60px] font-normal leading-[1.05] mb-4">
              <span className="text-[#22172f]">El universo se comunica en </span>
              <span className="text-[--light-purple]">
                símbolos, energía y estrellas.
              </span>
            </h1>

            {/* BULLETS */}
            <div className="mt-2 bullets-grid p-4 shadow-bullets rounded-lg bg-transparent">
              {bullets.map((item, idx) => (
                <div key={idx} className="flex items-start gap-2 mt-2">
                  <span className="flex-shrink-0 mt-1 h-5 w-5 flex items-center justify-center rounded-full bg-[#9434ec] text-white text-sm font-bold">
                    ✓
                  </span>
                  <span className="bullet-text text-[#22172f]/90">{item}</span>
                </div>
              ))}
            </div>

            {/* CTA DESKTOP: se mantienen como estaban */}
            <div className="hidden lg:flex lg:gap-4 mt-6">
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

          {/* RIGHT: carta + nube (desktop) */}
          <div className="relative col-span-12 lg:col-span-6 flex flex-col items-center justify-center min-h-[1px]">
            {/* NUBE (detrás) */}
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

      {/* estilos locales */}
      <style jsx>{`
        :root {
          --light-purple: ${LIGHT_PURPLE};
        }

        /* Talents (chips) */
        .talents-row {
          align-items: center;
        }
        .talent-btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          padding: 0 16px;
          height: 40px;
          border-radius: 9999px;
          border-width: 1px;
          border-style: solid;
          background: transparent;
          font-size: 15px;
          line-height: 1;
          text-decoration: none;
          transition: all 0.15s ease;
        }
        .talent-btn:hover {
          background: rgba(148, 52, 236, 0.08);
          color: white;
          box-shadow: 0 6px 20px -12px rgba(148, 52, 236, 0.45);
        }

        /* Cloud */
        .cloud-img {
          top: 48%;
          left: 58%;
          width: 680px;
          opacity: 0.38;
          transform: translate(-50%, -50%);
          animation: cloud-sway 26s ease-in-out infinite alternate;
          -webkit-mask-image: radial-gradient(
            140% 120% at 56% 46%,
            #000 62%,
            transparent 100%
          );
          mask-image: radial-gradient(140% 120% at 56% 46%, #000 62%, transparent 100%);
        }

        @keyframes cloud-sway {
          0% {
            transform: translate(-60%, -50%);
          }
          50% {
            transform: translate(-48%, -50%);
          }
          100% {
            transform: translate(-60%, -50%);
          }
        }

        /* Mobile adjustments */
        @media (max-width: 639px) {
          :global(.talents-row) {
            gap: 6px;
          }
          .talent-btn {
            font-size: 10px;
            height: 24px;
            padding-left: 8px;
            padding-right: 8px;
            max-width: calc(50% - 6px); /* fuerza 2 renglones */
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
          }

          .hero-title-1 {
            font-size: 30px;
          }
          .bullet-text {
            font-size: 14px;
            line-height: 1.4;
          }
        }

        /* Desktop adjustments */
        @media (min-width: 1024px) {
          .hero-title-1 {
            font-size: 65px;
            line-height: 1.05;
          }
          .talent-btn {
            font-size: 15px;
            height: 40px;
            padding-left: 16px;
            padding-right: 16px;
          }
          .bullet-text {
            font-size: 16px;
          }
        }

        /* bullets box */
        .shadow-bullets {
          box-shadow: 0 6px 18px rgba(34, 23, 47, 0.06);
          border: 1px solid rgba(148, 52, 236, 0.08);
        }
      `}</style>
    </section>
  );
}
