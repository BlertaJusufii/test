import SolarInfoAccordion from "@/components/Faqs/faqs";
import JobsInfo from "@/components/Jobs/jobs";
import ProjectsHero from "@/components/Project/info";
import Vorteil from "@/components/Project/vorteile";
import TechnologySection from "@/components/Reusable/backgroundImage";
import BannerSection from "@/components/Reusable/banner";
import BenefitsLayout from "@/components/Reusable/benefitsSection";
import GreenFeatureSection from "@/components/Reusable/contactInfo";
import InfoSection from "@/components/Reusable/info";
import TeamBanner from "@/components/Reusable/teamBanner";
import TeamSection from "@/components/Team/team";

export const metadata = {
  title: "Faqs",
  description:
    "Finden Sie in unseren FAQs Antworten auf Ihre wichtigsten Fragen zu Photovoltaikanlagen. Erfahren Sie mehr über die Funktionsweise von Solarmodulen, Vorteile der Solarenergie, Fördermöglichkeiten und Einsparungen bei der Nutzung von Solaranlagen. Unsere Experten bieten klare und verständliche Informationen.",
  keywords: [
    "Photovoltaik FAQs",
    "Solaranlagen Fragen",
    "Solarenergie Vorteile",
    "Förderungen Solaranlagen",
    "Solarmodule Funktionsweise",
  ],
};

export default function Home() {
  const data = {
    title: "Faqs",
    img: "/Images/Kontakt/faqs.jpg",
    description: "Hier finden Sie Antworten auf die wichtigsten Fragen rund um unsere Photovoltaik-Lösungen.",
  };

  const infoData = {
    title: "Photovoltaik FAQs – Antworten auf Ihre wichtigsten Fragen",
    subtitle: "",
    img: "/Images/Referenzen/projekteBanner.jpg",
    description: [
      "Alles, was Sie über Solaranlagen wissen müssen – Finden Sie Antworten auf die häufigsten Fragen rund um unsere Photovoltaik-Lösungen. Unser Team bietet Ihnen detaillierte Informationen zu Installation, Kosten, Förderung und mehr – klar, verständlich und transparent.",
    ],
  };

  return (
    <div>
      <TeamBanner data={data} />
      <InfoSection data={infoData} />
      <SolarInfoAccordion />
      <GreenFeatureSection />
    </div>
  );
}
