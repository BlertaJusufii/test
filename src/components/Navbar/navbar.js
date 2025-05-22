"use client";
import React, { useState, useEffect } from "react";
import { FiMenu, FiX, FiChevronDown, FiChevronUp } from "react-icons/fi";
import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false); // mobile menu open/close
  const [openDropdown, setOpenDropdown] = useState(null); // which submenu open in mobile
  const [hoverDropdown, setHoverDropdown] = useState(null); // which submenu open on desktop hover

  // Toggle mobile submenu
  const toggleDropdown = (name) => {
    setOpenDropdown((prev) => (prev === name ? null : name));
  };

  // Close mobile menu completely
  const closeMobileMenu = () => {
    setIsOpen(false);
    setOpenDropdown(null);
  };

  // Close submenu dropdown on desktop mouse leave
  const handleMouseLeave = () => {
    setHoverDropdown(null);
  };

  // Close submenu dropdown on desktop mouse enter
  const handleMouseEnter = (name) => {
    setHoverDropdown(name);
  };

  // Disable body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "unset";
  }, [isOpen]);

  // Close dropdown if clicked outside (for desktop hover submenu)
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (hoverDropdown && !event.target.closest(".relative.group")) {
        setHoverDropdown(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [hoverDropdown]);

  const navItems = [
    {
      title: "Dienstleistungen",
      slug: "dienstleistungen",
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
      items: [
        { name: "Team", slug: "team", link: "/uber-uns/team" },
        { name: "Jobs", slug: "jobs", link: "/uber-uns/jobs" },
      ],
    },
    { title: "Faqs", slug: "faqs", link: "/faqs" },
    { title: "Kontakt", slug: "kontakt", link: "/kontakt" },
  ];

  return (
    <header className="sticky top-0 w-full z-150 bg-white shadow-lg">
      <nav className="w-full max-w-7xl mx-auto py-4">
        <div className="px-4 flex justify-between items-center">
          <Link href="/" className="flex items-center h-16 w-40 lg:w-80 relative" onClick={closeMobileMenu}>
            <Image
              src="/Images/Navbar/Logo.png"
              alt="Logo"
              fill
              priority
              className="object-contain object-left"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden xl:flex items-center space-x-8">
            {navItems.map((item) => (
              <div
                key={item.title}
                className="relative group"
                onMouseEnter={() => handleMouseEnter(item.title)}
                onMouseLeave={handleMouseLeave}
              >
                {item.items ? (
                  <>
                    <button
                      type="button"
                      className="flex items-center hover:text-[#669933] transition uppercase text-lg"
                      onClick={(e) => e.preventDefault()} // prevent toggling on click in desktop
                    >
                      {item.title}
                      {hoverDropdown === item.title ? (
                        <FiChevronUp className="ml-1" />
                      ) : (
                        <FiChevronDown className="ml-1" />
                      )}
                    </button>

                    {/* Show submenu on hover */}
                    {hoverDropdown === item.title && (
                      <div className="absolute right-0 mt-0 w-40 bg-white rounded-md shadow-lg py-1 z-50">
                        {item.items.map((subItem) => (
                          <Link
                            key={subItem.name}
                            href={subItem.link}
                            className="block px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-[#669933] text-md"
                            onClick={() => setHoverDropdown(null)} // close submenu on click
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
                    className="hover:text-[#669933] transition uppercase text-lg"
                    onClick={() => setHoverDropdown(null)}
                  >
                    {item.title}
                  </Link>
                )}
              </div>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="xl:hidden p-2 rounded-md focus:outline-none transition bg-white"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <FiX size={24} className="text-gray-800" />
            ) : (
              <FiMenu size={24} className="text-gray-800" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="xl:hidden fixed inset-0 bg-black/30 z-40" onClick={closeMobileMenu}>
            <div
              className="absolute right-0 top-0 h-full w-full sm:w-96 bg-white shadow-lg overflow-y-auto z-50"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex justify-between items-center p-4 pt-2 bg-white sticky top-0 z-60">
                <Link href="/" className="flex items-center h-20 w-40 relative" onClick={closeMobileMenu}>
                  <Image
                    src="/Images/Navbar/Logo.png"
                    alt="Company Logo"
                    fill
                    className="object-contain object-left"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </Link>

                <button
                  className="text-gray-800 rounded p-1 focus:outline-none"
                  onClick={closeMobileMenu}
                  aria-label="Close menu"
                >
                  <FiX size={24} />
                </button>
              </div>

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
                                onClick={closeMobileMenu} // closes whole mobile menu on click
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
                        onClick={closeMobileMenu} // closes whole mobile menu on click
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
