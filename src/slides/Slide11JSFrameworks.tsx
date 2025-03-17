
import React from 'react';
import SlideLayout from '@/components/SlideLayout';
import SlideTitle from '@/components/SlideTitle';
import FrameworkShowcase from '@/components/FrameworkShowcase';
import { jsFrameworks } from './SlideData';

const Slide11JSFrameworks = () => {
  return (
    <SlideLayout>
      <SlideTitle 
        tag="JavaScript Frameworks"
        subtitle="Moderne Tools für komplexe Webanwendungen"
      >
        JavaScript Frameworks
      </SlideTitle>
      
      <div className="text-center max-w-3xl mx-auto mb-10 animate-fade-in">
        <p className="text-lg">
          JavaScript-Frameworks bieten strukturierte Ansätze zur Entwicklung komplexer Webanwendungen mit Komponenten, Routing und Zustandsmanagement.
        </p>
      </div>
      
      <FrameworkShowcase frameworks={jsFrameworks} type="JavaScript" />
    </SlideLayout>
  );
};

export default Slide11JSFrameworks;
