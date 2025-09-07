'use client';

import Image from 'next/image';

const HERO_IMG = '/brand/hero-card-eye.png';
const CLOUD_IMG = '/brand/Nube1.png';

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#17031F]">
      {/* Capa de la nube (global, detrás de todo el contenido) */}
      <div className="cloud-layer pointer-events-none absolute inset-0 z-0">
        <img
          src={CLOUD_IMG}
          alt=""
          className="cloud-img"
          aria-hidden="true"
        />
      </div>

      {/* Contenido principal por encima de la nube */}
      <div className="relative z-10 mx-auto max-w-7xl px-6 pt-24 pb-16 lg:pt-28 lg:pb-20">
        <div className="grid grid-cols-12 items-center gap-y-12 lg:gap-x-12">
          {/* Columna de texto (contenida para alinear con botones) */}
          <div className="col-span-12 lg:col-span-7 xl:col-span-7">
            {/* Constrain: el texto NO rebasará este ancho; coincide con fila de botones */}
            <div className="max-w-[560px] sm:max-w-[600px]">
              <h1 className="text-white font-extrabold tracking-tight text-5xl sm:text-6xl">
                Claridad
                <br />
                aquí y ahora
              </h1>

              <h2 className="mt-6 text-[42px] sm:text-[46px] font-extrabold tracking-tight text-[#c9a6ff]">
                con guías auténticas
              </h2>

              <p className="mt-6 text-white/70 text-lg leading-relaxed">
                Tarot, astrología y oráculos. Agenda en minutos y recibe orientación
                concreta en un espacio cuidado, seguro y sin juicios.
              </p>

              {/* Botones (mismo ancho visual que el texto al estar dentro del wrapper) */}
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

          {/* Columna visual (carta) */}
          <div className="col-span-12 lg:col-span-5 xl:col-span-5 relative flex justify-center lg:justify-start">
            {/* Carta — -10% extra de tamaño e inclinación -15° */}
            <div
              className="
                group relative
                w-[152px] sm:w-[180px] md:w-[207px] lg:w-[234px] xl:w-[263px]
                -translate-x-8 md:-translate-x-12 lg:-translate-x-16 xl:-translate-x-20
                -rotate-[15deg]
                transition-transform duration-500 will-change-transform
                hover:-rotate-[11deg] hover:scale-[1.05]
                drop-shadow-[0_0_22px_rgba(148,52,236,0.16)]
                select-none
              "
            >
              {/* Halo suave al hover (radial, natural) */}
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

      {/* Estilos locales: animación + suavizado de bordes de la nube */}
      <style jsx>{`
        /* La nube cruza toda la sección de derecha → izquierda.
           La máscara radial evita líneas duras o “cuadros” en bordes. */
        .cloud-img {
          position: absolute;
          top: 12%;
          left: 110%;
          width: 980px;
          max-width: none;
          opacity: 0.55; /* ligera transparencia */
          filter: drop-shadow(0 0 26px rgba(148, 52, 236, 0.28)); /* halo suave */
          animation: cloud-rtl 42s linear infinite;

          /* Difumina bordes inferior/laterales para que NO se vea línea de corte */
          -webkit-mask-image: radial-gradient(120% 85% at 50% 55%, #000 65%, transparent 100%);
          mask-image: radial-gradient(120% 85% at 50% 55%, #000 65%, transparent 100%);
        }

        @media (min-width: 1024px) {
          .cloud-img {
            top: 9%;
            width: 1120px;
          }
        }

        @keyframes cloud-rtl {
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
