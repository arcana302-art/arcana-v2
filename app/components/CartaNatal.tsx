'use client';

import { useState, useEffect, useRef } from 'react';
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

  const canvasRef = useRef<HTMLCanvasElement>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const data = calculateNatalChart({ name, date, time, city, coords });
    setResult(data);
  };

  useEffect(() => {
    if (!result || !canvasRef.current) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const width = canvas.width;
    const height = canvas.height;
    const radius = width / 2 - 40;
    ctx.clearRect(0, 0, width, height);

    // Fondo
    ctx.fillStyle = '#17031F';
    ctx.fillRect(0, 0, width, height);

    // Círculo externo
    ctx.strokeStyle = '#9434ec';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.arc(width / 2, height / 2, radius, 0, 2 * Math.PI);
    ctx.stroke();

    // Dibujar casas zodiacales (12)
    for (let i = 0; i < 12; i++) {
      const angle = (i * 30 - 90) * (Math.PI / 180); // cada casa 30°
      const x = width / 2 + radius * Math.cos(angle);
      const y = height / 2 + radius * Math.sin(angle);
      ctx.strokeStyle = '#c9a6ff';
      ctx.beginPath();
      ctx.moveTo(width / 2, height / 2);
      ctx.lineTo(x, y);
      ctx.stroke();
    }

    // Dibujar planetas
    result.planets.forEach((p: any) => {
      const deg = ((p.degrees % 360) - 90) * (Math.PI / 180);
      const r = radius - 30;
      const x = width / 2 + r * Math.cos(deg);
      const y = height / 2 + r * Math.sin(deg);

      // Planeta
      const img = new Image();
      img.src = p.icon;
      img.onload = () => ctx.drawImage(img, x - 12, y - 12, 24, 24);

      // Coordenadas
      ctx.fillStyle = '#FFD700';
      ctx.font = '12px Arial';
      ctx.fillText(p.position, x + 15, y);
    });

    // Dibujar líneas de aspecto (simplificado: conjunciones)
    const aspects = result.planets;
    for (let i = 0; i < aspects.length; i++) {
      for (let j = i + 1; j < aspects.length; j++) {
        const p1 = aspects[i];
        const p2 = aspects[j];
        const angle1 = ((p1.degrees % 360) - 90) * (Math.PI / 180);
        const angle2 = ((p2.degrees % 360) - 90) * (Math.PI / 180);
        const r = radius - 30;
        const x1 = width / 2 + r * Math.cos(angle1);
        const y1 = height / 2 + r * Math.sin(angle1);
        const x2 = width / 2 + r * Math.cos(angle2);
        const y2 = height / 2 + r * Math.sin(angle2);

        // Línea azul para conjunción
        ctx.strokeStyle = '#1E90FF88';
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.moveTo(x1, y1);
        ctx.lineTo(x2, y2);
        ctx.stroke();
      }
    }
  }, [result]);

  return (
    <section className="bg-[#17031F] text-white py-12 px-4">
      <h2 className="text-3xl font-bold mb-6 text-center">Calcula tu Carta Natal</h2>

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

      {result && (
        <div className="mt-10 max-w-5xl mx-auto bg-[#1f0f2a] p-6 rounded-xl shadow-lg">
          <h3 className="text-2xl font-bold mb-4">{result.name}, tu Carta Natal</h3>
          <p><strong>Fecha:</strong> {result.date} | <strong>Hora:</strong> {result.time}</p>
          <p><strong>Ciudad:</strong> {result.city} | <strong>Coordenadas:</strong> {result.coords.lat}, {result.coords.lon}</p>
          <p><strong>Hora UTC:</strong> {result.utc} | <strong>Hora Sidérea:</strong> {result.sidereal}</p>
          <p><strong>Método:</strong> {result.method} | <strong>Signo Solar:</strong> {result.sunSign} | <strong>Ascendente:</strong> {result.ascendant}</p>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mt-4">
            {result.planets.map((p: any) => (
              <div key={p.name} className="flex flex-col items-center bg-[#2c1b3b] p-3 rounded-lg">
                <Image src={p.icon} alt={p.name} width={32} height={32} />
                <span className="mt-2">{p.name}</span>
                <span className="text-sm">{p.position}</span>
              </div>
            ))}
          </div>

          <div className="mt-8 flex justify-center">
            <canvas ref={canvasRef} width={500} height={500} className="bg-[#17031F] rounded-full border border-[#9434ec]"></canvas>
          </div>
        </div>
      )}
    </section>
  );
}
