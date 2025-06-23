import PrivacyPolicy from "@/components/Datenschutz/datenschutz";
import Impressum from "@/components/Impressum/impressum";
import BannerSection from "@/components/Reusable/banner";
import GreenFeatureSection from "@/components/Reusable/contactInfo";
import EndSection from "@/components/Reusable/end";

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

  const end = {
    greentitle: "Solarenergie",
    title: "Ihre Zukunft mit Solarenergie",
    description:
      "Möchten Sie unabhängig von steigenden Strompreisen werden? Kontaktieren Sie uns für eine unverbindliche Beratung – wir finden die beste Lösung für Sie!",
  };

  return (
    <div>
      <BannerSection data={data} />
      <Impressum />
      <EndSection />
    </div>
  );
}
