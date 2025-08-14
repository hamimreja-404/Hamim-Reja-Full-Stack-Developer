import React from 'react';
import pic from '../asset/img/about.jpg'
export default function About() {
  return (
    <>
      <section className="about section" id="about" >
        <span className="section__subtitle" data-aos="fade-up">Who I Am</span>
        <h2 className="section__title" data-aos="fade-up">About Me</h2>

        <div className="about__container container grid">
          <img src= {pic} alt="About" className="about__img" data-aos="fade-right" />

          <div className="about__data" data-aos="fade-left">
            <div className="about__info">
              <div className="about__box">
                <i className='bx bx-code about__icon'></i>
                <h3 className="about__title">Web Expertise</h3>
                <span className="about__subtitle">Full-Stack MERN Developer</span>
              </div>

              <div className="about__box">
                <i className='bx bx-briefcase-alt about__icon'></i>
                <h3 className="about__title">Freelance Projects</h3>
                <span className="about__subtitle">3+ Completed Projects</span>
              </div>

              <div className="about__box">
                <i className='bx bx-globe about__icon'></i>
                <h3 className="about__title">Clients</h3>
                <span className="about__subtitle">Local & Remote</span>
              </div>
            </div>

            <p className="about__description">
              I'm Hamim Reja — a freelance full-stack developer passionate about building impactful,
              user-friendly websites. I specialize in modern web technologies like React, Node.js, Express,
              and MongoDB (MERN stack), and I enjoy helping businesses go digital with clean, responsive
              design.
              <br /><br />
              Whether you're looking to build a landing page, a full-stack web app, or give your existing site
              a fresh new look — I can help turn your vision into reality.
            </p>

            <a href="#services" className="button about__button-contact">View My Services</a>
          </div>
        </div>
      </section>
    </>
  );
}
