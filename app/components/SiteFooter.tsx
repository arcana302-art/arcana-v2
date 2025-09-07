'use client';

export default function SiteFooter() {
  return (
    <footer className="mt-10 border-t border-white/10">
      <div className="mx-auto max-w-7xl px-6 py-10 grid grid-cols-1 sm:grid-cols-3 gap-6 text-sm text-white/70">
        <div>
          <div className="text-white font-semibold">Arcana</div>
          <p className="mt-2">Claridad aquí y ahora con guías auténticas.</p>
        </div>
        <div>
          <div className="text-white font-semibold">Legal</div>
          <ul className="mt-2 space-y-1">
            <li><a href="#" className="hover:underline">Términos</a></li>
            <li><a href="#" className="hover:underline">Privacidad</a></li>
            <li><a href="#" className="hover:underline">Reembolsos</a></li>
          </ul>
        </div>
        <div>
          <div className="text-white font-semibold">Contacto</div>
          <ul className="mt-2 space-y-1">
            <li><a href="#" className="hover:underline">soporte@arcana.app</a></li>
            <li><a href="#" className="hover:underline">Instagram</a></li>
          </ul>
        </div>
      </div>
      <div className="text-center text-xs text-white/40 pb-8">© {new Date().getFullYear()} Arcana</div>
    </footer>
  );
}
