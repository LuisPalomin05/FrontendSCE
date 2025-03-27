import React from "react";
import { Link } from "react-router-dom";


export default function Clientes() {
  //   const [idcliente, setIdCliente] = useState("");
  // const [rucCliente, setRucCliente] = useState("");
  // const [nombreCliente, setNombreCliente] = useState("");

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
                        
                    </tr>
                
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <input type="checkbox" name="" id="" />

                    </td>
                    <td>1</td>
                    <td>Empresa 1</td>
                    <td>123456789</td>
                  </tr>
                </tbody>
            </table>
        </div>
      </section>
    </div>
  );
}
