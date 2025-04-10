import "./globals.css";
import Navbar from "@/components/Navbar/navbar";
import Footer from "@/components/Reusable/footer";
import CookieComponent from "@/components/Cookies/cookiecomponent";
import { GoogleTagManager } from "@next/third-parties/google";

export const metadata = {
  title: {
    default: "ÖKOVOLT Deutschland",
    template: "%s - ÖKOVOLT Deutschland",
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
  description: {
    default: "Ihr Partner für Photovoltaik & Smarthome Lösungen",
    template: "%s",
  },
  twitter: {
    card: "summary_large_image",
  },
  referrer: "origin-when-cross-origin",
  keywords: {
    default: [
      "Photovoltaik-Lösungen",
      "Erneuerbare Energie",
      "olaranlagen Deutschland",
      "Energieeinsparung",
      "Nachhaltige Energie",
    ],
    template: ["%s"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="de">
      <body>
        <Navbar />
        {children}
        <CookieComponent />
        <Footer />
        <GoogleTagManager gtmId="GTM-MTT7LVDC" />
      </body>
    </html>
  );
}
