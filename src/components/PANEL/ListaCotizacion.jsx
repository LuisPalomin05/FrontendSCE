import React from "react";
import { Link } from "react-router-dom";

const ListaCotizacion = ({ cotizaciones }) => {
  const formatearFecha = (fechaISO) => {
    const fecha = new Date(fechaISO);
    const dia = String(fecha.getDate()).padStart(2, "0");
    const mes = String(fecha.getMonth() + 1).padStart(2, "0");
    const anio = fecha.getFullYear();
    return `${dia}/${mes}/${anio}`;
  };

  return (
    <section className="contentTable bgWhite roundborder">
      <table className="wd">
        <thead>
          <tr className="boldtext cBlack">
            <th>
              <input type="checkbox" name="" id="" />
            </th>
            <th>N°</th>
            <th>CLIENTE</th>
            <th>R.U.C</th>
            <th>COTIZACION</th>
            <th>FECHA</th>
            <th>IMPORTE TOTAL</th>
            <th>MONEDA</th>
            <th>ACCIONES</th>
          </tr>
        </thead>
        <tbody>
          {cotizaciones.map((cotizacion, index) => (
            <tr key={index} className="padd2">
              <td>
                <input type="checkbox" name="" id="" />
              </td>
              <td className="textcenter">{index + 1}</td>
              <td>{cotizacion.cliente}</td>
              <td className="textcenter">{cotizacion.ruc}</td>
              <td className="textcenter">{cotizacion.nCotizacion}</td>
              <td className="textcenter">
                {formatearFecha(cotizacion.emision)}
              </td>

              <td className="textcenter">
                {cotizacion.moneda === "DOLARES" ? "$. " : "S/. "}
                {cotizacion.totalPago}
              </td>
              <td className="textcenter">{cotizacion.moneda}</td>
              <td>
                <Link
                  className="btnWarning"
                  to={`/cotizacion/editar/${cotizacion._id}`}
                >
                  editar
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
};

export default ListaCotizacion;
