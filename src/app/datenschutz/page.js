import PrivacyPolicy from "@/components/Datenschutz/datenschutz";
import BannerSection from "@/components/Reusable/banner";
import GreenFeatureSection from "@/components/Reusable/contactInfo";
import EndSection from "@/components/Reusable/end";

export const metadata = {
  title: "Datenschutz",
  description:
    "Erfahren Sie alles über die datenschutzrechtlichen Bestimmungen und Ihre Rechte auf der Website von ÖKOVOLT GmbH. Wir erläutern unsere Datenschutzpraktiken, einschließlich der Nutzung von Cookies, Google Analytics und Google AdWords, sowie der Möglichkeit, Ihre Einwilligung zur Datenverarbeitung jederzeit zu widerrufen. Weitere Informationen zu den Rechten auf Auskunft, Berichtigung und Löschung Ihrer personenbezogenen Daten sowie zur SSL-Verschlüsselung für sichere Kommunikation finden Sie hier.",
  keywords: ["Datenschutz", "ÖKOVOLT GmbH", "DSGVO", "Google Analytics", "Cookies"],
};

export default function Home() {
  const data = {
    title: "Datenschutz",
    img: "/Images/Kontakt/download-2.jpg",
  };

 

  return (
    <div>
      <BannerSection data={data} />
      <PrivacyPolicy />
      <EndSection/>
    </div>
  );
}
