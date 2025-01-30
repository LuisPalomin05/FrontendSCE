// import React, { Component } from "react";
// import ItemRecents from "./ItemRecents";
// import { Link } from "react-router-dom";

// export default class LeftSide extends Component {
//   state = {
//     isPaletaOpen: false,
//   };
//   toggleDiv = (selector) => {
//     const element = document.querySelector(selector);
//     if (element) {
//       element.classList.toggle("activeted");
//     }
//   };

//   toggleDivClass = () => {
//     this.setState((prevState) => ({
//       isPaletaOpen: !prevState.isPaletaOpen,
//     }));
//   };

//   render() {
//     const { isPaletaOpen } = this.state;
//     return (
//       <div className="flexAlign leftmenu">
//         <div className="flexColumn leftIcons ">
//           <div className="iMenu" onClick={this.toggleDivClass}>
//             <ion-icon class="IconGray" name="list"></ion-icon>
//           </div>
//           <div className="flexColumn flex1 ">
//             <div className="iconsMenus">

//               <Link to={"/Dashboard"}>
//                 <ion-icon class="IconGray" name="home"></ion-icon>
//               </Link>
//             </div>

//             <Link to={"/sce/Configuracion"}>
//               <ion-icon class="IconGray" name="cog"></ion-icon>
//             </Link>
//           </div>
//         </div>
//         <div className={`leftPaleta ${isPaletaOpen ? "active" : ""}`}>
//           <div className="flexColumn menuCotizacion">
//             <div className="flexAlign">
//               <div className="recient">
//                 <i>Empresas</i>
//               </div>
//               <ion-icon
//                 onClick={() => this.toggleDiv(".listEnterprice")}
//                 class="IconGray2"
//                 name="close-circle"
//               ></ion-icon>
//             </div>
//             <div className="listEnterprice">
//               {/* empresas */}
//               <div className="enterprise">
//                 <div className="TagEmpresa">
//                   <ion-icon name="pricetags"></ion-icon>
//                   <p>TORQUE-G46</p>
//                 </div>
//                 <ul className="flexColumn">
//                   <Link to={"/Torque/soles"}>
//                     <li className="flexAlign itemlistleft">
//                       <p>Soles</p>
//                       <ion-icon name="chevron-forward"></ion-icon>
//                     </li>
//                   </Link>
//                   <Link to={"/Torque/dolares"}>
//                     <li  className="flexAlign itemlistleft">
//                       <p>Dólares</p>
//                       <ion-icon name="chevron-forward"></ion-icon>
//                     </li>
//                   </Link>
//                 </ul>
//               </div>
//               <div className="enterprise">
//                 <div className="TagEmpresa">
//                   <ion-icon name="pricetags"></ion-icon>
//                   <p>IRONTOOLS</p>
//                 </div>
//                 <ul className="tItem">
//                   <Link to={"/Irontools/soles"}>
//                     <li className="flexAlign itemlistleft">
//                       <p>Soles</p>
//                       <ion-icon name="chevron-forward"></ion-icon>
//                     </li>
//                   </Link>

//                   <Link to={"/Irontools/dolares"}>
//                     {" "}
//                     <li className="flexAlign itemlistleft">
//                       <p>Dólares</p>
//                       <ion-icon name="chevron-forward"></ion-icon>
//                     </li>
//                   </Link>
//                 </ul>
//               </div>
//             </div>

//             <div className="hr"></div>
//           </div>
//           <div className="listrecents">
//             <div className="flexRow ">
//               <div className="recient">
//                 <i>Recientes</i>
//               </div>
//               <ion-icon class="IconGray2" name="refresh"></ion-icon>
//               <ion-icon class="IconGray2" name="close-circle"></ion-icon>
//             </div>
//             <div>
//               <ItemRecents />
//             </div>
//           </div>
//         </div>
//       </div>
//     );
//   }
// }

// -----------------------------------

import React, { useState } from "react";
import { Link } from "react-router-dom";
import ItemRecents from "./ItemRecents";

const Cotizador = () => {
  const [cotizaciones, setCotizaciones] = useState([]);
  const [activeTab, setActiveTab] = useState(null);

  const crearCotizacion = (moneda, empresa) => {
    const nuevaCotizacion = {
      id: Date.now(),
      empresa,
      moneda,
      productos: [], // Lista de productos que podrías agregar
    };
    setCotizaciones([...cotizaciones, nuevaCotizacion]);
    setActiveTab(nuevaCotizacion.id);
  };

  return (
    <div className="flexbox ">
      <div className="flexColumn leftIcons">
        <div className="iMenu">
          <ion-icon class="IconGray" name="list"></ion-icon>
        </div>
        <div className="flexColumn flex1 ">
          <div className="iconsMenus">
            <Link to={"/Dashboard"}>
              <ion-icon class="IconGray" name="home"></ion-icon>
            </Link>
          </div>

          <Link to={"/sce/Configuracion"}>
            <ion-icon class="IconGray" name="cog"></ion-icon>
          </Link>
        </div>
      </div>

      <div>
        <div className="listEnterprice">
          <div className="enterprise">
            <div className="TagEmpresa">
              <ion-icon name="pricetags"></ion-icon>
              <p>TORQUE-G46</p>
            </div>
            <ul className="flexColumn">
              <li
                className="flexAlign itemlistleft"
                onClick={() => crearCotizacion("USD", "Torque")}
              >
                <p>Soles</p>
                <ion-icon name="chevron-forward"></ion-icon>
              </li>

              <li
                className="flexAlign itemlistleft"
                onClick={() => crearCotizacion("PEN", "Torque")}
              >
                <p>Dólares</p>
                <ion-icon name="chevron-forward"></ion-icon>
              </li>
            </ul>
          </div>

          <div className="enterprise">
            <div className="TagEmpresa">
              <ion-icon name="pricetags"></ion-icon>
              <p>IRONTOOLS</p>
            </div>
            <ul className="tItem">
              <li
                className="flexAlign itemlistleft"
                onClick={() => crearCotizacion("USD", "Irontools")}
              >
                <p>Soles</p>
                <ion-icon name="chevron-forward"></ion-icon>
              </li>{" "}
              <li
                className="flexAlign itemlistleft"
                onClick={() => crearCotizacion("PEN", "Irontools")}
              >
                <p>Dólares</p>
                <ion-icon name="chevron-forward"></ion-icon>
              </li>
            </ul>
          </div>
        </div>

        <div className="listrecents">
          <div className="flexRow ">
            <div className="recient">
              <i>Recientes</i>
            </div>
            <ion-icon class="IconGray2" name="refresh"></ion-icon>
            <ion-icon class="IconGray2" name="close-circle"></ion-icon>
          </div>
          <div>
            <div>
              <ul>
                {cotizaciones.map((cotizacion) => (
                  <li
                    key={cotizacion.id}
                    onClick={() => setActiveTab(cotizacion.id)}
                    style={{
                      cursor: "pointer",
                      color: activeTab === cotizacion.id ? "blue" : "black",
                    }}
                  >
                    Cotización en {cotizacion.moneda} {cotizacion.empresa} (ID:{" "}
                    {cotizacion.id})
                  </li>
                ))}
              </ul>
            </div>
            <div>
              {cotizaciones.map(
                (cotizacion) =>
                  activeTab === cotizacion.id && (
                    <div key={cotizacion.id}>
                      <h3>Cotización en {cotizacion.moneda}</h3>
                      {/* Aquí iría el formulario o información editable */}
                      <p>Productos: {cotizacion.productos.length}</p>
                    </div>
                  )
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cotizador;
