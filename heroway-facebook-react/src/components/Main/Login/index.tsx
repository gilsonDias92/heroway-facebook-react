import React from "react";
import "./style.css";
import { useHistory } from "react-router-dom";

function Login() {
  const [inputValue, setInputValue] = React.useState("");

  function handleChange(event) {
    setInputValue(event.target.value);
  }

  function handleClick(){
    console.log(inputValue);
  }

  return (
    <div className="login">
      <div className="login-box">
        <input
          className="github-input"
          type="text"
          placeholder="Digite seu usuário do Github"
          onChange={handleChange}
        />
        <button className="github-button" onClick={handleClick}>
          Enviar
        </button>
      </div>
    </div>
  );
}

export default Login;
