import Hero from "./sections/Hero";
import ShowcaseSection from "./sections/ShowcaseSection";
import NavBar from "./components/NavBar";
import FeatureCards from "./sections/FeatureCards";
import LogoShowcase from "./sections/LogoShowcase";
import ExperienceSection from "./sections/ExperienceSection";
import Contact from "./sections/Contact";
import Footer from "./sections/Footer";
import { inject } from "@vercel/analytics";
import { LanguageProvider } from "./context/LanguageContext";

inject();

const App = () => {
  return (
    <LanguageProvider>
      <NavBar />
      <Hero />
      <ShowcaseSection />
      <LogoShowcase />
      <FeatureCards />
      <ExperienceSection />
      <Contact />
      <Footer />
    </LanguageProvider>
  );
};

export default App;