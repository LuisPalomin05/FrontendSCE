import React, { useEffect, useState, lazy, Suspense } from "react";
import { Routes, Route,useLocation  } from "react-router-dom";
import "../../content/css/Clientes.css";
import axios from "axios";
import { Link } from "react-router-dom";
import { IonIcon } from "@ionic/react";
import {
  podiumOutline,
  listOutline,
  refreshOutline,
  addOutline,
} from "ionicons/icons";

const ClientesLista = lazy(() => import("./ClienteLista"));
const ClientesCrear = lazy(() => import("./ClientesCrear"));

const localhost = "https://backendapi-6thn.onrender.com/api/clientes";

export default function ClientesVista() {
  const [clientes, setClientes] = useState([]);
  const location = useLocation();

  useEffect(() => {
    async function fetchData() {
      const res = await axios.get(localhost);
      setClientes(res.data);

    }
    if (location.state?.reload) {
      fetchData(); 
    }
  }, [location.state]);

  return (
    <div className="padd4">
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

      <section className="padd2">
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/" element={<ClientesLista clienteLista={clientes} />}/>
            <Route path="/crear/" element={<ClientesCrear />} />
            <Route path="/editar/:id" element={<ClientesCrear />} />
          </Routes>
        </Suspense>
      </section>
    </div>
  );
}
