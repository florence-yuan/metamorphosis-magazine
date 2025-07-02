import { gsap } from "gsap";

import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";
import { MorphSVGPlugin } from "gsap/MorphSVGPlugin";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(DrawSVGPlugin, MorphSVGPlugin, ScrollTrigger);

/*
let tl = gsap.timeline({
    scrollTrigger: {
        trigger: '#figure-wrapper',
        // pin: true,
        start: 'top 20%',
        end: '+=1000',
    },
    // repeat: -1,
    repeatDelay: 0.5,
    yoyo: true
});

tl
    .to("#bust", { duration: 0.25, scaleY: 1.1, ease: "sine.inOut" })
    .to("#hat1", { duration: 0.25, y: -10, ease: "sine.inOut" }, "<+0.1")
    .to("#bust", { duration: 0.25, scaleY: 1, ease: "sine.inOut" })
    .to("#hat1", { duration: 0.25, y: 0, ease: "sine.inOut" }, "<+0.1")
    .to("#head1", { duration: 1, morphSVG: "#head2" })
    .to("#torso1", { duration: 1, morphSVG: "#torso2" }, "<")
    .to("#hat1_inner", { duration: 0.5, fill: "rebeccapurple", stroke: "rebeccapurple", ease: "sine.inOut" }, "<-0.4")

    .to("#bust", { duration: 0.25, scaleY: 1.1, ease: "sine.inOut" })
    .to("#hat1", { duration: 0.25, y: -10, ease: "sine.inOut" }, "<+0.1")
    .to("#bust", { duration: 0.25, scaleY: 1, ease: "sine.inOut" })
    .to("#hat1", { duration: 0.25, y: 0, ease: "sine.inOut" }, "<+0.1")
    .to("#head1", { duration: 1, morphSVG: "#head3" })
    .to("#torso1", { duration: 1, morphSVG: "#torso3" }, "<")
    .to("#hat1_inner", { duration: 1, morphSVG: "#hat2_inner", fill: "#ff8080", stroke: "#ffeeaa" }, "<");
*/

gsap.from("#static-fig #central-figure", {
    duration: 5,
    drawSVG: 0,
    ease: "power1.out",
    delay: 0.3
});

gsap.from("#static-fig #hat-outline", {
    duration: 2,
    drawSVG: 0,
    ease: "power1.out",
    delay: 0.3
});

/* gsap.to(".morph-bg", {
    scrollTrigger: {
        trigger: '#figure-wrapper',
        start: 'top center',
        end: '+=1000',
        scrub: 0.2,
    },
    left: -200,
    bottom: -200,
    width: 'calc(100vw + 200px)',
    height: 'calc(100vh + 200px)'
}); */

/* Body Fade */

gsap.fromTo("body", { opacity: 0 }, { opacity: 1, duration: 1 });

/* Header stagger effects */

gsap.set(".header__letter", {
    opacity: 0,
    transform: 'rotateX(90deg) translateY(10%)',
    transformOrigin: 'bottom'
});

gsap.set(".fade-anim", { opacity: 0 });

const animEles = gsap.utils.toArray('.anim');

animEles.forEach(ele => {
    const eleSelector = gsap.utils.selector(ele);
    gsap.to(eleSelector(".header__letter"), {
        scrollTrigger: {
            trigger: ele,
            start: 'top 75%',
            // scrub: 0.2,
        },
        opacity: 1,
        transform: 'none',
        stagger: 0.05,
        delay: 0.2
    });
});

const fadeAnimEles = gsap.utils.toArray('.fade-anim');

fadeAnimEles.forEach(ele => {
    gsap.to(ele, {
        scrollTrigger: {
            trigger: ele,
            start: 'top 75%',
        },
        opacity: 1
    });
});