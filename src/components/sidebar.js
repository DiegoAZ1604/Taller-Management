import React from "react";
import { Link } from 'react-router-dom';
import "../styles/sidebar.css";

function SidebarC() {
    return (
        <div className="sidebar-container">
            <div className="sidebar">
                <div className="logo-container">
                    <img src="/imagenes/logo.png" id="Logo" alt="Logo" />
                </div>
                
                <Link to="/reparaciones" className="nav-button">Reparaciones</Link>
                <Link to="/repuestos" className="nav-button">Repuestos</Link>
                <Link to="/vehiculos" className="nav-button">Vehiculos</Link>
                <Link to="/clientes" className="nav-button">Clientes</Link>
                <Link to="/" className="nav-button">Salir</Link>
            </div>
        </div>
    );
}

export default SidebarC;
