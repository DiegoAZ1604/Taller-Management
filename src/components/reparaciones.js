import React from "react";
import "../styles/reparaciones.css";
import SidebarC from "./sidebar";

function Reparaciones() {
    return (
        <div className="content-container">
            <div className="sidebar-container">
                <SidebarC />
            </div>
            
            <div className="reparaciones-container">
                <h3>Registrar una Reparación</h3>
                <form id="ingresar-reparaciones-form">
                    <div className="vehiculo-dropdown">
                        <label htmlFor="vehiculo-a-reparar">Seleccione el vehiculo a reparar: </label>
                        <select name="vehiculo-a-reparar" id="vehiculo-a-reparar">
                            <option value="" defaultChecked>Seleccione...</option>
                            <option value={"Vehiculo 1"}>Vehiculo 1</option>
                        </select>
                    </div>
                    <input type="text" id="descripcion-input" placeholder="Descripción del Problema" required />
                    <input type="text" placeholder="Repuestos Utilizados" required />
                    <input type="number" placeholder="Tiempo Empleado (horas)" required />
                    <input type="number" placeholder="Costo Estimado ($)" required />
                    <input type="text" placeholder="Notas Adicionales" />
                </form>
                <button id="enviar" type="button">Enviar</button>
                <div className="tabla-reparaciones-container">
                    <h3>Registro de Reparaciones:</h3>
                    <table className="table">
                        <tr>
                            <th><b>Descripción</b></th>
                            <th><b>Nombre del Dueño</b></th>
                            <th><b>Número de Placa</b></th>
                            <th><b>Repuestos Utilizados</b></th>
                            <th><b>Tiempo Empleado (horas)</b></th>
                            <th><b>Costo ($)</b></th>
                            <th><b>Costo Total ($)</b></th>
                            <th><b>Notas Adicionales</b></th>
                        </tr>
                        <tr>
                            <td>Cambio de Aceite</td>
                            <td>Diego Fuentes</td>
                            <td>P601502</td>
                            <td>Aceite, filtro de aceite</td>
                            <td>1.5</td>
                            <td>56.00</td>
                            <td>60.00</td>
                            <td>Entregar lunes</td>
                        </tr>
                    </table>
                </div>
            </div>
        </div>
    );
}

export default Reparaciones;
