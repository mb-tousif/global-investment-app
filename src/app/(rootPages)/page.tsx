import Description from "@/components/Description";
import HeroSection from "@/components/HeroSection";
import InvestPlan from "@/components/InvestPlan";
import Subscribe from "@/components/Subscribe";

export default function Home() {
  return (
    <section>
      <HeroSection />
      <Description />
      <InvestPlan />
      <Subscribe />
    </section>
  );
}
