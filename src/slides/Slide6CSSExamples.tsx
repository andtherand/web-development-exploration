
import React from 'react';
import SlideLayout from '@/components/SlideLayout';
import SlideTitle from '@/components/SlideTitle';
import CodeBlock from '@/components/CodeBlock';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { cssExamples } from './SlideData';

const Slide6CSSExamples = () => {
  return (
    <SlideLayout>
      <SlideTitle 
        tag="CSS"
        subtitle="Code-Beispiele und Techniken"
      >
        CSS Beispiele
      </SlideTitle>
      
      <div className="w-full max-w-4xl mt-6">
        <Tabs defaultValue="basic" className="w-full">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="basic">Grundlagen</TabsTrigger>
            <TabsTrigger value="responsive">Responsive Design</TabsTrigger>
            <TabsTrigger value="layout">Layout-Techniken</TabsTrigger>
          </TabsList>
          
          <TabsContent value="basic" className="mt-6">
            <CodeBlock code={cssExamples.basicStyling} language="css" />
          </TabsContent>
          
          <TabsContent value="responsive" className="mt-6">
            <CodeBlock code={cssExamples.responsiveDesign} language="css" />
          </TabsContent>
          
          <TabsContent value="layout" className="mt-6">
            <CodeBlock code={cssExamples.layoutTechniques} language="css" />
          </TabsContent>
        </Tabs>
      </div>
    </SlideLayout>
  );
};

export default Slide6CSSExamples;
