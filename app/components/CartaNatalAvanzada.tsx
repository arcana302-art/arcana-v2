'use client';

import { useState } from 'react';

export default function CartaNatalAvanzada() {
  const [nombre, setNombre] = useState('');
  const [fecha, setFecha] = useState('');
  const [hora, setHora] = useState('');
  const [lugar, setLugar] = useState('');
  const [resultado, setResultado] = useState<any>(null);

  const generarCarta = () => {
    // Simulación básica
    const coordenadas = {
      sol: { signo: 'Géminis', grado: 15 },
      luna: { signo: 'Escorpio', grado: 22 },
      ascendente: { signo: 'Leo', grado: 8 },
    };
    setResultado(coordenadas);
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
          <input
            type="time"
            value={hora}
            onChange={(e) => setHora(e.target.value)}
            className="p-3 rounded-lg border border-[#9434ec]/40 focus:ring-2 focus:ring-[#9434ec] outline-none"
          />
          <input
            type="text"
            placeholder="Lugar de nacimiento"
            value={lugar}
            onChange={(e) => setLugar(e.target.value)}
            className="p-3 rounded-lg border border-[#9434ec]/40 focus:ring-2 focus:ring-[#9434ec] outline-none"
          />
        </div>

        <button
          onClick={generarCarta}
          className="bg-[#9434ec] hover:bg-[#7a2bc0] text-white font-semibold py-3 px-8 rounded-full transition w-full sm:w-auto block mx-auto"
        >
          Generar Carta Natal
        </button>

        {resultado && (
          <div className="mt-10 text-center">
            <h3 className="text-2xl font-semibold text-[#9434ec] mb-4">
              Resultado
            </h3>
            <div className="flex flex-col sm:flex-row justify-center gap-6 text-left">
              {Object.entries(resultado).map(([clave, val]: any) => (
                <div
                  key={clave}
                  className="bg-white shadow-md p-4 rounded-lg border border-[#9434ec]/30"
                >
                  <h4 className="text-lg font-semibold capitalize mb-2">
                    {clave}
                  </h4>
                  <p>Signo: {val.signo}</p>
                  <p>Grado: {val.grado}°</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
