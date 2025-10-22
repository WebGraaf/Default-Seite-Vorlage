import React from 'react';
import { HeroStartseite } from '../components/HeroStartseite';

const ComponentsTest: React.FC = () => {
  return (
    <div>
      <h1>Components Test</h1>
      <HeroStartseite
        title="Willkommen bei unserer Fahrschule"
        subtitle="Ihr Weg zum Führerschein"
        description="Erfahren Sie mehr über unsere Kurse und starten Sie Ihre Fahrausbildung mit uns."
        buttonText="Jetzt anmelden"
        buttonLink="/anmelden"
        logoSrc="/src/default_images/logo_default.webp"
        logoAlt="Fahrschule Logo"
      />
    </div>
  );
};

export default ComponentsTest;