import { Hero } from "@/components/Hero";
import { ProjectsSection } from "@/components/ProjectsSection";
import { ReportsSection } from "@/components/ReportsSection";
import { ExperienceSection } from "@/components/ExperienceSection";
import { AboutSection } from "@/components/AboutSection";
import { ResumeSection } from "@/components/ResumeSection";
import { ContactSection } from "@/components/ContactSection";
import { PlaygroundSection } from "@/components/PlaygroundSection";

export default function HomePage() {
  return (
    <>
      <Hero />
      <ProjectsSection />
      <ReportsSection />
      <ExperienceSection />
      <AboutSection />
      <ResumeSection />
      <PlaygroundSection />
      <ContactSection />
    </>
  );
}


