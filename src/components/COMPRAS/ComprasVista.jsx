import React, { useEffect, useState, lazy, Suspense } from "react";
// import { useParams } from "react-router-dom";
import axios from "axios";

import "../../content/css/ComprasStylo.css";
import { Routes, Route, Link } from "react-router-dom";
import { IonIcon } from "@ionic/react";
import {
  podiumOutline,
  listOutline,
  refreshOutline,
  addOutline,
} from "ionicons/icons";

const ComprasLista = lazy(() => import("./ComprasLista"));
const ComprasCrear = lazy(() => import("./ComprasCrear"));

export default function Compras() {
  const [compras, setCompras] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const res = await axios.get(
        "https://backendapi-6thn.onrender.com/api/compras"
      );
      setCompras(res.data);
    }
    fetchData();
  }, []);

  return (
    <div className="ComprasBox">
      <section className="flexbox topListCompras">
        <div className="flexbox boxbottontop">
          <div className="texcenter bottonitem">
            <IonIcon icon={podiumOutline} />
          </div>
          <div className="texcenter bottonitem">
            <IonIcon icon={listOutline} />
          </div>
          <div className="texcenter bottonitem">
            <IonIcon icon={refreshOutline} />
          </div>
        </div>
        <div>
          <p className="titleboxCompras">10 resultados - 50 listados</p>
        </div>
        <div className="flexbox optionmenubox">
          <Link to="crear" className="flexcenter createButtonBox">
            <div className="flexcenter">
              <IonIcon icon={addOutline} />
            </div>
            <div className="flexcenter">
              <p>Registrar Compra</p>
            </div>
          </Link>
          <select name="empresas" id="empresas">
            <option value="Torque-G46">Torque-G46</option>
            <option value="Irontools">Irontools</option>
          </select>
        </div>
      </section>
      <section>
        <Suspense fallback={<div>Cargando...</div>}>
          <Routes>
            <Route path="/" element={<ComprasLista comprasList={compras} />} />
            <Route path="/crear" element={<ComprasCrear />} />
            <Route path="/editar/:id" element={<ComprasCrear />} />
          </Routes>
        </Suspense>
      </section>
    </div>
  );
}
