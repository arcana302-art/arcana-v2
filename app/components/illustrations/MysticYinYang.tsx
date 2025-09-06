// app/components/illustrations/MysticYinYang.tsx
export default function MysticYinYang(props: { className?: string }) {
  const gold = "#F4D03F";
  const purple = "#7C3AED";
  const bg = "#0E1020";
  return (
    <svg
      viewBox="0 0 520 520"
      xmlns="http://www.w3.org/2000/svg"
      className={props.className}
      aria-hidden="true"
    >
      <circle cx="260" cy="260" r="240" fill="none" stroke={gold} strokeWidth="6" />
      <path d="M260 20 A240 240 0 0 0 260 500 A120 120 0 0 1 260 260 A120 120 0 0 0 260 20Z" fill={purple}/>
      <path d="M260 20 A240 240 0 0 1 260 500 A120 120 0 0 0 260 260 A120 120 0 0 1 260 20Z" fill={bg}/>
      <circle cx="260" cy="140" r="26" fill={gold}/>
      <circle cx="260" cy="380" r="26" fill={purple}/>
      {/* mini stars */}
      {Array.from({length: 16}).map((_,i)=>{
        const a = (i*Math.PI*2)/16, r=200;
        const x=260+Math.cos(a)*r, y=260+Math.sin(a)*r;
        return <circle key={i} cx={x} cy={y} r="2.5" fill={gold}/>;
      })}
    </svg>
  );
}
