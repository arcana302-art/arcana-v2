'use client';

const items = [
  { name: "María G.", text: "La lectura fue clara y amorosa. Me ayudó a decidir con paz.", date: "Ago 2025" },
  { name: "Daniel P.", text: "Astrología muy precisa. Pude organizar mis metas.", date: "Jul 2025" },
  { name: "Renata L.", text: "Me sentí segura; el espacio fue respetuoso y honesto.", date: "Jun 2025" },
];

export default function Testimonials() {
  return (
    <section id="testimonios" className="mx-auto max-w-7xl px-6 py-20">
      <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">Testimonios verificados</h2>
      <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
        {items.map((t, i) => (
          <div key={i} className="rounded-2xl bg-white/5 ring-1 ring-white/10 p-6">
            <p className="text-white/80">{t.text}</p>
            <div className="mt-4 text-sm text-white/50">{t.name} · {t.date}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
