import React, { Component } from "react";
import "../content/css/ComprasStylo.css";
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
          <div className="flexcenter createButtonBox">
            <div className="flexcenter">
              <ion-icon name="add-outline"></ion-icon>
            </div>
            <div className="flexcenter">
              <p>Registrar Compra</p>
            </div>
          </div>
          <select name="empresas" id="empresas">
            <option value="Torque-G46">Torque-G46</option>
            <option value="Irontools">Irontools</option>
          </select>
        </div>
      </section>
    </div>
    )
  }
}
