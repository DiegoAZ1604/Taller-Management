import React from "react";
import SidebarC from "./sidebar";
import "../styles/clientes.css";

function Clientes(){
    return(
        <div className="content-container">
            <div className="sidebar-container">
                <SidebarC />
            </div>

            <div className="clientes-container">
                <h3>Registrar un Cliente:</h3>
                <form id="ingresar-clientes-form">
                    <input type="text" placeholder="Nombre" required />
                    <input type="number" placeholder="Número de teléfono" />
                    <input type="text" placeholder="Correo Electrónico" />
                </form>
                <button id="enviar" type="button">Enviar</button>
            </div>

    
            <div className="tabla-clientes-container">
                <h3>Registro de Clientes:</h3>
                <table className="table">
                    <thead>
                        <tr>
                        <th><b>Nombre</b></th>
                        <th><b>Número de teléfono</b></th>
                        <th><b>Correo Electrónico</b></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                        <td>Diego Fuentes</td>
                        <td>63053058</td>
                        <td>diegofuentesa41@icloud.com</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default Clientes;