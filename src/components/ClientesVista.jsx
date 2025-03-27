import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function Clientes() {
    const [idcliente, setIdCliente] = useState("");
  const [rucCliente, setRucCliente] = useState("");
  const [nombreCliente, setNombreCliente] = useState("");

  // useEffect(() => {
  //     async function fetchDataList() {
  //         const res = await axios.get("https://backendapi-6thn.onrender.com/api/clientes");
  //         setCliente(res.data);
  //     }
  //     fetchDataList();
  // }, []);

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
          <Link to={"crear"} className="flexcenter createButtonBox">
            <div className="flexcenter">
              <ion-icon name="add-outline"></ion-icon>
            </div>
            <div className="flexcenter">
              <p>Registrar Compra</p>
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
                        
                    </tr>
                
                </thead>
            </table>
        </div>
      </section>
    </div>
  );
}
