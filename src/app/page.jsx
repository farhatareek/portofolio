import AboutPage from "./about/page";
import Contact from "./contact/page";
import HeroSection from "./herosection/page";
import Nav from "./nav/page";
import Projects from "./portofolio/page";



export default function Home() {
  return (
   <>
    <HeroSection/>
    <AboutPage/>
    <Projects/>
    <Contact/>
   </>
  );
}
