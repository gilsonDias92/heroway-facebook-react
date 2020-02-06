import React from "react";
import "./style.css";
import { useHistory } from "react-router-dom";

function Login() {

  let history = useHistory();
  function handleClick() {
    history.push("/feed");
  }
  
  return (
    <div className="login">
      <div className="login-box">
        <input
          className="github-input"
          type="text"
          placeholder="Digite seu usuário do Github"
        />
        <button className="github-button" onClick={handleClick}>
          Enviar
        </button>
      </div>
    </div>
  );
}

export default Login;
