import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

export default function useAnimationsTrigger({leftSide, stagger, start = 80} : {leftSide: string, stagger: string, start?: number}) {
    useGSAP(() => {
        const discoverElementsSideLeft: NodeListOf<HTMLElement> = document.querySelectorAll(`${leftSide}`);
        const discoverElementsSideRight: NodeListOf<HTMLElement> = document.querySelectorAll(`${stagger}`);
    
        function getAmount(side: "right" | "left") {
          return side === 'right' ? (window.innerWidth) : -(window.innerWidth);
        }
    
        discoverElementsSideLeft.forEach((element) => {
          gsap.set(element, { x: getAmount('left') });
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
                stagger: 1,
                duration: 2,
                ease: "power4.out",
              });
          }, 500);
        });
    
        discoverElementsSideRight.forEach((element) => {
          gsap.set(element, { x: getAmount('right') });
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
                stagger: 1,
                duration: 2,
                ease: "power4.out",
              });
          }, 500);
        });
      }, {});
}