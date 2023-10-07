import React, {useState} from "react";
import { Link } from "react-router-dom";
import "../styles/login.css"

function Register(){
    const [name, setName] = useState('');
    const [LastName, setLastName] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [successMessage, setSuccessMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        setSuccessMessage("Usuario creado con éxito");  
    };

    return(
        <section>
            <div className="registro-container">
                <div className="logo-container">
                    <img src="/imagenes/logo.png" id="Logo" alt="Logo" />
                </div>
                
                <h2>Registrar Usuario</h2>
                <form onSubmit={handleSubmit}>

                    <input type="text" id="name" placeholder="Nombre" value={name}
                    onChange={(e) => setName(e.target.value)} required />

                    <input type="text" id="lastName" placeholder="Apellido" value={LastName}
                    onChange={(e) => setLastName(e.target.value)} required />

                    <input type="text" id="username" placeholder="Nombre de Usuario" value={username}
                    onChange={(e) => setUsername(e.target.value)} required />

                    <input type="password" id="contrasena" placeholder="Contraseña" value={password}
                    onChange={(e) => setPassword(e.target.value)} required />

                    <button type="submit" id="register-button">Registrar</button>

                </form>
                {successMessage && <p className="success-message">{successMessage}</p>}
                <h3>Ya tienes una cuenta? <Link to="/">Inicia Sesión</Link></h3>
            </div>
        </section>
    );
}

export default Register;