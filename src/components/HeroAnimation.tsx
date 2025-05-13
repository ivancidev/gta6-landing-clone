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

    gsap.set(".final-image", {
      opacity: 0,
    });

    gsap.set(".release-date", {
      opacity: 0,
    });
    gsap.set(".text-mask", {
      scale: 3.5, 
      opacity: 0, // Inicialmente invisible
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
    }); // 2. Desvanecer el texto normal y hacer transición al texto con máscara

    tl.to(
      [".reveal-text", ".trailer-button-container"],
      {
        opacity: 0,
        duration: 1,
        ease: "power2.inOut",
      },
      ">"
    );

    // 3. Mostrar el texto con efecto de máscara - inicialmente muy grande
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
        y: 0, // Movemos el texto a su posición final
        opacity: 1,
        duration: 1.5,
        ease: "power2.out",
      },
      "<0.7" // Ligeramente después de que comience a expandirse el contenedor
    ); // Pequeña pausa antes de añadir el logo VI (manteniendo la fecha)
    tl.to(
      {},
      {
        duration: 0.5, // Reducimos la pausa para hacer la transición más fluida
      },
      ">"
    ); // Movemos el contenedor de fecha al centro de la pantalla
    tl.to(
      [".release-date", ".date-mask-container"],
      {
        scale: 1, // Mantenemos el tamaño original para mejor legibilidad
        duration: 0.8,
        ease: "power2.inOut",
      },
      ">"
    ); // Desvanecemos el texto GTA más rápido para dar paso al logo VI
    tl.to(
      ".text-mask",
      {
        opacity: 0,
        scale: 0,
        y: "-30vh", // Movemos más arriba para que no interfiera con el logo VI
        duration: 0.8,
        ease: "power3.out",
      },
      "<0.2"
    ); // Animamos la aparición del logo VI en la posición correcta
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
