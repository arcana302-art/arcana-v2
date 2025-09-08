'use client';

import { useState } from 'react';
import Image from 'next/image';

export default function SiteHeader() {
  const [open, setOpen] = useState(false);

  const nav = [
    { href: '#como-funciona', label: '¿Cómo funciona?' },
    { href: '#beneficios',     label: 'Beneficios' },
    { href: '#categorias',     label: 'Categorías' },
    { href: '#guias',          label: 'Guías' },
    { href: '#faq',            label: 'FAQ' },
    { href: '#unete',          label: 'Únete' },
  ];

  // Talentos (links ancla; sin desplegables)
  const talentos = [
    { href: '#lecturas',    label: 'Lecturas' },
    { href: '#astrologia',  label: 'Astrología' },
    { href: '#sanacion',    label: 'Sanación' },
    { href: '#adivinacion', label: 'Adivinación' },
    { href: '#hipnosis',    label: 'Hipnosis' },
    { href: '#numerologia', label: 'Numerología' },
  ];

  return (
    <header className="inset-x-0 top-0 z-40 bg-[#FBF3FB]">
      {/* Barra principal */}
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6 border-b border-[#9434ec]/20">
        {/* Brand */}
        <a href="/" className="flex items-center gap-1.5">
          <Image
            src="/brand/logo.svg"
            alt="Arcana"
            width={28}
            height={28}
            priority
            className="h-7 w-7"
          />
          <span className="text-[17px] font-medium tracking-tight text-[#0f1020]">
            Arcana
          </span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-6 lg:flex">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm text-[#0f1020]/80 hover:text-[#0f1020] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#9434ec]/50 rounded-md px-1 py-0.5 transition-colors"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Actions */}
        <div className="hidden items-center gap-3 lg:flex">
          <a
            href="#"
            className="inline-flex h-10 items-center justify-center rounded-xl px-4 text-sm font-semibold text-[#0f1020] ring-1 ring-[#9434ec]/25 hover:bg-[#9434ec]/10 transition"
          >
            Iniciar sesión
          </a>
          <a
            href="#"
            className="inline-flex h-10 items-center justify-center rounded-xl px-5 text-sm font-semibold text-white bg-[#9434ec] shadow-[0_10px_30px_-10px_rgba(148,52,236,0.45)] hover:scale-[1.03] active:scale-[0.98] transition"
          >
            Agendar
          </a>
          <a
            href="#"
            className="inline-flex h-10 items-center justify-center rounded-xl px-5 text-sm font-semibold text-[#0f1020] ring-1 ring-[#9434ec]/25 bg-[#9434ec]/10 hover:bg-[#9434ec]/12 transition"
          >
            Suscripción
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          aria-label="Abrir menú"
          onClick={() => setOpen(true)}
          className="inline-flex items-center justify-center rounded-lg p-2 text-[#0f1020]/80 ring-1 ring-[#9434ec]/20 hover:bg-[#9434ec]/10 lg:hidden"
        >
          <svg width="22" height="22" viewBox="0 0 24 24" className="fill-current">
            <path d="M3 6h18v2H3V6Zm0 5h18v2H3v-2Zm0 5h18v2H3v-2Z" />
          </svg>
        </button>
      </div>

      {/* Línea morada */}
      <div className="h-[2px] w-full bg-[#9434ec]/80" />

      {/* Submenú de talentos (debajo de la línea) */}
      <div className="hidden lg:block bg-[#FBF3FB]">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2 py-2">
            {talentos.map((t) => (
              <a
                key={t.href}
                href={t.href}
                className="text-[13.5px] text-[#c9a6ff] hover:text-[#9434ec] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#9434ec]/50 rounded px-1 py-0.5 transition-colors"
              >
                {t.label}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Mobile drawer */}
      {open && (
        <div className="lg:hidden">
          <div
            className="fixed inset-0 z-40 bg-black/30"
            onClick={() => setOpen(false)}
            aria-hidden="true"
          />
          <div className="fixed right-0 top-0 z-50 h-full w-[78%] max-w-sm bg-[#FBF3FB] border-l border-[#9434ec]/20 shadow-2xl">
            <div className="flex h-16 items-center justify-between px-5 border-b border-[#9434ec]/20">
              <span className="text-[#0f1020] text-lg font-medium tracking-tight">Arcana</span>
              <button
                aria-label="Cerrar menú"
                onClick={() => setOpen(false)}
                className="inline-flex items-center justify-center rounded-lg p-2 text-[#0f1020]/80 ring-1 ring-[#9434ec]/20 hover:bg-[#9434ec]/10"
              >
                <svg width="22" height="22" viewBox="0 0 24 24" className="fill-current">
                  <path d="M18.3 5.71 12 12l6.3 6.29-1.41 1.42L10.59 13.4 4.3 19.71 2.89 18.3 9.18 12 2.89 5.71 4.3 4.29 10.59 10.6l6.3-6.31 1.41 1.42Z" />
                </svg>
              </button>
            </div>

            <nav className="px-5 py-6 space-y-2">
              {nav.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-lg px-3 py-2 text-base font-medium text-[#0f1020] hover:bg-[#9434ec]/10"
                >
                  {item.label}
                </a>
              ))}
            </nav>

            <div className="px-5 pb-4 space-y-3">
              <a
                href="#"
                className="block w-full text-center rounded-xl px-4 py-2 text-sm font-semibold text-[#0f1020] ring-1 ring-[#9434ec]/25 hover:bg-[#9434ec]/10 transition"
              >
                Iniciar sesión
              </a>
              <a
                href="#"
                className="block w-full text-center rounded-xl px-5 py-2.5 text-sm font-semibold text-white bg-[#9434ec] shadow-[0_10px_30px_-10px_rgba(148,52,236,0.45)]"
              >
                Agendar
              </a>
              <a
                href="#"
                className="block w-full text-center rounded-xl px-5 py-2.5 text-sm font-semibold text-[#0f1020] ring-1 ring-[#9434ec]/25 bg-[#9434ec]/10 hover:bg-[#9434ec]/12 transition"
              >
                Suscripción
              </a>
            </div>

            {/* Talentos en mobile */}
            <div className="px-5 pb-8">
              <div className="mb-2 text-xs uppercase tracking-wide text-[#0f1020]/60">Talentos</div>
              <div className="flex flex-wrap gap-3">
                {talentos.map((t) => (
                  <a
                    key={t.href}
                    href={t.href}
                    onClick={() => setOpen(false)}
                    className="text-sm text-[#c9a6ff] hover:text-[#9434ec] rounded px-2 py-1 transition-colors"
                  >
                    {t.label}
                  </a>
                ))}
              </div>
            </div>

          </div>
        </div>
      )}
    </header>
  );
}
