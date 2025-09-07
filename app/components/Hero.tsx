'use client';

import Image from 'next/image';

const HERO_IMG = '/brand/hero-card-eye.png';
const CLOUD_IMG = '/brand/Nube1.png';

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#17031F]">
      {/* Capa de la nube (detrás del contenido) */}
      <div className="pointer-events-none absolute inset-0 z-0">
        <img
          src={CLOUD_IMG}
          alt=""
          className="cloud-img"
          aria-hidden="true"
        />
      </div>

      {/* Contenido principal */}
      <div className="relative z-10 mx-auto max-w-7xl px-6 pt-24 pb-16 lg:pt-28 lg:pb-20">
        <div className="grid grid-cols-12 items-center gap-y-12 lg:gap-x-12">
          {/* Texto (ancho contenido para alinear con botones) */}
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
                Tarot, astrología y oráculos. Agenda en minutos y recibe orientación
                concreta en un espacio cuidado, seguro y sin juicios.
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

          {/* Carta */}
          <div className="col-span-12 lg:col-span-5 xl:col-span-5 relative flex justify-center lg:justify-start">
            <div
              className="
                group relative
                w-[144px] sm:w-[171px] md:w-[197px] lg:w-[222px] xl:w-[250px]
                translate-x-2 md:translate-x-3 lg:translate-x-4 xl:translate-x-6
                -rotate-[15deg]
                transition-transform duration-500 will-change-transform
                hover:-rotate-[11deg] hover:scale-[1.05]
                drop-shadow-[0_0_22px_rgba(148,52,236,0.16)]
                select-none
              "
            >
              <span
                className="
                  absolute inset-0 -z-10
                  rounded-[28px]
                  opacity-0 blur-[22px]
                  transition-opacity duration-400
                  group-hover:opacity-70
                "
                style={{
                  background:
                    'radial-gradient(60% 60% at 50% 50%, rgba(148,52,236,0.35) 0%, rgba(148,52,236,0) 70%)',
                }}
              />
              <Image
                src={HERO_IMG}
                alt="Carta / símbolo místico"
                width={700}
                height={980}
                priority
                className="h-auto w-full"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Estilos locales: nube sin cortes y animación RTL */}
      <style jsx>{`
        .cloud-img {
          position: absolute;
          top: 7.5%;
          left: 110%;
          width: 960px;         /* un pelín más pequeña para evitar tocar borde inferior */
          max-width: none;
          opacity: 0.5;         /* ligera transparencia */

          /* OJO: quitamos drop-shadow para que no aparezca borde rectangular en esquinas/borde inferior */
          filter: none;

          /* Máscara amplia y centrada para desvanecer bordes, especialmente inferior-izq */
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
          0%   { transform: translateX(0); }
          100% { transform: translateX(-220%); }
        }
      `}</style>
    </section>
  );
}
