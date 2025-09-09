'use client';

import Image from 'next/image';

const HERO_IMG = '/brand/hero-card-eye.png';
const CLOUD_IMG = '/brand/Nube1.png';

/* ===== Estrellita sutil (sin cambios de color) ===== */
function Star({ id, style, size = 14, delay = '0s', duration = '9s' }: {
  id: string; style?: React.CSSProperties; size?: number; delay?: string; duration?: string;
}) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} className="pointer-events-none"
      style={{ filter: 'drop-shadow(0 0 6px rgba(251,214,113,0.45))', ...style }} aria-hidden="true">
      <defs>
        <filter id={`glow-${id}`} x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur in="SourceGraphic" stdDeviation="0.8" result="b1" />
          <feMerge><feMergeNode in="b1" /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
      </defs>
      <g filter={`url(#glow-${id})`} className="twinkle" style={{ animationDelay: delay, animationDuration: duration }}>
        <path d="M12 2l2.1 6.2L20 10l-5.9 1.8L12 18l-2.1-6.2L4 10l5.9-1.8L12 2z" fill="#FBD671"/>
      </g>
      <style jsx>{`
        .twinkle{animation-name:dim;animation-iteration-count:infinite;animation-timing-function:ease-in-out}
        @keyframes dim{0%{opacity:.95}40%{opacity:.45}60%{opacity:.9}100%{opacity:.75}}
      `}</style>
    </svg>
  );
}

/* ===== Bullet con check del color del botón #9434ec ===== */
function Bullet({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-start gap-3">
      <span className="mt-[2px] inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full ring-1 ring-[#9434ec]">
        <svg width="12" height="12" viewBox="0 0 24 24" className="fill-[#9434ec]">
          <path d="M20.285 6.709 9.75 17.244 3.715 11.21l1.414-1.414 4.621 4.62 9.121-9.12 1.414 1.414Z"/>
        </svg>
      </span>
      <span className="leading-[1.45]">{children}</span>
    </div>
  );
}

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#FBF3FB]">
      {/* (La línea morada vive ahora en el header) */}

      {/* Nube (debajo de carta, z-2) */}
      <div className="pointer-events-none absolute inset-0 z-[2]">
        <img src={CLOUD_IMG} alt="" className="cloud-img" aria-hidden="true" />
      </div>

      {/* Contenido */}
      <div className="relative z-10 mx-auto max-w-7xl px-6 pb-16 lg:pb-20">
        <div className="grid grid-cols-12 items-center gap-y-10 lg:gap-x-12">
          {/* Texto */}
          <div className="col-span-12 lg:col-span-7 xl:col-span-7">
            <div className="max-w-[680px] mt-10">
              <h1 className="text-[#1f1630] font-medium tracking-tight leading-[1.02] text-[44px] sm:text-[54px]">
                El universo se comunica en
              </h1>
              <h2 className="mt-1 text-[42px] sm:text-[50px] font-medium tracking-tight leading-[1.03] text-[#c9a6ff]">
                símbolos, energía y estrellas
              </h2>

              <div className="mt-7 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-8 gap-y-4 text-[16.5px] text-[#2b2140]">
                <Bullet>Conecta con videntes, sanadores y guías</Bullet>
                <Bullet>Descubre tu camino de vida y amor</Bullet>
                <Bullet>Explora talentos como Tarot y Astrología</Bullet>
                <Bullet>Ilumina las áreas que se sienten estancadas</Bullet>
                <Bullet>Encuentra claridad y respuestas clave</Bullet>
                <Bullet>Obtén seguridad para decidir con confianza</Bullet>
              </div>

              <div className="mt-9 flex flex-wrap gap-4">
                <a
                  href="#"
                  className="inline-flex items-center justify-center rounded-2xl px-6 h-14 text-white text-base font-semibold bg-[#9434ec] shadow-[0_12px_40px_-10px_rgba(148,52,236,0.55)] transition-transform duration-200 hover:scale-[1.03] active:scale-[0.98]"
                >
                  Agendar una consulta
                </a>
                <a
                  href="#"
                  className="inline-flex items-center justify-center rounded-2xl px-6 h-14 text-[#1f1630] text-base font-semibold ring-1 ring-[#1f1630]/10 bg-white/70 backdrop-blur transition-all duration-200"
                >
                  Únete como especialista
                </a>
              </div>
            </div>
          </div>

          {/* Carta + estrellas borde */}
          <div className="col-span-12 lg:col-span-5 xl:col-span-5 relative flex justify-center lg:justify-end">
            {/* estrellas alrededor (sin cambios) */}
            <div className="pointer-events-none absolute inset-0 z-[1]">
              <Star id="e1" size={16} style={{ left: '10%', top: '14%' }} delay="0.2s" duration="10s" />
              <Star id="e2" size={12} style={{ left: '8%',  top: '42%' }} delay="1.1s" duration="9.4s" />
              <Star id="e3" size={14} style={{ left: '12%', bottom: '20%' }} delay="1.8s" duration="10.6s" />
              <Star id="e4" size={18} style={{ right: '8%',  top: '10%' }} delay="0.6s" duration="10.2s" />
              <Star id="e5" size={12} style={{ right: '6%',  top: '46%' }} delay="1.5s" duration="9.2s" />
              <Star id="e6" size={14} style={{ right: '10%', bottom: '22%' }} delay="2.0s" duration="11s" />
            </div>

            {/* CARTA — “mucho más” a la izquierda */}
            <div
              className="
                relative
                w-[170px] sm:w-[198px] md:w-[222px] lg:w-[246px] xl:w-[278px]
                -translate-x-10 sm:-translate-x-14 md:-translate-x-16 lg:-translate-x-20 xl:-translate-x-24
                rotate-0
                transition-transform duration-500 hover:scale-[1.05]
                drop-shadow-[0_0_20px_rgba(148,52,236,0.16)]
                z-10 select-none
              "
            >
              <Image
                src={HERO_IMG}
                alt="Carta / símbolo místico"
                width={700}
                height={980}
                priority
                className="h-auto w-full relative z-20 drop-shadow-[0_0_18px_rgba(148,52,236,0.28)]"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Nube: vaivén suave (sin cambios) */}
      <style jsx>{`
        .cloud-img{
          position:absolute; top:10%; left:56%;
          width:760px; max-width:none; opacity:.45; filter:none;
          -webkit-mask-image:radial-gradient(145% 130% at 56% 46%, #000 62%, transparent 100%);
                  mask-image:radial-gradient(145% 130% at 56% 46%, #000 62%, transparent 100%);
          animation:cloud-sway 38s ease-in-out infinite;
        }
        @keyframes cloud-sway{0%{transform:translateX(0)}50%{transform:translateX(-18%)}100%{transform:translateX(0)}}
      `}</style>
    </section>
  );
}
