import React, { useEffect } from 'react';
import { Container, Section } from '../components/LayoutComponents';
import { KlassenDetailCard } from '../components/KlassenDetailCard';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { Truck, Cog, Leaf } from 'lucide-react';
import KlasseLImage from '../default_images/Klasse_L_Default.webp';

const KlasseL: React.FC = () => {
  useEffect(() => {
    document.title = 'Land- und Forstwirtschaftliche Führerscheine - Klasse L';
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Professionelle Ausbildung für land- und forstwirtschaftliche Fahrzeuge. Traktoren und Arbeitsmaschinen - spezialisiert auf landwirtschaftliche Anforderungen.');
    } else {
      const meta = document.createElement('meta');
      meta.name = 'description';
      meta.content = 'Professionelle Ausbildung für land- und forstwirtschaftliche Fahrzeuge. Traktoren und Arbeitsmaschinen - spezialisiert auf landwirtschaftliche Anforderungen.';
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
              Land- und Forstwirtschaftliche Führerscheine
            </h1>
            <p className="text-lg text-text-body text-center max-w-3xl mx-auto leading-relaxed mb-4">
              Entdecke die Welt der Land- und Forstwirtschaft! Bei uns erhältst du eine professionelle Ausbildung für land- und forstwirtschaftliche Fahrzeuge – vom Traktor bis zur Arbeitsmaschine.
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
            imageSrc={KlasseLImage}
            imageAlt="Klasse L - Basisklasse für Land- und Forstwirtschaft"
            title="Klasse L"
            description="Basisklasse für Land- und Forstwirtschaft. Du darfst langsame Traktoren sowie bestimmte Arbeitsmaschinen im Straßenverkehr bewegen – ideal für Hof, Feld und Kurzstrecken."
            restrictions={[
              'Fahrzeug: land- oder forstwirtschaftliche Zugmaschinen bis 40 km/h bbH',
              'Mit Anhänger: Kombination bis 25 km/h bbH',
              'Selbstfahrende Arbeitsmaschinen und Stapler: bis 25 km/h bbH',
              'Einsatz: nur land- oder forstwirtschaftliche Zwecke (lof)'
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
                description="Traktoren bis 40 km/h"
              />
              <InfoCard
                icon={<Truck className="w-8 h-8 text-primary-500" />}
                title="Anhänger"
                description="Mit Anhänger max. 25 km/h"
              />
              <InfoCard
                icon={<Cog className="w-8 h-8 text-primary-500" />}
                title="Arbeitsmaschinen"
                description="Stapler & Maschinen bis 25 km/h"
              />
              <InfoCard
                icon={<Leaf className="w-8 h-8 text-primary-500" />}
                title="Einsatzbereich"
                description="Nur für land-/forstwirtschaftliche Zwecke"
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

export default KlasseL;