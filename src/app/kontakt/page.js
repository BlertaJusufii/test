import SolarInfoAccordion from "@/components/Faqs/faqs";
import JobsInfo from "@/components/Jobs/jobs";
import ContactSection from "@/components/Kontakt/address";
import ContactForm from "@/components/Kontakt/contactForm";
import Map from "@/components/Kontakt/map";
import ProjectsHero from "@/components/Project/info";
import Vorteil from "@/components/Project/vorteile";
import TechnologySection from "@/components/Reusable/backgroundImage";
import BannerSection from "@/components/Reusable/banner";
import BenefitsLayout from "@/components/Reusable/benefitsSection";
import GreenFeatureSection from "@/components/Reusable/contactInfo";
import InfoSection from "@/components/Reusable/info";
import TeamBanner from "@/components/Reusable/teamBanner";
import TeamSection from "@/components/Team/team";

export default function Home() {
  const data = {
    title: "Kontaktieren Sie uns",
    img: "/Images/Kontakt/download.jpg",
    description: "Wir freuen uns darauf, von Ihnen zu hören – Ihr direkter Draht zu unseren Experten.",
  };

  return (
    <div>
      <TeamBanner data={data} />
      <ContactSection />
      <ContactForm />
      <Map />

      <GreenFeatureSection />
    </div>
  );
}
