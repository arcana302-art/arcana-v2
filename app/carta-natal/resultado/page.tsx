import { redirect } from "next/navigation";

export default function Resultado({ searchParams }: any) {
  const { nombre, fecha, hora, lugar } = searchParams;

  if (!nombre || !fecha || !lugar) {
    redirect("/");
  }

  // ====== EJEMPLO DE RESULTADOS ======
  // Luego lo convertiremos en cálculo real
  const resultado = {
    sol: { signo: "Géminis", grado: 15 },
    luna: { signo: "Escorpio", grado: 22 },
    ascendente: { signo: "Leo", grado: 8 },
    marte: { signo: "Virgo", grado: 3 },
    venus: { signo: "Tauro", grado: 27 },
    mercurio: { signo: "Géminis", grado: 11 },
    jupiter: { signo: "Aries", grado: 19 },
    saturno: { signo: "Capricornio", grado: 6 },
  };

  return (
    <section className="py-16 bg-[#17031F] text-white min-h-screen">
      <div className="max-w-3xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-[#c08bfc] mb-6">
          Tu Carta Natal
        </h2>

        <p className="text-center text-lg mb-10 opacity-90">
          <strong>{nombre}</strong> – Nacido el <strong>{fecha}</strong>{" "}
          {hora !== "Sin hora" && <>a las <strong>{hora}</strong></>}  
          en <strong>{lugar}</strong>
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {Object.entries(resultado).map(([cuerpo, data]: any) => (
            <div
              key={cuerpo}
              className="bg-[#240c31] p-4 rounded-xl border border-[#9434ec]/40 shadow-lg"
            >
              <h3 className="text-xl font-semibold mb-2 capitalize text-[#c08bfc]">
                {cuerpo}
              </h3>
              <p>Signo: {data.signo}</p>
              <p>Grado: {data.grado}°</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
