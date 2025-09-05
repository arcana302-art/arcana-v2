export default function Page(){
  return (
    <section className="mx-auto max-w-5xl px-6 py-16 text-center">
      <h1 className="text-5xl font-bold tracking-tight">Arcana v2</h1>
      <p className="mt-4 text-zinc-300">Plantilla limpia lista para Tailwind.</p>
      <div className="mt-8 flex items-center justify-center gap-3">
        <a href="#agenda" className="btn-arcana">Agendar una consulta</a>
        <a href="#unete" className="btn-arcana">Únete como especialista</a>
      </div>
    </section>
  );
}
