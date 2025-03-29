import React from "react";

const ComprasLista = () => {
  return (
    <div className="padd2">
      <section>
        <h1 className="cGray fs16 ptop">Lista de Compras</h1>
        <div className="bgWhite">
          <table className="cGray">
            <thead>
              <tr>
                <th>
                  <input type="checkbox" id="check"/>
                </th>
                <th>Cliente</th>
                <th>Fecha</th>
                <th>Estado</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <input type="checkbox" />
                </td>
                <td>Cliente1</td>
                <td>12/12/2021</td>
                <td>Enviado</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
};

export default ComprasLista;
