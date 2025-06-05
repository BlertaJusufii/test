import PhotovoltaikBanner from "@/components/photovoltaikanlage/banner";
import React from "react";

import { API_BASE_URL } from "@/lib/apiBaseUrl";
import BannerLegal from "@/components/photovoltaikanlage/test";
import SolvixBanner from "@/components/photovoltaikanlage/bannertwo";
import FeaturedLogos from "@/components/photovoltaikanlage/partners";
import PhotovoltaikIntroSection from "@/components/photovoltaikanlage/firstcard";
import ReviewsPage from "@/components/photovoltaikanlage/reviews";
import PhotovoltaikStepsSection from "@/components/photovoltaikanlage/steps";
import PhotovoltaikRegionalNetzSection from "@/components/photovoltaikanlage/fourthcard";
import PhotovoltaikOverviewSection from "@/components/photovoltaikanlage/fifthcard";
import PhotovoltaikSixthCardSection from "@/components/photovoltaikanlage/sixthcard";
import PhotovoltaikComponentSection from "@/components/photovoltaikanlage/seventhcard";
import PhotovoltaikSliderSection from "@/components/photovoltaikanlage/seventhcard";
import FaqSection from "@/components/photovoltaikanlage/eightcard";

const DATA_URL = `${API_BASE_URL}oekovoltdeutchland.oekovoltdeutchland.doctype.products.api.get_photovoltaik_page_with_keywords`;

export default async function PhotovoltaikanlagePage() {
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
      <SolvixBanner data={data} />
      <FeaturedLogos data={data} />
      <PhotovoltaikIntroSection data={data} />
      <ReviewsPage data={data} />
      <PhotovoltaikStepsSection data={data} />
      <PhotovoltaikRegionalNetzSection data={data} />
      <PhotovoltaikOverviewSection data={data} />
      <PhotovoltaikSixthCardSection data={data} />
      <PhotovoltaikComponentSection data={data} />
      <FaqSection data={data} />
    </div>
  );
}
