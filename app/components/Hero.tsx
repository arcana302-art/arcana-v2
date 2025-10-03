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

  // Estrellas Desktop
  const starsDesktop = useMemo(() => {
    const arr = [];
    for (let i = 0; i < 7; i++) {
      arr.push({
        top: ${10 + Math.random() * 70}%,
        left: ${5 + Math.random() * 40}%,
        size: ${15 + Math.random() * 25}px,
        dim: 0.5 + Math.random() * 0.5,
        delay: Math.random() * 5,
      });
    }
    return arr;
  }, []);

  // Estrellas Mobile
  const starsMobile = useMemo(() => {
    const arr = [];
    for (let i = 0; i < 7; i++) {
      arr.push({
        top: ${10 + Math.random() * 70}%,
        left: ${5 + Math.random() * 40}%,
        size: ${10 + Math.random() * 15}px,
        dim: 0.5 + Math.random() * 0.5,
        delay: Math.random() * 5,
      });
    }
    return arr;
  }, []);

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
                        top: s.top,
                        left: s.left,
                        fontSize: s.size,
                        opacity: s.dim,
                        animation: dim 4s ease-in-out infinite alternate,
                        animationDelay: ${s.delay}s,
                      }}
                    >
                      ✦
                    </span>
                  ))}
                </div>
              </div>
            </div>

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
            {/* NUBE */}
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

              {/* Estrellas Desktop */}
              <div className="stars-desktop absolute top-0 left-0 w-full h-full pointer-events-none">
                {starsDesktop.map((s, idx) => (
                  <span
                    key={idx}
                    className="star"
                    style={{
                      top: s.top,
                      left: s.left,
                      fontSize: s.size,
                      opacity: s.dim,
                      animation: dim 4s ease-in-out infinite alternate,
                      animationDelay: ${s.delay}s,
                    }}
                  >
                    ✦
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{
        .cloud-img {
          top: 50%;
          left: 50%;
          width: 680px;
          opacity: 0.42;
          transform: translate(-50%, -50%);
          animation: cloud-sway 26s ease-in-out infinite alternate;
        }
        @keyframes cloud-sway {
          0% { transform: translateX(-52%); }
          50% { transform: translateX(-44%); }
          100% { transform: translateX(-52%); }
        }

        @keyframes dim {
          0% { opacity: 1; }
          100% { opacity: 0.3; }
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
          .bullet-text { font-size: 14px; line-height: 1.4; }
        }

        /* DESKTOP */
        @media (min-width: 1024px) {
          .hero-title-1 { font-size: 65px; line-height: 1.15; }
          .bullet-text { font-size: 16px; }
        }

        /* Bullets recuadro */
        .shadow-bullets { box-shadow: 0 4px 12px rgba(0,0,0,0.12); }

        .star {
          position: absolute;
          color: #FFD700;
          pointer-events: none;
        }
      }</style>
    </section>
  );
}
