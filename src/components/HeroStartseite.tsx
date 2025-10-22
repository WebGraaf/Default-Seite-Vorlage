import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Section } from './LayoutComponents';

interface HeroStartseiteProps {
  title: string;
  subtitle?: string;
  description: string;
  buttonText: string;
  buttonLink: string;
  logoSrc: string;
  logoAlt: string;
  background?: 'transparent' | 'white' | 'neutral' | 'gradient';
  padding?: 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
}

export const HeroStartseite: React.FC<HeroStartseiteProps> = ({
  title,
  subtitle,
  description,
  buttonText,
  buttonLink,
  logoSrc,
  logoAlt,
  background = 'transparent',
  padding = 'xl',
  className = '',
}) => {
  return (
    <Section background={background} padding={padding} className={className}>
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-7 gap-8 items-center">
          <div className="col-span-1 md:col-span-5 text-left order-2 md:order-1">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-heading mb-6 animate-in fade-in slide-in-from-bottom-4 duration-700">
              {title}
              {subtitle && (
                <span className="block text-primary-600 mt-4">{subtitle}</span>
              )}
            </h1>
            <p className="text-lg md:text-xl text-body mb-8 animate-in fade-in slide-in-from-bottom-6 duration-900">
              {description}
            </p>
            <div className="animate-in fade-in slide-in-from-bottom-8 duration-1000">
              <Link
                to={buttonLink}
                className="px-6 md:px-8 py-3 md:py-4 bg-primary-500 text-white border border-primary-500 rounded-lg font-semibold hover:bg-transparent hover:text-primary-500 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105 inline-block text-sm md:text-base"
              >
                {buttonText}
              </Link>
            </div>
          </div>
          <div className="col-span-1 md:col-span-2 flex items-center justify-center order-1 md:order-2">
            <img
              src={logoSrc}
              alt={logoAlt}
              className="w-full h-auto max-w-xs md:max-w-sm animate-in fade-in slide-in-from-right-4 duration-700"
            />
          </div>
        </div>
      </Container>
    </Section>
  );
};