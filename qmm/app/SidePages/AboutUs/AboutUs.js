import Image from "next/image";
import BarComponent from "../../Bar/BarComponent"; 

import TutorsSection from "../../TutorsSection/TutorsSection";  
import Footer from "../../Footer/Footer"; 
import AboutUsHeroSelction from "./AboutUsHeroSelction";
import FeaturesSection from "./FeaturesSection";
import BenefitsSection from "./BenefitsSection";
export default function AboutUs() {
  return (
   <main className="w-full min-h-screen">
      <div className="grid grid-rows-[3fr_fit_6fr_6fr] min-h-screen">
        <BarComponent />
        <AboutUsHeroSelction />

        <FeaturesSection />

        <BenefitsSection />

  

        <Footer />

      </div>
    </main>
  );
}
