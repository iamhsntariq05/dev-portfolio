import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import WorkSection from "@/components/WorkSection";
import FeaturedSection from "@/components/FeaturedSection";
import AboutSection from "@/components/AboutSection";
import LabSection from "@/components/LabSection";
import ContactSection from "@/components/ContactSection";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#080808] overflow-x-hidden">
      <Navigation />
      <HeroSection />
      <WorkSection />
      <FeaturedSection />
      <AboutSection />
      <LabSection />
      <ContactSection />
    </main>
  );
}
