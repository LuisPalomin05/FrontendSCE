import React, { useState, useEffect, lazy, Suspense } from "react";
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
import {
  useVentasIrontools,
  useComprasIrontools,
  useVentasTorque,
  useComprasTorque,
} from "../../utils/panelconsults";

const CotizacionesLista = lazy(() => import("./ListaCotizacion"));

const Dashboard = () => {
  const [cotizaciones, setCotizaciones] = useState([]);
  const ventaIrontools = useVentasIrontools();
  const compraIrontools = useComprasIrontools();
  const ventaTorque = useVentasTorque();
  const compraTorque = useComprasTorque();

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

      <section className="">
        <h1 className="cGray fs16">CONTABILIDAD</h1>
        <div className="flexcolumn">
          <div className="flexbox gapp4 padd2">
            <Link to={"/ventas"} className="CardboxCash">
              <CardBoxCash
                tipo="Ventas"
                montoSoles={"S/. " + ventaTorque.ventaSolesTorque}
                montoDolar={"$. " + ventaTorque.ventaDolaresTorque}
                empresa="Torque-G46"
              />
            </Link>

            <Link to={"/ventas"} className="CardboxCash">
              <CardBoxCash
                tipo="Ventas"
                montoSoles={"S/. " + ventaIrontools.ventaSolesIrontools}
                montoDolar={"$. " + ventaIrontools.ventaDolaresIrontools}
                empresa="Irontools"
              />
            </Link>
          </div>

          <div className=" flexbox gapp4 padd2">
            <Link to={"/compras"} className="CardboxCash">
              <CardBoxCash
                tipo="Compras"
                montoSoles={"S/. " + compraTorque.compraSolesTorque}
                montoDolar={"$. " + compraTorque.compraDolaresTorque}
                empresa="Torque-G46"
              />
            </Link>

            <Link to={"/compras"} className="CardboxCash">
              <CardBoxCash
                tipo="Compras"
                montoSoles={"S/. " + compraIrontools.compraSolesIrontools}
                montoDolar={"$. " + compraIrontools.compraSolesIrontools}
                empresa="Irontools"
              />
            </Link>
          </div>
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
  );
};

export default Dashboard;
