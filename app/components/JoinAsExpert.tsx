'use client';

export default function JoinAsExpert() {
  return (
    <section id="unete" className="mx-auto max-w-7xl px-6 py-20">
      <div className="rounded-3xl bg-white/5 ring-1 ring-white/10 p-8 md:p-10">
        <div className="md:flex md:items-center md:justify-between gap-8">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">¿Eres guía? Únete a Arcana</h2>
            <ul className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-2 text-white/80">
              <li>• Agenda y pagos integrados</li>
              <li>• Espacio seguro y comunidad</li>
              <li>• Perfil profesional y reseñas</li>
              <li>• Soporte y materiales</li>
            </ul>
          </div>
          <a
            href="#"
            className="mt-6 md:mt-0 inline-flex items-center justify-center rounded-2xl px-6 h-14 text-white text-base font-semibold ring-1 ring-white/15 bg-white/5 hover:bg-white/[0.08] transition-colors"
          >
            Postular ahora
          </a>
        </div>
      </div>
    </section>
  );
}
