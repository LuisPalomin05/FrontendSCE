import React from "react";
import { Link } from "react-router-dom";

const ProveedorLista = ({ proveedor }) => {
  if (!Array.isArray(proveedor)) {
    return <p>no hay proveedores disponibles</p>;
  }
  return (
    <section>
      <p className="padd2">Listado de Provedores</p>
      <section>
        <table className="formatTable">
          <thead className="cGray">
            {" "}
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
            {proveedor.map((prov, index) => (
              <tr key={index}>
                <td>
                  <input type="checkbox" name="" id="" />
                </td>
                <td>{index + 1}</td>
                <td>{prov.nombre}</td>
                <td>{prov.rucProveedor}</td>
                <td>
                  <Link
                    className="btnWarning"
                    to={`/proveedores/editar/${prov._id}`}
                  >
                    editar
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </section>
  );
};

export default ProveedorLista;
