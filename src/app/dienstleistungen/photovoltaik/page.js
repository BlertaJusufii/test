import React from "react";
import TeamBanner from "@/components/Reusable/teamBanner";
import Tabs from "@/components/Photovoltaik/Tabs";
import AnlageSection from "@/components/Photovoltaik/Anlage";
import KomponentenSlider from "@/components/Photovoltaik/Slider";
import ProcessSteps from "@/components/Photovoltaik/Cards";
import GreenFeatureSection from "@/components/Reusable/contactInfo";

export default function Home() {
    const data = {
        title: "Photovoltaikanlagen",
        img: "/Images/Dienstleistungen/Photovoltaik/fuschl-am-see-scaled-1.jpg",
        description: "Mit einer Photovoltaikanlage von Oekovolt Deutschland können Sie Ihre Energiekosten signifikant senken und gleichzeitig aktiv zur Energiewende beitragen.",
    };

    return (
        <div>
            <TeamBanner data={data} />
            <Tabs />
            <AnlageSection />
            <KomponentenSlider />
            <ProcessSteps />
            <GreenFeatureSection />
        </div>
    );
}
