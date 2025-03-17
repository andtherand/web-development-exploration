
import React from 'react';

export interface TimelineItem {
  year: string;
  title: string;
  description: string;
}

interface TimelineProps {
  items: TimelineItem[];
}

const Timeline: React.FC<TimelineProps> = ({ items }) => {
  return (
    <div className="relative mx-auto w-full max-w-3xl">
      {/* Vertical line */}
      <div className="absolute left-1/2 -ml-px h-full w-0.5 bg-gray-200"></div>
      
      {items.map((item, index) => (
        <div 
          key={index}
          className={`relative mb-8 animate-fade-in [animation-delay:${index * 150}ms]`}
        >
          <div className="flex items-center">
            {/* Timeline node */}
            <div className="absolute left-1/2 -ml-3 h-6 w-6 rounded-full bg-white border-2 border-primary flex items-center justify-center">
              <div className="h-2 w-2 rounded-full bg-primary"></div>
            </div>
            
            {/* Content */}
            <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 ml-auto'}`}>
              <span className="inline-block px-2 py-1 text-xs font-medium bg-primary/10 text-primary rounded mb-2">
                {item.year}
              </span>
              <h3 className="text-lg font-semibold">{item.title}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{item.description}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Timeline;
