import React from 'react';
import { Star } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';

interface Testimonial {
  name: string;
  role: string;
  initials: string;
  rating: number;
  text: string;
}

interface BewertungenProps {
  testimonials?: Testimonial[];
  title?: string;
}

const Bewertungen: React.FC<BewertungenProps> = ({
  testimonials = [
    {
      name: 'Alexandra Mueller',
      role: 'Product Manager',
      initials: 'AM',
      rating: 5,
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Excepteur sint occaecat cupidatat non proident.',
    },
    {
      name: 'Marcus Schmidt',
      role: 'Tech Lead',
      initials: 'MS',
      rating: 5,
      text: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.',
    },
    {
      name: 'Sarah Johnson',
      role: 'Designer',
      initials: 'SJ',
      rating: 4,
      text: 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum.',
    },
  ],
  title = 'Bewertungen'
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
          {testimonials.map((testimonial, index) => (
            <div key={index} className="border border-default rounded-xl p-8 hover:shadow-lg transition-all duration-300 bg-card-bg">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full bg-secondary-200 flex items-center justify-center text-secondary-600 font-semibold mr-4">
                  {testimonial.initials}
                </div>
                <div>
                  <h4 className="font-semibold text-heading">{testimonial.name}</h4>
                  <p className="text-sm text-body">{testimonial.role}</p>
                </div>
              </div>
              <div className="flex items-center mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-4 h-4 ${
                      i < testimonial.rating ? 'text-primary-500 fill-primary-500' : 'text-muted'
                    }`}
                  />
                ))}
              </div>
              <p className="text-body">{testimonial.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Bewertungen;