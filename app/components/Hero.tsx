'use client';

import Image from 'next/image';

const HERO_IMG = '/brand/hero-card-eye.png';
const CLOUD_IMG = '/brand/Nube1.png';

type Talent = { label: string; href: string };

/* Estrella decorativa (borde de la carta) */
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

/* Bullet con check morado */
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
  const TALENTS: Talent[] = [
    { label: 'Lecturas',     href: '/lecturas' },
    { label: 'Astrología',   href: '/astrologia' },
    { label: 'Sanación',     href: '/sanacion' },
    { label: 'Adivinación',  href: '/adivinacion' },
    { label: 'Hipnosis',     href: '/hipnosis' },
    { label: 'Numerología',  href: '/numerologia' },
  ];

  return (
    <section className="relative overflow-hidden bg-[#FBF3FB]">
      {/* Nube detrás de la carta */}
      <div className="pointer-events-none absolute inset-0 z-[2]">
        <img src={CLOUD_IMG} alt="" className="cloud-img" aria-hidden="true" />
      </div>

      {/* Contenido */}
      <div className="relative z-10 mx-auto max-w-7xl px-6 pb-16 lg:pb-20">
        <div className="grid grid-cols-12 items-start gap-y-8 lg:gap-x-12">
          {/* Columna izquierda */}
          <div className="col-span-12 lg:col-span-7 xl:col-span-7 hero-left">
            {/* Botones de talentos: debajo de la línea morada */}
            <nav aria-label="Talentos" className="mt-3">
              <div className="flex flex-wrap gap-8">
                <div className="flex flex-wrap gap-2.5">
                  {TALENTS.map((t) => (
                    <a
                      key={t.href}
                      href={t.href}
                      className="inline-flex items-center rounded-2xl px-3.5 py-1.5 text-sm font-semibold
                                 text-[#9434ec] border border-[#9434ec]
                                 hover:bg-[#9434ec]/10 transition
                                 focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#9434ec] focus-visible:outline-offset-2"
                    >
                      {t.label}
                    </a>
                  ))}
                </div>
              </div>
            </nav>

            {/* +50% de espacio debajo de los botones */}
            <div className="mb-6" />

            {/* Títulos */}
            <div className="max-w-[680px]">
              <h1 className="text-[#1f1630] font-medium tracking-tight leading-[1.02] text-[44px] sm:text-[54px]">
                El universo se comunica en
              </h1>
              <h2 className="mt-1 text-[42px] sm:text-[50px] font-medium tracking-tight leading-[1.03] text-[#c9a6ff]">
                símbolos, energía y estrellas
              </h2>
            </div>

            {/* Bullets */}
            <div className="mt-7 max-w-[820px] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-8 gap-y-4 text-[16.5px] text-[#2b2140]">
              <Bullet>Conecta con videntes, sanadores y guías</Bullet>
              <Bullet>Descubre tu camino de vida y amor</Bullet>
              <Bullet>Explora talentos como Tarot y Astrología</Bullet>
              <Bullet>Ilumina las áreas que se sienten estancadas</Bullet>
              <Bullet>Encuentra claridad y respuestas clave</Bullet>
              <Bullet>Obtén seguridad para decidir con confianza</Bullet>
            </div>

            {/* CTAs */}
            <div className="mt-9 flex flex-wrap gap-4">
              <a
                href="#"
                className="inline-flex items-center justify-center rounded-2xl px-6 h-14 text-white text-base font-semibold bg-[#9434ec]
                           shadow-[0_12px_40px_-10px_rgba(148,52,236,0.55)] transition-transform duration-200 hover:scale-[1.03] active:scale-[0.98]"
              >
                Agendar una consulta
              </a>
              <a
                href="#"
                className="inline-flex items-center justify-center rounded-2xl px-6 h-14 text-[#1f1630] text-base font-semibold
                           ring-1 ring-[#9434ec] bg-transparent hover:bg-[#9434ec]/10 transition
                           focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#9434ec] focus-visible:outline-offset-2"
              >
                Únete como especialista
              </a>
            </div>
          </div>

          {/* Columna derecha: carta + estrellas */}
          <div className="col-span-12 lg:col-span-5 xl:col-span-5 relative flex justify-center lg:justify-end">
            {/* Estrellas alrededor del borde de la carta */}
            <div className="pointer-events-none absolute inset-0 z-[1]">
              <Star id="e1" size={16} style={{ left: '10%', top: '14%' }} delay="0.2s" duration="10s" />
              <Star id="e2" size={12} style={{ left: '8%',  top: '42%' }} delay="1.1s" duration="9.4s" />
              <Star id="e3" size={14} style={{ left: '12%', bottom: '20%' }} delay="1.8s" duration="10.6s" />
              <Star id="e4" size={18} style={{ right: '8%',  top: '10%' }} delay="0.6s" duration="10.2s" />
              <Star id="e5" size={12} style={{ right: '6%',  top: '46%' }} delay="1.5s" duration="9.2s" />
              <Star id="e6" size={14} style={{ right: '10%', bottom: '22%' }} delay="2.0s" duration="11s" />
            </div>

            {/* Carta */}
            <div
              className="
                hero-card
                relative
                w-[170px] sm:w-[198px] md:w-[222px] lg:w-[246px] xl:w-[278px]
                -translate-x-10 sm:-translate-x-14 md:-translate-x-16 lg:-translate-x-20 xl:-translate-x-24
                rotate-0 transition-transform duration-500 hover:scale-[1.05]
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

      {/* Estilos locales (nube + layout móvil para carta) */}
      <style jsx>{`
        .cloud-img{
          position:absolute; top:10%; left:56%;
          width:760px; max-width:none; opacity:.45; filter:none;
          -webkit-mask-image:radial-gradient(145% 130% at 56% 46%, #000 62%, transparent 100%);
                  mask-image:radial-gradient(145% 130% at 56% 46%, #000 62%, transparent 100%);
          animation:cloud-sway 38s ease-in-out infinite;
        }
        @keyframes cloud-sway{0%{transform:translateX(0)}50%{transform:translateX(-18%)}100%{transform:translateX(0)}}

        /* --- Ajuste móvil: carta al lado del título, no debajo de los CTA --- */
        @media (max-width: 639px){
          .hero-card{
            position:absolute;
            right: 10px;
            top: 9.5rem;          /* altura aproximada junto al título */
            width: 160px;         /* tamaño más compacto en móvil */
            transform: translateX(0) rotate(0deg);
          }
          .hero-left{
            padding-right: 175px; /* deja espacio para la carta a la derecha del texto */
          }
          .cloud-img{
            top: 24%;
            left: 50%;
            width: 520px;
            animation: cloud-sway 34s ease-in-out infinite;
          }
        }
      `}</style>
    </section>
  );
}
