import React, { useState, useEffect, lazy, Suspense } from "react";
import axios from "axios";
import PanelNegocios from "./PanelNegocios";

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
      <section className="flex ptop pbottom martop">
        <button className="createNewButton cPointer">
          <span className="fs24">+</span>
          Nueva Cotización
        </button>
      </section>



      <PanelNegocios />

      <section>
        <h1 className="cGray fs16 ptop borderVertical">
          Cotizaciones Recientes
        </h1>

        <Suspense fallback={<div className="shimmer-loader">Cargando...</div>}>
          <CotizacionesLista cotizaciones={cotizaciones} />
        </Suspense>
      </section>

      <section></section>
    </div>
  );
};

export default Dashboard;
