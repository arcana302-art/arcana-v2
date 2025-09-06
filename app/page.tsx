import Hero from "./components/Hero";

export default function Page() {
  return (
    <main className="min-h-screen bg-brand-bg text-white">
      <div className="mx-auto max-w-7xl px-6">
        <Hero />
        {/* Aquí seguirá el resto de secciones… */}
      </div>
    </main>
  );
}
