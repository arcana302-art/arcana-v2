// app/components/Footer.tsx
export default function Footer() {
  return (
    <footer className="relative z-10 border-t border-white/10 bg-white/5 py-10 backdrop-blur">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-4 sm:flex-row sm:px-6 lg:px-8">
        <div className="text-white/80">
          <span className="font-semibold text-white">Arcana</span> ·
          <span className="ml-2 text-white/60">
            &copy; {new Date().getFullYear()} Todos los derechos reservados
          </span>
        </div>

        <nav className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm">
          <a href="#como-funciona" className="text-white/70 hover:text-white/95">
            ¿Cómo funciona?
          </a>
          <a href="#" className="text-white/70 hover:text-white/95">
            Especialistas
          </a>
          <a href="#agenda" className="text-white/70 hover:text-white/95">
            Agenda
          </a>
          <a href="#" className="text-white/60 hover:text-white/90">
            Términos
          </a>
          <a href="#" className="text-white/60 hover:text-white/90">
            Privacidad
          </a>
        </nav>
      </div>
    </footer>
  );
}
