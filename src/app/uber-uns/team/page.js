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
    title: "Der Photovoltaik-Komplettanbieter",
    img: "/Images/Referenzen/projekteBanner.jpg",
    description:
      "Ein starkes Team sorgt für die erfolgreiche Umsetzung Ihres Projekts – mit Erfahrung, Leidenschaft und Know-how.",
  };
  const backgroundImage = {
    src: "/Images/Referenzen/projekteBanner.jpg",
    title: "Unsere Philosophie – Innovation trifft Nachhaltigkeit",
    description: [
      "Bei ÖKOVOLT Deutschland stehen Innovation, Umweltbewusstsein und Kundennähe im Mittelpunkt unseres Handelns. Unser Anspruch geht über die reine Installation hinaus: Wir schaffen langfristige, stabile und wirtschaftliche Lösungen für eine nachhaltige Energieversorgung, die ökologisch wie ökonomisch überzeugt.",
      "Wir setzen auf zukunftsweisende Technologien, persönliche Beratung und hohe Qualitätsstandards in jeder Projektphase. Dabei berücksichtigen wir nicht nur aktuelle technische Möglichkeiten, sondern denken auch an zukünftige Entwicklungen und wachsende Energiebedarfe. Jedes Projekt wird individuell geplant, professionell umgesetzt und langfristig betreut – ganz nach dem Motto: „Alles aus einer Hand.“",
      "Als Team für erneuerbare Energien verstehen wir uns nicht nur als Dienstleister, sondern als verlässlicher Partner für die Energiewende. Wir fördern Wissenstransfer, Weiterentwicklung und eine offene Unternehmenskultur, in der Vertrauen, Verantwortung und gegenseitige Unterstützung großgeschrieben werden. Unsere Philosophie verbindet technologische Exzellenz mit sozialer und ökologischer Verantwortung – für eine Zukunft, die allen gehört.",
    ],
  };
  const secondBackgroundImage = {
    src: "/Images/Referenzen/projekteBanner.jpg",
    title: "Gemeinsam die Zukunft gestalten",
    description: [
      "Die Energiewende ist ein Generationenprojekt. Bei ÖKOVOLT Deutschland tragen wir täglich dazu bei, durch intelligente, nachhaltige Technologien eine bessere Zukunft zu gestalten. Unser Photovoltaik Team steht für Expertise, Qualität und Engagement – für eine klimafreundliche Energieversorgung von morgen, die sowohl ökologisch als auch wirtschaftlich überzeugt. Jedes Teammitglied – ob Projektmanager, Techniker oder Kundenberater – spielt eine zentrale Rolle bei der Realisierung individueller Lösungen für unsere Kunden. Gemeinsam schaffen wir Vertrauen, Effizienz und einen echten Beitrag zur CO₂-Reduktion in Deutschland.",
      "Wir begleiten unsere Kunden ganzheitlich: von der ersten Beratung über die technische Planung bis hin zur Umsetzung und langfristigen Betreuung. Dabei setzen wir auf einen partnerschaftlichen Ansatz, der auf offener Kommunikation, gegenseitigem Respekt und nachhaltigem Denken basiert.",
      "Durch diese Herangehensweise gelingt es uns, Projekte erfolgreich umzusetzen und einen bleibenden Mehrwert für Gesellschaft, Umwelt und Wirtschaft zu schaffen. So gestalten wir aktiv eine lebenswerte Zukunft – heute und für kommende Generationen.",
    ],
  };

  const benefits = {
    title: "Ein starkes Team mit einer gemeinsamen Vision",
    img: "/Images/Referenzen/projekteBanner.jpg",
    description:
      "Unser Team wächst stetig, um die steigende Nachfrage nach erneuerbaren Energielösungen zu bedienen. Wir investieren in Weiterbildung, Schulungen, moderne Arbeitsmethoden und innovative Technologien, um unseren Mitarbeitenden die besten Voraussetzungen für ihre tägliche Arbeit, Entwicklung und langfristige Motivation zu bieten.",
    benefits: [
      {
        title: "Persönliche Weiterentwicklung",
        description: "Regelmäßige Schulungen und Weiterbildungsmöglichkeiten",
      },
      {
        title: "Teamorientierte Unternehmenskultur",
        description: "Zusammenarbeit auf Augenhöhe und offene Kommunikation",
      },
      {
        title: "Langfristige berufliche Perspektiven",
        description: "Sicherheit in einer wachsenden Branche mit Zukunft",
      },
      {
        title: "Abwechslungsreiche Aufgaben",
        description: "Spannende Projekte mit neuen Herausforderungen",
      },
    ],
  };

  const infoData = {
    title: "Unser Team",
    subtitle: "Gemeinsam für eine nachhaltige Zukunft",
    img: "/Images/Referenzen/projekteBanner.jpg",
    description: [
      "Hinter jeder erfolgreichen Photovoltaikanlage steht ein engagiertes Team aus erfahrenen Solarenergie Experten. Bei ÖKOVOLT Deutschland setzen unsere Photovoltaik Spezialisten auf moderne Technik und persönliche Beratung, um nachhaltige Energielösungen für Industrie, Gewerbe und Privathaushalte umzusetzen.",
      "Unser Team vereint Fachwissen, Innovation und Begeisterung für erneuerbare Energien. Ob in der Planung, technischen Umsetzung, im Kundenservice oder Vertrieb – bei ÖKOVOLT ziehen alle an einem Strang. Das Ziel: saubere, wirtschaftliche und langlebige Solaranlagen für unsere Kundinnen und Kunden in ganz Deutschland.",
      "Wir sind ein dynamisches Unternehmen mit einem interdisziplinären Team. Von Solaranlagen Technikern über Ingenieure, Elektriker, Projektleiter bis zu kaufmännischen Fachkräften bringt jeder Mitarbeitende seine individuellen Stärken in unsere Projekte ein. Dabei arbeiten wir standortübergreifend und nutzen digitale Werkzeuge, um auch komplexe PV-Projekte effizient und präzise umzusetzen. Unsere Teams sind deutschlandweit im Einsatz und realisieren sowohl regionale als auch überregionale Photovoltaiklösungen.",
      "Unsere Mitarbeiterinnen und Mitarbeiter sind das Herzstück unseres Erfolgs. Jeder bringt Fachwissen, Praxiserfahrung und neue Ideen ein – und trägt so zur Entwicklung effizienter, intelligenter und zukunftssicherer Energiekonzepte bei. Ob Neubau, Nachrüstung oder Großprojekt: Wir begleiten jedes Vorhaben mit Kompetenz, Leidenschaft und einem klaren Fokus auf Qualität und Nachhaltigkeit.",
    ],
  };

  return (
    <div>
      <TeamBanner data={data} />
      <InfoSection data={infoData} />
      <TeamSection />
      <TechnologySection backgroundImage={backgroundImage} />
      <BenefitsLayout data={benefits} />

      <TechnologySection backgroundImage={secondBackgroundImage} />
      <GreenFeatureSection />
    </div>
  );
}
