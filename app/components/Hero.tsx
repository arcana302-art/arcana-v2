'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function Hero() {
  return (
    <section className="hero-surface relative isolate overflow-visible">
      <div className="mx-auto max-w-7xl px-6 pb-24 pt-24 md:pt-28 lg:pb-36">
        {/* Texto */}
        <div className="relative z-10 max-w-2xl lg:max-w-3xl">
          <h1 className="text-white font-extrabold tracking-tight text-5xl sm:text-6xl leading-[1.05]">
            <span className="block">Claridad</span>
            <span className="block">aquí y ahora</span>
            <span className="block text-[#C9B4FF]">con guías auténticas</span>
          </h1>

          <p className="mt-6 text-lg/7 text-white/70 max-w-xl">
            Tarot, astrología y oráculos. Agenda en minutos y recibe orientación
            concreta en un espacio cuidado, seguro y sin juicios.
          </p>

          <div className="mt-8 flex items-center gap-4">
            <Link
              href="#agenda"
              className="btn-primary"
            >
              Agendar una consulta
            </Link>

            <Link
              href="#talent"
              className="btn-secondary"
            >
              Únete como especialista
            </Link>
          </div>
        </div>

        {/* Carta a la derecha (más chica, con sombra suave, sin glow) */}
        <div
          aria-hidden
          className="pointer-events-none absolute right-2 -top-6 md:right-6 md:top-6 lg:right-8 lg:top-4 xl:right-16"
        >
          <div className="relative -right-2 md:-right-4 rotate-6">
            <Image
              src="/brand/hero-card-eye.png"
              alt=""
              width={420}
              height={560}
              priority
              className="
                select-none card-shadow card-float
                w-[210px] sm:w-[260px] md:w-[300px] lg:w-[340px] xl:w-[380px] 2xl:w-[420px]
              "
            />
          </div>
        </div>
      </div>
    </section>
  );
}
