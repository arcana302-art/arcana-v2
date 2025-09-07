'use client';

const faqs = [
  { q: "¿Cuánto dura una sesión?", a: "Generalmente 15–60 minutos según el servicio y tu elección." },
  { q: "¿Cómo reservo?", a: "Selecciona guía, fecha y formato. Confirmas el pago y listo." },
  { q: "¿Qué formatos hay?", a: "Chat, audio, video o mensaje grabado para escuchar cuando quieras." },
  { q: "¿Puedo reprogramar?", a: "Sí, con antelación según la política de cada guía." },
  { q: "¿Hay reembolsos?", a: "Sí, contamos con política clara y soporte para ayudarte." },
  { q: "¿Qué necesito?", a: "Solo tu intención. Si es astrología: fecha/hora/ciudad de nacimiento." },
];

export default function FAQ() {
  return (
    <section id="faq" className="mx-auto max-w-7xl px-6 py-20">
      <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">Preguntas frecuentes</h2>
      <div className="mt-8 divide-y divide-white/10 rounded-2xl bg-white/5 ring-1 ring-white/10">
        {faqs.map((f, i) => (
          <details key={i} className="group p-6 open:bg-white/[0.04] rounded-2xl">
            <summary className="cursor-pointer list-none text-lg font-semibold flex items-center justify-between">
              {f.q}
              <span className="ml-4 text-[#c9a6ff] group-open:rotate-45 transition">+</span>
            </summary>
            <p className="mt-3 text-white/70">{f.a}</p>
          </details>
        ))}
      </div>
    </section>
  );
}
