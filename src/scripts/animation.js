import { gsap } from "gsap";
    
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import { TextPlugin } from "gsap/TextPlugin";

gsap.registerPlugin(ScrollTrigger, SplitText, TextPlugin);

// gsap.set("body", {autoAlpha: 0});

function init() {
    // gsap.set("body", {autoAlpha: 1, duration: 0.3});

    const heroHeadingSplit = SplitText.create('.anim.hero__heading', {
        type: "lines, chars",
        mask: "chars"
    });

    /* gsap.to(heroHeadingSplit.chars, {
        x: (Math.random() * 200 - 100) + '%',
        y: (Math.random() * 200 - 100) + '%',
    }) */

    let heroTl = gsap.timeline();

    heroTl.from(heroHeadingSplit.chars, {
        scrollTrigger: '.hero__top',
        duration: 0.4,
        y: '100%',
        autoAlpha: 0,
        stagger: 0.06,
        delay: 0.3
    }).from(".hero__img .hero__line", {
        scaleY: 0,
        stagger: {
            each: 0.06,
            axis: 'x',
            from: 'edges',
            grid: 'auto'
        }
    }, '<').fromTo(".hero__cap", {
        scale: 0,
        autoAlpha: 0,
        clipPath: 'circle(0px at center)',
        filter: 'saturate(0.5)'
    }, {
        scale: 1,
        autoAlpha: 1,
        clipPath: 'circle(60% at center)',
        filter: 'none',
        duration: 0.5
    }, "-=0.3");

    const clipHeadingSplit = SplitText.create('.hero__clip', {
        type: "lines, chars",
        mask: "chars"
    });

    // gsap.from(".hero__img", {
    //     y: "-30%",
    //     scaleX: 0.5,
    //     delay: 1
    // });

    const sectionHeadings = gsap.utils.toArray(".section__heading");

    sectionHeadings.forEach(ele => {
        const textSplit = SplitText.create(ele, {
            type: "lines",
            mask: "lines",
        });

        // console.log(textSplit.lines)

        gsap.from(textSplit.lines, {
            scrollTrigger: {
                trigger: ele,
                start: "top 80%"
            },
            duration: 0.4,
            y: '200%',
            autoAlpha: 0,
            stagger: 0.06
        })
    });

    const animLines = gsap.utils.toArray('.featured__post, .featured__ch');

    animLines.forEach(ele => {
        const textSplit = SplitText.create(ele, {
            type: "lines",
            mask: "lines",
            linesClass: "line++"
        });

        // console.log(textSplit.lines)

        gsap.from(textSplit.lines, {
            scrollTrigger: {
                trigger: ele,
                start: "top 80%"
            },
            duration: 0.4,
            y: '100%',
            autoAlpha: 0,
            stagger: 0.1
        })
    });

    gsap.to(".window-wrapper", {
        scrollTrigger: {
            trigger: "body",
            start: "top top",
            end: "+=700",
            scrub: true
        },
        y: '-20%',
        scale: 0.95
    });

    // gsap.to(".hero__top", {
    //     scrollTrigger: {
    //         trigger: "body",
    //         start: "top top",
    //         end: "+=500",
    //         scrub: 0.2
    //     },
    //     yPercent: 50,
    //     scale: 1.05
    // });

    gsap.to(".hero-section", {
        scrollTrigger: {
            trigger: "body",
            start: "top top",
            end: "+=700",
            scrub: true,
            fastScrollEnd: true,
            snap: 0.1
            // pin: true
        },
        y: '50%',
    });

    /* Move window */

/*     gsap.set(".window-wrapper", {xPercent: -50, yPercent: -50})

    const xTo = gsap.quickTo(".window-wrapper", "x", {duration: 0.6, ease: "power3"});
    const yTo = gsap.quickTo(".window-wrapper", "y", {duration: 0.6, ease: "power3"});

    const hbounds = document.querySelector(".hero__clip").getBoundingClientRect();
    const wbounds = document.querySelector(".window-wrapper").getBoundingClientRect();
    console.log(wbounds, hbounds)
    // const clipTo = gsap.quickTo(".hero__clip", "clip-path", {duration: 0.6, ease: "power3"});
    
    window.addEventListener("mousemove", e => {
        xTo(e.clientX);
        yTo(e.clientY);

        const clipLeft = Math.max(0, e.clientX - wbounds.width / 2 - hbounds.left);
        const clipRight = Math.max(0, hbounds.right - e.clientX - wbounds.width / 2);
        const clipTop = Math.max(0, e.clientY - wbounds.height / 2 - hbounds.top);
        const clipBottom = Math.max(0, hbounds.bottom - e.clientY - wbounds.height / 2);
        // console.log(e.clientX, clipLeft, clipRight)
        // clipTo(`inset(0 ${clipRight}px 0 ${clipLeft}px)`);
        gsap.to(".hero__clip", {"clip-path": `inset(${clipTop}px ${clipRight}px ${clipBottom}px ${clipLeft}px)`, duration: 0.6, ease: "power3"})
    }) */
}

window.addEventListener("load", init);