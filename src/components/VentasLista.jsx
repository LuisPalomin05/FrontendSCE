import React from "react";

const VentasLista = ({ ventasList }) => {  // Desestructurar correctamente
  return (
    <div>
      <section>
        <h1 className="cGray fs16 ptop">Ventas</h1>
        <div className="bgWhite">
          <table className="cGray flexcolumn gapp4">
            <thead>
              <tr className="flexalign padd2 gapp4">
                <td>
                  <input type="checkbox" name="select" id="selectable" />
                </td>
                <td>Cliente</td>
                <td>Fecha</td>
                <td>Estado</td>
              </tr>
            </thead>
            <tbody>
              {ventasList.map((venta, index) => (
                <tr key={index} className="flexalign padd2 gapp2">
                  <td>
                    <input type="checkbox" name="select" id={`selectable-${index}`} />
                  </td>
                  <td>{venta.cliente}</td>
                  <td>{venta.fecha}</td>
                  <td>{venta.estado}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
};

export default VentasLista;
