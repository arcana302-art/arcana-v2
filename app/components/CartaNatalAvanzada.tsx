'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function CartaNatalAvanzada() {
  const router = useRouter();

  const [nombre, setNombre] = useState('');
  const [fecha, setFecha] = useState('');
  const [hora, setHora] = useState('');
  const [lugar, setLugar] = useState('');
  const [sinHora, setSinHora] = useState(false);

  const enviar = () => {
    if (!nombre || !fecha || !lugar) {
      alert("Por favor completa todos los campos obligatorios");
      return;
    }

    const query = new URLSearchParams({
      nombre,
      fecha,
      lugar,
      hora: sinHora ? "Sin hora" : hora,
    });

    router.push(`/carta-natal/resultado?${query.toString()}`);
  };

  return (
    <section className="py-12 bg-[#FBF3FB] text-[#1f1630]">
      <div className="max-w-3xl mx-auto px-4">
        <h2 className="text-3xl sm:text-4xl font-semibold mb-8 text-center text-[#9434ec]">
          Calcula tu Carta Natal
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
          <input
            type="text"
            placeholder="Nombre completo"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            className="p-3 rounded-lg border border-[#9434ec]/40 focus:ring-2 focus:ring-[#9434ec] outline-none"
          />

          <input
            type="date"
            value={fecha}
            onChange={(e) => setFecha(e.target.value)}
            className="p-3 rounded-lg border border-[#9434ec]/40 focus:ring-2 focus:ring-[#9434ec] outline-none"
          />

          {!sinHora && (
            <input
              type="time"
              value={hora}
              onChange={(e) => setHora(e.target.value)}
              className="p-3 rounded-lg border border-[#9434ec]/40 focus:ring-2 focus:ring-[#9434ec] outline-none"
            />
          )}

          <input
            type="text"
            placeholder="Lugar de nacimiento"
            value={lugar}
            onChange={(e) => setLugar(e.target.value)}
            className="p-3 rounded-lg border border-[#9434ec]/40 focus:ring-2 focus:ring-[#9434ec] outline-none"
          />
        </div>

        {/* Casilla para indicar que no conoce la hora */}
        <div className="flex items-center gap-2 mb-6">
          <input
            type="checkbox"
            id="sinHora"
            checked={sinHora}
            onChange={(e) => setSinHora(e.target.checked)}
          />
          <label htmlFor="sinHora" className="text-sm">
            No conozco mi hora de nacimiento (opcional)
          </label>
        </div>

        <button
          onClick={enviar}
          className="bg-[#9434ec] hover:bg-[#7a2bc0] text-white font-semibold py-3 px-8 rounded-full transition w-full sm:w-auto block mx-auto"
        >
          Generar Carta Natal
        </button>
      </div>
    </section>
  );
}
