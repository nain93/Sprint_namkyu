import React from "react";
import "./Nav.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

function Nav() {
  const [navClick, setNavClick] = useState(false);

  const handleNavClick = () => {
    if (navClick) {
      setNavClick(false);
    } else {
      setNavClick(true);
    }
  };
  return (
    <div className="topnav">
      <div>
        <Link to="/">Home</Link>
        <div className={navClick ? "show" : "hide"}>
          <Link to="/problem1">problem1</Link>
          <Link to="problem2">problem2</Link>
        </div>
      </div>
      <button onClick={handleNavClick} className="icon">
        <FontAwesomeIcon icon={faBars} />
      </button>
    </div>
  );
}

export default Nav;
