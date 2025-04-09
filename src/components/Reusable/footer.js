"use client";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
import Image from "next/image";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <div className="relative">
      <div className="w-full flex flex-wrap bg-pattern bg-mask">
        <div className="w-full  flex justify-end ">
          <div className="w-full h-[100px] relative overflow-hidden">
            <svg
              className="absolute top-0 left-0 w-full h-full"
              xmlns="http://www.w3.org/2000/svg"
              version="1.1"
              viewBox="0 -0.5 1024 178"
              preserveAspectRatio="none"
              fill="rgba(#669933)"
            >
              <path
                d="M1024 177.371H0V.219l507.699 133.939L1024 .219v177.152z"
                fill="#e0f0d1" 
              />
              <path
                d="M1024 177.781H0V39.438l507.699 94.925L1024 39.438v138.343z"
                fill="#c2e0a3"
              />
              <path
                d="M1024 177.781H0v-67.892l507.699 24.474L1024 109.889v67.892z"
                fill="#94c95e"
              />
              <path
                d="M1024 177.781H0v-3.891l507.699-39.526L1024 173.889v3.892z"
                fill="#669933" 
              />
            </svg>
          </div>
        </div>
      </div>

      {/* Footer Content */}
      <footer className="bg-[#003473] text-white pt-8 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-6">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            {/* Company Info */}
            <div className="space-y-4">
              <Image
                src="/Logo-Oekovolt-Gruen-mit-Weiss.webp"
                alt="ÖKOVOLT Deutschland Footer Logo"
                width={200}
                height={100}
                className="object-cover"
                quality={100}
              />
              <p className="font-bold text-[18px]">ÖKOVOLT GmbH Solartechnik</p>
              <address className="not-italic text-[16px]">
                Schlingener Straße 1a
                <br />
                86842 Türkheim
                <br />
                Deutschland
              </address>
              <div className="border-t border-[#003473]/20 text-center">
                <p>&copy; {currentYear} ÖKOVOLT GmbH Solartechnik</p>
              </div>
            </div>
            <div className="space-y-4">
              <h3 className="text-[18px] font-bold uppercase tracking-wider">
                Kontakt
              </h3>
              <hr className="border-t border-[#fffff]/30 my-3 " />
              <div className="space-y-2">
                <p>
                  <span className="font-medium opacity-80 text-[16px]">
                    Telefon:
                  </span>
                  <br />
                  <a
                    href="tel:+498245967880"
                    className="hover:text-[#669933] transition-colors text-[16px]"
                  >
                    +49 8245 96 788 0
                  </a>
                </p>
                <p>
                  <span className="font-medium opacity-80">E-Mail:</span>
                  <br />
                  <a
                    href="mailto:office@oekovolt.de"
                    className="hover:text-[#669933] transition-colors text-[16px]"
                  >
                    office@oekovolt.de
                  </a>
                </p>
              </div>
            </div>
            <div className="space-y-4">
              <h3 className="text-[18px] font-bold uppercase tracking-wider">
                Öffnungszeiten
              </h3>
              <hr className="border-t border-[#fffff]/30 my-3 " />
              <div className="space-y-2 text-[16px]">
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

            <div className="space-y-4">
              <div className="space-y-4">
                <h3 className="text-[18px] font-bold uppercase tracking-wider ">
                  Folgen Sie Uns
                </h3>
                <hr className="border-t border-[#fffff]/30 my-3 " />
                <div className="flex space-y-2 space-x-5 my-6">
                  <a
                    href="#"
                    aria-label="Facebook"
                    className="text-xl hover:text-[#669933] transition-colors"
                  >
                    <FaFacebookF />
                  </a>
                  <a
                    href="#"
                    aria-label="Twitter"
                    className="text-xl hover:text-[#669933] transition-colors"
                  >
                    <FaTwitter />
                  </a>
                  <a
                    href="#"
                    aria-label="Instagram"
                    className="text-xl hover:text-[#669933] transition-colors"
                  >
                    <FaInstagram />
                  </a>
                  <a
                    href="#"
                    aria-label="LinkedIn"
                    className="text-xl hover:text-[#669933] transition-colors"
                  >
                    <FaLinkedinIn />
                  </a>
                </div>
              </div>

              <div>
                <h3 className="text-[18px] font-bold uppercase tracking-wider">
                  Weiterführende Links
                </h3>
                <hr className="border-t border-[#fffff]/30 my-3 " />
                <ul className="space-y-2 text-[16px]">
                  <li>
                    <a
                      href="#"
                      className="hover:text-[#669933] transition-colors"
                    >
                      Privatsphäre
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="hover:text-[#669933] transition-colors"
                    >
                      AGB
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="hover:text-[#669933] transition-colors"
                    >
                      Datenschutz
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="hover:text-[#669933] transition-colors"
                    >
                      Impressum
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
