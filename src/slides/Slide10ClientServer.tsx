
import React from 'react';
import SlideLayout from '@/components/SlideLayout';
import SlideTitle from '@/components/SlideTitle';
import { Card } from '@/components/ui/card';
import { Laptop, Server, ArrowDownToLine, ArrowUpFromLine } from 'lucide-react';

const Slide10ClientServer = () => {
  return (
    <SlideLayout>
      <SlideTitle 
        tag="Client & Server"
        subtitle="Die zwei Seiten der Webentwicklung"
      >
        Client vs. Server
      </SlideTitle>
      
      <div className="w-full max-w-5xl mt-4">
        <div className="flex flex-col md:flex-row gap-6 items-stretch mb-12">
          <Card className="p-6 flex-1 animate-fade-in [animation-delay:200ms]">
            <div className="mb-4 flex items-center">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mr-4">
                <Laptop className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-2xl font-semibold">Client-Side JavaScript</h3>
            </div>
            
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex items-start">
                <span className="inline-block w-2 h-2 rounded-full bg-primary mt-2 mr-2"></span>
                <span>Läuft im Browser des Benutzers</span>
              </li>
              <li className="flex items-start">
                <span className="inline-block w-2 h-2 rounded-full bg-primary mt-2 mr-2"></span>
                <span>Manipuliert das DOM für dynamische Benutzeroberflächen</span>
              </li>
              <li className="flex items-start">
                <span className="inline-block w-2 h-2 rounded-full bg-primary mt-2 mr-2"></span>
                <span>Verarbeitet Benutzerinteraktionen in Echtzeit</span>
              </li>
              <li className="flex items-start">
                <span className="inline-block w-2 h-2 rounded-full bg-primary mt-2 mr-2"></span>
                <span>Kommuniziert mit Servern über APIs</span>
              </li>
              <li className="flex items-start">
                <span className="inline-block w-2 h-2 rounded-full bg-primary mt-2 mr-2"></span>
                <span>Frameworks: React, Vue, Angular</span>
              </li>
            </ul>
          </Card>
          
          <Card className="p-6 flex-1 animate-fade-in [animation-delay:400ms]">
            <div className="mb-4 flex items-center">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mr-4">
                <Server className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-2xl font-semibold">Server-Side JavaScript</h3>
            </div>
            
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex items-start">
                <span className="inline-block w-2 h-2 rounded-full bg-primary mt-2 mr-2"></span>
                <span>Läuft auf Webservern mit Node.js</span>
              </li>
              <li className="flex items-start">
                <span className="inline-block w-2 h-2 rounded-full bg-primary mt-2 mr-2"></span>
                <span>Verarbeitet API-Anfragen und Geschäftslogik</span>
              </li>
              <li className="flex items-start">
                <span className="inline-block w-2 h-2 rounded-full bg-primary mt-2 mr-2"></span>
                <span>Interagiert mit Datenbanken und externen Diensten</span>
              </li>
              <li className="flex items-start">
                <span className="inline-block w-2 h-2 rounded-full bg-primary mt-2 mr-2"></span>
                <span>Server-Rendering für bessere Leistung und SEO</span>
              </li>
              <li className="flex items-start">
                <span className="inline-block w-2 h-2 rounded-full bg-primary mt-2 mr-2"></span>
                <span>Frameworks: Express.js, NestJS, Next.js</span>
              </li>
            </ul>
          </Card>
        </div>
        
        <div className="relative py-16 flex justify-center animate-fade-in [animation-delay:600ms]">
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-0.5 bg-gray-200"></div>
          
          <div className="flex flex-col md:flex-row items-center justify-between w-full max-w-3xl relative z-10">
            <div className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm mb-8 md:mb-0">
              <div className="text-center">
                <Laptop className="h-8 w-8 mx-auto mb-2 text-primary" />
                <h4 className="font-medium">Client</h4>
              </div>
            </div>
            
            <div className="flex flex-col items-center mx-4">
              <div className="flex items-center mb-2">
                <ArrowUpFromLine className="h-5 w-5 text-muted-foreground" />
                <span className="text-xs ml-1 text-muted-foreground">Request</span>
              </div>
              <div className="flex items-center">
                <ArrowDownToLine className="h-5 w-5 text-muted-foreground" />
                <span className="text-xs ml-1 text-muted-foreground">Response</span>
              </div>
            </div>
            
            <div className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm">
              <div className="text-center">
                <Server className="h-8 w-8 mx-auto mb-2 text-primary" />
                <h4 className="font-medium">Server</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SlideLayout>
  );
};

export default Slide10ClientServer;
