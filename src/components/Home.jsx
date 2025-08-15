import React from "react";
import pic from '../asset/img/Profile.png'
import scroll from '/public/mouse-scroll.png'
import linkedin from '/public/linkedin.png'
import instagram from '/public/instagram.png'
import github from '/public/github.png'
export default function Home() {
  return (
    <>
      <section className="home section" id="home" >
        <div className="home__container container grid">
          <div className="home__social moved-social" data-aos="fade-right">
            <a
              href="https://www.linkedin.com/in/hamim-reja-a2ba42279"
              className="home__social-link"
              target="_blank"
            >
             <img className="bx ICON_" src={linkedin} alt="" />
            </a>
            <a
              href="https://github.com/hamimreja-404"
              className="home__social-link"
              target="_blank"
            >
              <img className="bx ICON_" src={github} alt="" />
            </a>
            <a
              href="https://www.instagram.com/hamim__reja/"
              className="home__social-link"
              target="_blank"
            >
              <img className="bx ICON_" src={instagram} alt="" />
            </a>
          </div>

          <div className="home__data lifted-text" data-aos="fade-up">
            <span className="home__greeting">Hello, I'm</span>
            <h1 className="home__name">Hamim Reja</h1>
            <h3 className="home__education">Freelance Web Developer</h3>
            <p className="home__description">
              I help businesses and individuals build fast, modern,
              <br />
              and scalable websites using the latest web technologies.
            </p>
            <div className="home__button">
              <a
                href="#contact"
                className="button button--ghost"
              >
                Hire Me
              </a>
              <a href="#about" className="button">
                About
              </a>
            </div>
          </div>

          <div className="home__handle raised-photo" data-aos="fade-up">
            <img src= {pic} alt="Hamim Photo" className="home__img" />
          </div>

          <a href="#about" className="home__scroll ">
             <img className="bx ICON_Navbar" src={scroll} alt="" />
            <span className="home__scroll-name">Scroll Down</span>
          </a>
        </div>
      </section>
    </>
  );
}
