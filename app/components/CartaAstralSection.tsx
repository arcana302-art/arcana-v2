'use client';

import { useState } from "react";

interface FormData {
  nombre: string;
  fecha: string;
  hora: string;
  lugar: string;
}

export default function CartaAstralSection() {
  const [formData, setFormData] = useState<FormData>({
    nombre: "",
    fecha: "",
    hora: "",
    lugar: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section className="bg-[#17031F] text-white py-16 px-6">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl sm:text-5xl font-semibold mb-6 text-center">
          Descubre tu <span className="text-[#9434EC]">Carta Astral</span>
        </h2>
        <p className="text-center text-lg mb-12">
          Ingresa tus datos y obtén tu carta astral personalizada. Explora tu signo solar, ascendente y aspectos planetarios.
        </p>

        {/* Formulario */}
        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-3xl mx-auto mb-12"
        >
          <input
            type="text"
            name="nombre"
            placeholder="Nombre completo"
            value={formData.nombre}
            onChange={handleChange}
            required
            className="p-3 rounded-lg bg-[#22172F] border border-[#9434EC] focus:outline-none focus:ring-2 focus:ring-[#9434EC]"
          />
          <input
            type="date"
            name="fecha"
            value={formData.fecha}
            onChange={handleChange}
            required
            className="p-3 rounded-lg bg-[#22172F] border border-[#9434EC] focus:outline-none focus:ring-2 focus:ring-[#9434EC]"
          />
          <input
            type="time"
            name="hora"
            value={formData.hora}
            onChange={handleChange}
            required
            className="p-3 rounded-lg bg-[#22172F] border border-[#9434EC] focus:outline-none focus:ring-2 focus:ring-[#9434EC]"
          />
          <input
            type="text"
            name="lugar"
            placeholder="Lugar de nacimiento (Ciudad, País)"
            value={formData.lugar}
            onChange={handleChange}
            required
            className="p-3 rounded-lg bg-[#22172F] border border-[#9434EC] focus:outline-none focus:ring-2 focus:ring-[#9434EC]"
          />
          <button
            type="submit"
            className="sm:col-span-2 py-3 px-6 bg-[#9434EC] rounded-lg font-semibold hover:bg-[#7B2EDB] transition"
          >
            Generar mi Carta Astral
          </button>
        </form>

        {/* Visualización de la carta astral */}
        {submitted && (
          <div className="bg-[#22172F] p-8 rounded-xl text-center">
            <h3 className="text-2xl font-semibold mb-4">
              Carta Astral de {formData.nombre}
            </h3>
            <p className="mb-6">
              Fecha: {formData.fecha} | Hora: {formData.hora} | Lugar: {formData.lugar}
            </p>
            <div className="border-2 border-[#9434EC] rounded-xl p-6 flex justify-center items-center h-96">
              {/* Aquí más adelante se puede integrar la visualización de la carta */}
              <p className="text-[#9434EC]">
                [Visualización de la carta astral]
              </p>
            </div>
            <p className="mt-6 text-sm text-[#C9A6FF]">
              Interpretación básica: Signo solar, ascendente y aspectos principales.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
