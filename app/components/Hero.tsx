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
      <div className="absolute left-0 right-0 top-0 h-[2px] bg-[#9434ec] z-[1]" />

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        {/* TALENTS */}
        <nav
          aria-label="Talentos"
          className="flex flex-wrap gap-2 mb-3 sm:mb-4 talents-row"
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
                height: 22, // Mobile ajustado
                fontSize: 7, // Mobile más legible
                paddingLeft: 5,
                paddingRight: 5,
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
            {/* TITLE + CARD MOBILE ALIGNED */}
            <div className="hero-title-wrapper flex flex-col sm:flex-row sm:items-center sm:gap-6">
              <h1 className="hero-title-1 text-[35px] sm:text-[65px] font-normal leading-tight">
                <span className="text-[#22172f]">El universo se comunica en </span>
                <span className="text-[#c9a6ff]">símbolos, energía y estrellas</span>
              </h1>

              <div className="hero-card-mobile sm:hidden w-full">
                <Image
                  src={HERO_IMG}
                  alt="Carta / símbolo místico"
                  width={560}
                  height={790}
                  priority
                  className="h-auto w-full scale-[1.2]" // 20% más grande
                />
              </div>
            </div>

            {/* BULLETS */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-6 gap-y-4 mt-4 sm:mt-5 bullets-grid">
              {bullets.map((item, idx) => (
                <div key={idx} className="flex items-start gap-2">
                  <span className="flex-shrink-0 mt-1 h-5 w-5 flex items-center justify-center rounded-full bg-[#9434ec] text-white text-sm font-bold">✓</span>
                  <span className="bullet-text text-[#22172f]/90">{item}</span>
                </div>
              ))}
            </div>

            {/* BUTTON DESKTOP LEFT */}
            <div className="hidden lg:flex lg:justify-start mt-5">
              <a
                href="#"
                className="inline-flex items-center justify-center rounded-2xl px-6 h-14 text-white text-base font-semibold"
                style={{ backgroundColor: BTN_PURPLE, boxShadow: '0 12px 40px -10px rgba(148,52,236,0.55)' }}
              >
                Agendar una consulta
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

            {/* BUTTON DESKTOP RIGHT */}
            <div className="mt-5">
              <a
                href="#"
                className="inline-flex items-center justify-center rounded-2xl px-6 h-14 text-[#1f1630] font-semibold bg-transparent ring-1 ring-[#9434ec] hover:bg-[#9434ec]/10 transition"
              >
                Únete como especialista
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* LOCAL STYLES */}
      <style jsx>{`
        .cloud-img {
          top: 48%;
          left: 58%;
          width: 680px;
          opacity: 0.42;
          transform: translate(-50%, -50%);
          animation: cloud-sway 26s ease-in-out infinite;
          -webkit-mask-image: radial-gradient(140% 120% at 56% 46%, #000 62%, transparent 100%);
          mask-image: radial-gradient(140% 120% at 56% 46%, #000 62%, transparent 100%);
        }
        @keyframes cloud-sway { 0% { transform: translateX(-52%); } 50% { transform: translateX(-44%); } 100% { transform: translateX(-52%); } }

        /* MOBILE */
        @media (max-width: 639px) {
          .talents-row { margin-bottom: 16px; justify-content: space-between; flex-wrap: wrap; }
          .hero-title-1 { font-size: 35px; font-weight: normal; }
          .hero-card-mobile img { width: 100% !important; height: auto; }
          .bullets-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); gap-x: 12px; gap-y: 16px; margin-bottom: 16px; }
          .bullet-text { font-size: 14px; line-height: 1.4; }
          .hero-title-wrapper { flex-direction: row; align-items: center; justify-content: flex-start; gap: 16px; }
        }

        /* DESKTOP */
        @media (min-width: 1024px) {
          .hero-title-1 { font-size: 65px; font-weight: normal; }
          .bullet-text { font-size: 16px; }
        }
      `}</style>
    </section>
  );
}
