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

  const renderStars = (count: number, width: number, height: number) => {
    const stars: JSX.Element[] = [];
    const positions: { x: number; y: number; size: number }[] = [];

    for (let i = 0; i < count; i++) {
      let size = Math.random() * 12 + 8; // Tamaño 8px a 20px
      let x: number;
      let y: number;
      let attempts = 0;

      do {
        x = Math.random() * (width - size);
        y = Math.random() * (height - size);
        attempts++;
      } while (
        positions.some(
          (pos) =>
            Math.abs(pos.x - x) < (pos.size + size) * 0.8 &&
            Math.abs(pos.y - y) < (pos.size + size) * 0.8
        ) &&
        attempts < 50
      );

      positions.push({ x, y, size });
      const dim = Math.random() * 0.8 + 0.2;

      stars.push(
        <span
          key={i}
          style={{
            position: 'absolute',
            left: `${x}px`,
            top: `${y}px`,
            fontSize: `${size}px`,
            color: `rgba(255, 223, 0, ${dim})`,
            pointerEvents: 'none',
          }}
        >
          ✦
        </span>
      );
    }

    return stars;
  };

  return (
    <section className="relative overflow-hidden bg-[#FBF3FB] pt-6 sm:pt-8 pb-12 sm:pb-14">
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

        <div className="relative mt-0 grid grid-cols-12 gap-y-4 lg:gap-x-10 hero-grid">
          {/* LEFT */}
          <div className="hero-left col-span-12 lg:col-span-6 flex flex-col justify-center">
            {/* DESKTOP TITLE */}
            <h1 className="hero-title-1 hidden sm:block text-[65px] font-normal leading-[1.15]">
              <span className="text-[#22172f]">El universo se comunica en </span>
              <span className="text-[#c9a6ff]">símbolos, energía y estrellas</span>
            </h1>

            {/* MOBILE: Título + Carta */}
            <div className="hero-mobile-row sm:hidden flex w-full gap-4 mt-4 items-center relative">
              <h1 className="mobile-text w-3/5 text-[#22172f] text-[30px] leading-[1.15] font-normal">
                El universo se comunica en <br />
                <span className="text-[#c9a6ff]">símbolos, energía y estrellas</span>
              </h1>
              <div className="hero-card-mobile w-2/5 relative">
                <Image
                  src={HERO_IMG}
                  alt="Carta / símbolo místico"
                  width={560}
                  height={790}
                  priority
                  className="h-auto w-full scale-[0.93]" // incremento 15% en mobile
                />
                {/* Nube Mobile */}
                <div className="mobile-cloud absolute top-0 left-0 w-full h-full -z-10">
                  <Image
                    src={CLOUD_IMG}
                    alt=""
                    fill
                    className="object-contain cloud-motion-mobile"
                  />
                </div>
                {/* Estrellas Mobile */}
                <div className="absolute inset-0 z-10">
                  {renderStars(7, 130, 150)}
                </div>
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
            <div className="relative w-full flex justify-center items-center">
              <Image
                src={HERO_IMG}
                alt="Carta / símbolo místico"
                width={560}
                height={790}
                priority
                className="h-auto w-[330px] lg:w-[390px]"
              />
              {/* Nube Desktop */}
              <div className="absolute inset-0 -z-10">
                <Image
                  src={CLOUD_IMG}
                  alt=""
                  fill
                  className="object-contain cloud-motion-desktop"
                />
              </div>
              {/* Estrellas Desktop */}
              <div className="absolute inset-0 z-10">
                {renderStars(7, 390, 390)}
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        /* CLOUD ANIMATION */
        .cloud-motion-desktop {
          animation: swayDesktop 26s ease-in-out infinite alternate;
        }
        @keyframes swayDesktop {
          0% { transform: translateX(-10%); }
          50% { transform: translateX(10%); }
          100% { transform: translateX(-10%); }
        }

        .cloud-motion-mobile {
          animation: swayMobile 26s ease-in-out infinite alternate;
        }
        @keyframes swayMobile {
          0% { transform: translateX(-10%); }
          50% { transform: translateX(10%); }
          100% { transform: translateX(-10%); }
        }

        .shadow-bullets {
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
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
