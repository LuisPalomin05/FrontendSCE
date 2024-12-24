import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class SolesIrontools extends Component {
    constructor(props) {
        super(props);
        // Inicializar el estado con la fecha actual
        const hoy = new Date();
        const fechaActual =
            hoy.getFullYear() +
            "-" +
            String(hoy.getMonth() + 1).padStart(2, "0") +
            "-" +
            String(hoy.getDate()).padStart(2, "0");

        this.state = {
            fechaEmision: fechaActual,
        };
    }

    handleFechaChange = (event) => {
        this.setState({ fechaEmision: event.target.value });
    };

    render() {
        return (
            <div>
                <p>Torque</p>
                <div>
                <p>
                    <label htmlFor="cliente">Cliente</label>
                    <input type="text" name="cliente" id="cliente" required />
                    <p>+ Nuevo Cliente</p>
                </p>
                <p>
                    <label htmlFor="tipo_documento">Tipo Documento</label>
                    <select name="tipo_documento" id="tipo_documento">
                        <option value="boleta">Boleta</option>
                        <option value="factura">Factura</option>
                    </select>
                </p>
                <p>
                    <label htmlFor="serie">Serie</label>
                    <select name="serie" id="serie">
                        <option value="F001">F001</option>
                        <option value="T002">T002</option>
                    </select>
                </p>
                <p>
                    <label htmlFor="numero_serie">Número de Serie</label>
                    <input
                        type="text"
                        name="numero_serie"
                        id="numero_serie"
                        disabled
                    />
                </p>
                <p>
                    <label htmlFor="fecha_emision">Fecha Emisión</label>
                    <input
                        type="date"
                        name="fecha_emision"
                        id="fecha_emision"
                        value={this.state.fechaEmision}
                        onChange={this.handleFechaChange}
                    />
                </p>
                </div>
            </div>
        );
    }
}
