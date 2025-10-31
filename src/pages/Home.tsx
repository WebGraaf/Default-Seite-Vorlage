import React from 'react';
import { HeroStartseite } from '../components/HeroStartseite';
import { TextGalerieStapel } from '../components/TextGalerieStapel';
import { KlassenUebersichtGridSpotlight } from '../components/KlassenUebersichtGridSpotlight';
import VorherNacherBildVergleich from '../components/VorherNacherBildVergleich';
import { StandorteUebersicht } from '../components/StandorteUebersicht';
import BannerAnmelden from '../components/BannerAnmelden';
import { SplitMediaText } from '../components/SplitMediaText';
import { SplitMediaTextInvert } from '../components/SplitMediaTextInvert';
import { FAQ } from '../components/FAQ';

const Home: React.FC = () => {
  // Daten für TextGalerieStapel
  const galleryImages = [
    {
      src: '/src/default_images/Platzhalter_Fahrschule.webp',
      alt: 'Fahrschule Bild 1'
    },
    {
      src: '/src/default_images/Platzhalter_Furhpark.webp',
      alt: 'Fahrschule Bild 2'
    },
    {
      src: '/src/default_images/Platzhalter_Gruppenbild_Team.webp',
      alt: 'Fahrschule Bild 3'
    }
  ];

  // Daten für StandorteUebersicht
  const locations = [
    {
      label: 'Hauptstandort',
      address: 'Musterstraße 123, 12345 Musterstadt',
      phone: '+49 123 456789',
      hours: 'Mo-Fr: 8:00-18:00\nSa: 9:00-14:00\nSo: Geschlossen'
    },
    {
      label: 'Zweigstelle Nord',
      address: 'Nordstraße 456, 54321 Nordstadt',
      phone: '+49 987 654321',
      hours: 'Mo-Fr: 9:00-17:00\nSa: 10:00-15:00\nSo: Geschlossen'
    }
  ];

  // Daten für FAQ
  const faqs = [
    {
      question: 'Wie melde ich mich für einen Führerscheinkurs an?',
      answer: 'Sie können sich ganz einfach online über unsere Website anmelden oder persönlich in einer unserer Filialen vorbeikommen.'
    },
    {
      question: 'Welche Voraussetzungen muss ich erfüllen?',
      answer: 'Sie müssen mindestens 17 Jahre alt sein und einen gültigen Personalausweis oder Reisepass vorlegen.'
    },
    {
      question: 'Wie lange dauert die Ausbildung?',
      answer: 'Die Dauer hängt von der Führerscheinklasse ab und variiert zwischen 2-6 Monaten, abhängig von Ihren Vorkenntnissen und der Verfügbarkeit von Fahrstunden.'
    },
    {
      question: 'Bieten Sie auch Intensivkurse an?',
      answer: 'Ja, wir bieten verschiedene Intensivkurse an, die Ihnen helfen, Ihren Führerschein schneller zu erhalten.'
    }
  ];

  return (
    <div>
      <HeroStartseite
        title="Wir machen dich Mobil"
        subtitle="Platzhalter Fahrschule"
        description="Erfahren Sie mehr über unsere moderne Fahrschulausbildung und unsere erfahrenen Fahrlehrer."
        buttonText="Jetzt anmelden"
        buttonLink="/anmelden"
        logoSrc="/src/default_images/logo_default.webp"
        logoAlt="Fahrschule Logo"
      />

      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <TextGalerieStapel
            title="Unsere Fahrschule"
            description="Erfahren Sie mehr über unsere moderne Fahrschulausbildung und unsere erfahrenen Fahrlehrer."
            images={galleryImages}
            imagePosition="left"
          />
        </div>
      </section>

      <KlassenUebersichtGridSpotlight />

      <VorherNacherBildVergleich
        title="Vorher Nachher Vergleich"
        beforeImage="/src/default_images/Platzhalter_Fahrschule.webp"
        afterImage="/src/default_images/Platzhalter_Furhpark.webp"
        beforeLabel="Vorher"
        afterLabel="Nachher"
      />

      <StandorteUebersicht
        title="Unsere Standorte"
        subtitle="Finden Sie den nächstgelegenen Standort"
        locations={locations}
      />

      <BannerAnmelden />

      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <SplitMediaText
          imageSrc="/src/default_images/Platzhalter_Fahrschule.webp"
          imageAlt="Fahrschule Ausbildung"
          title="Professionelle Fahrausbildung"
          description="Bei uns erhalten Sie eine erstklassige Fahrausbildung von zertifizierten Fahrlehrern. Wir legen Wert auf individuelle Betreuung und moderne Lehrmethoden, um Sie sicher auf die Straße zu bringen."
          imagePosition="left"
        />
      </div>

      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <SplitMediaTextInvert
          imageSrc="/src/default_images/Platzhalter_Furhpark.webp"
          imageAlt="Moderner Fuhrpark"
          title="Topmoderner Fuhrpark"
          description="Unser Fahrzeugpark umfasst die neuesten Modelle verschiedener Automarken. Alle Fahrzeuge sind perfekt gewartet und erfüllen höchste Sicherheitsstandards für Ihre optimale Ausbildung."
          imagePosition="right"
        />
      </div>

      <FAQ
        title="Häufig gestellte Fragen"
        faqs={faqs}
      />

      <BannerAnmelden />
    </div>
  );
};

export default Home;
