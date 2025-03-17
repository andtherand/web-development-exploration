
import React from 'react';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface SlideNavigationProps {
  currentSlide: number;
  totalSlides: number;
  goToNextSlide: () => void;
  goToPrevSlide: () => void;
  goToSlide: (index: number) => void;
}

const SlideNavigation: React.FC<SlideNavigationProps> = ({
  currentSlide,
  totalSlides,
  goToNextSlide,
  goToPrevSlide,
  goToSlide,
}) => {
  return (
    <div className="fixed bottom-8 left-0 right-0 z-50 flex items-center justify-center gap-2">
      <div className="bg-white/80 backdrop-blur-md border border-gray-200 rounded-full px-4 py-2 flex items-center shadow-lg">
        <Button 
          variant="ghost" 
          size="icon" 
          onClick={goToPrevSlide}
          disabled={currentSlide === 0}
          className="mr-2 h-8 w-8 rounded-full transition-all duration-200"
        >
          <ChevronLeft className="h-4 w-4" />
          <span className="sr-only">Previous slide</span>
        </Button>

        <div className="flex space-x-1">
          {Array.from({ length: totalSlides }).map((_, index) => (
            <button
              key={index}
              className={`h-2 rounded-full transition-all duration-300 ${
                index === currentSlide ? 'w-6 bg-primary' : 'w-2 bg-gray-300'
              }`}
              onClick={() => goToSlide(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        <Button 
          variant="ghost" 
          size="icon" 
          onClick={goToNextSlide}
          disabled={currentSlide === totalSlides - 1}
          className="ml-2 h-8 w-8 rounded-full transition-all duration-200"
        >
          <ChevronRight className="h-4 w-4" />
          <span className="sr-only">Next slide</span>
        </Button>
      </div>
    </div>
  );
};

export default SlideNavigation;
