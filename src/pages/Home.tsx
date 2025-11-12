import React from 'react';
import { Helmet } from 'react-helmet-async';
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
      src: '/default_images/Platzhalter_Fahrschule.webp',
      alt: 'Fahrschule Bild 1'
    },
    {
      src: '/default_images/Platzhalter_Furhpark.webp',
      alt: 'Fahrschule Bild 2'
    },
    {
      src: '/default_images/Platzhalter_Gruppenbild_Team.webp',
      alt: 'Fahrschule Bild 3'
    }
  ];

  // Daten für StandorteUebersicht
  const locations = [
    {
      label: 'Hauptstandort',
      address: 'Musterstraße 123, 12345 Musterstadt',
      phone: '+49 123 456789',
      hours: 'Mo-Fr: 8:00-18:00\nSa: 9:00-14:00\nSo: Geschlossen',
      mapSrc: 'https://maps.google.com/maps?q=Musterstra%C3%9Fe%20123,%2012345%20Musterstadt&t=&z=15&ie=UTF8&iwloc=&output=embed'
    },
    {
      label: 'Zweigstelle Nord',
      address: 'Nordstraße 456, 54321 Nordstadt',
      phone: '+49 987 654321',
      hours: 'Mo-Fr: 9:00-17:00\nSa: 10:00-15:00\nSo: Geschlossen',
      mapSrc: 'https://maps.google.com/maps?q=Nordstra%C3%9Fe%20456,%2054321%20Nordstadt&t=&z=15&ie=UTF8&iwloc=&output=embed'
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
      <Helmet>
        <title>Deine Fahrschule - Startseite</title>
        <meta name="description" content="Willkommen bei [Fahrschulname]. Wir machen dich mobil! Erfahre mehr über unsere Führerscheinkurse, unseren modernen Fuhrpark und melde dich noch heute an." />
        <meta name="keywords" content="Fahrschule, Führerschein, Fahrausbildung, Auto, Motorrad, LKW, [Fahrschulname], [Stadt]" />
        <meta property="og:title" content="Deine Fahrschule - Sicher zum Führerschein" />
        <meta property="og:description" content="Starte deine Fahrausbildung bei [Fahrschulname]. Moderne Fahrzeuge, erfahrene Fahrlehrer und hohe Erfolgsquoten." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="[Ihre-Webseiten-URL]" />
        <meta property="og:image" content="[Ihre-Webseiten-URL]/og-image-home.jpg" />
        <link rel="canonical" href="[Ihre-Webseiten-URL]" />
      </Helmet>
      <HeroStartseite
        title="Wir machen dich Mobil"
        subtitle="Platzhalter Fahrschule"
        description="Erfahren Sie mehr über unsere moderne Fahrschulausbildung und unsere erfahrenen Fahrlehrer."
        buttonText="Jetzt anmelden"
        buttonLink="/anmelden"
        logoSrc="/default_images/logo_default.webp"
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
        beforeImage="/default_images/Platzhalter_Fahrschule.webp"
        afterImage="/default_images/Platzhalter_Furhpark.webp"
        beforeLabel=""
        afterLabel=""
      />

      <StandorteUebersicht
        title="Unsere Standorte"
        subtitle="Finden Sie den nächstgelegenen Standort"
        locations={locations}
      />

      <BannerAnmelden />

      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <SplitMediaText
          imageSrc="/default_images/Platzhalter_Fahrschule.webp"
          imageAlt="Fahrschule Ausbildung"
          title="Professionelle Fahrausbildung"
          description="Bei uns erhalten Sie eine erstklassige Fahrausbildung von zertifizierten Fahrlehrern. Wir legen Wert auf individuelle Betreuung und moderne Lehrmethoden, um Sie sicher auf die Straße zu bringen."
          imagePosition="left"
        />
      </div>

      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <SplitMediaTextInvert
          imageSrc="/default_images/Platzhalter_Furhpark.webp"
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
