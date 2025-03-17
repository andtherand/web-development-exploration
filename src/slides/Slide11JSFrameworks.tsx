
import React from 'react';
import SlideLayout from '@/components/SlideLayout';
import SlideTitle from '@/components/SlideTitle';
import FrameworkShowcase from '@/components/FrameworkShowcase';
import { jsFrameworks } from '@/data/javascriptData';

const Slide11JSFrameworks = () => {
  return (
    <SlideLayout>
      <SlideTitle 
        tag="JavaScript Frameworks"
        subtitle="Moderne Frontend- und Backend-Frameworks"
      >
        JavaScript Frameworks
      </SlideTitle>
      
      <div className="text-center max-w-3xl mx-auto mb-10 animate-fade-in">
        <p className="text-lg">
          JavaScript-Frameworks bieten Struktur, Wiederverwendbarkeit und bewährte Methoden für die Entwicklung komplexer Webanwendungen.
        </p>
      </div>
      
      <FrameworkShowcase frameworks={jsFrameworks} type="JavaScript" />
    </SlideLayout>
  );
};

export default Slide11JSFrameworks;
