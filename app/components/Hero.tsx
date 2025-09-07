'use client';

import Image from 'next/image';
import CloudLayer from './CloudLayer';

export default function Hero() {
  return (
    <section className="relative w-full overflow-hidden bg-[#17031F]">
      {/* Nube detrás, z-0 */}
      <CloudLayer />

      {/* Contenido arriba, z-10 */}
      <div className="relative z-10 mx-auto max-w-7xl px-6 py-14 sm:py-18 lg:py-20">
        <div className="grid items-center gap-6 lg:grid-cols-2">
          {/* Texto */}
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

          {/* Carta: más cerca del texto y tamaño reducido */}
          <div className="relative flex items-start justify-center lg:justify-end -mt-4 lg:-mt-2">
            <Image
              src="/brand/hero-card-eye.png"
              alt="Carta Arcana con ojo místico"
              width={360}
              height={500}
              priority
              className="
                w-[150px] sm:w-[180px] md:w-[200px] lg:w-[210px]
                -rotate-6 translate-y-1
              "
              style={{
                filter:
                  'brightness(.92) contrast(1.06) saturate(1.04) drop-shadow(0 8px 24px rgba(0,0,0,.45))',
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
