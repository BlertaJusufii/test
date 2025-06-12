import ServicesBanner from "@/components/Home/about";
import VideoBanner from "@/components/Home/banner";
import PVInquiryForm from "@/components/Home/form";
import SolutionsPage from "@/components/Home/info";
import Partners from "@/components/Home/partners";
import ProjectsSlider from "@/components/Home/projekte";
import RotatingCircleSection from "@/components/Home/welcome";
import EndWhite from "@/components/Reusable/Endwhite";

export default function Home() {

  const endd={
    greentitle:"Solaranlage sichern",
    title:"Jetzt Kontakt aufnehmen & Solaranlage sichern",
    description:"Interessiert an einer maßgeschneiderten Photovoltaikanlage für Ihr Zuhause oder Unternehmen? Füllen Sie unser Kontaktformular aus oder rufen Sie uns direkt an! Unser Expertenteam berät Sie persönlich und individuell."
  }


  return (
    <div>
      <VideoBanner
        videoSrc={"/Images/Navbar/intro.mp4"}
        title={"Photovoltaik-Lösungen für Industrie, Gewerbe und Privat"}
        mobileVideoSrc={"Photovoltaik-Lösungen für Industrie, Gewerbe und Privat"} />
      <ServicesBanner />
      <RotatingCircleSection />
    
      <SolutionsPage />
        <ProjectsSlider/>
        <Partners/>
      <PVInquiryForm />
      <EndWhite data={endd}/>
    </div>
  );}