import React from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';

interface Team {
  imageSrc: string;
  imageAlt?: string;
  title: string;
  description: string;
}

interface TeamBilderProps {
  teams: Team[];
  variant?: 'default' | 'muted' | 'outline';
  className?: string;
}

export const TeamBilder: React.FC<TeamBilderProps> = ({
  teams,
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
      className={`flex flex-col md:flex-row gap-8 justify-center ${className}`}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
        transition: 'opacity 0.6s ease-out, transform 0.6s ease-out',
      }}
    >
      {teams.slice(0, 2).map((team, index) => (
        <div key={index} className={`md:w-1/2 rounded-xl overflow-hidden ${variantClasses[variant]} max-w-sm mx-auto md:mx-0`}>
          <div className="grid grid-rows-[2fr 1fr] gap-0">
            <div className="h-full overflow-hidden">
              <img
                src={team.imageSrc}
                alt={team.imageAlt || ''}
                className="w-full h-full object-cover aspect-[2/3]"
                loading="lazy"
              />
            </div>
            <div className="p-4 flex flex-col justify-center">
              <h3 className="text-lg font-bold text-neutral-900 mb-2">{team.title}</h3>
              <p className="text-neutral-600 text-sm leading-relaxed">{team.description}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};