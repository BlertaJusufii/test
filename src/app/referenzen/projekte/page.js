import ProjectsHero from "@/components/Project/info";
import Vorteil from "@/components/Project/vorteile";
import AnotherDesign from "@/components/Reusable/AnotherDesign";
import TechnologySection from "@/components/Reusable/TechnologySection";
import BannerSection from "@/components/Reusable/banner";
import BenefitsLayout from "@/components/Reusable/benefitsSection";
import GreenFeatureSection from "@/components/Reusable/contactInfo";

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
    title: "Referenzen",
    subtitle:"Erfolgreiche Photovoltaik-Projekte – Maßgeschneidert für Gewerbe, Industrie und Privathaushalte",
    img: "/Images/Referenzen/projekteBanner.jpg",
  };
  const another = {
    mainImage: "/Images/Team/download-1.jpg",
    title: "Ganzheitliche Planung und Umsetzung für nachhaltige Energielösungen",
    description:
      "Ein erfolgreicher Einstieg in die Photovoltaik beginnt mit einer fundierten Analyse Ihrer individuellen Anforderungen, gefolgt von einer präzisen Projektierung, detaillierten Planung und professionellen Umsetzung durch unsere erfahrenen Experten. Dabei berücksichtigen wir nicht nur technische Gegebenheiten, sondern auch wirtschaftliche Rahmenbedingungen, Fördermöglichkeiten sowie zukünftige Ausbaupotenziale Ihrer Anlage.",
    cardImage: "/Images/Team/download.jpg",
    cardText:
      "Oekovolt bietet Ihnen komplette Photovoltaiklösungen – von der hochwertigen Installation bis zur intelligenten Systemoptimierung.",
    bullets: [
      "Langjährige Erfahrung aus Solarprojekten in ganz Deutschland.",
      "Qualität, Präzision und persönliche Beratung für maximale Effizienz.",
    ],
  };
  

  const sectionData = {
    greenTitle: "Intelligente Energielösungen",
    heading: "Technologische Entwicklungen und Effizienzsteigerung",
    description:
    "Die fortschreitende Digitalisierung und innovative Technologien haben die Möglichkeiten in der Photovoltaik erheblich erweitert. Moderne Systeme ermöglichen eine intelligente Steuerung der Energieflüsse, eine optimierte Eigenverbrauchsquote sowie die Integration von Speicherlösungen.",
    bullets: [
      "Stromnutzung bei Bedarf",
      "Basis vieler Oekovolt-Projekte",
      "Smarte Steuerung speichert Solarstrom.",
      "Mehr Eigenverbrauch, weniger Netzabhängigkeit.",
    ],
    image1: "/Images/Team/download-1.jpg",
    image2: "/Images/Team/download.jpg",
  };
  const secondBackgroundImage = {
    src: "/Images/Referenzen/Projekte-2.jpg",
    title: "Ganzheitliche Planung und Umsetzung für nachhaltige Energielösungen",
    description: [
      "Ein erfolgreicher Einstieg in die Photovoltaik beginnt mit einer fundierten Analyse Ihrer individuellen Anforderungen, gefolgt von einer präzisen Projektierung, detaillierten Planung und professionellen Umsetzung durch unsere erfahrenen Experten. Dabei berücksichtigen wir nicht nur technische Gegebenheiten, sondern auch wirtschaftliche Rahmenbedingungen, Fördermöglichkeiten sowie zukünftige Ausbaupotenziale Ihrer Anlage.",
      "Von der Auswahl hochwertiger und effizienter Komponenten über die fachgerechte Installation, die Integration intelligenter Energiemanagementsysteme und moderner Speicherlösungen bis hin zur laufenden Wartung, Reinigung und Systemoptimierung – bei Oekovolt erhalten Sie ganzheitliche Photovoltaiklösungen aus einer Hand.",
      "Unsere langjährige Erfahrung in zahlreichen Solarenergie Referenzprojekten in ganz Deutschland zeigt: Qualität, technische Präzision, nachhaltige Planung und persönliche Beratung sind entscheidend für den langfristigen Erfolg und die maximale Effizienz Ihrer PV-Anlage.",
    ],
  };

  const benefits = {
    title: "Vorteile einer nachhaltigen Energieversorgung",
    img: "/Images/Referenzen/Projekte-1.jpg",
    description:
      "Durch die Kombination verschiedener technischer Ansätze lassen sich optimale Ergebnisse erzielen – ökologisch wie ökonomisch sinnvoll. Diese Herangehensweise spiegelt sich in all unseren Kundenprojekten wider.",
    benefits: [
      {
        title: "Kosteneffizienz",
        description: "Langfristige Reduzierung der Energiekosten durch eigene Energieerzeugung.",
      },
      {
        title: "Umweltschutz",
        description: "Aktiver Beitrag zum Klimaschutz durch CO₂-freie Stromerzeugung mit erneuerbaren Energien.",
      },
      {
        title: "Unabhängigkeit",
        description: "Weniger Abhängigkeit von Energieversorgern und volatilem Strommarkt.",
      },
      {
        title: "Effizienz",
        description: "Nutzung moderner Speicher- und Steuerungssysteme für maximale Effizienz in jedem Solarenergie Projekt.",
      },
    ],
  };

  const end={
    greentitle:"Smarthome-Lösung",
    title:"Energie der Zukunft",
    description:"Machen Sie den ersten Schritt in Richtung Unabhängigkeit mit Ihrer eigenen Solaranlage. Füllen Sie unser Kontaktformular aus – wir helfen Ihnen gerne weiter."
  }

  return (
    <div>
      <BannerSection data={data} />
      <ProjectsHero />
       <TechnologySection data={sectionData} />
      <BenefitsLayout data={benefits} />
      <Vorteil />
      {/* <TechnologySection backgroundImage={secondBackgroundImage} /> */}
      <AnotherDesign data={another} />
      <GreenFeatureSection data={end}/>
    </div>
  );
}
