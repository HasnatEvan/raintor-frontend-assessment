
import AboutSection from "./Components/AboutSection";
import ApiSection from "./Components/ApiSection";
import ContactSection from "./Components/ContactSection";
import HeroSection from "./Components/HeroSection";
import SliderSection from "./Components/SliderSection";
import WorkProcessSection from "./Components/WorkProcessSection";

export default function Home() {
  return (
    <div>
      <HeroSection></HeroSection>
      <ApiSection></ApiSection>
      <SliderSection></SliderSection>
      <AboutSection></AboutSection>
      <WorkProcessSection></WorkProcessSection>
      <ContactSection></ContactSection>
    </div>
  );
}
