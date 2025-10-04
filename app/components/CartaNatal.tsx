'use client';

import { useState } from 'react';
import * as d3 from 'd3';
import sweph from 'sweph';

export default function CartaNatal() {
  const [fecha, setFecha] = useState('');
  const [hora, setHora] = useState('');
  const [ciudad, setCiudad] = useState('');
  const [planets, setPlanets] = useState<any[]>([]);
  const [showResult, setShowResult] = useState(false);

  const generarCarta = async () => {
    if (!fecha || !hora || !ciudad) {
      alert('Por favor completa todos los campos.');
      return;
    }

    // 🪐 Convertir fecha y hora a valores numéricos para sweph
    const [anio, mes, dia] = fecha.split('-').map(Number);
    const [horaNum, minNum] = hora.split(':').map(Number);

    const jd = sweph.julday(anio, mes, dia) + (horaNum + minNum / 60) / 24;

    // Calcular posiciones planetarias (0=Sol, 1=Luna, ... hasta 9=Plutón)
    const planetPositions = [];
    const planetNames = [
      'Sol','Luna','Mercurio','Venus','Marte','Júpiter','Saturno','Urano','Neptuno','Plutón'
    ];

    for (let i = 0; i < 10; i++) {
      const p = sweph.calc(jd, i);
      planetPositions.push({
        name: planetNames[i],
        longitude: p.longitude,
        latitude: p.latitude,
        distance: p.distance
      });
    }

    setPlanets(planetPositions);
    setShowResult(true);
  };

  const renderCarta = () => {
    const width = 400;
    const height = 400;
    const radius = 180;

    // Limpiar contenido previo
    d3.select('#carta-natal').selectAll('*').remove();

    const svg = d3.select('#carta-natal')
      .append('svg')
      .attr('width', width)
      .attr('height', height);

    // Círculo principal
    svg.append('circle')
      .attr('cx', width/2)
      .attr('cy', height/2)
      .attr('r', radius)
      .attr('stroke', '#FFD700')
      .attr('stroke-width', 3)
      .attr('fill', 'none');

    // Posicionar planetas
    planets.forEach((p, idx) => {
      const angle = (p.longitude / 360) * 2 * Math.PI - Math.PI/2; // Ajustar para arriba
      const x = width/2 + radius * 0.85 * Math.cos(angle);
      const y = height/2 + radius * 0.85 * Math.sin(angle);

      svg.append('circle')
        .attr('cx', x)
        .attr('cy', y)
        .attr('r', 12)
        .attr('fill', '#9434ec');

      svg.append('text')
        .attr('x', x)
        .attr('y', y + 4)
        .attr('text-anchor', 'middle')
        .attr('fill', 'white')
        .attr('font-size', '10px')
        .text(p.name);
    });
  };

  // Renderizar la carta cada vez que cambian los planetas
  if (showResult) renderCarta();

  // Interpretaciones básicas (ejemplo)
  const interpretaciones = planets.map(p => {
    if (p.longitude >= 0 && p.longitude < 30) return `${p.name} en Aries: energía e iniciativa.`;
    if (p.longitude >= 30 && p.longitude < 60) return `${p.name} en Tauro: estabilidad y perseverancia.`;
    if (p.longitude >= 60 && p.longitude < 90) return `${p.name} en Géminis: comunicación y curiosidad.`;
    if (p.longitude >= 90 && p.longitude < 120) return `${p.name} en Cáncer: emociones y familia.`;
    if (p.longitude >= 120 && p.longitude < 150) return `${p.name} en Leo: creatividad y liderazgo.`;
    if (p.longitude >= 150 && p.longitude < 180) return `${p.name} en Virgo: análisis y detalle.`;
    if (p.longitude >= 180 && p.longitude < 210) return `${p.name} en Libra: armonía y relaciones.`;
    if (p.longitude >= 210 && p.longitude < 240) return `${p.name} en Escorpio: intensidad y transformación.`;
    if (p.longitude >= 240 && p.longitude < 270) return `${p.name} en Sagitario: aventura y filosofía.`;
    if (p.longitude >= 270 && p.longitude < 300) return `${p.name} en Capricornio: disciplina y responsabilidad.`;
    if (p.longitude >= 300 && p.longitude < 330) return `${p.name} en Acuario: innovación y comunidad.`;
    return `${p.name} en Piscis: intuición y espiritualidad.`;
  });

  return (
    <section className="bg-[#1F0F2E] py-12 px-6 sm:px-12">
      <h2 className="text-3xl sm:text-4xl font-semibold mb-6 text-center text-[#FFD700]">
        Carta Natal
      </h2>

      <div className="max-w-3xl mx-auto bg-[#2A1A3C] p-6 rounded-xl shadow-lg">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-4">
          <input
            type="date"
            value={fecha}
            onChange={(e) => setFecha(e.target.value)}
            className="p-2 rounded-md text-black w-full"
          />
          <input
            type="time"
            value={hora}
            onChange={(e) => setHora(e.target.value)}
            className="p-2 rounded-md text-black w-full"
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

      {showResult && (
        <div className="mt-8 flex flex-col items-center">
          <div id="carta-natal" className="relative w-80 h-80 rounded-full border-4 border-[#FFD700] flex items-center justify-center" />
          <div className="mt-6 text-white max-w-xl">
            <h3 className="text-xl font-semibold mb-2">Interpretación básica</h3>
            <ul className="list-disc pl-5 space-y-1">
              {interpretaciones.map((i, idx) => (
                <li key={idx}>{i}</li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </section>
  );
}
