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
        {/* FILA TALENTOS */}
        <nav
          aria-label="Talentos"
          className="flex flex-wrap gap-3 sm:gap-3.5 mb-3 sm:mb-4 talents-row"
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
        <div className="relative mt-0 grid grid-cols-12 gap-y-4 lg:gap-x-10 hero-grid">
          {/* LADO IZQUIERDO */}
          <div className="hero-left col-span-12 lg:col-span-7 xl:col-span-7 flex flex-col justify-center">
            {/* Encabezados + Imagen juntos en mobile */}
            <div className="flex flex-col sm:flex-col mobile-head-wrapper">
              <div className="hero-text">
                <h1 className="hero-title-1 text-[#22172f] font-normal tracking-tight text-[40px] leading-[1.05] sm:text-[56px] sm:leading-[1.04] mb-3">
                  El universo se comunica en
                </h1>
                <h2
                  className="hero-title-2 font-normal tracking-tight text-[42px] leading-[1.05] sm:text-[60px] sm:leading-[1.04] mb-4"
                  style={{ color: LIGHT_PURPLE }}
                >
                  símbolos, energía y estrellas
                </h2>
              </div>

              {/* Carta + nube al lado del encabezado en mobile */}
              <div className="hero-card-mobile relative z-10 select-none sm:hidden">
                <img
                  src={CLOUD_IMG}
                  alt=""
                  aria-hidden="true"
                  className="cloud-img absolute z-0 select-none pointer-events-none"
                />
                <Image
                  src={HERO_IMG}
                  alt="Carta / símbolo místico"
                  width={560}
                  height={790}
                  priority
                  className="h-auto w-[180px]"
                />
              </div>
            </div>

            {/* BULLETS CON CHECKS */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-6 gap-y-4 mt-4 sm:mt-5 bullets-grid">
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
            <div className="mt-5 flex flex-wrap gap-4">
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

          {/* LADO DERECHO – Carta + nube (solo desktop/tablet) */}
          <div className="relative col-span-12 lg:col-span-5 xl:col-span-5 flex items-center justify-center min-h-[1px] hidden sm:flex">
            {/* Nube */}
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
                width={560}
                height={790}
                priority
                className="h-auto w-[330px] lg:w-[390px]"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Estilos locales */}
      <style jsx>{`
        .cloud-img {
          top: 48%;
          left: 58%;
          width: 680px;
          opacity: 0.42;
          transform: translate(-50%, -50%);
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

        @keyframes cloud-sway {
          0% { transform: translateX(-52%); }
          50% { transform: translateX(-44%); }
          100% { transform: translateX(-52%); }
        }

        @media (max-width: 639px) {
          /* Espacio entre talentos y encabezado */
          .talents-row { margin-bottom: 20px; }

          /* Hero titles */
          .hero-title-1 { font-size: 26px; line-height: 1.08; }
          .hero-title-2 { font-size: 28px; line-height: 1.08; }

          /* Encabezado + imagen en fila */
          .mobile-head-wrapper {
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: space-between;
            gap: 16px;
          }
          .hero-text { flex: 1; }
          .hero-card-mobile img { width: 160px !important; }

          /* Bullets en 3 columnas con espacio */
          .bullets-grid {
            grid-template-columns: repeat(3, minmax(0, 1fr));
            gap-x: 12px;
            gap-y: 18px;
            margin-bottom: 24px;
          }
        }
      `}</style>
    </section>
  );
}
