import React from 'react';
import { Container, Section } from '../components/LayoutComponents';

const Anmelden: React.FC = () => {
  return (
    <div>
      <Section background="transparent" padding="xl">
        <Container>
          <h1 className="text-4xl font-bold text-center">Anmelden</h1>
        </Container>
      </Section>
    </div>
  );
};

export default Anmelden;