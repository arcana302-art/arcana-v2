'use client';

import { useState } from 'react';

interface Planet {
  name: string;
  sign: string;
  degree: number;
}

export default function CartaNatal() {
  const [fecha, setFecha] = useState('');
  const [hora, setHora] = useState('');
  const [ciudad, setCiudad] = useState('');
  const [planets, setPlanets] = useState<Planet[]>([]);
  const [showResult, setShowResult] = useState(false);

  const generarCarta = () => {
    // Simulación de coordenadas y planetas
    const ejemploPlanets: Planet[] = [
      { name: 'Sol', sign: 'Leo', degree: 12 },
      { name: 'Luna', sign: 'Sagitario', degree: 24 },
      { name: 'Mercurio', sign: 'Virgo', degree: 3 },
      { name: 'Venus', sign: 'Libra', degree: 18 },
      { name: 'Marte', sign: 'Escorpio', degree: 5 },
      { name: 'Júpiter', sign: 'Aries', degree: 27 },
      { name: 'Saturno', sign: 'Capricornio', degree: 14 },
    ];

    setPlanets(ejemploPlanets);
    setShowResult(true);
  };

  return (
    <section className="bg-[#1F0F2E] py-12 px-6 sm:px-12">
      <h2 className="text-3xl sm:text-4xl font-semibold mb-6 text-center text-[#FFD700]">
        Carta Natal
      </h2>

      <div className="max-w-3xl mx-auto bg-[#2A1A3C] p-6 rounded-xl shadow-lg">
        {/* Inputs */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-4">
          <input
            type="date"
            value={fecha}
            onChange={(e) => setFecha(e.target.value)}
            className="p-2 rounded-md text-black w-full"
            placeholder="Fecha"
          />
          <input
            type="time"
            value={hora}
            onChange={(e) => setHora(e.target.value)}
            className="p-2 rounded-md text-black w-full"
            placeholder="Hora"
          />
          <input
            type="text"
            value={ciudad}
            onChange={(e) => setCiudad(e.target.value)}
            className="p-2 rounded-md text-black w-full"
            placeholder="Ciudad"
          />
        </div>

        <button
          onClick={generarCarta}
          className="w-full bg-[#9434ec] hover:bg-[#c470ff] text-white font-semibold py-2 rounded-lg transition"
        >
          Generar Carta Natal
        </button>
      </div>

      {/* Resultado */}
      {showResult && (
        <div className="mt-8 flex flex-col items-center">
          <div className="relative w-80 h-80 rounded-full border-4 border-[#FFD700] flex items-center justify-center">
            {/* Círculo de carta natal */}
            {planets.map((p, idx) => {
              const angle = (p.degree / 30) * (Math.PI / 6) + idx * 0.1; // solo ejemplo
              const x = 120 * Math.cos(angle);
              const y = 120 * Math.sin(angle);
              return (
                <div
                  key={idx}
                  className="absolute text-sm text-white bg-[#9434ec] px-2 py-1 rounded-full"
                  style={{ transform: `translate(${x}px, ${y}px)` }}
                >
                  {p.name} ({p.sign})
                </div>
              );
            })}
          </div>

          <div className="mt-6 text-white">
            <h3 className="text-xl font-semibold mb-2">Datos de la Carta</h3>
            <ul className="space-y-1">
              {planets.map((p, idx) => (
                <li key={idx}>
                  {p.name}: {p.sign}, {p.degree}°
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </section>
  );
}
