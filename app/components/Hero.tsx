"use client";

import Image from "next/image";
import { useMemo } from "react";

/**
 * NOTA IMPORTANTE
 * ----------------
 * - No se modificó nada del layout, carta, nube, textos ni efectos.
 * - ÚNICAMENTE se ajustó la distribución/tamaño de las estrellas:
 *   • 7 a la izquierda (una de ellas –la central– a 24px)
 *   • 5 a la derecha
 * - Las estrellas están siempre DETRÁS de la carta y la nube pasa por delante.
 */

type StarSpec = {
  id: string;
  top: string;   // porcentaje relativo al contenedor del hero
  left?: string; // para lado izquierdo
  right?: string; // para lado derecho
  size: number;  // px
  delay?: number; // s
  duration?: number; // s
  intensity?: number; // 0..1 extra glow
};

function Star({
  spec,
}: {
  spec: StarSpec;
}) {
  // Parpadeo sutil + halo (no interactúa con el mouse, va detrás de todo)
  const style: React.CSSProperties = {
    top: spec.top,
    left: spec.left,
    right: spec.right,
    width: spec.size,
    height: spec.size,
    // sutil diferencia de tiempos para que no “lateen” al unísono
    animationDelay: `${spec.delay ?? 0}s`,
    animationDuration: `${spec.duration ?? 3.8}s`,
    // halo más o menos intenso según tamaño
    filter: `drop-shadow(0 0 ${
      Math.max(4, Math.round(spec.size * 0.45))
    }px rgba(251,214,113,${0.45 + (spec.intensity ?? 0) * 0.35}))`,
  };

  return (
    <svg
      viewBox="0 0 100 100"
      className="pointer-events-none absolute z-0 animate-star-flicker"
      style={style}
      aria-hidden
    >
      {/* Estrella de 4 puntas (suave), relleno dorado */}
      <polygon
        points="50,0 62,38 100,50 62,62 50,100 38,62 0,50 38,38"
        fill="#FBD671"
      />
    </svg>
  );
}

export default function Hero() {
  /**
   * Estrellas
   * ---------
   * - Mantengo 12 en total: 7 izquierda, 5 derecha.
   * - La estrella del *centro* del lado izquierdo queda en 24px (id: L4) y NO se mueve.
   * - Las demás se separan para que no se vean apiladas ni alineadas.
   */
  const { leftStars, rightStars } = useMemo(() => {
    // IZQUIERDA (7). Coordenadas en % respecto al hero (no tocan texto).
    const left: StarSpec[] = [
      { id: "L1", top: "18%", left: "50%", size: 14, delay: 0.2, duration: 3.9 },
      { id: "L2", top: "25%", left: "55%", size: 16, delay: 1.0, duration: 4.1 },
      { id: "L3", top: "33%", left: "52%", size: 14, delay: 2.0, duration: 4.0 },

      // ⭐ La estrella CENTRAL del lado izquierdo (la de tu captura). Fija en 24px.
      { id: "L4", top: "42%", left: "48%", size: 24, delay: 0.6, duration: 3.8, intensity: 1 },

      { id: "L5", top: "56%", left: "51%", size: 15, delay: 1.6, duration: 4.2 },
      { id: "L6", top: "64%", left: "57%", size: 18, delay: 0.8, duration: 3.7 },
      { id: "L7", top: "72%", left: "53%", size: 16, delay: 2.4, duration: 4.3 },
    ];

    // DERECHA (5). Distribuidas sin tocar bordes ni superponerse a la carta.
    const right: StarSpec[] = [
      { id: "R1", top: "14%", right: "13%", size: 14, delay: 0.3, duration: 3.9 },
      { id: "R2", top: "26%", right: "8%",  size: 16, delay: 1.3, duration: 4.0 },
      { id: "R3", top: "44%", right: "6%",  size: 20, delay: 2.1, duration: 4.1, intensity: 0.6 },
      { id: "R4", top: "61%", right: "9%",  size: 14, delay: 0.9, duration: 3.8 },
      { id: "R5", top: "76%", right: "14%", size: 18, delay: 1.9, duration: 4.2 },
    ];

    return { leftStars: left, rightStars: right };
  }, []);

  return (
    <section
      className="relative isolate overflow-hidden"
      style={{
        backgroundColor: "rgba(23,3,31,1)", // fondo parejo
      }}
    >
      <div className="relative mx-auto max-w-[120rem] px-6 pt-24 pb-20 md:px-10 xl:px-16">
        {/* Capa de ESTRELLAS – detrás de todo */}
        <div className="pointer-events-none absolute inset-0 z-0">
          {leftStars.map((s) => (
            <Star key={s.id} spec={s} />
          ))}
          {rightStars.map((s) => (
            <Star key={s.id} spec={s} />
          ))}
        </div>

        {/* NUBE – detrás de la carta, delante de las estrellas */}
        <div
          className="pointer-events-none absolute inset-x-0 bottom-[6vh] z-10 h-[34vh] overflow-visible"
          aria-hidden
        >
          <div className="relative h-full w-[220vw] -translate-x-[15vw] animate-cloud select-none">
            <Image
              src="/brand/Nube1.png"
              alt=""
              fill
              className="object-contain opacity-85 [mix-blend:screen] [mask-image:radial-gradient(60%_60%_at_50%_55%,black_70%,transparent_100%)]"
              priority
            />
          </div>
        </div>

        {/* GRID de contenido */}
        <div className="relative z-20 grid grid-cols-12 items-center gap-6">
          {/* Texto */}
          <div className="col-span-12 md:col-span-6 xl:col-span-6 2xl:col-span-6">
            <h1 className="text-balance text-[clamp(2.4rem,4.5vw,5.6rem)] font-extrabold leading-[1.05] tracking-[-0.02em] text-white">
              Claridad
              <br />aquí y ahora
              <br />
              <span className="text-[#caa6ff]">con guías auténticas</span>
            </h1>

            <p className="mt-6 max-w-[62ch] text-[clamp(1.05rem,1.2vw,1.25rem)] leading-relaxed text-[#d7cae6]">
              Tarot, astrología y oráculos. Agenda en minutos y recibe orientación
              concreta en un espacio cuidado, seguro y sin juicios.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#"
                className="rounded-2xl bg-[#9434ec] px-7 py-4 text-white shadow-[0_0_28px_rgba(148,52,236,0.35)] transition-colors hover:bg-[#8b2be6]"
              >
                Agendar una consulta
              </a>
              <a
                href="#"
                className="rounded-2xl border border-white/15 bg-white/5 px-7 py-4 text-white backdrop-blur-sm transition-colors hover:bg-white/10"
              >
                Únete como especialista
              </a>
            </div>
          </div>

          {/* Carta – NO se toca (mismo tamaño/rotación/glow) */}
          <div className="relative col-span-12 md:col-span-6 xl:col-span-6 2xl:col-span-6">
            <div
              className="
                pointer-events-auto relative mx-auto w-[min(520px,42vw)]
                rotate-[10deg]
                transition-transform duration-500
                [filter:drop-shadow(0_0_24px_rgba(148,52,236,0.32))]
                hover:[filter:drop-shadow(0_0_32px_rgba(148,52,236,0.50))]
              "
              // la carta está a la derecha (no cambiamos tamaño/efectos)
              style={{ right: "-1.8vw" }}
            >
              <Image
                src="/brand/hero-card-eye.png"
                alt="Carta"
                width={1024}
                height={1408}
                priority
                className="select-none rounded-[22px]"
                draggable={false}
              />
              {/* halo envolvente que se adapta a la forma de la carta */}
              <div className="pointer-events-none absolute inset-0 rounded-[22px] ring-0 [box-shadow:0_0_32px_6px_rgba(148,52,236,0.35)]"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
