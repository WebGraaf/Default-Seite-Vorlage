import { useState } from 'react';
import { MapPin, Phone, Clock } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';

export interface Location {
  label: string;
  address: string;
  phone: string;
  hours: string;
}

export interface StandorteUebersichtProps {
  title?: string;
  subtitle?: string;
  locations: Location[];
}

export function StandorteUebersicht({
  title = "Unsere Standorte",
  subtitle = "Finden Sie den nächstgelegenen Standort",
  locations
}: StandorteUebersichtProps) {
  const [activeTab, setActiveTab] = useState(0);
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
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-text-heading mb-4">
            {title}
          </h2>
          <p className="text-lg text-text-body">
            {subtitle}
          </p>
        </div>

        <div className="flex flex-wrap gap-2 justify-center mb-8 border-b border-border-default">
          {locations.map((location, index) => {
            return (
              <button
                key={index}
                onClick={() => setActiveTab(index)}
                className={`flex items-center gap-2 px-6 py-3 font-semibold transition-all relative ${
                  activeTab === index
                    ? 'text-primary-600'
                    : 'text-text-body hover:text-text-heading'
                }`}
              >
                {location.label}
                {activeTab === index && (
                  <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary-600"></div>
                )}
              </button>
            );
          })}
        </div>

        <div className="grid md:grid-cols-3 gap-4 mb-8">
          <div className="bg-card-bg backdrop-blur-sm rounded-lg p-4 border border-card-border">
            <h4 className="font-semibold text-text-heading mb-2 text-lg flex items-center gap-2">
              <MapPin className="w-5 h-5 text-primary-600" />
              Adresse
            </h4>
            <a href={`https://maps.google.com/?q=${encodeURIComponent(locations[activeTab].address)}`} target="_blank" rel="noopener noreferrer" className="text-text-body text-base hover:text-text-link transition-colors">
              {locations[activeTab].address}
            </a>
          </div>
          <div className="bg-card-bg backdrop-blur-sm rounded-lg p-4 border border-card-border">
            <h4 className="font-semibold text-text-heading mb-2 text-lg flex items-center gap-2">
              <Phone className="w-5 h-5 text-primary-600" />
              Telefon
            </h4>
            <p className="text-text-body text-lg font-medium">{locations[activeTab].phone}</p>
          </div>
          <div className="bg-card-bg backdrop-blur-sm rounded-lg p-4 border border-card-border">
            <h4 className="font-semibold text-text-heading mb-2 text-lg flex items-center gap-2">
              <Clock className="w-5 h-5 text-primary-600" />
              Öffnungszeiten
            </h4>
            <p className="text-text-body text-base whitespace-pre-line">{locations[activeTab].hours}</p>
          </div>
        </div>

        {/* Google Maps Integration */}
        <div className="bg-card-bg rounded-2xl shadow-xl overflow-hidden border border-card-border">
          <iframe
            src={`https://maps.google.com/maps?q=${encodeURIComponent(locations[activeTab].address)}&output=embed`}
            width="100%"
            height="400"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title={`Karte für ${locations[activeTab].label}`}
          ></iframe>
        </div>
      </div>
    </section>
  );
}