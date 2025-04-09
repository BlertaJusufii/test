import "./globals.css";
import Navbar from "@/components/Navbar/navbar";
import Footer from "@/components/Reusable/footer";

export const metadata = {
  title: "ÖKOVOLT Deutschland",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
  description: "Ihr Partner für Photovoltaik & Smarthome Lösungen",
};

export default function RootLayout({ children }) {
  return (
    <html lang="de">
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
