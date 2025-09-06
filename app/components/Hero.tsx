'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#0B1120]">
      {/* Fondo suave y UNIFORME (sin líneas) */}
      <div aria-hidden className="pointer-events-none absolute -inset-28">
        <div
          className="h-full w-full"
          style={{
            background: `
              radial-gradient(1200px 700px at -10% -10%, rgba(155,135,255,.08) 0%, rgba(11,17,32,0) 60%),
              radial-gradient(900px 600px at 115% 15%, rgba(124,77,255,.12) 0%, rgba(11,17,32,0) 55%)
            `,
          }}
        />
      </div>

      <div className="mx-auto max-w-7xl px-6 py-14 sm:py-16 lg:py-20">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          {/* Texto */}
          <div>
            <h1 className="text-5xl font-extrabold leading-[1.05] tracking-tight text-white sm:text-6xl">
              Claridad
              <br />
              aquí y ahora
            </h1>

            <p className="mt-6 text-4xl font-extrabold leading-[1.1] tracking-tight text-[#C8B6FF] sm:text-5xl">
              con guías auténticas
            </p>

            <p className="mt-6 max-w-2xl text-lg/7 text-white/80">
              Tarot, astrología y oráculos. Agenda en minutos y recibe orientación
              concreta en un espacio cuidado, seguro y sin juicios.
            </p>

            {/* Botones (igual que antes) */}
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Link
                href="#agenda"
                className={[
                  'inline-flex items-center justify-center',
                  'rounded-2xl px-6 py-4 text-base font-semibold text-white',
                  'bg-gradient-to-b from-[#9F66FF] to-[#7C4DFF]',
                  'shadow-[0_18px_40px_-10px_rgba(124,58,237,.45)] ring-1 ring-white/10',
                  'transition will-change-transform',
                  'hover:brightness-110 hover:shadow-[0_22px_60px_-12px_rgba(124,58,237,.6)]',
                  'active:translate-y-[1px]',
                ].join(' ')}
              >
                Agendar una consulta
              </Link>

              <Link
                href="#unete"
                className={[
                  'inline-flex items-center justify-center',
                  'rounded-2xl px-6 py-4 text-base font-semibold text-white',
                  'border border-white/12 bg-white/5 backdrop-blur-[2px]',
                  'transition hover:bg-white/8',
                ].join(' ')}
              >
                Únete como especialista
              </Link>
            </div>
          </div>

          {/* Ilustración */}
          <div className="relative">
            <div className="group relative ml-auto max-w-[520px] pr-2 sm:pr-4">
              {/* Glow morado sutil detrás (sin halo blanco) */}
              <span
                aria-hidden
                className="absolute -inset-8 z-0 rounded-[30px] bg-[#7C4DFF] opacity-25 blur-2xl transition group-hover:opacity-35"
              />

              {/* Imagen */}
              <Image
                src="/brand/hero-card-eye.png"
                alt="Carta Arcana con ojo místico"
                width={380}
                height={520}
                priority
                className={[
                  'relative z-10',
                  // tamaño final (ya reducido); puedes tocar estos valores si quieres más pequeño
                  'w-[150px] sm:w-[180px] md:w-[210px] lg:w-[240px] xl:w-[270px]',
                  // posicionamiento: más cerca del texto y un poco más abajo
                  'translate-y-8 md:translate-y-10 md:-mr-6 lg:-mr-2',
                  'rotate-[-6deg]',
                  // “oscuro pero con vida” (sin lavar colores)
                  'brightness-[.9] contrast-[1.18] saturate-[1.12]',
                  // sombra morada suave
                  'drop-shadow-[0_14px_38px_rgba(124,58,237,.35)]',
                  // hover parecido al botón
                  'transition-all duration-300 group-hover:brightness-105 group-hover:rotate-[-5deg] group-hover:drop-shadow-[0_18px_60px_rgba(124,58,237,.5)]',
                ].join(' ')}
              />

              {/* Tinte con el MISMO gradiente del botón para igualar color */}
              <span
                aria-hidden
                className={[
                  'pointer-events-none absolute inset-0 z-20 rounded-[24px]',
                  'bg-gradient-to-b from-[#9F66FF] to-[#7C4DFF]',
                  'opacity-60 group-hover:opacity-70',
                  'mix-blend-color', // clave: empareja el morado a la paleta de los botones
                ].join(' ')}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
