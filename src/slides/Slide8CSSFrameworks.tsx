
import React from 'react';
import SlideLayout from '@/components/SlideLayout';
import SlideTitle from '@/components/SlideTitle';
import FrameworkShowcase from '@/components/FrameworkShowcase';
import { cssFrameworks } from './SlideData';

const Slide8CSSFrameworks = () => {
  return (
    <SlideLayout>
      <SlideTitle 
        tag="CSS Frameworks"
        subtitle="Vorgefertigte CSS-Systeme für schnellere und konsistentere Entwicklung"
      >
        CSS Frameworks
      </SlideTitle>
      
      <div className="text-center max-w-3xl mx-auto mb-10 animate-fade-in">
        <p className="text-lg">
          CSS-Frameworks bieten vorgefertigte CSS-Komponenten, Layoutsysteme und Hilfsmittel, die die Webentwicklung beschleunigen und konsistenter machen.
        </p>
      </div>
      
      <FrameworkShowcase frameworks={cssFrameworks} type="CSS" />
    </SlideLayout>
  );
};

export default Slide8CSSFrameworks;
