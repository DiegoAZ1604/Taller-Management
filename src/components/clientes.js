import React from "react";
import { Link } from "react-router-dom";

function Clientes(){
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

            <div class="clientes-container">
                <h3>Registrar un Cliente:</h3>
                <form id="ingresar-clientes-form">
                    <input type="text" placeholder="Nombre" required />
                    <input type="number" placeholder="Número de teléfono" />
                    <input type="text" placeholder="Correo Electrónico" />
                </form>
                <button id="enviar" type="button">Enviar</button>
            </div>

    
            <div class="tabla-clientes-container">
                <h3>Registro de Clientes:</h3>
                <table class="table">
                    <tr>
                        <th><b>Nombre</b></th>
                        <th><b>Número de teléfono</b></th>
                        <th><b>Correo Electrónico</b></th>
                    </tr>
                    <tr>
                        <td>Diego Fuentes</td>
                        <td>63053058</td>
                        <td>diegofuentesa41@icloud.com</td>
                    </tr>
                </table>
            </div>
        </div>
    );
}

export default Clientes;