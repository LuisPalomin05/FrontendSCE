import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../content/css/Cotizacioncss.css";
import axios from "axios";

export default class SolesIrontools extends Component {
  constructor(props) {
    super(props);
    // Inicializar el estado con la fecha actual
    const empresa = "TORQUE-G46";
    const usuario = "Usuario";
    const [activeTab, setActiveTab] = useState(1);

    const hoy = new Date();
    const fechaActual =
      hoy.getFullYear() +
      "-" +
      String(hoy.getMonth() + 1).padStart(2, "0") +
      "-" +
      String(hoy.getDate()).padStart(2, "0");

    this.state = {
      numeroCotizacion: "F001-0001",
      nombrecliente: "nombreEmpresa",
      rucCliente: "nombreEmpresa",
      usuarioCreador: "luis",
      tipoCotizacion: "Venta",
      fechaEmision: fechaActual,
      productos: [],
      metodoPago: "Contado",
      module: "Soles",
      total: 0,
      igv: 0,
      totalFinal: 0, // Total + IGV en el backend es total el unico que se sube
      estado: "Pendiente",
      observaciones: "",
      razonSocial: empresa,
    };

    const handleTabClick = (tabIndex) => {
      setActiveTab(tabIndex);
    };
  }



  onSubmit = async (e) => {
    e.preventDefault();
    const newCotizacion = {
      numeroCotizacion: this.state.numeroCotizacion,
      nombrecliente: this.state.nombrecliente,
      rucCliente: this.state.rucCliente,
      usuarioCreador: this.state.usuarioCreador,
      tipoCotizacion: this.state.tipoCotizacion,
      fecha: this.state.fechaEmision,
      productos: this.state.productos,
      metodoPago: this.state.metodoPago,
      moneda: this.state.module,
      total: this.state.totalFinal,
      estado: this.state.estado,
      observaciones: this.state.observaciones,
      razonSocial: this.state.razonSocial,
    };
    const res = await axios.post(
      "http://localhost:5000/api/cotizacion",
      newCotizacion
    );
    console.log(res);
  };

  // handleNumeroCotizacionChange = (event) => {
  //   this.setState({ numeroCotizacion: event.target.value });
  // };

  // handleNombreClienteChange = (event) => {
  //   this.setState({ nombrecliente: event.target.value });
  // };

  // handleRucClienteChange = (event) => {
  //   this.setState({ rucCliente: event.target.value });
  // };

  handleFechaChange = (event) => {
    this.setState({ fechaEmision: event.target.value });
  };

  handleObservacionesChange = (event) => {
    this.setState({ observaciones: event.target.value });
  };

  agregarProducto = () => {
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
      id:
        this.state.productos.length > 0
          ? Math.max(...this.state.productos.map((p) => p.id)) + 1
          : 1, // Genera el siguiente id
      nombre: nombreProdCat,
      cantidad: parseFloat(cantProdCat.toFixed(3)), // Redondea cantidad pero sigue siendo número
      precio: parseFloat(precioProdCat.toFixed(3)), // Redondea precio pero sigue siendo número
      subtotal: parseFloat((cantProdCat * precioProdCat).toFixed(3)), // Calcula subtotal y luego redondea
    };

    // Agregar el nuevo producto a la lista
    const productos = [...this.state.productos, nuevoProducto];
    this.setState({ productos }, this.calcularTotales);

    // Limpiar los campos de entrada
    document.getElementById("NombreProdCat").value = "";
    document.getElementById("cantProdCat").value = "";
    document.getElementById("PrecioProdCat").value = "";
  };

  eliminarProducto = (id) => {
    // Eliminar el producto de la lista
    const productos = this.state.productos.filter(
      (producto) => producto.id !== id
    );

    // Actualizar los ids para mantener el orden
    const productosActualizados = productos.map((producto, index) => ({
      ...producto,
      id: index + 1, // Reasignar ids consecutivos
    }));

    this.setState({ productos: productosActualizados }, this.calcularTotales);
  };

  calcularTotales = () => {
    const total = this.state.productos.reduce(
      (sum, producto) => sum + producto.subtotal,
      0
    );
    const igv = total * 0.18;
    const totalFinal = total + igv;

    const totalRedondeado = parseFloat(total.toFixed(3));
    const igvRedondeado = parseFloat(igv.toFixed(3));
    const totalFinalRedondeado = parseFloat(totalFinal.toFixed(3));

    this.setState({
      total: totalRedondeado,
      igv: igvRedondeado,
      totalFinal: totalFinalRedondeado,
    });
  };

  renderMensaje() {
    if (this.state.productos.length === 0) {
      return <p className="alertaProducto">Agrega un producto a cotizar</p>;
    }
    return null; // O puedes devolver un contenido alternativo
  }

  render() {
    return (
      <div className="contentCotizacion">
        <div className="contentTitle">
          <div className="titleBox">
            <p>Torque</p>
            <p className="MonedaTittle">Dolares</p>
          </div>
          <div className="flexitm">
            <label for="" disabled></label>

            <p className="playTittle" onClick={this.onSubmit}>
              <ion-icon name="save-outline"></ion-icon>
            </p>
            <p className="playTittle">
              <ion-icon name="play-outline"></ion-icon>
            </p>
          </div>
        </div>
        <div>
          <p> Informacion de contacto</p>

          <div className="flexitm">
            <p className="clientebox">
              <p className="columnaItem">
                <label htmlFor="cliente ">Cliente</label>
                <input
                  className="heightinput"
                  type="text"
                  name="cliente"
                  id="cliente"
                  required
                />
              </p>
              <p className="blue">+ Nuevo Cliente</p>
            </p>
            <p className="columnaItem winput">
              <label htmlFor="tipo_documento">Tipo Documento</label>
              <select
                className="inputswidth heightinput"
                name="tipo_documento"
                id="tipo_documento"
              >
                <option value="boleta">Boleta</option>
                <option value="factura">Factura</option>
              </select>
            </p>
            <p className="columnaItem winput">
              <label htmlFor="serie">Serie</label>
              <select
                className="inputswidth heightinput"
                name="serie"
                id="serie"
              >
                <option value="F001">F001</option>
                <option value="T002">T002</option>
              </select>
            </p>
            <p className="columnaItem winput">
              <label htmlFor="numero_serie">Número de Serie</label>
              <input
                className="inputswidth heightinput"
                type="text"
                name="numero_serie"
                id="numero_serie"
                disabled
              />
            </p>
          </div>

          <div className="flexitm">
            <p className="columnaItem winput">
              <label for="">Creado por:</label>
              <input
                className="inputswidth heightinput"
                type="text"
                name=""
                id=""
                value="Usuario"
                disabled
              />
            </p>

            <p className="columnaItem winput">
              <label for="">Tipo de operacion</label>
              <select className="inputswidth heightinput" name="" id="">
                <option value="venta">Venta</option>
                <option value="compra">Compra</option>
              </select>
            </p>

            <p className="columnaItem winput">
              <label for="">Moneda</label>
              <select className="inputswidth heightinput" name="" id="">
                <option value="soles">Soles</option>
                <option value="dolares">Dolares</option>
              </select>
            </p>

            <p className="columnaItem winput">
              <label for="">¿Metodo de Pago?</label>
              <select className=" heightinput" name="" id="">
                <option value="Credito">Credito</option>
                <option value="Contado">Contado</option>
                <option value="Credito7">Credito 7 Dias</option>
                <option value="Credito15">Credito 15 Dias</option>
                <option value="Credito30">Credito 30 Dias</option>
              </select>
            </p>

            <p className="columnaItem winput">
              <label htmlFor="fecha_emision">Fecha Emisión</label>
              <input
                className="inputswidth heightinput"
                type="date"
                name="fecha_emision"
                id="fecha_emision"
                value={this.state.fechaEmision}
                onChange={this.handleFechaChange}
              />
            </p>
          </div>
          {/* !! */}
          <div className="borderBox">
            <p>Registrar producto</p>
            <div className="productoBox">
              <p className="columnaItem">
                <label for="">Producto 'catalogo'</label>
                <input
                  className="heightinput"
                  type="text"
                  name=""
                  id="NombreProdCat"
                />
              </p>
              <p className="columnaItem winput">
                <label for="">Cantidad</label>
                <input
                  className="heightinput"
                  type="number"
                  name=""
                  id="cantProdCat"
                />
              </p>
              <p className="columnaItem winput">
                <label for="">Precio Unitario</label>
                <input
                  className="heightinput"
                  type="number"
                  name=""
                  id="PrecioProdCat"
                />
              </p>

              <p className="butonsProducto">
                <p
                  className="bluecolor"
                  id="agregarItem"
                  onClick={this.agregarProducto}
                >
                  <ion-icon name="add-outline"></ion-icon>
                </p>
              </p>
            </div>
          </div>
        </div>

        <div className="utilitysBox">
          <p>Utilidad</p>
          <div className="listUtility">
            {/* añadir funcionalidad para que se usen como pestañas */}
            <ul>
              <li className="listActive">Facturacion</li>
              <li>Notas</li>
              <li>Archivos</li>
              <li>Estados</li>
            </ul>
          </div>
        </div>

        <div className="DisplayBox">
          <div className="contentTable ">
            <div className="flexitmlist">
              <div className="columnaTable">
                <label for="" className="listLabel">
                  Lista de Productos
                </label>
                <table className="tableBx">
                  <thead className="">
                    <tr className="">
                      <th className="">Item</th>
                      <th className="">Descripcion</th>
                      <th className="">Cantidad</th>
                      <th className="">Precio Unitario</th>
                      <th className="">SubTotal</th>
                      <th className="">Acciones</th>
                    </tr>
                  </thead>
                  <tbody className="tablebxWid">
                    {this.state.productos.map((producto, index) => (
                      <tr className="" key={producto.id}>
                        <td className=" ">{index + 1}</td>{" "}
                        {/* Muestra el índice + 1 como el item */}
                        <td className=" ">{producto.nombre}</td>
                        <td className=" ">{producto.cantidad}</td>
                        <td className=" ">{producto.precio}</td>
                        <td className=" ">{producto.subtotal}</td>
                        <td className="flexitm">
                          <p
                            className="bluecolor"
                            onClick={() => this.editarProducto(producto.id)}
                          >
                            <ion-icon name="create-outline"></ion-icon>
                          </p>
                          <p
                            className="redcolor"
                            onClick={() => this.eliminarProducto(producto.id)}
                          >
                            <ion-icon name="trash-outline"></ion-icon>
                          </p>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                {this.renderMensaje()}
              </div>

              <div className="columnaItem">
                <label for="">Observaciones</label>
                <textarea
                  name="observaciones"
                  id="observaciones"
                  value={this.state.observaciones}
                  onChange={this.handleObservacionesChange}
                ></textarea>
              </div>
            </div>

            <div className="borderLine">
              <label for="">Precio final:</label>
              <p className="flexitm marg1">
                <p className="textItem" id="SubTotalview">
                  Subtotal:
                </p>
                <input
                  type="text"
                  name=""
                  id=""
                  value={this.state.total}
                  disabled
                />
              </p>
              <p className="flexitm marg1">
                <p className="textItem" id="igvImpuesto">
                  IGV 18%:
                </p>
                <input
                  type="text"
                  name=""
                  id=""
                  value={this.state.igv}
                  disabled
                />
              </p>
              <p className="flexitm marg1">
                <p className="textItem" id="totalFinal">
                  Total :
                </p>
                <input
                  type="text"
                  name=""
                  id=""
                  value={this.state.totalFinal}
                  disabled
                />
              </p>
            </div>
          </div>

          <div className="isDisplayActive">
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora
              quos fuga rerum laboriosam repudiandae quo. Amet neque accusantium
              cumque corporis earum vitae laudantium provident vel? Ea dolores
              architecto natus minima.
            </p>
          </div>
          <div className="isNoActiveDisplay">
            {" "}
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora
              quos fuga rerum laboriosam repudiandae quo. Amet neque accusantium
              cumque corporis earum vitae laudantium provident vel? Ea dolores
              architecto natus minima.
            </p>
          </div>
          <div className="isNoActiveDisplay">
            {" "}
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora
              quos fuga rerum laboriosam repudiandae quo. Amet neque accusantium
              cumque corporis earum vitae laudantium provident vel? Ea dolores
              architecto natus minima.
            </p>
          </div>
        </div>
      </div>
    );
  }
}
