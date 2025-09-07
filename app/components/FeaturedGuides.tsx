'use client';

type Guide = {
  name: string; tags: string[]; price: string; status: "Disponible" | "En sesión"; rating: number;
};

const guides: Guide[] = [
  { name: "Luna V.",  tags: ["Tarot", "Amor"], price: "$15/15min", status: "Disponible", rating: 4.9 },
  { name: "Orfeo R.", tags: ["Astrología", "Talentos"], price: "$18/15min", status: "Disponible", rating: 4.8 },
  { name: "Iris M.",  tags: ["Oráculos", "Runas"], price: "$14/15min", status: "En sesión", rating: 4.7 },
  { name: "Sol A.",   tags: ["Tarot", "Trabajo"], price: "$16/15min", status: "Disponible", rating: 4.9 },
];

export default function FeaturedGuides() {
  return (
    <section id="guias" className="mx-auto max-w-7xl px-6 py-20">
      <div className="flex items-end justify-between">
        <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">Guías destacados</h2>
        <a href="#" className="text-[#c9a6ff] hover:underline">Ver todos</a>
      </div>

      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {guides.map((g) => (
          <div key={g.name} className="rounded-2xl bg-white/5 ring-1 ring-white/10 p-5">
            {/* avatar placeholder */}
            <div className="h-16 w-16 rounded-full bg-gradient-to-br from-[#9434ec] to-[#5b1fb0] ring-2 ring-white/10 flex items-center justify-center text-xl font-bold">
              {g.name.split(" ")[0][0]}
            </div>

            <div className="mt-4 flex items-center justify-between">
              <h3 className="text-lg font-semibold">{g.name}</h3>
              <span className={`text-xs px-2 py-1 rounded-full ${g.status === "Disponible" ? "bg-emerald-500/20 text-emerald-300" : "bg-yellow-500/20 text-yellow-300"}`}>
                {g.status}
              </span>
            </div>

            <div className="mt-2 flex items-center gap-2 text-sm text-white/70">
              <span>⭐ {g.rating.toFixed(1)}</span>
              <span>·</span>
              <span>{g.price}</span>
            </div>

            <div className="mt-3 flex flex-wrap gap-2">
              {g.tags.map(t => (
                <span key={t} className="text-xs px-2 py-1 rounded-full bg-white/10">{t}</span>
              ))}
            </div>

            <a href="#" className="mt-4 inline-flex text-sm text-[#c9a6ff] hover:underline">Agendar</a>
          </div>
        ))}
      </div>
    </section>
  );
}
