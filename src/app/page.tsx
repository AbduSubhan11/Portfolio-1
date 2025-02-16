import Skill from "./components/Skill";
import Email from "./components/Email";
import Projects from "./components/Projects";
import HeroSection from "./components/HeroSection";

export default function Home() {
  return (
    <section className="md:space-y-16 space-y-10 bg-[#F4F4F4]">
      <HeroSection />
      <Skill />
      <Projects />
      <Email />
    </section>
  );
}
