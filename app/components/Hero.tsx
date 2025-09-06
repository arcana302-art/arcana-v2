'use client';

import Image from 'next/image';

export default function Hero() {
  return (
    <section className="relative w-full overflow-hidden bg-[#17031F]">
      {/* === NUBE: detrás del contenido === */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        {/* Cinta doble (200%) para loop continuo, se anima de derecha → izquierda */}
        <div className="absolute left-0 top-[28%] h-[44%] w-[200%] cloud-belt">
          <div className="cloud-strip">
            <img
              src="/brand/Nube1.png"
              alt=""
              className="cloud-img"
            />
            <img
              src="/brand/Nube1.png"
              alt=""
              className="cloud-img"
            />
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-6 py-16 sm:py-20 lg:py-24">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          {/* Texto (reducido) */}
          <div className="max-w-3xl">
            <h1 className="text-white tracking-tight font-bold leading-tight text-[36px] sm:text-[44px] lg:text-[52px]">
              Claridad
              <br />
              aquí y ahora
            </h1>

            <p className="mt-4 font-extrabold tracking-tight leading-tight text-[26px] sm:text-[32px] lg:text-[36px]">
              <span
                className="bg-clip-text text-transparent"
                style={{
                  backgroundImage:
                    'linear-gradient(180deg, rgba(208,191,255,1) 0%, rgba(161,122,248,1) 100%)',
                }}
              >
                con guías auténticas
              </span>
            </p>

            <p className="mt-5 max-w-2xl text-base sm:text-lg text-white/80">
              Tarot, astrología y oráculos. Agenda en minutos y recibe orientación
              concreta en un espacio cuidado, seguro y sin juicios.
            </p>

            {/* Botones (morado + outline) */}
            <div className="mt-7 flex flex-wrap gap-4">
              <a
                href="#agenda"
                className="inline-flex items-center justify-center rounded-2xl px-6 py-3 text-sm sm:text-base font-semibold text-white
                           bg-[#9434EC] hover:bg-[#7E2BD1] transition-colors shadow-lg shadow-[#9434EC]/35 hover:shadow-[#9434EC]/55"
              >
                Agendar una consulta
              </a>

              <a
                href="#unete"
                className="inline-flex items-center justify-center rounded-2xl px-6 py-3 text-sm sm:text-base font-semibold
                           text-white/90 ring-1 ring-white/15 hover:ring-white/25 transition"
              >
                Únete como especialista
              </a>
            </div>
          </div>

          {/* Carta (30% más pequeña aprox) y más pegada al texto */}
          <div className="relative flex items-start justify-center lg:justify-end">
            <Image
              src="/brand/hero-card-eye.png"
              alt="Carta Arcana con ojo místico"
              width={420}
              height={560}
              priority
              className="
                w-[200px] sm:w-[220px] md:w-[240px] lg:w-[260px]
                -rotate-6 translate-y-2
                [filter:brightness(0.95)_contrast(1.08)_saturate(1.05)]
                [filter:drop-shadow(0_8px_24px_rgba(0,0,0,0.45))_drop-shadow(0_0_16px_rgba(148,52,236,0.22))]
              "
            />
          </div>
        </div>
      </div>

      {/* === Estilos de la nube y animación === */}
      <style jsx global>{`
        /* Marquee derecha → izquierda: la tira de 200% avanza -50% para repetir */
        @keyframes cloud-marquee-rtl {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }

        .cloud-belt {
          /* la banda completa se anima en loop */
          animation: cloud-marquee-rtl 60s linear infinite;
        }

        .cloud-strip {
          display: flex;
          width: 200%;
          height: 100%;
        }

        .cloud-img {
          width: 50%;
          min-width: 900px;       /* asegura cobertura en pantallas grandes */
          object-fit: contain;
          opacity: 0.85;
          /* halo propio (no afecta el fondo) */
          filter:
            drop-shadow(0 0 22px rgba(148, 52, 236, 0.32))
            drop-shadow(0 0 44px rgba(148, 52, 236, 0.18));
        }

        /* Ajustes responsivos finos para la nube */
        @media (max-width: 640px) {
          .cloud-img { min-width: 750px; opacity: 0.9; }
        }
      `}</style>
    </section>
  );
}
