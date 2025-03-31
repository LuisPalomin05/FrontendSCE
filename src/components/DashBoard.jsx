import React, { Component } from "react";
import CardBoxCash from "./CardBox";
import { Link } from "react-router-dom";
import { IonIcon } from "@ionic/react";
import {
  chevronForwardOutline,
  podiumOutline,
  listOutline,
  refreshOutline,
  addOutline,
} from "ionicons/icons";

export default class Dashboard extends Component {
  render() {
    return (
      <div className="DashBoardBox">
        <div className="flexbox barTopmenu">
          <div className="flexbox boxbottontop">
            <div className="flexcenter bottonitem">
              <IonIcon icon={podiumOutline}></IonIcon>
            </div>
            <div className="flexcenter bottonitem">
              <IonIcon icon={listOutline} />
            </div>
            <div className="flexcenter bottonitem">
              <IonIcon icon={refreshOutline}></IonIcon>
            </div>
          </div>
          <div>
            <div className="flexcenter createButtonBox">
              <div className="flexcenter">
                <IonIcon icon={addOutline}></IonIcon>
              </div>
              <div className="flexcenter">
                <p>Agregar</p>
              </div>
            </div>
          </div>
        </div>
        <div>
          <section>
            <h1 className="cGray fs16">Contabilidad</h1>
            <div className="CashDashboardPanel" id="MiArea">
              <Link to={"/ventas"} className="CardboxCash">
                <CardBoxCash
                  tipo="Ventas"
                  monto="S/. 1500"
                  empresa="Torque-G46"
                />
              </Link>

              <Link to={"/compras"} className="CardboxCash">
                <CardBoxCash
                  tipo="Compras"
                  monto="S/. 1500"
                  empresa="Torque-G46"
                />
              </Link>

              <Link to={"/ventas"} className="CardboxCash">
                <CardBoxCash
                  tipo="Ventas"
                  monto="S/. 1500"
                  empresa="Irontools"
                />
              </Link>

              <Link to={"/compras"} className="CardboxCash">
                <CardBoxCash
                  tipo="Compras"
                  monto="S/. 1500"
                  empresa="Irontools"
                />
              </Link>
            </div>
          </section>
          <section className="menudashbox">
            <Link to="/ventas" className="RectboxCash">
              <p>Ventas</p>
              <IonIcon icon={chevronForwardOutline} />
            </Link>

            <Link to="/create" className="RectboxCash">
              <p>Compras crear</p>
              <IonIcon icon={chevronForwardOutline} />
            </Link>

            <Link to="/lista" className="RectboxCash">
              <p>Documentos lista</p>
              <IonIcon icon={chevronForwardOutline} />
            </Link>

            <Link to="/user" className="RectboxCash">
              <p>Pedidos user</p>
              <IonIcon icon={chevronForwardOutline} />
            </Link>
          </section>
          <section>
            <h1 className="cGray fs16 ptop">Mis Cotizaciones</h1>
            <div className="bgWhite">
              <table className="formatTable">
                <thead>
                  <tr className="">
                    <th>
                      <input type="checkbox" name="select" />
                    </th>
                    <th>Cliente</th>
                    <th>Fecha</th>
                    <th>Estado</th>
                    <th>Creador</th>
                    <th>Acciones</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <input type="checkbox" name="select" />
                    </td>

                    <td>Cliente1</td>
                    <td>12/12/2021</td>
                    <td>Enviado</td>
                    <td>Admin</td>
                    <td>
                      <Link to={"/cotizacion"} className="btnbox">
                        Ver
                      </Link>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section></section>
        </div>
      </div>
    );
  }
}
