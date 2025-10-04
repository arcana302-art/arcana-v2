'use client';

import { useState, useEffect } from 'react';
import * as d3 from 'd3';
import sweph from 'sweph';

export default function CartaNatalAvanzada() {
  const [fecha, setFecha] = useState('');
  const [hora, setHora] = useState('');
  const [ciudad, setCiudad] = useState('');
  const [planets, setPlanets] = useState<any[]>([]);
  const [ascendente, setAscendente] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);

  const signos = [
    'Aries','Tauro','Géminis','Cáncer','Leo','Virgo',
    'Libra','Escorpio','Sagitario','Capricornio','Acuario','Piscis'
  ];

  const generarCarta = () => {
    if (!fecha || !hora) {
      alert('Completa fecha y hora.');
      return;
    }

    const [anio, mes, dia] = fecha.split('-').map(Number);
    const [horaNum, minNum] = hora.split(':').map(Number);
    const jd = sweph.julday(anio, mes, dia) + (horaNum + minNum / 60)/24;

    const planetNames = ['Sol','Luna','Mercurio','Venus','Marte','Júpiter','Saturno','Urano','Neptuno','Plutón'];

    const positions = [];
    for(let i=0;i<10;i++){
      const p = sweph.calc(jd, i);
      positions.push({
        name: planetNames[i],
        longitude: p.longitude,
        latitude: p.latitude,
      });
    }

    // Ascendente simple: usar posición Sol como proxy (solo ejemplo)
    const asc = sweph.ascendant(jd) || 0;

    setPlanets(positions);
    setAscendente(asc);
    setShowResult(true);
  };

  // Dibujo de la carta
  useEffect(() => {
    if (!showResult) return;

    const width = 500;
    const height = 500;
    const radius = 220;

    d3.select('#carta-avanzada').selectAll('*').remove();

    const svg = d3.select('#carta-avanzada')
      .append('svg')
      .attr('width', width)
      .attr('height', height);

    const centerX = width/2;
    const centerY = height/2;

    // Círculo zodiacal
    svg.append('circle')
      .attr('cx', centerX)
      .attr('cy', centerY)
      .attr('r', radius)
      .attr('fill', 'none')
      .attr('stroke', '#FFD700')
      .attr('stroke-width', 2);

    // Divisiones de casas
    for(let i=0;i<12;i++){
      const angle = (i/12) * 2*Math.PI - Math.PI/2;
      const x = centerX + radius * Math.cos(angle);
      const y = centerY + radius * Math.sin(angle);
      svg.append('line')
        .attr('x1', centerX)
        .attr('y1', centerY)
        .attr('x2', x)
        .attr('y2', y)
        .attr('stroke', '#FFD700')
        .attr('stroke-width', 1);
      // Signo
      const textX = centerX + (radius + 15) * Math.cos(angle + Math.PI/12);
      const textY = centerY + (radius + 15) * Math.sin(angle + Math.PI/12);
      svg.append('text')
        .attr('x', textX)
        .attr('y', textY)
        .attr('text-anchor', 'middle')
        .attr('alignment-baseline','middle')
        .attr('fill','#FFD700')
        .attr('font-size','12px')
        .text(signos[i]);
    }

    // Planetas
    planets.forEach(p => {
      const angle = (p.longitude/360)*2*Math.PI - Math.PI/2;
      const x = centerX + radius*0.85*Math.cos(angle);
      const y = centerY + radius*0.85*Math.sin(angle);

      svg.append('circle')
        .attr('cx', x)
        .attr('cy', y)
        .attr('r', 12)
        .attr('fill','#9434ec');

      svg.append('title').text(`${p.name}: ${p.longitude.toFixed(1)}°`);

      svg.append('text')
        .attr('x', x)
        .attr('y', y+4)
        .attr('text-anchor','middle')
        .attr('fill','white')
        .attr('font-size','10px')
        .text(p.name);
    });

    // Ascendente
    if(ascendente!==null){
      const angle = (ascendente/360)*2*Math.PI - Math.PI/2;
      const x = centerX + radius * Math.cos(angle);
      const y = centerY + radius * Math.sin(angle);
      svg.append('circle')
        .attr('cx', x)
        .attr('cy', y)
        .attr('r', 10)
        .attr('fill','orange');
      svg.append('text')
        .attr('x', x)
        .attr('y', y+4)
        .attr('text-anchor','middle')
        .attr('fill','white')
        .attr('font-size','10px')
        .text('Asc');
    }
  }, [showResult]);

  return (
    <section className="bg-[#1F0F2E] py-12 px-6 sm:px-12">
      <h2 className="text-3xl sm:text-4xl font-semibold mb-6 text-center text-[#FFD700]">
        Carta Natal Interactiva
      </h2>

      <div className="max-w-3xl mx-auto bg-[#2A1A3C] p-6 rounded-xl shadow-lg">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-4">
          <input type="date" value={fecha} onChange={e=>setFecha(e.target.value)} className="p-2 rounded-md text-black w-full" />
          <input type="time" value={hora} onChange={e=>setHora(e.target.value)} className="p-2 rounded-md text-black w-full" />
          <input type="text" value={ciudad} onChange={e=>setCiudad(e.target.value)} className="p-2 rounded-md text-black w-full" placeholder="Ciudad" />
        </div>
        <button onClick={generarCarta} className="w-full bg-[#9434ec] hover:bg-[#c470ff] text-white font-semibold py-2 rounded-lg transition">
          Generar Carta Natal
        </button>
      </div>

      {showResult && (
        <div className="mt-8 flex flex-col items-center">
          <div id="carta-avanzada" className="relative w-[500px] h-[500px]" />
        </div>
      )}
    </section>
  );
}
