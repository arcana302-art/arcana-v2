// app/components/illustrations/EyeLaurel.tsx
export default function EyeLaurel(props: { className?: string }) {
  const gold = "#F4D03F";
  return (
    <svg
      viewBox="0 0 600 420"
      xmlns="http://www.w3.org/2000/svg"
      className={props.className}
      aria-hidden="true"
    >
      {/* Eye */}
      <path
        d="M70,210 Q300,60 530,210 Q300,360 70,210 Z"
        fill="none"
        stroke={gold}
        strokeWidth="6"
      />
      <ellipse cx="300" cy="210" rx="84" ry="52" fill="none" stroke={gold} strokeWidth="5" />
      <circle cx="300" cy="210" r="18" fill={gold} />
      {/* Moons */}
      <path d="M165,210 a28,28 0 1,0 0,56 a22,28 0 1,1 0,-56" fill={gold} />
      <path d="M435,210 a28,28 0 1,1 0,56 a22,28 0 1,0 0,-56" fill={gold} />
      {/* Laurels */}
      <g fill="none" stroke={gold} strokeWidth="5" strokeLinecap="round">
        {[...Array(8)].map((_, i) => {
          const y = 120 + i * 24;
          return (
            <path key={`l-${i}`} d={`M95,${y} C130,${y - 12} 160,${y + 12} 185,${y}`} />
          );
        })}
        {[...Array(8)].map((_, i) => {
          const y = 120 + i * 24;
          return (
            <path key={`r-${i}`} d={`M505,${y} C470,${y - 12} 440,${y + 12} 415,${y}`} />
          );
        })}
      </g>
    </svg>
  );
}
