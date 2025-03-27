import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class CotizadorPanel extends Component {
  render() {
    return (
      <div className="CotizadorPanel">
        <div className="CotizacionPanelbox">
          <div className="titleCotizacion">
            <p className="cwhite panelTitle">Cotizar:</p>
          </div>
          <div className="EmpresaItembox">
            <div className="flexbox tagnamebox">
              <ion-icon name="pricetags"></ion-icon>
              <p>TORQUE-G46</p>
            </div>
            <ul className="liItemCashbox">
              <li >
                <Link to={"/cotizador/soles"} className="flexbox liItemCash">
                <div className="flexbox"><p className="pleft">S/.</p>
                <p>Soles</p></div>
                <ion-icon name="chevron-forward"></ion-icon>
                </Link>
              </li>

              <li>
                <Link to={"/cotizador/dolares"} className="flexbox liItemCash">
              <div className="flexbox"><p className="pleft">$.</p>
                <p>Dólares</p>
                </div>
                <ion-icon name="chevron-forward"></ion-icon>
                </Link>
              </li>
              
            </ul>
          </div>

          <div className="EmpresaItembox">
            <div className="flexbox tagnamebox">
              <ion-icon name="pricetags"></ion-icon>
              <p>IRONTOOLS</p>
            </div>
            <ul className=" liItemCashbox">
              <li className="flexbox liItemCash">
              <div className="flexbox"><p className="pleft">S/.</p>
              <p>Soles</p></div>
                <ion-icon name="chevron-forward"></ion-icon>
              </li>{" "}
              <li className="flexbox liItemCash">

              <div className="flexbox"><p className="pleft">$.</p>
                <p>Dólares</p>
                </div>
                <ion-icon name="chevron-forward"></ion-icon>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}
