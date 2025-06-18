import React from 'react'
import { API_BASE_URL } from '@/lib/apiBaseUrl';
import BannerSection from '@/components/Repowering/banner';
import EnhancedCardsSection from '@/components/Repowering/second';
import PhotovoltaikOptimization from '@/components/Repowering/third';
import InverterReplacementSection from '@/components/Repowering/fourth';
import SystemExpansionSection from '@/components/Repowering/fifth';
import SixSection from '@/components/Repowering/six';
import RepoweringSection from '@/components/Repowering/seven';
import ThirdCardSection from '@/components/Repowering/eight';
import GreenFeatureSection from '@/components/Reusable/contactInfo';
import EndSection from '@/components/Reusable/end';


const DATA_URL = `${API_BASE_URL}oekovoltdeutchland.oekovoltdeutchland.doctype.photovoltaik_repowering_service_page.api.get_photovoltaik_repowering_page_with_keywords`;



export default async function RepoweringPage(){

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
      <PhotovoltaikOptimization data={data} />
      <EnhancedCardsSection data={data} />
      <InverterReplacementSection data={data} />
      <SystemExpansionSection data={data} />
      <SixSection data={data} />
      <RepoweringSection data={data} />
      <ThirdCardSection data={data} />
      <EndSection/>
    </div>
  )

}