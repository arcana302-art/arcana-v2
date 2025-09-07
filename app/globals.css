/* ===== Estrella (forma + color) ===== */
.star {
  background: radial-gradient(ellipse at center,
      #ffdf9a 0%,
      #ffd37a 40%,
      #e6b25e 60%,
      rgba(255, 211, 122, 0.0) 70%);
  /* Forma de estrella con clip-path */
  -webkit-clip-path: polygon(50% 0%, 60% 40%, 100% 50%, 60% 60%, 50% 100%, 40% 60%, 0% 50%, 40% 40%);
          clip-path: polygon(50% 0%, 60% 40%, 100% 50%, 60% 60%, 50% 100%, 40% 60%, 0% 50%, 40% 40%);
  display: block;
  border-radius: 2px;
}

/* Twinkle MUY sutil, siempre de fondo (sin zoom por hover) */
@keyframes twinkle {
  0%   { opacity: .85; }
  50%  { opacity: .55; }
  100% { opacity: .85; }
}
.twinkle {
  animation: twinkle 4.8s ease-in-out infinite;
  animation-delay: calc(var(--i, 0) * 0.37s);
}

/* ===== Nube: derecha → izquierda (marquee suave y sin cortes) ===== */
@keyframes cloud-marquee {
  0%   { transform: translateX(40%);  }
  100% { transform: translateX(-120%);}
}
.animate-cloud-marquee {
  animation: cloud-marquee 48s linear infinite;
  will-change: transform;
}
