import React from "react";
import laptop from "../asset/img/laptop.png";
import mobile from "../asset/img/Mobile.png";
import { ProjectList } from "../data/Project";

export default function Project() {
  return (
    <>
      {ProjectList.map((p, index) => (
        <div  key={index} class="work__card mix web ">
          <div  className="project_Box ">
            {/* Laptop */}
            <div className="innerBOX">
              <img src={laptop} className="lap" alt="Laptop Frame" />
              <img src={p.laptopImage} className="lap-screen" alt="Laptop Screen" />
            </div>

            {/* Mobile */}
            <div className="innerBOX">
              <img src={mobile} className="mob" alt="Mobile Frame" />
              <img src={p.mobileImage} className="mob-screen" alt="Mobile Screen" />
            </div>
          </div>

          <h3 className="work__title">{p.title}</h3>
          <a
            href={p.demoLink}
            className="work__button"
            target="_blank"
            rel="noopener noreferrer"
          >
            Demo <i className="bx bx-right-arrow work__icon"></i>
          </a>
        </div>
      ))}
    </>
  );
}
