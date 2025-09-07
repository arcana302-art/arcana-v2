// app/components/CloudLayer.tsx
'use client';

export default function CloudLayer() {
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
    >
      {/* Cinta 300% con 3 copias para loop continuo */}
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
        /* Movimiento derecha → izquierda */
        @keyframes cloud-marquee-rtl {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-33.333%); }
        }

        .cloud-belt {
          position: absolute;
          top: 16%;           /* altura del carril sobre el hero */
          right: 0;
          height: 56%;        /* grosor de la banda de nubes */
          width: 300%;
          display: flex;
          align-items: center;
          animation: cloud-marquee-rtl 80s linear infinite;
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
          width: 100%;
          height: 100%;
          object-fit: contain;
          opacity: 0.52; /* más transparente */
          filter: contrast(1.05) brightness(1.02) saturate(1.04);
          user-select: none;
          pointer-events: none;
        }

        /* Iluminación suave centrada de la nube (no halo duro) */
        .glow {
          position: absolute;
          inset: 0;
          margin: auto;
          width: 60%;
          height: 70%;
          pointer-events: none;
          background: radial-gradient(
            circle at 50% 50%,
            rgba(148, 52, 236, 0.22) 0%,
            rgba(148, 52, 236, 0.14) 28%,
            rgba(230, 180, 255, 0.08) 48%,
            rgba(255, 255, 255, 0.00) 70%
          );
          mix-blend-mode: screen; /* ilumina solo el centro de la nube */
        }

        @media (max-width: 1024px) {
          .cloud-belt { top: 14%; height: 50%; }
          .glow { width: 66%; height: 72%; }
        }

        @media (max-width: 640px) {
          .cloud-belt { top: 12%; height: 46%; }
          .cloud-piece { opacity: 0.58; } /* un poquito más visible en móvil */
          .glow { width: 70%; height: 74%; }
        }
      `}</style>
    </div>
  );
}
