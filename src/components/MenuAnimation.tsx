import { useEffect, useState } from "react";
import { gsap } from "gsap";

export default function MenuAnimation() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const menuContainer = document.querySelector(".menu-container");
    const menuBtn = document.querySelector(".menu-btn");
    const closeBtn = document.querySelector(".menu-close-btn");

    if (menuContainer) {
      gsap.set(menuContainer, {
        autoAlpha: 0,
        x: "100%",
      });
    }

    const handleMenuClick = () => {
      setMenuOpen((prevState) => !prevState);
    };

    if (menuBtn) {
      menuBtn.addEventListener("click", handleMenuClick);
    }

    if (closeBtn) {
      closeBtn.addEventListener("click", () => setMenuOpen(false));
    }

    return () => {
      if (menuBtn) {
        menuBtn.removeEventListener("click", handleMenuClick);
      }
      if (closeBtn) {
        closeBtn.removeEventListener("click", () => setMenuOpen(false));
      }
    };
  }, []);

  useEffect(() => {
    const menuContainer = document.querySelector(".menu-container");
    const menuLines = document.querySelectorAll(".g0abma6");

    if (!menuContainer) return;

    if (menuOpen) {
      gsap.to(menuContainer, {
        autoAlpha: 1,
        x: "0%",
        duration: 0.8,
        ease: "power3.out",
      });

      gsap.to(menuLines[0], {
        rotate: 45,
        y: 4,
        backgroundColor: "#fff",
        duration: 0.3,
      });
      gsap.to(menuLines[1], {
        rotate: -45,
        y: -3,
        backgroundColor: "#fff",
        duration: 0.3,
      });
    } else {
      gsap.to(menuContainer, {
        autoAlpha: 0,
        x: "100%",
        duration: 0.6,
        ease: "power2.in",
      });

      gsap.to(menuLines, {
        rotate: 0,
        y: 0,
        backgroundColor: "#fff",
        duration: 0.3,
      });
    }
  }, [menuOpen]);

  return null;
}
