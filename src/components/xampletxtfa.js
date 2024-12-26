import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../content/css/Cotizacioncss.css";

export default class SolesIrontools extends Component {
  constructor(props) {
    super(props);
    const hoy = new Date();
    const fechaActual =
      hoy.getFullYear() +
      "-" +
      String(hoy.getMonth() + 1).padStart(2, "0") +
      "-" +
      String(hoy.getDate()).padStart(2, "0");

    this.state = {
      fechaEmision: fechaActual,
      productos: [],
      total: 0,
      igv: 0,
      totalFinal: 0,
    };
  }

  handleFechaChange = (event) => {
    this.setState({ fechaEmision: event.target.value });
  };

  agregarProducto = () => {
    const nombreProdCat = document.getElementById("NombreProdCat").value;
    const cantProdCat = parseInt(document.getElementById("cantProdCat").value, 10);
    const precioProdCat = parseFloat(document.getElementById("PrecioProdCat").value);

    if (!nombreProdCat || isNaN(cantProdCat) || isNaN(precioProdCat)) return;

    const nuevoProducto = {
      id: this.state.productos.length + 1, // Correlativo
      nombre: nombreProdCat,
      cantidad: cantProdCat,
      precio: precioProdCat,
      subtotal: cantProdCat * precioProdCat,
    };

    // Agregar el nuevo producto a la lista
    const productos = [...this.state.productos, nuevoProducto];
    this.setState({ productos }, this.calcularTotales);

    // Limpiar los campos de entrada
    document.getElementById("NombreProdCat").value = '';
    document.getElementById("cantProdCat").value = '';
    document.getElementById("PrecioProdCat").value = '';
  };

  eliminarProducto = (id) => {
    const productos = this.state.productos.filter(producto => producto.id !== id);
    this.setState({ productos }, this.calcularTotales);
  };

  calcularTotales = () => {
    const total = this.state.productos.reduce((sum, producto) => sum + producto.subtotal, 0);
    const igv = total * 0.18;
    const totalFinal = total + igv;

    this.setState({ total, igv, totalFinal });
  };

  editarProducto = (id) => {
    const producto = this.state.productos.find(producto => producto.id === id);
    document.getElementById("NombreProdCat").value = producto.nombre;
    document.getElementById("cantProdCat").value = producto.cantidad;
    document.getElementById("PrecioProdCat").value = producto.precio;
    this.eliminarProducto(id);
  };

  render() {
    return (
      <div className="contentCotizacion">
        {/* Información de cotización */}
        <div className="contentTitle">
          <div className="titleBox">
            <p>Torque</p>
            <p className="MonedaTittle">Dolares</p>
          </div>
          <div className="flexitm">
            <label for="" disabled></label>
            <p className="playTittle">
              <ion-icon name="save-outline"></ion-icon>
            </p>
            <p className="playTittle">
              <ion-icon name="play-outline"></ion-icon>
            </p>
          </div>
        </div>

        {/* Formulario de información de contacto */}
        <div>
          <p>Informacion de contacto</p>
          {/* ... */}

          {/* Registrar producto */}
          <div className="borderBox">
            <p>Registrar producto</p>
            <div className="productoBox">
              <p className="columnaItem">
                <label for="">Producto 'catalogo'</label>
                <input className="heightinput" type="text" name="" id="NombreProdCat" />
              </p>
              <p className="columnaItem winput">
                <label for="">Cantidad</label>
                <input className="heightinput" type="number" name="" id="cantProdCat" />
              </p>
              <p className="columnaItem winput">
                <label for="">Precio Unitario</label>
                <input className="heightinput" type="number" name="" id="PrecioProdCat" />
              </p>

              <p className="butonsProducto">
                <p className="bluecolor" id="agregarItem" onClick={this.agregarProducto}>
                  <ion-icon name="add-outline"></ion-icon>
                </p>
              </p>
            </div>
          </div>
        </div>

        {/* Tabla de productos */}
        <div className="contentTable">
          <div className="flexitmlist">
            <div className="columnaTable">
              <label for="" className="listLabel">Lista de Productos</label>
              <table>
                <thead>
                  <tr className="tableHeader">
                    <th className="tableItem">Item</th>
                    <th className="tableItem">Producto</th>
                    <th className="tableItem">Cantidad</th>
                    <th className="tableItem">Precio Unitario</th>
                    <th className="tableItem">SubTotal</th>
                    <th className="tableItem">Acciones</th>
                  </tr>
                </thead>
                <tbody>
                  {this.state.productos.map(producto => (
                    <tr key={producto.id}>
                      <td>{producto.id}</td>
                      <td>{producto.nombre}</td>
                      <td>{producto.cantidad}</td>
                      <td>{producto.precio}</td>
                      <td>{producto.subtotal}</td>
                      <td>
                        <p className="bluecolor" onClick={() => this.editarProducto(producto.id)}>
                          <ion-icon name="create-outline"></ion-icon>
                        </p>
                        <p className="redcolor" onClick={() => this.eliminarProducto(producto.id)}>
                          <ion-icon name="trash-outline"></ion-icon>
                        </p>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Totales */}
          <div className="borderLine">
            <label for="">Precio final:</label>
            <p className="flexitm marg1">
              <p className="textItem">Subtotal:</p>
              <input type="text" name="" id="SubTotalview" value={this.state.total} disabled />
            </p>
            <p className="flexitm marg1">
              <p className="textItem">IGV 18%:</p>
              <input type="text" name="" id="igvImpuesto" value={this.state.igv} disabled />
            </p>
            <p className="flexitm marg1">
              <p className="textItem">Total:</p>
              <input type="text" name="" id="totalFinal" value={this.state.totalFinal} disabled />
            </p>
          </div>
        </div>
      </div>
    );
  }
}
