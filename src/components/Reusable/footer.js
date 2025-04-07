"use client";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <div className="relative">
      {/* Wave Divider - Placed above the footer */}
      <div className="w-full h-12 md:h-16 lg:h-20 -mb-1">
        {/* Negative margin to overlap */}
        <svg
          className="w-full h-full"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
          style={{ transform: "scaleY(-1)" }} // Add this style to flip vertically
        >
          <path
            fill="#669933" // Lighter color for the wave divider
            d="M0 0v46.29c47.79 22.2 103.59 32.17 165.75 24.91 122.68-14.17 283.18-46.67 459.93-46.67 143.44 0 286.78 16.66 440.83 38.95 113.35 16.36 226.73 32.81 385.83 31.13V0z"
            opacity=".25"
          />
          <path
            fill="#669933"
            d="M0 0v15.81c13 21.11 27.64 41.05 47.69 56.24C99.41 111.27 165 111 224.58 91.58c31.15-10.15 60.09-26.07 89.67-39.8 217.14-88.14 477.23-91.13 622.03-34.69 106.49 41.58 214.49 78.49 322.48 115.4 17.91 6.69 35.8 13.38 53.7 20.08V0z"
            opacity=".5"
          />
          <path
            fill="#669933"
            d="M0 0v5.63C149.93 59 314.09 71.58 475.83 45.86c41.23-7.98 79.88-24.78 122.58-40.34 60.81-21.11 127.05-36.95 183.3-41.34 54.23-3.99 106.21-2.13 158.04 10.98 62.08 16.36 120.53 45.69 182.63 75.46 38.07 18.23 76.93 34.41 115.69 48.62 14.65 4.22 29.28 8.45 43.83 12.68V0z"
          />
        </svg>
      </div>

      {/* Footer Content */}
      <footer className="bg-[#003473] text-white pt-8 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            {/* Company Info */}
            <div className="space-y-4">
              <img src="/Images/Navbar/logo.png" alt="ÖKOVOLT Solartechnik Logo" className="h-10 w-auto mb-4" />
              <p className="font-bold">ÖKOVOLT GmbH Solartechnik</p>
              <address className="not-italic">
                Schlingener Straße 1a
                <br />
                86842 Türkheim
                <br />
                Deutschland
              </address>
            </div>

            {/* Contact */}
            <div className="space-y-4">
              <h3 className="text-lg font-bold uppercase tracking-wider">Kontakt</h3>
              <hr className="border-t border-[#003473]/30 mb-3 w-24" />
              <div className="space-y-2">
                <p>
                  <span className="font-medium opacity-80">Telefon:</span>
                  <br />
                  <a href="tel:+498245967880" className="hover:text-[#003473] transition-colors">
                    +49 8245 96 788 0
                  </a>
                </p>
                <p>
                  <span className="font-medium opacity-80">E-Mail:</span>
                  <br />
                  <a href="mailto:office@oekovolt.de" className="hover:text-[#003473] transition-colors">
                    office@oekovolt.de
                  </a>
                </p>
              </div>
            </div>

            {/* Hours */}
            <div className="space-y-4">
              <h3 className="text-lg font-bold uppercase tracking-wider">Öffnungszeiten</h3>
              <hr className="border-t border-[#003473]/30 mb-3 w-24" />
              <div className="space-y-2">
                <p>
                  Montag - Donnerstag
                  <br />
                  08:00 - 16:00
                </p>
                <p>
                  Freitag
                  <br />
                  08:00 - 13:00
                </p>
              </div>
            </div>

            {/* Social & Links */}
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-bold uppercase tracking-wider">Folgen Sie Uns</h3>
                <hr className="border-t border-[#003473]/30 mb-3 w-24" />
                <div className="flex space-x-5 mb-6">
                  <a href="#" aria-label="Facebook" className="text-xl hover:text-[#003473] transition-colors">
                    <FaFacebookF />
                  </a>
                  <a href="#" aria-label="Twitter" className="text-xl hover:text-[#003473] transition-colors">
                    <FaTwitter />
                  </a>
                  <a href="#" aria-label="Instagram" className="text-xl hover:text-[#003473] transition-colors">
                    <FaInstagram />
                  </a>
                  <a href="#" aria-label="LinkedIn" className="text-xl hover:text-[#003473] transition-colors">
                    <FaLinkedinIn />
                  </a>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-bold uppercase tracking-wider">Weiterführende Links</h3>
                <hr className="border-t border-[#003473]/30 mb-3 w-24" />
                <ul className="space-y-2">
                  <li>
                    <a href="#" className="hover:text-[#003473] transition-colors">
                      Privatsphäre
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-[#003473] transition-colors">
                      AGB
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-[#003473] transition-colors">
                      Datenschutz
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-[#003473] transition-colors">
                      Impressum
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Copyright */}
          <div className="mt-12 pt-6 border-t border-[#003473]/20 text-center">
            <p>&copy; {currentYear} ÖKOVOLT GmbH Solartechnik</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
