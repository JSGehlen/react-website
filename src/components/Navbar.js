import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import { Button } from "./Button";
import { IconContext } from "react-icons/lib";

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);
  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  window.addEventListener("resize", showButton);

  useEffect(() => {
    showButton();
  }, []);

  return (
    <>
      <IconContext.Provider value={{ color: "#fff" }}>
        <div className="navbar">
          <div className="navbar__container container">
            <Link to="/" className="navbar--logo" onClick={closeMobileMenu}>

              StreamerCred
            </Link>
            <div className="menu-icon" onClick={handleClick}>
              {click ? <FaTimes /> : <FaBars />}
            </div>
            <ul className={click ? "navbar__menu active" : "navbar__menu"}>
              <li className="navbar__menu--item">
                <Link
                  to="/"
                  className="navbar--links"
                  onClick={closeMobileMenu}
                >
                  Home
                </Link>
              </li>
              <li className="navbar__menu--item">
                <Link
                  to="/services"
                  className="navbar--links"
                  onClick={closeMobileMenu}
                >
                  Services
                </Link>
              </li>
              <li className="navbar__menu--item">
                <Link
                  to="/plans"
                  className="navbar--links"
                  onClick={closeMobileMenu}
                >
                  Plans
                </Link>
              </li>
              <li className="navbar--btn">
                {button ? (
                  <Link to="/sign-up" className="btn-link">
                    <Button buttonStyle="btn--outline">SIGN UP</Button>
                  </Link>
                ) : (
                  <Link
                    to="/sign-up"
                    className="btn-link"
                    onClick={closeMobileMenu}
                  >
                    <Button buttonStyle="btn--outline" buttonSize="btn--mobile">
                      SIGN UP
                    </Button>
                  </Link>
                )}
              </li>
            </ul>
          </div>
        </div>
      </IconContext.Provider>
    </>
  );
}
export default Navbar;
