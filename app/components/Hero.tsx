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
          ...(bright ? { filter: 'drop-shadow(0 0 10px rgba(251,214,113,0.35))' } : undefined),
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

function CheckIcon({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" width="16" height="16" aria-hidden="true" className={className}>
      <path
        d="M20 6L9 17l-5-5"
        fill="none"
        stroke="#0f1020"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#F7F2FF]">
      {/* NUBE: detrás de todo el contenido del hero */}
      <div className="pointer-events-none absolute inset-0 z-[5]">
        <img src={CLOUD_IMG} alt="" className="cloud-img" aria-hidden="true" />
      </div>

      {/* CONTENIDO */}
      <div className="relative z-10 mx-auto max-w-7xl px-6 pt-16 pb-16 lg:pt-20 lg:pb-20">
        <div className="grid grid-cols-12 items-center gap-y-12 lg:gap-x-12">
          {/* TEXTO */}
          <div className="col-span-12 lg:col-span-7 xl:col-span-7">
            <div className="max-w-[560px] sm:max-w-[600px]">
              <h1 className="text-[#0f1020] font-normal tracking-tight leading-[1.02] text-[40px] sm:text-[52px]">
                El universo se comunica en
              </h1>
              <h2 className="mt-1 text-[38px] sm:text-[48px] font-normal tracking-tight leading-[1.06] text-[#c9a6ff]">
                símbolos, energía y estrellas
              </h2>

              {/* Bullets */}
              <ul className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-3 text-[#0f1020] text-[16px] leading-relaxed">
                <li className="flex items-start gap-2">
                  <CheckIcon className="mt-1" />
                  <span>Conecta con videntes, sanadores y guías</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckIcon className="mt-1" />
                  <span>Descubre tu camino de vida y amor</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckIcon className="mt-1" />
                  <span>Explora talentos como Tarot y Astrología</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckIcon className="mt-1" />
                  <span>Ilumina las áreas que se sienten estancadas</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckIcon className="mt-1" />
                  <span>Encuentra claridad y respuestas clave</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckIcon className="mt-1" />
                  <span>Obtén seguridad para decidir con confianza</span>
                </li>
              </ul>

              {/* Botones */}
              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href="#"
                  className="inline-flex items-center justify-center rounded-2xl px-6 h-14 text-white text-base font-semibold bg-[#9434ec] shadow-[0_12px_40px_-10px_rgba(148,52,236,0.45)] transition-transform duration-200 hover:scale-[1.03] active:scale-[0.98]"
                >
                  Agendar una consulta
                </a>

                <a
                  href="#"
                  className="inline-flex items-center justify-center rounded-2xl px-6 h-14 text-base font-semibold text-[#0f1020] ring-1 ring-[#9434ec]/25 bg-[#9434ec]/10 hover:bg-[#9434ec]/12 transition"
                >
                  Únete como especialista
                </a>
              </div>
            </div>
          </div>

          {/* CARTA + ESTRELLAS */}
          <div className="col-span-12 lg:col-span-5 xl:col-span-5 relative flex justify-center lg:justify-start">
            <div className="pointer-events-none absolute inset-0 z-0">
              {/* IZQUIERDA */}
              <Star id="L2"  className="absolute w-[14px]" style={{ left: '14%', top: '15%' }}   delay="1.4s" duration="11s" />
              <Star id="L3"  className="absolute w-[16px]" style={{ left: '6%',  top: '38%' }}   delay="2.1s" duration="10s" />
              <Star id="L4"  className="absolute w-[12px]" style={{ left: '24%', top: '9%'  }}   delay="0.8s" duration="13s" />
              <Star id="L5"  className="absolute w-[13px]" style={{ left: '10%', bottom: '28%' }} delay="1.9s" duration="12.8s" />
              <Star id="L6"  className="absolute w-[24px]" style={{ left: '22%', bottom: '36%' }} delay="1.2s" duration="14s" bright />
              <Star id="L7"  className="absolute w-[12px]" style={{ left: '4%',  bottom: '10%' }} delay="0.6s" duration="10.6s" />
              <Star id="L8"  className="absolute w-[15px]" style={{ left: '16%', top: '52%' }}   delay="0.9s" duration="12.4s" />
              <Star id="L9"  className="absolute w-[12px]" style={{ left: '28%', top: '32%' }}   delay="1.7s" duration="11.6s" />
              <Star id="L10" className="absolute w-[18px]" style={{ left: '30%', bottom: '18%' }} delay="0.4s" duration="13.2s" bright />
              {/* DERECHA */}
              <Star id="R1" className="absolute w-[20px]" style={{ right: '5%',  top: '12%' }}  delay="0.2s" duration="11s" bright />
              <Star id="R2" className="absolute w-[14px]" style={{ right: '16%', top: '30%' }} delay="1.1s" duration="12.5s" />
              <Star id="R3" className="absolute w-[18px]" style={{ right: '12%', top: '58%' }} delay="2.0s" duration="10.5s" />
              <Star id="R4" className="absolute w-[22px]" style={{ right: '7%',  bottom: '26%' }} delay="0.8s" duration="13s" bright />
              <Star id="R5" className="absolute w-[12px]" style={{ right: '18%', bottom: '8%' }}  delay="1.5s" duration="9.8s" />
            </div>

            {/* CARTA (enderezada y +15% tamaño) */}
            <div
              className="
                group relative
                w-[166px] sm:w-[197px] md:w-[227px] lg:w-[255px] xl:w-[288px]
                translate-x-16 md:translate-x-20 lg:translate-x-24 xl:translate-x-28
                rotate-0
                transition-transform duration-500 will-change-transform
                hover:scale-[1.05]
                drop-shadow-[0_0_22px_rgba(148,52,236,0.16)]
                select-none
              "
            >
              <Image
                src={HERO_IMG}
                alt="Carta / símbolo místico"
                width={805}
                height={1127}
                priority
                className="h-auto w-full relative z-20 drop-shadow-[0_0_18px_rgba(148,52,236,0.32)] drop-shadow-[0_0_36px_rgba(148,52,236,0.16)]"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Estilos locales: nube +30% tamaño y vaivén más amplio */}
      <style jsx>{`
        .cloud-img {
          position: absolute;
          top: 7.5%;
          left: 70%;
          transform: translateX(-50%);
          width: 637px;     /* +30% desde 490px */
          max-width: none;
          opacity: 0.5;
          filter: none;
          -webkit-mask-image: radial-gradient(145% 125% at 56% 46%, #000 62%, transparent 100%);
          mask-image: radial-gradient(145% 125% at 56% 46%, #000 62%, transparent 100%);
          animation: cloud-sway 55s ease-in-out infinite alternate;
        }
        @media (min-width: 1024px) {
          .cloud-img {
            top: 7%;
            width: 728px;   /* +30% desde 560px */
            -webkit-mask-image: radial-gradient(150% 130% at 56% 46%, #000 62%, transparent 100%);
            mask-image: radial-gradient(150% 130% at 56% 46%, #000 62%, transparent 100%);
          }
        }
        /* Vaivén más amplio: ~ -58% ↔ -42% */
        @keyframes cloud-sway {
          0%   { transform: translateX(-58%); }
          50%  { transform: translateX(-42%); }
          100% { transform: translateX(-58%); }
        }
      `}</style>
    </section>
  );
}
