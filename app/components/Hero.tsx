'use client';

import Image from 'next/image';

const HERO_IMG = '/brand/hero-card-eye.png';
const CLOUD_IMG = '/brand/Nube1.png';

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#17031F]">
      <div className="mx-auto max-w-7xl px-6 pt-24 pb-16 lg:pt-28 lg:pb-20">
        <div className="grid grid-cols-12 items-center gap-y-12 lg:gap-x-12">
          {/* Columna de texto (más ancha) */}
          <div className="col-span-12 lg:col-span-7 xl:col-span-7">
            <h1 className="text-white font-extrabold tracking-tight text-5xl sm:text-6xl">
              Claridad
              <br />
              aquí y ahora
            </h1>

            <h2 className="mt-6 text-[42px] sm:text-[46px] font-extrabold tracking-tight text-[#c9a6ff]">
              con guías auténticas
            </h2>

            <p className="mt-6 max-w-2xl text-white/70 text-lg leading-relaxed">
              Tarot, astrología y oráculos. Agenda en minutos y recibe orientación
              concreta en un espacio cuidado, seguro y sin juicios.
            </p>

            {/* Botones */}
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

          {/* Columna visual */}
          <div className="col-span-12 lg:col-span-5 xl:col-span-5 relative flex justify-center lg:justify-start">
            {/* Nube animada detrás */}
            <div className="pointer-events-none absolute inset-0 -z-10 overflow-visible">
              <div className="cloud-track">
                <img
                  src={CLOUD_IMG}
                  alt=""
                  className="cloud-img"
                  aria-hidden="true"
                />
              </div>
            </div>

            {/* Carta — tamaño -15% e inclinación -10° */}
            <div
              className="
                group relative
                w-[188px] sm:w-[222px] md:w-[255px] lg:w-[290px] xl:w-[324px]
                -translate-x-6 md:-translate-x-10 lg:-translate-x-14 xl:-translate-x-20
                -rotate-[10deg]
                transition-transform duration-500 will-change-transform
                hover:-rotate-[6deg] hover:scale-[1.05]
                drop-shadow-[0_0_22px_rgba(148,52,236,0.16)]
                select-none
              "
            >
              {/* Halo suave que aparece al hover */}
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

      {/* Estilos locales: animación y halo natural de la nube */}
      <style jsx>{`
        /* Pista para animar la nube sin tocar el wrapper del layout */
        .cloud-track {
          position: absolute;
          inset: 0;
          overflow: visible;
        }

        /* Nube: inicia fuera a la derecha y cruza toda la sección hacia la izquierda */
        .cloud-img {
          position: absolute;
          top: 14%;
          left: 110%;
          width: 920px;         /* un poco más pequeña para que no “corte” abajo */
          max-width: none;
          opacity: 0.55;        /* transparencia */
          filter: drop-shadow(0 0 26px rgba(148, 52, 236, 0.28)); /* halo natural */
          animation: cloudRightToLeft 42s linear infinite;
          pointer-events: none;
        }

        @media (min-width: 1024px) {
          .cloud-img {
            top: 10%;
            width: 1080px;
          }
        }

        @keyframes cloudRightToLeft {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-220%);
          }
        }
      `}</style>
    </section>
  );
}
