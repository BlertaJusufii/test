"use client";
import { useState, useEffect } from "react";
import { FiMenu, FiX, FiChevronDown, FiChevronUp } from "react-icons/fi";
import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);

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
    <header className="sticky top-0 w-full z-50 bg-white shadow-lg">
      {/* Main Navigation */}
      <nav className={`w-full max-w-7xl mx-auto py-4`}>
        <div className="px-4 flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center h-16 w-40 lg:w-80 relative">
            <Image
              src="/Images/Navbar/Logo.png"
              alt="Logo"
              fill
              className="object-contain object-left "
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
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
                        className="flex items-center hover:text-balck-90 hover:text-[#669933] transition uppercase text-md"
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
                              className="block px-4 py-2 text-gray-700 hover:bg-black-90 hover:text-[#669933]  text-md"
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
                      className="hover:text-[#000000] hover:text-[#669933] transition uppercase text-md"
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
            className="lg:hidden p-2 rounded-md focus:outline-none transition bg-white "
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <FiX size={24} className="text-gray-800" /> : <FiMenu size={24} className="text-gray-800" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="lg:hidden fixed inset-0 bg-black/30 z-40" onClick={closeMobileMenu}>
            <div
              className="absolute right-0 top-0 h-full w-full sm:w-96 bg-white shadow-lg overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header with Logo and Close Button */}
              <div className="flex justify-between items-center p-4 pt-2 bg-white sticky top-0 z-10 border-b">
                {/* Company Logo */}
                <Link href="/" className="flex items-center h-20 w-40 relative" onClick={closeMobileMenu}>
                  <Image
                    src="/Images/Navbar/Logo.png"
                    alt="Company Logo"
                    fill
                    className="object-contain object-left"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </Link>

                {/* Close Button */}
                <button
                  className="text-gray-800 rounded p-1 focus:outline-none"
                  onClick={closeMobileMenu}
                  aria-label="Close menu"
                >
                  <FiX size={24} />
                </button>
              </div>

              {/* Menu Items */}
              <div className="px-6 py-4 bg-white">
                {navItems.map((item) => (
                  <div key={item.title} className="mb-4">
                    {item.items ? (
                      <>
                        <button
                          onClick={() => toggleDropdown(item.title)}
                          className="flex items-center justify-between w-full text-gray-800 hover:text-[#669933] py-3 uppercase text-md font-medium"
                        >
                          {item.title}
                          {openDropdown === item.title ? (
                            <FiChevronUp className="ml-1" />
                          ) : (
                            <FiChevronDown className="ml-1" />
                          )}
                        </button>
                        {openDropdown === item.title && (
                          <div className="ml-4 space-y-3 mt-2">
                            {item.items.map((subItem) => (
                              <Link
                                key={subItem.name}
                                href={subItem.link}
                                className="block py-2 text-gray-700 hover:text-[#669933] uppercase text-sm"
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
                        className="block py-3 text-gray-800 hover:text-[#669933] uppercase text-md font-medium"
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
