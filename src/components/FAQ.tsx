import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQProps {
  title?: string;
  faqs: FAQItem[];
  defaultOpenIndex?: number | null;
}

export function FAQ({ title = "Häufig gestellte Fragen", faqs, defaultOpenIndex = null }: FAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(defaultOpenIndex);
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
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-heading mb-4">
            {title}
          </h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-card-bg rounded-xl shadow-md border border-default overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-hover transition-colors"
              >
                <span className="font-semibold text-heading text-lg">
                  {faq.question}
                </span>
                <ChevronDown
                  className={`w-5 h-5 text-muted transition-transform ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? 'max-h-96' : 'max-h-0'
                }`}
              >
                <div className="px-6 pb-5 text-body leading-relaxed">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}