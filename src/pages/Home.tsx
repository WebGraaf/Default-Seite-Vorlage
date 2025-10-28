import React from 'react';
import { Container, Section } from '../components/LayoutComponents';
import { HeroStartseite } from '../components/HeroStartseite';
import { KlassenDetailCard } from '../components/KlassenDetailCard';
import { StandorteUebersicht } from '../components/StandorteUebersicht';
import { FAQ } from '../components/FAQ';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { Clock } from 'lucide-react';
import LogoDefault from '../default_images/logo_default.webp';
import KlasseAMImage from '../default_images/Klasse_AM_Default.webp';
import KlasseA1Image from '../default_images/Klasse_A1_Default.webp';
import KlasseA2Image from '../default_images/Klasse_A2_Default.webp';
import KlasseAImage from '../default_images/Klasse_A_Default.webp';
import KlasseBImage from '../default_images/Klasse_B_Default.webp';
import KlasseCImage from '../default_images/Klasse_C_Default.webp';

const SplitMediaTextCopy: React.FC<{
  imageSrc: string;
  imageAlt?: string;
  title: string;
  description: string;
  imagePosition?: 'left' | 'right';
  variant?: 'default' | 'muted' | 'outline';
  className?: string;
}> = ({
  imageSrc,
  imageAlt = '',
  title,
  description,
  imagePosition = 'left',
  variant = 'default',
  className = '',
}) => {
  const { elementRef, isVisible } = useScrollReveal();

  const variantClasses = {
    default: 'bg-card-bg border border-card-border',
    muted: 'bg-card-tint border border-card-border',
    outline: 'bg-transparent border-2 border-primary-500',
  };

  return (
    <div
      ref={elementRef as React.RefObject<HTMLDivElement>}
      className={`rounded-xl overflow-hidden py-0 px-0 ${variantClasses[variant]} ${className}`}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
        transition: 'opacity 0.6s ease-out, transform 0.6s ease-out',
      }}
    >
      <div
        className={`flex flex-col md:flex-row gap-8 ${
          imagePosition === 'right' ? 'md:flex-row-reverse' : ''
        }`}
      >
        <div className="md:w-1/2">
          <img
            src={imageSrc}
            alt={imageAlt}
            className="w-full h-full object-cover"
            loading="lazy"
          />
        </div>
        <div className="md:w-1/2 flex flex-col justify-center p-8 text-left">
          <h3 className="text-3xl font-bold text-text-heading mb-4">{title}</h3>
          <p className="text-text-body leading-relaxed">{description}</p>
        </div>
      </div>
    </div>
  );
};

const BannerAnmeldenCopy: React.FC = () => {
  const { elementRef, isVisible } = useScrollReveal();

  return (
    <section
      ref={elementRef as React.RefObject<HTMLElement>}
      className="py-12"
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
        transition: 'opacity 0.6s ease-out, transform 0.6s ease-out',
      }}
    >
      <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-screen-xl">
        <div className="bg-card-bg rounded-2xl p-8 md:p-12 text-card-fg border border-card-border shadow-lg">
          <div className="flex flex-col lg:flex-row items-center gap-8">
            <div className="flex-1 lg:w-7/10 text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-text-heading mb-4">
                Bereit für deinen Führerschein?
              </h2>
              <p className="text-lg text-text-body mb-8">
                Starte jetzt deine Fahrschulausbildung bei uns. Professionelle Ausbildung, flexible Termine und erfahrene Fahrlehrer. Wir warten auf dich!
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <a
                  href="/anmelden"
                  className="px-8 py-4 bg-btn-solid-bg text-btn-solid-fg rounded-lg font-semibold hover:bg-btn-solid-hover transition-colors duration-200 shadow-lg hover:shadow-xl transform hover:scale-105"
                >
                  Jetzt Anmelden
                </a>
              </div>
            </div>
            <div className="flex-shrink-0 lg:w-3/10 flex justify-center">
              <img
                src={LogoDefault}
                alt="Logo"
                className="max-w-full h-auto max-h-32"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Oeffnungszeiten: React.FC = () => {
  const { elementRef, isVisible } = useScrollReveal();

  const zeiten = [
    { tag: 'Montag', zeiten: '09:00 - 18:00 Uhr' },
    { tag: 'Dienstag', zeiten: '09:00 - 18:00 Uhr' },
    { tag: 'Mittwoch', zeiten: '09:00 - 18:00 Uhr' },
    { tag: 'Donnerstag', zeiten: '09:00 - 20:00 Uhr' },
    { tag: 'Freitag', zeiten: '09:00 - 16:00 Uhr' },
    { tag: 'Samstag', zeiten: '10:00 - 14:00 Uhr' },
    { tag: 'Sonntag', zeiten: 'Geschlossen' },
  ];

  return (
    <section
      ref={elementRef as React.RefObject<HTMLElement>}
      className="py-12"
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
        transition: 'opacity 0.6s ease-out, transform 0.6s ease-out',
      }}
    >
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Clock className="w-8 h-8 text-primary-500" />
            <h2 className="text-3xl md:text-4xl font-bold text-text-heading">
              Unsere Öffnungszeiten
            </h2>
          </div>
          <p className="text-text-body text-lg">
            Besuche uns zu unseren Bürozeiten oder vereinbare einen individuellen Termin.
          </p>
        </div>

        <div className="bg-card-bg rounded-xl border border-card-border shadow-lg overflow-hidden">
          <table className="w-full">
            <thead className="bg-table-header-bg">
              <tr>
                <th className="px-6 py-4 text-left text-sm font-semibold text-text-heading">
                  Wochentag
                </th>
                <th className="px-6 py-4 text-right text-sm font-semibold text-text-heading">
                  Öffnungszeiten
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-table-border">
              {zeiten.map((item, index) => (
                <tr
                  key={index}
                  className="hover:bg-table-row-hover transition-colors"
                >
                  <td className="px-6 py-4 text-text-body font-medium">
                    {item.tag}
                  </td>
                  <td className="px-6 py-4 text-right text-text-body">
                    {item.zeiten}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

const Home: React.FC = () => {
  const faqData = [
    {
      question: 'Wie lange dauert die Führerscheinausbildung?',
      answer: 'Die Dauer hängt von deinem individuellen Lerntempo ab. Im Durchschnitt benötigen Fahrschüler 3-6 Monate für die Klasse B. Wir bieten flexible Termine, damit du die Ausbildung in deinem Tempo absolvieren kannst.',
    },
    {
      question: 'Was kostet der Führerschein?',
      answer: 'Die Kosten variieren je nach Führerscheinklasse und Anzahl der benötigten Fahrstunden. Kontaktiere uns für ein individuelles Angebot. Wir bieten transparente Preise ohne versteckte Kosten.',
    },
    {
      question: 'Kann ich auch Intensivkurse buchen?',
      answer: 'Ja, wir bieten Intensivkurse an, bei denen du die Ausbildung in kürzerer Zeit absolvieren kannst. Besonders beliebt in den Ferien oder für schnelle Lernerfolge.',
    },
    {
      question: 'Welche Unterlagen brauche ich für die Anmeldung?',
      answer: 'Für die Anmeldung benötigst du einen gültigen Personalausweis oder Reisepass, einen Sehtest, einen Erste-Hilfe-Kurs-Nachweis und ein biometrisches Passfoto. Wir helfen dir gerne bei der Zusammenstellung aller Unterlagen.',
    },
    {
      question: 'Bietet ihr auch Automatik-Ausbildung an?',
      answer: 'Ja, wir bilden sowohl auf Schaltgetriebe als auch auf Automatikgetriebe aus. Bei der Automatik-Ausbildung ist der Führerschein jedoch auf Automatikfahrzeuge beschränkt.',
    },
  ];

  return (
    <div className="bg-page-bg">
      <HeroStartseite
        title="Deine Fahrschule für"
        subtitle="sicheres Fahren"
        description="Wir bringen dich sicher ans Ziel! Mit über 20 Jahren Erfahrung, modernen Fahrzeugen und individueller Betreuung begleiten wir dich auf dem Weg zu deinem Führerschein."
        buttonText="Jetzt durchstarten"
        buttonLink="/anmelden"
        logoSrc={LogoDefault}
        logoAlt="Fahrschule Logo"
        background="white"
        padding="xl"
      />

      <Section background="page-bg" padding="lg">
        <Container>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-text-heading mb-4">
              Unsere Führerscheinklassen
            </h2>
            <p className="text-lg text-text-body max-w-3xl mx-auto">
              Von Roller bis LKW - wir bilden dich in allen wichtigen Führerscheinklassen aus. Finde die passende Klasse für dich!
            </p>
          </div>
        </Container>
      </Section>

      <Section background="page-bg" padding="md">
        <Container>
          <div className="space-y-8">
            <KlassenDetailCard
              imageSrc={KlasseBImage}
              imageAlt="Klasse B - PKW"
              title="Klasse B"
              description="Der klassische PKW-Führerschein. Mit der Klasse B darfst du PKW bis 3,5 Tonnen fahren und bist mobil für Beruf und Freizeit. Die beliebteste Führerscheinklasse für junge Erwachsene!"
              restrictions={[
                'Mindestalter: 18 Jahre (17 mit BF17)',
                'Zulässige Gesamtmasse: bis 3,5 Tonnen',
                'Personenbeförderung: bis 8 Personen (außer Fahrer)',
                'Anhänger: bis 750 kg oder mehr bei max. 3,5t Gesamtgewicht',
              ]}
              imagePosition="left"
              variant="default"
            />

            <KlassenDetailCard
              imageSrc={KlasseAImage}
              imageAlt="Klasse A - Motorräder"
              title="Klasse A"
              description="Die Königsklasse für Motorrad-Fans! Fahre alle Motorräder ohne Einschränkung und erlebe die volle Freiheit auf zwei Rädern. Für alle, die das besondere Fahrgefühl lieben."
              restrictions={[
                'Mindestalter: 24 Jahre (Direkteinstieg) oder 20 Jahre (mit A2)',
                'Leistung: unbegrenzt',
                'Hubraum: unbegrenzt',
                'Inkludiert: Klassen AM, A1 und A2',
              ]}
              imagePosition="right"
              variant="muted"
            />

            <KlassenDetailCard
              imageSrc={KlasseCImage}
              imageAlt="Klasse C - LKW"
              title="Klasse C"
              description="Der LKW-Führerschein für berufliche Perspektiven. Mit der Klasse C steuerst du LKW über 3,5 Tonnen und eröffnest dir neue Karrieremöglichkeiten im Transportgewerbe."
              restrictions={[
                'Mindestalter: 21 Jahre (18 mit Berufskraftfahrer-Ausbildung)',
                'Zulässige Gesamtmasse: über 3,5 Tonnen',
                'Vorbesitz: Klasse B erforderlich',
                'Befristung: Gültigkeit auf 5 Jahre begrenzt',
              ]}
              imagePosition="left"
              variant="default"
            />
          </div>
        </Container>
      </Section>

      <Section background="page-bg" padding="lg">
        <Container>
          <SplitMediaTextCopy
            imageSrc="https://via.placeholder.com/600x400/FF7A00/FFFFFF?text=Moderne+Fahrzeuge"
            imageAlt="Moderne Fahrschulfahrzeuge"
            title="Moderne Fahrzeugflotte"
            description="Lerne in neuesten Fahrzeugen mit modernster Sicherheitsausstattung. Unsere Flotte wird regelmäßig erneuert und gewartet, damit du unter optimalen Bedingungen fahren lernst. Komfort und Sicherheit stehen bei uns an erster Stelle."
            imagePosition="left"
            variant="muted"
          />
        </Container>
      </Section>

      <Section background="page-bg" padding="lg">
        <Container>
          <SplitMediaTextCopy
            imageSrc="https://via.placeholder.com/600x400/334155/FFFFFF?text=Erfahrene+Fahrlehrer"
            imageAlt="Erfahrene Fahrlehrer"
            title="Erfahrene und geduldige Fahrlehrer"
            description="Unser Team besteht aus hochqualifizierten Fahrlehrern mit jahrelanger Erfahrung. Wir nehmen uns Zeit für dich, gehen auf deine individuellen Bedürfnisse ein und begleiten dich geduldig auf deinem Weg zum Führerschein. Bei uns fühlst du dich sicher und wohl."
            imagePosition="right"
            variant="default"
          />
        </Container>
      </Section>

      <Section background="page-bg" padding="lg">
        <Container>
          <StandorteUebersicht
            locations={[
              {
                label: 'Hauptstandort Berlin-Mitte',
                address: 'Hauptstraße 123, 10115 Berlin',
                phone: '+49 (0) 30 12345678',
                hours: 'Mo-Fr 9-18 Uhr, Sa 10-14 Uhr'
              },
              {
                label: 'Standort Berlin-Kreuzberg',
                address: 'Kreuzstraße 45, 10965 Berlin',
                phone: '+49 (0) 30 98765432',
                hours: 'Mo-Fr 9-18 Uhr'
              }
            ]}
          />
        </Container>
      </Section>

      <Section background="page-bg" padding="lg">
        <Container>
          <Oeffnungszeiten />
        </Container>
      </Section>

      <Section background="page-bg" padding="lg">
        <Container>
          <FAQ faqs={faqData} />
        </Container>
      </Section>

      <Section background="page-bg" padding="lg">
        <Container>
          <BannerAnmeldenCopy />
        </Container>
      </Section>
    </div>
  );
};

export default Home;
