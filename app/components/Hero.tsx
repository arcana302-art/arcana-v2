'use client';

import Image from 'next/image';

const HERO_IMG = '/brand/hero-card-eye.png';
const CLOUD_IMG = '/brand/Nube1.png';

/* ====== Estrella con halo adaptado + twinkle sutil ====== */
function Star({
  id,
  className = '',
  opacity = 1,
  delay = '0s',
  duration = '10s',
}: {
  id: string;
  className?: string;
  opacity?: number;
  delay?: string;
  duration?: string;
}) {
  return (
    <svg
      viewBox="0 0 100 100"
      className={className}
      aria-hidden="true"
      style={
        {
          opacity,
          ['--twinkle-delay' as any]: delay,
          ['--twinkle-dur' as any]: duration,
        } as React.CSSProperties
      }
    >
      <defs>
        <filter id={`glow-${id}`} filterUnits="userSpaceOnUse" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur in="SourceGraphic" stdDeviation="2.5" result="blur1" />
          <feGaussianBlur in="SourceGraphic" stdDeviation="6" result="blur2" />
          <feFlood floodColor="#FBD671" floodOpacity="0.55" result="gold" />
          <feComposite in="gold" in2="blur2" operator="in" result="glowColor" />
          <feMerge>
            <feMergeNode in="glowColor" />
            <feMergeNode in="blur1" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      <g
        filter={`url(#glow-${id})`}
        className="twinkle"
        style={{ animationDelay: `var(--twinkle-delay)`, animationDuration: `var(--twinkle-dur)` }}
      >
        <path d="M50 5 L60 40 L95 50 L60 60 L50 95 L40 60 L5 50 L40 40 Z" fill="#FBD671" />
      </g>

      <style jsx>{`
        .twinkle {
          animation-name: star-dim;
          animation-timing-function: ease-in-out;
          animation-iteration-count: infinite;
        }
        @keyframes star-dim {
          0%   { opacity: 1; }
          30%  { opacity: 0.55; }
          60%  { opacity: 0.98; }
          100% { opacity: 0.9; }
        }
      `}</style>
    </svg>
  );
}

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#17031F]">
      {/* NUBE: encima de estrellas, debajo del contenido */}
      <div className="pointer-events-none absolute inset-0 z-[5]">
        <img src={CLOUD_IMG} alt="" className="cloud-img" aria-hidden="true" />
      </div>

      {/* CONTENIDO */}
      <div className="relative z-10 mx-auto max-w-7xl px-6 pt-24 pb-16 lg:pt-28 lg:pb-20">
        <div className="grid grid-cols-12 items-center gap-y-12 lg:gap-x-12">
          {/* TEXTO */}
          <div className="col-span-12 lg:col-span-7 xl:col-span-7">
            <div className="max-w-[560px] sm:max-w-[600px]">
              <h1 className="text-white font-extrabold tracking-tight leading-[0.95] text-[53px] sm:text-[69px]">
                Claridad
                <br />
                aquí y ahora
              </h1>

              <h2 className="mt-2 text-[47px] sm:text-[51px] font-extrabold tracking-tight leading-[1.02] text-[#c9a6ff]">
                con guías auténticas
              </h2>

              <p className="mt-5 text-white/75 text-[19px] sm:text-[20px] leading-relaxed">
                Tarot, astrología y oráculos. Agenda en minutos y recibe
                orientación concreta en un espacio cuidado, seguro y sin
                juicios.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href="#"
                  className="
                    inline-flex items-center justify-center rounded-2xl px-6 h-14
                    text-white text-base font-semibold
                    bg-[#9434ec]
                    shadow-[0_12px_40px_-10px_rgba(148,52,236,0.55)]
                    transition-transform duration-200 hover:scale-[1.03] active:scale-[0.98]
                  "
                >
                  Agendar una consulta
                </a>

                <a
                  href="#"
                  className="
                    inline-flex items-center justify-center rounded-2xl px-6 h-14
                    text-white/90 text-base font-semibold
                    ring-1 ring-white/15 bg-white/5 backdrop-blur
                    transition-all duration-200 hover:bg-white/[0.07]
                  "
                >
                  Únete como especialista
                </a>
              </div>
            </div>
          </div>

          {/* CARTA + ESTRELLAS */}
          <div className="col-span-12 lg:col-span-5 xl:col-span-5 relative flex justify-center lg:justify-start">
            {/* ESTRELLAS (más cerca de la carta, tamaños pequeños y variados) */}
            <div className="pointer-events-none absolute inset-0 z-0">
              {/* derecha alta */}
              <Star id="s1"  className="absolute right-2  -top-1  w-[22px]" opacity={0.95} delay="0.2s" duration="11s" />
              <Star id="s2"  className="absolute right-7  -top-6  w-[14px]" opacity={0.90} delay="1.1s" duration="12.5s" />
              <Star id="s3"  className="absolute right-1   top-16  w-[18px]" opacity={0.85} delay="2.0s" duration="10.5s" />
              {/* lateral derecho */}
              <Star id="s4"  className="absolute right-0   top-32  w-[24px]" opacity={0.92} delay="0.8s" duration="13s" />
              <Star id="s5"  className="absolute right-4   top-40  w-[12px]" opacity={0.75} delay="1.7s" duration="9.8s" />
              {/* cerca, un poco hacia la izquierda de la carta */}
              <Star id="s6"  className="absolute right-20  top-6   w-[16px]" opacity={0.78} delay="0.4s" duration="12s" />
              <Star id="s7"  className="absolute right-24  top-26  w-[20px]" opacity={0.82} delay="2.3s" duration="11.2s" />
              {/* parte baja derecha */}
              <Star id="s8"  className="absolute right-2  bottom-16 w-[15px]" opacity={0.9}  delay="1.5s" duration="14s" />
              <Star id="s9"  className="absolute right-8  bottom-6  w-[13px]" opacity={0.8}  delay="0.9s" duration="10.8s" />
              {/* una más pequeña para balance */}
              <Star id="s10" className="absolute right-14 top-14 w-[12px]" opacity={0.85} delay="1.9s" duration="12.8s" />
            </div>

            {/* CARTA (sin cambios) */}
            <div
              className="
                group relative
                w-[144px] sm:w-[171px] md:w-[197px] lg:w-[222px] xl:w-[250px]
                translate-x-16 md:translate-x-20 lg:translate-x-24 xl:translate-x-28
                rotate-[10deg]
                transition-transform duration-500 will-change-transform
                hover:rotate-[6deg] hover:scale-[1.05]
                drop-shadow-[0_0_22px_rgba(148,52,236,0.16)]
                select-none
              "
            >
              <Image
                src={HERO_IMG}
                alt="Carta / símbolo místico"
                width={700}
                height={980}
                priority
                className="
                  h-auto w-full relative z-20
                  drop-shadow-[0_0_18px_rgba(148,52,236,0.32)]
                  drop-shadow-[0_0_36px_rgba(148,52,236,0.16)]
                "
              />
            </div>
          </div>
        </div>
      </div>

      {/* Estilos locales para la nube (sin cambios) */}
      <style jsx>{`
        .cloud-img {
          position: absolute;
          top: 7.5%;
          left: 110%;
          width: 960px;
          max-width: none;
          opacity: 0.5;
          filter: none;
          -webkit-mask-image: radial-gradient(
            145% 125% at 56% 46%,
            #000 62%,
            transparent 100%
          );
          mask-image: radial-gradient(
            145% 125% at 56% 46%,
            #000 62%,
            transparent 100%
          );
          animation: cloud-rtl 42s linear infinite;
        }

        @media (min-width: 1024px) {
          .cloud-img {
            top: 7%;
            width: 1080px;
            -webkit-mask-image: radial-gradient(
              150% 130% at 56% 46%,
              #000 62%,
              transparent 100%
            );
            mask-image: radial-gradient(
              150% 130% at 56% 46%,
              #000 62%,
              transparent 100%
            );
          }
        }

        @keyframes cloud-rtl {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-220%); }
        }
      `}</style>
    </section>
  );
}
