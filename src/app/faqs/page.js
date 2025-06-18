import BannerSection from "@/components/Faqs/banner";
import SolarInfoAccordion from "@/components/Faqs/faqs";
import FAQInfoSection from "@/components/Faqs/info";
import GreenFeatureSection from "@/components/Reusable/contactInfo";
import EndSection from "@/components/Reusable/end";
import InfoSection from "@/components/Reusable/info";
import { API_BASE_URL } from "@/lib/apiBaseUrl";

const DATA_URL = `${API_BASE_URL}oekovoltdeutchland.primary_page.doctype.faqs_page.api.get_faqs_page`;


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

export default async function Home() {

    let data = null;

  try {
    const res = await fetch(DATA_URL, { cache: "no-store" }); // "no-store" = disable caching
    const json = await res.json();
    data = json.message;
  } catch (error) {
    console.error("Failed to fetch smart energy data", error);
  }


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
      <BannerSection data={data}/>
      <FAQInfoSection data={data}/>
      <SolarInfoAccordion data={data}/>
    <EndSection/>
    </div>
  );
}
