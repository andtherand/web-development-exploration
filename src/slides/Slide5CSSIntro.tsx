
import React from 'react';
import SlideLayout from '@/components/SlideLayout';
import SlideTitle from '@/components/SlideTitle';
import FeatureGrid from '@/components/FeatureGrid';
import { cssFeatures } from '@/data/cssData';

const Slide5CSSIntro = () => {
  return (
    <SlideLayout>
      <SlideTitle 
        tag="CSS"
        subtitle="Die Gestaltungssprache des Webs"
      >
        Was ist CSS?
      </SlideTitle>
      
      <div className="text-center max-w-3xl mx-auto mb-10 animate-fade-in">
        <p className="text-lg">
          CSS (Cascading Style Sheets) ist eine Stylesheet-Sprache, die das Erscheinungsbild von HTML-Dokumenten beschreibt.
          Es ermöglicht die Trennung von Inhalt und Darstellung.
        </p>
      </div>
      
      <FeatureGrid features={cssFeatures} />
    </SlideLayout>
  );
};

export default Slide5CSSIntro;
