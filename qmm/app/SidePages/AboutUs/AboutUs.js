import Image from "next/image";
import BarComponent from "../../Bar/BarComponent"; 
import ServiceSection from "../../ServicesSection/ServiceSection"; 
import PopularClassesComponent from "../../PopularClasses/PopularClassesComponent";
import TutorsSection from "../../TutorsSection/TutorsSection";  
import Footer from "../../Footer/Footer"; 
import AboutUsHeroSelction from "./AboutUsHeroSelction";
export default function AboutUs() {
  return (
   <main className="w-full min-h-screen">
      <div className="grid grid-rows-[3fr_fit_6fr_6fr_6fr] min-h-screen">
        <BarComponent />
        <AboutUsHeroSelction />

        <ServiceSection />

        <PopularClassesComponent />

        <TutorsSection />

        <Footer />

      </div>
    </main>
  );
}
