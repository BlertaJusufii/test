import React from 'react'
import { API_BASE_URL } from '@/lib/apiBaseUrl';
import VorteilsweltBanner from '@/components/Vorteilswelt/banner';
import GreenFeatureSection from '@/components/Reusable/contactInfo';
import RecommendationSection2 from '@/components/Vorteilswelt/second';
import ReferralStepsSection from '@/components/Vorteilswelt/third';


const DATA_URL =
  `${API_BASE_URL}oekovoltdeutchland.oekovoltdeutchland.doctype.oekovolt_vorteilswelt_service_page.api.get_vorteilswelt_page_with_keywords`;


export default async function VorteilsweltPage() {

  
   let data = null;

  try {
    const res = await fetch(DATA_URL, { cache: "no-store" }); // "no-store" = disable caching
    const json = await res.json();
    data = json.message;
  } catch (error) {
    console.error("Failed to fetch smart energy data", error);
  }

    const endd={
    greentitle:"Solaranlage sichern",
    title:"Jetzt Kontakt aufnehmen & Solaranlage sichern",
    description:"Interessiert an einer maßgeschneiderten Photovoltaikanlage für Ihr Zuhause oder Unternehmen? Füllen Sie unser Kontaktformular aus oder rufen Sie uns direkt an! Unser Expertenteam berät Sie persönlich und individuell."
  }

  return (
    <div>
      <VorteilsweltBanner data={data} />
            <RecommendationSection2 data={data} />
<ReferralStepsSection data={data} />
      <GreenFeatureSection data={endd}/>
    </div>
  )
}

