'use client';

import Image from 'next/image';

const HERO_IMG = '/brand/hero-card-eye.png';
const CLOUD_IMG = '/brand/Nube1.png';

const TALENTS = [
  'Lecturas',
  'Astrología',
  'Sanación',
  'Adivinación',
  'Hipnosis',
  'Numerología',
];

function Bullet({ children }: { children: React.ReactNode }) {
  return (
    <li className="relative pl-7 text-[16.5px] leading-relaxed text-zinc-800/90">
      <span
        aria-hidden
        className="absolute left-0 top-[2px] inline-flex h-[18px] w-[18px] items-center justify-center rounded-md ring-1 ring-[#9434ec]/30"
      >
        <svg width="12" height="12" viewBox="0 0 24 24" className="fill-[#9434ec]">
          <path d="M9.55 17.3 4.8 12.55l1.4-1.4 3.35 3.35 7.2-7.2 1.4 1.4-8.6 8.6Z" />
        </svg>
      </span>
      {children}
    </li>
  );
}

export default function Hero() {
  return (
    <section id="inicio" className="relative">
      {/* Separador morado */}
      <div className="border-t border-[#9434ec]/40" />

      {/* Barra de talentos (bajo la línea) */}
      <div className="mx-auto max-w-7xl px-6">
        <nav className="flex flex-wrap gap-2 py-3">
          {TALENTS.map((t) => (
            <a
              key={t}
              href="#categorias"
              className="rounded-xl px-3.5 py-1.5 text-[15px] text-[#9434ec] ring-1 ring-transparent transition
                         hover:ring-[#9434ec] hover:bg-[#9434ec]/5"
            >
              {t}
            </a>
          ))}
        </nav>
      </div>

      {/* Contenido principal */}
      <div className="relative mx-auto max-w-7xl px-6 pt-4 pb-10 md:pt-6">
        <div className="grid grid-cols-12 items-center gap-10 lg:gap-14">
          {/* Texto */}
          <div className="col-span-12 md:col-span-7">
            <h1 className="text-zinc-900/90 tracking-tight leading-[1.08] text-[38px] sm:text-[46px] md:text-[54px] font-normal">
              El universo se comunica en
            </h1>
            <h2 className="mt-1 text-[#c9a6ff] tracking-tight leading-[1.06] text-[34px] sm:text-[42px] md:text-[50px] font-normal">
              símbolos, energía y estrellas
            </h2>

            {/* Bullets */}
            <ul className="mt-8 grid grid-cols-1 gap-y-3 sm:grid-cols-2 sm:gap-x-10">
              <Bullet>Conecta con videntes, sanadores y guías</Bullet>
              <Bullet>Descubre tu camino de vida y amor</Bullet>
              <Bullet>Explora talentos como Tarot y Astrología</Bullet>
              <Bullet>Ilumina las áreas que se sienten estancadas</Bullet>
              <Bullet>Encuentra claridad y respuestas clave</Bullet>
              <Bullet>Obtén seguridad para decidir con confianza</Bullet>
            </ul>

            {/* Botones */}
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#"
                className="inline-flex h-14 items-center justify-center rounded-2xl px-6 text-white text-base font-semibold
                           bg-[#9434ec] shadow-[0_12px_40px_-10px_rgba(148,52,236,0.55)]
                           transition-transform hover:scale-[1.03] active:scale-[0.98]"
              >
                Agendar una consulta
              </a>
              <a
                href="#"
                className="inline-flex h-14 items-center justify-center rounded-2xl px-6 text-base font-semibold text-zinc-900/90
                           ring-1 ring-zinc-900/15 bg-white/60 backdrop-blur
                           transition hover:bg-white/80"
              >
                Únete como especialista
              </a>
            </div>
          </div>

          {/* Imagen + nube */}
          <div className="col-span-12 md:col-span-5 relative flex justify-center md:justify-end">
            {/* Nube detrás */}
            <img
              src={CLOUD_IMG}
              alt=""
              aria-hidden="true"
              className="pointer-events-none absolute right-[-40px] top-1/2 z-0 w-[520px] -translate-y-1/2 opacity-[0.55]
                         md:right-[-60px] md:w-[600px] cloud-wobble"
              style={{
                maskImage:
                  'radial-gradient(140% 135% at 55% 50%, #000 60%, transparent 100%)',
                WebkitMaskImage:
                  'radial-gradient(140% 135% at 55% 50%, #000 60%, transparent 100%)',
              }}
            />

            {/* Carta (sin inclinación, 15% más grande aprox) */}
            <div className="relative z-10">
              <Image
                src={HERO_IMG}
                alt="Carta / símbolo místico"
                width={480}  // ~15% más grande que un 410–420 base
                height={700}
                priority
                className="h-auto w-[340px] sm:w-[380px] md:w-[420px] lg:w-[460px] select-none"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Animación de la nube (vaivén sutil, con margen a la izquierda) */}
      <style jsx>{`
        @keyframes cloudSway {
          0% {
            transform: translateX(0);
          }
          50% {
            transform: translateX(-8%); /* menos desplazamiento hacia el texto */
          }
          100% {
            transform: translateX(0);
          }
        }
        .cloud-wobble {
          animation: cloudSway 18s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}
