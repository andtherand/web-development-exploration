
import React from 'react';
import Presentation from '@/components/Presentation';

// Import all slides
import Slide1Intro from '@/slides/Slide1Intro';
import Slide2InternetHistory from '@/slides/Slide2InternetHistory';
import Slide3HTMLIntro from '@/slides/Slide3HTMLIntro';
import Slide4HTMLExamples from '@/slides/Slide4HTMLExamples';
import Slide5CSSIntro from '@/slides/Slide5CSSIntro';
import Slide6CSSExamples from '@/slides/Slide6CSSExamples';
import Slide7ResponsiveDesign from '@/slides/Slide7ResponsiveDesign';
import Slide8CSSFrameworks from '@/slides/Slide8CSSFrameworks';
import Slide9JavaScriptIntro from '@/slides/Slide9JavaScriptIntro';
import Slide10ClientServer from '@/slides/Slide10ClientServer';
import Slide11JSFrameworks from '@/slides/Slide11JSFrameworks';
import Slide12JSSyntax from '@/slides/Slide12JSSyntax';
import Slide13Conclusion from '@/slides/Slide13Conclusion';

const Index = () => {
  const slides = [
    <Slide1Intro key="intro" />,
    <Slide2InternetHistory key="internet-history" />,
    <Slide3HTMLIntro key="html-intro" />,
    <Slide4HTMLExamples key="html-examples" />,
    <Slide5CSSIntro key="css-intro" />,
    <Slide6CSSExamples key="css-examples" />,
    <Slide7ResponsiveDesign key="responsive-design" />,
    <Slide8CSSFrameworks key="css-frameworks" />,
    <Slide9JavaScriptIntro key="js-intro" />,
    <Slide10ClientServer key="client-server" />,
    <Slide11JSFrameworks key="js-frameworks" />,
    <Slide12JSSyntax key="js-syntax" />,
    <Slide13Conclusion key="conclusion" />
  ];

  return <Presentation slides={slides} />;
};

export default Index;
