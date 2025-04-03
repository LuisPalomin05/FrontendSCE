import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { IonIcon } from "@ionic/react";
import { podiumOutline, listOutline, refreshOutline,addOutline } from "ionicons/icons";

const localhost = "https://backendapi-6thn.onrender.com/api/clientes";

export default function ClientesVista() {
  const [Clientes, setClientes] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const res = await axios.get(localhost);
      setClientes(res.data);
    }
    fetchData();
  }, []);

  return (
    <div className="padd2">
      <section className="flexbox topListCompras">
        <div className="flexbox boxbottontop">
          <div className="flexcenter bottonitem">
            <IonIcon icon={podiumOutline}></IonIcon>
          </div>
          <div className="flexcenter bottonitem">
            <IonIcon className="ioniconwhite" icon={listOutline} />
          </div>
          <div className="flexcenter bottonitem">
            <IonIcon icon={refreshOutline}></IonIcon>
          </div>
        </div>
        <div>
          <p className=" titleboxCompras">10 resultados - 50 listados</p>
        </div>
        <div className="flexbox optionmenubox">
          <Link to={"/clientes/create"} className="flexcenter createButtonBox">
            <div className="flexcenter">
              <IonIcon icon={addOutline}></IonIcon>
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
          <table className="formatTable">
            <thead className="cGray">
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
            <tbody className="cBlack">
              {Clientes.map((cliente, index) => (
                <tr key={index}>
                  <td>
                    <input type="checkbox" name="" id="" />
                  </td>
                  <td>{index + 1}</td>
                  <td>{cliente.cliente}</td>

                  <td>{cliente.ruc}</td>
                  <td>{cliente._id}</td>
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
    </div>
  );
}
