import React from 'react'
import { API_BASE_URL } from '@/lib/apiBaseUrl';
import WarmepumpeBanner from '../../../components/Warmepumpe/banner';
import WarmepumpeVorteileSection from '@/components/Warmepumpe/second';
import WarmepumpeSecondCardSection from '@/components/Warmepumpe/third';
import WarmepumpeManufacturerSection from '@/components/Warmepumpe/fourth';
import KontaktFormular from '@/components/Warmepumpe/fifth';
import WarmepumpeFinancingSection from '@/components/Warmepumpe/six';
import WaermepumpePartnerSection from '@/components/Warmepumpe/seven';
import GreenFeatureSection from '@/components/Reusable/contactInfo';


const DATA_URL =
  `${API_BASE_URL}oekovoltdeutchland.oekovoltdeutchland.doctype.products.api.get_waermepumpe_page_with_keywords`;
  
export default async function WarmepumpePage (){
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
      <WarmepumpeBanner data={data} /> 
       <WarmepumpeSecondCardSection data={data} />
      <WarmepumpeVorteileSection data={data} />
    
      <WarmepumpeManufacturerSection data={data} />
      <KontaktFormular />
      <WarmepumpeFinancingSection data={data} />
      <WaermepumpePartnerSection data={data} />
      <GreenFeatureSection data={endd} />
      
    </div>
  )
}