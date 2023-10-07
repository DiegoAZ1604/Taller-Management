import React, { useState } from "react";
import { Authenticate } from "../autenticacion";
import "../styles/login.css";
import { Link, useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const user = Authenticate(username, password);

    if (user) {
      console.log('Autenticacion exitosa:', user.username);
      navigate('/reparaciones');
    } else {
      window.alert('Credenciales invalidas');
    }
  };

  return (
    <section>
      <div className="login-container">
        <div className="logo-container">
          <img src="/imagenes/logo.png" id="Logo" alt="Logo" />
        </div>
        <h2>Bienvenidos a AutoGenius</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            id="usuario"
            placeholder="Usuario"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
          <input
            type="password"
            id="contrasena"
            placeholder="Contraseña"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button type="submit" id="login-button">
            Iniciar Sesión
          </button>
        </form>
        <h3>
          Eres nuevo? <Link to="/registrar">Crea una cuenta</Link>
        </h3>
      </div>
    </section>
  );
}

export default Login;
