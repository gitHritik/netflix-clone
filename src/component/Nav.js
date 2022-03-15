import React, { useState, useEffect } from "react";
import "./Nav.css";
import logo from "./images/logo.png";
import logo1 from "./images/logo2.png";

function Nav() {
  const [show, handleShow] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        handleShow(true);
      } else handleShow(false);
    });
    return () => {
      window.removeEventListener("scroll");
    };
  }, []);

  return (
    <div className={`nav ${show && "nav__black"}`}>
      <img className="nav__logo" src={logo} alt="Netflix Clone" />
      <img className="nav__avatar" src={logo1} alt="Netflix Clone" />
    </div>
  );
}

export default Nav;
