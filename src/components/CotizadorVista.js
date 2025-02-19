import React, { useState } from "react";
import "../content/css/cotizadorVista.css";

export default function CotizadorVista() {
  const hoy = new Date();
  const fechaActual = `${hoy.getFullYear()}-${String(
    hoy.getMonth() + 1
  ).padStart(2, "0")}-${String(hoy.getDate()).padStart(2, "0")}`;

  const [ruc, setRuc] = useState("");
  const [moneda, setMoneda] = useState("$.");
  const [empresa, setEmpresa] = useState("");
  const [fechaEmision, setFechaEmision] = useState(fechaActual);
  const [imgEmpresa, setImgEmpresa] = useState("");

  const handlechangeselectmoneda = (event) => {
    setMoneda(event.target.value);
  };

  const handlechangeselectempresa = (event) => {
    setEmpresa(event.target.value);
  };

  const handleFechaChange = (event) => {
    setFechaEmision(event.target.value);
  };

  return (
    <div className="cotizadorBox">
      <div className="flex2 borange">
        <section className="flexColumn gapp8">
        <div className="red">
          <div className="flexbox gapp4 bgreen">
          
            <div className="flexbox gapp4">
            
              <div>
                <p>Ruc</p>
                <input
                  type="text"
                  id="rucInputData"
                  placeholder="2012345678X"
                  value={ruc}
                  maxLength={12}
                  onChange={(e) => setRuc(e.target.value)}
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
              <select
                name="moneda"
                id="moneda"
                onChange={handlechangeselectmoneda}
                className="padd2"
                value={moneda}
              >
                <option value="$.">Dolar</option>
                <option value="S/.">Soles</option>
              </select>
            </div>
            <div>
              <p>Empresa</p>
              <select
                name="empresa"
                id="empresa"
                onChange={handlechangeselectempresa}
                className="padd2"
                value={empresa}
              >
                <option value="Torque-G46">Torque-G46</option>
                <option value="Irontools">Irontools</option>
              </select>
            </div>
          </div>

          <div className="flexbox gapp4 padd1">
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
              <input
                type="number"
                placeholder="Precio"
                className="inputboxitm"
              />
            </div>
          </div> </div> 
          <div>
            <img src="" alt="" className="imgicons red"/>
          </div>
        </section>

        <section>
          <p>Ingresa los datos del cliente a cotizar:</p>
          <div className="flexbox">
          <section>
            <div>              <div>
                <p>Ruc</p>
                <input
                  type="text"
                  id="rucInputData"
                  placeholder="2012345678X"
                  value={ruc}
                  maxLength={12}
                  onChange={(e) => setRuc(e.target.value)}
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
              )}</div>
              <div>
              <p>Moneda</p>
              <select
                name="moneda"
                id="moneda"
                onChange={handlechangeselectmoneda}
                className="padd2"
                value={moneda}
              >
                <option value="$.">Dolar</option>
                <option value="S/.">Soles</option>
              </select>
              <div>
              <p>Empresa</p>
              <select
                name="empresa"
                id="empresa"
                onChange={handlechangeselectempresa}
                className="padd2"
                value={empresa}
              >
                <option value="Torque-G46">Torque-G46</option>
                <option value="Irontools">Irontools</option>
              </select>
            </div>
            </div>
{/* ---------------- */}
            <div></div>
          </section>
          <section>
            <img src={""} alt=""/>
          </section>
          </div>

        </section>

        {/* ------------------------------ */}
        <section className="ptop bgWhite">
          <button className="btnSuccess padd1">Agregar</button>
        </section>
        <section>
          <p>Ingresa los datos de los productos que deseas cotizar</p>
          <div>
            <table className="wd">
              <thead className="bgGray padd3">
                <tr className="padd3">
                  <td className="flexcenter">
                    <input type="checkbox" />
                  </td>
                  <th>DESCRIPCION</th>
                  <th>CANTIDAD</th>
                  <th>PRECIO</th>
                  <th>SUBTOTAL</th>
                </tr>
              </thead>
              <tbody>
                <tr className="bgWhite">
                  <td className="flexcenter">
                    <input type="checkbox" />
                  </td>
                  <td>Producto 1</td>
                  <td className="textcenter">5</td>
                  <td className="textcenter">100</td>
                  <td className="textcenter">500</td>
                </tr>
              </tbody>
              <tfoot>
                <tr>
                  <td colSpan="4">Sub-Total</td>
                  <td>{moneda} 7.00</td>
                </tr>
                <tr>
                  <td colSpan="4">I.G.V</td>
                  <td>{moneda} 7.00</td>
                </tr>
                <tr>
                  <td colSpan="4">Total</td>
                  <td>{moneda} 7.00</td>
                </tr>
              </tfoot>
            </table>
          </div>
        </section>
      </div>

      <div className="flex1">
        <div className="flexbox padd1">
        <ion-icon name="caret-forward-outline"></ion-icon>
          <h1>HERRAMIENTAS</h1>
        </div>
        <div>
          <h3 className="cBlack">Fecha Emisión</h3>
          <input
            type="date"
            name="fecha_emision"
            id="fecha_emision"
            value={fechaEmision}
            onChange={handleFechaChange}
          />
        </div>

        <div>
          <table>
            <tfoot>
              <tr>
                <td colSpan="4">Sub-Total</td>
                <td>{moneda} 7.00</td>
              </tr>
              <tr>
                <td colSpan="4">I.G.V</td>
                <td>{moneda} 7.00</td>
              </tr>
              <tr>
                <td colSpan="4">Total</td>
                <td>{moneda} 7.00</td>
              </tr>
            </tfoot>
          </table>
        </div>

        <div>
          <h3 className="cBlack">Observaciones</h3>
          <textarea className="wd" />
          <button className="btnSuccess" type="submit">
            GUARDAR DATOS
          </button>

          <p>{empresa}</p>
        </div>
      </div>
    </div>
  );
}
