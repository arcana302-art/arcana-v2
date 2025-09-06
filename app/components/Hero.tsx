export default function Hero() {
  return (
    <section className="relative isolate overflow-hidden px-6 py-24 sm:py-28">
      <div className="mx-auto max-w-6xl grid gap-12 md:grid-cols-2 items-center">
        {/* Texto */}
        <div className="text-center md:text-left">
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-white">
            Lecturas en vivo con{" "}
            <span className="text-brand-primary">guía que sí ilumina</span>
          </h1>
          <p className="mt-5 text-lg text-white/70 max-w-xl">
            Tarot, Astrología, Numerología y más. Agenda en minutos y conéctate
            por videollamada en un entorno seguro y cuidado.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-4 sm:items-center">
            <a
              href="#agenda"
              className="inline-flex items-center justify-center rounded-xl bg-brand-primary px-6 py-3 text-white font-medium shadow-glow transition hover:bg-brand-primary/90 focus:outline-none focus:ring-2 focus:ring-brand-primaryAccent"
            >
              Agendar una consulta
            </a>
            <a
              href="/apply"
              className="inline-flex items-center justify-center rounded-xl border border-white/15 bg-white/5 px-6 py-3 text-white font-medium backdrop-blur transition hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-brand-primaryAccent"
            >
              Únete como especialista
            </a>
          </div>
        </div>

        {/* Ilustración: luna + ojo (SVG inline, minimal) */}
        <div className="relative mx-auto w-[440px] max-w-full">
          <svg
            viewBox="0 0 400 400"
            className="w-full drop-shadow-[0_20px_60px_rgba(124,58,237,0.35)]"
          >
            <defs>
              {/* Máscara para crear la luna creciente */}
              <mask id="crescentMask">
                <rect width="400" height="400" fill="white" />
                <circle cx="215" cy="170" r="110" fill="black" />
              </mask>
            </defs>

            {/* Disco base */}
            <circle cx="190" cy="190" r="120" fill="#1A2236" opacity="0.7" />
            {/* Luna creciente */}
            <circle
              cx="170"
              cy="170"
              r="120"
              fill="#E9C46A"
              mask="url(#crescentMask)"
            />

            {/* Ojo místico */}
            <ellipse
              cx="200"
              cy="245"
              rx="120"
              ry="58"
              fill="none"
              stroke="#E9C46A"
              strokeWidth="6"
            />
            <ellipse
              cx="200"
              cy="245"
              rx="78"
              ry="36"
              fill="none"
              stroke="#E9C46A"
              strokeWidth="3"
              opacity="0.6"
            />
            <circle cx="200" cy="245" r="22" fill="#7C3AED" />
            <circle cx="200" cy="245" r="8" fill="#0B1020" />

            {/* Rayitos */}
            {Array.from({ length: 14 }).map((_, i) => {
              const a = (i / 14) * Math.PI * 2;
              const x1 = 200 + Math.cos(a) * 145;
              const y1 = 245 + Math.sin(a) * 65;
              const x2 = 200 + Math.cos(a) * 165;
              const y2 = 245 + Math.sin(a) * 78;
              return (
                <line
                  key={i}
                  x1={x1}
                  y1={y1}
                  x2={x2}
                  y2={y2}
                  stroke="#E9C46A"
                  strokeWidth="3"
                  strokeLinecap="round"
                  opacity="0.9"
                />
              );
            })}
          </svg>
        </div>
      </div>

      {/* Neblina/sutil brillo */}
      <div className="pointer-events-none absolute inset-0 -z-10 opacity-40">
        <div className="absolute -left-40 -top-40 h-80 w-80 rounded-full bg-brand-primary blur-3xl" />
        <div className="absolute -right-40 -bottom-40 h-80 w-80 rounded-full bg-brand-primaryAccent blur-3xl" />
      </div>
    </section>
  );
}
