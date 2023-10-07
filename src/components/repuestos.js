import React from "react";
import SidebarC from "./sidebar";
import "../styles/repuestos.css";

function Repuestos() {
    return (
        <div className="content-container">
            <div className="sidebar-container">
                <SidebarC />
            </div>

            <div className="ingresar-repuestos-container">
                <h3>Registrar un nuevo repuesto:</h3>
                <form id="ingresar-repuestos-form">
                    <label htmlFor="repuestos-dropdown1">Seleccione un tipo de repuesto: </label>
                    <select name="repuestos-dropdown1" id="repuestos-dropdown1">
                        <option value="" defaultChecked>Seleccione...</option>
                        <option value="repuestos-basicos">Repuestos Básicos</option>
                        <option value="sistema-electrico">Sistema Eléctrico</option>
                        <option value="sistema-endendido">Sistema de Encendido</option>
                        <option value="sistema-frenos">Sistema de Frenos</option>
                        <option value="sistema-suspension">Sistema de Suspensión</option>
                        <option value="sistema-motor">Sistema Motor</option>
                    </select>
                    <input type="text" id="nombre-pieza" placeholder="Nombre de la Pieza" required />
                    <input type="number" id="cantidad" placeholder="Cantidad" required />
                    <input type="number" id="precio-individual" placeholder="Precio individual" required />
                </form>
                <button id="enviar" type="button">Enviar</button>
            </div>

            <div className="tabla-repuestos-container">
            <h3>Inventario de Repuestos:</h3>
            <form id="repuestos-form">
                <label for="repuestos-dropdown">Repuestos:</label>
                <select name="repuestos-dropdown" id="repuestos-dropdown">
                    <option value="" disabled selected>Seleccione...</option>
                    <option value="repuestos-basicos">Repuestos Básicos</option>
                    <option value="sistema-electrico">Sistema Eléctrico</option>
                    <option value="sistema-endendido">Sistema de Encendido</option>
                    <option value="sistema-frenos">Sistema de Frenos</option>
                    <option value="sistema-suspension">Sistema de Suspensión</option>
                    <option value="sistema-motor">Sistema Motor</option>
                </select>
            </form>
            <table className="table">
                <tr>
                    <th><b>Grupo del Repuesto</b></th>
                    <th><b>Nombre de Pieza</b></th>
                    <th><b>Cantidad</b></th>
                </tr>
                <tr>
                    <td>Repuestos Básicos</td>
                    <td>Filtro de Aceite</td>
                    <td>4</td>
                </tr>
                <tr>
                    <td>Repuestos Básicos</td>
                    <td>Correa Distribución</td>
                    <td>5</td>
                </tr>
            </table>
            </div>
        </div>
    );
}

export default Repuestos;
