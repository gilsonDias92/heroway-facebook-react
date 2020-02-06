import React from "react";
import "./style.css";
import logo from "./assets/facebook-logo.svg";

function Header() {
  return (
    <header className="header">
      <div className="logo">
        <img src={logo} alt="Facebook Logo" />
      </div>
    </header>
  );
}

export default Header;
