// app/components/HowItWorks.tsx
function ConnectorArrow() {
  return (
    <svg
      viewBox="0 0 120 16"
      width="120"
      height="16"
      aria-hidden="true"
      className="text-[#c9a6ff]/40"
    >
      <defs>
        <linearGradient id="howitworks-grad" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#c9a6ff" stopOpacity="0.0" />
          <stop offset="60%" stopColor="#c9a6ff" stopOpacity="0.55" />
          <stop offset="100%" stopColor="#9434ec" stopOpacity="0.7" />
        </linearGradient>
        <filter id="howitworks-glow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur in="SourceGraphic" stdDeviation="1.2" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      <g filter="url(#howitworks-glow)">
        <path
          d="M2 8 H102"
          stroke="url(#howitworks-grad)"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          d="M98 3 L116 8 L98 13"
          fill="none"
          stroke="url(#howitworks-grad)"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
    </svg>
  );
}

export default function HowItWorks() {
  const steps = [
    {
      n: '1',
      title: 'Elige a tu Guía Espiritual',
      desc:
        'Explora sus talentos y lee las experiencias de otros usuarios. Confía en tu intuición.',
    },
    {
      n: '2',
      title: 'Agenda tu Sesión',
      desc:
        'Explora el calendario y reserva el espacio para tu encuentro espiritual.',
    },
    {
      n: '3',
      title: 'Recibe tu lectura',
      desc:
        'Obtén respuestas claras, en una sesión privada y de conexión auténtica.',
    },
  ];

  return (
    <section id="como-funciona" className="relative bg-[#17031F]">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:py-20">
        {/* Título y subtítulo (sin cambios estructurales) */}
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
            El camino hacia tus respuestas es más fácil de lo que imaginas
          </h2>
          <p className="mt-4 text-white/75 text-base sm:text-lg leading-relaxed">
            Cada paso está diseñado para que tu experiencia sea segura, privada y profundamente reveladora.
          </p>
        </div>

        {/* Conector visual (solo desktop) */}
        <div className="relative mt-12">
          <div className="pointer-events-none absolute inset-x-0 top-1/2 hidden -translate-y-1/2 items-center justify-between px-6 lg:flex">
            <ConnectorArrow />
            <ConnectorArrow />
          </div>

          {/* Pasos */}
          <div className="relative grid gap-6 sm:gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {steps.map((s) => (
              <div
                key={s.n}
                className="relative z-[1] rounded-2xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-sm transition hover:bg-white/[0.05]"
              >
                {/* Número minimalista */}
                <div className="mb-4 inline-flex h-9 w-9 items-center justify-center rounded-full ring-1 ring-[#c9a6ff]/25 bg-[#9434ec]/12 text-[#c9a6ff] font-semibold">
                  {s.n}
                </div>

                <h3 className="text-white font-semibold text-lg">{s.title}</h3>
                <p className="mt-2 text-white/70 text-sm leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
