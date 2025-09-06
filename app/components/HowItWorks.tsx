// app/components/HowItWorks.tsx
export default function HowItWorks() {
  const steps = [
    {
      num: "1",
      title: "Elige tu talento",
      desc:
        "Explora categorías y perfiles verificados. Lee reseñas reales y encuentra a tu especialista ideal.",
      icon: (
        <svg viewBox="0 0 24 24" className="h-6 w-6" fill="currentColor">
          <path d="M12 2a5 5 0 0 1 5 5v2h1a2 2 0 0 1 2 2v7a4 4 0 0 1-4 4H8a4 4 0 0 1-4-4v-7a2 2 0 0 1 2-2h1V7a5 5 0 0 1 5-5zm3 7V7a3 3 0 1 0-6 0v2h6z" />
        </svg>
      ),
    },
    {
      num: "2",
      title: "Agenda y paga",
      desc:
        "Reserva en minutos, con confirmación inmediata y pagos protegidos.",
      icon: (
        <svg viewBox="0 0 24 24" className="h-6 w-6" fill="currentColor">
          <path d="M7 2a1 1 0 0 1 1 1v1h8V3a1 1 0 1 1 2 0v1h1a2 2 0 0 1 2 2v3H3V6a2 2 0 0 1 2-2h1V3a1 1 0 0 1 1-1zM3 10h18v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-8zm5 3a1 1 0 1 0 0 2h8a1 1 0 1 0 0-2H8z" />
        </svg>
      ),
    },
    {
      num: "3",
      title: "Conéctate online",
      desc:
        "Videollamada integrada, sin complicaciones. Un espacio cuidado para tu lectura.",
      icon: (
        <svg viewBox="0 0 24 24" className="h-6 w-6" fill="currentColor">
          <path d="M3 6a3 3 0 0 1 3-3h7a3 3 0 0 1 3 3v2l3-2v12l-3-2v2a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3V6z" />
        </svg>
      ),
    },
  ];

  return (
    <section
      aria-labelledby="como-funciona"
      className="relative z-10 mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8"
    >
      {/* Ancla para el CTA del hero */}
      <span id="agenda" className="relative -top-24 block" />

      <h2
        id="como-funciona"
        className="mb-10 text-center text-3xl font-semibold tracking-tight text-white/95 sm:text-4xl"
      >
        ¿Cómo funciona?
      </h2>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {steps.map((s) => (
          <article
            key={s.num}
            className="group rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur transition hover:bg-white/7.5"
          >
            <div className="mb-4 flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-violet-600/90 text-white shadow-lg shadow-violet-900/40 ring-1 ring-white/10">
                {s.icon}
              </div>
              <div className="text-sm font-medium text-white/80">Paso {s.num}</div>
            </div>

            <h3 className="mb-2 text-lg font-semibold text-white/95">{s.title}</h3>
            <p className="text-sm leading-relaxed text-white/70">{s.desc}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
