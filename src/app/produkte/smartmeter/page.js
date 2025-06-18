import React from "react";
import { API_BASE_URL } from "@/lib/apiBaseUrl";
import SmartmeterBanner from "@/components/Smartmeter/banner";
import SmartMeterCardSection from "@/components/Smartmeter/second";
import Smartmeter from "@/components/Smartmeter/third";
import Smartmetersectionfour from "@/components/Smartmeter/fourth";
import GreenFeatureSection from "@/components/Reusable/contactInfo";
import SmartMeterCostSection from "@/components/Smartmeter/fifth";
import EndSection from "@/components/Reusable/end";

const DATA_URL = `${API_BASE_URL}oekovoltdeutchland.oekovoltdeutchland.doctype.products.api.get_smart_meter_page_with_keywords`;

export default async function SmartmeterPage() {
  let data = null;

  try {
    const res = await fetch(DATA_URL, { cache: "no-store" }); // "no-store" = disable caching
    const json = await res.json();
    data = json.message;
  } catch (error) {
    console.error("Failed to fetch smart energy data", error);
  }

  const endd = {
    greentitle: "Solaranlage sichern",
    title: "Jetzt Kontakt aufnehmen & Solaranlage sichern",
    description:
      "Interessiert an einer maßgeschneiderten Photovoltaikanlage für Ihr Zuhause oder Unternehmen? Füllen Sie unser Kontaktformular aus oder rufen Sie uns direkt an! Unser Expertenteam berät Sie persönlich und individuell.",
  };

  return (
    <div>
      <SmartmeterBanner data={data} />
      <SmartMeterCardSection data={data} />
      <Smartmeter data={data} />
      <Smartmetersectionfour data={data} />
      <SmartMeterCostSection data={data} />
      <EndSection />
    </div>
  );
}
