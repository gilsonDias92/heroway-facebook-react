import React from "react";
import logo from "./assets/facebook-logo.svg";
import { useHistory } from "react-router-dom";

function Header() {
  
  let history = useHistory();
  function handleClick() {
    history.push("/login");
  }
  
  return (
    <header className="header">
      <div className="logo">
        <button className="btn-logo" onClick={handleClick}>
          <img src={logo} alt="Facebook Logo" />
        </button>
      </div>
    </header>
  );
}

export default Header;
