import gsap from "gsap";
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

// É bom usar em todas as page.tsx, para sempre refrescar as animações
const scrollTriggerRefresh = () => {
    setTimeout(() => {
        ScrollTrigger.refresh()
    }, 1200);
};

export default scrollTriggerRefresh;