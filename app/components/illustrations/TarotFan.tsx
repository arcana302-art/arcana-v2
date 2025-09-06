// app/components/illustrations/TarotFan.tsx
export default function TarotFan(props: { className?: string }) {
  const gold = "#F4D03F";
  return (
    <svg
      viewBox="0 0 600 420"
      xmlns="http://www.w3.org/2000/svg"
      className={props.className}
      aria-hidden="true"
    >
      <g transform="translate(300,220)">
        {[-28, -14, 0, 14, 28].map((r, i) => (
          <g key={i} transform={`rotate(${r}) translate(-210,-140)`}>
            <rect
              x="100"
              y="40"
              width="220"
              height="300"
              rx="18"
              ry="18"
              fill="none"
              stroke={gold}
              strokeWidth="4"
            />
            {/* Sol minimal */}
            <g transform="translate(210,190)">
              <circle r="22" fill="none" stroke={gold} strokeWidth="4" />
              {Array.from({ length: 12 }).map((_, k) => {
                const a = (k * Math.PI * 2) / 12;
                const x1 = Math.cos(a) * 30;
                const y1 = Math.sin(a) * 30;
                const x2 = Math.cos(a) * 42;
                const y2 = Math.sin(a) * 42;
                return (
                  <line
                    key={k}
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
              <circle r="8" fill={gold} />
            </g>
          </g>
        ))}
      </g>
    </svg>
  );
}
