import SmartBanner from "@/components/smartenergyhome/banner";
import HeroEnergy from "@/components/smartenergyhome/hero";
import SmartEnergySection from "@/components/smartenergyhome/smartenergy";
import ThirdPart from "@/components/smartenergyhome/third";
import EnergyOfferSection from "@/components/smartenergyhome/fourth";
import GreenFeatureSection from "@/components/Reusable/contactInfo";
import { API_BASE_URL } from "@/lib/apiBaseUrl";
import EndSection from "@/components/Reusable/end";

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

  return (
    <div>
      <SmartBanner data={data} />
      <HeroEnergy data={data} />
      <SmartEnergySection data={data} />
      <EnergyOfferSection data={data} />
      <ThirdPart data={data} />
      <EndSection />
    </div>
  );
}
