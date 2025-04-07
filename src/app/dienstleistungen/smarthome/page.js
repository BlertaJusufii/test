import TeamBanner from "@/components/Reusable/teamBanner";


export default function Home() {
  const data = {
    title: "Smarthome",
    img: "/Images/Dienstleistungen/Smartphone/smart-home-3920905_1280.jpg",
    description: "Mit einer Kombination mit unseren Smarthome-Lösungen können Sie Ihren Eigenverbrauch erhöhen.",
  };

  return (
    <div>
      <TeamBanner data={data} />
    </div>
  );
}
