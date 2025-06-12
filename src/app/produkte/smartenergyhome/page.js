import SmartBanner from "@/components/smartenergyhome/banner";
import HeroEnergy from "@/components/smartenergyhome/hero";
import SmartEnergySection from "@/components/smartenergyhome/smartenergy";
import ThirdPart from "@/components/smartenergyhome/third";
import EnergyOfferSection from "@/components/smartenergyhome/fourth";
import GreenFeatureSection from "@/components/Reusable/contactInfo";
import { API_BASE_URL } from "@/lib/apiBaseUrl";

const DATA_URL =
  `${API_BASE_URL}oekovoltdeutchland.oekovoltdeutchland.doctype.smart_energy_home_page.api.get_smart_energy_page_with_keywords`;


export default async function SmartEnergyPage() {
  let data = null;

  try {
    const res = await fetch(DATA_URL, { cache: "no-store" }); // "no-store" = disable caching
    const json = await res.json();
    data = json.message;
  } catch (error) {
    console.error("Failed to fetch smart energy data", error);
  }

  const endd = {
    greentitle: "Smarthome-Lösung",
    title: "Energie der Zukunft",
    description:
      "Machen Sie den ersten Schritt in Richtung Unabhängigkeit mit Ihrer eigenen Solaranlage. Füllen Sie unser Kontaktformular aus – wir helfen Ihnen gerne weiter.",
  };

  return (
    <div>
      <SmartBanner data={data} />
      <HeroEnergy data={data} />
      <SmartEnergySection data={data} />
      <EnergyOfferSection data={data} />
      <ThirdPart data={data} />
      <GreenFeatureSection data={endd} />
    </div>
  );
}
