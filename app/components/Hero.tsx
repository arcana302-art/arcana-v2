'use client';

import Image from 'next/image';

const HERO_IMG = '/brand/hero-card-eye.png';
const CLOUD_IMG = '/brand/Nube1.png';

type Talent = { label: string; href: string };

/* Bullet con check morado (mismo color botón) */
function Bullet({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-start gap-2.5">
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

      <div className="relative z-10 mx-auto max-w-7xl px-6 pb-16 lg:pb-20">
        <div className="grid grid-cols-12 items-start gap-y-8 lg:gap-x-12">
          {/* IZQUIERDA */}
          <div className="col-span-12 lg:col-span-7 xl:col-span-7 hero-left">
            {/* Talentos: móvil = fila con scroll; escritorio = wrap normal */}
            <nav aria-label="Talentos" className="mt-3">
              <div className="sm:hidden -mx-6 px-6 overflow-x-auto no-scrollbar">
                <div className="whitespace-nowrap space-x-2.5">
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
              <div className="hidden sm:block">
                <div className="flex flex-wrap items-center gap-2.5">
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

            {/* Más espacio bajo los talentos (igual que antes +50%) */}
            <div className="mb-6" />

            {/* Títulos */}
            <div className="max-w-[680px]">
              <h1 className="hero-title-1 text-[#1f1630] font-medium tracking-tight leading-[1.02] text-[44px] sm:text-[54px]">
                El universo se comunica en
              </h1>
              <h2 className="hero-title-2 mt-1 text-[42px] sm:text-[50px] font-medium tracking-tight leading-[1.03] text-[#c9a6ff]">
                símbolos, energía y estrellas
              </h2>
            </div>

            {/* Bullets: móvil 3 columnas */}
            <div className="mt-7 max-w-[820px] grid grid-cols-3 sm:grid-cols-3 md:grid-cols-3 gap-x-6 gap-y-4 text-[15px] sm:text-[16.5px] text-[#2b2140]">
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

          {/* DERECHA: carta (escritorio intacto) */}
          <div className="col-span-12 lg:col-span-5 xl:col-span-5 relative flex justify-center lg:justify-end">
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

      {/* Estilos locales: nube + móvil */}
      <style jsx>{`
        /* nube */
        .cloud-img{
          position:absolute; top:10%; left:56%;
          width:760px; max-width:none; opacity:.45;
          -webkit-mask-image:radial-gradient(145% 130% at 56% 46%, #000 62%, transparent 100%);
                  mask-image:radial-gradient(145% 130% at 56% 46%, #000 62%, transparent 100%);
          animation:cloud-sway 38s ease-in-out infinite;
        }
        @keyframes cloud-sway{0%{transform:translateX(0)}50%{transform:translateX(-18%)}100%{transform:translateX(0)}}

        /* ocultar scrollbar en el carrusel de chips */
        .no-scrollbar::-webkit-scrollbar{ display:none; }
        .no-scrollbar{ -ms-overflow-style:none; scrollbar-width:none; }

        /* ===== Ajustes SOLO móvil ===== */
        @media (max-width: 639px){
          /* Títulos más pequeños (2 líneas aprox.) */
          .hero-title-1{ font-size: 30px; line-height: 1.08; }
          .hero-title-2{ font-size: 32px; line-height: 1.08; }

          /* Colocar la carta a la derecha del título */
          .hero-card{
            position:absolute;
            right: 10px;
            top: 8.5rem;     /* afina esta altura si la quieres un poco más arriba/abajo */
            width: 150px;
            transform: translateX(0) rotate(0deg);
          }
          /* Reservar espacio a la derecha para que el texto no se meta bajo la carta */
          .hero-left{ padding-right: 170px; }

          /* Nube más proporcional en móvil */
          .cloud-img{ top: 24%; left: 50%; width: 520px; animation: cloud-sway 34s ease-in-out infinite; }
        }
      `}</style>
    </section>
  );
}
