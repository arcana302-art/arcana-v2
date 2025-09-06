// app/components/Hero.tsx
import TarotFan from "./illustrations/TarotFan";
import SolarEye from "./illustrations/SolarEye";
import EyeLaurel from "./illustrations/EyeLaurel";
import MysticYinYang from "./illustrations/MysticYinYang";

type IllustrationKey = "tarot-fan" | "solar-eye" | "eye-laurel" | "yin-yang";

const ILLUSTRATIONS: Record<IllustrationKey, React.FC<{ className?: string }>> = {
  "tarot-fan": TarotFan,
  "solar-eye": SolarEye,
  "eye-laurel": EyeLaurel,
  "yin-yang": MysticYinYang,
};

export default function Hero({ illustration = "tarot-fan" as IllustrationKey }) {
  const Illustration = ILLUSTRATIONS[illustration];

  return (
    <section className="relative mx-auto max-w-6xl px-6 pt-28 pb-20">
      <div className="grid items-center gap-12 md:grid-cols-2">
        {/* Copy — tono místico-poético */}
        <div className="text-center md:text-left">
          <h1 className="text-5xl/tight md:text-6xl/tight font-semibold text-white">
            Claridad aquí y ahora
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-purple-200">
              con guías auténticas
            </span>
          </h1>

          <p className="mt-5 text-lg text-white/70">
            Tarot, astrología y oráculos. Agenda en minutos y recibe orientación
            concreta en un espacio cuidado, seguro y sin juicios.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center md:justify-start">
            <a
              href="#agenda"
              className="rounded-xl px-5 py-3 text-base font-medium bg-purple-600 hover:bg-purple-500 text-white shadow-lg shadow-purple-900/30 transition"
            >
              Agendar una consulta
            </a>
            <a
              href="#talento"
              className="rounded-xl px-5 py-3 text-base font-medium bg-white/10 hover:bg-white/15 text-white border border-white/15 transition"
            >
              Únete como especialista
            </a>
          </div>
        </div>

        {/* Ilustración */}
        <div className="relative">
          <div className="absolute -inset-6 rounded-full bg-purple-500/10 blur-2xl" />
          <Illustration className="relative w-full h-auto" />
        </div>
      </div>
    </section>
  );
}
