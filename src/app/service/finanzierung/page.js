import React from "react";
import { API_BASE_URL } from "@/lib/apiBaseUrl";
import BannerSection from "@/components/Finanzierung/banner";
import FinancingSection from "@/components/Finanzierung/second";
import FinancingBenefitsSection from "@/components/Finanzierung/third";
import FinanzierungPartnerSection from "@/components/Finanzierung/fourth";
import FinanzierungFAQ from "@/components/Finanzierung/fifth";
import GreenFeatureSection from "@/components/Reusable/contactInfo";
const DATA_URL = `${API_BASE_URL}oekovoltdeutchland.oekovoltdeutchland.doctype.finanzierung_service_page.api.get_finanzierung_page_with_keywords`;

export default async function FinanzierungPage() {
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
      <FinancingSection data={data} />
      <FinancingBenefitsSection data={data} />
      <FinanzierungPartnerSection data={data} />
      <FinanzierungFAQ data={data} />
      <GreenFeatureSection data={endd} />
    </div>
  );
}
