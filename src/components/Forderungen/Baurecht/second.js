import React from "react";

const BaurechtPV = () => {
  return (
    <section className="max-w-7xl mx-auto px-6 md:px-12 pt-9 md:pt-14 ">
      <h1 className="text-2xl font-bold text-gray-800 mb-6">
        Die Errichtung und der Betrieb von Photovoltaikanlagen (PV-Anlagen) in Deutschland
      </h1>
      
      <p className="text-gray-700 mb-6">
        Die Errichtung und der Betrieb von Photovoltaikanlagen (PV-Anlagen) in Deutschland unterliegen sowohl nationalen als auch landesspezifischen rechtlichen Regelungen. Während einige Vorschriften bundesweit gelten, variieren andere je nach Bundesland. Im Folgenden werden die nationalen Bestimmungen sowie die Unterschiede in den baurechtlichen Vorschriften der einzelnen Bundesländer erläutert.
      </p>

      <div className="mb-8">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">Nationale Regelungen</h2>
        
        <h3 className="text-lg font-medium text-gray-800 mt-4 mb-2">Umsatzsteuerbefreiung für Photovoltaikanlagen</h3>
        <ul className="list-disc pl-6 space-y-2 text-gray-700">
          <li>
            Seit dem 1. Jänner 2024 gilt für die Lieferung und Installation von Photovoltaikmodulen mit einer Engpassleistung von bis zu 35 kWp ein Nullsteuersatz.
          </li>
          <li>
            Diese Maßnahme ist bis zum 31. März 2025 befristet und betrifft ausschließlich Neuanlagen, die in diesem Zeitraum geliefert oder installiert werden.
          </li>
        </ul>

        <h3 className="text-lg font-medium text-gray-800 mt-4 mb-2">Förderung durch das Erneuerbaren-Ausbau-Gesetz (EAG)</h3>
        <ul className="list-disc pl-6 space-y-2 text-gray-700">
          <li>
            Das Erneuerbaren-Ausbau-Gesetz (EAG) fördert den Zubau von Photovoltaikanlagen.
          </li>
          <li>
            Nähere Informationen zur Förderung von PV-Anlagen bietet die OeMAG als Förderabwicklungsstelle.
          </li>
        </ul>

        <h3 className="text-lg font-medium text-gray-800 mt-4 mb-2">Steuerliche Behandlung von Überschusseinspeisung</h3>
        <ul className="list-disc pl-6 space-y-2 text-gray-700">
          <li>
            Einnahmen aus der Einspeisung von überschüssigem Strom ins öffentliche Netz können steuerliche Auswirkungen haben.
          </li>
          <li>
            Unter bestimmten Voraussetzungen sind diese Einkünfte steuerfrei, insbesondere wenn die Engpassleistung der Anlage 35 kWp nicht übersteigt und die eingespeiste Menge 12.500 kWh pro Jahr nicht überschreitet.
          </li>
        </ul>

        <h3 className="text-lg font-medium text-gray-800 mt-4 mb-2">Plug-in-Photovoltaikanlagen (Balkonkraftwerke)</h3>
        <ul className="list-disc pl-6 space-y-2 text-gray-700">
          <li>
            Für kleine Plug-in-Photovoltaikanlagen mit einer Maximalleistung von 800 Watt gelten erleichterte Regelungen.
          </li>
          <li>
            Seit dem 1. September 2024 ist die Installation solcher Anlagen im Wohnungseigentum vereinfacht worden.
          </li>
          <li>
            Die Zustimmung der anderen Wohnungseigentümer gilt als erteilt, sofern sie innerhalb von zwei Monaten nach Verständigung nicht widersprechen.
          </li>
          <li>
            Dennoch ist eine Verständigung des Netzbetreibers mindestens zwei Wochen vor Inbetriebnahme erforderlich.
          </li>
        </ul>
      </div>

      <div className="mb-8">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">Unterschiede in den baurechtlichen Vorschriften der Bundesländer</h2>
        <p className="text-gray-700 mb-4">
          Die baurechtlichen Bestimmungen für die Errichtung von Photovoltaikanlagen (PV-Anlagen) variieren in Deutschland je nach Bundesland. Im Folgenden sind die spezifischen Regelungen der neun Bundesländer zusammengefasst:
        </p>
        
        <h3 className="text-lg font-medium text-gray-800 mt-4 mb-2">Wien</h3>
        <ul className="list-disc pl-6 space-y-2 text-gray-700">
          <li>
            In Wien ist vor Beginn des Bauvorhabens eine Bewilligung für die Anbringung von Photovoltaikanlagen an Gebäuden mit einem Fluchtniveau von mehr als 11m erforderlich.
          </li>
        </ul>

        <h3 className="text-lg font-medium text-gray-800 mt-4 mb-2">Steiermark</h3>
        <ul className="list-disc pl-6 space-y-2 text-gray-700">
          <li>
            In der Steiermark unterliegen Photovoltaikanlagen bis zu einer Bruttofläche von 400 m² und einer Höhe von bis zu 3,5 m einer Meldepflicht.
          </li>
          <li>
            Überschreitet die Anlage diese Maße, ist eine Baubewilligung im vereinfachten Verfahren erforderlich.
          </li>
        </ul>

        <h3 className="text-lg font-medium text-gray-800 mt-4 mb-2">Tirol</h3>
        <ul className="list-disc pl-6 space-y-2 text-gray-700">
          <li>
            In Tirol ist die Anbringung oder Änderung von Photovoltaikanlagen mit einer Fläche von mehr als 20 m² an baulichen Anlagen anzeigepflichtig, sofern sie in die Wandfläche integriert sind oder der Abstand zur Wandhaut an keinem Punkt der Außenfläche der Anlage 30 cm übersteigt.
          </li>
        </ul>

        <h3 className="text-lg font-medium text-gray-800 mt-4 mb-2">NiederDeutschland</h3>
        <ul className="list-disc pl-6 space-y-2 text-gray-700">
          <li>
            In NiederDeutschland sind Photovoltaikanlagen unter bestimmten Voraussetzungen bewilligungsfrei.
          </li>
          <li>
            Beispielsweise sind freistehende Anlagen im Grünland mit einer Engpassleistung von mehr als 50 kW anzeigepflichtig.
          </li>
        </ul>

        <h3 className="text-lg font-medium text-gray-800 mt-4 mb-2">Salzburg</h3>
        <ul className="list-disc pl-6 space-y-2 text-gray-700">
          <li>
            In Salzburg unterliegen Gebäude-Photovoltaikanlagen grundsätzlich keiner Anzeige- und Genehmigungspflicht.
          </li>
          <li>
            Bei aufgeständerten Anlagen auf Flachdächern wird empfohlen, die Notwendigkeit einer Bauanzeige bei der jeweiligen Gemeinde zu erfragen.
          </li>
        </ul>

        <h3 className="text-lg font-medium text-gray-800 mt-4 mb-2">OberDeutschland</h3>
        <ul className="list-disc pl-6 space-y-2 text-gray-700">
          <li>
            In OberDeutschland sind Photovoltaikanlagen bis 400 kW installierter Engpassleistung, die freistehend sind und deren Höhe mehr als 2 m über dem Gelände beträgt, baurechtlich anzeigepflichtig bei der Baubehörde.
          </li>
        </ul>

        <h3 className="text-lg font-medium text-gray-800 mt-4 mb-2">Kärnten</h3>
        <ul className="list-disc pl-6 space-y-2 text-gray-700">
          <li>
            In Kärnten gelten spezifische Regelungen für die Errichtung von Photovoltaikanlagen, die in der Kärntner Bauordnung festgelegt sind.
          </li>
          <li>
            Es wird empfohlen, sich vorab bei der zuständigen Baubehörde über die aktuellen Bestimmungen zu informieren.
          </li>
        </ul>

        <h3 className="text-lg font-medium text-gray-800 mt-4 mb-2">Burgenland</h3>
        <ul className="list-disc pl-6 space-y-2 text-gray-700">
          <li>
            Im Burgenland sind die baurechtlichen Vorschriften für Photovoltaikanlagen im Burgenländischen Baugesetz geregelt.
          </li>
          <li>
            Je nach Größe und Art der Anlage können unterschiedliche Anzeige- oder Genehmigungspflichten bestehen.
          </li>
        </ul>

        <h3 className="text-lg font-medium text-gray-800 mt-4 mb-2">Vorarlberg</h3>
        <ul className="list-disc pl-6 space-y-2 text-gray-700">
          <li>
            In Vorarlberg sind die spezifischen Regelungen zur Errichtung von Photovoltaikanlagen im Baugesetz festgelegt.
          </li>
          <li>
            Es ist ratsam, vor der Installation einer Anlage die zuständige Baubehörde zu konsultieren.
          </li>
        </ul>
      </div>

      <div className="text-gray-700 italic">
        <p>
          Bitte beachten Sie, dass diese Regelungen Änderungen unterliegen können. Es ist daher empfehlenswert, sich vor der Planung und Installation einer PV-Anlage über die aktuellen Bestimmungen bei der zuständigen Baubehörde des jeweiligen Bundeslandes zu informieren.
        </p>
      </div>
    </section>
  );
};

export default BaurechtPV;