'use client';

import { useSearchParams } from 'next/navigation';

export default function ResultadoCartaNatal() {
  const params = useSearchParams();
  const data = params.get("data");

  const resultado = data ? JSON.parse(data) : null;

  return (
    <section className="py-12 bg-[#FBF3FB] text-[#1f1630]">
      <div className="max-w-3xl mx-auto px-4 text-center">
        <h2 className="text-3xl sm:text-4xl font-semibold mb-8 text-[#9434ec]">
          Tu Carta Natal
        </h2>

        {!resultado && (
          <p>No se encontraron datos. Vuelve a generar tu carta.</p>
        )}

        {resultado && (
          <div className="flex flex-col gap-4">
            {Object.entries(resultado).map(([clave, val]: any) => (
              <div
                key={clave}
                className="bg-white shadow-md p-4 rounded-lg border border-[#9434ec]/30 text-left"
              >
                <h4 className="text-lg font-semibold capitalize mb-2">
                  {clave}
                </h4>
                <p>Signo: {val.signo}</p>
                <p>Grado: {val.grado}°</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
