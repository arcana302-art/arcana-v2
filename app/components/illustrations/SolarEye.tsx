// app/components/illustrations/SolarEye.tsx
export default function SolarEye(props: { className?: string }) {
  const gold = "#F4D03F";
  const purple = "#7C3AED";
  return (
    <svg
      viewBox="0 0 560 560"
      xmlns="http://www.w3.org/2000/svg"
      className={props.className}
      aria-hidden="true"
    >
      <defs>
        <radialGradient id="iris" cx="50%" cy="50%">
          <stop offset="0%" stopColor="#A78BFA" />
          <stop offset="100%" stopColor={purple} />
        </radialGradient>
      </defs>

      {/* Rays */}
      <g transform="translate(280 280)">
        {Array.from({ length: 32 }).map((_, i) => {
          const a = (i * Math.PI * 2) / 32;
          const x1 = Math.cos(a) * 190;
          const y1 = Math.sin(a) * 190;
          const x2 = Math.cos(a) * 240;
          const y2 = Math.sin(a) * 240;
          return (
            <line
              key={i}
              x1={x1}
              y1={y1}
              x2={x2}
              y2={y2}
              stroke={gold}
              strokeWidth="4"
              strokeLinecap="round"
            />
          );
        })}
      </g>

      {/* Eye */}
      <path
        d="M80,280 Q280,120 480,280 Q280,440 80,280 Z"
        fill="none"
        stroke={gold}
        strokeWidth="6"
      />
      <ellipse cx="280" cy="280" rx="92" ry="64" fill="url(#iris)" />
      <circle cx="280" cy="280" r="22" fill="#0F0F1A" />
    </svg>
  );
}
