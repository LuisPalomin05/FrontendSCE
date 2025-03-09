import React from "react";

const VentasLista = () => {
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
                </tr></thead>
                <tbody>
                <tr className="flexalign padd2 gapp2">
                  <td>
                    <input type="checkbox" name="select" id="selectable" />
                  </td>

                  <td>Cliente1</td>
                  <td>12/12/2021</td>
                  <td>Enviado</td>
                </tr></tbody>
              </table>
            </div>
          </section>
    </div>
  );
};

export default VentasLista;