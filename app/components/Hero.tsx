'use client';

import Image from 'next/image';

const HERO_IMG = '/brand/hero-card-eye.png';
const CLOUD_IMG = '/brand/Nube1.png';

/* ====== Star igual que antes (sin tocar) ====== */
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
          <feGaussianBlur in="SourceGraphic" stdDeviation="2.4" result="b1" />
          <feGaussianBlur in="SourceGraphic" stdDeviation="5.5" result="b2" />
          <feFlood floodColor="#FBD671" floodOpacity="0.6" result="gold" />
          <feComposite in="gold" in2="b2" operator="in" result="glowColor" />
          <feMerge>
            <feMergeNode in="glowColor" />
            <feMergeNode in="b1" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      <g filter={`url(#glow-${id})`} className="twinkle" style={{ animationDelay: `var(--twinkle-delay)`, animationDuration: `var(--twinkle-dur)` }}>
        <path d="M50 5 L60 40 L95 50 L60 60 L50 95 L40 60 L5 50 L40 40 Z" fill="#F1C960" />
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
    <section className="relative overflow-hidden bg-[var(--arcana-bg)]">
      {/* NUBE */}
      <div className="pointer-events-none absolute inset-0 z-[5]">
        <img src={CLOUD_IMG} alt="" className="cloud-img" aria-hidden="true" />
      </div>

      {/* CONTENIDO */}
      <div className="relative z-10 mx-auto max-w-7xl px-6 pt-24 pb-16 lg:pt-28 lg:pb-20">
        <div className="grid grid-cols-12 items-center gap-y-12 lg:gap-x-12">
          {/* TEXTO */}
          <div className="col-span-12 lg:col-span-7 xl:col-span-7">
            <div className="max-w-[560px] sm:max-w-[600px]">
              <h1 className="text-[var(--arcana-ink)] font-extrabold tracking-tight leading-[0.95] text-[53px] sm:text-[69px]">
                Claridad
                <br />
                aquí y ahora
              </h1>

              <h2 className="mt-2 text-[47px] sm:text-[51px] font-extrabold tracking-tight leading-[1.02] text-[#c9a6ff]">
                con guías auténticas
              </h2>

              <p className="mt-5 text-[var(--arcana-ink-muted)] text-[19px] sm:text-[20px] leading-relaxed">
                Tarot, astrología y oráculos. Agenda en minutos y recibe
                orientación concreta en un espacio cuidado, seguro y sin
                juicios.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href="#"
                  className="inline-flex items-center justify-center rounded-2xl px-6 h-14 text-white text-base font-semibold"
                  style={{ backgroundColor: 'var(--arcana-primary)', boxShadow: '0 12px 40px -10px rgba(148,52,236,0.45)' }}
                >
                  Agendar una consulta
                </a>

                <a
                  href="#"
                  className="inline-flex items-center justify-center rounded-2xl px-6 h-14 text-[var(--arcana-ink)] text-base font-semibold ring-1 ring-black/10 bg-white hover:bg-black/[0.03] transition"
                >
                  Únete como especialista
                </a>
              </div>
            </div>
          </div>

          {/* CARTA + ESTRELLAS (idéntico a tu versión, solo se mantienen) */}
          <div className="col-span-12 lg:col-span-5 xl:col-span-5 relative flex justify-center lg:justify-start">
            {/* (aquí deja tus <Star /> posicionadas como ya las tienes) */}

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
                className="h-auto w-full relative z-20"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Estilos nube (misma animación que ya usabas) */}
      <style jsx>{`
        .cloud-img {
          position: absolute;
          top: 7.5%;
          left: 110%;
          width: 960px;
          max-width: none;
          opacity: 0.45;     /* un poco más sutil sobre claro */
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
