import React, { useEffect } from 'react';
import { Container, Section } from '../components/LayoutComponents';
import { KlassenDetailCard } from '../components/KlassenDetailCard';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { Bike, Gauge, Calendar, Users } from 'lucide-react';
import KlasseAMImage from '../default_images/Klasse_AM_Default.webp';
import KlasseA1Image from '../default_images/Klasse_A1_Default.webp';
import KlasseA2Image from '../default_images/Klasse_A2_Default.webp';
import KlasseAImage from '../default_images/Klasse_A_Default.webp';

const KlasseA: React.FC = () => {
  useEffect(() => {
    document.title = 'Motorrad-Führerscheine - Klasse A, A1, A2, AM';
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Professionelle Motorradausbildung für alle Klassen. Von Roller bis zum schweren Motorrad - finde die passende Führerscheinklasse für dich.');
    } else {
      const meta = document.createElement('meta');
      meta.name = 'description';
      meta.content = 'Professionelle Motorradausbildung für alle Klassen. Von Roller bis zum schweren Motorrad - finde die passende Führerscheinklasse für dich.';
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
              Motorrad-Führerscheine
            </h1>
            <p className="text-lg text-text-body text-center max-w-3xl mx-auto leading-relaxed mb-4">
              Entdecke die Freiheit auf zwei Rädern! Bei uns erhältst du eine professionelle Ausbildung für alle Motorradklassen – vom kleinen Roller bis zum kraftvollen Bike.
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
            imageSrc={KlasseAMImage}
            imageAlt="Klasse AM - Kleinkrafträder und Roller"
            title="Klasse AM"
            description="Der Einstieg in die Welt der Zweiräder! Mit der Klasse AM darfst du Kleinkrafträder und Roller bis 50 ccm und 45 km/h fahren. Perfekt für junge Fahrer ab 15 Jahren, die erste Erfahrungen sammeln möchten."
            restrictions={[
              'Mindestalter: 15 Jahre',
              'Maximale Geschwindigkeit: 45 km/h',
              'Hubraum: bis 50 ccm',
              'Fahrzeugtypen: Kleinkrafträder, Roller, Mopeds',
              'Keine Probezeit erforderlich'
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
                icon={<Calendar className="w-8 h-8 text-primary-500" />}
                title="Mindestalter"
                description="Ab 15 Jahren"
              />
              <InfoCard
                icon={<Gauge className="w-8 h-8 text-primary-500" />}
                title="Geschwindigkeit"
                description="Bis 45 km/h"
              />
              <InfoCard
                icon={<Bike className="w-8 h-8 text-primary-500" />}
                title="Hubraum"
                description="Bis 50 ccm"
              />
              <InfoCard
                icon={<Users className="w-8 h-8 text-primary-500" />}
                title="Fahrzeugtyp"
                description="Roller & Mopeds"
              />
            </div>
          </div>
        </Container>
      </Section>

      <Section background="page-bg" padding="lg">
        <Container>
          <KlassenDetailCard
            imageSrc={KlasseA1Image}
            imageAlt="Klasse A1 - Leichtkrafträder"
            title="Klasse A1"
            description="Mehr Leistung, mehr Möglichkeiten! Die Klasse A1 berechtigt zum Fahren von Leichtkrafträdern bis 125 ccm und 15 PS. Ab 16 Jahren kannst du mit dieser Klasse bereits richtige Motorräder erleben."
            restrictions={[
              'Mindestalter: 16 Jahre',
              'Maximale Leistung: 15 PS (11 kW)',
              'Hubraum: bis 125 ccm',
              'Leistungsgewicht: max. 0,1 kW/kg',
              'Fahrzeugtypen: Leichtkrafträder'
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
                icon={<Calendar className="w-8 h-8 text-primary-600" />}
                title="Mindestalter"
                description="Ab 16 Jahren"
              />
              <InfoCard
                icon={<Gauge className="w-8 h-8 text-primary-600" />}
                title="Leistung"
                description="Bis 15 PS (11 kW)"
              />
              <InfoCard
                icon={<Bike className="w-8 h-8 text-primary-600" />}
                title="Hubraum"
                description="Bis 125 ccm"
              />
              <InfoCard
                icon={<Users className="w-8 h-8 text-primary-600" />}
                title="Fahrzeugtyp"
                description="Leichtkrafträder"
              />
            </div>
          </div>
        </Container>
      </Section>

      <Section background="page-bg" padding="lg">
        <Container>
          <KlassenDetailCard
            imageSrc={KlasseA2Image}
            imageAlt="Klasse A2 - Mittelklasse Motorräder"
            title="Klasse A2"
            description="Der perfekte Mittelweg! Mit der Klasse A2 steuerst du Motorräder bis 48 PS. Diese Klasse bietet dir echtes Motorradfeeling und ist der ideale Schritt auf dem Weg zur vollen Motorradlizenz. Ab 18 Jahren möglich."
            restrictions={[
              'Mindestalter: 18 Jahre',
              'Maximale Leistung: 48 PS (35 kW)',
              'Leistungsgewicht: max. 0,2 kW/kg',
              'Hubraum: unbegrenzt',
              'Fahrzeugtypen: Mittelklasse-Motorräder'
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
                icon={<Calendar className="w-8 h-8 text-primary-500" />}
                title="Mindestalter"
                description="Ab 18 Jahren"
              />
              <InfoCard
                icon={<Gauge className="w-8 h-8 text-primary-500" />}
                title="Leistung"
                description="Bis 48 PS (35 kW)"
              />
              <InfoCard
                icon={<Bike className="w-8 h-8 text-primary-500" />}
                title="Hubraum"
                description="Unbegrenzt"
              />
              <InfoCard
                icon={<Users className="w-8 h-8 text-primary-500" />}
                title="Fahrzeugtyp"
                description="Mittelklasse Bikes"
              />
            </div>
          </div>
        </Container>
      </Section>

      <Section background="page-bg" padding="lg">
        <Container>
          <KlassenDetailCard
            imageSrc={KlasseAImage}
            imageAlt="Klasse A - Unbegrenzte Motorräder"
            title="Klasse A"
            description="Die Königsklasse! Mit der Klasse A darfst du alle Motorräder ohne Leistungsbeschränkung fahren. Volle Freiheit, maximale Power – für echte Motorradfans ab 24 Jahren oder nach 2 Jahren Vorbesitz der Klasse A2."
            restrictions={[
              'Mindestalter: 24 Jahre (Direkteinstieg) oder 20 Jahre (mit A2)',
              'Leistung: unbegrenzt',
              'Hubraum: unbegrenzt',
              'Fahrzeugtypen: Alle Motorräder',
              'Inkludiert: Klassen AM, A1 und A2'
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
                icon={<Calendar className="w-8 h-8 text-primary-600" />}
                title="Mindestalter"
                description="Ab 24 / 20 Jahren"
              />
              <InfoCard
                icon={<Gauge className="w-8 h-8 text-primary-600" />}
                title="Leistung"
                description="Unbegrenzt"
              />
              <InfoCard
                icon={<Bike className="w-8 h-8 text-primary-600" />}
                title="Hubraum"
                description="Unbegrenzt"
              />
              <InfoCard
                icon={<Users className="w-8 h-8 text-primary-600" />}
                title="Fahrzeugtyp"
                description="Alle Motorräder"
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
              Egal für welche Klasse du dich entscheidest – wir sind für dich da! Melde dich noch heute an und starte deine Motorrad-Ausbildung bei uns.
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

export default KlasseA;
