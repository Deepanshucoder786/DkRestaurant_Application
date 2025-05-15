import React, { useState } from "react";
import { Link } from "react-scroll"; // import Link from react-scroll
import { GiHamburgerMenu } from "react-icons/gi";
import { data } from "../restApi.json";

const Navbar = () => {
  const [show, setShow] = useState(false);

  return (
    <nav>
      <div className="logo">Food</div>
      <div className={show ? "navLinks showmenu" : "navLinks"}>
        <div className="links">
          {data[0].navbarLinks.map((element) => {
            return (
              <Link
                key={element.id}
                to={element.link} // to link to the section by ID
                spy={true}         // enable scroll spying to add an active class to the nav link
                smooth={true}      // enable smooth scrolling
                duration={500}     // scrolling duration (in ms)
                offset={-70}       // optional: adjust for fixed navbar height
              >
                {element.title}
              </Link>
            );
          })}
        </div>
        <button className="menuBtn">OUR MENU</button>
      </div>
      <div className="hamburger" onClick={() => setShow(!show)}>
        <GiHamburgerMenu />
      </div>
    </nav>
  );
};

export default Navbar;
