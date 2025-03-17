
import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import SlideNavigation from './SlideNavigation';

interface PresentationProps {
  slides: React.ReactNode[];
}

const Presentation: React.FC<PresentationProps> = ({ slides }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [transitioning, setTransitioning] = useState(false);

  // Parse slide index from URL or default to 0
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const slideParam = params.get('slide');
    const slideIndex = slideParam ? parseInt(slideParam, 10) : 0;
    
    if (!isNaN(slideIndex) && slideIndex >= 0 && slideIndex < slides.length) {
      setCurrentSlide(slideIndex);
    }
  }, [location.search, slides.length]);

  // Update URL when slide changes
  useEffect(() => {
    navigate(`/?slide=${currentSlide}`, { replace: true });
  }, [currentSlide, navigate]);

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === ' ') {
        goToNextSlide();
      } else if (e.key === 'ArrowLeft') {
        goToPrevSlide();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentSlide, slides.length]);

  const goToNextSlide = () => {
    if (currentSlide < slides.length - 1 && !transitioning) {
      setTransitioning(true);
      setTimeout(() => {
        setCurrentSlide(currentSlide + 1);
        setTransitioning(false);
      }, 300);
    }
  };

  const goToPrevSlide = () => {
    if (currentSlide > 0 && !transitioning) {
      setTransitioning(true);
      setTimeout(() => {
        setCurrentSlide(currentSlide - 1);
        setTransitioning(false);
      }, 300);
    }
  };

  const goToSlide = (index: number) => {
    if (index >= 0 && index < slides.length && !transitioning) {
      setTransitioning(true);
      setTimeout(() => {
        setCurrentSlide(index);
        setTransitioning(false);
      }, 300);
    }
  };

  return (
    <div className="relative h-screen overflow-hidden bg-background text-foreground">
      <div 
        className={`h-full transition-opacity duration-300 ${
          transitioning ? 'opacity-0' : 'opacity-100'
        }`}
      >
        {slides[currentSlide]}
      </div>

      <SlideNavigation
        currentSlide={currentSlide}
        totalSlides={slides.length}
        goToNextSlide={goToNextSlide}
        goToPrevSlide={goToPrevSlide}
        goToSlide={goToSlide}
      />
    </div>
  );
};

export default Presentation;
