import React, { useState } from "react";
import "../content/css/cotizadorVista.css";

export default function CotizadorVista() {
  const hoy = new Date();
  const fechaActual = `${hoy.getFullYear()}-${String(
    hoy.getMonth() + 1
  ).padStart(2, "0")}-${String(hoy.getDate()).padStart(2, "0")}`;

  const [fechaEmision, setFechaEmision] = useState(fechaActual);
  const [productos, setProductos] = useState([]);
  // const [moneda, setMoneda] = useState("S/.");
  const [credits, setCredits] = useState("Contado");
  const [ruc, setRuc] = useState("");

  // const MonedaTipo = [
  //   { moneda: "Dolares", simbolo: "$." },
  //   { moneda: "Soles", simbolo: "S/." },
  // ];

  const optEmpresa = [
    {
      empresa: "Torque-G46",
      RUC_EMPRESA: "20601395801",
      direccion: "Jr. Holanda 2050 - Cercado de Lima",
      correo: "ventas@torqueg46.com.pe",
      titulocotizacion:"PERNOS Y TUERCAS TORQUE-G46 S.A.C",
      src: "https://raw.githubusercontent.com/LuisPalomin05/FrontendSCE/refs/heads/main/src/content/logos/TorqueFBICON.png",
    },
    {
      empresa: "Irontools",
      RUC_EMPRESA: "20548129576",
      direccion: "Urb. Santa Cruz Mz A lt 12 - Callao",
      correo: "ventas@irontools.com.pe",
      titulocotizacion: "IRONTOOLS S.A.C",
      src: "https://raw.githubusercontent.com/LuisPalomin05/FrontendSCE/10799e22045a0ff79009c2e05866d62326a031a8/src/content/logos/IRONTOOLSICON.png",
    },
  ];

  const MonedaTipo =[{moneda:"Dolares", simbolo:"$."},{moneda:"Soles", simbolo:"S/."}];


  const [simbolo, setSimbolo] = useState(MonedaTipo[0].simbolo);
  const [moneda, setMoneda] = useState(MonedaTipo[0].moneda);

  const [empresa, setEmpresa] = useState(optEmpresa[0].empresa);
  const [imgEmpresa, setImgEmpresa] = useState(optEmpresa[0].src);
  const [titulocotizacion, setTituloCotizacion] = useState(
    optEmpresa[0].titulocotizacion
  );
  const [RUC_EMPRESA, setRUC_EMPRESA] = useState(optEmpresa[0].RUC_EMPRESA);
  const [direccion, setDireccion] = useState(optEmpresa[0].direccion);
  const [correo, setCorreo] = useState(optEmpresa[0].correo);

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
    const selMoneda = MonedaTipo.find(
      (opcion) => opcion.moneda === event.target.value
    );
    setMoneda(selMoneda.moneda);
    setSimbolo(selMoneda.simbolo);
  };

  const handlechangeselectcredits = (event) => {
    setCredits(event.target.value);
  };

  const handlechangeselectempresa = (event) => {
    const selEmpresa = optEmpresa.find(
      (opcion) => opcion.empresa === event.target.value
    );
    setImgEmpresa(selEmpresa.src);
    setEmpresa(selEmpresa.empresa);
    setTituloCotizacion(selEmpresa.titulocotizacion);
    setRUC_EMPRESA(selEmpresa.RUC_EMPRESA);
    setDireccion(selEmpresa.direccion);
    setCorreo(selEmpresa.correo);
  };

  const handleFechaChange = (event) => {
    setFechaEmision(event.target.value);
  };

  const { total, igv, totalFinal } = calcularTotales();

  return (
    <div className="cotizadorBox gapp4">
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
          <section className="imglogobox">
            <img
              className="pnglogo "
              src={imgEmpresa}
              alt=""
              draggable="false"
            />
          </section>
        </section>

        {/* <section>
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

              <tbody>
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
                {simbolo} {total}
                </p>
              </div>
              <div className="flexbox padd2 bordergray bgWhite">
                <p colSpan="4" className="wd1">
                  I.G.V
                </p>
                <p id="igvImpuesto">
                {simbolo} {igv}
                </p>
              </div>
              <div className="flexbox padd2 bordergray bgWhite">
                <p colSpan="4" className="wd1">
                  Total
                </p>
                <p id="totalFinal">
                {simbolo} {totalFinal}
                </p>
              </div>
            </section>
          </div>
        </section> */}

        <section className="bgwhite padd10">
          {/* <div className="flexalign gapp2 jcAround ">
            <div className="imglogobox">
              {" "}
              <img
                className="pnglogo "
                src={imgEmpresa}
                alt=""
                draggable="false"
              />
            </div>
            <div className="textcenter">
              <h4 className="cBlack">{titulocotizacion}</h4>
              <p>{direccion}</p>
              <p>Correo: {correo}</p>
              <p>Telefono: 977 492 484</p>
            </div>
            <div className="bordergray textcenter roundborder">
              <h4 className="cBlack textcenter ptop">{RUC_EMPRESA}</h4>
              <div className="bgGray padd3">COTIZACION</div>
              <div className="ptop"> IDCotizzacion</div>
            </div>
          </div>
          <div className="flexbox jcBetween gapp4 padd10">
            <div>
              <div className="flexbox">
                <h5 className="cBlack ">Razon Social:</h5>{" "}
                <p className="pleft">NombreEmpresa</p>
              </div>
              <div className="flexbox">
                <h5 className="cBlack ">RUC:</h5>{" "}
                <p className="pleft">20170717261</p>
              </div>
              <div className="flexbox">
                <h5 className="cBlack ">Direccion:</h5>{" "}
                <p className="pleft">direccionubicacion</p>
              </div>
            </div>
            <div>
              <div className="flexbox">
                <h5 className="cBlack">Fecha : </h5>
                <p className="pleft"> {fechaEmision} </p>
              </div>
              <div className="flexbox">
                <h5 className="cBlack">Forma de Pago:</h5>
                <p className="pleft">{credits}</p>
              </div>
              <div className="flexbox">
                <h5 className="cBlack">Tipo de Moneda:</h5>
                <p className="pleft">
                  {" "}
                  {moneda} ({simbolo})
                </p>
              </div>
            </div>
          </div> */}
          <div>
            {/* <div>productos</div> */}
            <div className="padd1 bordergray">
              <table className="wd padd1 ">
                <thead className="bgGray">
                  <tr>
                    <th>N° Item</th>
                    <th>Descripcion</th>
                    <th>Cantidad</th>
                    <th>Precio</th>
                    <th>Subtotal</th>
                  </tr>
                </thead>

                <tbody>
                  {productos.map((producto, index) => (
                    <tr key={index}>
                      <td>{index + 1}</td>
                      <td>{producto.nombre}</td>
                      <td>{producto.cantidad}</td>
                      <td>{producto.precio.toFixed(3)}</td>
                      <td>{producto.subtotal.toFixed(3)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              {productos.length === 0 ? (
                <section className="wd flexcenter bgGray padd3">
                  <div> Agrega un producto a la cotizacion </div>{" "}
                </section>
              ) : null}

              <div className="flexbox jcBetween gapp4 bordergray padd1">
                <section className="wdst bordergray padd2 roundborder">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Consequatur fuga aperiam numquam consectetur expedita porro.
                  Accusamus pariatur asperiores ad et!
                </section>
                <section className="flexColumn w33 bgGray ptop roundborder martop ">
                  <div className=" flexbox padd2 bordergray bgWhite">
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
            </div>
          </div>
          <div>
            <div>observaciones</div>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Velit amet ipsum cum! Sed velit minus commodi laborum pariatur sapiente reiciendis.</p>
          </div>
          <div></div>
        </section>
      </div>

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
              <option value="Dolares">Dolar</option>
              <option value="Soles">Soles</option>
            </select>
          </div>
          <div>
            <h3>Forma de pago</h3>
            <select
              name="forma_pago"
              id="forma_pago"
              className="wd padd2"
              onChange={handlechangeselectcredits}
              value={credits}
            >
              <option value=" Contado">Contado</option>
              <option value=" Credito">Credito</option>
              <option value=" Credito 7 Días ">Credito 7 Días</option>
              <option value=" Credito 15 Días ">Credito 15 Días</option>
              <option value=" Credito 30 Días ">Credito 30 Días</option>
              <option value=" Credito 90 Dias ">Credito 90 Dias</option>
            </select>
          </div>
        </section>

        <section className="flexbox ptop bgWhite gapp4 padd2">
          <button className="btnSuccess padd1" onClick={agregarProducto}>
            AGREGAR
          </button>
          <button className="btnSuccess" onClick={""}>
            PREVISUALIZAR
          </button>
        </section>

        <section className="padd2 ">
          <div className="montoTotalbx bgGray">
            <div className="flex1">CANTIDAD DE PRODUCTOS:</div>
            <div>{productos.length}</div>
          </div>
        </section>
        <section className="padd2 ">
          <div className="montoTotalbx bgGray">
            <div className="flex1">MONTO TOTAL A PAGAR:</div>
            <div>
            {simbolo} {totalFinal}
            </div>
          </div>
        </section>

        <div className="padd2">
          <h3 className="cBlack">Observaciones</h3>
          <textarea
            className="wd padd1"
            placeholder="Observaciones..."
            rows="5"
          />
          <button className="btnSuccess" type="submit">
            GUARDAR DATOS
          </button>
        </div>
      </div>
    </div>
  );
}
