gsap.registerPlugin(ScrollTrigger)

const tl = gsap.timeline({defaults: {duration: 1}})
const tl2 = gsap.timeline({defaults: {duration: 1}})
const tl3 = gsap.timeline({defaults: {duration: 1}})

tl.fromTo(".containerIntro > h1", { opacity: 0 }, { opacity: 1 })
.fromTo(".containerIntro > h2", { opacity: 0, x: -50 }, { opacity: 1, x: 0 }, "-=0.65")
.fromTo(".containerIntro > p", { opacity: 0, x: -50 }, { opacity: 1, x: 0 }, "-=0.65")
.fromTo(".containerIntro > div", { opacity: 0 }, { opacity: 1 }, "-=0.65")
.fromTo(".logo", { opacity: 0, x: 100 }, { opacity: 1, x: 0 }, "-=0.65")
.fromTo(".logoHeader", { opacity: 0, x: -50  }, { opacity: 1, x: 0 }, "-=0.65")
.fromTo("nav > a", { opacity: 0, y: -50  }, { opacity: 1, y: 0, stagger: .4 }, "-=0.65")

gsap.fromTo('.planoSection > div > div', {
    opacity: 0,
    x: -100
}, {
    opacity: 1,
    x: 0,
    stagger: .5,
    scrollTrigger: '.planoSection > div > div',
    scrollTrigger: {
        scrub: 1
    }
});