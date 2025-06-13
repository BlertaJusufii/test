import React from 'react'
import { API_BASE_URL } from '@/lib/apiBaseUrl';
import BannerSection from '@/components/Direktvermaktung/banner';
import HeroEnergy from '@/components/Direktvermaktung/second';
import SecondCardSection from '@/components/Direktvermaktung/third';
import ThirdCardSection from '@/components/Direktvermaktung/fourth';
import FourthCardSection from '@/components/Direktvermaktung/fifth';
import FifthCardSection from '@/components/Direktvermaktung/six';
import SixthCardSection from '@/components/Direktvermaktung/seven';
import DirektvermaktungFAQ from '@/components/Direktvermaktung/eight';
import GreenFeatureSection from '@/components/Reusable/contactInfo';

const DATA_URL = `${API_BASE_URL}oekovoltdeutchland.oekovoltdeutchland.doctype.direktvermarktung_service_page.api.get_photovoltaik_repowering_page_with_keywords`;


export default async function DirektvermaktungPage(){


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
      <HeroEnergy data={data} />
      <SecondCardSection data={data} />
      <ThirdCardSection data={data} />
      <FourthCardSection data={data} />
      <FifthCardSection data={data} />
      <SixthCardSection data={data} />
      <DirektvermaktungFAQ data={data} />
      <GreenFeatureSection data={endd} />
    </div>
  )
}

