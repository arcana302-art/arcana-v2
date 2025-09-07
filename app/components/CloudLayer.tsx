'use client';

import Image from 'next/image';

export default function CloudLayer() {
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
    >
      {/* Nube: sin halo, sin sombras, solo animación */}
      <div className="absolute top-16 md:top-24 right-[-15%] w-[900px] md:w-[820px] opacity-30">
        <Image
          src="/brand/Nube1.png"
          alt=""
          width={1800}
          height={800}
          priority
          className="cloud-run select-none"
        />
      </div>
    </div>
  );
}
