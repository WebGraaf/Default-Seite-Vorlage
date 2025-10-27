import React from 'react';
import { Link } from 'react-router-dom';
import { Bike, Car, Truck, Bus, Tractor } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';

interface Feature {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
  link: string;
}

interface KlassenUebersichtGridProps {
  title?: string;
  features?: Feature[];
}

export const KlassenUebersichtGrid: React.FC<KlassenUebersichtGridProps> = ({
  title = "Unsere Führerscheinklassen",
  features = [
    {
      icon: Bike,
      title: 'Klasse A',
      description: 'Führerschein für Krafträder und Leichtkrafträder. Ideal für Motorradfahrer.',
      link: '/fuehrerscheine/klasse-a',
    },
    {
      icon: Car,
      title: 'Klasse B',
      description: 'Führerschein für PKW bis 3,5 Tonnen. Der beliebteste Führerschein.',
      link: '/fuehrerscheine/klasse-b',
    },
    {
      icon: Truck,
      title: 'Klasse C',
      description: 'Führerschein für LKW über 3,5 Tonnen. Für Berufskraftfahrer.',
      link: '/fuehrerscheine/klasse-c',
    },
    {
      icon: Bus,
      title: 'Klasse D',
      description: 'Führerschein für Omnibusse. Für Busfahrer und Reiseunternehmen.',
      link: '/fuehrerscheine/klasse-d',
    },
    {
      icon: Tractor,
      title: 'Klasse L',
      description: 'Führerschein für land- und forstwirtschaftliche Zugmaschinen und Arbeitsmaschinen.',
      link: '/fuehrerscheine/klasse-l',
    },
    {
      icon: Tractor,
      title: 'Klasse T',
      description: 'Führerschein für Zugmaschinen und Arbeitsmaschinen für land- und forstwirtschaftliche Zwecke.',
      link: '/fuehrerscheine/klasse-t',
    },
  ],
}) => {
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
        <h2 className="text-3xl font-bold text-heading mb-8 text-center">{title}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="border border-primary-200 rounded-xl p-8 hover:shadow-lg hover:border-primary-500 transition-all duration-300 group bg-card-bg">
              <div className="bg-primary-100 w-14 h-14 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 border border-primary-200">
                <feature.icon className="w-7 h-7 text-primary-600" />
              </div>
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-xl font-bold text-heading group-hover:text-primary-600 transition-colors">{feature.title}</h3>
              </div>
              <p className="text-text-body mb-4">{feature.description}</p>
              <Link
                to={feature.link}
                className="inline-block px-4 py-2 bg-white text-primary-600 rounded-lg hover:bg-primary-500 hover:text-white hover:border-transparent border border-primary-500 transition-colors font-semibold"
              >
                Mehr erfahren
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};