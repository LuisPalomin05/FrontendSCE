import "../content/css/VentasStylo.css";
import { VentasCrear, VentasLista } from "./Componentes";
import { Link, Routes, Route } from "react-router-dom";
import { IonIcon } from "@ionic/react";
import { podiumOutline, listOutline, refreshOutline, addOutline } from "ionicons/icons";
import React, { useEffect, useState } from "react";
import axios from "axios";


const Ventas = () => {
  const [ventas, setVentas] = useState([]);	

useEffect(() => {
  async function fetchData() {
    const res = await axios.get("https://backendapi-6thn.onrender.com/api/ventas");
    setVentas(res.data);
  }
  fetchData();
}, [])




  return (
    <div className="VentasBox">
      <section className="flexbox topListVentas">
        <div className="flexbox boxbottontop">
          <div className="flexcenter bottonitem">
            <IonIcon icon={podiumOutline} />
          </div>
          <div className="flexcenter bottonitem">
            <IonIcon icon={listOutline} />
          </div>
          <div className="flexcenter bottonitem">
            <IonIcon icon={refreshOutline} />
          </div>
        </div>
        <div>
          <p className="titleboxVentas">10 resultados - 50 listados</p>
        </div>
        <div className="flexbox optionmenubox">
          <div>
            <Link to="/ventas/crear" className="flexcenter createButtonBox">
              <div className="flexcenter">
                <IonIcon icon={addOutline} />
              </div>
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
      <Route path="/" element={<VentasLista ventasList={ventas} />} />
      <Route path="crear" element={<VentasCrear />} />
      </section>
    </div>
  );
};

export default Ventas;
