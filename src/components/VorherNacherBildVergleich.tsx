import React from 'react';
import { BeforeAfterSlider } from './MediaComponents';

interface VorherNacherBildVergleichProps {
  title?: string;
  beforeImage: string;
  afterImage: string;
  beforeLabel?: string;
  afterLabel?: string;
  className?: string;
}

const VorherNacherBildVergleich: React.FC<VorherNacherBildVergleichProps> = ({
  title = "Vorher Nachher Vergleich",
  beforeImage,
  afterImage,
  beforeLabel = "Vorher",
  afterLabel = "Nachher",
  className = "",
}) => {
  return (
    <section className={`py-16 ${className}`}>
      <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-screen-xl">
        <h2 className="text-3xl font-bold text-neutral-900 mb-8 text-center">{title}</h2>
        <div className="max-w-4xl mx-auto">
          <BeforeAfterSlider
            beforeImage={beforeImage}
            afterImage={afterImage}
            beforeLabel={beforeLabel}
            afterLabel={afterLabel}
          />
        </div>
      </div>
    </section>
  );
};

export default VorherNacherBildVergleich;