
import React from 'react';
import SlideLayout from '@/components/SlideLayout';
import SlideTitle from '@/components/SlideTitle';
import FeatureGrid from '@/components/FeatureGrid';
import { cssFeatures } from './SlideData';

const Slide5CSSIntro = () => {
  return (
    <SlideLayout>
      <SlideTitle 
        tag="CSS"
        subtitle="Cascading Style Sheets - Design und Layout für Webseiten"
      >
        Was ist CSS?
      </SlideTitle>
      
      <div className="text-center max-w-3xl mx-auto mb-10 animate-fade-in">
        <p className="text-lg">
          CSS ist eine Formatierungssprache, die das Erscheinungsbild von HTML-Dokumenten definiert. Sie ermöglicht die visuelle Gestaltung und Layout-Kontrolle von Webseiten.
        </p>
      </div>
      
      <FeatureGrid features={cssFeatures} />
    </SlideLayout>
  );
};

export default Slide5CSSIntro;
