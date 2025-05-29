import Hero from "./sections/Hero"
import ShowcaseSection from "./sections/ShowcaseSection";
import NavBar from "../src/components/NavBar";
import FeatureCards from "./sections/FeatureCards";
import LogoShowcase from "./sections/LogoShowcase";
import ExperienceSection from "./sections/ExperienceSection";
import Contact from "./sections/Contact";
import Footer from "./sections/footer";

const App = () => {
    return (
<>
<NavBar/>
<Hero/>
<ShowcaseSection/>
<LogoShowcase></LogoShowcase>
<FeatureCards/>
<ExperienceSection/>
<Contact/>
<Footer/>
</>
    );
};

export default App;