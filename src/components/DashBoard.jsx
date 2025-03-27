import React, { Component } from "react";
import CardBoxCash from "./CardBox";
import { Link } from "react-router-dom";
import TableComponents from "../utils/tableComponent";


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
                <p >Agregar</p>
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
                  icono="cash-outline"
                  monto="S/. 1500"
                  empresa="Torque-G46"
                />
              </Link>

              <Link to={"/compras"} className="CardboxCash">
                <CardBoxCash
                  tipo="Compras"
                  icono="cash-outline"
                  monto="S/. 1500"
                  empresa="Torque-G46"
                />
              </Link>

              <Link to={"/ventas"} className="CardboxCash">
                <CardBoxCash
                  tipo="Ventas"
                  icono="cash-outline"
                  monto="S/. 1500"
                  empresa="Irontools"
                />
              </Link>

              <Link to={"/compras"} className="CardboxCash">
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
            <Link to={"/ventas"} className="RectboxCash">
              <p>Ventas</p>
              <ion-icon name="chevron-forward-outline"></ion-icon>
            </Link>

            <Link to={"/create"} className="RectboxCash">
              <p>Compras crear</p>
              <ion-icon name="chevron-forward-outline"></ion-icon>
            </Link>
            <Link to={"/lista"} className="RectboxCash">
              <p>Documentos lista</p>
              <ion-icon name="chevron-forward-outline"></ion-icon>
            </Link>
            <Link to={"/user"} className="RectboxCash">
              <p>Pedidos user</p>
              <ion-icon name="chevron-forward-outline"></ion-icon>
            </Link>
          </section>
          {/* <section>
            <h1 className="cGray fs16 ptop">Mis Cotizaciones</h1>
            <div className="bgWhite">
              <table className="cGray flexcolumn gapp4">
                <thead>
                <tr className="flexbox gapp8">
                  <th>
                    <input type="checkbox" name="select"/>
                  </th>
                  <th>Cliente</th>
                  <th>Fecha</th>
                  <th>Estado</th>
                  <th>Creador</th>
                  <th>Acciones</th>
                </tr></thead>
                <tbody>
                <tr className="flexbox gapp4">
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

                </tr></tbody>
              </table>
            </div>
          </section> */}

<section>
<TableComponents 
    arrayheaders={["Nombre", "Edad", "Ciudad", "Pais"]}
    arrayelements={[
        { name: "Luis", age: 25, city: "Lima" , country: "Perú"},
        { name: "Ana", age: 30, city: "Madrid" , country: "España"},
        { name: "Carlos", age: 28, city: "México" , country: "México"},
    ]}
    arraykeys={["name", "age", "city", "country"]}
/>


</section>
        </div>
      </div>
    );
  }
}
