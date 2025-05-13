import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "@studio-freight/lenis";

export default function HeroAnimation() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    gsap.set(".text-mask-container", {
      opacity: 0,
    });

    gsap.set(".text-background", {
      opacity: 0,
    });

    gsap.set(".release-date", {
      opacity: 0,
    });
    gsap.set(".text-mask", {
      scale: 3.5, 
      opacity: 0, 
    }); 
    gsap.set(".date-mask-container", {
      height: 0, 
    });

    gsap.set(".release-date", {
      opacity: 0,
      y: 150, 
    }); 
    gsap.set(".background-image", {
      scale: 1.2,
    });

    gsap.set(".trailer-button-container", {
      opacity: 1,
    });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".hero-wrapper",
        start: "top top",
        end: "bottom top",
        scrub: true,
        pin: true,
        pinSpacing: true,
      },
    });

    // 1. Iniciar con el texto grande y visible en la parte superior
    gsap.set(".reveal-text", {
      scale: 1,
      opacity: 1,
    }); 

    tl.to(
      [".reveal-text", ".trailer-button-container"],
      {
        opacity: 0,
        duration: 1,
        ease: "power2.inOut",
      },
      ">"
    );

    tl.to(
      ".text-mask-container",
      {
        opacity: 3,
        duration: 1,
        ease: "power2.inOut",
      },
      ">"
    );

    tl.fromTo(
      ".text-mask",
      {
        scale: 3.5,
        opacity: 1,
        y: 0, 
      },
      {
        scale: 1,
        opacity: 1,
        y: 0, 
        duration: 1.5,
        ease: "power3.out",
      },
      "<"
    );

    tl.fromTo(
      ".background-image",
      {
        scale: 1.5,
      },
      {
        scale: 1,
        duration: 1.5,
        ease: "power3.out",
      },
      "<"
    );

    tl.to(
      {},
      {
        duration: 0.5,
      },
      ">"
    ); 
    tl.to(
      ".text-mask",
      {
        scale: 0.25, 
        y: "-25vh", 
        x: 0, 
        duration: 1.2,
        ease: "power2.inOut",
      },
      ">"
    );

    tl.to(
      ".background-image",
      {
        scale: 0, 
        y: "-10vh",
        duration: 1.5,
        ease: "power2.inOut",
      },
      "<"
    ); 

    tl.to(
      ".date-mask-container",
      {
        height: "50vh", 
        duration: 1.2,
        ease: "power1.inOut",
      },
      "<0.2" 
    ); 
    
    tl.to(
      ".release-date",
      {
        y: 0, 
        opacity: 1,
        duration: 1.5,
        ease: "power2.out",
      },
      "<0.7" 
    ); 
    

    tl.to(
      ".text-mask",
      {
        opacity: 0,
        scale: 0,
        y: "-30vh", 
        duration: 0.8,
        ease: "power3.out",
      },
      "<0.2"
    ); 
    tl.to(
      ".vi-logo-animated-container",
      {
        opacity: 1,
        scale: 1,
        y: "-5vh", 
        duration: 1.5,
        ease: "elastic.out(1, 0.4)", 
      },
      "<0.3" 
    );

    tl.set(
      ".trailer-button-container",
      {
        opacity: 0,
        display: "none", 
      },
      "<"
    );

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
      lenis.destroy();
    };
  }, []);
}
