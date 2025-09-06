'use client';

import Image from 'next/image';

export default function Hero() {
  return (
    <section className="relative w-full overflow-hidden bg-[#17031F]">
      {/* === NUBE DETRÁS (z-0) === */}
      <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
        {/* Banda 300% con 3 copias para loop continuo y sin huecos */}
        <div className="absolute right-0 top-[20%] h-[60%] w-[300%] cloud-belt flex">
          <img src="/brand/Nube1.png" alt="" className="cloud-img w-1/3" />
          <img src="/brand/Nube1.png" alt="" className="cloud-img w-1/3" />
          <img src="/brand/Nube1.png" alt="" className="cloud-img w-1/3" />
        </div>
      </div>

      {/* === CONTENIDO === */}
      <div className="relative z-10 mx-auto max-w-7xl px-6 py-14 sm:py-18 lg:py-20">
        <div className="grid items-center gap-8 lg:grid-cols-2">
          {/* Texto (reducido) */}
          <div className="max-w-3xl">
            <h1 className="text-white tracking-tight font-bold leading-tight text-[32px] sm:text-[40px] lg:text-[48px]">
              Claridad
              <br />
              aquí y ahora
            </h1>

            <p className="mt-3 font-extrabold tracking-tight leading-tight text-[24px] sm:text-[28px] lg:text-[32px]">
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

            <p className="mt-4 max-w-2xl text-sm sm:text-base lg:text-lg text-white/80">
              Tarot, astrología y oráculos. Agenda en minutos y recibe orientación
              concreta en un espacio cuidado, seguro y sin juicios.
            </p>

            {/* Botones */}
            <div className="mt-6 flex flex-wrap gap-4">
              <a
                href="#agenda"
                className="inline-flex items-center justify-center rounded-2xl px-6 py-3 text-sm sm:text-base font-semibold text-white
                           bg-[#9434EC] hover:bg-[#7E2BD1] transition-colors
                           shadow-lg shadow-[#9434EC]/35 hover:shadow-[#9434EC]/55"
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

          {/* Carta (más pequeña y más cerca) */}
          <div className="relative flex items-start justify-center lg:justify-end">
            <Image
              src="/brand/hero-card-eye.png"
              alt="Carta Arcana con ojo místico"
              width={380}
              height={520}
              priority
              className="
                w-[180px] sm:w-[200px] md:w-[220px] lg:w-[240px]
                -rotate-6 translate-y-2
              "
              style={{
                filter:
                  'brightness(.94) contrast(1.08) saturate(1.05) ' +
                  'drop-shadow(0 8px 24px rgba(0,0,0,.45)) ' +
                  'drop-shadow(0 0 16px rgba(148,52,236,.22))',
              }}
            />
          </div>
        </div>
      </div>

      {/* === Estilos nube === */}
      <style jsx global>{`
        @keyframes cloud-marquee-rtl {
          0% { transform: translateX(0); }
          100% { transform: translateX(-33.333%); }
        }
        .cloud-belt {
          animation: cloud-marquee-rtl 70s linear infinite;
        }
        .cloud-img {
          height: 100%;
          object-fit: contain;
          opacity: 0.9;
          filter:
            drop-shadow(0 0 22px rgba(148, 52, 236, 0.30))
            drop-shadow(0 0 44px rgba(148, 52, 236, 0.18));
          min-width: 800px;
        }
        @media (max-width: 640px) {
          .cloud-img { min-width: 640px; opacity: 0.95; }
        }
      `}</style>
    </section>
  );
}
