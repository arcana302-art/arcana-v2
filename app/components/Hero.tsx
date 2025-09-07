'use client';

import Image from 'next/image';
import { useMemo } from 'react';

type Star = {
  id: string;
  side: 'left' | 'right';
  top: number;   // en %
  left?: number; // en %
  right?: number;// en %
  size: number;  // px (12–24)
  glow?: number; // 0–1 extra brillo
};

export default function Hero() {
  /** Estrellas fijas: 7 izquierda, 5 derecha.
   *  Todas alejadas de bordes y fuera del área de la carta.
   *  Tamaños variados 12–24 y con glow suave.
   */
  const stars: Star[] = useMemo(
    () => [
      // IZQUIERDA (7) — distribuidas y separadas
      { id: 'L1', side: 'left',  top: 18, left: 8,  size: 16, glow: 0.25 },
      { id: 'L2', side: 'left',  top: 28, left: 14, size: 14, glow: 0.15 },
      { id: 'L3', side: 'left',  top: 36, left: 10, size: 18, glow: 0.25 },
      // Centro-izquierda (la que especificaste en 24px, NO se mueve)
      { id: 'L4_CENTER_24', side: 'left', top: 46, left: 12, size: 24, glow: 0.35 },
      { id: 'L5', side: 'left',  top: 56, left: 7,  size: 13, glow: 0.2  },
      { id: 'L6', side: 'left',  top: 64, left: 15, size: 15, glow: 0.2  },
      { id: 'L7', side: 'left',  top: 72, left: 10, size: 13, glow: 0.15 },

      // DERECHA (5) — separadas y visibles
      { id: 'R1', side: 'right', top: 18, right: 22, size: 16, glow: 0.25 },
      { id: 'R2', side: 'right', top: 30, right: 10, size: 14, glow: 0.2  },
      { id: 'R3', side: 'right', top: 46, right: 15, size: 18, glow: 0.28 },
      { id: 'R4', side: 'right', top: 62, right: 22, size: 14, glow: 0.18 },
      { id: 'R5', side: 'right', top: 72, right: 12, size: 12, glow: 0.15 },
    ],
    []
  );

  return (
    <section
      className="relative isolate overflow-hidden"
      style={{ backgroundColor: 'rgb(23,3,31)' }} // Fondo parejo #17031F
    >
      {/* Contenedor del Hero */}
      <div className="mx-auto w-full max-w-[1200px] px-6 pt-24 pb-8 md:pt-28 lg:pt-32">
        <div className="relative grid grid-cols-1 items-start gap-10 md:grid-cols-2">

          {/* Columna de texto */}
          <div className="z-30">
            <h1 className="text-[48px] leading-[1.05] font-extrabold text-white sm:text-[56px] md:text-[64px]">
              Claridad aquí y ahora
              <br />
              <span className="block text-[#c9a7ff]">
                con guías auténticas
              </span>
            </h1>

            <p className="mt-6 max-w-[42rem] text-[19px] leading-relaxed text-white/80">
              Tarot, astrología y oráculos. Agenda en minutos y recibe orientación
              concreta en un espacio cuidado, seguro y sin juicios.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#consultas"
                className="rounded-2xl bg-[#9434ec] px-6 py-3 text-white shadow-[0_0_28px_rgba(148,52,236,.35)] transition hover:shadow-[0_0_40px_rgba(148,52,236,.55)]"
              >
                Agendar una consulta
              </a>

              <a
                href="#especialistas"
                className="rounded-2xl border border-white/15 bg-white/5 px-6 py-3 text-white/90 backdrop-blur-sm transition hover:bg-white/10"
              >
                Únete como especialista
              </a>
            </div>
          </div>

          {/* Lienzo derecho (estrellas + nube + carta) */}
          <div className="relative min-h-[520px] md:min-h-[560px]">
            {/* ESTRELLAS (al fondo, detrás de la nube y carta) */}
            <div className="pointer-events-none absolute inset-0 z-0">
              {stars.map((s) => (
                <span
                  key={s.id}
                  className="absolute star twinkle pointer-events-none"
                  style={{
                    top: `${s.top}%`,
                    left: s.side === 'left' ? `${s.left}%` : undefined,
                    right: s.side === 'right' ? `${s.right}%` : undefined,
                    width: s.size,
                    height: s.size,
                    // brillo/halo adaptado a la forma con drop-shadow múltiple
                    filter: `drop-shadow(0 0 ${Math.max(6, s.size / 2)}px rgba(255,220,140,${0.45 + (s.glow ?? 0)}))`,
                    opacity: 0.9,
                  }}
                  aria-hidden
                />
              ))}
            </div>

            {/* NUBE (detrás de la carta y el texto; recorre de derecha a izquierda) */}
            <div className="pointer-events-none absolute -inset-x-24 bottom-10 top-6 z-10 overflow-hidden">
              <div className="absolute inset-0 -right-[140%] animate-cloud-marquee">
                <Image
                  src="/brand/Nube1.png"
                  alt=""
                  width={1700}
                  height={700}
                  className="select-none opacity-[.58]"
                  priority
                />
              </div>
            </div>

            {/* CARTA (tamaño/posición restaurados) */}
            <div
              className="
                absolute right-10 md:right-14 lg:right-20
                top-2 md:top-4
                z-20
                [filter:drop-shadow(0_0_28px_rgba(148,52,236,.45))]
                transition-transform
                will-change-transform
              "
              // Carta con inclinación a la derecha de 10° (restaurado) y tamaño estable
              style={{
                transform: 'rotate(10deg)',
                width: '420px',          // desktop
                maxWidth: '42vw',        // responsive
              }}
            >
              <Image
                src="/brand/hero-card-eye.png"
                alt="Carta Arcana"
                width={840}
                height={1260}
                className="h-auto w-full select-none"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* === Estrella SVG como background vía CSS (con borde suave) ===
   Se pinta por CSS en globals.css para que sea liviana.
*/
