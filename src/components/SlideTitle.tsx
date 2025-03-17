
import React from 'react';

interface SlideTitleProps {
  children: React.ReactNode;
  subtitle?: React.ReactNode;
  tag?: string;
  align?: 'left' | 'center' | 'right';
}

const SlideTitle: React.FC<SlideTitleProps> = ({ 
  children, 
  subtitle, 
  tag, 
  align = 'center' 
}) => {
  return (
    <div className={`w-full mb-8 text-${align}`}>
      {tag && (
        <span className="inline-block px-3 py-1 text-xs font-medium tracking-wider uppercase bg-primary/10 text-primary rounded-full mb-3 animate-fade-in">
          {tag}
        </span>
      )}
      <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight animate-slide-in">
        {children}
      </h2>
      {subtitle && (
        <p className="mt-4 text-xl text-muted-foreground animate-slide-in [animation-delay:100ms]">
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SlideTitle;
