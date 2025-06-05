import React from 'react'
import { API_BASE_URL } from "@/lib/apiBaseUrl";
import StromspeicherBanner from '@/components/stromspeicher/banner';
import LawyerSectionStromspeicher from '@/components/stromspeicher/first';
import HeroStromspeicher from '@/components/stromspeicher/first';
import FeaturedLogos from '@/components/photovoltaikanlage/partners';
import StromSecondCardSection from '@/components/stromspeicher/second';

const DATA_URL =
  `${API_BASE_URL}oekovoltdeutchland.oekovoltdeutchland.doctype.products.api.get_strom_page_with_keywords`;

export default async function StromspeicherPage (){

   let data = null;

  try {
    const res = await fetch(DATA_URL, { cache: "no-store" }); // "no-store" = disable caching
    const json = await res.json();
    data = json.message;
  } catch (error) {
    console.error("Failed to fetch smart energy data", error);
  }


  return (
    <div>
      <StromspeicherBanner data={data} />
      <HeroStromspeicher data={data} />
      <FeaturedLogos data={data}/>
      <StromSecondCardSection  />
      

    </div>
  )
}

