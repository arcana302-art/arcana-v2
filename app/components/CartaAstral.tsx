'use client';

import { useState } from 'react';

export default function CartaAstral() {
  const [fechaNacimiento, setFechaNacimiento] = useState('');
  const [horaNacimiento, setHoraNacimiento] = useState('');
  const [ciudadNacimiento, setCiudadNacimiento] = useState('');
  const [resultado, setResultado] = useState<string | null>(null);

  const handleCalcular = () => {
    if (!fechaNacimiento || !horaNacimiento || !ciudadNacimiento) {
      alert('Por favor completa todos los campos.');
      return;
    }

    // Simulación de cálculo de carta astral
    const ejemploResultado = `
      Carta Astral generada para:
      Fecha: ${fechaNacimiento}
      Hora: ${horaNacimiento}
      Ciudad: ${ciudadNacimiento}

      Signo Solar: Aries
      Signo Lunar: Tauro
      Ascendente: Géminis
    `;

    setResultado(ejemploResultado);
  };

  return (
    <section className="bg-[#22172F] text-white py-12 px-6 sm:px-12 rounded-lg shadow-lg my-12 max-w-4xl mx-auto">
      <h2 className="text-3xl sm:text-4xl font-semibold mb-6 text-center">
        Calcula tu Carta Astral
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
        <div>
          <label className="block mb-1 font-medium">Fecha de nacimiento</label>
          <input
            type="date"
            value={fechaNacimiento}
            onChange={(e) => setFechaNacimiento(e.target.value)}
            className="w-full p-2 rounded text-black"
          />
        </div>
        <div>
          <label className="block mb-1 font-medium">Hora de nacimiento</label>
          <input
            type="time"
            value={horaNacimiento}
            onChange={(e) => setHoraNacimiento(e.target.value)}
            className="w-full p-2 rounded text-black"
          />
        </div>
        <div>
          <label className="block mb-1 font-medium">Ciudad de nacimiento</label>
          <input
            type="text"
            value={ciudadNacimiento}
            onChange={(e) => setCiudadNacimiento(e.target.value)}
            placeholder="Ej. Ciudad de México"
            className="w-full p-2 rounded text-black"
          />
        </div>
      </div>

      <div className="text-center">
        <button
          onClick={handleCalcular}
          className="bg-[#9434ec] hover:bg-[#7a2fc0] px-6 py-3 rounded-lg font-semibold transition"
        >
          Calcular carta astral
        </button>
      </div>

      {resultado && (
        <div className="mt-6 p-4 bg-[#33274A] rounded-lg whitespace-pre-line text-white font-mono">
          {resultado}
        </div>
      )}
    </section>
  );
}
