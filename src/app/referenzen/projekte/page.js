import ProjectsHero from "@/components/Project/info";
import Vorteil from "@/components/Project/vorteile";
import TechnologySection from "@/components/Reusable/backgroundImage";
import BannerSection from "@/components/Reusable/banner";
import BenefitsLayout from "@/components/Reusable/benefitsSection";
import GreenFeatureSection from "@/components/Reusable/contactInfo";

export default function Home() {
  const data = {
    title: "Referenzen",
    img: "/Images/Referenzen/projekteBanner.jpg",
  };
  const backgroundImage = {
    src: "/Images/Referenzen/Projekte-3.jpg",
    title: "Technologische Entwicklungen und Effizienzsteigerung",
    description: [
      "Die fortschreitende Digitalisierung und innovative Technologien haben die Möglichkeiten in der Photovoltaik erheblich erweitert. Moderne Systeme ermöglichen eine intelligente Steuerung der Energieflüsse, eine optimierte Eigenverbrauchsquote sowie die Integration von Speicherlösungen.",
      "Insbesondere smarte Steuerungssysteme und leistungsstarke Speicher sorgen dafür, dass überschüssiger Solarstrom gespeichert und genau dann genutzt wird, wenn er gebraucht wird.",
      "So wird nicht nur der Eigenverbrauch gesteigert, sondern auch die Abhängigkeit vom öffentlichen Netz verringert.Diese technologische Kombination bildet die Basis für viele erfolgreiche Photovoltaik Referenzen von Oekovolt in ganz Deutschland.",
    ],
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
        description: "Aktiver Beitrag zum Klimaschutz durch CO₂ freie Stromerzeugung.",
      },
      {
        title: "Unabhängigkeit",
        description: "Weniger Abhängigkeit von Energieversorgern und volatilem Strommarkt.",
      },
      {
        title: "Effizienz",
        description: "Moderne Speicher- und Steuerungssysteme für maximale Effizienz.",
      },
    ],
  };

  return (
    <div>
      <BannerSection data={data} />
      <ProjectsHero />
      <TechnologySection backgroundImage={backgroundImage} />
      <BenefitsLayout data={benefits} />
      <Vorteil />
      <TechnologySection backgroundImage={secondBackgroundImage} />
      <GreenFeatureSection />
    </div>
  );
}
