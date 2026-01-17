import Image from "next/image";
import BarComponent from "./Bar/BarComponent"; 
import HeroComponent from "./Hero/heroComponent"; 
import ServiceSection from "./ServicesSection/ServiceSection"; 
import PopularClassesComponent from "./PopularClasses/PopularClassesComponent";
import TutorsSection from "./TutorsSection/TutorsSection";  
import TestimonialSectionComponent from "./TestimonialSection/TestimonialSectionComponent"; 
import Footer from "./Footer/Footer"; 
import PopUpCoursesComponent from "./PopUpCoursesComponent/PopUpCoursesComponent";
export default function MainPage() {
  return (
   <main className="w-full min-h-screen">
      <div className="grid grid-rows-[3fr_fit_6fr_6fr_6fr_6fr_6fr] min-h-screen">
        <BarComponent />
        <HeroComponent />

        <ServiceSection />

        <PopularClassesComponent />

        <TutorsSection />

        <TestimonialSectionComponent />
            <Footer />
            <PopUpCoursesComponent />
      </div>
    </main>
  );
}
