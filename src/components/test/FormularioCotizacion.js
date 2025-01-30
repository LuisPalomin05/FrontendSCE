import React, { useState } from "react";

function FormularioCotizacion({ cotizacion, onActualizar }) {
  const [producto, setProducto] = useState("");

  const agregarProducto = (e) => {
    e.preventDefault();
    const nuevosProductos = [...cotizacion.productos, producto];
    onActualizar(cotizacion.id, nuevosProductos); // Actualiza la lista de productos
    setProducto(""); // Limpia el campo
  };

  return (
    <div>
      <h2>Cotización en {cotizacion.moneda}</h2>
      <form onSubmit={agregarProducto}>
        <label>
          Producto:
          <input
            type="text"
            value={producto}
            onChange={(e) => setProducto(e.target.value)}
            required
          />
        </label>
        <button type="submit">Agregar Producto</button>
      </form>
      <h3>Productos:</h3>
      <ul>
        {cotizacion.productos.map((producto, index) => (
          <li key={index}>{producto}</li>
        ))}
      </ul>
    </div>
  );
}

export default FormularioCotizacion;
