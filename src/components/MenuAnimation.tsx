import { useEffect, useState } from "react";
import { gsap } from "gsap";

export default function MenuAnimation() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const menuBtn = document.querySelector(".menu-btn");

    let menuContainer = document.querySelector(".menu-container");

    if (!menuContainer) {
      menuContainer = document.createElement("div");
      menuContainer.className = "menu-container";

      menuContainer.innerHTML = `
        <div class="menu-left-side">
          <img src="/fondo-menu.png" alt="Fondo" class="menu-background-image">
        </div>        
        <div class="menu-right-side">
          <div class="menu-header">
            <div class="menu-nav-tabs">
              <div class="menu-item active">People</div>
              <div class="menu-item">Places</div>
              <div class="menu-item">Trailers</div>
              <div class="menu-item">Downloads</div>
            </div>
            <div class="menu-close-btn">
              <div class="menu-close-line"></div>
              <div class="menu-close-line"></div>
            </div>
          </div>
          <div class="menu-content">
            <div class="menu-characters">
              <div class="character">JASON DUVAL</div>
              <div class="character">LUCIA CAMINOS</div>
              <div class="character">CAL HAMPTON</div>
              <div class="character">BOOBIE IKE</div>
              <div class="character">DRE'QUAN PRIEST</div>
              <div class="character">REAL DIMEZ</div>
              <div class="character">RAUL BAUTISTA</div>
              <div class="character">BRIAN HEDER</div>
            </div>
          </div>
        </div>
      `;

      document.body.appendChild(menuContainer);
    }

    gsap.set(menuContainer, {
      autoAlpha: 0,
      x: "100%",
    });

    const menuLines = document.querySelectorAll(".g0abma6");

    const handleMenuClick = () => {
      setMenuOpen((prevState) => !prevState);
    };

    if (menuBtn) {
      menuBtn.addEventListener("click", handleMenuClick);
    }

    const closeBtn = document.querySelector(".menu-close-btn");
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
