import SteuerlichBannerSection from "@/components/Forderungen/Steuerlich/banner";
import TaxTreatmentPV from "@/components/Forderungen/Steuerlich/second";
import EndSection from "@/components/Reusable/end";
import React from "react";

const page = () => {
  return (
    <div>
      <SteuerlichBannerSection />
      <TaxTreatmentPV />
      <EndSection />
    </div>
  );
};

export default page;
