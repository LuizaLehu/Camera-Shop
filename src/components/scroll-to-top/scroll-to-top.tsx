import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

interface ScrollToTopProps {
  duration?: number; // Duration of the scroll animation in milliseconds
}

interface ExtendedMath extends Math {
  easeInOutQuad: (t: number, b: number, c: number, d: number) => number;
}


function ScrollToTop({ duration = 50 }: ScrollToTopProps) {
  const { pathname } = useLocation();

  useEffect(() => {
    const element = document.scrollingElement || document.documentElement;
    const start: number = element.scrollTop;
    const change: number = -start;
    let currentTime = 0;
    const increment = 20;

    const animateScroll = function () {
      currentTime += increment;
      const val: number = (Math as ExtendedMath).easeInOutQuad(currentTime, start, change, duration);
      element.scrollTop = val;

      if (currentTime < duration) {
        setTimeout(animateScroll, increment);
      }
    };

    (Math as ExtendedMath).easeInOutQuad = function (t: number, b: number, c: number, d: number): number {
      t /= d / 2;
      if (t < 1) {
        return (c / 2) * t * t + b;
      }
      t--;
      return (-c / 2) * (t * (t - 2) - 1) + b;
    };

    animateScroll();

    return () => {
      // Cleanup logic if needed
    };
  }, [pathname, duration]);

  return null;
}


export default ScrollToTop;
