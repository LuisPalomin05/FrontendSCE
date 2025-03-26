import React from "react";

const ComprasCrear = () => {
  return (
    <div>
      <section>
        <h1 className="cGray fs16 ptop">Compras</h1>
        <div className="bgWhite">
          <table className="flexcolumn cGray gapp4">
            <thead>
              <tr>
                <th>
                  <input type="checkbox" name="select" id="check"/>
                </th>
                <th>Cliente</th>
                <th>Fecha</th>
                <th>Estado</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <input type="checkbox" name="select" />
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

export default ComprasCrear;
