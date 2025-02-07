import React, { useState } from "react";
import "../content/css/cotizadorVista.css";

export default function CotizadorVista() {
  const [ruc, setRuc] = useState("");

  return (
    <div className="cotizadorBox">
      <div className="red flex2">
      <section className="flexColumn gapp8">
      
        <div className="flexbox gapp4">
          <div className="flexbox gapp4">
            <div>
              <p>Ruc</p>
              <input
                type="text"
                id="rucInputData"
                placeholder="2012345678X"
                value={ruc}
                maxLength={12}
                onChange={(e) => setRuc(e.target.value)} // Actualiza el estado al escribir
                className="inputboxitm"
              />
            </div>
            {ruc.length > 5 && (
              <div>
                <p>Nombre</p>
                <input
                  type="text"
                  className="inputboxitm"
                  disabled
                  placeholder="Nombre del cliente"
                />
              </div>
            )}
          </div>
          <div>
            <p>Moneda</p>
            <select name="empresas" id="empresas" className="selectBox">
              <option value="Torque-G46">Dolar</option>
              <option value="Irontools">Soles</option>
            </select>
          </div>
          <div>
            <p>Empresa</p>
            <select name="empresas" id="empresas" className="selectBox">
              <option value="Torque-G46">Torque-G46</option>
              <option value="Irontools">Irontools</option>
            </select>
          </div>
        </div>

        <div className="flexbox gapp4 ptop">
          <div className="wd2 flexColumn">
            <p>Producto</p>
            <input
              type="text"
              placeholder="Producto"
              className="inputboxitm wd"
            />
          </div>

          <div>
            <p>Cantidad</p>
            <input
              type="number"
              placeholder="Cantidad"
              className="inputboxitm"
            />
          </div>

          <div>
            <p>Precio</p>
            <input type="number" placeholder="Precio" className="inputboxitm" />
          </div>
        </div>
      </section>
      <section className="ptop">
        <button className="btnSuccess padd1">Agregar</button>{" "}
      </section>
      <section>
        <p>Ingresa los datos de los productos que deseas cotizar</p>
        <div>
          <table className="flexColumn">
            <thead>
              <tr>
                <th>Producto</th>
                <th>Cantidad</th>
                <th>Precio</th>
                <th>Subtotal</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Producto 1</td>
                <td>5</td>
                <td>100</td>
                <td>500</td>
              </tr>
              <tr>
                <td>Producto 2</td>
                <td>10</td>
                <td>200</td>
                <td>2000</td>
              </tr>
              <tr>
                <td>Producto 3</td>
                <td>2</td>
                <td>300</td>
                <td>600</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      </div>

      <div className="bgreen flex1">
<p>aa</p>
      </div>
    </div>
  );
}
