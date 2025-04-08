"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import { FaChevronRight } from "react-icons/fa";

const generateSlug = (title) => {
  return title
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/\//g, "-")
    .replace(/[ä]/g, "ae")
    .replace(/[ö]/g, "oe")
    .replace(/[ü]/g, "ue")
    .replace(/[ß]/g, "ss")
    .replace(/[^a-z0-9-]/g, "");
};

const JobListings = () => {
  const [jobsPosition, setJobsPosition] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const response = await fetch(
          "http://192.168.68.197:8000/api/method/oekovoltdeutchland.oekovoltdeutchland.doctype.jobsde.api.jobsde_data"
        );

        if (!response.ok) throw new Error("Failed to fetch data");

        const data = await response.json();
        const formattedJobs = data.message.map((job) => ({
          name: job.title,
          ort: job.ort,
          name1: job.name,
        }));

        setJobsPosition(formattedJobs);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchJobs();
  }, []);

  if (error) return <div>Error: {error}</div>;

  return (
    <div className="bg-gray-100 py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-8 text-gray-800">Offene Stellen</h1>
        {loading ? (
          <div className="flex items-center justify-center">Loading jobs...</div>
        ) : (
          <div className="space-y-6">
            {jobsPosition?.map((job, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 cursor-pointer group w-full"
              >
                <Link href={`/uber-uns/jobs/${generateSlug(job.name1)}`} className="flex justify-between items-center">
                  <div>
                    <h2 className="text-xl font-semibold mb-2 text-gray-800">{job.name}</h2>
                    <p className="text-gray-600">{job.ort}</p>
                  </div>
                  <FaChevronRight
                    className="text-gray-400 group-hover:text-[#669933] mt-1 transition-colors duration-300"
                    size={24}
                  />
                </Link>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default JobListings;
