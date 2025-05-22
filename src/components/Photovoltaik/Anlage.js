import React from 'react';
import { FaBatteryThreeQuarters, FaCar, FaBicycle , FaTree  } from 'react-icons/fa';

function AnlageSection() {
    return (
        <section className="bg-gray-100 py-10 md:py-16 px-4 ">
            
            <div className="max-w-6xl mx-auto">
                
                <div className="text-center mb-10">
                    <h2 className="text-[#669933] uppercase font-semibold tracking-wide inline-block relative text-lg">
                        Anlage
                        <span className="absolute left-0 right-0 bottom-0 h-0.5 bg-[#669933] mt-1"></span>
                    </h2>
                    <h2 className="text-2xl md:text-3xl lg:text-3xl font-bold mt-6  text-gray-900 leading-[1.5]">
                        Vorteile einer Solaranlage
                    </h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-15 ">
                    <div className="flex space-x-4">
                        <div className="flex-shrink-0">
                            <span className="flex items-center justify-center text-green-600 text-3xl">
                                <FaBatteryThreeQuarters className='text-[#669933]' size={40} />
                            </span>
                        </div>
                        <div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-3">Energiekosten reduzieren</h3>
                            <p className="text-gray-700 text-md">
                                Ihre Photovoltaik-Großanlage verringert nicht nur die direkten Energiekosten, sondern auch Netzgebühren und Abgaben erheblich.
                            </p>
                        </div>
                    </div>
                    <div className="flex space-x-4">
                        <div className="flex-shrink-0">
                            <span className="flex items-center justify-center text-green-600 text-3xl">
                                <FaCar className='text-[#669933]' size={40} />
                            </span>
                        </div>
                        <div>
                            <h3 className="text-xl font-bold text-gray-900 mb-3">Mobilitätskosten reduzieren</h3>
                            <p className="text-gray-700">
                                Mit selbst erzeugter Solarenergie versorgen Sie Ihre E-Fahrzeugflotte kostengünstig und umweltfreundlich.
                            </p>
                        </div>
                    </div>
                    <div className="flex space-x-4">
                        <div className="flex-shrink-0">
                            <span className="flex items-center justify-center text-green-600 text-3xl">
                                <FaBicycle className='text-[#669933]' size={40} />
                            </span>
                        </div>
                        <div>
                            <h3 className="text-xl font-bold text-gray-900 mb-3">
                                Fördermöglichkeiten</h3>
                            <p className="text-gray-700">
                                Mit einer Solaranlage investieren Sie in einen zukunftssicheren Energieträger, der durch zahlreiche Förderprogramme unterstützt wird.
                            </p>
                        </div>
                    </div>
                    <div className="flex space-x-4">
                        <div className="flex-shrink-0">
                            <span className="flex items-center justify-center text-green-600 text-3xl">
                                <FaTree className='text-[#669933]' size={40} />
                            </span>
                        </div>
                        <div>
                            <h3 className="text-xl font-bold text-gray-900 mb-3">
                                CO₂-Emissionen reduzieren</h3>
                            <p className="text-gray-700">
                                Ihre Großanlage versorgt Ihren Betrieb mit sauberer, emissionsfreier Solarenergie und trägt aktiv zur Erreichung der Klimaziele bei.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default AnlageSection;