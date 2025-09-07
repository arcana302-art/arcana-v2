'use client';

export default function HowItWorks() {
  const Item = ({
    title,
    desc,
    icon,
  }: { title: string; desc: string; icon: React.ReactNode }) => (
    <div className="rounded-2xl bg-white/5 ring-1 ring-white/10 p-6 backdrop-blur-sm hover:bg-white/[0.06] transition-colors">
      <div className="mb-4">{icon}</div>
      <h3 className="text-xl font-semibold">{title}</h3>
      <p className="mt-2 text-white/70">{desc}</p>
    </div>
  );

  const ico = (d: string) => (
    <svg viewBox="0 0 24 24" className="w-7 h-7 text-[#F6CF4A]">
      <path fill="currentColor" d={d}/>
    </svg>
  );

  return (
    <section id="como-funciona" className="relative mx-auto max-w-7xl px-6 py-20">
      <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">¿Cómo funciona?</h2>
      <p className="mt-3 text-white/70 max-w-2xl">Tres pasos simples para encontrar claridad con una guía auténtica.</p>

      <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-6">
        <Item
          title="Elige a tu guía"
          desc="Explora talentos por estilo, especialidad y opiniones verificadas."
          icon={ico("M12 2a10 10 0 1 0 .001 20.001A10 10 0 0 0 12 2Zm0 5a3 3 0 1 1 0 6a3 3 0 0 1 0-6Zm0 11c-2.33 0-4.314-1.343-5.196-3.25A6.99 6.99 0 0 1 12 13c2.208 0 4.177.998 5.196 2.75C16.314 16.657 14.33 18 12 18Z")}
        />
        <Item
          title="Agenda en minutos"
          desc="Elige fecha, hora y formato: chat, audio o video."
          icon={ico("M7 2h10a2 2 0 0 1 2 2v2H5V4a2 2 0 0 1 2-2Zm12 6H5v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8Zm-9 4h6v2H10v-2Z")}
        />
        <Item
          title="Recibe tu lectura"
          desc="Espacio seguro, claro y sin juicios. Material de referencia incluido."
          icon={ico("M4 6h16v12H4z M8 10h8v2H8z M8 13h5v2H8z")}
        />
      </div>
    </section>
  );
}
