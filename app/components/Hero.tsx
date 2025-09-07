// app/components/Hero.tsx
"use client";

const HERO_IMG = "/brand/hero-card-eye.png"; // cambia el nombre si usas otra imagen
const CLOUD_IMG = "/brand/Nube1.png";       // asegúrate que exista en /public/brand/Nube1.png

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[rgba(23,3,31,1)]">
      {/* Capa de nubes (detrás de todo) */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-0 overflow-hidden"
      >
        <div
          className="
            absolute top-[22%]
            -translate-y-1/2
            opacity-55
            [filter:drop-shadow(0_0_18px_rgba(148,52,236,0.22))_brightness(1.06)]
          "
          style={{
            // La animación mueve la nube de derecha a izquierda continuamente
            animation: "cloud-pan 38s linear infinite",
            // Le damos un ancho grande para cubrir bien el hero
            width: "1250px",
            left: "0",
          }}
        >
          <img
            src={CLOUD_IMG}
            alt=""
            className="select-none pointer-events-none w-full h-auto"
            loading="eager"
            decoding="async"
          />
        </div>
      </div>

      {/* Contenido */}
      <div className="relative z-10 mx-auto max-w-7xl px-6 md:px-10 pt-20 md:pt-24 lg:pt-28 pb-14 md:pb-24">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          {/* Columna texto */}
          <div className="relative z-10">
            <h1 className="text-[42px] leading-[1.1] font-extrabold text-white sm:text-[56px] md:text-[72px]">
              Claridad
              <br />
              aquí y ahora
            </h1>

            <p className="mt-6 text-[36px] sm:text-[42px] md:text-[56px] font-extrabold tracking-tight text-[#CDB6FF]">
              con guías auténticas
            </p>

            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-neutral-300">
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
                style={{ backgroundColor: "#9434EC" /* morado exacto */ }}
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
                  hover:bg-white/[0.05] hover:text-white
                  transition
                "
              >
                Únete como especialista
              </a>
            </div>
          </div>

          {/* Columna imagen (carta / luna+ojo) */}
          <div className="relative z-10 flex justify-center lg:justify-end">
            <div
              className="
                relative
                w-[240px] sm:w-[300px] md:w-[360px] lg:w-[400px] xl:w-[440px]
                -translate-x-6 sm:-translate-x-10 md:-translate-x-14 lg:-translate-x-20 xl:-translate-x-24
                pointer-events-none select-none
                drop-shadow-[0_0_22px_rgba(148,52,236,0.16)]
              "
              aria-hidden="true"
            >
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

      {/* Keyframes de la nube */}
      <style jsx>{`
        @keyframes cloud-pan {
          /* Sale desde fuera del lado derecho y cruza toda la pantalla */
          0% {
            transform: translateX(60vw);
          }
          100% {
            transform: translateX(-130vw);
          }
        }
      `}</style>
    </section>
  );
}
