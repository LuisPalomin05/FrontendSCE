import React, { useState, useEffect } from "react";
import "../../content/css/cotizadorVista.css";
import { NumeroLiteral } from "../../utils/NumeroLiteral";
import { downloadToimg as ScreenShot } from "../../utils/imgDescarga";
import { IonIcon } from "@ionic/react";
import {
  caretForwardOutline,
  bagAddOutline,
  cloudDownloadOutline,
  createOutline,
  trashOutline,
} from "ionicons/icons";

export default function CotizadorVista() {
  const optEmpresa = [
    {
      razonSocial: "Torque-G46",
      RUC_EMPRESA: "20601395801",
      direccion: "Jr. Holanda 2050 - Cercado de Lima",
      correo: "ventas@torqueg46.com.pe",
      titulocotizacion: "PERNOS Y TUERCAS TORQUE-G46 S.A.C",
      src: "https://raw.githubusercontent.com/LuisPalomin05/FrontendSCE/refs/heads/main/src/content/logos/TorqueFBICON.png",
    },
    {
      razonSocial: "Irontools",
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

  const [ruc, setRuc] = useState("");
  const [cliente, setCliente] = useState("");
  const [empresa, setEmpresa] = useState("");
  const [emision, setEmision] = useState(
    new Date().toISOString().split("T")[0]
  );
  const [moneda, setMoneda] = useState("");
  const [formaPago, setFormaPago] = useState("");
  const [nCotizacion, setNcotizacion] = useState("");
  const [productos, setProductos] = useState([]);
  const [totalPago, setTotalPago] = useState(0);
  const [observaciones, setObservaciones] = useState("");
  const [estado, setEstado] = useState("");
  const [autor, setAutor] = useState("luis");


  // valores de tabla y adicionales.
  const [pProductoTb, setpProductoTb] = useState("");
  const [pCantidadTb, setpCantidadTb] = useState(0);
  const [pPrecioTb, setpPrecioTb] = useState(0);
  const [simbolo, setSimbolo] = useState("");
  const [imgEmpresa, setImgEmpresa] = useState(optEmpresa[0].src);

  const agregarProducto = () => {
    if (!pProductoTb || isNaN(pCantidadTb) || isNaN(pPrecioTb)) return;

    const nuevoProducto = {
      id: productos.length + 1,
      nombre: pProductoTb,
      cantidad: pCantidadTb,
      precio: pPrecioTb,
      subtotal: pCantidadTb * pPrecioTb,
    };

    setProductos([...productos, nuevoProducto]);

    setpProductoTb("");
    setpCantidadTb(0);
    setpPrecioTb(0);
  };

  const eliminarProducto = (id) => {
    setProductos(productos.filter((producto) => producto.id !== id));
  };

  const editarProducto = (id) => {
    const producto = productos.find((producto) => producto.id === id);
    if (producto) {
      setpProductoTb(producto.nombre);
      setpCantidadTb(producto.cantidad);
      setpPrecioTb(producto.precio);
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

  const { total, igv, totalFinal } = calcularTotales();

  useEffect(() => {
    setTotalPago(totalFinal);
  }, [totalFinal]);
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
                      value={cliente}
                      onChange={(e) => {
                        setCliente(e.target.value);
                      }}
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
                  value={empresa.razonSocial}
                  onChange={(e) => {
                    setEmpresa(e.target.value);
                  }}
                >
                  {optEmpresa.map((opcion, index) => 
                    <option key={index} value={opcion}>
                      {opcion.razonSocial}
                    </option>
                   
                  )}
                </select>
              </div>
            </div>

            <div className="flexbox gapp4 padd1">
              <div className="flexColumn">
                <p>Producto</p>
                <input
                  type="text"
                  placeholder="Producto"
                  value={pProductoTb}
                  className="inputboxitm wd"
                  onChange={(e) => {
                    setpProductoTb(e.target.value);
                  }}
                />
              </div>

              <div>
                <p>Cantidad</p>
                <input
                  type="number"
                  placeholder="Cantidad"
                  className="inputboxitm"
                  value={pCantidadTb}
                  onChange={(e) =>
                    setpCantidadTb(parseFloat(e.target.value) || 0)
                  }
                />
              </div>

              <div>
                <p>Precio</p>
                <input
                  type="number"
                  placeholder="Precio"
                  className="inputboxitm"
                  value={pPrecioTb}
                  onChange={(e) => {
                    setpPrecioTb(parseFloat(e.target.value) || 0);
                  }}
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

          <button
            className="btnWarning flexbox gapp4"
            onClick={() => ScreenShot("ScreenCotizacion")}
          >
            <IonIcon className="padd1" icon={cloudDownloadOutline} /> DESCARGAR
          </button>
          <button className="btnDanger flexbox gapp4">
            <IonIcon className="padd1" icon={trashOutline} /> Limpiar
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
                    <td className="textcenter">
                      {Number(producto.precio).toFixed(3)}
                    </td>
                    <td className="textright">
                      {producto.subtotal.toFixed(3)}
                    </td>
                    <td className="flexcenter gapp2">
                      <p
                        className="btnWarning"
                        onClick={() => editarProducto(producto.id)}
                      >
                        <IonIcon icon={createOutline} />
                      </p>
                      <p
                        className="btnDanger"
                        onClick={() => eliminarProducto(producto.id)}
                      >
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
        <br />
        <section className="bgwhite padd10" id="ScreenCotizacion">
          <div className="flexalign gapp2 jcAround padd1">
            <div className="imglogobox">
              <img
                className="pnglogo "
                src={imgEmpresa}
                alt=""
                draggable="false"
              />
            </div>
            <div className="textcenter">
              <h4 className="cBlack">{empresa.titulocotizacion}</h4>
              
              <p>{empresa.direccion}</p>
              <p>Correo: {empresa.correo}</p>
              <p>Telefono: 977 492 484</p>
            </div>
            <div className="bordergray textcenter roundborder ">
              <h4 className="bxcotizador cBlack">{empresa.RUC_EMPRESA}</h4>
              <div className="bxcotizador bgGray">COTIZACION</div>
              <div className="bxcotizador"> ID {nCotizacion}</div>
            </div>
          </div>
          <div className="flexbox jcBetween gapp4 padd3">
            <div>
              <div className="flexbox">
                <h5 className="cBlack ">Razon Social:</h5>
                <p className="pleft"> {cliente} </p>
              </div>
              <div className="flexbox">
                <h5 className="cBlack ">RUC:</h5>
                <p className="pleft"> {ruc} </p>
              </div>
              <div className="flexbox">
                <h5 className="cBlack ">Direccion:</h5>
                <p className="pleft">direccionubicacion</p>
              </div>
            </div>
            <div>
              <div className="flexbox">
                <h5 className="cBlack">Fecha : </h5>
                <p className="pleft"> {emision} </p>
              </div>
              <div className="flexbox">
                <h5 className="cBlack">Forma de Pago:</h5>
                <p className="pleft">{formaPago}</p>
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
                  <tr>
                    <th className="nitem">N°</th>
                    <th>Descripcion</th>
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
                <br />
                <section className="wdst bordergray padd2 roundborder">
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
            <p className="parraf">{observaciones}</p>
          </div>
          <div></div>
        </section>
      </div>

      <div className="flex1 toolsboxside bgWhite">
        <div className="flexbox padd2 bottombordergray ">
          <IonIcon icon={caretForwardOutline} /> <h1>HERRAMIENTAS</h1>
        </div>
        <section className="flexbox padd2 gapp4 jcAround martop">
          <div>
            <h3 className="cBlack">Fecha Emisión</h3>
            <input
              type="date"
              className="padd1"
              name="fecha_emision"
              id="fecha_emision"
              value={emision}
              onChange={(e) => {
                setEmision(e.target.value);
              }}
            />
          </div>
          <div>
            <p>Moneda</p>
            <select
              name="moneda"
              id="moneda"
              onChange={(e) => {
                setMoneda(e.target.value);
                setSimbolo(e.target.simbolo);
              }}
              className="padd2"
            >
              {MonedaTipo.map((moned, index) => (
                <option value={moned.simbolo} key={index}>
                  {moned.moneda}
                </option>
              ))}
            </select>
          </div>
          <div>
            <h3>Forma de pago</h3>
            <select
              name="forma_pago"
              id="forma_pago"
              className="wd padd2"
              onChange={(e) => {
                setFormaPago(e.target.value);
              }}
              value={formaPago}
            >
              <option value=" Contado">Contado</option>
              <option value=" Credito">Credito</option>
              <option value=" Credito 7 Días ">Credito 7 Días</option>
              <option value=" Credito 15 Días ">Credito 15 Días</option>
              <option value=" Credito 30 Días ">Credito 30 Días</option>
              <option value=" Credito 60 Días ">Credito 60 Días</option>
              <option value=" Credito 90 Dias ">Credito 90 Dias</option>
            </select>
          </div>
        </section>

        <section className=" padd2 gapp4 jcAround martop">
          <h3>N° de Cotizacion</h3>
          <input
            type="text"
            className="padd1"
            placeholder="ID Cotizacion"
            value={nCotizacion}
            onChange={(e) => {
              setNcotizacion(e.target.value);
            }}
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
              {simbolo} {totalPago}
            </div>
          </div>
        </section>

        <div className="padd2">
          <h3 className="cBlack">Observaciones</h3>
          <textarea
            className="wd padd1"
            placeholder="Observaciones..."
            rows="5"
            onChange={(e) => {
              setObservaciones(e.target.value);
            }}
          />
          <div className="flexbox gapp4">
            <button className="btnSuccess" type="submit">
              GUARDAR DATOS
            </button>
            <button
              className="btnWarning"
              type="submit"
              onClick={() => {
                setEstado("Pedido");
              }}
            >
              Pasar a Pedido
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
