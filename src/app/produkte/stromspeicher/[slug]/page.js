import { API_BASE_URL } from "@/lib/apiBaseUrl";

// Konverton një slug si "huawei-smart-box" -> "Huawei Smart Box"
const slugToTitle = (slug) => {
  return slug
    .replace(/-/g, " ") // "-" -> hapësirë
    .replace(/\b\w/g, (c) => c.toUpperCase()); // uppercase çdo fjalë
};

export async function generateMetadata({ params }) {
  return {
    title: decodeURIComponent(params.slug),
  };
}

export default async function HerstellerDetailPage({ params }) {
  const slug = decodeURIComponent(params.slug);
  const title = slugToTitle(slug);

  const apiUrl = `http://10.10.200.192:8000/api/method/oekovoltdeutchland.oekovoltdeutchland.doctype.hersteller.api.get_hesteller_by_name?name=${encodeURIComponent(title)}`;

  let hersteller = null;

  try {
    const res = await fetch(apiUrl, { cache: "no-store" });
    const json = await res.json();
    hersteller = json.message;
  } catch (error) {
    console.error("Error fetching hersteller data:", error);
  }

  if (!hersteller) {
    return <div className="p-6 text-center">Keine Daten gefunden.</div>;
  }

  return (
    <section className="max-w-4xl mx-auto py-12 px-6">
      <h1 className="text-3xl font-bold mb-4">{hersteller.title}</h1>
      <p className="text-gray-700 whitespace-pre-line mb-6">
        {hersteller.description}
      </p>
      {/* Shto më shumë fushë nëse ka */}
    </section>
  );
}
