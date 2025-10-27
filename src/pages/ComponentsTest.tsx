import React from 'react';
import { HeroStartseite } from '../components/HeroStartseite';
import { KlassenUebersichtGrid } from '../components/KlassenUebersichtGrid';
import { KlassenUebersicht } from '../components/KlassenUebersicht';
import { AnmeldeFormular } from '../components/AnmeldeFormular';
import VorherNacherBildVergleich from '../components/VorherNacherBildVergleich';
import { FAQ } from '../components/FAQ';
import { StandorteUebersicht } from '../components/StandorteUebersicht';
import { BilderGallerie } from '../components/BilderGallerie';
import Bewertungen from '../components/Bewertungen';
import BannerAnmelden from '../components/BannerAnmelden';
import { Kontaktinformationen } from '../components/Kontaktinformationen';
import { Preisliste } from '../components/Preisliste';
import { DemoTextAnimationHero } from '../components/TextAnimationHero';
import { OverlayMediaText } from '../components/OverlayMediaText';
import { SplitMediaText } from '../components/SplitMediaText';
import { SplitMediaTextInvert } from '../components/SplitMediaTextInvert';
import { SplitMediaText1zu1 } from '../components/SplitMediaText1zu1';
import { SplitMediaText1zu1invert } from '../components/SplitMediaText1zu1invert';

const ComponentsTest: React.FC = () => {
  return (
    <div>
      <HeroStartseite
        title="Wir machen dich mobil!"
        subtitle="Deine Fahrschule"
        description="Erfahren Sie mehr über unsere Kurse und starten Sie Ihre Fahrausbildung mit uns."
        buttonText="Jetzt anmelden"
        buttonLink="/anmelden"
        logoSrc="/src/default_images/logo_default.webp"
        logoAlt="Fahrschule Logo"
      />
      <KlassenUebersichtGrid />
      <AnmeldeFormular />
      <VorherNacherBildVergleich
        beforeImage="https://images.pexels.com/photos/276724/pexels-photo-276724.jpeg?auto=compress&cs=tinysrgb&w=1200"
        afterImage="https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg?auto=compress&cs=tinysrgb&w=1200"
      />
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
        ]}
      />
      <FAQ
        faqs={[
          {
            question: 'Wie melde ich mich an und welche Unterlagen brauche ich?',
            answer: 'Personalausweis/Reisepass, biometrisches Passfoto, Sehtest (üblich: nicht älter als 2 Jahre), Erste-Hilfe-Kurs (9 UE). Unter 18 zusätzlich Einverständniserklärung der Erziehungsberechtigten; bei BF17 die Daten der Begleitpersonen. Den amtlichen Antrag stellen Sie bei der Fahrerlaubnisbehörde (die Fahrschule hilft dabei).'
          },
          {
            question: 'Wie lange dauert der Führerschein (Klasse B) durchschnittlich?',
            answer: 'Typisch 6–12 Wochen – abhängig von Kursstart, Terminverfügbarkeit, Lernfortschritt und Saison. Intensivkurse sind möglich, wenn Unterlagen/Anträge und Theorie zügig erledigt werden.'
          },
          {
            question: 'Wie viele Theorie- und Praxisstunden sind nötig?',
            answer: 'Klasse B: 14 Doppelstunden Theorie (12 Grundstoff + 2 klassenspezifisch B). In der Praxis so viele Übungsstunden wie erforderlich plus 12 Sonderfahrten: 5 Überland, 4 Autobahn, 3 Nacht.'
          },
          {
            question: 'Was kostet der Führerschein und woraus setzen sich die Kosten zusammen?',
            answer: 'Kosten variieren regional; als grober Richtwert für B: ca. 1.800–3.000 €. Bestandteile: Grundgebühr, Lernmaterial/App, Übungsfahrten (à 45 min), Sonderfahrten, Prüfungsgebühren (TÜV/Dekra) und Vorstellungsentgelte für Theorie & Praxis. Ein transparenter Kostenvoranschlag klärt die Details.'
          },
          {
            question: 'Was ist „Begleitetes Fahren ab 17" (BF17) und wer darf begleiten?',
            answer: 'Ab 17 darf mit eingetragenen Begleitpersonen gefahren werden. Voraussetzungen für Begleitpersonen: mind. 30 Jahre alt, seit mind. 5 Jahren Klasse B, maximal 1 Punkt im Fahreignungsregister. BF17 gilt in der Regel nur in Deutschland; ab 18 entfällt die Begleitauflage.'
          }
        ]}
      />

      <StandorteUebersicht
        locations={[
          {
            label: 'Köln',
            address: 'Domkloster 4, 50667 Köln',
            phone: '+49 221 12345678',
            hours: 'Mo-Fr: 9:00-18:00\nSa: 10:00-16:00\nSo: geschlossen'
          },
          {
            label: 'Stuttgart',
            address: 'Königstraße 1, 70173 Stuttgart',
            phone: '+49 711 98765432',
            hours: 'Mo-Fr: 9:00-18:00\nSa: 10:00-16:00\nSo: geschlossen'
          },
          {
            label: 'Düsseldorf',
            address: 'Schadowstraße 1, 40212 Düsseldorf',
            phone: '+49 211 11223344',
            hours: 'Mo-Fr: 9:00-18:00\nSa: 10:00-16:00\nSo: geschlossen'
          }
        ]}
      />

      <section className="py-16">
        <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-screen-xl">
          <h2 className="text-3xl font-bold text-neutral-900 mb-8 text-center">Bilder Gallerie</h2>
          <BilderGallerie />
        </div>
      </section>

      <Bewertungen />
      <BannerAnmelden />
      <Kontaktinformationen />
      <Preisliste />
      <DemoTextAnimationHero />

      <section className="py-16">
        <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-screen-xl">
          <h2 className="text-3xl font-bold text-neutral-900 mb-8 text-center">Overlay Media Text</h2>
          <OverlayMediaText
            imageSrc="https://images.pexels.com/photos/120049/pexels-photo-120049.jpeg?auto=compress&cs=tinysrgb&w=1200"
            imageAlt="Sample Image"
            title="Overlay Media Text Component"
            description="This component displays text overlaid on an image with customizable opacity and positioning."
            overlayOpacity={0.5}
            textPosition="center"
            variant="default"
          />
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-screen-xl">
          <h2 className="text-3xl font-bold text-neutral-900 mb-8 text-center">Split Media Text</h2>
          <SplitMediaText
            imageSrc="https://images.pexels.com/photos/1719648/pexels-photo-1719648.jpeg?auto=compress&cs=tinysrgb&w=1200"
            imageAlt="Sample Image"
            title="Split Media Text Component"
            description="This component displays an image alongside text in a split layout, with options for image position and styling variants."
            imagePosition="left"
            variant="default"
          />
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-screen-xl">
          <h2 className="text-3xl font-bold text-neutral-900 mb-8 text-center">Split Media Text Invert</h2>
          <SplitMediaTextInvert
            imageSrc="https://images.pexels.com/photos/1719648/pexels-photo-1719648.jpeg?auto=compress&cs=tinysrgb&w=1200"
            imageAlt="Sample Image"
            title="Split Media Text Invert Component"
            description="This component displays an image on the right alongside text on the left in a split layout."
            variant="default"
          />
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-screen-xl">
          <h2 className="text-3xl font-bold text-neutral-900 mb-8 text-center">Split Media Text 1zu1</h2>
          <SplitMediaText1zu1
            imageSrc="https://images.pexels.com/photos/1719648/pexels-photo-1719648.jpeg?auto=compress&cs=tinysrgb&w=1200"
            imageAlt="Sample Image"
            title="Split Media Text 1zu1 Component"
            description="This component displays an image and text in a 50/50 split layout."
            variant="default"
          />
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-screen-xl">
          <h2 className="text-3xl font-bold text-neutral-900 mb-8 text-center">Split Media Text 1zu1 Invert</h2>
          <SplitMediaText1zu1invert
            imageSrc="https://images.pexels.com/photos/1719648/pexels-photo-1719648.jpeg?auto=compress&cs=tinysrgb&w=1200"
            imageAlt="Sample Image"
            title="Split Media Text 1zu1 Invert Component"
            description="This component displays an image on the right and text on the left in a 50/50 split layout."
            variant="default"
          />
        </div>
      </section>
    </div>
  );
};

export default ComponentsTest;