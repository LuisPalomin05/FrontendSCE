import React from "react";
import { useNavigate } from "react-router-dom";

const ComprasLista = ({ comprasList }) => {
    const navigate = useNavigate();
  
  return (
    <div className="padd2">
      <section>
        <h1 className="cGray fs16 ptop">Lista de Compras</h1>
        <div className="bgWhite">
          <table className="formatTable">
            <thead>
              <tr className="boldtext cBlack">
                <th>
                  <input type="checkbox" id="check" />
                </th>
                <th>N°</th>
                <th>CLIENTE</th>
                <th>RUC</th>
                <th>N° FACTURA</th>
                <th>MONTO TOTAL</th>
                <th>MONEDA</th>
                <th>FECHA</th>
                <th>EMPRESA</th>
                <td>ACCIONES</td>
              </tr>
            </thead>
            <tbody>
              {comprasList.map((compra, index) => (
                <tr key={index}>
                  <td>
                    <input type="checkbox" id={`check-${index}`} />
                  </td>
                  <td>{index + 1}</td>
                  <td>{compra.cliente}</td>
                  <td>{compra.ruc}</td>
                  <td>{compra.nfactura}</td>
                  <td>{compra.moneda === "Dolares" ? "$. " : "S/. "}{compra.total}</td>
                  <td>{compra.moneda}</td>
                  <td>{compra.emision}</td>
                  <td>{compra.empresa}</td>
                  <td>
                  <button
                      className="btnWarning"
                      onClick={() =>
                        navigate(`/compras/editar/${compra._id}`, {
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

export default ComprasLista;
