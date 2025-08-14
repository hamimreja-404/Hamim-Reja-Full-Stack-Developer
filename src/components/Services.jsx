import React from "react";
import { websitePackages } from "../data/services";
export default function Services() {
  return (
    <>
      <section className="services section" id="services">
        <span className="section__subtitle" data-aos="fade-up">Services I Provide</span>
        <h2 className="section__title" data-aos="fade-up">Web Solutions Tailored for You</h2>

        <div className="services__container container">
          <div className="services__grid">
            <div className="service__card" data-aos="zoom-in">
              <i className="bx bx-code-alt service__icon"></i>
              <h3 className="service__title">Web Development</h3>
              <p className="service__description">
                Custom-built websites using modern stacks (React, Node, MongoDB)
                that are responsive, fast, and scalable.
              </p>
              <a
                href="https://wa.me/919382426273?text=Hi%20Hamim%2C%20I%20want%20Web%20Development%20service."
                target="_blank"
                className="button whatsapp__button"
              >
                Contact Now
              </a>
            </div>

            <div className="service__card" data-aos="zoom-in">
              <i className="bx bx-refresh service__icon"></i>
              <h3 className="service__title">Website Maintenance</h3>
              <p className="service__description">
                Keep your website updated, secure, and performing at its best
                with regular backups and content edits.
              </p>
              <a
                href="https://wa.me/919382426273?text=Hi%20Hamim%2C%20I%20want%20Website%20Maintenance%20service."
                target="_blank"
                className="button whatsapp__button"
              >
                Contact Now
              </a>
            </div>

            <div className="service__card" data-aos="zoom-in">
              <i className="bx bx-revision service__icon"></i>
              <h3 className="service__title">Website Redesign</h3>
              <p className="service__description">
                Give your outdated website a fresh, modern look with improved
                UI/UX and optimized performance.
              </p>
              <a
                href="https://wa.me/919382426273?text=Hi%20Hamim%2C%20I%20want%20Website%20Redesign%20service."
                target="_blank"
                className="button whatsapp__button"
              >
                Contact Now
              </a>
            </div>
          </div>
        </div>
      </section>
     
    </>
  );
}
