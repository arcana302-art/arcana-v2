// app/components/Hero.tsx
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section
      className="relative isolate overflow-hidden bg-[#0f1221] py-20 md:py-28"
      aria-label="Hero Arcana"
    >
      {/* --- Viñeta suave sobre todo el hero --- */}
      <div className="pointer-events-none absolute inset-0 opacity-70 [background:radial-gradient(120%_100%_at_center,_rgba(12,14,28,0)_0%,_rgba(12,14,28,0.25)_55%,_rgba(12,14,28,0.75)_100%)]" />

      {/* --- Brillos en esquinas (glow) --- */}
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
            "radial-gradient(closest-side, rgba(250,204,21,0.35), rgba(250,204,21,0) 70%)",
        }}
      />

      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-6 md:grid-cols-2 lg:gap-16">
        {/* --- Texto --- */}
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
              className="inline-flex items-center rounded-xl bg-violet-500 px-5 py-3 text-sm font-medium text-white shadow-[0_8px_30px_rgba(139,92,246,0.35)] transition hover:bg-violet-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-violet-300"
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

        {/* --- Imagen (carta) --- */}
        <div className="relative z-10 flex justify-center md:justify-end">
          {/* Aro de luz detrás de la carta */}
          <div
            aria-hidden
            className="absolute -inset-6 -z-10 rounded-[2rem] opacity-60 blur-2xl"
            style={{
              background:
                "radial-gradient(closest-side, rgba(250,204,21,0.25), rgba(250,204,21,0) 70%)",
            }}
          />

          <Image
            src="/brand/hero-card-eye.png" // 👈 archivo en public/brand/hero-card-eye.png
            alt="Carta Arcana con ojo místico"
            width={420}
            height={560}
            priority
            sizes="(max-width: 768px) 260px, (max-width: 1024px) 340px, 420px"
            className="h-auto w-[260px] drop-shadow-[0_20px_40px_rgba(0,0,0,0.45)] md:w-[340px] lg:w-[420px]"
          />
        </div>
      </div>
    </section>
  );
}
