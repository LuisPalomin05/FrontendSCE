import React, { useState } from "react";
import "../content/css/cotizadorVista.css";

export default function CotizadorVista() {
  const hoy = new Date();
  const fechaActual = `${hoy.getFullYear()}-${String(
    hoy.getMonth() + 1
  ).padStart(2, "0")}-${String(hoy.getDate()).padStart(2, "0")}`;

  const [fechaEmision, setFechaEmision] = useState(fechaActual);
  const [productos, setProductos] = useState([]);
  const [moneda, setMoneda] = useState("S/.");
  const [ruc, setRuc] = useState("");

  const optEmpresa = [
    {
      empresa: "Torque-G46",
      src: "https://raw.githubusercontent.com/LuisPalomin05/FrontendSCE/10799e22045a0ff79009c2e05866d62326a031a8/src/content/logos/bitmapTorque.png",
    },
    {
      empresa: "Irontools",
      src: "https://raw.githubusercontent.com/LuisPalomin05/FrontendSCE/10799e22045a0ff79009c2e05866d62326a031a8/src/content/logos/IRONTOOLSICON.png",
    },
  ];

  const [empresa, setEmpresa] = useState(optEmpresa[0].empresa);
  const [imgEmpresa, setImgEmpresa] = useState(optEmpresa[0].src);

  const agregarProducto = () => {
    const nombreProdCat = document.getElementById("NombreProdCat").value;
    const cantProdCat = parseInt(
      document.getElementById("cantProdCat").value,
      10
    );
    const precioProdCat = parseFloat(
      document.getElementById("PrecioProdCat").value
    );

    if (!nombreProdCat || isNaN(cantProdCat) || isNaN(precioProdCat)) return;

    const nuevoProducto = {
      id: productos.length + 1,
      nombre: nombreProdCat,
      cantidad: cantProdCat,
      precio: precioProdCat,
      subtotal: cantProdCat * precioProdCat,
    };

    setProductos([...productos, nuevoProducto]);

    document.getElementById("NombreProdCat").value = "";
    document.getElementById("cantProdCat").value = "";
    document.getElementById("PrecioProdCat").value = "";
  };

  const eliminarProducto = (id) => {
    setProductos(productos.filter((producto) => producto.id !== id));
  };

  const editarProducto = (id) => {
    const producto = productos.find((producto) => producto.id === id);
    if (producto) {
      document.getElementById("NombreProdCat").value = producto.nombre;
      document.getElementById("cantProdCat").value = producto.cantidad;
      document.getElementById("PrecioProdCat").value = producto.precio;
      eliminarProducto(id);
    }
  };

  const calcularTotales = () => {
    const total = productos.reduce(
      (sum, producto) => sum + producto.subtotal,
      0
    );
    return {
      total: total.toFixed(2),
      igv: (total * 0.18).toFixed(2),
      totalFinal: (total * 1.18).toFixed(2),
    };
  };

  const handlechangeselectmoneda = (event) => {
    setMoneda(event.target.value);
  };

  const handlechangeselectempresa = (event) => {
    const selEmpresa = optEmpresa.find(
      (opcion) => opcion.empresa === event.target.value
    );
    setImgEmpresa(selEmpresa.src);
    setEmpresa(selEmpresa.empresa);
  };

  const handleFechaChange = (event) => {
    setFechaEmision(event.target.value);
  };

  const { total, igv, totalFinal } = calcularTotales();

  return (
    <div className="cotizadorBox">
      <div className="flex2 quotboxdata">
        <section className="clientDataBox gapp2 ">
          <section className="datosinputbox">
            <h1 className="cBlack">Datos Cliente</h1>
            <p className="cGray">Ingresa los datos del cliente a cotizar:</p>
            <div className="flexbox gapp4 padd1">
              <div className="flexbox gapp4 wd33">
                <div className="wd1">
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
                  <div className="wd1">
                    <p>Nombre</p>
                    <input
                      type="text"
                      className="inputboxitm"
                      placeholder="Nombre del cliente"
                    />
                  </div>
                )}
              </div>

              <div className="wd33">
                <p>Empresa</p>
                <select
                  className="padd2"
                  name="empresa"
                  id="empresa"
                  value={empresa}
                  onChange={handlechangeselectempresa}
                >
                  {optEmpresa.map((opcion, index) => (
                    <option key={index} value={opcion.empresa}>
                      {opcion.empresa}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            {/* ---------------- */}
            <div className="flexbox gapp4 padd1">
              <div className="flexColumn">
                <p>Producto</p>
                <input
                  type="text"
                  id="NombreProdCat"
                  placeholder="Producto"
                  className="inputboxitm wd"
                />
              </div>

              <div>
                <p>Cantidad</p>
                <input
                  type="number"
                  id="cantProdCat"
                  placeholder="Cantidad"
                  className="inputboxitm"
                />
              </div>

              <div>
                <p>Precio</p>
                <input
                  type="number"
                  id="PrecioProdCat"
                  placeholder="Precio"
                  className="inputboxitm"
                />
              </div>
            </div>
          </section>
          <section className="bordergray imglogobox">
            <img
              className="pnglogo "
              src={imgEmpresa}
              alt=""
              draggable="false"
            />
          </section>
        </section>

        {/* ------------------------------ */}

        <section>
          <section className="ptop bgWhite">
            <button className="btnSuccess padd1 wd3" onClick={agregarProducto}>
              AGREGAR
            </button>
          </section>
          <p>Ingresa los datos de los productos que deseas cotizar</p>
          <div className="padd1 bordergray">
            <table className="wd padd1 ">
              <thead className="bgGray">
                <tr>
                  <th className="padd2 ">
                    <input type="checkbox" />
                  </th>
                  <th>N° Item</th>
                  <th>Descripcion</th>
                  <th>Cantidad</th>
                  <th>Precio</th>
                  <th>Subtotal</th>
                  <th>Acciones</th>
                </tr>
              </thead>

              <tbody >
                {productos.map((producto, index) => (
                  <tr key={index}>
                    <td>
                      <input type="checkbox" name="" id="" />
                    </td>
                    <td>{index + 1}</td>
                    <td>{producto.nombre}</td>
                    <td>{producto.cantidad}</td>
                    <td>{producto.precio.toFixed(3)}</td>
                    <td>{producto.subtotal.toFixed(3)}</td>
                    <td className="flexcenter gapp2">
                      <p
                        className=" btnWarning"
                        onClick={() => editarProducto(producto.id)}
                      >
                        <ion-icon name="create-outline"></ion-icon>
                      </p>
                      <p
                        className=" btnDanger"
                        onClick={() => eliminarProducto(producto.id)}
                      >
                        <ion-icon name="trash-outline"></ion-icon>
                      </p>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            {productos.length === 0 ? (
              <section className="wd flexcenter bgGray padd3">
                <div> Agrega un producto a la cotizacion </div>{" "}
              </section>
            ) : null}

            <section className="flexColumn w33 bgGray ptop roundborder martop ">
              <div className="flexbox padd2 bordergray bgWhite">
                <p colSpan="4" className="wd1">
                  Sub-Total
                </p>
                <p id="SubTotalview">
                  {moneda} {total}
                </p>
              </div>
              <div className="flexbox padd2 bordergray bgWhite">
                <p colSpan="4" className="wd1">
                  I.G.V
                </p>
                <p id="igvImpuesto">
                  {moneda} {igv}
                </p>
              </div>
              <div className="flexbox padd2 bordergray bgWhite">
                <p colSpan="4" className="wd1">
                  Total
                </p>
                <p id="totalFinal">
                  {moneda} {totalFinal}
                </p>
              </div>
            </section>
          </div>
        </section>
      </div>
      {/* !---- */}
      <div className="flex1 toolsboxside bgWhite">
        <div className="flexbox padd2 bottombordergray ">
          <ion-icon name="caret-forward-outline"></ion-icon>
          <h1>HERRAMIENTAS</h1>
        </div>
        <section className="flexbox padd2 gapp4 jcAround martop">
          <div>
            <h3 className="cBlack">Fecha Emisión</h3>
            <input
              type="date"
              className="padd1"
              name="fecha_emision"
              id="fecha_emision"
              value={fechaEmision}
              onChange={handleFechaChange}
            />
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
            <h3>Forma de pago</h3>
            <select name="forma_pago" id="forma_pago" className="wd padd2">
              <option value="contado">Contado</option>
              <option value="credito">Credito</option>
              <option value="credito_7">Credito 7 Días</option>
              <option value="credito_15">Credito 15 Días</option>
              <option value="credito_30">Credito 30 Días</option>
              <option value="credito_90">Credito 90 Dias</option>
            </select>
          </div>
        </section>

        <section className="padd2 ">
          <div className="montoTotalbx">
            <div className="flex1">CANTIDAD DE PRODUCTOS:</div>
            <div>
            {productos.length}
            </div>
          </div>
        </section>
        <section className="padd2 ">
          <div className="montoTotalbx">
            <div className="flex1">MONTO TOTAL A PAGAR:</div>
            <div>
              {moneda} {totalFinal}
            </div>
          </div>
        </section>


        <div className="padd2">
          <h3 className="cBlack">Observaciones</h3>
          <textarea className="wd padd1" placeholder="Observaciones..." rows="5" />
          <button className="btnSuccess" type="submit">
            GUARDAR DATOS
          </button>
        </div>
      </div>
    </div>
  );
}
