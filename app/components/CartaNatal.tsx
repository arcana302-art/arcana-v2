'use client';

import { useState } from 'react';
import Image from 'next/image';
import { calculateNatalChart } from './utils/astro'; // Función para cálculos astronómicos

const PLANETS = [
  { name: 'Sol', icon: '/icons/sun.svg' },
  { name: 'Luna', icon: '/icons/moon.svg' },
  { name: 'Mercurio', icon: '/icons/mercury.svg' },
  { name: 'Venus', icon: '/icons/venus.svg' },
  { name: 'Marte', icon: '/icons/mars.svg' },
  { name: 'Júpiter', icon: '/icons/jupiter.svg' },
  { name: 'Saturno', icon: '/icons/saturn.svg' },
  { name: 'Urano', icon: '/icons/uranus.svg' },
  { name: 'Neptuno', icon: '/icons/neptune.svg' },
  { name: 'Plutón', icon: '/icons/pluto.svg' },
];

export default function CartaNatal() {
  const [name, setName] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [city, setCity] = useState('');
  const [coords, setCoords] = useState({ lat: '', lon: '' });
  const [result, setResult] = useState<any>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Cálculo astronómico
    const data = calculateNatalChart({ name, date, time, city, coords });
    setResult(data);
  };

  return (
    <section className="bg-[#17031F] text-white py-12 px-4">
      <h2 className="text-3xl font-bold mb-6 text-center">Calcula tu Carta Natal</h2>

      {/* Formulario */}
      <form onSubmit={handleSubmit} className="max-w-3xl mx-auto flex flex-col gap-4 bg-[#1f0f2a] p-6 rounded-xl shadow-lg">
        <input
          type="text"
          placeholder="Nombre"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="p-2 rounded bg-[#2c1b3b] border border-[#9434ec]"
        />
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          className="p-2 rounded bg-[#2c1b3b] border border-[#9434ec]"
        />
        <input
          type="time"
          value={time}
          onChange={(e) => setTime(e.target.value)}
          className="p-2 rounded bg-[#2c1b3b] border border-[#9434ec]"
        />
        <input
          type="text"
          placeholder="Ciudad"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          className="p-2 rounded bg-[#2c1b3b] border border-[#9434ec]"
        />
        <div className="flex gap-2">
          <input
            type="text"
            placeholder="Latitud (ej: 20.67N)"
            value={coords.lat}
            onChange={(e) => setCoords({ ...coords, lat: e.target.value })}
            className="p-2 rounded bg-[#2c1b3b] border border-[#9434ec] flex-1"
          />
          <input
            type="text"
            placeholder="Longitud (ej: 100.35W)"
            value={coords.lon}
            onChange={(e) => setCoords({ ...coords, lon: e.target.value })}
            className="p-2 rounded bg-[#2c1b3b] border border-[#9434ec] flex-1"
          />
        </div>
        <button type="submit" className="bg-[#9434ec] hover:bg-[#c379ff] text-white font-bold py-2 rounded mt-2">
          Calcular Carta Natal
        </button>
      </form>

      {/* Resultado */}
      {result && (
        <div className="mt-10 max-w-5xl mx-auto bg-[#1f0f2a] p-6 rounded-xl shadow-lg">
          <h3 className="text-2xl font-bold mb-4">{result.name}, tu Carta Natal</h3>
          <p><strong>Fecha:</strong> {result.date} | <strong>Hora:</strong> {result.time}</p>
          <p><strong>Ciudad:</strong> {result.city} | <strong>Coordenadas:</strong> {result.coords.lat}, {result.coords.lon}</p>
          <p><strong>Hora UTC:</strong> {result.utc} | <strong>Hora Sidérea:</strong> {result.sidereal}</p>
          <p><strong>Método:</strong> {result.method} | <strong>Signo Solar:</strong> {result.sunSign} | <strong>Ascendente:</strong> {result.ascendant}</p>

          {/* Tabla de planetas */}
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mt-4">
            {result.planets.map((p: any) => (
              <div key={p.name} className="flex flex-col items-center bg-[#2c1b3b] p-3 rounded-lg">
                <Image src={p.icon} alt={p.name} width={32} height={32} />
                <span className="mt-2">{p.name}</span>
                <span className="text-sm">{p.position}</span>
              </div>
            ))}
          </div>

          {/* Círculo natal */}
          <div className="mt-8 flex justify-center">
            <canvas id="natalChart" width={500} height={500} className="bg-[#17031F] rounded-full border border-[#9434ec]"></canvas>
          </div>
        </div>
      )}
    </section>
  );
}
