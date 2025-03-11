import React, { Component } from "react";
import { Routes, Route } from "react-router-dom";

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
            <Route path="dashboard" element={<p>Dashboard</p>} />
            <Route path="ventas" element={<p>Ventas</p>} />
            <Route path="compras" element={<p>Compras</p>} />
            <Route path="documentos" element={<p>Documentos</p>} />
            <Route path="pedidos" element={<p>Pedidos</p>} />
            <Route path="/sce/configuracion" element={<p>Configuracion</p>} />
            <Route path="/cotizador/*" element={<p className="cBlack padd1">Cotizar Cliente</p>} />
          </Routes>

        </div>

        <div className="flexcenter flex2 searchBoxnav">
          <div className="searchBox cPointer">
            <ion-icon name="search-outline"></ion-icon>
            <input type="text" placeholder="Buscar..." id="buscador"/>
          </div>
          <div className="flexcenter cPointer">
            <ion-icon name="add-circle-outline"></ion-icon>
          </div>
        </div>

        <div className="profileboxnav">
          <div className="cPointer">
            <ion-icon name="notifications-outline"></ion-icon>
          </div>
          <div className="cPointer">
            <ion-icon name="alert-circle-outline"></ion-icon>
          </div>

          <div className="profilecard">
            <div className=" roudedProfileimg">
              <img src="" alt="" />
            </div>
            <div className="profilename">
              <p>{nombre}</p>
              <p>{empresa}</p>
            </div>
          </div>
        </div>

        {/* <div className="flexbox flex1">
          <ion-icon class="" name="attach"></ion-icon>
          <ion-icon class="" name="notifications"></ion-icon>
          <ion-icon
            onClick={() => this.toggleDiv(".profileCard")}
            class=""
            name="person"
          ></ion-icon>
        </div> */}
      </div>
    );
  }
}
