import React from "react";
import { MdLocationOn, MdPhone, MdEmail, MdAccessTime, MdHome, MdCalendarToday } from "react-icons/md";

const Map = () => {
  return (
    <div>
      <div className="">
        {/* Google Maps Section */}
        <div className="w-full h-[400px]">
          <iframe
            title="Projekt Standort"
            className="w-full h-full"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2732.9094444536347!2d9.741196115613785!3d47.48721237917747!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x479c3a06d30d1993%3A0x9b1b64c7aa92d0e5!2sLandstra%C3%9Fe%2011%2C%206911%20Lochau%2C%20Austria!5e0!3m2!1sen!2sat!4v1678817752460!5m2!1sen!2sat"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Map;
