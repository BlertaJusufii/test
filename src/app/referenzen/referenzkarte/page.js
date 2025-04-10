import TechnologySection from "@/components/Reusable/backgroundImage";
import BannerSection from "@/components/Reusable/banner";
import GreenFeatureSection from "@/components/Reusable/contactInfo";
import ProjectsSection from "@/components/Referenzkarte/referenzInfo";
import BenefitsLayout from "@/components/Reusable/benefitsSection";
import MapContainer from "@/components/Referenzkarte/map";

export const metadata = {
  title: "Referenzen",
  description:
    "Entdecken Sie die erfolgreichen Photovoltaik-Projekte von ÖKOVOLT Deutschland. Wir bieten maßgeschneiderte, effiziente und umweltfreundliche Lösungen für Gewerbe, Industrie und Privathaushalte. Erfahren Sie mehr über unsere innovativen Projekte und technologischen Entwicklungen, die den Weg zu einer nachhaltigen Energiezukunft ebnen.",
  keywords: [
    "Photovoltaik Referenzen",
    "Nachhaltige Energielösungen",
    "Solarenergie Projekte",
    "Photovoltaik Technologien",
    "ÖKOVOLT Deutschland",
  ],
};

export default function Home() {
  const data = {
    title: "REFERENZSTANDORTE",
    img: "/Images/Referenzen/projekteBanner.jpg",
  };
  const secondBackgroundImage = {
    src: "/Images/Referenzen/Referenzkarte-1.jpg",
    title: "Solarlösungen für Privathaushalte",
    description: [
      "Immer mehr Eigenheimbesitzer setzen auf Photovoltaik für Zuhause, um Stromkosten zu senken und sich unabhängig zu machen.Unsere Projekte reichen von klassischen Dachanlagen über kompakte Balkonkraftwerke bis hin zu Systemen mit Speicher und Smartsteuerung.",
      "Mit intelligenter Hausautomation und modernen Energiemanagementsystemen wird der Eigenverbrauch optimiert und überschüssige Energie gezielt gespeichert.Kunden berichten von Einsparungen bis zu 70 % bei Stromkosten – kombiniert mit CO₂-Reduktion und staatlicher Förderung wird Photovoltaik zur lohnenden Investition.",
    ],
  };
  const benefits = {
    title: "Gewerbliche Photovoltaikanlagen",
    img: "/Images/Referenzen/Referenzekarte-2.jpg",
    description:
      "Viele unserer gewerblichen Kunden konnten durch PV-Anlage und Speicher ihren Eigenverbrauch maximieren und langfristig Energiekosten sparen.",
    benefits: [
      {
        title: "Produktionsbetriebe mit Solardächern",
        description: "Reduzierung des Netzbezugs durch Eigenstromnutzung.",
      },
      {
        title: "Logistikzentren mit Großanlagen",
        description: "Effiziente Nutzung großer Dachflächen für eine nachhaltige Energieerzeugung.",
      },
      {
        title: "Hotels und Restaurants mit PV-Anlagen",
        description: "Umweltfreundliche Energieversorgung für Gäste und Geschäftsabläufe.",
      },
      {
        title: "Supermärkte und Einzelhandelsgeschäfte",
        description:
          "Nachhaltige Stromversorgung für den täglichen Betrieb und Reduzierung der Betriebskosten durch Eigenverbrauch.",
      },
    ],
  };
  return (
    <div>
      <BannerSection data={data} />
      <ProjectsSection />
      <MapContainer />
      <BenefitsLayout data={benefits} />
      <TechnologySection backgroundImage={secondBackgroundImage} />
      <GreenFeatureSection />
    </div>
  );
}
