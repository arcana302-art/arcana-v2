'use client';

import Link from 'next/link';

export default function Gancho() {
  return (
    <section className="bg-[#22172f] py-12 px-6">
      <div className="max-w-5xl mx-auto text-center space-y-6">
        <h2 className="text-3xl md:text-4xl font-semibold">
          Descubre tu <span className="text-[#9434ec]">horóscopo</span>, <span className="text-[#9434ec]">carta astral</span> y <span className="text-[#9434ec]">nivel de vibración</span>
        </h2>
        <p className="text-white/80 text-lg md:text-xl">
          Conéctate con tu energía y descubre tu camino de vida.
        </p>

        <div className="flex flex-col md:flex-row justify-center gap-4">
          <Link
            href="/Horoscopos"
            className="bg-[#9434ec] text-white font-semibold px-6 py-3 rounded-lg hover:bg-[#7a2fc7] transition"
          >
            Horóscopos Semanales
          </Link>
          <Link
            href="/CartaAstral"
            className="bg-transparent text-[#9434ec] font-semibold px-6 py-3 rounded-lg ring-1 ring-[#9434ec] hover:bg-[#9434ec]/10 transition"
          >
            Tu Carta Astral
          </Link>
          <Link
            href="/NivelesVibracion"
            className="bg-[#9434ec]/20 text-[#9434ec] font-semibold px-6 py-3 rounded-lg hover:bg-[#9434ec]/40 transition"
          >
            Nivel de Vibración
          </Link>
        </div>
      </div>
    </section>
  );
}
