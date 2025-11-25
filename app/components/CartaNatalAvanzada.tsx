'use client';

import { useState } from 'react';
import { Sparkles, Sun, Moon, Star, Compass } from 'lucide-react';

export default function CartaNatalAvanzada() {
  const [nombre, setNombre] = useState('');
  const [fecha, setFecha] = useState('');
  const [hora, setHora] = useState('');
  const [lugar, setLugar] = useState('');
  const [resultado, setResultado] = useState<any>(null);

  const generarCarta = () => {
    const data = {
      sol: { signo: "Géminis", grado: 15, icon: Sun },
      luna: { signo: "Escorpio", grado: 22, icon: Moon },
      ascendente: { signo: "Leo", grado: 8, icon: Compass },
      mercurio: { signo: "Tauro", grado: 3, icon: Star },
      venus: { signo: "Cáncer", grado: 10, icon: Star },
      marte: { signo: "Capricornio", grado: 28, icon: Star },
      jupiter: { signo: "Piscis", grado: 14, icon: Star },
      saturno: { signo: "Libra", grado: 19, icon: Star },
      urano: { signo: "Sagitario", grado: 5, icon: Star },
      neptuno: { signo: "Acuario", grado: 11, icon: Star },
      pluton: { signo: "Escorpio", grado: 27, icon: Star },
      medioCielo: { signo: "Tauro", grado: 6, icon: Star },
      fondoCielo: { signo: "Escorpio", grado: 6, icon: Star },
      nodoNorte: { signo: "Géminis", grado: 1, icon: Star },
    };

    setResultado(data);
  };

  return (
    <section className="py-16 bg-gradient-to-b from-[#FBF3FB] to-[#f3e7ff] text-[#1f1630] relative overflow-hidden">
      
      {/* Decorative stars */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <Sparkles className="absolute top-10 left-10 w-8 h-8 text-purple-400" />
        <Sparkles className="absolute bottom-10 right-10 w-10 h-10 text-purple-500" />
      </div>
      
      <div className="max-w-6xl mx-auto px-4">
        
        <h2 className="text-4xl sm:text-5xl font-bold text-center text-[#9434ec] mb-10">
          Calcula tu Carta Natal
        </h2>

        {/* Grid: Form left / Results right */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          
          {/* FORM */}
          <div className="bg-white/70 backdrop-blur-xl rounded-2xl p-6 shadow-lg border border-purple-300/30">
            <h3 className="text-xl font-semibold text-[#9434ec] mb-4">Ingresa tus datos</h3>

            <div className="grid grid-cols-1 gap-4">
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
              className="mt-6 bg-[#9434ec] hover:bg-[#7a2bc0] text-white font-semibold py-3 px-8 rounded-full transition w-full"
            >
              Generar Carta Natal
            </button>
          </div>

          {/* RESULTS */}
          {resultado ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {Object.entries(resultado).map(([clave, val]: any) => {
                const Icon = val.icon;
                return (
                  <div
                    key={clave}
                    className="bg-white p-5 rounded-xl shadow-md border border-purple-200 hover:shadow-xl transition"
                  >
                    <div className="flex items-center gap-3 mb-2">
                      <Icon className="w-6 h-6 text-[#9434ec]" />
                      <h4 className="text-lg font-semibold capitalize text-[#9434ec]">
                        {clave.replace(/([A-Z])/g, ' $1')}
                      </h4>
                    </div>
                    <p><strong>Signo:</strong> {val.signo}</p>
                    <p><strong>Grado:</strong> {val.grado}°</p>
                  </div>
                );
              })}
            </div>
          ) : (
            <div className="text-center opacity-60 italic mt-10 md:mt-0">
              Los resultados aparecerán aquí ✨
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
