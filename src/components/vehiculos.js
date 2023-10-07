import React from "react";
import SidebarC from "./sidebar";
import "../styles/vehiculos.css";

function Vehiculos(){
    return(
        <div className="content-container">
            <div className="sidebar-container">
                <SidebarC />
            </div>

            <div className="vehiculos-container">
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

            <div className="tabla-vehiculos-container">
                <h3>Registro de Vehiculos:</h3>
                <table className="table">
                    <thead>
                        <tr>
                            <th><b>Nombre del Dueño</b></th>
                            <th><b>Número de Placa</b></th>
                            <th><b>Marca</b></th>
                            <th><b>Modelo</b></th>
                            <th><b>Año</b></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Diego Fuentes</td>
                            <td>P601502</td>
                            <td>Nissan</td>
                            <td>Altima SR V6</td>
                            <td>2012</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default Vehiculos;