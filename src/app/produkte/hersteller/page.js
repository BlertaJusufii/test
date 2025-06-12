import React from 'react'
import { API_BASE_URL } from '@/lib/apiBaseUrl';
import HerstellerBanner from '@/components/Hersteller/banner';
import HerstellerSection from '@/components/Hersteller/second';
const DATA_URL =
  `${API_BASE_URL}oekovoltdeutchland.oekovoltdeutchland.doctype.products.api.get_hersteller_page_with_keywords`;


export default async function HerstellerPage(){

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
      <HerstellerBanner data={data} />
      <HerstellerSection data={data} />
      
    </div>
  )
}

