import React from "react";
import { useNavigate } from "react-router-dom";

const VentasLista = ({ ventasList }) => {
  const navigate = useNavigate();
  // Desestructurar correctamente
  return (
    <div className="padd2">
      <section>
        <h1 className="cGray fs16 ptop">Lista de Ventas</h1>
        <div className="bgWhite">
          <table className="formatTable">
            <thead>
              <tr className="boldtext cBlack">
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
                <td>ACCIONES</td>
              </tr>
            </thead>
            <tbody>
              {ventasList.map((venta, index) => (
                <tr key={index} className="cPointer cGray" >
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
                  <td>
                    
                    {venta.moneda === "Dolares" ? "$. " : "S/. "} {venta.total}
                  </td>
                  <td> {venta.moneda} </td>
                  <td> {venta.emision}</td>
                  <td className="textcenter"> {venta.vencimiento}</td>
                  <td> {venta.empresa}</td>
                  <td>
                    <button
                      className="btnWarning"
                      onClick={() =>
                        navigate(`/ventas/editar/${venta._id}`, {
                          state: { reload: true },
                        })
                      }
                    >
                      Editar
                    </button>
                  </td>
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
