import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Container, Section } from '../components/LayoutComponents';
import { KlassenDetailCard } from '../components/KlassenDetailCard';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { Car, Users, Truck, FileText, Ruler, Scale, Ban, Link } from 'lucide-react';

const KlasseDImage = '/default_images/Klasse_D_Default.webp';
const KlasseD1Image = '/default_images/Klasse_D1_Default.webp';
const KlasseD1EImage = '/default_images/Klasse_D1E_Default.webp';
const KlasseDEImage = '/default_images/Klasse_DE_Default.webp';

const KlasseD: React.FC = () => {
  const { elementRef: headerRef, isVisible: headerVisible } = useScrollReveal();

  return (
    <div className="bg-page-bg">
      <Helmet>
        <title>Busführerschein (Klasse D) - Deine Fahrschule</title>
        <meta name="description" content="Werde Busfahrer mit der Ausbildung für die Klassen D, D1, DE und D1E bei [Fahrschulname]. Alle Informationen zur Personenbeförderung." />
        <meta name="keywords" content="Busführerschein, Klasse D, D1, DE, D1E, Personenbeförderung, Busfahrer, Fahrschule, [Fahrschulname]" />
        <meta property="og:title" content="Busführerschein (Klasse D) - Deine Fahrschule" />
        <meta property="og:description" content="Starte deine Karriere in der Personenbeförderung. Wir bilden dich professionell in allen Bus-Klassen aus." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="[Ihre-Webseiten-URL]/klasse-d" />
        <meta property="og:image" content="[Ihre-Webseiten-URL]/og-image-klasse-d.jpg" />
        <link rel="canonical" href="[Ihre-Webseiten-URL]/klasse-d" />
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
              Bus-Führerscheine
            </h1>
            <p className="text-lg text-text-body text-center max-w-3xl mx-auto leading-relaxed mb-4">
              Entdecke die Welt der Personenbeförderung! Bei uns erhältst du eine professionelle Ausbildung für alle Bus-Klassen – vom Minibus bis zum Reisebus.
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
            imageSrc={KlasseDImage}
            imageAlt="Klasse D - Bus-Fahrerlaubnis"
            title="Klasse D"
            description="Bus-Fahrerlaubnis für Linien- und Reisebusse. Du darfst Kraftomnibusse mit mehr als 8 Sitzplätzen zusätzlich zum Fahrer führen – ideal für Personenbeförderung im Linien- und Fernverkehr."
            restrictions={[
              'Fahrzeug: Bus mit mehr als 8 Fahrgast­sitzen (keine Längenbegrenzung)',
              'Anhänger: bis 750 kg zGG',
              'Keine Güterfahrzeuge (dafür C/CE)',
              'Vorbesitz: Klasse B erforderlich'
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
                icon={<Car className="w-8 h-8 text-primary-500" />}
                title="Fahrzeugklasse"
                description="Omnibus > 8 Sitzplätze"
              />
              <InfoCard
                icon={<Users className="w-8 h-8 text-primary-500" />}
                title="Fahrgastplätze"
                description="Mehr als 8 zusätzlich zum Fahrer"
              />
              <InfoCard
                icon={<Truck className="w-8 h-8 text-primary-500" />}
                title="Anhänger"
                description="Bis 750 kg zGG"
              />
              <InfoCard
                icon={<FileText className="w-8 h-8 text-primary-500" />}
                title="Vorbesitz"
                description="Klasse B nötig"
              />
            </div>
          </div>
        </Container>
      </Section>

      <Section background="page-bg" padding="lg">
        <Container>
          <KlassenDetailCard
            imageSrc={KlasseD1Image}
            imageAlt="Klasse D1 - Minibus-Variante"
            title="Klasse D1"
            description="Die Minibus-Variante. Du darfst kompakte Omnibusse mit bis zu 16 Fahrgast­sitzen und begrenzter Fahrzeuglänge fahren – ideal für Shuttle-, Werks- oder Schulbusse."
            restrictions={[
              'Fahrzeug: Bus mit mehr als 8 bis max. 16 Fahrgast­sitzen',
              'Länge: maximal 8 Meter',
              'Anhänger: bis 750 kg zGG',
              'Vorbesitz: Klasse B erforderlich'
            ]}
            imagePosition="right"
            variant="muted"
          />
        </Container>
      </Section>

      <Section background="page-bg" padding="sm">
        <Container>
          <div className="bg-card-tint rounded-xl p-8 border border-card-border">
            <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <InfoCard
                icon={<Car className="w-8 h-8 text-primary-600" />}
                title="Fahrzeuggröße"
                description="Bis 16 Sitzplätze"
              />
              <InfoCard
                icon={<Ruler className="w-8 h-8 text-primary-600" />}
                title="Länge"
                description="Maximal 8 Meter"
              />
              <InfoCard
                icon={<Truck className="w-8 h-8 text-primary-600" />}
                title="Anhänger"
                description="Bis 750 kg zGG"
              />
              <InfoCard
                icon={<FileText className="w-8 h-8 text-primary-600" />}
                title="Vorbesitz"
                description="Klasse B nötig"
              />
            </div>
          </div>
        </Container>
      </Section>

      <Section background="page-bg" padding="lg">
        <Container>
          <KlassenDetailCard
            imageSrc={KlasseD1EImage}
            imageAlt="Klasse D1E - Kombinationen mit Minibus"
            title="Klasse D1E"
            description="Kombinationen mit Minibus (D1) und großem Anhänger – z. B. für Gepäck- oder Technik­anhänger. Für mehr Zuladung bei kompakten Bussen."
            restrictions={[
              'Zugfahrzeug: Klasse D1 (≤ 8 m, bis 16 Sitzplätze)',
              'Anhänger: über 750 kg zGG',
              'Kombination: bis 12.000 kg zGG gesamt',
              'Personenbeförderung im Anhänger: nicht zulässig'
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
                icon={<Car className="w-8 h-8 text-primary-500" />}
                title="Gespann"
                description="D1-Bus mit >750-kg-Anhänger"
              />
              <InfoCard
                icon={<Scale className="w-8 h-8 text-primary-500" />}
                title="Gesamtgewicht"
                description="Kombination bis 12 t"
              />
              <InfoCard
                icon={<Ban className="w-8 h-8 text-primary-500" />}
                title="Anhänger"
                description="Keine Personen im Anhänger"
              />
              <InfoCard
                icon={<Link className="w-8 h-8 text-primary-500" />}
                title="Einsatz"
                description="Gepäck-/Technik­anhänger möglich"
              />
            </div>
          </div>
        </Container>
      </Section>

      <Section background="page-bg" padding="lg">
        <Container>
          <KlassenDetailCard
            imageSrc={KlasseDEImage}
            imageAlt="Klasse DE - Schwere Bus-Kombinationen"
            title="Klasse DE"
            description="Schwere Bus-Kombinationen: großer Reise- oder Linienbus mit Anhänger über 750 kg – maximale Flexibilität bei Gepäck und Ausrüstung."
            restrictions={[
              'Zugfahrzeug: Klasse D (Omnibus > 8 Sitzplätze)',
              'Anhänger: über 750 kg zGG',
              'Kombination: keine führerscheinseitige Obergrenze (technische & rechtliche Limits beachten)',
              'Personenbeförderung im Anhänger: nicht zulässig'
            ]}
            imagePosition="right"
            variant="outline"
          />
        </Container>
      </Section>

      <Section background="page-bg" padding="sm">
        <Container>
          <div className="bg-card-bg rounded-xl p-8 border-2 border-primary-500">
            <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <InfoCard
                icon={<Car className="w-8 h-8 text-primary-600" />}
                title="Fahrzeugart"
                description="Bus + Anhänger > 750 kg"
              />
              <InfoCard
                icon={<Scale className="w-8 h-8 text-primary-600" />}
                title="Grenzen"
                description="Durch Technik/Regeln begrenzt"
              />
              <InfoCard
                icon={<Ban className="w-8 h-8 text-primary-600" />}
                title="Anhänger"
                description="Keine Personenbeförderung"
              />
              <InfoCard
                icon={<FileText className="w-8 h-8 text-primary-600" />}
                title="Erweiterung"
                description="Aufbauend auf Klasse D"
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
              Egal für welche Klasse du dich entscheidest – wir sind für dich da! Melde dich noch heute an und starte deine Bus-Ausbildung bei uns.
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

export default KlasseD;