// app/components/Hero.tsx
"use client";

export default function Hero() {
  return (
    <section
      className="
        relative overflow-hidden
        bg-[rgba(23,3,31,1)]
      "
    >
      <div
        className="
          mx-auto max-w-7xl
          px-6 md:px-10
          pt-20 md:pt-24 lg:pt-28
          pb-14 md:pb-24
        "
      >
        <div
          className="
            grid items-center gap-10
            lg:grid-cols-2
          "
        >
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
                  hover:bg-white/[0.05] hover:text-white
                  transition
                "
              >
                Únete como especialista
              </a>
            </div>
          </div>

          {/* Columna imagen (carta) */}
          <div className="relative z-0 flex justify-center lg:justify-end">
            <div
              className="
                relative
                w-[300px] sm:w-[360px] md:w-[420px] lg:w-[480px] xl:w-[520px]
                -translate-x-6 sm:-translate-x-10 md:-translate-x-14 lg:-translate-x-20 xl:-translate-x-24 2xl:-translate-x-28
                pointer-events-none select-none
                drop-shadow-[0_0_28px_rgba(148,52,236,0.18)]
              "
              aria-hidden="true"
            >
              <img
                src="/brand/hero-card-eye.png"
                alt="Carta Arcana con ojo místico"
                className="h-auto w-full rounded-[22px]"
                loading="eager"
                decoding="async"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
