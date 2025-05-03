import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { IonIcon } from "@ionic/react";
import axios from "axios";
import {
  caretForwardOutline,
  bagAddOutline,
  cloudDownloadOutline,
  createOutline,
  trashOutline,
  caretBackOutline,
} from "ionicons/icons";
import generatePDF from "./generatePDF";

const localhost = "https://backendapi-6thn.onrender.com/api/cotizacion";

const CotizacionCreate = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [editing, setEditing] = useState(false);
  const [totalPago, setTotalPago] = useState(0);

  const formatearFecha = (fechaISO) => {
    const fecha = new Date(fechaISO);
    const dia = String(fecha.getDate()).padStart(2, "0"); 
    const mes = String(fecha.getMonth() + 1).padStart(2, "0"); 
    const anio = fecha.getFullYear(); 
    return `${anio}-${mes}-${dia}`;
  };

  useEffect(() => {
    async function fetchData() {
      if (id) {
        const formatearFechaUTC = (fechaISO) => {
          const fecha = new Date(fechaISO);
          const dia = String(fecha.getUTCDate()).padStart(2, "0");
          const mes = String(fecha.getUTCMonth() + 1).padStart(2, "0");
          const anio = fecha.getUTCFullYear();
          return `${anio}-${mes}-${dia}`;
        };

        try {
          const res = await axios.get(localhost + "/" + id);
          setEditing(true);
          setRuc(res.data.ruc);
          setCliente(res.data.cliente);
          setEmpresa(res.data.empresa);
          setNcotizacion(res.data.nCotizacion);
          setMoneda(res.data.moneda);
          setFormaPago(res.data.formaPago);
          setProductos(res.data.productos);
          setTotalPago(res.data.totalPago);
          setObservaciones(res.data.observaciones);
          setEmision(formatearFechaUTC(res.data.emision));
        } catch (err) {
          console.error("Error al traer la cotización:", err);
        }
      } else {
        setEditing(false);
      }
    }
    fetchData();
  }, [id]);

  const optEmpresa = [
    {
      razonSocial: "Torque-G46",
      RUC_EMPRESA: "20601395801",
      direccion: "Jr. Holanda 2050 - Cercado de Lima",
      correo: "ventas@torqueg46.com.pe",
      titulocotizacion: "PERNOS Y TUERCAS TORQUE-G46 S.A.C",
      src: "https://raw.githubusercontent.com/LuisPalomin05/FrontendSCE/refs/heads/main/src/content/logos/TorqueFBICON.png",
      telefono: "+51 977 492 484",
      cuentaDolares: ["192-2354415-1-78", "002-192002354415178-32"],
      cuentaSoles: ["192-2355918-0-49", "002-192-002355918049-34"],
    },
    {
      razonSocial: "Irontools",
      RUC_EMPRESA: "20548129576",
      direccion: "Urb. Santa Cruz Mz A lt 12 - Callao",
      correo: "ventas@irontools.com.pe",
      titulocotizacion: "IRONTOOLS S.A.C",
      src: "https://raw.githubusercontent.com/LuisPalomin05/FrontendSCE/10799e22045a0ff79009c2e05866d62326a031a8/src/content/logos/IRONTOOLSICON.png",
      telefono: "+51 977 492 484",
      cuentaDolares: ["192-1972978-178", "002-19200197297817831"],
      cuentaSoles: ["192-1999964-054", "002-19200199996405433"],
    },
  ];

  const handleEmpresaChange = (e) => {
    const empresaNombre = e.target.value;
    setEmpresa(empresaNombre);
    const empresaEncontrada = optEmpresa.find(
      (emp) => emp.razonSocial === empresaNombre
    );
    if (empresaEncontrada) {
      setEmpresaSeleccionada(empresaEncontrada);
    }
  };

  const todaydata = new Date();
  const [empresaSeleccionada, setEmpresaSeleccionada] = useState(optEmpresa[0]);
  const [ruc, setRuc] = useState("");
  const [cliente, setCliente] = useState("");
  const [empresa, setEmpresa] = useState(optEmpresa[0].razonSocial);
  const [emision, setEmision] = useState(formatearFecha(todaydata));

  const [nroCuenta, setNroCuenta] = useState("");
  const [nroCuentaCCI, setNroCuentaCCI] = useState("");
  const [moneda, setMoneda] = useState("SOLES");
  const [formaPago, setFormaPago] = useState("Contado");
  const [nCotizacion, setNcotizacion] = useState("");

  const [productos, setProductos] = useState([]);
  const [observaciones, setObservaciones] = useState("");
  const [estado, setEstado] = useState("");
  const [autor, setAutor] = useState("luis");

  const [producto, setProducto] = useState("");
  var [cantidad, setCantidad] = useState("");
  var [precio, setPrecio] = useState("");
  const [telefono, setTelefono] = useState("");
  const [titulo, setTitulo] = useState("");
  const [direccion, setDireccion] = useState("");
  const [correo, setCorreo] = useState("");
  const [imagenSrc, setImgSrc] = useState("");
  const [nRucEmisor, setRucEmisor] = useState("");
  const [loading, setLoading] = useState(false);

  const handleAddProduct = () => {
    if (producto && parseFloat(cantidad) > 0 && parseFloat(precio) > 0) {
      const nuevoProducto = {
        descripcion: producto,
        cantidad: parseFloat(cantidad),
        precio: parseFloat(precio),
        subtotal: parseFloat(cantidad) * parseFloat(precio),
      };

      setProductos([...productos, nuevoProducto]);
      setTotalPago(totalPago + nuevoProducto.subtotal);
      setProducto("");
      setCantidad("");
      setPrecio("");
    } else {
      alert("Por favor, ingresa todos los datos del producto correctamente.");
    }
  };

  const onSubmitForm = async (e) => {
    e.preventDefault();
    setLoading(true);


    try {
      if (editing) {
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
        await axios.put(`${localhost}/${id}`, newVenta);
      } else {
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
        await axios.post(localhost, newVenta);
      }
      navigate("/dashboard");
    } catch (error) {
      console.error("Error al guardar la cotización:", error);
    } finally {
      setLoading(false);
    }
  };

  const onReset = () => {
    setRuc("");
    setCliente("");
    setNcotizacion("");
    setObservaciones("");
    setProductos([]);
    setTotalPago(0);
  };

  const cotizacion = {
    ruc,
    cliente,
    empresa: titulo,
    direccion,
    numeroRuc: nRucEmisor,
    emision,
    correo,
    telefono,
    moneda,
    formaPago,
    numeroCotizacion: nCotizacion,
    productos: productos,
    observaciones,
    resource: imagenSrc,
    nroCuenta,
    nroCuentaCCI,
  };

  useEffect(() => {
    if (empresaSeleccionada) {
      setTitulo(empresaSeleccionada.titulocotizacion);
      setImgSrc(empresaSeleccionada.src);
      setDireccion(empresaSeleccionada.direccion);
      setCorreo(empresaSeleccionada.correo);
      setTelefono(empresaSeleccionada.telefono);
      setRucEmisor(empresaSeleccionada.RUC_EMPRESA);
    }
  }, [empresaSeleccionada]);

  useEffect(() => {
    if (empresaSeleccionada) {
      if (moneda === "SOLES" && empresaSeleccionada.cuentaSoles) {
        setNroCuenta(empresaSeleccionada.cuentaSoles[0]);
        setNroCuentaCCI(empresaSeleccionada.cuentaSoles[1]);
      } else if (empresaSeleccionada.cuentaDolares) {
        setNroCuenta(empresaSeleccionada.cuentaDolares[0]);
        setNroCuentaCCI(empresaSeleccionada.cuentaDolares[1]);
      }
    }
  }, [moneda, empresaSeleccionada]);

  const setter = () => {
    setAutor("luis");
    setEstado("pedido");
  };

  async function ondeleteCotizacion() {
    if (id) {
      try {
        await axios.delete(localhost + "/" + id);
        navigate("/Dashboard");
      } catch (error) {
        console.error("Error al eliminar la cotización:", error);
      }
    }
  }

  return (
    <div className="flexbox padd2 hg">
      <div className="flexColumn wd70 gapp4">
        <section className="flexbox padd2 bottombordergray ">
          <IonIcon className="cGreentext" icon={caretForwardOutline} />{" "}
          <h1 className="cGreentext flex1">
            {editing ? "EDITAR COTIZACION" : "CREAR COTIZACION"}
          </h1>
          <h6 className="cGray">{editing && "ID: " + id}</h6>
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
                    maxLength={11}
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
                    value={cliente ?? ""}
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
                value={producto}
                onChange={(e) => setProducto(e.target.value)}
              />
            </div>

            <div>
              <p>Cantidad</p>
              <input
                step="0.001"
                type="number"
                placeholder="Cantidad"
                className="inputboxitm"
                value={cantidad === null ? "" : cantidad}
                onChange={(e) => setCantidad(e.target.value)}
              />
            </div>

            <div>
              <p>Precio</p>
              <input
                step="0.001"
                type="number"
                placeholder="Precio"
                className="inputboxitm"
                value={precio === null ? "" : precio}
                onChange={(e) => setPrecio(e.target.value)}
              />
            </div>
          </section>
          <section className="flexbox ptop bgWhite gapp4 padd2">
            <button
              className="btnInfo flexalign gapp4"
              onClick={handleAddProduct}
            >
              <IonIcon icon={bagAddOutline} /> AGREGAR
            </button>

            {/* <button
              className="btnWarning flexbox gapp4"
              onClick={() => ScreenShot("ScreenCotizacion")}
            >
              <IonIcon className="padd1" icon={cloudDownloadOutline} /> IMAGEN
            </button> */}
            <button
              className="btnWarning flexbox gapp4"
              onClick={() => generatePDF(cotizacion)}
            >
              <IonIcon className="padd1" icon={cloudDownloadOutline} />
              CREAR PDF
            </button>

            {editing ? (
              <button
                className="btnDanger flexbox gapp4"
                onClick={ondeleteCotizacion}
              >
                <IonIcon className="padd1" icon={trashOutline} />
                Eliminar Cotizacion
              </button>
            ) : (
              <button className="btnDanger flexbox gapp4" onClick={onReset}>
                <IonIcon className="padd1" icon={trashOutline} />
                Limpiar
              </button>
            )}
          </section>
        </div>

        {/* tabla para productos */}
        <div className="table-container padd1" id="ScreenCotizacion">
          <div className="ptop flexbox">
            <IonIcon className="cGreentext" icon={caretForwardOutline} />{" "}
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
              {productos.map((prod, index) => (
                <tr key={index} className="bgWhite padd2 borderVertical">
                  <td className="textcenter">
                    <input type="checkbox" />
                  </td>
                  <td className="textcenter">{index + 1}</td>

                  <td className="columna50">{prod.descripcion}</td>
                  <td className="textcenter">{prod.cantidad}</td>
                  <td className="textcenter">{prod.precio}</td>
                  <td className="textright">{prod.subtotal}</td>
                  <td className="flexcenter gapp4 wcolor margin3">
                    <p className="colorWarning padd1">
                      <IonIcon icon={createOutline} />
                    </p>
                    <p className="colorDanger padd1">
                      <IonIcon icon={trashOutline} />
                    </p>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          {productos.length === 0 && (
            <div className="flexcenter aligncntent gapp4 padd3 bgWhite  martop textcenter shimmer-loader">
              <IonIcon className="cGreentext" icon={caretForwardOutline} />
              <p className="cBlack ">
                {editing
                  ? "Estamos cargando la informacion"
                  : "No hay productos agregados"}
              </p>
              <IonIcon className="cGreentext " icon={caretBackOutline} />
            </div>
          )}
        </div>
      </div>

      {/* HERRAMIENTAS */}
      <form
        onSubmit={onSubmitForm}
        className="wd30 flex1 toolsboxside borderleftgray"
      >
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
              value={nCotizacion ?? ""}
              onChange={(e) => setNcotizacion(e.target.value)}
              required
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

        <section className="martop">
          <div className="flexbox  borderVertical padd2">
            <IonIcon className="cGreentext" icon={caretForwardOutline} />
            <h1 className="cGreentext">CONTABLE</h1>
          </div>
          <section className="flexbox  jcAround">
            <div className=" flex1 padd2">SUBTOTAL :</div>
            <div className="bgWhite flex1 padd2">
              {productos
                .reduce((acc, prod) => acc + prod.subtotal, 0)
                .toFixed(2)}
            </div>
          </section>
          <section className="flexbox jcAround borderVertical">
            <div className=" flex1 padd2">IGV 18% :</div>
            <div className="bgWhite flex1 padd2">
              {(
                productos.reduce((acc, prod) => acc + prod.subtotal, 0) * 0.18
              ).toFixed(2)}
            </div>
          </section>
          <section className="flexbox jcAround bottombordergray">
            <div className=" flex1 padd2 boldtext">TOTAL A PAGAR:</div>
            <div className="bgWhite flex1 padd2 boldtext">
              {(
                productos.reduce((acc, prod) => acc + prod.subtotal, 0) * 1.18
              ).toFixed(2)}
            </div>
          </section>
        </section>

        <div className="martop">
          <div className="flexbox borderVertical padd2">
            <IonIcon className="cGreentext" icon={caretForwardOutline} />
            <h3 className="cGreentext ">OBSERVACIONES</h3>
          </div>
          <textarea
            className="wd padd1"
            placeholder="Observaciones..."
            rows={5}
            value={observaciones}
            onChange={(e) => setObservaciones(e.target.value)}
          />
          <div className="flexbox gapp4">
            {/* <button className="btnSuccess" onClick={onSubmitForm}>
              GUARDAR DATOS
            </button> */}
            <button className="btnSuccess" type="submit" disabled={loading}>
            {loading ? "Guardando..." : editing ? "Actualizar Cotización" : "Crear Cotización"}
            </button>
            <button className="btnWarning" onClick={setter}>
              PASAR PEDIDO
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default CotizacionCreate;
