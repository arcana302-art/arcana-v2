'use client';

export default function MidCTA() {
  return (
    <section className="mx-auto max-w-7xl px-6 pb-8">
      <div className="rounded-3xl bg-gradient-to-r from-[#231133] to-[#1a0b28] ring-1 ring-white/10 p-8 md:p-10 flex flex-col md:flex-row items-center justify-between gap-6">
        <div>
          <h3 className="text-2xl md:text-3xl font-extrabold tracking-tight">¿Listx para tu lectura?</h3>
          <p className="mt-2 text-white/70">Agenda en minutos y recibe claridad hoy mismo.</p>
        </div>
        <a
          href="#"
          className="inline-flex items-center justify-center rounded-2xl px-6 h-14 text-white text-base font-semibold bg-[#9434ec] shadow-[0_12px_40px_-10px_rgba(148,52,236,0.55)] hover:scale-[1.03] active:scale-[0.98] transition-transform"
        >
          Agendar una consulta
        </a>
      </div>
    </section>
  );
}
