'use client';

import Image from 'next/image';

const HERO_IMG = '/brand/hero-card-eye.png';
const CLOUD_IMG = '/brand/Nube1.png';

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#FBF3FB]">
      {/* NUBE: detrás de la carta y del contenido */}
      <div className="pointer-events-none absolute inset-0 z-0">
        <img src={CLOUD_IMG} alt="" className="cloud-img" aria-hidden="true" />
      </div>

      {/* CONTENIDO */}
      <div className="relative z-10 mx-auto max-w-7xl px-6 pt-16 pb-16 lg:pt-20 lg:pb-20">
        <div className="grid grid-cols-12 items-center gap-y-10 lg:gap-x-12">
          {/* TEXTO */}
          <div className="col-span-12 lg:col-span-7 xl:col-span-7">
            <div className="max-w-[680px]">
              {/* Título */}
              <h1 className="text-[#1f1630] font-medium tracking-tight leading-[1.02] text-[44px] sm:text-[54px]">
                El universo se comunica en
              </h1>
              <h2 className="mt-1 text-[42px] sm:text-[50px] font-medium tracking-tight leading-[1.03] text-[#c9a6ff]">
                símbolos, energía y estrellas
              </h2>

              {/* Bullets */}
              <div className="mt-7 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-8 gap-y-4 text-[16.5px] text-[#2b2140]">
                <Bullet>Conecta con videntes, sanadores y guías</Bullet>
                <Bullet>Descubre tu camino de vida y amor</Bullet>
                <Bullet>Explora talentos como Tarot y Astrología</Bullet>
                <Bullet>Ilumina las áreas que se sienten estancadas</Bullet>
                <Bullet>Encuentra claridad y respuestas clave</Bullet>
                <Bullet>Obtén seguridad para decidir con confianza</Bullet>
              </div>

              {/* Botones */}
              <div className="mt-9 flex flex-wrap gap-4">
                <a
                  href="#"
                  className="inline-flex items-center justify-center rounded-2xl px-6 h-14 text-white text-base font-semibold bg-[#9434ec] shadow-[0_12px_40px_-10px_rgba(148,52,236,0.55)] transition-transform duration-200 hover:scale-[1.03] active:scale-[0.98]"
                >
                  Agendar una consulta
                </a>

                <a
                  href="#"
                  className="inline-flex items-center justify-center rounded-2xl px-6 h-14 text-[#1f1630] text-base font-semibold ring-1 ring-[#1f1630]/10 bg-white/70 backdrop-blur transition-all duration-200 hover:bg-white"
                >
                  Únete como especialista
                </a>
              </div>
            </div>
          </div>

          {/* CARTA */}
          <div className="col-span-12 lg:col-span-5 xl:col-span-5 relative flex justify-center lg:justify-start">
            <div
              className="
                relative
                w-[72px] sm:w-[86px] md:w-[98px] lg:w-[111px] xl:w-[125px]
                md:w-[180px] lg:w-[200px] xl:w-[225px]
                rotate-0
                transition-transform duration-500
                hover:scale-[1.05]
                drop-shadow-[0_0_20px_rgba(148,52,236,0.16)]
                z-10
                select-none
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

      {/* Estilos locales para la nube (vaivén suave y tamaño controlado) */}
      <style jsx>{`
        .cloud-img {
          position: absolute;
          top: 12%;
          left: 65%;
          width: 560px;          /* más pequeña que antes */
          max-width: none;
          opacity: 0.45;
          filter: none;
          z-index: 0;
          -webkit-mask-image: radial-gradient(140% 125% at 56% 46%, #000 62%, transparent 100%);
                  mask-image: radial-gradient(140% 125% at 56% 46%, #000 62%, transparent 100%);
          animation: cloud-sway 38s ease-in-out infinite;
        }
        @media (min-width: 1024px) {
          .cloud-img {
            top: 10%;
            width: 660px;
            -webkit-mask-image: radial-gradient(145% 130% at 56% 46%, #000 62%, transparent 100%);
                    mask-image: radial-gradient(145% 130% at 56% 46%, #000 62%, transparent 100%);
          }
        }
        /* Vaivén sutil (izquierda-derecha) sin invadir el texto */
        @keyframes cloud-sway {
          0%   { transform: translateX(0); }
          50%  { transform: translateX(-18%); }
          100% { transform: translateX(0); }
        }
      `}</style>
    </section>
  );
}

/* ===== Item de bullet (check minimal) ===== */
function Bullet({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-start gap-3">
      <span className="mt-[2px] inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full ring-1 ring-[#2b2140]/25">
        <svg width="12" height="12" viewBox="0 0 24 24" className="fill-[#2b2140]">
          <path d="M20.285 6.709 9.75 17.244 3.715 11.21l1.414-1.414 4.621 4.62 9.121-9.12 1.414 1.414Z" />
        </svg>
      </span>
      <span className="leading-[1.45]">{children}</span>
    </div>
  );
}
