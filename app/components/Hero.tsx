// app/components/Hero.tsx
"use client";

const HERO_IMG = "/brand/hero-card-eye.png";
const CLOUD_IMG = "/brand/Nube1.png";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#17031F]">
      {/* Nube detrás: derecha → izquierda, más pequeña y sin línea dura */}
      <div aria-hidden className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
        {/* Wrapper para escala y centrado vertical */}
        <div
          className="
            absolute left-0 right-0 top-[56%] -translate-y-1/2
            scale-[0.88]
          "
        >
          {/* Capa animada horizontalmente */}
          <div
            className="
              cloud-track
              relative w-[1700px] h-auto
              mx-auto
            "
            style={{
              animation: "cloud-pan 42s linear infinite",
            }}
          >
            <img
              src={CLOUD_IMG}
              alt=""
              className="
                block w-full h-auto
                select-none pointer-events-none
                [filter:drop-shadow(0_0_22px_rgba(148,52,236,0.22))_brightness(1.05)_contrast(1.03)]
                cloud-mask
              "
              loading="eager"
              decoding="async"
            />
          </div>
        </div>
      </div>

      {/* Contenido */}
      <div className="relative z-10 mx-auto max-w-[120rem] px-6 md:px-10 pt-20 md:pt-24 lg:pt-28 pb-14 md:pb-24">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          {/* Texto — columna más ancha */}
          <div className="relative z-10 lg:max-w-3xl xl:max-w-4xl">
            <h1 className="text-[46px] leading-[1.08] font-extrabold text-white sm:text-[62px] md:text-[76px]">
              Claridad
              <br />
              aquí y ahora
            </h1>

            <p className="mt-6 text-[38px] sm:text-[46px] md:text-[56px] font-extrabold tracking-tight text-[#CDB6FF]">
              con guías auténticas
            </p>

            <p className="mt-6 max-w-[46rem] text-lg leading-relaxed text-neutral-300">
              Tarot, astrología y oráculos. Agenda en minutos y recibe orientación
              concreta en un espacio cuidado, seguro y sin juicios.
            </p>

            {/* Botones */}
            <div className="mt-9 flex flex-wrap items-center gap-4">
              <a
                href="#"
                className="
                  inline-flex items-center justify-center
                  rounded-2xl px-6 py-4 text-base font-semibold text-white
                  shadow-[0_12px_40px_-10px_rgba(148,52,236,0.55)]
                  transition
                  hover:shadow-[0_12px_48px_-8px_rgba(148,52,236,0.75)]
                "
                style={{ backgroundColor: "#9434EC" }}
              >
                Agendar una consulta
              </a>

              <a
                href="#"
                className="
                  inline-flex items-center justify-center
                  rounded-2xl px-6 py-4 text-base font-semibold
                  border border-white/14 text-white/90
                  bg-white/[0.02]
                  hover:bg-white/[0.05] hover:text-white transition
                "
              >
                Únete como especialista
              </a>
            </div>
          </div>

          {/* Imagen — un poco más grande, movida a la izquierda, con hover */}
          <div className="relative z-10 flex justify-center lg:justify-end">
            <div
              className="
                group relative
                w-[220px] sm:w-[260px] md:w-[300px] lg:w-[340px] xl:w-[380px]
                -translate-x-6 md:-translate-x-10 lg:-translate-x-14 xl:-translate-x-20
                pointer-events-auto select-none
                transition-transform duration-500 will-change-transform
                -rotate-[20deg]
                hover:-rotate-[16deg] hover:scale-[1.05]
                drop-shadow-[0_0_22px_rgba(148,52,236,0.16)]
              "
            >
              {/* Halo adaptable al hover */}
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
                    "radial-gradient(60% 60% at 50% 50%, rgba(148,52,236,0.35) 0%, rgba(148,52,236,0.0) 70%)",
                }}
              />
              <img
                src={HERO_IMG}
                alt="Carta / Símbolo místico"
                className="h-auto w-full"
                loading="eager"
                decoding="async"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Estilos: animación y máscaras de nube */}
      <style jsx>{`
        @keyframes cloud-pan {
          0% {
            transform: translateX(60vw);
          }
          100% {
            transform: translateX(-130vw);
          }
        }
        /* Suaviza arriba/abajo para evitar línea dura y conservar forma */
        .cloud-mask {
          -webkit-mask-image: linear-gradient(
              to bottom,
              transparent 0%,
              #000 10%,
              #000 90%,
              transparent 100%
            );
          mask-image: linear-gradient(
              to bottom,
              transparent 0%,
              #000 10%,
              #000 90%,
              transparent 100%
            );
        }
        /* Evita que el contenedor recorte sombras en la parte baja */
        .cloud-track {
          padding-bottom: 24px; /* un respiro para el blur */
        }
      `}</style>
    </section>
  );
}
