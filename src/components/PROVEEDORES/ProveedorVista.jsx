import React, { useEffect, useState, lazy, Suspense } from "react";
import { Routes, Route, Link } from "react-router-dom";
import { IonIcon } from "@ionic/react";
import {
  podiumOutline,
  listOutline,
  refreshOutline,
  addOutline,
} from "ionicons/icons";

const ProveedorLista = lazy(()=>import('./ProveedorLista'))
const ProveedorCrear = lazy(()=>import('./ProveedorCrear'))


function ProveedorVista() {
    const [proveedor,setProveedor] = useState([]);

  return (
    <div>
      <section className="flexbox topListCompras padd2">
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
          <p className=" titleboxCompras">10 resultados - 50 listados</p>
        </div>
        <div className="flexbox optionmenubox">
          <Link to={"crear"} className="flexcenter createButtonBox">
            <div className="flexcenter">
              <IonIcon icon={addOutline}></IonIcon>
            </div>
            <div>
              <p>Registrar Cliente</p>
            </div>
          </Link>
          <select name="empresas" id="empresas">
            <option value="Torque-G46">Torque-G46</option>
            <option value="Irontools">Irontools</option>
          </select>
        </div>
      </section>
      <section>
        <Suspense
          fallback={<div className="shimer-loader">Cargando...</div>}
        >
            <Routes>
            <Route path="/" element={<ProveedorLista proveedor={proveedor}/>}/>
            <Route path="/crear/" element={<ProveedorCrear />}/>
            <Route path="/editar/:id" element={<ProveedorCrear />}/></Routes>
        </Suspense>
      </section>
    </div>
  );
}

export default ProveedorVista;
