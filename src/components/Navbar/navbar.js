"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useRef, useEffect } from "react";

const Navbar = () => {
  const [openDropdown, setOpenDropdown] = useState(null);
  const dropdownRefs = useRef({});
  const timeoutRefs = useRef({});

  const toggleDropdown = (menu) => {
    clearTimeout(timeoutRefs.current[menu]);
    setOpenDropdown(openDropdown === menu ? null : menu);
  };

  const handleMouseEnter = (menu) => {
    clearTimeout(timeoutRefs.current[menu]);
    setOpenDropdown(menu);
  };

  const handleMouseLeave = (menu) => {
    timeoutRefs.current[menu] = setTimeout(() => {
      setOpenDropdown(null);
    }, 300); // 300ms delay before closing
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      Object.values(dropdownRefs.current).forEach((ref) => {
        if (ref && !ref.contains(event.target)) {
          setOpenDropdown(null);
        }
      });
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const menuItems = [
    {
      title: "Dienstleistungen",
      slug: "dienstleistungen",
      items: [
        { name: "Photovoltaik", slug: "photovoltaik" },
        { name: "Smarthome", slug: "smarthome" },
        { name: "Service", slug: "service" },
      ],
    },
    {
      title: "Referenzen",
      slug: "referenzen",
      items: [
        { name: "Projekte", slug: "projekte" },
        { name: "Referenzkarte", slug: "referenzkarte" },
      ],
    },
    {
      title: "Über Uns",
      slug: "uber-uns",
      items: [
        { name: "Team", slug: "team" },
        { name: "Jobs", slug: "jobs" },
      ],
    },
    {
      title: "Faqs",
      slug: "faqs",
      items: [],
    },
    {
      title: "Kontakt",
      slug: "kontakt",
      items: [],
    },
  ];

  return (
    <nav className="bg-white shadow-md py-4 z-9999 sticky top-0 left-0">
      <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
        {/* Left side - Logo/Company Name */}
        <Link href="/" className="flex items-center hover:opacity-90 transition-opacity">
          <div className="relative w-40 h-16">
            <Image
              src="/Images/Navbar/logo.png"
              alt="Solartechnik Deutschland Logo"
              fill
              className="object-contain object-left"
              priority
            />
          </div>
        </Link>

        {/* Right side - Navigation with dropdowns */}
        <div className="hidden lg:flex space-x-8">
          {menuItems.map((menu, index) => (
            <div
              key={index}
              className="relative"
              onMouseEnter={() => handleMouseEnter(menu.title)}
              onMouseLeave={() => handleMouseLeave(menu.title)}
              ref={(el) => (dropdownRefs.current[menu.title] = el)}
            >
              <div className="flex items-center">
                <Link href={`/${menu.slug}`} className="text-gray-800 hover:text-blue-600 flex items-center">
                  {menu.title}
                </Link>
                {menu.items.length > 0 && (
                  <button
                    onClick={() => toggleDropdown(menu.title)}
                    className="ml-1 focus:outline-none"
                    aria-expanded={openDropdown === menu.title}
                    aria-label={`Toggle ${menu.title} dropdown`}
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                )}
              </div>

              {menu.items.length > 0 && (
                <div
                  className={`absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-10 transition-all duration-200 ease-in-out ${
                    openDropdown === menu.title
                      ? "opacity-100 translate-y-0 pointer-events-auto"
                      : "opacity-0 -translate-y-1 pointer-events-none"
                  }`}
                >
                  {menu.items.map((item, itemIndex) => (
                    <Link
                      key={itemIndex}
                      href={`/${menu.slug}/${item.slug}`}
                      className="block px-4 py-2 text-gray-800 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                      onClick={() => setOpenDropdown(null)}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Mobile menu button */}
        <button className="lg:hidden text-gray-800 focus:outline-none">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
