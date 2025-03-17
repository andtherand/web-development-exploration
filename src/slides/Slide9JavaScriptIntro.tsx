
import React from 'react';
import SlideLayout from '@/components/SlideLayout';
import SlideTitle from '@/components/SlideTitle';
import FeatureGrid from '@/components/FeatureGrid';
import { jsFeatures } from '@/data/javascriptData';

const Slide9JavaScriptIntro = () => {
  return (
    <SlideLayout>
      <SlideTitle 
        tag="JavaScript"
        subtitle="Die Programmiersprache des Web"
      >
        Was ist JavaScript?
      </SlideTitle>
      
      <div className="text-center max-w-3xl mx-auto mb-10 animate-fade-in">
        <p className="text-lg">
          JavaScript ist eine dynamische, interpretierte Programmiersprache, die Webseiten interaktiv und dynamisch macht. Sie ist eine der Kernkomponenten moderner Webanwendungen.
        </p>
      </div>
      
      <FeatureGrid features={jsFeatures} />
    </SlideLayout>
  );
};

export default Slide9JavaScriptIntro;
