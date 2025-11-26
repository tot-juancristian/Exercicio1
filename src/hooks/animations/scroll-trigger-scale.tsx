import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

// Hook de animação de scale, normalmente usadas em blocos nao simetricos
export default function useScale({scaleClass, start = 80} : {scaleClass: string, start?: number}) {
    useGSAP(() => {
        const discoverElementsSideLeft: NodeListOf<HTMLElement> = document.querySelectorAll(`${scaleClass}`);
    
        discoverElementsSideLeft.forEach((element) => {
          gsap.set(element, { scale: 0 });
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
                scale: 1,
                duration: 2,
                ease: "power4.out",
              });
          }, 500);
        });
    
      }, {});
}