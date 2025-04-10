import PrivacyPolicy from "@/components/Datenschutz/datenschutz";
import Impressum from "@/components/Impressum/impressum";
import BannerSection from "@/components/Reusable/banner";
import GreenFeatureSection from "@/components/Reusable/contactInfo";

export const metadata = {
  title: "Impressum",
  description:
    "Das Impressum der ÖKOVOLT GmbH Solartechnik enthält alle wichtigen rechtlichen Informationen wie Kontaktadresse, Unternehmensgegenstand, Haftungshinweise und Urheberrechte. Hier finden Sie Details zu unserer Geschäftsführung, rechtlichen Vertretung und den Allgemeinen Geschäftsbedingungen (AGB).",
  keywords: [
    "Impressum ÖKOVOLT GmbH",
    "Photovoltaik GmbH Impressum",
    "Rechtsform ÖKOVOLT",
    "Kontakt ÖKOVOLT",
    "Haftungshinweise ÖKOVOLT",
  ],
};

export default function Home() {
  const data = {
    title: "Impressum",
    img: "/Images/Kontakt/download-2.jpg",
  };

  return (
    <div>
      <BannerSection data={data} />
      <Impressum />
      <GreenFeatureSection />
    </div>
  );
}
