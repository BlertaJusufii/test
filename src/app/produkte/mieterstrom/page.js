import React from 'react'
import { API_BASE_URL } from '@/lib/apiBaseUrl';
import MieterstromBanner from '@/components/Mieterstrom/banner';
import MieterstromSection from '@/components/Mieterstrom/second';
import MieterstromBenefits from '@/components/Mieterstrom/third';
import MieterstromThirdSection from '@/components/Mieterstrom/fourth';
import GreenFeatureSection from '@/components/Reusable/contactInfo';
const DATA_URL =
  `${API_BASE_URL}oekovoltdeutchland.oekovoltdeutchland.doctype.products.api.get_mieterstrom_page_with_keywords`;


export default async function MieterstromPage() {

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
      <MieterstromBanner data={data} />
      <MieterstromSection data={data} />
      <MieterstromBenefits data={data} />
      <MieterstromThirdSection data={data} />
      <GreenFeatureSection data={endd} />
    </div>
  )
}

