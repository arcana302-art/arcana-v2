'use client';

import { useState } from 'react';

interface CartaAstralProps {}

export default function CartaAstral({}: CartaAstralProps) {
  const [nombre, setNombre] = useState('');
  const [fecha, setFecha] = useState('');
  const [hora, setHora] = useState('');
  const [lugar, setLugar] = useState('');
  const [showCarta, setShowCarta] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (nombre && fecha && hora && lugar) {
      setShowCarta(true);
    }
  };

  return (
    <section className="relative bg-[#17031F] py-16 px-6 sm:px-12 lg:px-24 text-center">
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold mb-8">
        Tu <span className="text-[#9434EC]">Carta Astral</span>
      </h2>

      {!showCarta && (
        <form
          onSubmit={handleSubmit}
          className="max-w-2xl mx-auto bg-[#1F0F2B] rounded-2xl p-8 flex flex-col gap-4 shadow-lg"
        >
          <input
            type="text"
            placeholder="Nombre"
            className="p-3 rounded-lg text-black"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            required
          />
          <input
            type="date"
            placeholder="Fecha de nacimiento"
            className="p-3 rounded-lg text-black"
            value={fecha}
            onChange={(e) => setFecha(e.target.value)}
            required
          />
          <input
            type="time"
            placeholder="Hora de nacimiento"
            className="p-3 rounded-lg text-black"
            value={hora}
            onChange={(e) => setHora(e.target.value)}
            required
          />
          <input
            type="text"
            placeholder="Ciudad de nacimiento"
            className="p-3 rounded-lg text-black"
            value={lugar}
            onChange={(e) => setLugar(e.target.value)}
            required
          />
          <button
            type="submit"
            className="bg-gradient-to-r from-[#9434EC] to-[#C9A6FF] text-white font-semibold py-3 rounded-xl mt-4 hover:opacity-90 transition"
          >
            Generar Carta Astral
          </button>
        </form>
      )}

      {showCarta && (
        <div className="mt-12">
          {/* Aquí se puede insertar librería o canvas para mostrar carta astral */}
          <div className="bg-[#1F0F2B] rounded-2xl p-8 shadow-lg">
            <p className="text-[#D9D9D9] mb-4">
              Carta astral de <span className="text-[#9434EC]">{nombre}</span>
            </p>
            <p className="text-sm text-[#A1A1A1] mb-6">
              Fecha: {fecha} | Hora: {hora} | Lugar: {lugar}
            </p>
            <div className="border border-[#9434EC] rounded-lg h-96 flex items-center justify-center">
              <p className="text-[#9434EC]">
                Aquí se mostrará la representación visual de tu carta astral
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
