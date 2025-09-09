'use client';

import { useState } from 'react';
import Image from 'next/image';

export default function SiteHeader() {
  const [open, setOpen] = useState(false);

  const nav = [
    { href: '#como-funciona', label: '¿Cómo funciona?' },
    { href: '#beneficios', label: 'Beneficios' },
    { href: '#categorias', label: 'Categorías' },
    { href: '#guias', label: 'Guías' },
    { href: '#faq', label: 'FAQ' },
    { href: '#unete', label: 'Únete' },
  ];

  return (
    <header className="inset-x-0 top-0 z-40 border-b border-[#1f1630]/10 bg-[#FBF3FB]">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        {/* Brand */}
        <a href="/" className="flex items-center gap-2">
          <Image
            src="/brand/logo.svg"
            alt="Arcana"
            width={26}
            height={26}
            className="shrink-0"
            priority
          />
          <span className="text-[#1f1630] text-[15px] font-light tracking-tight">
            Arcana
          </span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-6 lg:flex">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm text-[#1f1630]/80 hover:text-[#1f1630] transition-colors"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Actions */}
        <div className="hidden items-center gap-3 lg:flex">
          <a
            href="#"
            className="inline-flex h-10 items-center justify-center rounded-xl px-4 text-sm font-semibold text-[#1f1630] ring-1 ring-[#1f1630]/12 hover:bg-[#1f1630]/5 transition"
          >
            Iniciar sesión
          </a>

          {/* Subscripción: igual estilo que “Iniciar sesión” */}
          <a
            href="#"
            className="inline-flex h-10 items-center justify-center rounded-xl px-4 text-sm font-semibold text-[#1f1630] ring-1 ring-[#1f1630]/12 hover:bg-[#1f1630]/5 transition"
          >
            Subscripción
          </a>

          <a
            href="#"
            className="inline-flex h-10 items-center justify-center rounded-xl px-5 text-sm font-semibold text-white bg-[#9434ec] shadow-[0_10px_30px_-10px_rgba(148,52,236,0.55)] hover:scale-[1.03] active:scale-[0.98] transition"
          >
            Agendar
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          aria-label="Abrir menú"
          onClick={() => setOpen(true)}
          className="inline-flex items-center justify-center rounded-lg p-2 text-[#1f1630]/80 ring-1 ring-[#1f1630]/12 hover:bg-[#1f1630]/5 lg:hidden"
        >
          <svg width="22" height="22" viewBox="0 0 24 24" className="fill-current">
            <path d="M3 6h18v2H3V6Zm0 5h18v2H3v-2Zm0 5h18v2H3v-2Z" />
          </svg>
        </button>
      </div>

      {/* Mobile drawer */}
      {open && (
        <div className="lg:hidden">
          <div
            className="fixed inset-0 z-40 bg-black/40"
            onClick={() => setOpen(false)}
            aria-hidden="true"
          />
          <div className="fixed right-0 top-0 z-50 h-full w-[78%] max-w-sm bg-[#FBF3FB] border-l border-[#1f1630]/10 shadow-2xl">
            <div className="flex h-16 items-center justify-between px-5 border-b border-[#1f1630]/10">
              <span className="text-[#1f1630] text-lg font-light tracking-tight">Arcana</span>
              <button
                aria-label="Cerrar menú"
                onClick={() => setOpen(false)}
                className="inline-flex items-center justify-center rounded-lg p-2 text-[#1f1630]/80 ring-1 ring-[#1f1630]/12 hover:bg-[#1f1630]/5"
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
                  className="block rounded-lg px-3 py-2 text-base font-medium text-[#1f1630]/90 hover:bg-[#1f1630]/5"
                >
                  {item.label}
                </a>
              ))}
            </nav>

            <div className="px-5 pb-8 pt-2 space-y-3">
              <a
                href="#"
                className="block w-full text-center rounded-xl px-4 py-2 text-sm font-semibold text-[#1f1630] ring-1 ring-[#1f1630]/12 hover:bg-[#1f1630]/5 transition"
              >
                Iniciar sesión
              </a>
              <a
                href="#"
                className="block w-full text-center rounded-xl px-4 py-2 text-sm font-semibold text-[#1f1630] ring-1 ring-[#1f1630]/12 hover:bg-[#1f1630]/5 transition"
              >
                Subscripción
              </a>
              <a
                href="#"
                className="block w-full text-center rounded-xl px-5 py-2.5 text-sm font-semibold text-white bg-[#9434ec] shadow-[0_10px_30px_-10px_rgba(148,52,236,0.55)]"
              >
                Agendar
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
