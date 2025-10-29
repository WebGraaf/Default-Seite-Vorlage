import React, { useEffect } from 'react';
import { Container, Section } from '../components/LayoutComponents';
import { KlassenDetailCard } from '../components/KlassenDetailCard';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { Truck, Scale, Package, FileText, Link } from 'lucide-react';
import KlasseCImage from '../default_images/Klasse_C_Default.webp';
import KlasseC1Image from '../default_images/Klasse_C1_Default.webp';
import KlasseC1EImage from '../default_images/Klasse_C1E_Default.webp';
import KlasseCEImage from '../default_images/Klasse_CE_Default.webp';

const KlasseC: React.FC = () => {
  useEffect(() => {
    document.title = 'Lkw-Führerscheine - Klasse C und Varianten';
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Professionelle Lkw-Ausbildung für alle C-Klassen. Von leichten Transportern bis zu schweren Lastzügen - finde die passende Führerscheinklasse für deinen Beruf.');
    } else {
      const meta = document.createElement('meta');
      meta.name = 'description';
      meta.content = 'Professionelle Lkw-Ausbildung für alle C-Klassen. Von leichten Transportern bis zu schweren Lastzügen - finde die passende Führerscheinklasse für deinen Beruf.';
      document.head.appendChild(meta);
    }
  }, []);

  const { elementRef: headerRef, isVisible: headerVisible } = useScrollReveal();

  return (
    <div className="bg-page-bg">
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
              Lkw-Führerscheine
            </h1>
            <p className="text-lg text-text-body text-center max-w-3xl mx-auto leading-relaxed mb-4">
              Entdecke die Welt des Gütertransports! Bei uns erhältst du eine professionelle Ausbildung für alle Lkw-Klassen – vom leichten Transporter bis zum schweren Lastzug.
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
            imageSrc={KlasseCImage}
            imageAlt="Klasse C - Schwere Lkw-Fahrerlaubnis"
            title="Klasse C"
            description="Schwere Lkw-Fahrerlaubnis für Güterverkehr. Du darfst Lastkraftwagen über 3.500 kg zGG fahren – ohne großen Anhänger."
            restrictions={[
              'Fahrzeug: Lkw über 3.500 kg zGG (keine obere Führerschein-Grenze)',
              'Anhänger: bis 750 kg zGG',
              'Personen: keine Personenbeförderung wie Bus (Klasse D nötig)',
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
                icon={<Truck className="w-8 h-8 text-primary-500" />}
                title="Fahrzeugklasse"
                description="Lkw > 3.500 kg zGG"
              />
              <InfoCard
                icon={<Truck className="w-8 h-8 text-primary-500" />}
                title="Anhänger"
                description="Bis 750 kg zGG"
              />
              <InfoCard
                icon={<Package className="w-8 h-8 text-primary-500" />}
                title="Einsatz"
                description="Gütertransport, kein Busbetrieb"
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
            imageSrc={KlasseC1Image}
            imageAlt="Klasse C1 - Leichte Lkw-Fahrerlaubnis"
            title="Klasse C1"
            description="Leichte Lkw-Fahrerlaubnis. Ideal für Transporter und kleine Lkw zwischen Pkw und schwerem Lkw."
            restrictions={[
              'Fahrzeug: über 3.500 kg bis 7.500 kg zGG',
              'Anhänger: bis 750 kg zGG',
              'Personen: keine Busbeförderung',
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
                icon={<Truck className="w-8 h-8 text-primary-600" />}
                title="Gewichtsbereich"
                description="3,5–7,5 t zGG"
              />
              <InfoCard
                icon={<Truck className="w-8 h-8 text-primary-600" />}
                title="Anhänger"
                description="Bis 750 kg zGG"
              />
              <InfoCard
                icon={<Scale className="w-8 h-8 text-primary-600" />}
                title="Limit"
                description="Obergrenze 7.500 kg"
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
            imageSrc={KlasseC1EImage}
            imageAlt="Klasse C1E - Kombinationen mit leichtem Lkw"
            title="Klasse C1E"
            description="Kombinationen mit leichtem Lkw (C1) und schwerem Anhänger. Perfekt für größere Transportaufgaben ohne volle CE."
            restrictions={[
              'Zugfahrzeug: Klasse C1 (3,5–7,5 t zGG)',
              'Anhänger: über 750 kg zGG',
              'Kombination: bis 12.000 kg zGG',
              'Vorbesitz/Erweiterung: C1 erforderlich'
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
                title="Gespann"
                description="C1-Zug + >750 kg Anhänger"
              />
              <InfoCard
                icon={<Scale className="w-8 h-8 text-primary-500" />}
                title="Gesamtgewicht"
                description="Kombination bis 12 t"
              />
              <InfoCard
                icon={<Link className="w-8 h-8 text-primary-500" />}
                title="Deichsel"
                description="Zentralachs-/Tandemanhänger erlaubt"
              />
              <InfoCard
                icon={<FileText className="w-8 h-8 text-primary-500" />}
                title="Vorbesitz"
                description="Klasse C1 nötig"
              />
            </div>
          </div>
        </Container>
      </Section>

      <Section background="page-bg" padding="lg">
        <Container>
          <KlassenDetailCard
            imageSrc={KlasseCEImage}
            imageAlt="Klasse CE - Schwerlast-Kombinationen"
            title="Klasse CE"
            description="Schwerlast-Kombinationen: Sattelzug oder Lkw mit großem Anhänger. Für professionelle Transporte mit maximaler Zuladung."
            restrictions={[
              'Zugfahrzeug: Klasse C (Lkw > 3.500 kg zGG)',
              'Anhänger/Sattelauflieger: über 750 kg zGG',
              'Kombination: keine führerscheinseitige Obergrenze (technische Grenzen beachten)',
              'Vorbesitz/Erweiterung: C erforderlich'
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
                icon={<Truck className="w-8 h-8 text-primary-600" />}
                title="Fahrzeugart"
                description="Sattelzug oder Gliederzug"
              />
              <InfoCard
                icon={<Truck className="w-8 h-8 text-primary-600" />}
                title="Anhänger"
                description=">750 kg, auch Auflieger"
              />
              <InfoCard
                icon={<Scale className="w-8 h-8 text-primary-600" />}
                title="Grenzen"
                description="Begrenzt durch Fahrzeugtechnik"
              />
              <InfoCard
                icon={<FileText className="w-8 h-8 text-primary-600" />}
                title="Vorbesitz"
                description="Klasse C nötig"
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
              Egal für welche Klasse du dich entscheidest – wir sind für dich da! Melde dich noch heute an und starte deine Lkw-Ausbildung bei uns.
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

export default KlasseC;