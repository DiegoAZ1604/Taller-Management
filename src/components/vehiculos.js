import React from "react";
import { Link } from "react-router-dom";

function Vehiculos(){
    return(
        <div className="content-container">
            <div className="sidebar-container">
                <div className="sidebar">
                    <div className="logo-container">
                        {/*imagen*/}
                    </div>
                    <Link to="/reparaciones" className="nav-button">Reparaciones</Link>
                    <Link to="/repuestos" className="nav-button">Repuestos</Link>
                    <Link to="/vehiculos" className="nav-button">Vehiculos</Link>
                    <Link to="/clientes" className="nav-button">Clientes</Link>
                    <Link to="/" className="nav-button">Salir</Link>
                </div>
            </div>

            <div class="vehiculos-container">
                <h3>Registrar un nuevo vehiculo:</h3>
                <form id="vehiculos-form">
                    <input type="text" placeholder="Nombre del dueño" required />
                    <input type="text" placeholder="Número de placa" required />
                    <input type="text" placeholder="Marca" required />
                    <input type="text" placeholder="Modelo" required />
                    <input type="number" placeholder="Año" required />
                </form>
                <button id="enviar" type="button">Enviar</button>
            </div>

            <div class="tabla-vehiculos-container">
                <h3>Registro de Vehiculos:</h3>
                <table class="table">
                    <tr>
                        <th><b>Nombre del Dueño</b></th>
                        <th><b>Número de Placa</b></th>
                        <th><b>Marca</b></th>
                        <th><b>Modelo</b></th>
                        <th><b>Año</b></th>
                    </tr>
                    <tr>
                        <td>Diego Fuentes</td>
                        <td>P601502</td>
                        <td>Nissan</td>
                        <td>Altima SR V6</td>
                        <td>2012</td>
                    </tr>
                </table>
            </div>
        </div>
    );
}

export default Vehiculos;