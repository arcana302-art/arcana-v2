'use client';

const cats = [
  { name: "Tarot",    desc: "Tiradas para amor, trabajo y decisiones.", emoji: "🃏" },
  { name: "Astrología", desc: "Tránsitos y compatibilidad.", emoji: "🪐" },
  { name: "Oráculos", desc: "Mensajes simbólicos y guía.", emoji: "✨" },
  { name: "Runas",     desc: "Sabiduría nórdica y enfoque práctico.", emoji: "ᚱ" },
  { name: "Talentos",  desc: "Vocación, propósito y fortalezas.", emoji: "🌟" },
];

export default function Categories() {
  return (
    <section id="categorias" className="mx-auto max-w-7xl px-6 py-20">
      <div className="flex items-end justify-between gap-4">
        <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">Categorías de consulta</h2>
      </div>

      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
        {cats.map((c) => (
          <a key={c.name} href="#" className="group rounded-2xl bg-white/5 ring-1 ring-white/10 p-5 hover:bg-white/[0.07] transition-colors">
            <div className="text-3xl">{c.emoji}</div>
            <h3 className="mt-3 text-lg font-semibold">{c.name}</h3>
            <p className="mt-1 text-white/70 text-sm">{c.desc}</p>
            <span className="inline-block mt-4 text-[#c9a6ff] group-hover:underline">Explorar</span>
          </a>
        ))}
      </div>
    </section>
  );
}
