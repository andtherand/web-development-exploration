
import React from 'react';
import SlideLayout from '@/components/SlideLayout';
import SlideTitle from '@/components/SlideTitle';
import CodeBlock from '@/components/CodeBlock';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Variable, CornerDownRight, Repeat, Code2 } from 'lucide-react';
import { jsSyntaxExamples } from '@/data/jsSyntax';

const Slide12JSSyntax = () => {
  return (
    <SlideLayout>
      <SlideTitle 
        tag="JavaScript Grundlagen"
        subtitle="Die Bausteine von JavaScript-Code"
      >
        JavaScript Syntax
      </SlideTitle>
      
      <div className="w-full max-w-4xl mt-6">
        <Tabs defaultValue="variables" className="w-full">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="variables" className="flex items-center">
              <Variable className="h-4 w-4 mr-2" /> Variablen
            </TabsTrigger>
            <TabsTrigger value="conditions" className="flex items-center">
              <CornerDownRight className="h-4 w-4 mr-2" /> Bedingungen
            </TabsTrigger>
            <TabsTrigger value="loops" className="flex items-center">
              <Repeat className="h-4 w-4 mr-2" /> Schleifen
            </TabsTrigger>
            <TabsTrigger value="functions" className="flex items-center">
              <Code2 className="h-4 w-4 mr-2" /> Funktionen
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="variables" className="mt-6">
            <CodeBlock code={jsSyntaxExamples.variables} language="js" />
          </TabsContent>
          
          <TabsContent value="conditions" className="mt-6">
            <CodeBlock code={jsSyntaxExamples.conditions} language="js" />
          </TabsContent>
          
          <TabsContent value="loops" className="mt-6">
            <CodeBlock code={jsSyntaxExamples.loops} language="js" />
          </TabsContent>
          
          <TabsContent value="functions" className="mt-6">
            <CodeBlock code={jsSyntaxExamples.functions} language="js" />
          </TabsContent>
        </Tabs>
      </div>
    </SlideLayout>
  );
};

export default Slide12JSSyntax;
