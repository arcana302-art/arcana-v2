'use client';

const points = [
  { t: "Guías verificados", d: "Proceso de selección y reseñas reales.", i: "M12 2l2.09 6.26H20l-5.18 3.76L16.18 18 12 14.73 7.82 18l1.36-5.98L4 8.26h5.91L12 2z" },
  { t: "Espacio seguro", d: "Cuidado, privacidad y respeto en cada sesión.", i: "M12 21s-8-4.5-8-11a8 8 0 0 1 16 0c0 6.5-8 11-8 11z" },
  { t: "Pagos protegidos", d: "Plataformas de cobro seguras y soporte.", i: "M12 1l9 4v6c0 5-3.8 9.7-9 11c-5.2-1.3-9-6-9-11V5l9-4zm-1 7h2v6h-2zm0 8h2v2h-2z" },
  { t: "Reembolsos claros", d: "Política transparente y ayuda rápida.", i: "M6 19a2 2 0 0 1-2-2V7l8-4 8 4v10a2 2 0 0 1-2 2H6z" },
  { t: "Multiformato", d: "Chat, audio, video o mensaje grabado.", i: "M4 6h16v10H4z M8 18h8v2H8z" },
  { t: "Material extra", d: "Resumen, tiradas y recursos posteriores.", i: "M4 4h10v4H4z M4 10h16v2H4z M4 14h16v2H4z" },
];

export default function Benefits() {
  return (
    <section id="beneficios" className="mx-auto max-w-7xl px-6 py-20">
      <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">Por qué elegir Arcana</h2>
      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {points.map((p, i) => (
          <div key={i} className="rounded-2xl bg-white/5 ring-1 ring-white/10 p-6">
            <svg viewBox="0 0 24 24" className="w-7 h-7 text-[#F6CF4A] mb-3">
              <path fill="currentColor" d={p.i}/>
            </svg>
            <h3 className="text-lg font-semibold">{p.t}</h3>
            <p className="mt-2 text-white/70">{p.d}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
