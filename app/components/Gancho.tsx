'use client';

import Link from 'next/link';

export default function Gancho() {
  return (
    <section className="relative bg-[#1F0F2B] py-16 px-6 sm:px-12 lg:px-24 text-center">
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold mb-6">
        Descubre tu <span className="text-[#9434EC]">Carta Astral</span> personal
      </h2>
      <p className="text-lg sm:text-xl text-[#D9D9D9] max-w-2xl mx-auto mb-8">
        Introduce tu fecha, hora y lugar de nacimiento para conocer los secretos de tu personalidad, talentos y camino de vida.
      </p>
      <Link
        href="/carta-astral"
        className="inline-block px-8 py-4 rounded-2xl text-white font-semibold bg-gradient-to-r from-[#9434EC] to-[#C9A6FF] hover:opacity-90 transition"
      >
        Genera tu Carta Astral
      </Link>
    </section>
  );
}
