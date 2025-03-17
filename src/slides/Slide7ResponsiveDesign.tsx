
import React from 'react';
import SlideLayout from '@/components/SlideLayout';
import SlideTitle from '@/components/SlideTitle';
import { Card } from '@/components/ui/card';
import { Smartphone, Tablet, Monitor, Layout } from 'lucide-react';

const Slide7ResponsiveDesign = () => {
  return (
    <SlideLayout>
      <SlideTitle 
        tag="Responsive Design"
        subtitle="Anpassungsfähiges Webdesign für alle Geräte"
      >
        Responsive Webdesign
      </SlideTitle>
      
      <div className="w-full max-w-5xl mt-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <Card className="p-6 animate-fade-in [animation-delay:200ms]">
            <h3 className="text-xl font-semibold mb-2 flex items-center">
              <Layout className="mr-2 h-5 w-5 text-primary" />
              Was ist Responsive Design?
            </h3>
            <p className="text-muted-foreground">
              Responsive Design ist ein Ansatz zur Webentwicklung, bei dem Webseiten so gestaltet werden, dass sie sich automatisch an verschiedene Bildschirmgrößen und Geräte anpassen, um eine optimale Benutzererfahrung zu bieten.
            </p>
          </Card>
          
          <Card className="p-6 animate-fade-in [animation-delay:400ms]">
            <h3 className="text-xl font-semibold mb-2">Kernprinzipien</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li className="flex items-start">
                <span className="inline-block w-2 h-2 rounded-full bg-primary mt-2 mr-2"></span>
                <span>Flexible Layouts mit relativen Einheiten (%, em, rem)</span>
              </li>
              <li className="flex items-start">
                <span className="inline-block w-2 h-2 rounded-full bg-primary mt-2 mr-2"></span>
                <span>Flexible Bilder und Medien mit max-width: 100%</span>
              </li>
              <li className="flex items-start">
                <span className="inline-block w-2 h-2 rounded-full bg-primary mt-2 mr-2"></span>
                <span>Media Queries für geräteorientierte Anpassungen</span>
              </li>
              <li className="flex items-start">
                <span className="inline-block w-2 h-2 rounded-full bg-primary mt-2 mr-2"></span>
                <span>Mobile-First Ansatz in der Entwicklung</span>
              </li>
            </ul>
          </Card>
        </div>
        
        <div className="flex flex-col md:flex-row justify-center items-center gap-6 mt-8">
          <div className="flex flex-col items-center animate-fade-in [animation-delay:600ms]">
            <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-2">
              <Smartphone className="h-8 w-8 text-primary" />
            </div>
            <h4 className="font-medium">Mobile</h4>
            <p className="text-xs text-muted-foreground">320px - 480px</p>
          </div>
          
          <div className="hidden md:block w-24 h-0.5 bg-gray-200 animate-fade-in [animation-delay:700ms]"></div>
          
          <div className="flex flex-col items-center animate-fade-in [animation-delay:800ms]">
            <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-2">
              <Tablet className="h-8 w-8 text-primary" />
            </div>
            <h4 className="font-medium">Tablet</h4>
            <p className="text-xs text-muted-foreground">768px - 1024px</p>
          </div>
          
          <div className="hidden md:block w-24 h-0.5 bg-gray-200 animate-fade-in [animation-delay:900ms]"></div>
          
          <div className="flex flex-col items-center animate-fade-in [animation-delay:1000ms]">
            <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-2">
              <Monitor className="h-8 w-8 text-primary" />
            </div>
            <h4 className="font-medium">Desktop</h4>
            <p className="text-xs text-muted-foreground">1024px+</p>
          </div>
        </div>
      </div>
    </SlideLayout>
  );
};

export default Slide7ResponsiveDesign;
