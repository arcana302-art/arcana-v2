// app/components/Hero.tsx
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section
      className="relative isolate bg-arcana-hero overflow-hidden py-20 md:py-28"
      aria-label="Hero Arcana"
    >
      {/* Capa de viñeta suave */}
      <div className="pointer-events-none absolute inset-0 opacity-70 bg-arcana-vignette" />

      {/* Glows en esquinas */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-24 -right-24 h-80 w-80 rounded-full opacity-50 blur-3xl"
        style={{
          background:
            "radial-gradient(closest-side, rgba(167,139,250,0.35), rgba(167,139,250,0) 70%)",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-24 -left-24 h-80 w-80 rounded-full opacity-50 blur-3xl"
        style={{
          background:
            "radial-gradient(closest-side, rgba(246,207,74,0.35), rgba(246,207,74,0) 70%)",
        }}
      />

      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-6 md:grid-cols-2 lg:gap-16">
        {/* Texto */}
        <div className="relative z-10">
          <h1 className="text-balance text-4xl font-extrabold leading-[1.05] text-white md:text-6xl">
            Claridad aquí y ahora
            <br />
            <span className="text-violet-300">con guías auténticas</span>
          </h1>

          <p className="mt-6 max-w-2xl text-pretty text-base leading-relaxed text-slate-300 md:text-lg">
            Tarot, astrología y oráculos. Agenda en minutos y recibe orientación
            concreta en un espacio cuidado, seguro y sin juicios.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="#agenda"
              className="inline-flex items-center rounded-xl bg-[var(--arcana-primary)] px-5 py-3 text-sm font-medium text-white shadow-[0_8px_30px_rgba(124,58,237,0.45)] transition hover:bg-[var(--arcana-primary-600)] focus:outline-none focus-visible:ring-2 focus-visible:ring-violet-300"
            >
              Agendar una consulta
            </Link>

            <Link
              href="/especialistas"
              className="inline-flex items-center rounded-xl border border-white/10 bg-white/5 px-5 py-3 text-sm font-medium text-slate-200 backdrop-blur transition hover:bg-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-violet-300"
            >
              Únete como especialista
            </Link>
          </div>
        </div>

        {/* Imagen (carta) */}
        <div className="relative z-10 flex justify-center md:justify-end">
          {/* Halo detrás de la carta */}
          <div
            aria-hidden
            className="absolute right-2 top-6 -z-10 h-[85%] w-[85%] max-w-[380px] rounded-[2rem] opacity-70 blur-2xl"
            style={{
              background:
                "radial-gradient(closest-side, rgba(246,207,74,0.28), rgba(246,207,74,0) 70%)",
            }}
          />
          <Image
            src="/brand/hero-card-eye.png" // asegúrate que exista en /public/brand/
            alt="Carta Arcana con ojo místico"
            width={420}
            height={560}
            priority
            sizes="(max-width: 768px) 240px, (max-width: 1024px) 320px, 360px"
            className="h-auto w-[240px] drop-shadow-[0_20px_40px_rgba(0,0,0,0.45)] md:w-[320px] lg:w-[360px]"
          />
        </div>
      </div>
    </section>
  );
}
