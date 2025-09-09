'use client';

import Image from 'next/image';

const HERO_IMG = '/brand/hero-card-eye.png';
const CLOUD_IMG = '/brand/Nube1.png';

// (Si aquí ya tienes tus Star() y demás, déjalos como están)

// ⬇️ Solo muestro la parte relevante del componente para la nube y el contenedor
export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[rgb(251,243,251)]">
      {/* Nube por detrás del contenido */}
      <div className="pointer-events-none absolute inset-0 z-[5]">
        <img src={CLOUD_IMG} alt="" className="cloud-img" aria-hidden="true" />
      </div>

      {/* El resto de tu contenido actual del Hero… */}
      {/* ... */}
      {/* ... */}

      <style jsx>{`
        /* NUBE: mantener tamaño y un vaivén más corto hacia la izquierda para dejar aire */
        .cloud-img {
          position: absolute;
          top: 10%;
          left: 60%;
          width: 1200px;
          max-width: none;
          opacity: 0.6;
          transform: translateX(-50%); /* punto medio estable */
          -webkit-mask-image: radial-gradient(150% 130% at 56% 46%, #000 62%, transparent 100%);
          mask-image: radial-gradient(150% 130% at 56% 46%, #000 62%, transparent 100%);
          animation: cloud-sway 52s ease-in-out infinite; /* mismo ritmo general */
        }
        @media (min-width: 1024px) {
          .cloud-img {
            top: 8%;
            width: 1280px;
          }
        }
        /* Vaivén más sutil hacia la izquierda (no invade el bloque de bullets) */
        @keyframes cloud-sway {
          0%   { transform: translateX(-50%) translateX(6%); }
          50%  { transform: translateX(-50%) translateX(-3%); } /* antes iba más a la izquierda */
          100% { transform: translateX(-50%) translateX(6%); }
        }
      `}</style>
    </section>
  );
}
