import React from 'react'

export default function Footer() {
  return (
    <>
         <footer class="footer" data-aos="fade-up">
        <div class="footer__container container">
            <h1 class="footer__title">Hamim Reja</h1>

            <ul class="footer__list">

                <li class="footer__item">
                    <a href="#" class="footer__link">Home</a>
                </li>
                <li class="footer__item">
                    <a href="#about" class="footer__link">About</a>
                </li>
                <li class="footer__item">
                    <a href="#skills" class="footer__link">Skills</a>
                </li>
                <li class="footer__item">
                    <a href="#work" class="footer__link">Work</a>
                </li>

            </ul>

            <ul class="footer__social">

                <li class="footer__social-item">
                    <a href="https://github.com/hamimreja-404" target="_blank" class="footer__social-link">
                        <i class='bx bxl-github footer__social-icon'></i>
                    </a>
                </li>
                <li class="footer__social-item">
                    <a href="https://www.linkedin.com/in/hamim-reja-a2ba42279" target="_blank"
                        class="footer__social-link">
                        <i class='bx bxl-linkedin footer__social-icon'></i>
                    </a>
                </li>
                <li class="footer__social-item">
                    <a href="https://www.instagram.com/hamim__reja/" target="_blank" class="footer__social-link">
                        <i class='bx bxl-instagram footer__social-icon'></i>
                    </a>
                </li>
            </ul>


        </div>
    </footer>
    </>
  )
}
