import React from "react";

const ComprasCrear = () => {
    return (
        <div>
        <section>
            <h1 className="cGray fs16 ptop">Compras</h1>
            <div className="bgWhite">
              <table className="flexcolumn cGray gapp4">
                <th>
                  <td>
                    <input type="checkbox" name="select" id="selectable" />
                  </td>
                  <td>Cliente</td>
                  <td>Fecha</td>
                  <td>Estado</td>
                </th>
                <tr>
                  <td>
                    <input type="checkbox" name="select" id="selectable" />
                  </td>
                  <td>Cliente1</td>
                  <td>12/12/2021</td>
                  <td>Enviado</td>
                </tr>
              </table>
            </div>
          </section>
        </div>
    );
    }

    export default ComprasCrear;