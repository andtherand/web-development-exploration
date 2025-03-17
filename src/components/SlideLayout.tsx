
import React from 'react';

interface SlideLayoutProps {
  children: React.ReactNode;
  className?: string;
}

const SlideLayout: React.FC<SlideLayoutProps> = ({ children, className = '' }) => {
  return (
    <div className={`h-full w-full flex flex-col items-center justify-center px-4 md:px-12 ${className}`}>
      {children}
    </div>
  );
};

export default SlideLayout;
