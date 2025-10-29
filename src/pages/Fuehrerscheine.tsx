import React, { useEffect } from 'react';
import { Container, Section } from '../components/LayoutComponents';

const Fuehrerscheine: React.FC = () => {
  useEffect(() => {
    document.title = 'Führerscheine Übersicht - Alle Führerscheinklassen';
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Übersicht aller verfügbaren Führerscheinklassen bei unserer Fahrschule. Von Klasse B bis Klasse A - finde die passende Ausbildung für dich.');
    } else {
      const meta = document.createElement('meta');
      meta.name = 'description';
      meta.content = 'Übersicht aller verfügbaren Führerscheinklassen bei unserer Fahrschule. Von Klasse B bis Klasse A - finde die passende Ausbildung für dich.';
      document.head.appendChild(meta);
    }
  }, []);

  return (
    <div>
      <Section background="transparent" padding="xl">
        <Container>
          <h1 className="text-4xl font-bold text-center">Führerscheine Übersicht</h1>
        </Container>
      </Section>
    </div>
  );
};

export default Fuehrerscheine;