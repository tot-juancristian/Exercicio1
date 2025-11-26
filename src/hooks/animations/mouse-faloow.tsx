import { RefObject } from 'react';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';

// Hook que faz o mouse movimentar um elemento suavemente
export const useMouseMoveEffect = (containerRef: RefObject<HTMLElement>, elementRef: RefObject<HTMLElement>) => {
  useGSAP(() => {
    const container = containerRef.current;
    const element = elementRef.current;

    if (!container || !element) return;

    const handleMouseMove = (e: MouseEvent) => {
      const xPos = (e.clientX / window.innerWidth - 0.5);

      gsap.to(element, {
        duration: 0.1,
        rotationY: 10 * xPos,
        x: -100 * xPos,
        ease: "power1.inOut",
        transformPerspective: 900,
        transformOrigin: 'center'
      });
    };

    const handleMouseEnter = () => {
      container.addEventListener('mousemove', handleMouseMove);
    };

    const handleMouseLeave = () => {
      gsap.to(element, {
        duration: 0.2,
        rotationY: 0,
        rotationX: 0,
        x: 0,
        y: 0,
        ease: "power1.inOut"
      });
      container.removeEventListener('mousemove', handleMouseMove);
    };

    container.addEventListener('mouseenter', handleMouseEnter);
    container.addEventListener('mouseleave', handleMouseLeave);

  }, []);
};