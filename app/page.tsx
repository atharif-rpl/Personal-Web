import AboutSection from "./components/AboutSection";
import CertificateSection from "./components/CertificateSection";
import ContactSection from "./components/ContactSection";
import ExperienceSection from "./components/ExperienceSection";
import HeroSection from "./components/HeroSection";
import Intro from "./components/Intro";
import ProjectSection from "./components/ProjectSection";
import SkillsSection from "./components/SkillsSection";


export default function Home() {
  return (
    <main className="bg-[#e5e5e5]">
      {/* Bagian Pertama: Hero */}
      <Intro />
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <CertificateSection />
      <ProjectSection />
      <ExperienceSection/>
      <ContactSection />


    </main>
  );
}