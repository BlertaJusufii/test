"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { API_IMG_URL } from "@/lib/apiImgUrl";
import { API_BASE_URL } from "@/lib/apiBaseUrl";

const DATA_URL = `${API_BASE_URL}oekovoltdeutchland.oekovoltdeutchland.doctype.products.api.get_strom_page_with_keywords`;

// Krijon një slug të sigurt për URL nga një titull
const createSlug = (title) => {
  return title
    .toLowerCase()
    .trim()
    .replace(/\s+/g, "-")         // hapësira -> "-"
    .replace(/[^a-z0-9-]/g, "");  // heq çdo karakter jo të lejuar
};

const StromSecondCardSection = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(DATA_URL, { cache: "no-store" });
        const json = await res.json();
        setItems(json.message?.strom_second_card_table || []);
      } catch (error) {
        console.error("Failed to fetch data", error);
      }
    };

    fetchData();
  }, []);

  if (!items.length) return null;

  return (
    <section className="w-full bg-white py-12 px-4">
      <div className="max-w-7xl mx-auto grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {items.map((item, index) => {
          const slug = createSlug(item.title);

          return (
            <div
              key={index}
              className="bg-gray-100 rounded-xl shadow-md overflow-hidden flex flex-col"
            >
              {/* Banner Image */}
              <div className="relative w-full h-48">
                <Image
                  src={`${API_IMG_URL}${item.banner_image}`}
                  alt={item.alt_banner_image || "Banner Image"}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col grow">
                <div className="flex items-center mb-4">
                  <div className="relative w-24 h-8 mr-3">
                    <Image
                      src={`${API_IMG_URL}${item.logo_image}`}
                      alt={item.alt_logo_image || "Logo"}
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>
                <h2 className="text-lg font-semibold text-gray-800 mb-2">
                  {item.title}
                </h2>
                <p className="text-sm text-gray-600 whitespace-pre-line mb-4">
                  {item.main_description}
                </p>

                {/* Button */}
                <Link
                  href={`/stromspeicher/${slug}`}
                  className="mt-auto inline-block bg-[#669933] text-white text-sm font-medium px-4 py-2 rounded-full hover:bg-[#557a26] transition duration-300"
                >
                  Mehr Informationen
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default StromSecondCardSection;
