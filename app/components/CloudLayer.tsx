'use client';

export default function CloudLayer() {
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0 z-0 overflow-hidden"
    >
      {/* Carril de nubes, derecha -> izquierda */}
      <div className="cloud-belt">
        <div className="cloud-wrap">
          <img src="/brand/Nube1.png" alt="" className="cloud-piece" />
        </div>
        <div className="cloud-wrap">
          <img src="/brand/Nube1.png" alt="" className="cloud-piece" />
        </div>
        <div className="cloud-wrap">
          <img src="/brand/Nube1.png" alt="" className="cloud-piece" />
        </div>
      </div>

      <style jsx>{`
        @keyframes cloud-marquee-rtl {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-33.333%); }
        }

        .cloud-belt {
          position: absolute;
          top: 7rem;             /* baja el carril dentro del hero */
          left: 0;
          width: 300%;
          height: 280px;         /* altura visible consistente */
          display: flex;
          align-items: center;
          animation: cloud-marquee-rtl 70s linear infinite;
          will-change: transform;
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
          width: auto;
          object-fit: contain;
          opacity: 0.52; /* transparencia suave */
          /* Brillo que sigue la silueta (NO rectangular): */
          filter:
            contrast(1.06) brightness(1.03) saturate(1.05)
            drop-shadow(0 0 12px rgba(148, 52, 236, 0.22))
            drop-shadow(0 0 26px rgba(148, 52, 236, 0.16))
            drop-shadow(0 12px 28px rgba(0, 0, 0, 0.35));
          user-select: none;
          pointer-events: none;
        }

        @media (max-width: 1024px) {
          .cloud-belt { top: 6rem; height: 240px; }
          .cloud-piece {
            opacity: 0.56;
            filter:
              contrast(1.06) brightness(1.04) saturate(1.06)
              drop-shadow(0 0 10px rgba(148, 52, 236, 0.22))
              drop-shadow(0 0 22px rgba(148, 52, 236, 0.16))
              drop-shadow(0 10px 24px rgba(0,0,0,0.32));
          }
        }
        @media (max-width: 640px) {
          .cloud-belt { top: 5rem; height: 200px; }
          .cloud-piece { opacity: 0.6; }
        }
      `}</style>
    </div>
  );
}
