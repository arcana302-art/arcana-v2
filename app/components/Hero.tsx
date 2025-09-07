'use client';

import Image from 'next/image';

const HERO_IMG = '/brand/hero-card-eye.png';
const CLOUD_IMG = '/brand/Nube1.png';

/* ====== Estrella con halo adaptado + twinkle sutil ====== */
function Star({
  id,
  className = '',
  style,
  opacity = 1,
  delay = '0s',
  duration = '10s',
  bright = false,
}: {
  id: string;
  className?: string;
  style?: React.CSSProperties;
  opacity?: number;
  delay?: string;
  duration?: string;
  bright?: boolean;
}) {
  // Glow ligero para todas y un poco más intenso para las "bright"
  const cssGlow = bright
    ? 'drop-shadow(0 0 10px rgba(251,214,113,0.35))'
    : 'drop-shadow(0 0 6px rgba(251,214,113,0.22))';

  return (
    <svg
      viewBox="0 0 100 100"
      className={className}
      aria-hidden="true"
      style={
        {
          opacity,
          filter: cssGlow, // <-- glow ligero a todas
          ['--twinkle-delay' as any]: delay,
          ['--twinkle-dur' as any]: duration,
          ...style,
        } as React.CSSProperties
      }
    >
      <defs>
        <filter id={`glow-${id}`} filterUnits="userSpaceOnUse" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur in="SourceGraphic" stdDeviation="2.5" result="blur1" />
          <feGaussianBlur in="SourceGraphic" stdDeviation="6" result="blur2" />
          <feFlood floodColor={bright ? '#FFD97E' : '#FBD671'} floodOpacity={bright ? 0.7 : 0.55} result="gold" />
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
          0% { opacity: 1; }
          30% { opacity: 0.55; }
          60% { opacity: 0.98; }
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
                  className="inline-flex items-center justify-center rounded-2xl px-6 h-14 text-white text-base font-semibold bg-[#9434ec] shadow-[0_12px_40px_-10px_rgba(148,52,236,0.55)] transition-transform duration-200 hover:scale-[1.03] active:scale-[0.98]"
                >
                  Agendar una consulta
                </a>

                <a
                  href="#"
                  className="inline-flex items-center justify-center rounded-2xl px-6 h-14 text-white/90 text-base font-semibold ring-1 ring-white/15 bg-white/5 backdrop-blur transition-all duration-200 hover:bg:white/[0.07]"
                >
                  Únete como especialista
                </a>
              </div>
            </div>
          </div>

          {/* CARTA + ESTRELLAS */}
          <div className="col-span-12 lg:col-span-5 xl:col-span-5 relative flex justify-center lg:justify-start">
            {/* ===== ESTRELLAS (mismas que antes, salvo cambios solicitados) ===== */}
            <div className="pointer-events-none absolute inset-0 z-0">
              {/* IZQUIERDA (10) */}
              <Star id="L1"  className="absolute w-[20px]" style={{ left: '3%',  top: '6%'  }}   delay="0.3s" duration="12s" bright />
              <Star id="L2"  className="absolute w-[14px]" style={{ left: '14%', top: '15%' }}   delay="1.4s" duration="11s" />
              <Star id="L3"  className="absolute w-[16px]" style={{ left: '6%',  top: '38%' }}   delay="2.1s" duration="10s" />
              {/* #4 de arriba hacia abajo (lado izquierdo) => 24px */}
              <Star id="L4"  className="absolute w-[24px]" style={{ left: '24%', top: '9%'  }}   delay="0.8s" duration="13s" />
              <Star id="L5"  className="absolute w-[13px]" style={{ left: '10%', bottom: '28%' }} delay="1.9s" duration="12.8s" />
              <Star id="L6"  className="absolute w-[24px]" style={{ left: '22%', bottom: '36%' }} delay="1.2s" duration="14s" bright />
              <Star id="L7"  className="absolute w-[12px]" style={{ left: '4%',  bottom: '10%' }} delay="0.6s" duration="10.6s" />
              {/* Reubicadas aleatoriamente: L8, L9, L10 */}
              <Star id="L8"  className="absolute w-[15px]" style={{ left: '18%', top: '57%' }}   delay="0.9s" duration="12.4s" />
              <Star id="L9"  className="absolute w-[12px]" style={{ left: '26%', top: '27%' }}   delay="1.7s" duration="11.6s" />
              <Star id="L10" className="absolute w-[18px]" style={{ left: '33%', bottom: '21%' }} delay="0.4s" duration="13.2s" bright />

              {/* DERECHA (5) */}
              <Star id="R1" className="absolute w-[20px]" style={{ right: '5%',  top: '12%' }}  delay="0.2s" duration="11s" bright />
              <Star id="R2" className="absolute w-[14px]" style={{ right: '16%', top: '30%' }} delay="1.1s" duration="12.5s" />
              <Star id="R3" className="absolute w-[18px]" style={{ right: '12%', top: '58%' }} delay="2.0s" duration="10.5s" />
              <Star id="R4" className="absolute w-[22px]" style={{ right: '7%',  bottom: '26%' }} delay="0.8s" duration="13s" bright />
              <Star id="R5" className="absolute w-[12px]" style={{ right: '18%', bottom: '8%' }}  delay="1.5s" duration="9.8s" />
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
                className="h-auto w-full relative z-20 drop-shadow-[0_0_18px_rgba(148,52,236,0.32)] drop-shadow-[0_0_36px_rgba(148,52,236,0.16)]"
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
          -webkit-mask-image: radial-gradient(145% 125% at 56% 46%, #000 62%, transparent 100%);
          mask-image: radial-gradient(145% 125% at 56% 46%, #000 62%, transparent 100%);
          animation: cloud-rtl 42s linear infinite;
        }
        @media (min-width: 1024px) {
          .cloud-img {
            top: 7%;
            width: 1080px;
            -webkit-mask-image: radial-gradient(150% 130% at 56% 46%, #000 62%, transparent 100%);
            mask-image: radial-gradient(150% 130% at 56% 46%, #000 62%, transparent 100%);
          }
        }
        @keyframes cloud-rtl {
          0% { transform: translateX(0); }
          100% { transform: translateX(-220%); }
        }
      `}</style>
    </section>
  );
}
