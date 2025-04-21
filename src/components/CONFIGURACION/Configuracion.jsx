import React from "react";
import { Link, Routes, Route } from "react-router-dom";
import { IonIcon } from "@ionic/react";
import { chevronForwardOutline } from "ionicons/icons";

import Cuenta from "./Cuenta";
import Personalizacion from "./Personalizacion";
import Seguridad from "./Seguridad";
import UnidadesMedida from "./UnidadesMedida";
import Acercade from "./AcercaDeSce";

import "../../content/css/Configuracion.css";

const Configuracion = () => {
  return (
    <div className="ConfiguracionBox">
      <section className="configbox borderrigthgray">
        <ul>
          <li className="listconfig">
            <Link className="configLink" to="/sce/configuracion/cuenta">
              <p>Perfil y Cuenta</p>
              <IonIcon icon={chevronForwardOutline} />
            </Link>
          </li>
          <li className="listconfig">
            <Link to="/sce/configuracion/personalizacion" className="configLink">
              <p>Personalización</p>
              <IonIcon icon={chevronForwardOutline} />
            </Link>
          </li>
          <li className="listconfig">
            <Link to="/sce/configuracion/unidadesMedida" className="configLink">
              <p>Unidades de Medida</p>
              <IonIcon icon={chevronForwardOutline} />
            </Link>
          </li>
          <li className="listconfig">
            <Link to="/sce/configuracion/seguridad" className="configLink">
              <p>Seguridad</p>
              <IonIcon icon={chevronForwardOutline} />
            </Link>
          </li>
          <li className="listconfig">
            <Link to="/sce/configuracion/AcercaDe" className="configLink">
              <p>Acerca De SCE</p>
              <IonIcon icon={chevronForwardOutline} />
            </Link>
          </li>
        </ul>
      </section>

      <section className="configboxInfo ">
        <Routes>
          <Route path="cuenta" element={<Cuenta />} />
          <Route path="personalizacion" element={<Personalizacion />} />
          <Route path="seguridad" element={<Seguridad />} />
          <Route path="unidadesMedida" element={<UnidadesMedida />} />
          <Route path="AcercaDe" element={<Acercade />} />
        </Routes>
      </section>
    </div>
  );
};

export default Configuracion;
