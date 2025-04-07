import TechnologySection from "@/components/Reusable/backgroundImage";
import BannerSection from "@/components/Reusable/banner";
import GreenFeatureSection from "@/components/Reusable/contactInfo";
import ProjectsSection from "@/components/Referenzkarte/referenzInfo";
import BenefitsLayout from "@/components/Reusable/benefitsSection";

const Map = dynamic(() => import("@/components/Referenzkarte/map"), { ssr: false });

export default function Home() {
  const data = {
    title: "REFERENZSTANDORTE",
    img: "/Images/Referenzen/projekteBanner.jpg",
  };
  const secondBackgroundImage = {
    src: "/Images/Referenzen/projekteBanner.jpg",
    title: "Solarlösungen für Privathaushalte",
    description: [
      "Immer mehr Eigenheimbesitzer setzen auf Photovoltaik für Zuhause, um Stromkosten zu senken und sich unabhängig zu machen.Unsere Projekte reichen von klassischen Dachanlagen über kompakte Balkonkraftwerke bis hin zu Systemen mit Speicher und Smartsteuerung.",
      "Mit intelligenter Hausautomation und modernen Energiemanagementsystemen wird der Eigenverbrauch optimiert und überschüssige Energie gezielt gespeichert.Kunden berichten von Einsparungen bis zu 70 % bei Stromkosten – kombiniert mit CO₂-Reduktion und staatlicher Förderung wird Photovoltaik zur lohnenden Investition.",
    ],
  };
  const benefits = {
    title: "Gewerbliche Photovoltaikanlagen",
    img: "/Images/Referenzen/projekteBanner.jpg",
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
      <Map />
      <BenefitsLayout data={benefits} />
      <TechnologySection backgroundImage={secondBackgroundImage} />
      <GreenFeatureSection />
    </div>
  );
}
