import JobsInfo from "@/components/Jobs/jobs";
import JobListings from "@/components/Jobs/jobsposition";
import ProjectsHero from "@/components/Project/info";
import Vorteil from "@/components/Project/vorteile";
import BannerSection from "@/components/Reusable/banner";
import BenefitsLayout from "@/components/Reusable/benefitsSection";
import GreenFeatureSection from "@/components/Reusable/contactInfo";
import InfoSection from "@/components/Reusable/info";
import TeamBanner from "@/components/Reusable/teamBanner";
import TeamSection from "@/components/Team/team";
import TechnologySection from "@/components/Reusable/TechnologySection";
import AnotherDesign from "@/components/Reusable/AnotherDesign";

export const metadata = {
  title: "Jobs",
  description:
    "Werden Sie Teil des ÖKOVOLT-Teams und gestalten Sie mit uns die Energiewende! Wir bieten spannende Karrieremöglichkeiten in der Photovoltaikbranche – von der Planung über die Installation bis hin zur Wartung. Nutzen Sie Ihre Chance, in einem dynamischen Umfeld mit modernster Technologie und langfristigen Perspektiven zu arbeiten.",
  keywords: [
    "Solarbranche Karriere",
    "Erneuerbare Energien Jobs",
    "Photovoltaik Stellenangebote",
    "Karriere in der Energiebranche",
    "Nachhaltige Energieversorgung Jobs",
  ],
};

export default function Home() {
  const data = {
    title: "Jobs",
    img: "/Images/Referenzen/Projekte-2.jpg",
    description: "Arbeit in der Energiebranche: Jobs mit Zukunft.",
  };
  const backgroundImage = {
    src: "/Images/Jobs/drone-view-of-technician-installing-solar-panels-2025-03-08-04-40-16-utc.jpg",
    title: "Gemeinsam die Zukunft gestalten",
    description: [
      "Nachhaltige Energieversorgung ist eine der größten Herausforderungen unserer Zeit. Deshalb setzen wir auf innovative Lösungen und engagierte Teams, die den Wandel aktiv mitgestalten. Wir sind davon überzeugt, dass jeder Einzelne einen wichtigen Beitrag leisten kann – sei es durch technisches Know-how, kreative Ideen oder lösungsorientiertes Denken.",
      "Wenn du eine Karriere suchst, die nicht nur zukunftssicher, sondern auch sinnvoll ist, dann bist du bei ÖKOVOLT genau richtig. Werde Teil eines Unternehmens, das sich für eine nachhaltige und energieeffiziente Zukunft einsetzt – und gestalte mit uns die Welt von morgen.",
    ],
  };
  const secondBackgroundImage = {
    src: "/Images/Jobs/renewable-energy-eco-technology-electric-power-fl-2025-01-29-12-30-39-utc.jpg",
    title: "Vielfältige Karrieremöglichkeiten in der Photovoltaik",
    description: [
      "Die Solarbranche bietet zahlreiche Tätigkeitsfelder, die sowohl technisches als auch kaufmännisches Know-how erfordern. Von der Planung und Entwicklung über die Installation und Wartung bis hin zu Vertrieb und Beratung – bei uns gibt es vielfältige Einsatzmöglichkeiten. Ob du handwerklich begabt bist und gerne an der Montage von Solaranlagen mitwirkst, ein Talent für Vertrieb und Kundenberatung hast oder lieber im Hintergrund technische Konzepte entwickelst – in der Photovoltaikbranche gibt es für jeden eine passende Aufgabe.",
      "Unabhängig davon, ob du bereits Erfahrung in der Branche hast oder neu in den Bereich einsteigen möchtest – wir suchen motivierte Menschen, die mit uns gemeinsam an der Zukunft der Energie arbeiten wollen. Auch Quereinsteiger haben bei uns die Möglichkeit, sich mit gezielten Schulungen und Weiterbildungen in das Thema Photovoltaik einzuarbeiten. Wer Interesse an innovativen Technologien hat, nachhaltig etwas bewegen möchte und gerne in einem dynamischen Team arbeitet, findet hier eine langfristige und sinnstiftende Karriereperspektive.",
    ],
  };

  const benefits = {
    title: "Deine Vorteile bei ÖKOVOLT",
    img: "/Images/Jobs/download.jpg",
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
    description: [
      "Werde Teil unseres Teams und gestalte die Energieversorgung von morgen. Mit mehr als 50 Mitarbeitenden an unseren drei Standorten in Deutschland, Österreich und der Schweiz entwickeln und realisieren wir innovative Photovoltaikanlagen für Einfamilienhäuser, Mehrfamilienhäuser, Gewerbe, Industrie und die Landwirtschaft. Unsere Arbeit trägt aktiv zur Energiewende bei und ermöglicht es unseren Kunden, nachhaltige und wirtschaftliche Lösungen zur Nutzung erneuerbarer Energien umzusetzen.",
      "Als wachsendes Unternehmen bieten wir spannende Karrieremöglichkeiten in einem zukunftsorientierten Umfeld. Unsere Jobprofile sind ebenso abwechslungsreich wie unser Unternehmen und umfassen technische, kaufmännische und planerische Tätigkeiten. Ob in der Projektplanung, Montage, technischen Entwicklung oder im Vertrieb – wir suchen engagierte Fachkräfte, die mit uns an einer klimafreundlichen Zukunft arbeiten wollen.",
    ],
  };
  const jobsData = {
    title: "Arbeiten in einer zukunftssicheren Branche",
    img: "/Images/Jobs/renewable-energy-eco-technology-electric-power-fl-2025-02-11-14-15-57-utc.jpg",
    description: [
      "Die Solarbranche gehört zu den am schnellsten wachsenden Wirtschaftszweigen. Der Bedarf an erneuerbaren Energielösungen steigt kontinuierlich, und mit ihm die Nachfrage nach qualifizierten Fachkräften. Eine Karriere in diesem Bereich bietet nicht nur langfristige berufliche Sicherheit, sondern auch die Möglichkeit, aktiv an innovativen Entwicklungen mitzuwirken. In Zeiten des Klimawandels und steigender Energiekosten spielen nachhaltige Lösungen eine immer größere Rolle, weshalb Unternehmen und Privathaushalte verstärkt auf Photovoltaik setzen.",
      "Neben der wirtschaftlichen Stabilität bietet die Branche auch eine Vielzahl an beruflichen Entwicklungsmöglichkeiten. Von der technischen Planung über die Installation bis hin zur Optimierung und Wartung von Anlagen gibt es zahlreiche Tätigkeitsfelder, die sowohl handwerkliches als auch analytisches oder kaufmännisches Know-how erfordern. Der Einstieg ist sowohl für erfahrene Fachkräfte als auch für Quereinsteiger attraktiv, da sich die Branche stetig weiterentwickelt und innovative Technologien neue Jobperspektiven eröffnen.",
    ],
  };
  const jobs = {
    greenTitle: "JOBS",
    heading: "Gemeinsam die Zukunft gestalten",
    description:
      "Nachhaltige Energieversorgung ist eine der größten Herausforderungen unserer Zeit. Deshalb setzen wir auf innovative Lösungen und engagierte Teams, die den Wandel aktiv mitgestalten. Wir sind davon überzeugt, dass jeder Einzelne einen wichtigen Beitrag leisten kann – sei es durch technisches Know-how, kreative Ideen oder lösungsorientiertes Denken.",
    bullets: [
      "Karriere mit Zukunft bei ÖKOVOLT",
      "Einsatz für Energieeffizienz",
      "Mitgestaltung einer besseren Welt von morgen",
      "Werde Teil eines engagierten und zukunftsorientierten Teams",
    ],
    image1: "/Images/Jobs/jobs1.jpg",
    image2: "/Images/Jobs/jobs2.jpg",
  };
  const another = {
    mainImage: "/Images/Jobs/jobs4.jpg",
    title: "Vielfältige Karrieremöglichkeiten in der Photovoltaik",
    description:
    "Die Solarbranche bietet zahlreiche Tätigkeitsfelder, die sowohl technisches als auch kaufmännisches Know-how erfordern. Von der Planung und Entwicklung über die Installation und Wartung bis hin zu Vertrieb und Beratung – bei uns gibt es vielfältige Einsatzmöglichkeiten. Ob du handwerklich begabt bist und gerne an der Montage von Solaranlagen mitwirkst, ein Talent für Vertrieb und Kundenberatung hast oder lieber im Hintergrund technische Konzepte entwickelst – in der Photovoltaikbranche gibt es für jeden eine passende Aufgabe.",
    cardImage: "/Images/Jobs/jobs3.jpg",
    cardText:
    "Ob mit oder ohne Erfahrung – bei ÖKOVOLT findest du mit Schulungen und Teamgeist eine sinnvolle Karriere im Bereich Photovoltaik.",
    bullets: [
      "Individuelle Weiterbildungs- und Entwicklungsmöglichkeiten.",
      "Sicherer Arbeitsplatz in einer zukunftsorientierten Branche.",
    ],
  };

  const end={
    greentitle:"Solaranlage",
    title:"Jetzt bewerben & deine Zukunft mit ÖKOVOLT gestalten!",
    description:"Möchten Sie in Solarenergie investieren? Dann nutzen Sie unser Kontaktformular oder treten Sie direkt mit uns in Verbindung – unser Team steht Ihnen für eine persönliche Beratung jederzeit zur Verfügung."
  }

  return (
    <div>
      <TeamBanner data={data} />
      <InfoSection data={infoData} />
      <JobListings />
      <BenefitsLayout data={benefits} />
      <TechnologySection data={jobs} />
      <JobsInfo data={jobsData} />
      {/* <TechnologySection backgroundImage={secondBackgroundImage} /> */}
            <AnotherDesign data={another} />
      
      <GreenFeatureSection data={end}/>
    </div>
  );
}
