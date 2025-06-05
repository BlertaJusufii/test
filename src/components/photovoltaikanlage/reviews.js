"use client";
import React from "react";
import Image from "next/image";
import { API_IMG_URL } from "@/lib/apiImgUrl";
import GoogleReviewsCarousel from "./googlereview";
import { motion } from "framer-motion";

const ReviewsPage = ({ data }) => {
  if (!data) return null;

  return (
    <div className="py-10 md:py-16 bg-gray-100">
      <div className="flex-col  max-w-7xl mx-auto space-y-10 px-4">
        <motion.div
          className="sm:flex-col md:flex-row lg:flex items-center  justify-between w-full gap-16"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            className="lg:w-1/2 space-y-4"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p className="text-lg text-[#669933] uppercase">
              {data.photovoltaik_title_second_card}
            </p>
            <h3 className="text-4xl">
              {data.photovoltaik_subtitle_second_card}
            </h3>
          </motion.div>

          <motion.div
            className="lg:w-1/2 mt-10 md:mt-0"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Image
              src={`${API_IMG_URL}${data.photovoltaik_image_second_card}`}
              width={600}
              height={300}
              quality={100}
              priority
              alt={data.photovoltaik_image_second_card_alt}
              className="object-cover object-center rounded-xl"
            />
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <GoogleReviewsCarousel />
        </motion.div>
      </div>
    </div>
  );
};

export default ReviewsPage;
