import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap';
gsap.registerPlugin(useGSAP);
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

// Hook de animação, normalmente usada em textos
export default function useDiscoverText({y = 50, className, startScroll = 95, startPosition = 'bottom', delay = 0}: { y?: number, className: string, startScroll?: number, startPosition?: string, delay?: number}) {
    useGSAP(() => {
        const discoverElements = document.querySelectorAll(className);
    
        discoverElements.forEach((element, index) => {
          gsap.set(element, { y: y, opacity: 0 });
          const tl = gsap.timeline({
            scrollTrigger: {
              trigger: element,
              start: `${startPosition} ${startScroll}%`,
              end: `${startPosition} ${startScroll}%`,
              toggleActions: "play none none none",
            }
          });

          tl.to(element, {
            y: 0,
            opacity: 1,
            duration: 2,
            ease: "power3.out",
            delay: delay * index
          });
        });
      }, []);
}