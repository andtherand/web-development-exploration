
import React from 'react';
import SlideLayout from '@/components/SlideLayout';
import SlideTitle from '@/components/SlideTitle';
import { Monitor, Server, Braces } from 'lucide-react';

const Slide1Intro = () => {
  return (
    <SlideLayout>
      <SlideTitle 
        tag="Web-Entwicklung"
        subtitle="Entwicklung, Technologien und Bausteine des modernen Webs verstehen"
      >
        Die Welt der Webentwicklung
      </SlideTitle>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12 w-full max-w-4xl">
        <div className="flex flex-col items-center text-center animate-fade-in [animation-delay:300ms]">
          <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
            <Monitor size={28} className="text-primary" />
          </div>
          <h3 className="text-xl font-medium mb-2">Frontend</h3>
          <p className="text-muted-foreground text-sm">HTML, CSS, JavaScript</p>
        </div>
        
        <div className="flex flex-col items-center text-center animate-fade-in [animation-delay:500ms]">
          <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
            <Server size={28} className="text-primary" />
          </div>
          <h3 className="text-xl font-medium mb-2">Backend</h3>
          <p className="text-muted-foreground text-sm">Server, Datenbanken, APIs</p>
        </div>
        
        <div className="flex flex-col items-center text-center animate-fade-in [animation-delay:700ms]">
          <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
            <Braces size={28} className="text-primary" />
          </div>
          <h3 className="text-xl font-medium mb-2">Frameworks</h3>
          <p className="text-muted-foreground text-sm">React, Vue, Angular</p>
        </div>
      </div>
    </SlideLayout>
  );
};

export default Slide1Intro;
