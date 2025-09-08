// app/components/HowItWorks.tsx
export default function HowItWorks() {
  const steps = [
    {
      title: 'Elige tu guía',
      desc: 'Explora perfiles verificados y elige a quien resuene contigo por experiencia, estilo y valoraciones.',
      icon: (
        <svg viewBox="0 0 24 24" className="h-6 w-6 fill-current">
          <path d="M12 12a5 5 0 1 0-5-5 5 5 0 0 0 5 5Zm0 2c-4.42 0-8 2.24-8 5v1h16v-1c0-2.76-3.58-5-8-5Z" />
        </svg>
      ),
    },
    {
      title: 'Agenda en minutos',
      desc: 'Selecciona fecha y forma de lectura. Paga con seguridad y recibe confirmación al instante.',
      icon: (
        <svg viewBox="0 0 24 24" className="h-6 w-6 fill-current">
          <path d="M7 2v2H5a2 2 0 0 0-2 2v2h18V6a2 2 0 0 0-2-2h-2V2h-2v2H9V2ZM3 10v10a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V10Zm6 4h6v2H9Z" />
        </svg>
      ),
    },
    {
      title: 'Recibe tu lectura',
      desc: 'Conéctate a tu sesión y obtén respuestas claras y accionables en un espacio seguro y sin juicios.',
      icon: (
        <svg viewBox="0 0 24 24" className="h-6 w-6 fill-current">
          <path d="M12 3a9 9 0 0 0-9 9 8.94 8.94 0 0 0 4.1 7.5l.9.6V21a1 1 0 0 0 1.6.8l2.4-1.8h.1A9 9 0 1 0 12 3Zm-1 5h2v6h-2Zm0 8h2v2h-2Z" />
        </svg>
      ),
    },
  ];

  return (
    <section id="como-funciona" className="relative bg-[#17031F]">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:py-20">
        {/* Título y subtítulo (actualizados) */}
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
            El camino hacia tus respuestas es más fácil de lo que imaginas
          </h2>
          <p className="mt-4 text-white/75 text-base sm:text-lg leading-relaxed">
            Cada paso está diseñado para que tu experiencia sea segura, privada y profundamente reveladora.
          </p>
        </div>

        {/* Pasos */}
        <div className="mt-12 grid gap-6 sm:gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {steps.map((s, i) => (
            <div
              key={i}
              className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-sm transition hover:bg-white/[0.05]"
            >
              <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-[#9434ec]/15 text-[#c9a6ff]">
                {s.icon}
              </div>
              <h3 className="text-white font-semibold text-lg">{s.title}</h3>
              <p className="mt-2 text-white/70 text-sm leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
