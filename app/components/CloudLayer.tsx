'use client';

export default function CloudLayer() {
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0 z-0 overflow-hidden"
    >
      {/* Carril de nubes (altura fija para que siempre se vea) */}
      <div className="cloud-belt">
        <div className="cloud-wrap">
          <img src="/brand/Nube1.png" alt="" className="cloud-piece" />
          <div className="glow" />
        </div>
        <div className="cloud-wrap">
          <img src="/brand/Nube1.png" alt="" className="cloud-piece" />
          <div className="glow" />
        </div>
        <div className="cloud-wrap">
          <img src="/brand/Nube1.png" alt="" className="cloud-piece" />
          <div className="glow" />
        </div>
      </div>

      <style jsx>{`
        /* Loop continuo: derecha → izquierda */
        @keyframes cloud-marquee-rtl {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-33.333%); }
        }

        .cloud-belt {
          position: absolute;
          top: 7rem;            /* baja el carril dentro del hero */
          left: 0;
          width: 300%;
          height: 280px;        /* altura visible CONSISTENTE */
          display: flex;
          align-items: center;
          animation: cloud-marquee-rtl 70s linear infinite;
        }

        .cloud-wrap {
          position: relative;
          width: 33.333%;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .cloud-piece {
          height: 100%;
          width: auto;          /* mantiene proporción de la nube */
          object-fit: contain;
          opacity: 0.48;        /* transparencia pedida */
          filter: contrast(1.06) brightness(1.02) saturate(1.03);
          user-select: none;
          pointer-events: none;
        }

        /* Iluminación sutil en el centro de cada copia (no halo duro) */
        .glow {
          position: absolute;
          inset: 0;
          margin: auto;
          width: 60%;
          height: 70%;
          pointer-events: none;
          background: radial-gradient(
            circle at 50% 50%,
            rgba(148, 52, 236, 0.18) 0%,
            rgba(148, 52, 236, 0.10) 28%,
            rgba(230, 180, 255, 0.06) 48%,
            rgba(255, 255, 255, 0.00) 70%
          );
          mix-blend-mode: screen;
        }

        @media (max-width: 1024px) {
          .cloud-belt { top: 6rem; height: 240px; }
          .glow { width: 66%; height: 72%; }
        }
        @media (max-width: 640px) {
          .cloud-belt { top: 5rem; height: 200px; }
          .cloud-piece { opacity: 0.54; } /* un toque más visible en móvil */
          .glow { width: 70%; height: 74%; }
        }
      `}</style>
    </div>
  );
}
