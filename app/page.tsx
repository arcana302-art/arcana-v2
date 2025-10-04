import Hero from "@/components/Hero";
import Gancho from "@/components/Gancho"; // NUEVO: Carta Astral / Gancho
import HowItWorks from "@/components/HowItWorks";
import Benefits from "@/components/Benefits";
import Categories from "@/components/Categories";
import FeaturedGuides from "@/components/FeaturedGuides";
import MidCTA from "@/components/MidCTA";
import Testimonials from "@/components/Testimonials";
import Security from "@/components/Security";
import FAQ from "@/components/FAQ";
import Freebies from "@/components/Freebies";
import JoinAsExpert from "@/components/JoinAsExpert";

// ⚠️ Import deliberadamente SIN footer.
// El footer lo pinta layout.tsx para evitar duplicados.

export default function Page() {
  return (
    <main className="bg-[#17031F] text-white">
      {/* Hero principal */}
      <Hero />

      {/* Gancho de Carta Astral */}
      <Gancho /> 

      {/* Secciones informativas y funcionales */}
      <HowItWorks />
      <Benefits />
      <Categories />
      <FeaturedGuides />
      <MidCTA />
      <Testimonials />
      <Security />
      <FAQ />
      <Freebies />
      <JoinAsExpert />
    </main>
  );
}
