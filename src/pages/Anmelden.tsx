import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Container, Section } from '../components/LayoutComponents';
import { AnmeldeFormular } from '../components/AnmeldeFormular';
import { useScrollReveal } from '../hooks/useScrollReveal';

const Anmelden: React.FC = () => {
  const { elementRef: headerRef, isVisible: headerVisible } = useScrollReveal();

  return (
    <div className="bg-page-bg">
      <Helmet>
        <title>Anmeldung - Deine Fahrschule</title>
        <meta name="description" content="Melde dich jetzt online für deinen Führerschein an. Fülle das Formular aus und starte deine Ausbildung bei [Fahrschulname]. Wir bieten flexible Termine und eine professionelle Ausbildung." />
        <meta name="keywords" content="Fahrschule, Anmeldung, Führerschein, Online-Anmeldung, Fahrausbildung, [Fahrschulname]" />
        <meta property="og:title" content="Anmeldung - Deine Fahrschule" />
        <meta property="og:description" content="Melde dich jetzt online für deinen Führerschein an und starte deine Ausbildung bei [Fahrschulname]." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="[Ihre-Webseiten-URL]/anmelden" />
        <meta property="og:image" content="[Ihre-Webseiten-URL]/og-image-anmeldung.jpg" />
        <link rel="canonical" href="[Ihre-Webseiten-URL]/anmelden" />
      </Helmet>
      <Section background="card-bg" padding="sm">
        <Container>
          <div
            ref={headerRef as React.RefObject<HTMLDivElement>}
            className="text-center max-w-3xl mx-auto"
            style={{
              opacity: headerVisible ? 1 : 0,
              transform: headerVisible ? 'translateY(0)' : 'translateY(30px)',
              transition: 'opacity 0.8s ease-out, transform 0.8s ease-out',
            }}
          >
            <h1 className="text-4xl md:text-5xl font-bold text-text-heading mb-6">
              Deine Anmeldung
            </h1>
            <p className="text-lg text-text-body leading-relaxed mb-4">
              Herzlich willkommen! Wir freuen uns, dass du dich für eine Ausbildung bei uns entschieden hast.
            </p>
            <p className="text-lg text-text-body leading-relaxed">
              Fülle einfach das folgende Formular aus und wir melden uns zeitnah bei dir, um alles Weitere zu besprechen. Dein Weg zum Führerschein beginnt hier!
            </p>
          </div>
        </Container>
      </Section>

      <AnmeldeFormular />
    </div>
  );
};

export default Anmelden;
