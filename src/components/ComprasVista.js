import React, { Component } from "react";
import "../content/css/ComprasStylo.css";

import { ComprasCrear, ComprasLista } from "./Componentes";
import { Routes, Route,Link } from "react-router-dom";
// import { Link } from "react-router-dom";

export default class Compras extends Component {
  render() {
    return (
      <div className="ComprasBox">
      {/* <p>ventas</p> */}
      <section className="flexbox topListCompras">
        <div className="flexbox boxbottontop">
          <div className="flexcenter bottonitem">
            <ion-icon name="podium-outline"></ion-icon>
          </div>
          <div className="flexcenter bottonitem">
            <ion-icon name="list-outline"></ion-icon>
          </div>
          <div className="flexcenter bottonitem">
            <ion-icon name="refresh-outline"></ion-icon>
          </div>
        </div>
        <div>
          <p className=" titleboxCompras">10 resultados - 50 listados</p>
        </div>
        <div className="flexbox optionmenubox">
          <Link to={"crear"} className="flexcenter createButtonBox">
            <div className="flexcenter">
              <ion-icon name="add-outline"></ion-icon>
            </div>
            <div className="flexcenter">
              <p>Registrar Compra</p>
            </div>
          </Link>
          <select name="empresas" id="empresas">
            <option value="Torque-G46">Torque-G46</option>
            <option value="Irontools">Irontools</option>
          </select>
        </div>
      </section>
      
        <Routes>
          <Route path="/" element={<ComprasLista />} />
          <Route path="crear" element={<ComprasCrear />} />
        </Routes>

      <section>
      
      </section>
    </div>
    )
  }
}
