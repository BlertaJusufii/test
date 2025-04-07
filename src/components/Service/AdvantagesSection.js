import React from 'react';

const AdvantagesSection = () => {
    return (
        <div className="bg-gray-100 px-4 py-16 w-full">
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-12">
                    <h3 className="text-[#669933] uppercase font-semibold tracking-wide inline-block relative text-[18px]">
                        VORTEILE
                        <span className="absolute left-0 right-0 bottom-0 h-0.5 bg-[#669933] mt-1"></span>
                    </h3>
                    <h2 className="text-3xl font-bold mt-6 text-gray-800">
                        Ihre Vorteile mit unserem Photovoltaik-Service
                    </h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                    <div className="border border-gray-200 p-8 bg-white">
                        <div className="bg-green-600 w-12 h-12 rounded-full flex items-center justify-center mb-6">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
                            </svg>
                        </div>
                        <h3 className="text-xl font-semibold mb-4 text-gray-800">Einfachheit</h3>
                        <p className="text-gray-700">
                            Wir kümmern uns um alles – von der Berechnung über die PV-Anlage
                            Inspektion bis zur fachgerechten Umsetzung. Sie haben einen zentralen
                            Ansprechpartner für alle Serviceleistungen.
                        </p>
                    </div>
                    <div className="border border-gray-200 p-8 bg-white">
                        <div className="bg-green-600 w-12 h-12 rounded-full flex items-center justify-center mb-6">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                            </svg>
                        </div>
                        <h3 className="text-xl font-semibold mb-4 text-gray-800">Nachhaltigkeit</h3>
                        <p className="text-gray-700">
                            Mit Ihrer Photovoltaikanlage erzeugen Sie saubere Energie direkt aus
                            Sonnenlicht – 100 % erneuerbar, CO₂-frei und effizient.
                        </p>
                    </div>
                    <div className="border border-gray-200 p-8 bg-white">
                        <div className="bg-green-600 w-12 h-12 rounded-full flex items-center justify-center mb-6">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                            </svg>
                        </div>
                        <h3 className="text-xl font-semibold mb-4 text-gray-800">Langlebigkeit</h3>
                        <p className="text-gray-700">
                            Regelmäßige Wartung sorgt für maximale Lebensdauer Ihrer Anlage.
                            Photovoltaikanlagen liefern zuverlässige Energie über Jahrzehnte – bei
                            minimalem Wartungsaufwand.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdvantagesSection;