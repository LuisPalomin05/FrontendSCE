import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const localhost = "http://localhost:5000/";
export default function Clientes() {
  const [Clientes, setClientes] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const res = await axios.get(localhost + "api/clientes");
      setClientes(res.data);


    }
    fetchData();
  }, []);

  return (
    <div className="padd2">
      <section className="flexbox topListCompras">
        <div className="flexbox boxbottontop">
          <div className="flexcenter bottonitem">
            <ion-icon name="podium-outline"></ion-icon>
          </div>
          <div className="flexcenter bottonitem">
            <ion-icon name="list-outline"></ion-icon>
          </div>
          <div className="flexcenter bottonitem">
            <ion-icon name="refresh-outline"></ion-icon>
          </div>
        </div>
        <div>
          <p className=" titleboxCompras">10 resultados - 50 listados</p>
        </div>
        <div className="flexbox optionmenubox">
          <Link to={"/clientes/create"} className="flexcenter createButtonBox">
            <div className="flexcenter">
              <ion-icon name="add-outline"></ion-icon>
            </div>
            <div className="flexcenter">
              <p>Registrar Cliente</p>
            </div>
          </Link>
          <select name="empresas" id="empresas">
            <option value="Torque-G46">Torque-G46</option>
            <option value="Irontools">Irontools</option>
          </select>
        </div>
      </section>

      <section>
        <p>Listado de Clientes</p>
        <div>
          <table>
            <thead>
              <tr>
                <th>
                  <input type="checkbox" name="" id="" />
                </th>
                <th>N°</th>
                <th>NOMBRE</th>
                <th>R.U.C</th>
                <th>IdDATA</th>
                <th>ACCIONES</th>
              </tr>
            </thead>
            <tbody>
              {Clientes.map((cliente, index) => (
                <tr key={index}>
                  <td>
                    <input type="checkbox" name="" id="" />
                  </td>
                  <td>
                    {index + 1}
                  </td>
                  <td>{cliente.cliente}</td>

                  <td>{cliente.ruc}</td>
                  <td>
                    {cliente._id}
                  </td>
                  <td>
                  <Link className="btnWarning" to={`/clientes/editar/${cliente._id}`}>editar</Link>
                  </td>
                </tr>
              ))}
              
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}
