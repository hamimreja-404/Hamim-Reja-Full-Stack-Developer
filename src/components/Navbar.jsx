
import React, { useEffect, useState } from "react";

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 0.6, // 60% visible = active
      }
    );

    sections.forEach((section) => {
      observer.observe(section);
    });

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  return (
    <header className="header" id="header">
      <div className="nav__bottom">
        <a
          href="#home"
          className={`nav__bottom-link ${activeSection === "home" ? "active-link" : ""}`}
        >
          <i className="bx bx-home-alt-2"></i>
        </a>
        <a
          href="#about"
          className={`nav__bottom-link ${activeSection === "about" ? "active-link" : ""}`}
        >
          <i className="bx bx-user"></i>
        </a>
        <a
          href="#skills"
          className={`nav__bottom-link ${activeSection === "skills" ? "active-link" : ""}`}
        >
          <i className="bx bx-code-alt"></i>
        </a>
        <a
          href="#services"
          className={`nav__bottom-link ${activeSection === "services" ? "active-link" : ""}`}
        >
          <i className="bx bx-cog"></i>
        </a>
        <a
          href="#work"
          className={`nav__bottom-link ${activeSection === "work" ? "active-link" : ""}`}
        >
          <i className="bx bx-briefcase"></i>
        </a>
        <a
          href="#contact"
          className={`nav__bottom-link ${activeSection === "contact" ? "active-link" : ""}`}
        >
          <i className="bx bx-envelope"></i>
        </a>
      </div>
    </header>
  );
}
