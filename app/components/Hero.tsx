'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useMemo } from 'react';

const HERO_IMG = '/brand/hero-card-eye.png';
const CLOUD_IMG = '/brand/Nube1.png';

const BTN_PURPLE = '#9434EC';

const Hero = () => {
  const talents = useMemo(
    () => [
      { label: 'Lecturas', href: '#' },
      { label: 'Astrología', href: '#' },
      { label: 'Sanación', href: '#' },
      { label: 'Adivinación', href: '#' },
      { label: 'Hipnosis', href: '#' },
      { label: 'Numerología', href: '#' },
    ],
    []
  );

  return (
    <section className="relative w-full bg-white">
      <div className="container mx-auto px-4 pt-12 pb-24 flex flex-col lg:flex-row items-center">
        {/* Texto */}
        <div className="w-full lg:w-1/2 flex flex-col items-start text-left">
          <h1
            className="text-[35px] sm:text-[48px] font-bold text-black leading-tight"
          >
            El universo se comunica <br />
            en símbolos, energía <br />
            y estrellas
          </h1>

          {/* Bullets talentos */}
          <div className="mt-8 flex flex-wrap gap-2 sm:gap-3">
            {talents.map((t) => (
              <Link
                key={t.href}
                href={t.href}
                className={`
                  group rounded-full inline-flex items-center border
                  transition-colors
                  border-[${BTN_PURPLE}]
                  text-[${BTN_PURPLE}]
                  bg-transparent hover:bg-[rgba(148,52,236,0.06)]
                  hover:shadow-[0_0_0_3px_rgba(148,52,236,0.15)]
                  h-6 sm:h-10
                  text-[10px] sm:text-[15px]
                  px-2 sm:px-4
                `}
              >
                {t.label}
              </Link>
            ))}
          </div>

          {/* Botones acción */}
          <div className="mt-10 flex flex-row gap-4">
            <Link
              href="#"
              className="bg-[#9434EC] text-white px-6 py-3 rounded-full text-sm font-medium hover:bg-[#7b28c5] transition"
            >
              Agenda una consulta
            </Link>
            <Link
              href="#"
              className="border border-[#9434EC] text-[#9434EC] px-6 py-3 rounded-full text-sm font-medium hover:bg-[rgba(148,52,236,0.06)] transition"
            >
              Únete como especialista
            </Link>
          </div>
        </div>

        {/* Imagen */}
        <div className="w-full lg:w-1/2 relative mt-12 lg:mt-0 flex justify-center">
          {/* Nube centrada */}
          <div className="absolute inset-0 flex items-center justify-center">
            <Image
              src={CLOUD_IMG}
              alt="Cloud background"
              width={600}
              height={600}
              className="object-contain opacity-70"
            />
          </div>
          {/* Carta */}
          <Image
            src={HERO_IMG}
            alt="Hero Image"
            width={420}
            height={420}
            className="relative z-10 w-[85%] sm:w-[100%] h-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
