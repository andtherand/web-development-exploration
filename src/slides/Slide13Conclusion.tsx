
import React from 'react';
import SlideLayout from '@/components/SlideLayout';
import SlideTitle from '@/components/SlideTitle';
import { Card, CardContent } from '@/components/ui/card';
import { Code, Globe, Braces } from 'lucide-react';

const Slide13Conclusion = () => {
  return (
    <SlideLayout>
      <SlideTitle 
        tag="Zusammenfassung"
        subtitle="Die Kernelemente moderner Webentwicklung"
      >
        Das Web-Entwicklungs-Ökosystem
      </SlideTitle>
      
      <div className="w-full max-w-5xl mt-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="animate-fade-in [animation-delay:200ms]">
            <CardContent className="p-6">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mr-3">
                  <Code className="h-5 w-5 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">HTML</h3>
              </div>
              <p className="text-sm text-muted-foreground">
                Die strukturelle Grundlage jeder Webseite, definiert Inhalte und deren Bedeutung.
              </p>
              <ul className="mt-4 space-y-2 text-sm">
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 rounded-full bg-primary mt-1.5 mr-2"></span>
                  <span>Semantische Struktur</span>
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 rounded-full bg-primary mt-1.5 mr-2"></span>
                  <span>Zugänglichkeit</span>
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 rounded-full bg-primary mt-1.5 mr-2"></span>
                  <span>Medieneinbindung</span>
                </li>
              </ul>
            </CardContent>
          </Card>
          
          <Card className="animate-fade-in [animation-delay:400ms]">
            <CardContent className="p-6">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mr-3">
                  <Globe className="h-5 w-5 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">CSS</h3>
              </div>
              <p className="text-sm text-muted-foreground">
                Die visuelle Gestaltung und Präsentation von Webinhalten.
              </p>
              <ul className="mt-4 space-y-2 text-sm">
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 rounded-full bg-primary mt-1.5 mr-2"></span>
                  <span>Layoutsysteme</span>
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 rounded-full bg-primary mt-1.5 mr-2"></span>
                  <span>Responsive Design</span>
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 rounded-full bg-primary mt-1.5 mr-2"></span>
                  <span>Animationen</span>
                </li>
              </ul>
            </CardContent>
          </Card>
          
          <Card className="animate-fade-in [animation-delay:600ms]">
            <CardContent className="p-6">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mr-3">
                  <Braces className="h-5 w-5 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">JavaScript</h3>
              </div>
              <p className="text-sm text-muted-foreground">
                Die Programmierlogik für interaktive und dynamische Webanwendungen.
              </p>
              <ul className="mt-4 space-y-2 text-sm">
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 rounded-full bg-primary mt-1.5 mr-2"></span>
                  <span>Interaktivität</span>
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 rounded-full bg-primary mt-1.5 mr-2"></span>
                  <span>Client- & Server-seitig</span>
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 rounded-full bg-primary mt-1.5 mr-2"></span>
                  <span>Moderne Frameworks</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
        
        <div className="mt-12 text-center animate-fade-in [animation-delay:800ms]">
          <h3 className="text-2xl font-semibold mb-4">Die Zukunft der Webentwicklung</h3>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Die Webentwicklung entwickelt sich ständig weiter, mit Trends wie WebAssembly, 
            Progressive Web Apps, JAMstack und serverless Architekturen, die die Art und Weise 
            verändern, wie wir Web-Anwendungen erstellen und bereitstellen.
          </p>
        </div>
      </div>
    </SlideLayout>
  );
};

export default Slide13Conclusion;
