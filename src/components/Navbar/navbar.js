"use client";
import { useState, useEffect } from "react";
import {
  FiMenu,
  FiX,
  FiChevronDown,
  FiChevronUp,
  FiPhone,
  FiMapPin,
  FiClock,
  FiFacebook,
  FiInstagram,
  FiTwitter,
  FiLinkedin,
} from "react-icons/fi";
import { FaLinkedinIn } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";
import { TfiPinterest } from "react-icons/tfi";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [showStudioInfo, setShowStudioInfo] = useState(false);

  const toggleDropdown = (name) => {
    setOpenDropdown((prev) => (prev === name ? null : name));
  };

  const closeMobileMenu = () => {
    setIsOpen(false);
    setOpenDropdown(null);
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "unset";
  }, [isOpen]);

  const navItems = [
    {
      title: "Dienstleistungen",
      slug: "dienstleistungen",
      link: "/dienstleistungen",
      items: [
        { name: "Photovoltaik", slug: "photovoltaik", link: "/dienstleistungen/photovoltaik" },
        { name: "Smarthome", slug: "smarthome", link: "/dienstleistungen/smarthome" },
        { name: "Service", slug: "service", link: "/dienstleistungen/service" },
      ],
    },
    {
      title: "Referenzen",
      slug: "referenzen",
      items: [
        { name: "Projekte", slug: "projekte", link: "/referenzen/projekte" },
        { name: "Referenzkarte", slug: "referenzkarte", link: "/referenzen/referenzkarte" },
      ],
    },
    {
      title: "Über Uns",
      slug: "uber-uns",
      link: "/uber-uns",
      items: [
        { name: "Team", slug: "team", link: "/uber-uns/team" },
        { name: "Jobs", slug: "jobs", link: "/uber-uns/jobs" },
      ],
    },
    {
      title: "Faqs",
      slug: "faqs",
      link: "/faqs",
    },
    {
      title: "Kontakt",
      slug: "kontakt",
      link: "/kontakt",
    },
  ];

  return (
    <header className="sticky top-0  w-full z-50 bg-[var(--secondary)] shadow-lg transition-all duration-300 ease-in-out bg-white">
      {/* Main Navigation */}
      <nav className={`w-full max-w-7xl mx-auto py-4`}>
        <div className="px-4 flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center h-16 w-40 relative">
            <Image
              src="/Images/Navbar/Logo.png"
              alt="Logo"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              fill
              className="object-contain object-left"
            />
          </Link>

          {/* Desktop Navigation */}
          <div>
            <div className="hidden lg:flex items-center space-x-8 relative">
              {navItems.map((item, index) => (
                <div key={index} className="relative group">
                  {item.items ? (
                    <>
                      <Link
                        href={item.link || "#"}
                        onMouseEnter={() => toggleDropdown(item.title)}
                        onClick={() => toggleDropdown(item.title)}
                        className="flex items-center hover:text-balck-90 hover:text-[#669933] transition uppercase text-sm"
                      >
                        {item.title}
                        {openDropdown === item.title ? (
                          <FiChevronUp className="ml-1" />
                        ) : (
                          <FiChevronDown className="ml-1" />
                        )}
                      </Link>
                      {openDropdown === item.title && (
                        <div
                          className="absolute left-0 mt-6 w-48 bg-[var(--ternary)] rounded-md shadow-lg py-1 z-50 bg-white"
                          onMouseLeave={() => setOpenDropdown(null)}
                        >
                          {item.items.map((subItem) => (
                            <Link
                              key={subItem.name}
                              href={subItem.link}
                              className="block px-4 py-2 text-gray-700 hover:bg-black-90 hover:text-[#669933] uppercase text-sm"
                              onClick={() => {
                                setOpenDropdown(null);
                                closeMobileMenu();
                              }}
                            >
                              {subItem.name}
                            </Link>
                          ))}
                        </div>
                      )}
                    </>
                  ) : (
                    <Link
                      href={item.link}
                      className="hover:text-[#000000] hover:text-[#669933] transition uppercase text-sm"
                    >
                      {item.title}
                    </Link>
                  )}
                </div>
              ))}
            </div>
          </div>
          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-white rounded p-2 focus:outline-none transition cursor:pointer"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="lg:hidden fixed inset-0 bg-black/20 z-40 " onClick={closeMobileMenu}>
            <div
              className="absolute right-0 top-0 h-full w-full sm:w-100 bg-[var(--ternary)] shadow-lg transform transition-transform duration-300"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex justify-end p-4">
                <button
                  className="text-[var(--secondary)] rounded p-1 focus:outline-none"
                  onClick={closeMobileMenu}
                  aria-label="Close menu"
                >
                  <FiX size={24} />
                </button>
              </div>

              <div className="px-4 py-2">
                {navItems.map((item) => (
                  <div key={item.title} className="mb-2">
                    {item.items ? (
                      <>
                        <button
                          onClick={() => toggleDropdown(item.title)}
                          className="flex items-center justify-between w-full text-[var(--secondary)]/90 hover:text-[var(--primary)] py-2 uppercase text-sm"
                        >
                          {item.title}
                          {openDropdown === item.title ? (
                            <FiChevronUp className="ml-1" />
                          ) : (
                            <FiChevronDown className="ml-1" />
                          )}
                        </button>
                        {openDropdown === item.title && (
                          <div className="ml-4 space-y-2">
                            {item.items.map((subItem) => (
                              <Link
                                key={subItem.name}
                                href={subItem.link}
                                className="block py-2 text-[var(--secondary)]/90 hover:text-[var(--primary)] uppercase text-sm hover:cursor-pointer"
                                onClick={closeMobileMenu}
                              >
                                {subItem.name}
                              </Link>
                            ))}
                          </div>
                        )}
                      </>
                    ) : (
                      <Link
                        href={item.link}
                        className="block py-2 text-[var(--secondary)] hover:text-[var(--primary)] uppercase text-sm hover:cursor-pointer"
                        onClick={closeMobileMenu}
                      >
                        {item.title}
                      </Link>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
