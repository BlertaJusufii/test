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

export default function Home() {
  const data = {
    title: "Jobs",
    img: "/Images/Referenzen/projekteBanner.jpg",
    description: "Arbeit in der Energiebranche: Jobs mit Zukunft.",
  };
  const backgroundImage = {
    src: "/Images/Referenzen/projekteBanner.jpg",
    title: "Gemeinsam die Zukunft gestalten",
    description: [
      "Nachhaltige Energieversorgung ist eine der größten Herausforderungen unserer Zeit. Deshalb setzen wir auf innovative Lösungen und engagierte Teams, die den Wandel aktiv mitgestalten. Wir sind davon überzeugt, dass jeder Einzelne einen wichtigen Beitrag leisten kann – sei es durch technisches Know-how, kreative Ideen oder lösungsorientiertes Denken.",
      "Wenn du eine Karriere suchst, die nicht nur zukunftssicher, sondern auch sinnvoll ist, dann bist du bei ÖKOVOLT genau richtig. Werde Teil eines Unternehmens, das sich für eine nachhaltige und energieeffiziente Zukunft einsetzt – und gestalte mit uns die Welt von morgen.",
    ],
  };
  const secondBackgroundImage = {
    src: "/Images/Referenzen/projekteBanner.jpg",
    title: "Vielfältige Karrieremöglichkeiten in der Photovoltaik",
    description: [
      "Die Solarbranche bietet zahlreiche Tätigkeitsfelder, die sowohl technisches als auch kaufmännisches Know-how erfordern. Von der Planung und Entwicklung über die Installation und Wartung bis hin zu Vertrieb und Beratung – bei uns gibt es vielfältige Einsatzmöglichkeiten. Ob du handwerklich begabt bist und gerne an der Montage von Solaranlagen mitwirkst, ein Talent für Vertrieb und Kundenberatung hast oder lieber im Hintergrund technische Konzepte entwickelst – in der Photovoltaikbranche gibt es für jeden eine passende Aufgabe.",
      "Unabhängig davon, ob du bereits Erfahrung in der Branche hast oder neu in den Bereich einsteigen möchtest – wir suchen motivierte Menschen, die mit uns gemeinsam an der Zukunft der Energie arbeiten wollen. Auch Quereinsteiger haben bei uns die Möglichkeit, sich mit gezielten Schulungen und Weiterbildungen in das Thema Photovoltaik einzuarbeiten. Wer Interesse an innovativen Technologien hat, nachhaltig etwas bewegen möchte und gerne in einem dynamischen Team arbeitet, findet hier eine langfristige und sinnstiftende Karriereperspektive.",
    ],
  };

  const benefits = {
    title: "Deine Vorteile bei ÖKOVOLT",
    img: "/Images/Referenzen/projekteBanner.jpg",
    description:
      "Wir legen großen Wert darauf, ein attraktives Arbeitsumfeld zu schaffen, in dem sich unsere Mitarbeitenden wohlfühlen und weiterentwickeln können. Dazu gehört eine offene Unternehmenskultur, die auf Vertrauen, Wertschätzung und Teamarbeit basiert. Zudem setzen wir auf eine offene Kommunikation und regelmäßigen Austausch, um gemeinsam innovative Lösungen zu entwickeln und die Zukunft der Energieversorgung aktiv mitzugestalten.",
    benefits: [
      {
        title: "Sinnvolle Arbeit",
        description: "Trage aktiv zur Energiewende bei und arbeite an nachhaltigen Projekten mit echtem Mehrwert.",
      },
      {
        title: "Berufliche Weiterentwicklung",
        description: "Wir fördern unsere Mitarbeitenden durch Schulungen, Workshops und Weiterbildungsmöglichkeiten.",
      },
      {
        title: "Dynamisches Umfeld",
        description: "Abwechslungsreiche Tätigkeiten mit spannenden Herausforderungen und modernster Technologie.",
      },
      {
        title: "Langfristige Perspektiven",
        description:
          "Erneuerbare Energien sind die Zukunft – sichere dir jetzt einen Arbeitsplatz in einer wachsenden Branche.",
      },
    ],
  };

  const infoData = {
    title: "JOBS",
    subtitle: "Herzlich willkommen im Team von ÖKOVOLT Deutschland",
    img: "/Images/Referenzen/projekteBanner.jpg",
    description: [
      "Werde Teil unseres Teams und gestalte die Energieversorgung von morgen. Mit mehr als 50 Mitarbeitenden an unseren drei Standorten in Deutschland, Österreich und der Schweiz entwickeln und realisieren wir innovative Photovoltaikanlagen für Einfamilienhäuser, Mehrfamilienhäuser, Gewerbe, Industrie und die Landwirtschaft. Unsere Arbeit trägt aktiv zur Energiewende bei und ermöglicht es unseren Kunden, nachhaltige und wirtschaftliche Lösungen zur Nutzung erneuerbarer Energien umzusetzen.",
      "Als wachsendes Unternehmen bieten wir spannende Karrieremöglichkeiten in einem zukunftsorientierten Umfeld. Unsere Jobprofile sind ebenso abwechslungsreich wie unser Unternehmen und umfassen technische, kaufmännische und planerische Tätigkeiten. Ob in der Projektplanung, Montage, technischen Entwicklung oder im Vertrieb – wir suchen engagierte Fachkräfte, die mit uns an einer klimafreundlichen Zukunft arbeiten wollen.",
    ],
  };
  const jobsData = {
    title: "Arbeiten in einer zukunftssicheren Branche",
    img: "/Images/Referenzen/projekteBanner.jpg",
    description: [
      "Die Solarbranche gehört zu den am schnellsten wachsenden Wirtschaftszweigen. Der Bedarf an erneuerbaren Energielösungen steigt kontinuierlich, und mit ihm die Nachfrage nach qualifizierten Fachkräften. Eine Karriere in diesem Bereich bietet nicht nur langfristige berufliche Sicherheit, sondern auch die Möglichkeit, aktiv an innovativen Entwicklungen mitzuwirken. In Zeiten des Klimawandels und steigender Energiekosten spielen nachhaltige Lösungen eine immer größere Rolle, weshalb Unternehmen und Privathaushalte verstärkt auf Photovoltaik setzen.",
      "Neben der wirtschaftlichen Stabilität bietet die Branche auch eine Vielzahl an beruflichen Entwicklungsmöglichkeiten. Von der technischen Planung über die Installation bis hin zur Optimierung und Wartung von Anlagen gibt es zahlreiche Tätigkeitsfelder, die sowohl handwerkliches als auch analytisches oder kaufmännisches Know-how erfordern. Der Einstieg ist sowohl für erfahrene Fachkräfte als auch für Quereinsteiger attraktiv, da sich die Branche stetig weiterentwickelt und innovative Technologien neue Jobperspektiven eröffnen.",
    ],
  };

  return (
    <div>
      <TeamBanner data={data} />
      <InfoSection data={infoData} />
      <BenefitsLayout data={benefits} />
      <TechnologySection backgroundImage={backgroundImage} />
      <JobsInfo data={jobsData} />
      <TechnologySection backgroundImage={secondBackgroundImage} />
      <GreenFeatureSection />
    </div>
  );
}
