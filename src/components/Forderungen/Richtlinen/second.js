import React from "react";

const RichtlinienPV = () => {
  return (
    <section className="max-w-7xl mx-auto px-6 md:px-12 pt-9 md:pt-14 ">
      <h1 className="text-2xl font-bold text-gray-800 mb-6">
        Normen und Richtlinien für Photovoltaikanlagen in Deutschland
      </h1>
      
      <p className="text-gray-700 mb-6">
        Die Planung, Errichtung und der Betrieb von Photovoltaikanlagen (PV-Anlagen) in Deutschland unterliegen einer Vielzahl von Normen und Richtlinien, die Sicherheit, Effizienz und Qualität gewährleisten sollen. Im Folgenden werden die wichtigsten Regelwerke detailliert erläutert:
      </p>

      <div className="mb-8">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">Elektrotechnische Normen und Richtlinien</h2>
        
        <h3 className="text-lg font-medium text-gray-800 mt-4 mb-2">OVE E 8101:2019-01-01</h3>
        <ul className="list-disc pl-6 space-y-2 text-gray-700">
          <li>
            Diese Norm behandelt die Planung, Errichtung und Prüfung elektrischer Niederspannungsanlagen und enthält spezifische Anforderungen für PV-Anlagen im Abschnitt 712.
          </li>
          <li>
            Sie legt fest, wie elektrische Betriebsmittel auszuwählen und zu installieren sind, um Sicherheit und Funktionalität zu gewährleisten.
          </li>
          <li>
            Dazu gehören Vorgaben zur Dimensionierung von Kabeln, Schutzmaßnahmen gegen elektrischen Schlag und Anforderungen an Schalt- und Steuergeräte.
          </li>
        </ul>

        <h3 className="text-lg font-medium text-gray-800 mt-4 mb-2">OVE EN 62446-1:2019-05-01</h3>
        <ul className="list-disc pl-6 space-y-2 text-gray-700">
          <li>
            Diese Norm definiert Anforderungen an die Dokumentation, Inbetriebnahmeprüfung und regelmäßige Wartung von PV-Systemen.
          </li>
          <li>
            Sie stellt sicher, dass Anlagenbetreiber über alle notwendigen Informationen verfügen, um den sicheren Betrieb und die langfristige Leistungsfähigkeit der Anlage zu gewährleisten.
          </li>
        </ul>

        <h3 className="text-lg font-medium text-gray-800 mt-4 mb-2">OVE-Richtlinie R 6-2-1:2012-04-01</h3>
        <ul className="list-disc pl-6 space-y-2 text-gray-700">
          <li>
            Diese Richtlinie befasst sich mit dem Blitz- und Überspannungsschutz von PV-Anlagen.
          </li>
          <li>
            Sie gibt Empfehlungen zur Planung und Umsetzung von Schutzmaßnahmen, um Schäden durch Blitzeinschläge oder Überspannungen zu verhindern.
          </li>
          <li>
            Dies umfasst sowohl externe Blitzschutzsysteme als auch interne Schutzmaßnahmen wie Überspannungsableiter.
          </li>
        </ul>

        <h3 className="text-lg font-medium text-gray-800 mt-4 mb-2">OVE-Richtlinie R 6-2-2:2022-05-01</h3>
        <ul className="list-disc pl-6 space-y-2 text-gray-700">
          <li>
            Diese Richtlinie ergänzt die R 6-2-1 und fokussiert auf die Auswahl und Anwendung von Überspannungsschutzgeräten in PV-Anlagen.
          </li>
          <li>
            Sie bietet detaillierte Anleitungen zur Integration von Schutzkomponenten, um elektrische und elektronische Systeme vor transienten Überspannungen zu schützen.
          </li>
        </ul>

        <h3 className="text-lg font-medium text-gray-800 mt-4 mb-2">OVE-Richtlinie R 11-1:2022-05-01</h3>
        <ul className="list-disc pl-6 space-y-2 text-gray-700">
          <li>
            Diese Richtlinie legt zusätzliche Sicherheitsanforderungen für PV-Anlagen fest, insbesondere zum Schutz von Einsatzkräften wie der Feuerwehr.
          </li>
          <li>
            Sie enthält Maßnahmen, die im Falle von Bränden oder anderen Notfällen die Gefährdung von Rettungskräften minimieren, beispielsweise durch klare Kennzeichnungen und Abschaltvorrichtungen.
          </li>
        </ul>

        <h3 className="text-lg font-medium text-gray-800 mt-4 mb-2">OVE-Richtlinie R 11-3:2018-11-01</h3>
        <ul className="list-disc pl-6 space-y-2 text-gray-700">
          <li>
            Diese Richtlinie behandelt das Thema Blendung durch PV-Anlagen.
          </li>
          <li>
            Sie gibt Hinweise zur Vermeidung von Reflexionen, die Verkehrsteilnehmer oder Anwohner beeinträchtigen können, und empfiehlt geeignete Planungs- und Installationsmaßnahmen, um Blendwirkungen zu minimieren.
          </li>
        </ul>

        <h3 className="text-lg font-medium text-gray-800 mt-4 mb-2">OVE-Richtlinie R 20:2018-11-01</h3>
        <ul className="list-disc pl-6 space-y-2 text-gray-700">
          <li>
            Diese Richtlinie befasst sich mit stationären elektrischen Energiespeichersystemen, die häufig in Kombination mit PV-Anlagen eingesetzt werden.
          </li>
          <li>
            Sie definiert Sicherheitsanforderungen und gibt Hinweise zur Aufstellung, Unterbringung und zum sicheren Betrieb von Batteriespeichern.
          </li>
        </ul>
      </div>

      <div className="mb-8">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">Bau- und Brandschutzrichtlinien</h2>
        
        <h3 className="text-lg font-medium text-gray-800 mt-4 mb-2">OIB-Richtlinien 2023</h3>
        <ul className="list-disc pl-6 space-y-2 text-gray-700">
          <li>
            Das Deutschlandische Institut für Bautechnik (OIB) hat in den OIB-Richtlinien 2023 spezifische Anforderungen an den Brandschutz von PV-Anlagen festgelegt.
          </li>
          <li>
            Für an Fassaden installierte PV-Module gelten dieselben Anforderungen wie für andere Außenwandbekleidungen.
          </li>
          <li>
            Bei Gebäuden der Gebäudeklassen 4 und 5 müssen zusätzliche Maßnahmen ergriffen werden, um eine Brandverbreitung und das Herabfallen großer Modulteile zu verhindern.
          </li>
          <li>
            Dazu zählt beispielsweise die geschossweise Abschottung von Hinterlüftungsspalten, um eine vertikale Brandausbreitung zu unterbinden.
          </li>
        </ul>

        <h3 className="text-lg font-medium text-gray-800 mt-4 mb-2">Stadt Wien – Merkblatt für Photovoltaikanlagen</h3>
        <ul className="list-disc pl-6 space-y-2 text-gray-700">
          <li>
            Die Stadt Wien hat ein Merkblatt veröffentlicht, das spezifische Anforderungen für PV-Anlagen in Wien zusammenfasst.
          </li>
          <li>
            Es enthält Vorgaben zu Abständen zwischen PV-Modulen und anderen Dachelementen, zur Erreichbarkeit der Dachfläche für Feuerwehreinsätze und zur Einschränkung der Brandverbreitung.
          </li>
          <li>
            Beispielsweise müssen PV-Module einen Mindestabstand von 3 Metern zu Dachausstiegen einhalten, die als Zugänge für die Feuerwehr dienen.
          </li>
        </ul>
      </div>

      <div className="mb-8">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">Arbeitsschutz und Sicherheit bei der Installation</h2>
        <p className="text-gray-700 mb-4">
          Für Arbeiten auf Dächern im Zusammenhang mit der Installation und Wartung von PV-Anlagen sind spezifische Sicherheitsvorschriften zu beachten:
        </p>
        
        <ul className="list-disc pl-6 space-y-2 text-gray-700">
          <li>
            <strong>ÖNORM EN 4007:</strong> Regelt allgemeine Anforderungen an Gerüste, deren Verwendung, Bauart und Belastung.
          </li>
          <li>
            <strong>ÖNORM EN 353-1 und EN 353-2:</strong> Behandeln persönliche Schutzausrüstungen gegen Absturz, insbesondere mitlaufende Auffanggeräte mit fester oder beweglicher Führung.
          </li>
          <li>
            <strong>ÖNORM EN 361:</strong> Definiert Anforderungen an Auffanggurte als Teil der persönlichen Schutzausrüstung gegen Absturz.
          </li>
          <li>
            <strong>ÖNORM EN 795:</strong> Beschreibt Anforderungen an Anschlageinrichtungen für persönliche Absturzschutzausrüstungen.
          </li>
        </ul>
        
        <p className="text-gray-700 mt-4">
          Diese Normen gewährleisten, dass bei der Installation von PV-Anlagen auf Dächern die Sicherheit der Arbeiter durch geeignete Schutzmaßnahmen, wie Absturzsicherungen und stabile Gerüste, gewährleistet ist.
        </p>
      </div>

      <div className="text-gray-700 italic">
        <p>
          Die Einhaltung dieser Normen und Richtlinien ist entscheidend für die Sicherheit, Effizienz und Langlebigkeit von PV-Anlagen.
        </p>
      </div>
    </section>
  );
};

export default RichtlinienPV;