
import React from 'react';
import SlideLayout from '@/components/SlideLayout';
import SlideTitle from '@/components/SlideTitle';
import CodeBlock from '@/components/CodeBlock';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { htmlExamples } from '@/data/htmlData';

const Slide4HTMLExamples = () => {
  return (
    <SlideLayout>
      <SlideTitle 
        tag="HTML"
        subtitle="Code-Beispiele und Struktur"
      >
        HTML Beispiele
      </SlideTitle>
      
      <div className="w-full max-w-4xl mt-6">
        <Tabs defaultValue="basic" className="w-full">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="basic">Grundstruktur</TabsTrigger>
            <TabsTrigger value="semantic">Semantische Elemente</TabsTrigger>
            <TabsTrigger value="forms">Formulare</TabsTrigger>
          </TabsList>
          
          <TabsContent value="basic" className="mt-6">
            <CodeBlock code={htmlExamples.basicStructure} language="html" />
          </TabsContent>
          
          <TabsContent value="semantic" className="mt-6">
            <CodeBlock code={htmlExamples.semanticElements} language="html" />
          </TabsContent>
          
          <TabsContent value="forms" className="mt-6">
            <CodeBlock code={htmlExamples.forms} language="html" />
          </TabsContent>
        </Tabs>
      </div>
    </SlideLayout>
  );
};

export default Slide4HTMLExamples;
