import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { IonIcon } from "@ionic/react";
import axios from "axios";
import {
  caretForwardOutline,
  bagAddOutline,
  cloudDownloadOutline,
  createOutline,
  trashOutline,
} from "ionicons/icons";
import { downloadToimg as ScreenShot } from "../../utils/imgDescarga";
import generatePDF from "./generatePDF";

const localhost = "https://backendapi-6thn.onrender.com/api/cotizacion";

const CotizacionCreate = () => {
  const navigate = useNavigate();
  const optEmpresa = [
    {
      razonSocial: "Torque-G46",
      RUC_EMPRESA: "20601395801",
      direccion: "Jr. Holanda 2050 - Cercado de Lima",
      correo: "ventas@torqueg46.com.pe",
      titulocotizacion: "PERNOS Y TUERCAS TORQUE-G46 S.A.C",
      src: "https://raw.githubusercontent.com/LuisPalomin05/FrontendSCE/refs/heads/main/src/content/logos/TorqueFBICON.png",
      telefono:"+51 977 492 484"},
    {
      razonSocial: "Irontools",
      RUC_EMPRESA: "20548129576",
      direccion: "Urb. Santa Cruz Mz A lt 12 - Callao",
      correo: "ventas@irontools.com.pe",
      titulocotizacion: "IRONTOOLS S.A.C",
      src: "https://raw.githubusercontent.com/LuisPalomin05/FrontendSCE/10799e22045a0ff79009c2e05866d62326a031a8/src/content/logos/IRONTOOLSICON.png",
      telefono:"+51 977 492 484"},
  ];

  const [empresaSeleccionada, setEmpresaSeleccionada] = useState(optEmpresa[0]);

  const handleEmpresaChange = (e) => {
    const empresaNombre = e.target.value;
    setEmpresa(empresaNombre);

    const empresaEncontrada = optEmpresa.find(
      (emp) => emp.razonSocial === empresaNombre
    );
    setEmpresaSeleccionada(empresaEncontrada);
  };

  const [ruc, setRuc] = useState("");
  const [cliente, setCliente] = useState("");
  const [empresa, setEmpresa] = useState("");
  const [emision, setEmision] = useState(
    new Date().toISOString().split("T")[0]
  );
  const [moneda, setMoneda] = useState("SOLES");
  const [formaPago, setFormaPago] = useState("Contado");
  const [nCotizacion, setNcotizacion] = useState("");
  const [productos, setProductos] = useState([]);
  const [totalPago, setTotalPago] = useState(0);
  const [observaciones, setObservaciones] = useState("");
  const [estado, setEstado] = useState("");
  const [autor, setAutor] = useState("luis");

const [imagenSrc,setImgSrc]= useState("");
const [titulo,setTitulo]=useState("");
const [direccion,setDireccion]= useState("")
const [correo, setCorreo] = useState("");
const [telefono, setTelefono] = useState("");
const [nRucEmisor, setRucEmisor] = useState("")

  const onSubmitForm = async (e) => {
    e.preventDefault();
    const newVenta = {
      ruc,
      cliente,
      emision,
      empresa,
      moneda,
      formaPago,
      nCotizacion,
      productos,
      totalPago,
      observaciones,
      estado,
      autor,
    };

    try {
      const res = await axios.post(localhost, newVenta);
      console.log(res.data);
    } catch (error) {
      console.error("Error al enviar la cotización:", error);
    }

    navigate("/ventas");
  };

  const onReset = () => {
    setRuc("");
    setCliente("");
    setNcotizacion("");
  };

  const cotizacion = {
    ruc: ruc,
    cliente: cliente,
    empresa: titulo,
    direccion:direccion,
    numeroRuc:nRucEmisor,
    emision: emision,
    correo: correo,
    telefono: telefono,
    moneda: moneda,
    formaPago: formaPago,
    numeroCotizacion: nCotizacion,
    productos: [
      { descripcion: "Martillo aaaaaaaaaaaaaaaaaaaaaaaaaaaaaa", cantidad: 2, precio: 10 },
      { descripcion: "Destornillador", cantidad: 3, precio: 5 },
      { descripcion: "Clavos (Caja)", cantidad: 1, precio: 8 },
      { descripcion: "Martillo", cantidad: 2, precio: 10 },
      { descripcion: "Destornillador", cantidad: 3, precio: 5 },
      { descripcion: "Clavos (Caja)", cantidad: 1, precio: 8 },
    ],
    observaciones: observaciones,
      resource: imagenSrc
  };

  useEffect(() => {
    if (empresaSeleccionada) {
      setTitulo(empresaSeleccionada.titulocotizacion);
      setImgSrc(empresaSeleccionada.src);
      setDireccion(empresaSeleccionada.direccion);
      setCorreo(empresaSeleccionada.correo);
      setTelefono(empresaSeleccionada.telefono);
      setRucEmisor(empresaSeleccionada.RUC_EMPRESA)
    }
  }, [empresaSeleccionada]);

  const setter=()=>{
    setAutor('luis');
    setEstado('pedido')
  }

  return (
    <div className="flexbox padd2 hg">
      <div className="flexColumn wd70 gapp4">
        <section className="flexbox padd2 bottombordergray ">
          <IonIcon className="cGreentext" icon={caretForwardOutline} />{" "}
          <h1 className="cGreentext">CREAR COTIZACION</h1>
        </section>

        <div className="flexColumn aligncntent hg30 bgWhite ptop gapp4 bottombordergray">
          <section>
            <div className="flexbox gapp4 padd1">
              <div className="flexbox gapp4 wd33">
                <div className="wd1">
                  <p>R.U.C CLIENTE</p>
                  <input
                    type="text"
                    id="rucInputData"
                    placeholder="2012345678X"
                    maxLength={12}
                    required
                    className="inputboxitm"
                    value={ruc}
                    onChange={(e) => setRuc(e.target.value)}
                  />
                </div>

                <div className="wd1">
                  <p>NOMBRE</p>
                  <input
                    type="text"
                    className="inputboxitm"
                    placeholder="Nombre del cliente"
                    value={cliente}
                    required
                    onChange={(e) => setCliente(e.target.value)}
                  />
                </div>
              </div>

              <div className="wd33">
                <p>EMPRESA</p>
                <select
                  className="padd2"
                  name="empresa"
                  id="empresa"
                  value={empresa}
                  onChange={handleEmpresaChange}
                >
                  {/* <option value="">Selecciona una empresa</option> */}
                  {optEmpresa.map((emp) => (
                    <option key={emp.RUC_EMPRESA} value={emp.razonSocial}>
                      {emp.razonSocial}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </section>
          <section className="flexbox gapp4 padd1">
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
          </section>
          <section className="flexbox ptop bgWhite gapp4 padd2">
            <button className="btnInfo flexalign gapp4">
              <IonIcon icon={bagAddOutline} /> AGREGAR
            </button>

            <button
              className="btnWarning flexbox gapp4"
              onClick={() => ScreenShot("ScreenCotizacion")}
            >
              <IonIcon className="padd1" icon={cloudDownloadOutline} /> IMAGEN
            </button>
            <button
              className="btnWarning flexbox gapp4"
              onClick={() => generatePDF(cotizacion)}
            >
              <IonIcon className="padd1" icon={cloudDownloadOutline} />
              DOCUMENTO PDF
            </button>
            <button className="btnDanger flexbox gapp4" onClick={onReset}>
              <IonIcon className="padd1" icon={trashOutline} /> Limpiar
            </button>
          </section>
        </div>

        {/* tabla para productos */}
        <div className="table-container" id="ScreenCotizacion">
          <div className="ptop">
            <p>Ingresa los datos de los productos que deseas cotizar</p>
          </div>
          <table className="wd padd1">
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
              {/* Aquí van las filas de productos */}
              <tr className="bgWhite padd2">
                <td className="textcenter">
                  <input type="checkbox" name="" id="" />
                </td>
                <td className="textcenter">1</td>
                <td>prod</td>
                <td className="textcenter">22</td>
                <td className="textcenter">1.21</td>
                <td className="textright">50</td>
                <td className="flexcenter gapp2">
                  <p className="btnWarning">
                    <IonIcon icon={createOutline} />
                  </p>
                  <p className="btnDanger">
                    <IonIcon icon={trashOutline} />
                  </p>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* HERRAMIENTAS */}
      <form onSubmit={onSubmitForm} className="wd30 flex1 toolsboxside">
        <div className="flexbox padd2 bottombordergray ">
          <IonIcon className="cGreentext" icon={caretForwardOutline} />{" "}
          <h1 className="cGreentext">HERRAMIENTAS</h1>
        </div>
        <section className="flexbox gapp4 padd3">
          <div className="flex1">
            <h3 className="cBlack">Moneda</h3>
            <select
              name="moneda"
              id="moneda"
              className="padd2 wd"
              value={moneda}
              onChange={(e) => setMoneda(e.target.value)}
            >
              <option value="SOLES">SOLES</option>
              <option value="DOLARES">DOLARES</option>
            </select>
          </div>
          <div className="flex1">
            <h3 className="cBlack">Forma de pago</h3>
            <select
              name="forma_pago"
              id="forma_pago"
              className="wd padd2"
              value={formaPago}
              onChange={(e) => setFormaPago(e.target.value)}
            >
              <option value="Contado">Contado</option>
              <option value="Credito">Crédito</option>
              <option value="Credito 7 Días">Crédito 7 Días</option>
              <option value="Credito 15 Días">Crédito 15 Días</option>
              <option value="Credito 30 Días">Crédito 30 Días</option>
              <option value="Credito 60 Días">Crédito 60 Días</option>
              <option value="Credito 90 Días">Crédito 90 Días</option>
            </select>
          </div>
        </section>

        <section className="flexbox padd2 gapp4 jcAround ">
          <div className="flex1">
            <h3 className="cBlack">N° Cotizacion</h3>
            <input
              type="text"
              className="wd padd1"
              value={nCotizacion}
              onChange={(e) => setNcotizacion(e.target.value)}
            />
          </div>
          <div className="flex1">
            <h3 className="cBlack">Fecha Emisión</h3>
            <input
              type="date"
              className="wd padd1"
              name="emision"
              value={emision}
              onChange={(e) => setEmision(e.target.value)}
            />
          </div>
        </section>

        <section className="padd2 ">
          <div className="montoTotalbx bgGray">
            <div className="flex1">CANTIDAD DE PRODUCTOS:</div>
            <div>0000</div>
          </div>
        </section>
        <section className="padd2 ">
          <div className="montoTotalbx bgGray">
            <div className="flex1">MONTO TOTAL A PAGAR:</div>
            <div>$ 55</div>
          </div>
        </section>

        <div className="padd2">
          <h3 className="cBlack">Observaciones</h3>
          <textarea
            className="wd padd1"
            placeholder="Observaciones..."
            rows="5"
            onChange={(e)=>setObservaciones(e.target.value)}
          />
          <div className="flexbox gapp4">
            <button className="btnSuccess" type="submit">
              GUARDAR DATOS
            </button>
            <button className="btnWarning" type="submit" onClick={setter}>
              Pasar a Pedido
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default CotizacionCreate;
