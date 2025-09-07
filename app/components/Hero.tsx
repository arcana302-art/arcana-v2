'use client';

import Image from 'next/image';

const HERO_IMG = '/brand/hero-card-eye.png';
const CLOUD_IMG = '/brand/Nube1.png';

// Pequeño componente SVG para la estrella (no hace falta subir imagen)
function Star({
  className = '',
  opacity = 1,
}: {
  className?: string;
  opacity?: number;
}) {
  return (
    <svg
      viewBox="0 0 100 100"
      className={className}
      style={{ opacity }}
      aria-hidden="true"
    >
      {/* 4 puntas tipo “sparkle” */}
      <path
        d="M50 5 L60 40 L95 50 L60 60 L50 95 L40 60 L5 50 L40 40 Z"
        fill="#FBD671"
        // halo suave en la estrella (no afecta al fondo)
        style={{
          filter:
            'drop-shadow(0 0 6px rgba(251,214,113,0.55)) drop-shadow(0 0 14px rgba(251,214,113,0.35))',
        }}
      />
    </svg>
  );
}

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#17031F]">
      {/* Capa de la nube (detrás del contenido) */}
      <div className="pointer-events-none absolute inset-0 z-0">
        <img src={CLOUD_IMG} alt="" className="cloud-img" aria-hidden="true" />
      </div>

      {/* Contenido principal */}
      <div className="relative z-10 mx-auto max-w-7xl px-6 pt-24 pb-16 lg:pt-28 lg:pb-20">
        <div className="grid grid-cols-12 items-center gap-y-12 lg:gap-x-12">
          {/* Texto (sin cambios de estilos/efectos) */}
          <div className="col-span-12 lg:col-span-7 xl:col-span-7">
            <div className="max-w-[560px] sm:max-w-[600px]">
              <h1 className="text-white font-extrabold tracking-tight leading-[0.95] text-[53px] sm:text-[69px]">
                Claridad
                <br />
                aquí y ahora
              </h1>

              <h2 className="mt-2 text-[47px] sm:text-[51px] font-extrabold tracking-tight leading-[1.02] text-[#c9a6ff]">
                con guías auténticas
              </h2>

              <p className="mt-5 text-white/75 text-[19px] sm:text-[20px] leading-relaxed">
                Tarot, astrología y oráculos. Agenda en minutos y recibe
                orientación concreta en un espacio cuidado, seguro y sin
                juicios.
              </p>

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

          {/* Carta + estrellas (solo movida más a la derecha y estrellas añadidas) */}
          <div className="col-span-12 lg:col-span-5 xl:col-span-5 relative flex justify-center lg:justify-start">
            <div
              className="
                group relative
                w-[144px] sm:w-[171px] md:w-[197px] lg:w-[222px] xl:w-[250px]
                translate-x-12 md:translate-x-14 lg:translate-x-16 xl:translate-x-20
                rotate-[10deg]
                transition-transform duration-500 will-change-transform
                hover:rotate-[6deg] hover:scale-[1.05]
                drop-shadow-[0_0_22px_rgba(148,52,236,0.16)]
                select-none
              "
            >
              {/* Estrellas – más cargadas a la derecha de la carta */}
              <div className="pointer-events-none absolute inset-0 z-10">
                {/* derecha alta */}
                <Star className="absolute -right-10 -top-6 w-[26px]" opacity={0.95} />
                <Star className="absolute right-1 -top-10 w-[18px]" opacity={0.9} />
                <Star className="absolute -right-6 top-14 w-[22px]" opacity={0.85} />
                {/* medio-derecha */}
                <Star className="absolute -right-14 top-28 w-[34px]" opacity={0.9} />
                <Star className="absolute right-4 top-36 w-[16px]" opacity={0.75} />
                {/* izquierda cercana (pocas para balance) */}
                <Star className="absolute -left-6 top-4 w-[14px]" opacity={0.7} />
                <Star className="absolute -left-10 top-28 w-[20px]" opacity={0.75} />
                {/* baja derecha */}
                <Star className="absolute -right-12 bottom-10 w-[24px]" opacity={0.9} />
                <Star className="absolute right-2 bottom-3 w-[16px]" opacity={0.8} />
              </div>

              {/* Carta (sin cambios de tamaño/efectos) */}
              <Image
                src={HERO_IMG}
                alt="Carta / símbolo místico"
                width={700}
                height={980}
                priority
                className="
                  h-auto w-full relative z-20
                  drop-shadow-[0_0_18px_rgba(148,52,236,0.32)]
                  drop-shadow-[0_0_36px_rgba(148,52,236,0.16)]
                "
              />
            </div>
          </div>
        </div>
      </div>

      {/* Estilos locales: nube sin cortes y animación RTL (sin cambios) */}
      <style jsx>{`
        .cloud-img {
          position: absolute;
          top: 7.5%;
          left: 110%;
          width: 960px;
          max-width: none;
          opacity: 0.5;
          filter: none;
          -webkit-mask-image: radial-gradient(
            145% 125% at 56% 46%,
            #000 62%,
            transparent 100%
          );
          mask-image: radial-gradient(
            145% 125% at 56% 46%,
            #000 62%,
            transparent 100%
          );
          animation: cloud-rtl 42s linear infinite;
        }

        @media (min-width: 1024px) {
          .cloud-img {
            top: 7%;
            width: 1080px;
            -webkit-mask-image: radial-gradient(
              150% 130% at 56% 46%,
              #000 62%,
              transparent 100%
            );
            mask-image: radial-gradient(
              150% 130% at 56% 46%,
              #000 62%,
              transparent 100%
            );
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
