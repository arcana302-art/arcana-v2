'use client';

import Image from 'next/image';

/**
 * Capa de nube sin halo ni sombras.
 * - Corre de derecha → izquierda en loop.
 * - Queda detrás del contenido del hero.
 * - No altera el fondo (sin filtros).
 * Requiere: public/brand/Nube1.png
 */
export default function CloudLayer() {
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
    >
      {/* Banda 300% con 3 copias para un loop suave sin huecos */}
      <div className="cloud-belt absolute top-[18%] right-0 h-[60%] w-[300%] flex items-center">
        <img src="/brand/Nube1.png" alt="" className="cloud-piece w-1/3" />
        <img src="/brand/Nube1.png" alt="" className="cloud-piece w-1/3" />
        <img src="/brand/Nube1.png" alt="" className="cloud-piece w-1/3" />
      </div>

      <style jsx>{`
        @keyframes cloud-marquee-rtl {
          0% { transform: translateX(0); }
          100% { transform: translateX(-33.333%); }
        }
        .cloud-belt {
          animation: cloud-marquee-rtl 70s linear infinite;
        }
        .cloud-piece {
          height: 100%;
          object-fit: contain;
          opacity: 0.85;     /* sin brillo extra */
          filter: none;      /* sin halos/sombras */
          min-width: 800px;  /* asegura cobertura */
          user-select: none;
        }
        @media (max-width: 640px) {
          .cloud-piece {
            min-width: 640px;
            opacity: 0.9;
          }
        }
      `}</style>
    </div>
  );
}
