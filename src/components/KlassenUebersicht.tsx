import { useState } from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';

interface Subclass {
  code: string;
  description: string;
}

interface Tab {
  label: string;
  title: string;
  content: string;
  link: string;
  subclasses: Subclass[];
}

interface KlassenUebersichtProps {
  title?: string;
  subtitle?: string;
  tabs?: Tab[];
  buttonText?: string;
}

export function KlassenUebersicht({
  title = "Führerschein Klassen",
  subtitle = "Erfahren Sie mehr über die verschiedenen Führerschein-Klassen",
  buttonText = "Mehr erfahren",
  tabs = []
}: KlassenUebersichtProps) {
  const [activeTab, setActiveTab] = useState(0);
  const { elementRef, isVisible } = useScrollReveal();

  if (tabs.length === 0) {
    return null;
  }

  return (
    <section
      ref={elementRef as React.RefObject<HTMLElement>}
      className="py-24 px-6"
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
        transition: 'opacity 0.6s ease-out, transform 0.6s ease-out',
      }}
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-text-heading mb-4">
            {title}
          </h2>
          <p className="text-lg text-text-body">
            {subtitle}
          </p>
        </div>

        <div className="flex flex-wrap gap-2 justify-center mb-8 border-b border-border-default">
          {tabs.map((tab, index) => {
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
                {tab.label}
                {activeTab === index && (
                  <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary-600"></div>
                )}
              </button>
            );
          })}
        </div>

        <div className="bg-card-bg rounded-2xl p-12 min-h-[300px] shadow-lg">
          <h3 className="text-3xl font-bold text-text-heading mb-4">
            {tabs[activeTab].title}
          </h3>
          <p className="text-lg text-text-body leading-relaxed mb-6">
            {tabs[activeTab].content}
          </p>
          <div className="space-y-3">
            {tabs[activeTab].subclasses.map((subclass, index) => (
              <div key={index} className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-primary-600 flex-shrink-0" />
                <span className="font-bold text-text-heading">{subclass.code}</span>
                <span className="text-text-body">- {subclass.description}</span>
              </div>
            ))}
          </div>
          <div className="mt-6">
            <Link
              to={tabs[activeTab].link}
              className="inline-block px-6 py-3 bg-white text-primary-600 border-2 border-primary-600 rounded-lg hover:bg-primary-600 hover:text-white transition-colors font-semibold"
            >
              {buttonText}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}