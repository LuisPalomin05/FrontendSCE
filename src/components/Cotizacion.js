import React, { useState } from "react";

const Cotizador = () => {
  const [cotizaciones, setCotizaciones] = useState([]);
  const [activeTab, setActiveTab] = useState(null);

  const crearCotizacion = (moneda) => {
    const nuevaCotizacion = {
      id: Date.now(),
      moneda,
      productos: [], // Lista de productos que podrías agregar
    };
    setCotizaciones([...cotizaciones, nuevaCotizacion]);
    setActiveTab(nuevaCotizacion.id);
  };

  return (
    <div>
      <div>
        <button onClick={() => crearCotizacion("USD")}>Cotizar en Dólares</button>
        <button onClick={() => crearCotizacion("PEN")}>Cotizar en Soles</button>
      </div>
      <div>
        <ul>
          {cotizaciones.map((cotizacion) => (
            <li
              key={cotizacion.id}
              onClick={() => setActiveTab(cotizacion.id)}
              style={{ cursor: "pointer", color: activeTab === cotizacion.id ? "blue" : "black" }}
            >
              Cotización en {cotizacion.moneda} (ID: {cotizacion.id})
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
  );
};

export default Cotizador;
