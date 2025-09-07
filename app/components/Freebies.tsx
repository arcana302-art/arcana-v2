'use client';

const freebies = [
  { t: "Horóscopo diario (gratis)", d: "Energías del día para tu signo.", cta: "Ver horóscopo", emoji: "♈️" },
  { t: "Carta natal gratis", d: "Mapa astral básico en segundos.", cta: "Calcular ahora", emoji: "🌓" },
  { t: "Tirada 3 cartas (gratis)", d: "Pasado · Presente · Futuro instantáneo.", cta: "Probar tirada", emoji: "🃏" },
];

export default function Freebies() {
  return (
    <section id="gratis" className="mx-auto max-w-7xl px-6 py-20">
      <div className="flex items-end justify-between">
        <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">Recursos gratuitos</h2>
      </div>

      <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-6">
        {freebies.map((f) => (
          <div key={f.t} className="rounded-2xl bg-white/5 ring-1 ring-white/10 p-6">
            <div className="text-3xl">{f.emoji}</div>
            <h3 className="mt-3 text-lg font-semibold">{f.t}</h3>
            <p className="mt-1 text-white/70">{f.d}</p>
            <a href="#" className="mt-4 inline-flex text-[#c9a6ff] hover:underline">{f.cta}</a>
          </div>
        ))}
      </div>
    </section>
  );
}
