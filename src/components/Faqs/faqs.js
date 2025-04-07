"use client";

import { useState } from "react";

const SolarInfoAccordion = () => {
  const [activeIndexes, setActiveIndexes] = useState({
    solar: null,
    finanzierung: null,
    installation: null,
    support: null,
  });

  const toggleAccordion = (section, index) => {
    setActiveIndexes((prev) => ({
      ...prev,
      [section]: prev[section] === index ? null : index,
    }));
  };

  const sections = [
    {
      title: "Informationen über Solarsysteme",
      key: "solar",
      faqs: [
        {
          question: "1. Was ist ein photovoltaisches Solarsystem?",
          answer:
            "Ein photovoltaisches Solarsystem ist eine Technologie, die Sonnenlicht mithilfe von Solarmodulen in elektrische Energie umwandelt. Diese Module enthalten Photovoltaikzellen, die Strom erzeugen, wenn sie Sonnenstrahlen ausgesetzt sind.",
        },
        {
          question: "2. Wie funktionieren Solarmodule?",
          answer:
            "Solarmodule fangen das Sonnenlicht durch Photovoltaikzellen ein und wandeln es in elektrische Energie um. Die erzeugte Energie wird an einen Wechselrichter weitergeleitet, der sie in Wechselstrom (AC) umwandelt, der entweder im Haushalt genutzt oder ins Stromnetz eingespeist werden kann.",
        },
        {
          question: "3. Welche Vorteile bietet die Nutzung von Solarenergie?",
          answer:
            "Erhebliche Einsparungen bei den Stromkosten. Reduktion von CO₂-Emissionen. Unabhängigkeit von steigenden Energiepreisen. Eine langfristige Investition, die den Wert Ihrer Immobilie steigert.",
        },
      ],
    },
    {
      title: "Finanzierung und Einsparungen",
      key: "finanzierung",
      faqs: [
        {
          question: "1. Wie funktionieren Solarmodule?",
          answer:
            "Die Kosten hängen von der Größe und Kapazität des Systems ab. Wir erstellen individuelle Angebote für jeden Kunden.",
        },
        {
          question: "2. Gibt es Förderungen oder finanzielle Unterstützung für Solarsysteme in Deutschland?",
          answer:
            "Ja, in Deutschland gibt es verschiedene Förderprogramme von der Regierung und Banken wie der KfW, die die Finanzierung von Solarsystemen unterstützen. Wir helfen Ihnen bei der Beantragung dieser Förderungen.",
        },
        {
          question: "3. Wie viel kann ich mit einem Solarsystem in meinem Zuhause sparen?",
          answer:
            "Ein durchschnittliches Solarsystem kann die Stromkosten um bis zu 70 % senken. In einigen Fällen können Sie durch den Verkauf überschüssiger Energie ins Stromnetz zusätzlich verdienen.",
        },
      ],
    },
    {
      title: "Installationsprozess",
      key: "installation",
      faqs: [
        {
          question: "1. Wie lange dauert die Installation eines Solarsystems?",
          answer:
            "Die Dauer hängt von der Größe und Komplexität des Systems ab. Vor der Installation wird eine Inspektion durchgeführt, um die Details zu bestimmen.",
        },
        {
          question: "2. Ist eine Baugenehmigung für die Installation von Solarmodulen erforderlich?",
          answer:
            "In den meisten Fällen ist in Deutschland keine Baugenehmigung erforderlich. Für bestimmte Projekte (z. B. denkmalgeschützte Gebäude) können jedoch zusätzliche Unterlagen erforderlich sein",
        },
        {
          question: "3. Wer übernimmt die Montage und Konfiguration des Systems?",
          answer:
            "Die Oekovolt GmbH Solartechnik kümmert sich um jeden Schritt des Prozesses, von der Planung bis zur Montage und Konfiguration des Systems. Unser Team besteht aus zertifizierten Experten.",
        },
      ],
    },
    {
      title: "Kundensupport und Service",
      key: "support",
      faqs: [
        {
          question: "1. Bieten Sie regelmäßige Wartungs- und Reparaturdienste an?",
          answer:
            "Ja, die Oekovolt GmbH bietet Wartungsverträge an, die regelmäßige Inspektionen und gegebenenfalls Reparaturen umfassen.",
        },
        {
          question: "2. Wie kann ich Ihren Kundenservice kontaktieren?",
          answer:
            "Sie können uns telefonisch, per E-Mail oder über das Kontaktformular auf unserer Website erreichen. Unser Team steht Ihnen während der Geschäftszeiten zur Verfügung",
        },
        {
          question: "3. Bieten Sie einen Notfallservice für Probleme mit den Systemen an?",
          answer:
            "Ja, die Oekovolt GmbH bietet einen Notdienst, der bei kritischen Problemen sofortige Unterstützung leistet.",
        },
        {
          question: "4. Was passiert, wenn das Solarsystem nicht richtig funktioniert?",
          answer:
            "Falls Sie ein Problem mit Ihrem System haben, kontaktieren Sie uns bitte umgehend. Unser technisches Team führt eine Inspektion durch und behebt das Problem so schnell wie möglich.",
        },
      ],
    },
  ];

  return (
    <section className="py-16 ">
      <div className="max-w-7xl mx-auto px-4 space-y-16">
        {sections.map((section) => (
          <div key={section.key}>
            <h2 className="text-[28px] font-bold text-[#669933] mb-6 text-left">{section.title}</h2>

            <div className="divide-y divide-gray-200 border-t border-b border-gray-200">
              {section.faqs.map((item, index) => {
                const isActive = activeIndexes[section.key] === index;
                const panelId = `panel-${section.key}-${index}`;

                return (
                  <div key={index} className="transition-all duration-200">
                    <button
                      onClick={() => toggleAccordion(section.key, index)}
                      className="w-full flex items-start space-x-4 py-4 text-left focus:outline-none"
                      aria-expanded={isActive}
                      aria-controls={panelId}
                    >
                      <span className="text-2xl text-white mt-0.5 bg-[#669933] px-2 rounded min-w-[28px] flex items-center justify-center">
                        {isActive ? "−" : "+"}
                      </span>
                      <h3 className="text-[18px] font-medium text-gray-900 flex-1">{item.question}</h3>
                    </button>

                    <div
                      id={panelId}
                      className={`overflow-hidden transition-all duration-300 ease-in-out ${
                        isActive ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
                      }`}
                      style={{
                        transitionProperty: "max-height, opacity",
                      }}
                    >
                      <div className="pl-9 pb-5 pr-4 text-gray-600 text-[16px]">
                        <p>{item.answer}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SolarInfoAccordion;
