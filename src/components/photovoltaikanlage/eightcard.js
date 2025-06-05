'use client';

import { useState } from 'react';
import { FaChevronDown } from 'react-icons/fa';
import { BsQuestionCircleFill } from 'react-icons/bs';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export default function FaqSection({ data }) {
  const [openIndex, setOpenIndex] = useState(null);

  const title = data.photovoltaik_title_eighth_card_first || 'Häufige Fragen';
  const subtitle = data.photovoltaik_subtitle_eighth_card_first || '';
  const questions = data.photovoltaik_eighth_table_images || [];

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="max-w-7xl mx-auto px-6 mb-9 md:mb-17">
      {/* Centered Title & Subtitle */}
      <div className="text-center max-w-2xl mx-auto mb-12">
        <p className="text-xl uppercase text-[#669933] font-semibold">{title}</p>
        <h4 className="mt-4 text-2xl text-gray-600">{subtitle}</h4>
      </div>

      {/* Questions Below, Centered */}
      <div className="space-y-4 max-w-5xl mx-auto">
        {questions.map((item, index) => (
          <div
            key={index}
            className="bg-white border border-gray-200 rounded-xl shadow-sm"
          >
            <button
              onClick={() => toggle(index)}
              className="cursor-pointer w-full flex justify-between items-center px-6 py-4 text-left hover:bg-gray-50"
            >
              <div className="flex items-center gap-3">
                <BsQuestionCircleFill className="text-green-600 w-5 h-5 shrink-0" />
                <span className="font-semibold text-gray-800">
                  {item.question_title}
                </span>
              </div>
              <FaChevronDown
                className={`w-4 h-4 text-gray-500 transition-transform duration-300 ${
                  openIndex === index ? 'rotate-180' : ''
                }`}
              />
            </button>

            {openIndex === index && (
              <div className="px-6 py-4 bg-gray-50 text-gray-700 space-y-2 border-t">
                {item.first_pharagraph && <p>{item.first_pharagraph}</p>}
                {item.second_pharagraph && <p>{item.second_pharagraph}</p>}
                {item.third_pharagraph && <p>{item.third_pharagraph}</p>}
                {item.fourth_pharagraph && <p>{item.fourth_pharagraph}</p>}
                {item.fifth_pharagraph && <p>{item.fifth_pharagraph}</p>}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
