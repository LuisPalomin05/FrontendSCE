import React, {useState, useEffect, lazy, Suspense}  from "react";
import axios from "axios";
import CardBoxCash from "../CardBox";
import { Link } from "react-router-dom";
import { IonIcon } from "@ionic/react";
import {
  chevronForwardOutline,
  podiumOutline,
  listOutline,
  refreshOutline,
  addOutline,
} from "ionicons/icons";

const CotizacionesLista = lazy(() => import("./ListaCotizacion"));

  const Dashboard = () => {
  
    const [cotizaciones, setCotizaciones] = useState([]);

    useEffect(() => {
      async function fetchData() {
        const res = await axios.get(
          "https://backendapi-6thn.onrender.com/api/cotizacion"
        );
        setCotizaciones(res.data);
      }
      fetchData();
    }, []);


    return (
      <div className="DashBoardBox">
        <div className="flexbox barTopmenu">
          <div className="flexbox boxbottontop">
            <div className="texcenter bottonitem">
              <IonIcon icon={podiumOutline}></IonIcon>
            </div>
            <div className="texcenter bottonitem">
              <IonIcon icon={listOutline} />
            </div>
            <div className="texcenter bottonitem">
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

            <Link to="/compras" className="RectboxCash">
              <p>Compras</p>
              <IonIcon icon={chevronForwardOutline} />
            </Link>

            <Link to="/documentos" className="RectboxCash">
              <p>Documentos</p>
              <IonIcon icon={chevronForwardOutline} />
            </Link>

            <Link to="/pedidos" className="RectboxCash">
              <p>Pedidos</p>
              <IonIcon icon={chevronForwardOutline} />
            </Link>
          </section>
          <section>
            <h1 className="cGray fs16 ptop">Mis Cotizaciones</h1>

            <Suspense fallback={<div className="shimmer-loader">Cargando...</div>}>
              <CotizacionesLista cotizaciones={cotizaciones} />
            </Suspense>

          </section> 

          <section></section>
        </div>
      </div>
    );
  
}

export default Dashboard;
