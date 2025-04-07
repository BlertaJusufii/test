// components/ContactForm.js
import Image from "next/image";

export default function ContactForm() {
  return (
    <div className="relative ">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/Images/Referenzen/projekteBanner.jpg" // Replace with your image path
          alt="Background"
          layout="fill"
          objectFit="cover"
          quality={100}
        />
        <div className="absolute inset-0 bg-black/70 bg-opacity-50"></div>
      </div>

      {/* Form Container */}
      <div className="relative z-10 max-w-4xl mx-auto p-8 py-30">
        <div className=" rounded-lg shadow-xl p-8">
          <h2 className="text-2xl font-bold mb-6 text-white">Contact Us</h2>

          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* First Name */}
              <div>
                <label htmlFor="firstName" className="block text-sm font-medium text-white">
                  Vorname *
                </label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  required
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-white focus:border-white text-white"
                />
              </div>

              {/* Last Name */}
              <div>
                <label htmlFor="lastName" className="block text-sm font-medium text-white">
                  Nachname *
                </label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  required
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-white focus:border-white text-white"
                />
              </div>

              {/* Street and House Number */}
              <div>
                <label htmlFor="street" className="block text-sm font-medium text-white">
                  Strasse und Hausnummer *
                </label>
                <input
                  type="text"
                  id="street"
                  name="street"
                  required
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-white focus:border-white text-white"
                />
              </div>

              {/* ZIP and City */}
              <div>
                <label htmlFor="zipCity" className="block text-sm font-medium text-white">
                  PLZ und Ort *
                </label>
                <input
                  type="text"
                  id="zipCity"
                  name="zipCity"
                  required
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-white focus:border-white text-white"
                />
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-white">
                  E-Mail-Adresse *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-white focus:border-white text-white"
                />
              </div>

              {/* Phone */}
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-white">
                  Telefonnummer *
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-white focus:border-white text-white"
                />
              </div>
            </div>

            {/* Message */}
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-white">
                Ihre Nachricht
              </label>
              <textarea
                id="message"
                name="message"
                rows="4"
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-white focus:border-white text-white"
              ></textarea>
            </div>

            {/* Submit Button */}
            <div>
              <button
                type="submit"
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-[#669933]/90 hover:bg-[#669933] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                ANFRAGE SENDEN
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
