'use client';

import { useState } from 'react';
import Image from 'next/image';

type FormData = {
  name: string;
  birthDate: string;
  birthTime: string;
  city: string;
};

type PlanetData = {
  name: string;
  icon: string;
  coordinate: string;
};

export default function CartaNatal() {
  const [form, setForm] = useState<FormData>({
    name: '',
    birthDate: '',
    birthTime: '',
    city: '',
  });

  const [submitted, setSubmitted] = useState(false);

  // Datos de ejemplo de planetas
  const planets: PlanetData[] = [
    { name: 'Sol', icon: '☉', coordinate: '20 Cap 30°43′' },
    { name: 'Luna', icon: '☽', coordinate: '15 Tau 12°10′' },
    { name: 'Mercurio', icon: '☿', coordinate: '5 Aqu 08°55′' },
    { name: 'Venus', icon: '♀', coordinate: '28 Leo 22°40′' },
    { name: 'Marte', icon: '♂', coordinate: '12 Gem 18°30′' },
    { name: 'Júpiter', icon: '♃', coordinate: '3 Ari 45°12′' },
    { name: 'Saturno', icon: '♄', coordinate: '10 Lib 50°00′' },
    { name: 'Urano', icon: '♅', coordinate: '25 Sag 33°10′' },
    { name: 'Neptuno', icon: '♆', coordinate: '18 Pis 40°20′' },
    { name: 'Plutón', icon: '♇', coordinate: '0 Cap 12°55′' },
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section className="bg-[#17031F] text-white py-12 px-6">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-semibold mb-6 text-center">
          Calcula tu <span className="text-[#9434ec]">Carta Natal</span>
        </h2>

        {/* Formulario */}
        {!submitted && (
          <form
            onSubmit={handleSubmit}
            className="flex flex-col md:flex-row gap-4 md:gap-6 justify-center items-center mb-10"
          >
            <input
              type="text"
              name="name"
              placeholder="Nombre completo"
              value={form.name}
              onChange={handleChange}
              required
              className="px-4 py-2 rounded-lg text-black w-full md:w-auto"
            />
            <input
              type="date"
              name="birthDate"
              value={form.birthDate}
              onChange={handleChange}
              required
              className="px-4 py-2 rounded-lg text-black w-full md:w-auto"
            />
            <input
              type="time"
              name="birthTime"
              value={form.birthTime}
              onChange={handleChange}
              required
              className="px-4 py-2 rounded-lg text-black w-full md:w-auto"
            />
            <input
              type="text"
              name="city"
              placeholder="Ciudad"
              value={form.city}
              onChange={handleChange}
              required
              className="px-4 py-2 rounded-lg text-black w-full md:w-auto"
            />
            <button
              type="submit"
              className="bg-[#9434ec] px-6 py-2 rounded-lg font-semibold hover:bg-[#7a2fc7] transition"
            >
              Calcular
            </button>
          </form>
        )}

        {/* Resultados */}
        {submitted && (
          <div className="space-y-8">
            <div className="bg-[#1f0d3f] rounded-xl p-6 shadow-lg">
              <h3 className="text-xl font-semibold mb-4">Datos ingresados</h3>
              <p>Nombre: {form.name}</p>
              <p>Fecha: {form.birthDate}</p>
              <p>Hora: {form.birthTime}</p>
              <p>Ciudad: {form.city}</p>
              <p>Coordenadas: 25N 100W (ejemplo)</p>
              <p>Tiempo Universal: 19:25</p>
              <p>Tiempo Sideral: 20:04:46</p>
            </div>

            <div className="bg-[#1f0d3f] rounded-xl p-6 shadow-lg">
              <h3 className="text-xl font-semibold mb-4">Carta Natal</h3>
              <p>Método: Web Style / Placidus</p>
              <p>Signo Solar: Capricornio</p>
              <p>Ascendente: Tauro</p>

              <div className="mt-4 grid grid-cols-2 md:grid-cols-3 gap-4">
                {planets.map((p, idx) => (
                  <div
                    key={idx}
                    className="flex items-center justify-between bg-[#2a1640] rounded-lg p-2"
                  >
                    <span className="text-2xl">{p.icon}</span>
                    <span className="text-sm">{p.name}</span>
                    <span className="text-sm">{p.coordinate}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Círculo natal */}
            <div className="relative w-full max-w-md mx-auto">
              <svg
                viewBox="0 0 400 400"
                className="w-full h-auto"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* Círculo exterior */}
                <circle
                  cx="200"
                  cy="200"
                  r="180"
                  stroke="#9434ec"
                  strokeWidth="2"
                  fill="none"
                />
                {/* Divisiones de casas */}
                {Array.from({ length: 12 }).map((_, i) => {
                  const angle = (i * 360) / 12 - 90;
                  const x = 200 + 180 * Math.cos((angle * Math.PI) / 180);
                  const y = 200 + 180 * Math.sin((angle * Math.PI) / 180);
                  return (
                    <line
                      key={i}
                      x1="200"
                      y1="200"
                      x2={x}
                      y2={y}
                      stroke="#fff"
                      strokeWidth="1"
                    />
                  );
                })}
                {/* Planetas de ejemplo */}
                {planets.map((p, idx) => {
                  const angle = (idx * 360) / planets.length - 90;
                  const x = 200 + 150 * Math.cos((angle * Math.PI) / 180);
                  const y = 200 + 150 * Math.sin((angle * Math.PI) / 180);
                  return (
                    <circle
                      key={idx}
                      cx={x}
                      cy={y}
                      r="10"
                      fill={idx % 2 === 0 ? 'blue' : 'red'}
                    />
                  );
                })}
              </svg>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
