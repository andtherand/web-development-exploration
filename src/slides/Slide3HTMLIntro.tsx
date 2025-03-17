
import React from 'react';
import SlideLayout from '@/components/SlideLayout';
import SlideTitle from '@/components/SlideTitle';
import FeatureGrid from '@/components/FeatureGrid';
import { htmlFeatures } from './SlideData';

const Slide3HTMLIntro = () => {
  return (
    <SlideLayout>
      <SlideTitle 
        tag="HTML"
        subtitle="Hypertext Markup Language - Die Grundstruktur des Web"
      >
        Was ist HTML?
      </SlideTitle>
      
      <div className="text-center max-w-3xl mx-auto mb-10 animate-fade-in">
        <p className="text-lg">
          HTML ist die Auszeichnungssprache für Webseiten. Sie definiert die Struktur und den Inhalt von Webdokumenten durch ein System von Tags und Attributen.
        </p>
      </div>
      
      <FeatureGrid features={htmlFeatures} />
    </SlideLayout>
  );
};

export default Slide3HTMLIntro;
