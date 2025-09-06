'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function Hero() {
  return (
    <section className="relative bg-[#0B1120]">
      <div className="mx-auto max-w-7xl px-6 py-16 sm:py-18 lg:py-20">
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

            {/* Botones: primario #9434EC y secundario transparente */}
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

          {/* Ilustración (sin overlays/efectos de fondo) */}
          <div className="flex justify-end">
            <Image
              src="/brand/hero-card-eye.png"
              alt="Carta Arcana con ojo místico"
              width={260}
              height={360}
              priority
              className={[
                // tamaño final (más pequeño)
                'w-[180px] sm:w-[200px] md:w-[220px] lg:w-[240px] xl:w-[260px]',
                // ligera inclinación como referencia anterior
                'rotate-[-6deg]',
                // SOLO ajuste de color por filtro (sin cuadros encima)
                // busca que el morado sea más cercano al #9434EC
                'brightness-[0.95] contrast-[1.07] saturate-[1.08] hue-rotate-[8deg]',
                // sin sombras ni brillos extra
              ].join(' ')}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
