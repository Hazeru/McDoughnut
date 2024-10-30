import React, { useState } from "react"; 
import { data } from "../restApi.json";
import { Link } from "react-scroll";
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = () => {
  const [show, setShow] = useState(false);
  return (
    <>
      <nav>
        <div className="logo">
          <img src="donut.gif" alt="Donut" className="footer-logo" />
          </div>

          <div className="logotext">
          <img src="/navbar/mc2.png" alt="McDoughnut Logo" />
        </div>

        <div className={show ? "navLinks showmenu" : "navLinks"}>
          <div className="links">
            {data[0].navbarLinks.map((element) => (
              <Link
                to={element.link}
                spy={true}
                smooth={true}
                duration={500}
                key={element.id}>
                
                {element.title}
              </Link>
            ))}
          </div>
        </div>

        <button className="menuBtn">OUR MENU</button>

        <div className="hamburger" onClick={() => setShow(!show)}>
          <GiHamburgerMenu />
        </div>
        
      </nav>
    </>
  );
};

export default Navbar;
