import { gsap } from "gsap";
    
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import { TextPlugin } from "gsap/TextPlugin";

gsap.registerPlugin(ScrollTrigger, SplitText, TextPlugin);

// gsap.set("body", {autoAlpha: 0});

function init() {
    // gsap.set("body", {autoAlpha: 1, duration: 0.3});

    const heroHeadingSplit = SplitText.create('.hero__heading', {
        type: "lines",
        mask: "lines",
        linesClass: "line++"
    });

/*     gsap.from(heroHeadingSplit.lines, {
        yPercent: 150,
        stagger: 0.15,
        ease: "power2",
        duration: 0.6
    }); */

    const colHeadingSplit = SplitText.create('.hero__heading2', {
        type: "lines",
        mask: "lines",
    });
    gsap.set(colHeadingSplit.lines, {yPercent: 120});

    const heroDescLines = SplitText.create('.hero__desc', {
        type: "lines",
    });

    gsap.to(heroDescLines.lines, {
        scrollTrigger: {
            trigger: '.story-section',
            start: "100",
            end: "+=50",
            scrub: 1
        },
        yPercent: -100,
        autoAlpha: 0
    });

    // gsap.set(".hero__left", {width: '125%'});

    let heroTl = gsap.timeline({
        scrollTrigger: {
            trigger: 'body',
            start: "top top",
            end: "+=1000",
            scrub: 0.3
        }
    });

    let leftPanelTl = gsap.timeline()
    leftPanelTl.to('.hero__left', {
        width: '0%',
        paddingLeft: '0',
        paddingRight: '0',
        ease: "power",
        duration: 1
    }).to(".window-gallery", {
        xPercent:  window.innerWidth < 1480 ? -40 : -30,
        // x: window.innerWidth / 5,
    }, "<=").to(".window-wrapper", {
        boxShadow: '0px 1px 0px rgba(17,17,26,0.05), 0px 0px 8px rgba(17,17,26,0.1)'
    });

    let headingTl = gsap.timeline();
    headingTl.to(heroHeadingSplit.lines, {
        yPercent: 110,
        duration: 0.4
    })
    .to(colHeadingSplit.lines, {
        yPercent: 0,
        duration: 0.4
    }, "<=")
    .to('.hero__heading2', {
/*         x: `calc(5vw - 15%)`,
        x: window.innerWidth / 20 - */
        x: -100,
        xPercent: window.innerWidth < 1480 ? -15 : -5,
    }, "+=0.6")
    .to(heroHeadingSplit.lines, {
        display: 'none'
    }, "<=")
    .to('.window--more', {
        maxWidth: '350'
    })
    .to('.nav', {
        borderBottomColor: 'transparent'
    });
    
    heroTl
        .add(leftPanelTl)
        .add(headingTl, "<=");

    /* Left panel border fade */
    gsap.to('.hero__left', {
        scrollTrigger: {
            trigger: 'body',
            start: "top top",
            end: "+=2000",
            scrub: 0.1
        },
        borderRightColor: 'transparent',
        ease: "power3"
    });

    /* Left panel inner content fade */
    gsap.to('.left__inner', {
        scrollTrigger: {
            trigger: 'body',
            start: "top top",
            scrub: 0.1
        },
        opacity: '0',
        ease: "power3"
    });

    gsap.from('.hero__heading', {
        xPercent: -30,
        ease: "power3",
    });

/*     gsap.to('.hero__heading', {
        scrollTrigger: {
            trigger: '.hero__right',
            start: "top top",
            scrub: 0.1
        },
        yPercent: -40,
        ease: "power3"
    });

    gsap.to('.hero__heading > .line1-mask', {
        scrollTrigger: {
            trigger: '.hero__right',
            start: "top top",
            scrub: 0.1,
        },
        xPercent: -5,
        ease: "power3"
    });

    gsap.to('.hero__heading > .line2-mask', {
        scrollTrigger: {
            trigger: '.hero__right',
            start: "top top",
            scrub: 0.1,
        },
        xPercent: -20,
        ease: "power3"
    });

    gsap.to('.hero__heading > .line3-mask', {
        scrollTrigger: {
            trigger: '.hero__right',
            start: "top top",
            scrub: 0.1,
        },
        xPercent: -15,
        ease: "power3"
    }); */

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
                start: "top bottom"
            },
            duration: 0.4,
            y: '200%',
            autoAlpha: 0,
            stagger: 0.06
        })
    });

    gsap.set(".window-wrapper", {
        scale: 0.7,
        xPercent: -20
    });

    gsap.to(".window-wrapper", {
        scrollTrigger: {
            trigger: "body",
            start: "top top",
            end: "+=500",
            scrub: true
        },
        y: '-80%',
        scale: 0.9,
    });

    const animLines = gsap.utils.toArray('.featured__post, .featured__ch');

    animLines.forEach(ele => {
        const textSplit = SplitText.create(ele, {
            type: "lines",
            mask: "lines",
            linesClass: "line++",
            autoSplit: true,
            deepSlice: false
        });

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
}

window.addEventListener("load", init);