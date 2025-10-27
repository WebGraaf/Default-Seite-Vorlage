import { Phone, Clock, MapPin } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';

export function Kontaktinformationen() {
  const { elementRef, isVisible } = useScrollReveal();

  const contactItems = [
    {
      icon: Phone,
      label: 'Telefon',
      value: '+49 123 456 7890',
      color: 'primary'
    },
    {
      icon: Clock,
      label: 'Öffnungszeiten',
      value: 'Mo-Fr 9-18 Uhr',
      color: 'primary'
    },
    {
      icon: MapPin,
      label: 'Adresse',
      value: 'Musterstraße 123, 12345 Berlin, Germany',
      color: 'primary'
    }
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
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {contactItems.map((item, index) => {
            const Icon = item.icon;
            const colorClasses = {
              primary: 'from-primary-500 to-primary-600'
            };

            return (
              <div
                key={index}
                className="bg-card-bg backdrop-blur-sm border border-card-border rounded-2xl p-6 hover:bg-hover-bg transition-all hover:scale-105"
              >
                <div className="flex items-center mb-4">
                  <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${colorClasses[item.color as keyof typeof colorClasses]} flex items-center justify-center mr-3`}>
                    <Icon className="w-5 h-5 text-white" />
                  </div>
                  <div className="text-lg font-semibold text-text-heading">
                    {item.label}
                  </div>
                </div>
                <div className="text-base text-text-body">
                  {item.value}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}