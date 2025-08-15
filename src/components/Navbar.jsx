
import React, { useEffect, useState } from "react";
import home from '/public/home.png'
import about from '/public/user.png'

import projects from '/public/code-editing.png'
import services from '/public/it-alt.png'
import contact from '/public/phone-plus.png'
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
        rootMargin:  "0px",
        threshold: 0.6, // 60% visible = active
      }
    );

    sections.forEach((section) => {
      observer.observe(section);
    });

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, [document.querySelectorAll("section[id]").length]);

  return (
    <header className="header" id="header">
      <div className="nav__bottom">
        <a
          href="#home"
          className={`nav__bottom-link ${activeSection === "home" ? "active-link" : ""}`}
        >

          <img className="bx ICON_Navbar" src={home} alt="" />
        </a>
        <a
          href="#about"
          className={`nav__bottom-link ${activeSection === "about" ? "active-link" : ""}`}
        >
          <img className="bx ICON_Navbar" src={about} alt="" />
        </a>
        {/* <a
          href="#skills"
          className={`nav__bottom-link ${activeSection === "skills" ? "active-link" : ""}`}
        >
          <i className="bx bx-code-alt"></i>
        </a> */}
        <a
          href="#services"
          className={`nav__bottom-link ${activeSection === "services" ? "active-link" : ""}`}
        >
          <img className="bx ICON_Navbar" src={services} alt="" />
        </a>
        {/* <a
          href="#pricing"
          className={`nav__bottom-link ${activeSection === "pricing" ? "active-link" : ""}`}
        >
          <img className="bx ICON_Navbar" src={price} alt="" />
        </a> */}
        <a
          href="#work"
          className={`nav__bottom-link ${activeSection === "work" ? "active-link" : ""}`}
        >
          <img className="bx ICON_Navbar" src={projects} alt="" />
        </a>
        <a
          href="#contact"
          className={`nav__bottom-link ${activeSection === "contact" ? "active-link" : ""}`}
        >
          <img className="bx ICON_Navbar" src={contact} alt="" />
        </a>
      </div>
    </header>
  );
}
