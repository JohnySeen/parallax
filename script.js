window.addEventListener('scroll', function element() {
    document.body.style.cssText += `--scrollTop: ${this.scrollY}px`
});

//import {ScrollTrigger} from 'gsap-trial/ScrollSmoother';
//import {ScrollSmoother} from 'gsap-trial/ScrollSmoother';

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);
ScrollSmoother.create({
    wrapper: '.wrapper',
    content: '.content'
});
