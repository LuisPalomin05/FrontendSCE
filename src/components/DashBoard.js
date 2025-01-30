import React, { Component } from "react";
import CardBoxCash from "./CardBox";
import { Link } from "react-router-dom";

export default class Dashboard extends Component {
  render() {
    return (
      <div className="DashBoardBox">
        <div className="flexbox barTopmenu">
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
            <div className="flexcenter createButtonBox">
              <div className="flexcenter">
                <ion-icon name="add-outline"></ion-icon>
              </div>
              <div className="flexcenter">
                <p>Agregar</p>
              </div>
            </div>
          </div>
        </div>
        <div>
          <section>
          <p>Contabilidad</p>
          <div className="CashDashboardPanel">
            <Link to={"/Ventas"} className="CardboxCash">
              <CardBoxCash
                tipo="Ventas"
                icono="cash-outline"
                monto="S/. 1500"
                empresa="Torque-G46"
              />
            </Link>

            <Link to={"/Compras"} className="CardboxCash">
              <CardBoxCash
                tipo="Compras"
                icono="cash-outline"
                monto="S/. 1500"
                empresa="Torque-G46"
              />
            </Link>

            <Link to={"/Ventas"} className="CardboxCash">
              <CardBoxCash
                tipo="Ventas"
                icono="cash-outline"
                monto="S/. 1500"
                empresa="Irontools"
              />
            </Link>

            <Link to={"/Compras"} className="CardboxCash">
              <CardBoxCash
                tipo="Compras"
                icono="cash-outline"
                monto="S/. 1500"
                empresa="Irontools"
              />
            </Link>
          </div>

          </section>
          <section className="menudashbox">
              <Link to={"/Ventas"} className="RectboxCash">
              <p>Ventas</p>
              <ion-icon name="chevron-forward-outline"></ion-icon>
              </Link>

              <Link to={"/Compras"} className="RectboxCash">
              <p>Compras</p>
              <ion-icon name="chevron-forward-outline"></ion-icon>
              </Link>
          </section>
        
        </div>
      </div>
    );
  }
}
