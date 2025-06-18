import React from "react";
import { API_BASE_URL } from "@/lib/apiBaseUrl";
import BannerSection from "@/components/Stromtarif/banner";
import DynamicGreenEnergy from "@/components/Stromtarif/second";
import DynamicInfoSection from "@/components/Stromtarif/third";
import FlexiblePowerSection from "@/components/Stromtarif/fourth";
import DynamicSteps from "@/components/Stromtarif/fifth";
import FlexibleBenefitsSection from "@/components/Stromtarif/sixth";
import RequirementsSection from "@/components/Stromtarif/seventh";
import GreenFeatureSection from "@/components/Reusable/contactInfo";
import EndSection from "@/components/Reusable/end";

const DATA_URL = `${API_BASE_URL}oekovoltdeutchland.oekovoltdeutchland.doctype.dynamischer_stromtarif_service_page.api.get_dynamischer_page_with_keywords`;

export default async function StromtarifPage() {
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
      <BannerSection data={data} />
      <FlexiblePowerSection data={data} />
      <DynamicInfoSection data={data} />
      <DynamicGreenEnergy data={data} />
      <DynamicSteps data={data} />
      <FlexibleBenefitsSection data={data} />
      <RequirementsSection data={data} />
      <EndSection/>
    </div>
  );
}
