import { useState, useEffect } from "react";
import "./css/main_.css";
import Navbar from "./components/Navbar.jsx";
import Home from "./components/Home.jsx";
import About from "./components/About.jsx";
import Skills from "./components/Skills.jsx";
import Services from "./components/Services.jsx";
import Work from "./components/Work.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";
import Plans from "./components/Plans.jsx";
import AOS from "aos";
import Testimonials from "./components/Testimonials.jsx";
import Form from "./components/Form.jsx";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: false,
      offset: 100,
    });
  }, []);

  return (
    <Router>
      <Navbar />
      <Routes>
        {/* Main homepage */}
        <Route
          path="/"
          element={
            <>
              <Home />
              <About />
              {/* <Skills /> */}
              <Services />
              <Plans />
              <Work />
              <Testimonials />
              <Contact />
              {/* <Footer /> */}
            </>
          }
        />

        {/* Review form page */}
        <Route path="/review" element={<Form />} />
      </Routes>
    </Router>
  );
}

export default App;
