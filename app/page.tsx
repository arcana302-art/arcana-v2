import Hero from "@/components/Hero";
import Gancho from "@/components/Gancho";
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
import CartaNatalAvanzada from "@/components/CartaNatalAvanzada";

export default function Page() {
  return (
    <main className="bg-[#17031F] text-white">
      <Hero />
      <Gancho />
      <CartaNatalAvanzada />
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
