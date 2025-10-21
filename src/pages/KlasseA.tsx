import React from 'react';
import { Container, Section } from '../components/LayoutComponents';

const KlasseA: React.FC = () => {
  return (
    <div>
      <Section background="transparent" padding="xl">
        <Container>
          <h1 className="text-4xl font-bold text-center">Führerschein Klasse A</h1>
        </Container>
      </Section>
    </div>
  );
};

export default KlasseA;