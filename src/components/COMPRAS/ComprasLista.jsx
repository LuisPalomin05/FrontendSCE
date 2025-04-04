import React from "react";

const ComprasLista = ({ comprasList }) => {
  
  return (
    <div className="padd2">
      <section>
        <h1 className="cGray fs16 ptop">Lista de Compras</h1>
        <div className="bgWhite">
          <table className="cGray">
            <thead>
              <tr>
                <th>
                  <input type="checkbox" id="check" />
                </th>
                <th>Cliente</th>
                <th>Fecha</th>
                <th>Estado</th>
              </tr>
            </thead>
            <tbody>
              {comprasList.map((compra, index) => (
                <tr key={index}>
                  <td>
                    <input type="checkbox" id={`check-${index}`} />
                  </td>
                  <td>{compra.cliente}</td>
                  <td>{compra.fecha}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
};

export default ComprasLista;
