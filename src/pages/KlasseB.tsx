import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Container, Section } from '../components/LayoutComponents';
import { KlassenDetailCard } from '../components/KlassenDetailCard';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { Car, Scale, Users, Truck, Link, CheckCircle, User, FileText, Calendar, BookOpen, Key, Settings, Cog } from 'lucide-react';

const KlasseBImage = '/default_images/Klasse_B_Default.webp';
const KlasseBEImage = '/default_images/Klasse_BE_Default.webp';
const KlasseBF17Image = '/default_images/Klasse_BF17_Default.webp';
const KlasseB96Image = '/default_images/Klasse_B96_Default.webp';
const KlasseB197Image = '/default_images/Klasse_B197_Default.webp';

const KlasseB: React.FC = () => {
  const { elementRef: headerRef, isVisible: headerVisible } = useScrollReveal();

  return (
    <div className="bg-page-bg">
      <Helmet>
        <title>Autoführerschein (Klasse B) - Deine Fahrschule</title>
        <meta name="description" content="Informationen zum Autoführerschein der Klasse B und den Erweiterungen BE, B96, B197 und BF17. Mache deinen PKW-Führerschein bei [Fahrschulname]." />
        <meta name="keywords" content="Autoführerschein, Klasse B, BE, B96, B197, BF17, PKW-Führerschein, Fahrschule, [Fahrschulname]" />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Autoführerschein (Klasse B) - Deine Fahrschule" />
        <meta property="og:description" content="Alle Informationen zum PKW-Führerschein der Klasse B und den zugehörigen Erweiterungen. Starte jetzt deine Ausbildung bei [Fahrschulname]." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="[Ihre-Webseiten-URL]/klasse-b" />
        <meta property="og:image" content="[Ihre-Webseiten-URL]/og-image-klasse-b.jpg" />
        <link rel="canonical" href="[Ihre-Webseiten-URL]/klasse-b" />
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
              Pkw-Führerscheine
            </h1>
            <p className="text-lg text-text-body text-center max-w-3xl mx-auto leading-relaxed mb-4">
              Entdecke die Freiheit auf vier Rädern! Bei uns erhältst du eine professionelle Ausbildung für alle Pkw-Klassen – vom Standard-Führerschein bis zu speziellen Varianten.
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
            imageSrc={KlasseBImage}
            imageAlt="Klasse B - Standard-Pkw-Führerschein"
            title="Klasse B"
            description="Der Standard-Pkw-Führerschein. Du darfst Pkw und leichte Transporter bis 3.500 kg zGG fahren – mit bis zu 8 Sitzplätzen zusätzlich zum Fahrer. Ideal für Alltag, Job und Urlaub."
            restrictions={[
              'Fahrzeug: Kfz bis 3.500 kg zGG',
              'Anhänger: bis 750 kg zGG; darüber, wenn Zuggesamtmasse ≤ 3.500 kg',
              'Sitzplätze: maximal 8 plus Fahrersitz',
              'Erste Fahrerlaubnis: Probezeit'
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
                description="Pkw bis 3.500 kg zGG"
              />
              <InfoCard
                icon={<Scale className="w-8 h-8 text-primary-500" />}
                title="Gesamtmasse"
                description="Zuggesamtmasse max. 3.500 kg (mit Anhänger >750 kg)"
              />
              <InfoCard
                icon={<Users className="w-8 h-8 text-primary-500" />}
                title="Sitzplätze"
                description="8 Mitfahrer + Fahrer"
              />
              <InfoCard
                icon={<Truck className="w-8 h-8 text-primary-500" />}
                title="Anhänger klein"
                description="Bis 750 kg ohne Zusatz"
              />
            </div>
          </div>
        </Container>
      </Section>

      <Section background="page-bg" padding="lg">
        <Container>
          <KlassenDetailCard
            imageSrc={KlasseBEImage}
            imageAlt="Klasse BE - Erweiterung für große Anhänger"
            title="Klasse BE"
            description="Erweiterung zu B für große Anhänger. Ideal für Wohnwagen, Pferde- oder schwere Kastenanhänger."
            restrictions={[
              'Zugfahrzeug: Klasse-B-Fahrzeug (bis 3.500 kg zGG)',
              'Anhänger: über 750 kg bis 3.500 kg zGG',
              'Kombination: praktisch bis rund 7.000 kg möglich',
              'Prüfung: praktische Prüfung, keine Theorie'
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
                title="Anhängelast"
                description="Anhänger bis 3.500 kg zGG"
              />
              <InfoCard
                icon={<Link className="w-8 h-8 text-primary-600" />}
                title="Deichsel/Kupplung"
                description="Gespanne für Wohnwagen & Trailer"
              />
              <InfoCard
                icon={<CheckCircle className="w-8 h-8 text-primary-600" />}
                title="Prüfung"
                description="Nur praktische Prüfung erforderlich"
              />
              <InfoCard
                icon={<Scale className="w-8 h-8 text-primary-600" />}
                title="Kombination"
                description="Zug bis ca. 7 t möglich"
              />
            </div>
          </div>
        </Container>
      </Section>

      <Section background="page-bg" padding="lg">
        <Container>
          <KlassenDetailCard
            imageSrc={KlasseBF17Image}
            imageAlt="Klasse BF17 - Begleitetes Fahren ab 17"
            title="Klasse BF17 (Begleitetes Fahren ab 17)"
            description="Wie Klasse B – nur ab 17. Du fährst mit eingetragenen Begleitpersonen und sammelst sichere Praxis bis zum 18. Geburtstag."
            restrictions={[
              'Mindestalter: 17 Jahre',
              'Fahrzeug: wie Klasse B',
              'Fahren nur mit eingetragener Begleitperson (Begleitschein mitführen)',
              'Null Promille für Fahranfänger; Auslandsregelungen beachten'
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
                title="Fahrzeug"
                description="Pkw bis 3.500 kg zGG"
              />
              <InfoCard
                icon={<User className="w-8 h-8 text-primary-500" />}
                title="Begleitung"
                description="Nur mit eingetragener Begleitperson"
              />
              <InfoCard
                icon={<FileText className="w-8 h-8 text-primary-500" />}
                title="Begleitschein"
                description="Bescheinigung muss mitgeführt werden"
              />
              <InfoCard
                icon={<Calendar className="w-8 h-8 text-primary-500" />}
                title="Alter"
                description="Start ab 17 Jahren"
              />
            </div>
          </div>
        </Container>
      </Section>

      <Section background="page-bg" padding="lg">
        <Container>
          <KlassenDetailCard
            imageSrc={KlasseB96Image}
            imageAlt="Klasse B96 - Zwischenstufe für mehr Anhängelast"
            title="Klasse B96"
            description="Die Zwischenstufe für mehr Anhängelast ohne Prüfung. Perfekt, wenn der Wohnwagen das B-Limit knapp überschreitet."
            restrictions={[
              'Kombination: Pkw + Anhänger über 750 kg',
              'Zuggesamtmasse: über 3.500 kg bis 4.250 kg',
              'Erwerb: Fahrschul-Schulung, keine Prüfung',
              'Eintrag: Schlüsselzahl 96 zu Klasse B'
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
                title="Gespann"
                description="Pkw mit schwerem Anhänger"
              />
              <InfoCard
                icon={<Scale className="w-8 h-8 text-primary-600" />}
                title="Gesamtgewicht"
                description="Kombination bis 4.250 kg"
              />
              <InfoCard
                icon={<BookOpen className="w-8 h-8 text-primary-600" />}
                title="Schulung"
                description="Erwerb durch Fahrschulung"
              />
              <InfoCard
                icon={<Key className="w-8 h-8 text-primary-600" />}
                title="Schlüsselzahl"
                description="Eintrag „96“ im Führerschein"
              />
            </div>
          </div>
        </Container>
      </Section>

      <Section background="page-bg" padding="lg">
        <Container>
          <KlassenDetailCard
            imageSrc={KlasseB197Image}
            imageAlt="Klasse B197 - Flexible B-Variante"
            title="Klasse B197"
            description="Flexible B-Variante: Prüfung auf Automatik, trotzdem Schalt- und Automatikfahrzeuge fahren – nach zusätzlicher Schalt-Schulung."
            restrictions={[
              'Praktische Prüfung auf Automatikfahrzeug',
              'Schaltkompetenz: Fahrschul-Schulung + kurze Testfahrt',
              'Fahrberechtigung: Schalt- und Automatik-Pkw der Klasse B',
              'Eintrag: Schlüsselzahl 197 (EU-weit nutzbar)'
            ]}
            imagePosition="left"
            variant="outline"
          />
        </Container>
      </Section>

      <Section background="page-bg" padding="sm">
        <Container>
          <div className="bg-card-bg rounded-xl p-8 border-2 border-primary-500">
            <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <InfoCard
                icon={<Settings className="w-8 h-8 text-primary-600" />}
                title="Automatik-Prüfung"
                description="Prüfung findet auf Automatik statt"
              />
              <InfoCard
                icon={<Cog className="w-8 h-8 text-primary-600" />}
                title="Schalten erlaubt"
                description="Nach Schulung auch Schaltwagen fahren"
              />
              <InfoCard
                icon={<CheckCircle className="w-8 h-8 text-primary-600" />}
                title="Nachweis"
                description="Bestätigung der Schaltkompetenz"
              />
              <InfoCard
                icon={<Key className="w-8 h-8 text-primary-600" />}
                title="Schlüsselzahl"
                description="Eintrag „197“ im Führerschein"
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
              Egal für welche Klasse du dich entscheidest – wir sind für dich da! Melde dich noch heute an und starte deine Pkw-Ausbildung bei uns.
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

export default KlasseB;