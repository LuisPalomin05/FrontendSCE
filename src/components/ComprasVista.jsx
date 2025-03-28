import { ComprasCrear, ComprasLista } from "./Componentes";
import "../content/css/ComprasStylo.css";
import { Routes, Route, Link } from "react-router-dom";
import { IonIcon } from "@ionic/react";
import { podiumOutline, listOutline, refreshOutline, addOutline } from "ionicons/icons";

export default function Compras() {
  return (
    <div className="ComprasBox">
      <section className="flexbox topListCompras">
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

      <Routes>
        <Route path="/" element={<ComprasLista />} />
        <Route path="crear" element={<ComprasCrear />} />
      </Routes>
    </div>
  );
}
