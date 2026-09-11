import { useNavigate } from "react-router";
import { HeroSection } from "../components/HeroSection";
import { PersonaSlider } from "../components/PersonaSlider";
import { WhyTechStore } from "../components/WhyTechStore";
import { Footer } from "../components/Footer";

export function HomePage() {
  const navigate = useNavigate();

  const handleNavigateToStore = (category?: string) => {
    if (category && category !== "all") {
      navigate(`/store?category=${category}`);
    } else {
      navigate("/store");
    }
  };

  const scrollToPersonasSection = () => {
    const personasSection = document.getElementById("personas-section");
    if (personasSection) {
      personasSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      {/* Hero Section */}
      <HeroSection onExploreClick={handleNavigateToStore} onLearnMore={scrollToPersonasSection} />

      {/* Personas Slider Section */}
      <section id="personas-section" className="py-12 bg-white">
        <PersonaSlider onExploreClick={handleNavigateToStore} />
      </section>

      {/* Why TechStore Section */}
      <WhyTechStore />
      
      {/* Footer */}
      <Footer />
    </>
  );
}
