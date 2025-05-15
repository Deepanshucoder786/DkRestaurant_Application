import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles
import { Link } from "react-scroll";

const About = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });  // Initialize AOS with duration and animation triggered once
  }, []);

  return (
    <section className="about" id="about">
      <div className="container">
        <div className="banner" data-aos="fade-up">
          <div className="top">
            <h1 className="heading">ABOUT US</h1>
            <p>The only thing we're serious about is food.</p>
          </div>
          <p className="mid" data-aos="fade-left">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit...
          </p>
          <Link to="menu" smooth={true} duration={500}>
            Explore Menu
          </Link>
        </div>
        <div className="banner" data-aos="fade-right">
          <img src="about.png" alt="about" />
        </div>
      </div>
    </section>
  );
};

export default About;
