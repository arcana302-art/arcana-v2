// app/page.tsx
import Hero from "./components/Hero";
import HowItWorks from "./components/HowItWorks";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <main className="relative">
        {/* HERO */}
        <Hero />

        {/* ¿CÓMO FUNCIONA? */}
        <HowItWorks />
      </main>

      {/* FOOTER */}
      <Footer />
    </>
  );
}
