import { useState } from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle } from 'lucide-react';

export function TabSection() {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    {
      label: 'Klasse A',
      title: 'Führerschein Klasse A',
      content: 'Die Klasse A berechtigt zum Führen von Krafträdern mit einem Hubraum von mehr als 50 cm³ und einer bauartbedingten Höchstgeschwindigkeit von mehr als 45 km/h. Dazu gehören Motorräder, Motorroller und dreirädrige Kraftfahrzeuge.',
      link: '/fuehrerscheine/klasse-a',
      subclasses: [
        { code: 'AM', description: 'Kleinkrafträder / Mofas bis 45 km/h' },
        { code: 'A1', description: 'Leichtkrafträder bis 125 ccm / 11 kW' },
        { code: 'A2', description: 'Motorräder bis 35 kW / 0,2 kW/kg' },
        { code: 'A', description: 'Alle Motorräder ohne Leistungsbeschränkung' }
      ]
    },
    {
      label: 'Klasse B',
      title: 'Führerschein Klasse B',
      content: 'Die Klasse B berechtigt zum Führen von Kraftfahrzeugen mit einer zulässigen Gesamtmasse von nicht mehr als 3.500 kg und nicht mehr als 8 Sitzplätzen außer dem Fahrersitz. Dazu gehören PKW, Wohnmobile und leichte LKW.',
      link: '/fuehrerscheine/klasse-b',
      subclasses: [
        { code: 'BF17', description: 'Begleitetes Fahren ab 17 (Klasse B unter Aufsicht bis 18 J.)' },
        { code: 'B', description: 'Pkw bis 3,5 t zGG / max. 8 Sitzplätze + Anhänger ≤ 750 kg' },
        { code: 'B96', description: 'Pkw-Kombi bis 4,25 t zGG (ohne Prüfung, nur Schulung)' },
        { code: 'BE', description: 'Pkw + Anhänger > 750 kg (bis 3,5 t Anhänger)' },
        { code: 'B196', description: 'Erweiterung B: Motorräder bis 125 ccm (A1); nur D-Land' },
        { code: 'B197', description: 'Automatikprüfung mit Schaltkompetenz (gilt EU-weit)' }
      ]
    },
    {
      label: 'Klasse C',
      title: 'Führerschein Klasse C',
      content: 'Die Klasse C berechtigt zum Führen von Lastkraftwagen mit einer zulässigen Gesamtmasse von mehr als 3.500 kg. Dazu gehören LKW, Sattelzugmaschinen und andere schwere Nutzfahrzeuge.',
      link: '/fuehrerscheine/klasse-c',
      subclasses: [
        { code: 'C1', description: '3,5 – 7,5 t zGG, Anhänger ≤ 750 kg' },
        { code: 'C1E', description: 'C1 + Anhänger > 750 kg (bis 12 t Gesamt)' },
        { code: 'C', description: '> 3,5 t zGG, Anhänger ≤ 750 kg' },
        { code: 'CE', description: 'C + Anhänger > 750 kg' }
      ]
    },
    {
      label: 'Klasse D',
      title: 'Führerschein Klasse D',
      content: 'Die Klasse D berechtigt zum Führen von Kraftomnibussen mit mehr als 8 Fahrgastplätzen. Dazu gehören Reisebusse, Linienbusse und andere Omnibusse für den Personentransport.',
      link: '/fuehrerscheine/klasse-d',
      subclasses: [
        { code: 'D1', description: '9–16 Sitzplätze, max. 8 m Länge' },
        { code: 'D1E', description: 'D1 + Anhänger > 750 kg' },
        { code: 'D', description: 'Bus mit mehr als 8 Sitzplätzen' },
        { code: 'DE', description: 'D + Anhänger > 750 kg' }
      ]
    },
    {
      label: 'Klasse L',
      title: 'Führerschein Klasse L',
      content: 'Die Klasse L berechtigt zum Führen von land- und forstwirtschaftlichen Zugmaschinen. Dazu gehören Traktoren und andere landwirtschaftliche Fahrzeuge.',
      link: '/fuehrerscheine/klasse-l',
      subclasses: [
        { code: 'L', description: 'Traktoren bis 40 km/h / Arbeitsmaschinen bis 25 km/h' }
      ]
    },
    {
      label: 'Klasse T',
      title: 'Führerschein Klasse T',
      content: 'Die Klasse T berechtigt zum Führen von Anhängern hinter Klasse B. Dazu gehören Wohnwagen, Anhänger und andere Gespanne.',
      link: '/fuehrerscheine/klasse-t',
      subclasses: [
        { code: 'T', description: 'Traktoren bis 60 km/h (für Land-/Forstwirtschaft)' }
      ]
    }
  ];

  return (
    <section className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-text-heading mb-4">
            Führerschein Klassen
          </h2>
          <p className="text-lg text-text-body">
            Erfahren Sie mehr über die verschiedenen Führerschein-Klassen
          </p>
        </div>

        <div className="flex flex-wrap gap-2 justify-center mb-8 border-b border-border-default">
          {tabs.map((tab, index) => {
            return (
              <button
                key={index}
                onClick={() => setActiveTab(index)}
                className={`flex items-center gap-2 px-6 py-3 font-semibold transition-all relative ${
                  activeTab === index
                    ? 'text-primary-600'
                    : 'text-text-body hover:text-text-heading'
                }`}
              >
                {tab.label}
                {activeTab === index && (
                  <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary-600"></div>
                )}
              </button>
            );
          })}
        </div>

        <div className="bg-card-bg rounded-2xl p-12 min-h-[300px] shadow-lg">
          <h3 className="text-3xl font-bold text-text-heading mb-4">
            {tabs[activeTab].title}
          </h3>
          <p className="text-lg text-text-body leading-relaxed mb-6">
            {tabs[activeTab].content}
          </p>
          <div className="space-y-3">
            {tabs[activeTab].subclasses.map((subclass, index) => (
              <div key={index} className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-primary-600 flex-shrink-0" />
                <span className="font-bold text-text-heading">{subclass.code}</span>
                <span className="text-text-body">- {subclass.description}</span>
              </div>
            ))}
          </div>
          <div className="mt-6">
            <Link
              to={tabs[activeTab].link}
              className="inline-block px-6 py-3 bg-white text-primary-600 border-2 border-primary-600 rounded-lg hover:bg-primary-600 hover:text-white transition-colors font-semibold"
            >
              Mehr erfahren
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
