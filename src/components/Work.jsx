import React from "react";
import Project from "./project.jsx";

export default function Work() {
  return (
    <>
      <section class="work section" id="work">
        <span class="section__subtitle" data-aos="fade-up">My Portfolio</span>
        <h2 class="section__title" data-aos="fade-up">Projects</h2>

        <div class="work__container container grid md-10" data-aos="zoom-in">
          <Project />
        </div>
      </section>
    </>
  );
}
