// Page Component
import { notFound } from "next/navigation";
import BannerSection from "@/components/Reusable/banner";
import ProjectDetailComponent from "@/components/ProjectItem/projectitem";
import JobDetails from "@/components/JobDetails/jobdetail";
import GreenFeatureSection from "@/components/Reusable/contactInfo";

// Function to slugify the title manually
function generateSlug(title) {
  return title
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/\//g, "-")
    .replace(/[ä]/g, "ae")
    .replace(/[ö]/g, "oe")
    .replace(/[ü]/g, "ue")
    .replace(/[ß]/g, "ss")
    .replace(/[^a-z0-9-]/g, ""); // Remove other special characters
}

// Function to generate static paths
export async function generateStaticParams() {
  try {
    const res = await fetch(
      "http://192.168.68.197:8000/api/method/oekovoltdeutchland.oekovoltdeutchland.doctype.jobsde.api.jobsde_data"
    );
    const data = await res.json();

    const paths = data.message.map((project) => ({
      title: generateSlug(project.name),
    }));

    console.log("Generated Static Paths:", paths);

    return paths;
  } catch (error) {
    console.error("Error fetching paths:", error);
    return [];
  }
}

// Function to generate metadata for SEO
export async function generateMetadata({ params }) {
  const { title } = await params;
  try {
    const res = await fetch(
      "http://192.168.68.197:8000/api/method/oekovoltdeutchland.oekovoltdeutchland.doctype.jobsde.api.jobsde_data"
    );
    const data = await res.json();

    // Find the matching project based on slugified title
    const project = data.message.find((p) => generateSlug(p.name) === title);

    if (!project) notFound();

    return {
      title: project.name,
      description: `Learn more about ${project.name} jobs`,
      keywords: [`${project.keywords.map((keyword) => keyword.keyword)}`],
    };
  } catch (error) {
    console.error("Error fetching metadata:", error);
    return {
      title: "Project Not Found",
      description: "The project you are looking for does not exist.",
    };
  }
}

// ... keep your generateStaticParams and generateMetadata functions the same ...

// Page Component
export default async function ProjectDetailPage({ params }) {
  const { title } = await params;
  try {
    const res = await fetch(
      "http://192.168.68.197:8000/api/method/oekovoltdeutchland.oekovoltdeutchland.doctype.jobsde.api.jobsde_data"
    );
    const data = await res.json();

    const project = data.message.find((p) => generateSlug(p.name) === title);

    if (!project) {
      console.log("No match found!");
      notFound();
    }

    const bannerInfo = {
      title: project.title || project.name, // Use project.name if title is undefined
      img: `/Images/Jobs/drone-view-of-technician-installing-solar-panels-2025-03-08-04-40-16-utc.jpg`,
    };

    return (
      <div>
        {/* Project Header */}
        <BannerSection data={bannerInfo} />
        <JobDetails jobData={project} />
        <GreenFeatureSection />
      </div>
    );
  } catch (error) {
    console.error("Error fetching project data:", error);
    return (
      <div className="max-w-7xl mx-auto px-4 py-8 text-red-500">
        Error loading the project page. Please try again later.
      </div>
    );
  }
}
