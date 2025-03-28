import React, { useState } from "react";
import "../content/css/cotizadorVista.css";
import { NumeroLiteral } from "../utils/NumeroLiteral";
import { downloadToimg as ScreenShot} from "../utils/imgDescarga";
import { IonIcon } from "@ionic/react";
import {caretForwardOutline , bagAddOutline, cloudDownloadOutline, createOutline, trashOutline } from "ionicons/icons";

export default function CotizadorVista() {
  const hoy = new Date();
  const fechaActual = `${hoy.getFullYear()}-${String(
    hoy.getMonth() + 1
  ).padStart(2, "0")}-${String(hoy.getDate()).padStart(2, "0")}`;


  const [fechaEmision, setFechaEmision] = useState(fechaActual);
  const [productos, setProductos] = useState([]);
  const [credits, setCredits] = useState("Contado");
  const [rucCliente, setRuc] = useState("");
  const [ncotizacion, setNcotizacion] = useState("");

  


  const optEmpresa = [
    {
      empresa: "Torque-G46",
      RUC_EMPRESA: "20601395801",
      direccion: "Jr. Holanda 2050 - Cercado de Lima",
      correo: "ventas@torqueg46.com.pe",
      titulocotizacion: "PERNOS Y TUERCAS TORQUE-G46 S.A.C",
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

  const MonedaTipo = [
    { moneda: "Dolares", simbolo: "$." },
    { moneda: "Soles", simbolo: "S/." },
  ];

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
  const [nameClient, setnameClient] = useState("");
  const [observaciones, setObservaciones] = useState("");

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

  const handlechangenumerocotizacion = (event) => {
    setNcotizacion(event.target.value);
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

const handlechangeclientname = (event) => {
    setnameClient(event.target.value);
  };

  const handlechangeclientruc = (event) => {
    setRuc(event.target.value);
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

  const handleAgregaObservacion= (event) =>{
    setObservaciones(event.target.value);
  }
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
                    value={rucCliente}
                    maxLength={12}
                    onChange={handlechangeclientruc}
                    className="inputboxitm"
                  />
                </div>
                {rucCliente.length > 5 && (
                  <div className="wd1">
                    <p>Nombre</p>
                    <input
                      type="text"
                      className="inputboxitm"
                      placeholder="Nombre del cliente"

                      onChange={handlechangeclientname}
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
        <section className="flexbox ptop bgWhite gapp4 padd2">
        <button className="btnInfo flexalign gapp4" onClick={agregarProducto}>
  <IonIcon icon={bagAddOutline} /> AGREGAR
</button>

<button className="btnWarning flexbox gapp4" onClick={() => ScreenShot("ScreenCotizacion")}>
  <IonIcon className="padd1" icon={cloudDownloadOutline} /> DESCARGAR
</button>
        </section>
        <section>
          <p>Ingresa los datos de los productos que deseas cotizar</p>
          <div className="padd1 bordergray">
            <table className="wd padd1 ">
              <thead className="bgGray">
                <tr>
                  <th className="padd2 ">
                    <input type="checkbox" />
                  </th>
                  <th>N°</th>
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
                    <td className="textcenter">{producto.cantidad}</td>
                    <td className="textcenter">{producto.precio.toFixed(3)}</td>
                    <td className="textright">{producto.subtotal.toFixed(3)}</td>
                    <td className="flexcenter gapp2">
  <p className="btnWarning" onClick={() => editarProducto(producto.id)}>
    <IonIcon icon={createOutline} />
  </p>
  <p className="btnDanger" onClick={() => eliminarProducto(producto.id)}>
    <IonIcon icon={trashOutline} />
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
        </section>
<br/>
        <section className="bgwhite padd10" id="ScreenCotizacion">
          <div className="flexalign gapp2 jcAround padd1">
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
            <div className="bordergray textcenter roundborder ">
              <h4 className="bxcotizador cBlack">{RUC_EMPRESA}</h4>
              <div className="bxcotizador bgGray">COTIZACION</div>
              <div className="bxcotizador"> ID {ncotizacion}</div>
            </div>
          </div>
          <div className="flexbox jcBetween gapp4 padd3">
            <div>
              <div className="flexbox">
                <h5 className="cBlack ">Razon Social:</h5>
                <p className="pleft"> {nameClient} </p>
              </div>
              <div className="flexbox">
                <h5 className="cBlack ">RUC:</h5>
                <p className="pleft"> {rucCliente} </p>
              </div>
              <div className="flexbox">
                <h5 className="cBlack ">Direccion:</h5>
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
          </div>
          <div>
            {/* <div>productos</div> */}
            <div className="padd1 bordergray">
              <table className="wd padd1 ">
                <thead className="bgGray">
                  <tr >
                    <th className="nitem">N°</th>
                    <th >Descripcion</th>
                    <th>Cantidad</th>
                    <th>Precio</th>
                    <th>Subtotal</th>
                  </tr>
                </thead>

                <tbody>
                  {productos.map((producto, index) => (
                    <tr key={index}>
                      <td className="textcenter">{index + 1}</td>
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
<div className="padd3"></div>
              <div className="flexbox jcBetween gapp4 bordergray padd1">
                <br/>
                <section className="wdst bordergray padd2 roundborder">
                  {/* <br/> */}
                  <section className="cBlack">
                    {NumeroLiteral(totalFinal, moneda.toUpperCase())}
                  </section>
                </section>
                <section className="flexColumn w33 bgGray ptop roundborder martop ">
                  <div className=" flexbox padd2 bordergray bgWhite">
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
            </div>
          </div>
          <div>
            <h4 className="cBlack padd2">Observaciones :</h4>
            <p className="parraf">
              {observaciones}
            </p>
          </div>
          <div></div>
        </section>
      </div>

      <div className="flex1 toolsboxside bgWhite">
        <div className="flexbox padd2 bottombordergray ">
        <IonIcon icon={caretForwardOutline} />          <h1>HERRAMIENTAS</h1>
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
            {/* <DatePicker  className="padd1" selected={date} onChange={setDate}/> */}
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

<section  className=" padd2 gapp4 jcAround martop">
  <h3>
    N° de Cotizacion
  </h3>
  <input
    type="text"
    className="padd1"
    placeholder="ID Cotizacion"
    value={ncotizacion}
    onChange={handlechangenumerocotizacion}
  />
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
            onChange={handleAgregaObservacion}
          />
          <button className="btnSuccess" type="submit">
            GUARDAR DATOS
          </button>
        </div>
      </div>
    </div>
  );
}
