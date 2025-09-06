'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function Hero() {
  return (
    <section className="relative bg-[#17031F]">
      {/* NUBES: detrás del contenido */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-0 overflow-hidden"
      >
        {/* Pista de nubes, se anima con translateX */}
        <div className="absolute left-0 top-0 h-full w-[260%] cloudTrack">
          {/* Usamos la misma nube en 2 "copias" para lograr loop continuo */}
          <img
            src="/brand/Nube1.png"
            alt=""
            className="cloudPiece cloudA"
            style={{
              top: '14%',
              width: '900px',
            }}
          />
          <img
            src="/brand/Nube1.png"
            alt=""
            className="cloudPiece cloudB"
            style={{
              top: '58%',
              width: '1000px',
              opacity: 0.65,
            }}
          />
        </div>
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 py-16 sm:py-18 lg:py-20">
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

            {/* Botones */}
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Link
                href="#agenda"
                className="inline-flex items-center justify-center rounded-2xl bg-[#9434EC] px-6 py-4 text-base font-semibold text-white transition-colors hover:opacity-90"
              >
                Agendar una consulta
              </Link>

              <Link
                href="#unete"
                className="inline-flex items-center justify-center rounded-2xl border border-white/20 bg-transparent px-6 py-4 text-base font-semibold text-white transition-colors hover:bg-white/5"
              >
                Únete como especialista
              </Link>
            </div>
          </div>

          {/* Carta */}
          <div className="flex justify-end">
            <Image
              src="/brand/hero-card-eye.png"
              alt="Carta Arcana con ojo místico"
              width={260}
              height={360}
              priority
              className={[
                'w-[180px] sm:w-[200px] md:w-[220px] lg:w-[240px] xl:w-[260px]',
                'rotate-[-6deg]',
                // Ajuste fino de tonos para armonizar con #9434EC
                'brightness-[0.95] contrast-[1.07] saturate-[1.08] hue-rotate-[8deg]',
              ].join(' ')}
            />
          </div>
        </div>
      </div>

      {/* Estilos para la animación y brillo de la nube */}
      <style jsx global>{`
        @keyframes cloud-scroll {
          0% {
            transform: translateX(-35%);
          }
          100% {
            transform: translateX(-5%);
          }
        }

        /* Contenedor que se anima, muy ancho para que la nube camine por detrás */
        .cloudTrack {
          animation: cloud-scroll 55s linear infinite;
        }

        /* Cada imagen de nube: sólo brillo alrededor de su alfa (no toca el fondo) */
        .cloudPiece {
          position: absolute;
          left: 0;
          /* halo morado sutil + uno más suave y grande */
          filter:
            drop-shadow(0 0 22px rgba(148, 52, 236, 0.35))
            drop-shadow(0 0 48px rgba(148, 52, 236, 0.2));
          opacity: 0.8;
        }

        /* Desfase para que el loop sea continuo */
        .cloudA {
          animation: cloud-scroll 55s linear infinite;
        }
        .cloudB {
          animation: cloud-scroll 55s linear infinite;
          animation-delay: -27.5s; /* mitad del tiempo para intercalar */
        }
      `}</style>
    </section>
  );
}
