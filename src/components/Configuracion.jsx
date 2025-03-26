import React, { Component } from "react";
import { Link, Routes, Route } from "react-router-dom";
import {
  Cuenta,
  Personalizacion,
  Seguridad,
  UnidadesMedida,
} from "./Componentes";
import "../content/css/Configuracion.css";

export default class Configuracion extends Component {
  render() {
    return (
      <div className="ConfiguracionBox">
        <section className="configbox">
          <ul>
            <li className="listconfig">
              <Link className="configLink" to="/sce/configuracion/cuenta">
                <p>Perfil y Cuenta</p>
                <ion-icon name="chevron-forward-outline"></ion-icon>
              </Link>
            </li>
            <li className="listconfig">
              <Link
                to="/sce/configuracion/personalizacion"
                className="configLink"
              >
                <p>Personalización</p>
                <ion-icon name="chevron-forward-outline"></ion-icon>
              </Link>
            </li>
            <li className="listconfig">
              <Link
                to="/sce/configuracion/unidadesMedida"
                className="configLink"
              >
                <p>Unidades de Medida</p>
                <ion-icon name="chevron-forward-outline"></ion-icon>
              </Link>
            </li>
            <li className="listconfig">
              <Link to="/sce/configuracion/seguridad" className="configLink">
                <p>Seguridad</p>
                <ion-icon name="chevron-forward-outline"></ion-icon>
              </Link>
            </li>
          </ul>
        </section>

        <section className="configboxInfo">
          <Routes>
            <Route path="cuenta" element={<Cuenta />} />
            <Route path="personalizacion" element={<Personalizacion />} />
            <Route path="seguridad" element={<Seguridad />} />
            <Route path="unidadesMedida" element={<UnidadesMedida />} />
          </Routes>
        </section>
      </div>
    );
  }
}
