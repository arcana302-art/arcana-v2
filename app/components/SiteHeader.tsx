'use client';

import { useState } from 'react';
import Image from 'next/image';

type SubTalent = { label: string };
type Talent = { label: string; id: string; items: SubTalent[] };

const TALENTS: Talent[] = [
  {
    id: 'lecturas',
    label: 'Lecturas',
    items: [
      { label: 'Tarot' },
      { label: 'Clarividencia' },
      { label: 'Oráculos' },
      { label: 'Lectura psíquica' },
      { label: 'Mediumnidad' },
      { label: 'Registros akáshicos' },
      { label: 'Quiromancia' },
      { label: 'Café' },
    ],
  },
  {
    id: 'astrologia',
    label: 'Astrología',
    items: [
      { label: 'Carta natal' },
      { label: 'Carta astral' },
      { label: 'Sinastría' },
      { label: 'Kármica' },
      { label: 'Predictiva' },
    ],
  },
  {
    id: 'sanacion',
    label: 'Sanación',
    items: [
      { label: 'Terapia holística' },
      { label: 'Reiki' },
      { label: 'Arcángeles' },
      { label: 'Energética' },
    ],
  },
  {
    id: 'adivinacion',
    label: 'Adivinación',
    items: [{ label: 'Péndulo' }, { label: 'Runas' }],
  },
  {
    id: 'hipnosis',
    label: 'Hipnosis',
    items: [
      { label: 'Clínica' },
      { label: 'Regresiva' },
      { label: 'Desarrollo personal' },
      { label: 'Espiritual' },
    ],
  },
  {
    id: 'numerologia',
    label: 'Numerología',
    items: [
      { label: 'Tántrica' },
      { label: 'Kármica' },
      { label: 'Personal' },
      { label: 'Negocios' },
      { label: 'Amor' },
    ],
  },
];

export default function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [openTalent, setOpenTalent] = useState<string | null>(null);

  const nav = [
    { href: '#como-funciona', label: '¿Cómo funciona?' },
    { href: '#beneficios', label: 'Beneficios' },
    { href: '#categorias', label: 'Categorías' },
    { href: '#guias', label: 'Guías' },
    { href: '#faq', label: 'FAQ' },
    { href: '#unete', label: 'Únete' },
  ];

  return (
    <header
      className="
        relative z-40
        border-b border-white/10
        bg-[#17031F]/55 backdrop-blur-md
      "
    >
      {/* Fila superior */}
      <div className="mx-auto flex h-24 max-w-7xl items-center justify-between px-6">
        {/* Marca: Arcana (texto + logo) */}
        <a href="/" className="flex items-center gap-1.5">
          <span className="text-white/95 text-[0.85rem] font-medium tracking-tight">
            Arcana
          </span>
          <Image
            src="/brand/logo.svg"
            alt="Arcana"
            width={36}
            height={36}
            priority
            className="w-[36px] h-[36px]"
          />
        </a>

        {/* Nav desktop */}
        <nav className="hidden items-center gap-6 lg:flex">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm text-white/80 hover:text-white transition-colors"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Acciones */}
        <div className="hidden items-center gap-3 lg:flex">
          <a
            href="#"
            className="inline-flex h-11 items-center justify-center rounded-xl px-4 text-sm font-semibold text-white/90 ring-1 ring-white/15 hover:bg-white/5 transition"
          >
            Iniciar sesión
          </a>
          <a
            href="#"
            className="inline-flex h-11 items-center justify-center rounded-xl px-5 text-sm font-semibold text-white bg-[#9434ec] shadow-[0_10px_30px_-10px_rgba(148,52,236,0.55)] hover:scale-[1.03] active:scale-[0.98] transition"
          >
            Agendar
          </a>
        </div>

        {/* Toggle mobile */}
        <button
          aria-label="Abrir menú"
          onClick={() => setOpen(true)}
          className="inline-flex items-center justify-center rounded-lg p-2 text-white/80 ring-1 ring-white/15 hover:bg-white/5 lg:hidden"
        >
          <svg width="22" height="22" viewBox="0 0 24 24" className="fill-current">
            <path d="M3 6h18v2H3V6Zm0 5h18v2H3v-2Zm0 5h18v2H3v-2Z" />
          </svg>
        </button>
      </div>

      {/* Separador morado */}
      <div className="h-[2px] bg-[#9434ec]" />

      {/* Talentos desktop (hover) */}
      <div className="mx-auto max-w-7xl px-6">
        <nav className="relative hidden lg:block">
          <ul className="flex flex-wrap items-center gap-3 py-3">
            {TALENTS.map((tal) => (
              <li key={tal.id} className="group relative">
                {/* Trigger con highlight morado + glow al hover */}
                <a
                  href={`#talento-${tal.id}`}
                  className="
                    inline-flex items-center gap-2
                    rounded-full px-4 py-1.5 text-sm
                    text-white/85 ring-1 ring-white/12
                    bg-white/[0.04] transition
                    hover:bg-white/[0.08]
                    group-hover:text-[#9434ec]
                    group-hover:[text-shadow:0_0_10px_rgba(148,52,236,0.75)]
                  "
                >
                  {tal.label}
                  <svg width="16" height="16" viewBox="0 0 24 24" className="opacity-80">
                    <path fill="currentColor" d="M7 10l5 5 5-5z" />
                  </svg>
                </a>

                {/* Subtalentos informativos (sin links) */}
                <div
                  className="
                    absolute left-0 top-full mt-2 hidden
                    min-w-[240px] rounded-xl border border-white/10
                    bg-[#1b0b24] p-2 shadow-2xl
                    group-hover:block
                  "
                >
                  <ul className="max-h-[60vh] overflow-auto pr-1">
                    {tal.items.map((sub, i) => (
                      <li key={`${tal.id}-${i}`}>
                        <span
                          className="
                            block cursor-default select-text
                            rounded-lg px-3 py-2 text-sm
                            text-white/85
                          "
                        >
                          {sub.label}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      {/* Drawer móvil */}
      {open && (
        <div className="lg:hidden">
          <div
            className="fixed inset-0 z-40 bg-black/40"
            onClick={() => setOpen(false)}
            aria-hidden="true"
          />
          <div className="fixed right-0 top-0 z-50 h-full w-[78%] max-w-sm bg-[#17031F] border-l border-white/10 shadow-2xl">
            <div className="flex h-16 items-center justify-between px-5 border-b border-white/10">
              <div className="flex items-center gap-2">
                <span className="text-white/95 text-base font-semibold tracking-tight">
                  Arcana
                </span>
                <Image
                  src="/brand/logo.svg"
                  alt="Arcana"
                  width={24}
                  height={24}
                  className="h-6 w-6"
                />
              </div>
              <button
                aria-label="Cerrar menú"
                onClick={() => setOpen(false)}
                className="inline-flex items-center justify-center rounded-lg p-2 text-white/80 ring-1 ring-white/15 hover:bg-white/5"
              >
                <svg width="22" height="22" viewBox="0 0 24 24" className="fill-current">
                  <path d="M18.3 5.71 12 12l6.3 6.29-1.41 1.42L10.59 13.4 4.3 19.71 2.89 18.3 9.18 12 2.89 5.71 4.3 4.29 10.59 10.6l6.3-6.31 1.41 1.42Z" />
                </svg>
              </button>
            </div>

            {/* Links superiores */}
            <nav className="px-5 py-6 space-y-2">
              {nav.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-lg px-3 py-2 text-base font-medium text-white/90 hover:bg-white/5"
                >
                  {item.label}
                </a>
              ))}
            </nav>

            {/* Talentos como acordeones; subtalentos sin link */}
            <div className="px-5 pb-6">
              <div className="text-white/60 text-xs uppercase tracking-wider mb-2">
                Talentos
              </div>
              <ul className="space-y-2">
                {TALENTS.map((tal) => {
                  const isOpen = openTalent === tal.id;
                  return (
                    <li key={tal.id}>
                      <button
                        className="
                          flex w-full items-center justify-between
                          rounded-lg px-3 py-2 text-left text-white/90
                          ring-1 ring-white/12 hover:bg-white/5
                        "
                        onClick={() => setOpenTalent(isOpen ? null : tal.id)}
                        aria-expanded={isOpen}
                        aria-controls={`panel-${tal.id}`}
                      >
                        <span className="text-[15px]">{tal.label}</span>
                        <svg
                          width="18"
                          height="18"
                          viewBox="0 0 24 24"
                          className={`transition-transform ${isOpen ? 'rotate-180' : ''}`}
                        >
                          <path fill="currentColor" d="M7 10l5 5 5-5z" />
                        </svg>
                      </button>
                      {isOpen && (
                        <ul id={`panel-${tal.id}`} className="mt-1 space-y-1 rounded-lg bg-white/[0.03] p-2">
                          {tal.items.map((sub, i) => (
                            <li key={`${tal.id}-m-${i}`}>
                              <span className="block rounded-md px-3 py-2 text-[15px] text-white/85">
                                {sub.label}
                              </span>
                            </li>
                          ))}
                        </ul>
                      )}
                    </li>
                  );
                })}
              </ul>
            </div>

            {/* Acciones */}
            <div className="px-5 pb-8 pt-2 space-y-3">
              <a
                href="#"
                className="block w-full text-center rounded-xl px-4 py-2 text-sm font-semibold text-white/90 ring-1 ring-white/15 hover:bg-white/5 transition"
              >
                Iniciar sesión
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
