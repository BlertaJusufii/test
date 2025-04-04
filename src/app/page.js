import ServicesBanner from "@/components/Home/about";
import VideoBanner from "@/components/Home/banner";
import PVInquiryForm from "@/components/Home/form";
import SolutionsPage from "@/components/Home/info";
import RotatingCircleSection from "@/components/Home/welcome";
import GreenFeatureSection from "@/components/Reusable/contactInfo";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <VideoBanner
        videoSrc={"/Images/Navbar/intro.mp4"}
        title={"Photovoltaik-Lösungen für Industrie, Gewerbe und Privat"}
        mobileVideoSrc={"Photovoltaik-Lösungen für Industrie, Gewerbe und Privat"}
      />
      <ServicesBanner />
      <RotatingCircleSection />
      <SolutionsPage />
      <PVInquiryForm />
      <GreenFeatureSection />
    </div>
  );
}
