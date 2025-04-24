import { AboutSection } from "@/components/sections/AboutSection";
import { DigitalTransformationSection } from "@/components/sections/DigitalTransformationSection";
import { AutomationSection } from "@/components/sections/AutomationSection";
import { BusinessAnalyticsSection } from "@/components/sections/BusinessAnalytics";
import FeaturedCards from "@/components/sections/FeaturedCards";
import { InnovationSection } from "@/components/sections/InnovationSection";
import Hero from "@/components/sections/Hero";
import ProjectsSection from "@/components/sections/ProjectsSection";

export default function Home() {
  return (
    <>
      <Hero />
      <AboutSection />
      <DigitalTransformationSection />
      <BusinessAnalyticsSection />
      <AutomationSection />
      <InnovationSection />
      <ProjectsSection />
      <FeaturedCards />
    </>
  );
}
