'use client';

import { useState } from 'react';
import Image from 'next/image';

const BRAND_PURPLE = '#9434ec';

export default function SiteHeader() {
  const [open, setOpen] = useState(false);

  // Navegación principal (arriba, al lado del logo)
  const nav = [
    { href: '#como-funciona', label: '¿Cómo funciona?' },
    { href: '#beneficios',     label: 'Beneficios' },
    { href: '#categorias',     label: 'Categorías' },
    { href: '#guias',          label: 'Guías' },
    { href: '#faq',            label: 'FAQ' },
    { href: '#unete',          label: 'Únete' },
  ];

  // Talentos bajo la línea morada
  const talents = [
    { href: '#t-lecturas',     label: 'Lecturas' },
    { href: '#t-astrologia',   label: 'Astrología' },
    { href: '#t-sanacion',     label: 'Sanación' },
    { href: '#t-adivinacion',  label: 'Adivinación' },
    { href: '#t-hipnosis',     label: 'Hipnosis' },
    { href: '#t-numerologia',  label: 'Numerología' },
  ];

  return (
    <header className="inset-x-0 top-0 z-40 bg-[rgb(251,243,251)]">
      {/* Fila superior: logo + nav + acciones */}
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        {/* Brand (logo + texto Arcana) */}
        <a href="/" className="flex items-center gap-2">
          <Image
            src="/brand/logo.svg"
            alt="Arcana"
            width={22} // (mantiene la reducción previa)
            height={22}
            priority
            className="select-none"
          />
          <span className="text-neutral-900 text-[14.4px] font-medium tracking-tight">Arcana</span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-6 lg:flex">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm text-neutral-700 hover:text-neutral-900 transition-colors"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Actions (incluye Suscripción) */}
        <div className="hidden items-center gap-3 lg:flex">
          <a
            href="#"
            className="inline-flex h-10 items-center justify-center rounded-xl px-4 text-sm font-semibold text-neutral-800 ring-1 ring-neutral-300 hover:bg-neutral-100 transition"
          >
            Iniciar sesión
          </a>
          <a
            href="#"
            className="inline-flex h-10 items-center justify-center rounded-xl px-5 text-sm font-semibold text-white"
            style={{
              backgroundColor: BRAND_PURPLE,
              boxShadow: '0 10px 30px -10px rgba(148,52,236,0.55)',
            }}
          >
            Agendar
          </a>
          <a
            href="#"
            className="inline-flex h-10 items-center justify-center rounded-xl px-5 text-sm font-semibold text-white"
            style={{
              backgroundColor: BRAND_PURPLE,
              boxShadow: '0 10px 30px -10px rgba(148,52,236,0.55)',
            }}
          >
            Suscripción
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          aria-label="Abrir menú"
          onClick={() => setOpen(true)}
          className="inline-flex items-center justify-center rounded-lg p-2 text-neutral-700 ring-1 ring-neutral-300 hover:bg-neutral-100 lg:hidden"
        >
          <svg width="22" height="22" viewBox="0 0 24 24" className="fill-current">
            <path d="M3 6h18v2H3V6Zm0 5h18v2H3v-2Zm0 5h18v2H3v-2Z" />
          </svg>
        </button>
      </div>

      {/* Línea morada divisoria */}
      <div
        className="h-[1px] w-full"
        style={{ backgroundColor: BRAND_PURPLE }}
        aria-hidden="true"
      />

      {/* Talentos (debajo de la línea) */}
      <div className="bg-[rgb(251,243,251)]">
        <nav className="mx-auto max-w-7xl px-6 py-2 flex flex-wrap gap-8">
          {talents.map((t) => (
            <a
              key={t.href}
              href={t.href}
              // Botón transparente siempre con padding fijo (sin saltos),
              // borde solo visible en hover (apariencia de “caja”)
              className="inline-flex items-center rounded-xl px-3 py-1.5 text-sm font-medium transition-colors ring-1 ring-transparent hover:ring-1"
              style={{
                color: BRAND_PURPLE,
                // ring transparent por defecto; en hover cambiamos a morado
              }}
              onMouseEnter={(e) => {
                (e.currentTarget.style as any).boxShadow = `0 6px 18px -10px rgba(148,52,236,0.35)`;
                (e.currentTarget.style as any).borderColor = BRAND_PURPLE;
                (e.currentTarget.style as any).borderWidth = '1px';
                (e.currentTarget.style as any).borderStyle = 'solid';
              }}
              onMouseLeave={(e) => {
                (e.currentTarget.style as any).boxShadow = 'none';
                (e.currentTarget.style as any).borderColor = 'transparent';
              }}
            >
              {t.label}
            </a>
          ))}
        </nav>
      </div>

      {/* Mobile drawer */}
      {open && (
        <div className="lg:hidden">
          <div
            className="fixed inset-0 z-40 bg-black/40"
            onClick={() => setOpen(false)}
            aria-hidden="true"
          />
          <div className="fixed right-0 top-0 z-50 h-full w-[78%] max-w-sm bg-[rgb(251,243,251)] border-l border-neutral-200 shadow-2xl">
            <div className="flex h-16 items-center justify-between px-5 border-b border-neutral-200">
              <span className="text-neutral-900 text-lg font-medium tracking-tight">Arcana</span>
              <button
                aria-label="Cerrar menú"
                onClick={() => setOpen(false)}
                className="inline-flex items-center justify-center rounded-lg p-2 text-neutral-700 ring-1 ring-neutral-300 hover:bg-neutral-100"
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
                  className="block rounded-lg px-3 py-2 text-base font-medium text-neutral-800 hover:bg-neutral-100"
                >
                  {item.label}
                </a>
              ))}
            </nav>

            <div className="px-5 pb-8 pt-2 space-y-3">
              <a
                href="#"
                className="block w-full text-center rounded-xl px-4 py-2 text-sm font-semibold text-neutral-800 ring-1 ring-neutral-300 hover:bg-neutral-100 transition"
              >
                Iniciar sesión
              </a>
              <a
                href="#"
                className="block w-full text-center rounded-xl px-5 py-2.5 text-sm font-semibold text-white"
                style={{
                  backgroundColor: BRAND_PURPLE,
                  boxShadow: '0 10px 30px -10px rgba(148,52,236,0.55)',
                }}
              >
                Agendar
              </a>
              <a
                href="#"
                className="block w-full text-center rounded-xl px-5 py-2.5 text-sm font-semibold text-white"
                style={{
                  backgroundColor: BRAND_PURPLE,
                  boxShadow: '0 10px 30px -10px rgba(148,52,236,0.55)',
                }}
              >
                Suscripción
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
