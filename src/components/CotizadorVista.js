import React, { useState } from "react";
import "../content/css/cotizadorVista.css";

export default function CotizadorVista() {
  const hoy = new Date();
  const fechaActual = `${hoy.getFullYear()}-${String(
    hoy.getMonth() + 1
  ).padStart(2, "0")}-${String(hoy.getDate()).padStart(2, "0")}`;

 const optEmpresa = [
    { empresa: "Torque-G46", src: "" },
  
    {  empresa: "Irontools", src: "" },];

  const [ruc, setRuc] = useState("");
  const [moneda, setMoneda] = useState("$.");
  const [empresa, setEmpresa] = useState(optEmpresa[0].empresa);
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
      <div className="flex2 ">

        <section>
          <h1 className="cBlack">Datos Cliente</h1>
          <p>Ingresa los datos del cliente a cotizar:</p>
          <div className="flexbox wd">
            <section className="wd85"> <div className="flexbox gapp4 padd1">
              <div className="flexbox">
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
              {/* ---------------- */}
              <div className="flexbox gapp4 padd1">
                <div className="flexColumn">
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
              </div>
            </section>
            <section className="wd3 padd1">
              <img className="" src="" alt="" />
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
        <section>
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
            <h3>Forma de pago</h3>
            <select name="forma_pago" id="forma_pago" className="wd">
              <option value="contado">Contado</option>
              <option value="credito">Credito</option>
              <option value="credito">Credito 7 Días</option>
              <option value="credito">Credito 15 Días</option>
              <option value="credito">Credito 30 Días</option>
              <option value="credito">Credito 90 Dias</option>
            </select>
          </div>
        </section>

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
          <textarea className="wd" placeholder="Observaciones..." />
          <button className="btnSuccess" type="submit">
            GUARDAR DATOS
          </button>

          <p>{empresa}</p>
        </div>
      </div>
    </div>
  );
}
