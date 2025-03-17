
import React from 'react';
import SlideLayout from '@/components/SlideLayout';
import SlideTitle from '@/components/SlideTitle';
import FeatureGrid from '@/components/FeatureGrid';
import { htmlFeatures } from '@/data/htmlData';

const Slide3HTMLIntro = () => {
  return (
    <SlideLayout>
      <SlideTitle 
        tag="HTML"
        subtitle="Die Struktursprache des Webs"
      >
        Was ist HTML?
      </SlideTitle>
      
      <div className="text-center max-w-3xl mx-auto mb-10 animate-fade-in">
        <p className="text-lg">
          HTML (Hypertext Markup Language) ist die Standardsprache zur Erstellung von Webseiten.
          Es beschreibt die Struktur einer Webseite mit verschiedenen Elementen und Tags.
        </p>
      </div>
      
      <FeatureGrid features={htmlFeatures} />
    </SlideLayout>
  );
};

export default Slide3HTMLIntro;
