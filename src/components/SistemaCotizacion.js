import React, { useState } from "react";
import FormularioCotizacion from "./FormularioCotizacion";
import { Link } from "react-router-dom";

function SistemaCotizacion() {
  const [cotizaciones, setCotizaciones] = useState([]);
  const [activeTab, setActiveTab] = useState(null);

  const crearCotizacion = (moneda, empresa) => {
    const nuevaCotizacion = {
      id: Date.now(),
      moneda,
      empresa,
      productos: [],
    };
    setCotizaciones([...cotizaciones, nuevaCotizacion]);
    setActiveTab(nuevaCotizacion.id); // Activar la nueva cotización
  };

  const actualizarCotizacion = (idCotizacion, productosActualizados) => {
    setCotizaciones((prevCotizaciones) =>
      prevCotizaciones.map((cotizacion) =>
        cotizacion.id === idCotizacion
          ? { ...cotizacion, productos: productosActualizados }
          : cotizacion
      )
    );
  };

  const cotizacionActiva = cotizaciones.find((cot) => cot.id === activeTab);

  return (
    <div>
      
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

      <div className="listEnterprice">
        <div className="enterprise">
          <div className="TagEmpresa">
            <ion-icon name="pricetags"></ion-icon>
            <p>TORQUE-G46</p>
          </div>
          <ul className="flexColumn">
            <li
              className="flexAlign itemlistleft"
              onClick={() => crearCotizacion("PEN", "Torque")}
            >
              <p>Soles</p>
              <ion-icon name="chevron-forward"></ion-icon>
            </li>

            <li
              className="flexAlign itemlistleft"
              onClick={() => crearCotizacion("USD", "Torque")}
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
              onClick={() => crearCotizacion("PEN", "Irontools")}
            >
              <p>Soles</p>
              <ion-icon name="chevron-forward"></ion-icon>
            </li>{" "}
            <li
              className="flexAlign itemlistleft"
              onClick={() => crearCotizacion("USD", "Irontools")}
            >
              <p>Dólares</p>
              <ion-icon name="chevron-forward"></ion-icon>
            </li>
          </ul>
        </div>
      </div>
      
      {/* Listado de pestañas */}
      <div className="tabs">
        {cotizaciones.map((cotizacion) => (
          <div
            key={cotizacion.id}
            className={`tab ${activeTab === cotizacion.id ? "active" : ""}`}
            onClick={() => setActiveTab(cotizacion.id)}
          >
            Cotización {cotizacion.id} - {cotizacion.moneda}
          </div>
        ))}
      </div>

      {/* Formulario de cotización */}
      <div className="content">
        {cotizacionActiva ? (
          <FormularioCotizacion
            cotizacion={cotizacionActiva}
            onActualizar={actualizarCotizacion}
          />
        ) : (
          <p>Selecciona una cotización para comenzar.</p>
        )}
      </div>
    </div>
  );
}

export default SistemaCotizacion;
