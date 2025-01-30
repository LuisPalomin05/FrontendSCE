import React, { Component } from "react";
import "../content/css/VentasStylo.css";
import {VentasCrear, VentasLista} from "./Componentes";
import { Link,Routes, Route,  } from "react-router-dom";

export default class Ventas extends Component {
  render() {
    return (
      <div className="VentasBox">
        {/* <p>ventas</p> */}
        <section className="flexbox topListVentas">
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
            <p className=" titleboxVentas">10 resultados - 50 listados</p>
          </div>
          <div className="flexbox optionmenubox">
            <div className="flexcenter createButtonBox">
              <div className="flexcenter">
                <ion-icon name="add-outline"></ion-icon>
              </div>
              <Link to="/ventas/crear">
                <div className="flexcenter">
                  <p>Nueva Venta</p>
                </div>
              </Link>
            </div>
            <select name="empresas" id="empresas">
              <option value="Torque-G46">Torque-G46</option>
              <option value="Irontools">Irontools</option>
            </select>
          </div>
        </section>

        <section>
          <Routes>
            <Route path="/ventas" element={<VentasLista />} />
            <Route path="crear" element={<VentasCrear />} />
          </Routes>
          
        </section>
      </div>
    );
  }
}
