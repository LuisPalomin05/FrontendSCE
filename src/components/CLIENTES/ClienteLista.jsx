import React from "react";
import { Link } from "react-router-dom";

const ClienteLista = ({ clienteLista }) => {
  return (
    <section>
      <p className="padd2">Listado de Clientes</p>
      <div>
        <table className="formatTable">
          <thead className="cGray">
            <tr>
              <th>
                <input type="checkbox" name="" id="" />
              </th>
              <th>N°</th>
              <th>NOMBRE</th>
              <th>R.U.C</th>
              <th>ACCIONES</th>
            </tr>
          </thead>
          <tbody className="cBlack">
            {clienteLista.map((cliente, index) => (
              <tr key={index}>
                <td>
                  <input type="checkbox" name="" id="" />
                </td>
                <td>{index + 1}</td>
                <td>{cliente.cliente}</td>

                <td>{cliente.ruc}</td>
                <td>
                  <Link
                    className="btnWarning"
                    to={`/clientes/editar/${cliente._id}`}
                  >
                    editar
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default ClienteLista;
