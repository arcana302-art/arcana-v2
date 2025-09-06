'use client';

import Image from 'next/image';

export default function Hero() {
  return (
    <section
      className="relative w-full overflow-hidden"
      style={{ backgroundColor: 'rgba(23,3,31,1)' }}
    >
      {/* Capa de nubes – detrás de todo */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        {/* Pista que se desplaza de derecha → izquierda */}
        <div className="cloudTrack absolute top-0 right-[-45%] h-full w-[180%] flex items-center">
          <Image
            src="/brand/Nube1.png"
            alt="Nube decorativa"
            width={1600}
            height={600}
            priority
            className="cloudPiece w-[55%] min-w-[900px] opacity-80"
          />
          <Image
            src="/brand/Nube1.png"
            alt="Nube decorativa duplicada"
            width={1600}
            height={600}
            priority
            className="cloudPiece w-[55%] min-w-[900px] opacity-80"
          />
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-6 py-20 sm:py-24 lg:py-28">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          {/* Columna izquierda: texto */}
          <div className="max-w-3xl">
            <h1 className="text-balance font-bold leading-tight text-white tracking-tight text-[48px] sm:text-[64px] lg:text-[72px]">
              Claridad
              <br />
              aquí y ahora
            </h1>

            <p className="mt-5 text-[40px] sm:text-[48px] lg:text-[56px] font-extrabold tracking-tight leading-tight">
              <span className="bg-clip-text text-transparent"
                style={{
                  backgroundImage:
                    'linear-gradient(180deg, rgba(208,191,255,1) 0%, rgba(161,122,248,1) 100%)'
                }}
              >
                con guías auténticas
              </span>
            </p>

            <p className="mt-6 max-w-2xl text-lg/7 text-white/80">
              Tarot, astrología y oráculos. Agenda en minutos y recibe orientación
              concreta en un espacio cuidado, seguro y sin juicios.
            </p>

            {/* Botones */}
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#"
                className="group inline-flex items-center justify-center rounded-2xl px-6 py-4 text-base font-semibold text-white
                           shadow-lg transition duration-200
                           bg-[#9434EC] hover:bg-[#7E2BD1]
                           shadow-[#9434EC]/40 hover:shadow-[#9434EC]/60"
              >
                Agendar una consulta
              </a>

              <a
                href="#"
                className="inline-flex items-center justify-center rounded-2xl px-6 py-4 text-base font-semibold
                           text-white/90 ring-1 ring-white/15 hover:ring-white/25 transition duration-200"
              >
                Únete como especialista
              </a>
            </div>
          </div>

          {/* Columna derecha: carta */}
          <div className="relative flex items-start justify-center lg:justify-end">
            <Image
              src="/brand/hero-card-eye.png"
              alt="Carta Arcana con ojo místico"
              width={520}
              height={720}
              priority
              className="
                w-[280px] sm:w-[320px] md:w-[360px] lg:w-[380px] xl:w-[420px]
                -rotate-6 translate-y-4
                [filter:brightness(0.95)_contrast(1.08)_saturate(1.1)]
                [filter:drop-shadow(0_10px_30px_rgba(0,0,0,0.45))_drop-shadow(0_0_20px_rgba(148,52,236,0.25))]
              "
            />
          </div>
        </div>
      </div>

      {/* Estilos de animación y halo de nube */}
      <style jsx global>{`
        /* Animación derecha → izquierda para la pista de nubes */
        @keyframes cloud-scroll-rtl {
          0%   { transform: translateX(15%); }
          100% { transform: translateX(-45%); }
        }

        .cloudTrack {
          animation: cloud-scroll-rtl 55s linear infinite;
        }

        /* Halo exclusivo de la nube (no afecta al fondo) */
        .cloudPiece {
          filter:
            drop-shadow(0 0 22px rgba(148, 52, 236, 0.35))
            drop-shadow(0 0 48px rgba(148, 52, 236, 0.20));
        }
      `}</style>
    </section>
  );
}
