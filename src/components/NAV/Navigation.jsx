import React, { Component } from "react";
import { Routes, Route } from "react-router-dom";
import { IonIcon } from "@ionic/react";
import {
  searchOutline,
  addCircleOutline,
  notificationsOutline,
  alertCircleOutline,
} from "ionicons/icons";

export default class Navigation extends Component {
  toggleDiv = (selector) => {
    const element = document.querySelector(selector);
    if (element) {
      element.classList.toggle("activeted");
    }
  };

  state = {
    datos: {
      nombre: "Luis Alfredo",
      fotoperfil: "enlace",
      empresa: "Torque-G46",
      // fuentes: "TitutloWeb",
    },
  };

  render() {
    const { nombre, empresa } = this.state.datos;
    return (
      <div className="navigationBox">
        <div className="flex1 tittleboxnav">
          {/* <p>{fuentes}</p> */}
          <Routes>
            <Route path="/" element={<p>Dashboard</p>} />

            <Route path="/dashboard" element={<p>Dashboard</p>} />
            <Route path="/ventas/*" element={<p>Ventas</p>} />
            <Route path="/compras/*" element={<p>Compras</p>} />
            <Route path="/documentos/*" element={<p>Documentos</p>} />
            <Route path="/pedidos/*" element={<p>Pedidos</p>} />
            <Route path="/sce/configuracion/*" element={<p>Configuración</p>} />
            <Route
              path="/cotizacion/*"
              element={<p className="cBlack padd1">Cotizar Cliente</p>}
            />
            <Route path="/clientes/*" element={<p>Dashboard</p>} />
          </Routes>
        </div>

        <div className="flexcenter flex2 searchBoxnav">
          <div className="searchBox cPointer">
            <IonIcon icon={searchOutline} />
            <input type="text" placeholder="Buscar..." id="buscador" />
          </div>
          <div className="flexcenter cPointer">
            <IonIcon icon={addCircleOutline} />
          </div>
        </div>

        <div className="profileboxnav">
          <div className="cPointer">
            <IonIcon icon={notificationsOutline} />
          </div>
          <div className="cPointer">
            <IonIcon icon={alertCircleOutline} />
          </div>

          <div className="profilecard">
            <div className="roundedProfileimg">
              <img src="" alt="" />
            </div>
            <div className="profilename">
              <p>{nombre}</p>
              <p>{empresa}</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
