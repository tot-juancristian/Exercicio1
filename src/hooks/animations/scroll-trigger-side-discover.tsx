import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

// Hook de animação, faz com que o elemento venha das laterais, usado em blocos, images, etc.
export default function useDiscoverFromSide({leftSide, rightSide, start = 80} : {leftSide: string, rightSide: string, start?: number}) {
    useGSAP(() => {
        const discoverElementsSideLeft: NodeListOf<HTMLElement> = document.querySelectorAll(`${leftSide}`);
        const discoverElementsSideRight: NodeListOf<HTMLElement> = document.querySelectorAll(`${rightSide}`);
    
        function getAmount(side: "right" | "left") {
          return side === 'right' ? (window.innerWidth) : -(window.innerWidth);
        }
    
        discoverElementsSideLeft.forEach((element) => {
          gsap.set(element, { x: getAmount('left'), opacity: 0 });
          setTimeout(() => {
              const tl = gsap.timeline({
                scrollTrigger: {
                  trigger: element,
                  start: `${start}% 100%"`,
                  end: `${start}% 100%`,
                  toggleActions: "play none none none",
                  invalidateOnRefresh: true,
                }
              });
        
              tl.to(element, {
                x: 0,
                duration: 2,
                opacity: 1,
                ease: "power2.out",
              });
          }, 500);
        });
    
        discoverElementsSideRight.forEach((element) => {
          gsap.set(element, { x: getAmount('right'), opacity: 0 });
          setTimeout(() => {
              const tl = gsap.timeline({
                scrollTrigger: {
                  trigger: element,
                  start: `${start}% 100%"`,
                  end: `${start}% 100%"`,
                  toggleActions: "play none none none",
                  invalidateOnRefresh: true,
                }
              });
        
              tl.to(element, {
                x: 0,
                duration: 2,
                opacity: 1,
                ease: "power2.out",
              });
          }, 500);
        });
      }, {});
}