"use client";
import Link from "next/link";
import { FaLinkedin, FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#003473] text-gray-800 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Company Info */}
        <div className="space-y-4">
          <h1 className="text-xl font-bold text-white">ÖKOVOLT GmbH Solartechnik</h1>
          <address className="not-italic">
            Schlingener Straße 1a
            <br />
            86842 Türkheim
            <br />
            Deutschland
          </address>
          <p>© {new Date().getFullYear()} ÖKOVOLT GmbH Solartechnik</p>
        </div>

        {/* Contact */}
        <div className="space-y-4">
          <h2 className="text-lg font-semibold text-white">KONTAKT</h2>
          <div>
            <p className="font-medium">Telefon</p>
            <p>+49 8245 96 788 0</p>
          </div>
          <div>
            <p className="font-medium">E-Mail</p>
            <p>office@okovolt.de</p>
          </div>
        </div>

        {/* Hours */}
        <div className="space-y-4">
          <h2 className="text-lg font-semibold">ÖFFNUNGSZEITEN</h2>
          <div>
            <p>Montag-Donnerstag</p>
            <p>08:00 – 16:00</p>
          </div>
          <div>
            <p>Freitag</p>
            <p>08:00 – 13:00</p>
          </div>
        </div>

        {/* Social & Links */}
        <div className="space-y-4">
          <div>
            <h2 className="text-lg font-semibold">FOLGEN SIE UNS</h2>
            <div className="flex space-x-4 mt-2">
              <a href="#" aria-label="LinkedIn" className="text-gray-700 hover:text-[#0077b5]">
                <FaLinkedin className="w-6 h-6" />
              </a>
              <a href="#" aria-label="Instagram" className="text-gray-700 hover:text-[#E1306C]">
                <FaInstagram className="w-6 h-6" />
              </a>
            </div>
          </div>

          <div>
            <h2 className="text-lg font-semibold">WEITERFÜHRENDE LINKS</h2>
            <ul className="mt-2 space-y-1">
              <li>
                <Link href="/privacy" className="hover:underline">
                  Privatsphäre
                </Link>
              </li>
              <li>
                <Link href="/terms" className="hover:underline">
                  AGB
                </Link>
              </li>
              <li>
                <Link href="/data-protection" className="hover:underline">
                  Datenschutz
                </Link>
              </li>
              <li>
                <Link href="/imprint" className="hover:underline">
                  Impressum
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
