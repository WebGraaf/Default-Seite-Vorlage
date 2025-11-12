import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Container, Section } from '../components/LayoutComponents';
import { KlassenDetailCard } from '../components/KlassenDetailCard';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { Truck, Gauge, Leaf } from 'lucide-react';

const KlasseTImage = '/default_images/Klasse_T_Default.webp';

const KlasseT: React.FC = () => {
  const { elementRef: headerRef, isVisible: headerVisible } = useScrollReveal();

  return (
    <div className="bg-page-bg">
      <Helmet>
        <title>Großer Traktorführerschein (Klasse T) - Deine Fahrschule</title>
        <meta name="description" content="Der große Traktorführerschein der Klasse T für schnelle Zugmaschinen bis 60 km/h. Deine Ausbildung für die moderne Land- und Forstwirtschaft bei [Fahrschulname]." />
        <meta name="keywords" content="Traktorführerschein, Klasse T, Landwirtschaft, Forstwirtschaft, Zugmaschine, 60 km/h, Fahrschule, [Fahrschulname]" />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Großer Traktorführerschein (Klasse T) - Deine Fahrschule" />
        <meta property="og:description" content="Alle Informationen zum Führerschein der Klasse T. Mache deine Ausbildung für schnelle Traktoren bei [Fahrschulname]." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="[Ihre-Webseiten-URL]/klasse-t" />
        <meta property="og:image" content="[Ihre-Webseiten-URL]/og-image-klasse-t.jpg" />
        <link rel="canonical" href="[Ihre-Webseiten-URL]/klasse-t" />
      </Helmet>
      <Section background="card-bg" padding="xl" className="pb-0">
        <Container>
          <div
            ref={headerRef as React.RefObject<HTMLDivElement>}
            style={{
              opacity: headerVisible ? 1 : 0,
              transform: headerVisible ? 'translateY(0)' : 'translateY(30px)',
              transition: 'opacity 0.8s ease-out, transform 0.8s ease-out',
            }}
          >
            <h1 className="text-4xl md:text-5xl font-bold text-text-heading text-center mb-6">
              Land- und Forstwirtschaftliche Führerscheine
            </h1>
            <p className="text-lg text-text-body text-center max-w-3xl mx-auto leading-relaxed mb-4">
              Entdecke die Welt der Land- und Forstwirtschaft! Bei uns erhältst du eine professionelle Ausbildung für land- und forstwirtschaftliche Fahrzeuge – vom schnellen Traktor bis zur Erntemaschine.
            </p>
            <p className="text-lg text-text-body text-center max-w-3xl mx-auto leading-relaxed">
              Wir begleiten dich auf deinem Weg zum Führerschein mit erfahrenen Fahrlehrern, modernster Ausstattung und individueller Betreuung.
            </p>
          </div>
        </Container>
      </Section>

      <Section background="page-bg" padding="lg">
        <Container>
          <KlassenDetailCard
            imageSrc={KlasseTImage}
            imageAlt="Klasse T - Für schnelle Land- und Forstwirtschaft"
            title="Klasse T"
            description="Für schnelle Land- und Forstwirtschaft. Du darfst leistungsstarke Traktoren bis 60 km/h sowie bestimmte Erntemaschinen im Straßenverkehr führen – ideal für Hof, Feld und Straßeneinsatz."
            restrictions={[
              'Zugmaschinen: land-/forstwirtschaftliche Traktoren bis 60 km/h bbH',
              'Anhänger: erlaubt; Gespanne im lof-Einsatz',
              'Selbstfahrende Arbeits-/Erntemaschinen: bis 40 km/h bbH',
              'Einsatz: ausschließlich für land- oder forstwirtschaftliche Zwecke (lof)'
            ]}
            imagePosition="left"
            variant="default"
          />
        </Container>
      </Section>

      <Section background="page-bg" padding="sm">
        <Container>
          <div className="bg-card-bg rounded-xl p-8 border border-card-border">
            <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <InfoCard
                icon={<Truck className="w-8 h-8 text-primary-500" />}
                title="Fahrzeugtyp"
                description="Traktoren im lof-Einsatz"
              />
              <InfoCard
                icon={<Gauge className="w-8 h-8 text-primary-500" />}
                title="Höchstgeschwindigkeit"
                description="Traktoren bis 60 km/h bbH"
              />
              <InfoCard
                icon={<Truck className="w-8 h-8 text-primary-500" />}
                title="Gespann"
                description="Traktor mit Anhänger zulässig"
              />
              <InfoCard
                icon={<Leaf className="w-8 h-8 text-primary-500" />}
                title="Zweckbindung"
                description="Nur land-/forstwirtschaftliche Nutzung"
              />
            </div>
          </div>
        </Container>
      </Section>

      <Section background="card-bg" padding="lg">
        <Container>
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-text-heading mb-4">
              Bereit durchzustarten?
            </h2>
            <p className="text-lg text-text-body mb-8">
              Egal für welche Klasse du dich entscheidest – wir sind für dich da! Melde dich noch heute an und starte deine land- und forstwirtschaftliche Ausbildung bei uns.
            </p>
            <a
              href="/anmelden"
              className="inline-block bg-btn-solid-bg text-btn-solid-fg px-8 py-4 rounded-lg font-semibold hover:bg-btn-solid-hover transition-colors duration-300"
            >
              Jetzt anmelden
            </a>
          </div>
        </Container>
      </Section>
    </div>
  );
};

interface InfoCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const InfoCard: React.FC<InfoCardProps> = ({ icon, title, description }) => {
  const { elementRef, isVisible } = useScrollReveal();

  return (
    <div
      ref={elementRef as React.RefObject<HTMLDivElement>}
      className="flex flex-col items-center text-center p-4"
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
        transition: 'opacity 0.5s ease-out, transform 0.5s ease-out',
      }}
    >
      <div className="mb-3">{icon}</div>
      <h4 className="text-lg font-semibold text-text-heading mb-2">{title}</h4>
      <p className="text-text-body text-sm">{description}</p>
    </div>
  );
};

export default KlasseT;