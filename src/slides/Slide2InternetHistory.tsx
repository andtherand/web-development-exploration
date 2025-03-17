
import React from 'react';
import SlideLayout from '@/components/SlideLayout';
import SlideTitle from '@/components/SlideTitle';
import Timeline from '@/components/Timeline';
import { internetHistoryItems } from './SlideData';

const Slide2InternetHistory = () => {
  return (
    <SlideLayout>
      <SlideTitle 
        tag="Geschichte"
        subtitle="Von den ersten Netzwerken zum modernen WWW"
      >
        Die Entwicklung des Internets
      </SlideTitle>
      
      <div className="w-full max-w-5xl mt-8">
        <Timeline items={internetHistoryItems} />
      </div>
    </SlideLayout>
  );
};

export default Slide2InternetHistory;
