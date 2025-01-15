import React, { Component } from "react";
import CardBoxCash from "./CardBox";
// import { Link } from "react-router-dom";

export default class Dashboard extends Component {
  render() {
    return (
      <div className="DashBoardBox">
        <div className="flexbox barTopmenu">
          <div className="flexbox boxbottontop">
            <div className="flexcenter bottonitem" >
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
            <div className="flexcenter createButtonBox">
              <div className="flexcenter"><ion-icon name="add-outline"></ion-icon></div>
              <div className="flexcenter"><p>Agregar</p></div>
            </div>
          </div>
        </div>
        <div>
          <p>Contabilidad</p>
          <div className="CashDashboardPanel">
            <CardBoxCash
              tipo="Venta"
              icono="cash-outline"
              monto="S/. 1500"
              empresa="Torque-G46"
            />
            <CardBoxCash
              tipo="Compras"
              icono="cash-outline"
              monto="S/. 1500"
              empresa="Torque-G46"
            />
            <CardBoxCash
              tipo="Ventas"
              icono="cash-outline"
              monto="S/. 1500"
              empresa="Irontools"
            />
            <CardBoxCash
              tipo="Compras"
              icono="cash-outline"
              monto="S/. 1500"
              empresa="Irontools"
            />
          </div>
        </div>
      </div>
    );
  }
}
