import Image from "next/image";

const JobDetails = ({ jobData }) => {
  return (
    <div className="max-w-4xl mx-auto p-4 bg-white  rounded-lg">
      {/* Image */}
      {jobData.bild_anhagen ? (
        <div className="relative w-full h-64 rounded-t-lg overflow-hidden">
          <Image
            src={`http://192.168.68.197:8000${jobData.bild_anhagen}`}
            alt="Job Image"
            layout="fill"
            objectFit="cover"
            className="rounded-t-lg"
          />
        </div>
      ) : (
        <div className="w-full h-64 bg-gray-300 rounded-t-lg"></div>
      )}

      {/* Title and Description */}
      <div className="p-4">
        <p className="mt-2 text-gray-600">{jobData.beschreibung}</p>
      </div>

      {/* Location */}
      <div className="p-4">
        <h3 className="text-lg font-semibold">Ort:</h3>
        <p className="text-gray-600">{jobData.ort}</p>
      </div>

      {/* Deine Aufgaben */}
      {jobData.deine_aufgaben && jobData.deine_aufgaben.length > 0 && (
        <div className="p-4">
          <h3 className="text-lg font-semibold">Deine Aufgaben:</h3>
          <ul className="list-disc pl-6 mt-2">
            {jobData.deine_aufgaben.map((item) => (
              <li key={item.name} className="text-gray-600">
                {item.beschreibung}
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Deine Qualifikationen */}
      {jobData.deine_qualifikationen && jobData.deine_qualifikationen.length > 0 && (
        <div className="p-4">
          <h3 className="text-lg font-semibold">Deine Qualifikationen:</h3>
          <ul className="list-disc pl-6 mt-2">
            {jobData.deine_qualifikationen.map((item) => (
              <li key={item.name} className="text-gray-600">
                {item.beschreibung}
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Deine Vorteile */}
      {jobData.deine_vorteile && jobData.deine_vorteile.length > 0 && (
        <div className="p-4">
          <h3 className="text-lg font-semibold">Deine Vorteile:</h3>
          <ul className="list-disc pl-6 mt-2">
            {jobData.deine_vorteile.map((item) => (
              <li key={item.name} className="text-gray-600">
                {item.beschreibung}
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Dein Gehalt */}
      {jobData.dein_gehalt && jobData.dein_gehalt.length > 0 && (
        <div className="p-4">
          <h3 className="text-lg font-semibold">Dein Gehalt:</h3>
          <ul className="list-disc pl-6 mt-2">
            {jobData.dein_gehalt.map((item) => (
              <li key={item.name} className="text-gray-600">
                {item.beschreibung}
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Other Information */}
    </div>
  );
};

export default JobDetails;
