import WallboxBanner from '@/components/Wallbox/banner';
import React from 'react'
import { API_BASE_URL } from '@/lib/apiBaseUrl';
import WallboxFeatures2 from '@/components/Wallbox/third';
import WallboxSecondCard2 from '@/components/Wallbox/second';
import WallboxThirdCard from '@/components/Wallbox/fourth';

const DATA_URL =
  `${API_BASE_URL}oekovoltdeutchland.oekovoltdeutchland.doctype.products.api.get_wallbox_page_with_keywords`;

export default async function WallboxPage() {

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
      <WallboxBanner data={data} />
      <WallboxSecondCard2 data={data} />
      <WallboxFeatures2 data={data} />
      <WallboxThirdCard data={data} />
    </div>
  )
}

