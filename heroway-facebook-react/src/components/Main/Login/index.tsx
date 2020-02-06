import React from 'react';
import './style.css';

function Login() {
  return (
    <div className="login">
    <div className="login-box">
      <input className="github-input" 
        type="text" 
        placeholder="Digite seu usuário do Github" />
      <button className="github-button">Enviar</button>
    </div>
  </div>
  );
}

export default Login;