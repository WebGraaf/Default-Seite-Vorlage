import React from 'react';
import { Helmet } from 'react-helmet-async';
import { KlassenUebersicht } from '../components/KlassenUebersicht';

const Fuehrerscheine: React.FC = () => {
  return (
    <div>
      <Helmet>
        <title>Führerscheinklassen - Deine Fahrschule</title>
        <meta name="description" content="Informiere dich über alle Führerscheinklassen, die wir anbieten. Von Auto (Klasse B) über Motorrad (Klasse A) bis LKW (Klasse C) – finde die passende Ausbildung bei [Fahrschulname]." />
        <meta name="keywords" content="Führerscheinklassen, Fahrschule, Klasse A, Klasse B, Klasse C, Klasse D, LKW-Führerschein, Motorradführerschein, [Fahrschulname]" />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Führerscheinklassen - Deine Fahrschule" />
        <meta property="og:description" content="Entdecke alle Führerscheinklassen bei [Fahrschulname] und starte deine Ausbildung." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="[Ihre-Webseiten-URL]/fuehrerscheine" />
        <meta property="og:image" content="[Ihre-Webseiten-URL]/og-image-fuehrerscheine.jpg" />
        <link rel="canonical" href="[Ihre-Webseiten-URL]/fuehrerscheine" />
      </Helmet>
      <KlassenUebersicht
        tabs={[
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
            content: 'Die Klasse L berechtigt zum Führen von land- und forstwirtschaftlichen Zugmaschinen bis 40 km/h und bestimmten Arbeitsmaschinen bis 25 km/h, nur zu LoF-Zwecken.',
            link: '/fuehrerscheine/klasse-l',
            subclasses: [
              { code: 'L', description: 'Zugmaschinen bis 40 km/h bbH (mit Anhänger max. 25 km/h)' }
            ]
          },
          {
            label: 'Klasse T',
            title: 'Führerschein Klasse T',
            content: 'Die Klasse T berechtigt zum Führen von Zugmaschinen bis 60 km/h und selbstfahrenden Arbeitsmaschinen bis 40 km/h, nur für land- und forstwirtschaftliche Zwecke.',
            link: '/fuehrerscheine/klasse-t',
            subclasses: [
              { code: 'T', description: 'Zugmaschinen bis 60 km/h bbH (nur für land- und forstwirtschaftliche Zwecke)' }
            ]
          }
        ]}
      />
    </div>
  );
};

export default Fuehrerscheine;