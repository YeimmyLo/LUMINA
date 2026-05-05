import { PageShell } from "@/components/PageShell";
import { BenefitsSection } from "@/components/home/BenefitsSection";
import { CommitmentsSection } from "@/components/home/CommitmentsSection";
import { FeaturedProductsSection } from "@/components/home/FeaturedProductsSection";
import { FinalCtaSection } from "@/components/home/FinalCtaSection";
import { HeroSection } from "@/components/home/HeroSection";
import { PhilosophySection } from "@/components/home/PhilosophySection";

export default function HomePage() {
  return (
    <PageShell active="/">
      <HeroSection />
      <BenefitsSection />
      <FeaturedProductsSection />
      <PhilosophySection />
      <CommitmentsSection />
      <FinalCtaSection />
    </PageShell>
  );
}
