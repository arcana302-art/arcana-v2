'use client';

const pts = [
  { t: "Pago seguro", d: "Procesadores certificados y cifrado.", i: "M2 7h20v10H2z M6 19h12v2H6z" },
  { t: "Privacidad", d: "Tus datos y lecturas son confidenciales.", i: "M12 2a7 7 0 0 0-7 7v3H4a2 2 0 0 0-2 2v6h20v-6a2 2 0 0 0-2-2h-1V9a7 7 0 0 0-7-7z" },
  { t: "Soporte 24/7", d: "Ayuda humana cuando lo necesites.", i: "M12 22a10 10 0 1 1 0-20 10 10 0 0 1 0 20zm1-9h-2v5h2v-5zm0-4h-2v2h2V9z" },
];

export default function Security() {
  return (
    <section id="seguridad" className="mx-auto max-w-7xl px-6 py-20">
      <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">Seguridad y confianza</h2>
      <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-6">
        {pts.map((p, i) => (
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
