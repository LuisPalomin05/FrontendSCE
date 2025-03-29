import React from "react";

const VentasLista = ({ ventasList }) => {
  // Desestructurar correctamente
  return (
    <div>
      <section>
        <h1 className="cGray fs16 ptop">Ventas</h1>
        <div className="bgWhite">
          <table className="formatTable">
            <thead>
              <tr>
                <td>
                  <input type="checkbox" name="select" id="selectable" />
                </td>
                <td>CLIENTE</td>
                <td>RUC</td>
                <td>N° FACTURA</td>
                <td>MONTO TOTAL</td>
                <td>MONEDA</td>
                <td>F. EMISION</td>
                <td>F. VENCIMIENTO</td>
                <td>EMPRESA</td>
                
              </tr>
            </thead>
            <tbody>
              {ventasList.map((venta, index) => (
                <tr key={index} >
                  <td>
                    <input
                      type="checkbox"
                      name="select"
                      id={`selectable-${index}`}
                    />
                  </td>
                  <td> {venta.cliente} </td>
                  <td> {venta.ruc}</td>
                  <td> {venta.nfactura} </td>
                  <td> {venta.total}</td>
                  <td> {venta.moneda} </td>
                  <td> {venta.emision}</td>
                  <td> {venta.vencimiento}</td>
                  <td> {venta.empresa}</td>
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
