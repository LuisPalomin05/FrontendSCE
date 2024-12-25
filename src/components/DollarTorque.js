import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../content/css/Cotizacioncss.css";

export default class SolesIrontools extends Component {
  constructor(props) {
    super(props);
    // Inicializar el estado con la fecha actual
    const hoy = new Date();
    const fechaActual =
      hoy.getFullYear() +
      "-" +
      String(hoy.getMonth() + 1).padStart(2, "0") +
      "-" +
      String(hoy.getDate()).padStart(2, "0");

    this.state = {
      fechaEmision: fechaActual,
    };
  }

  handleFechaChange = (event) => {
    this.setState({ fechaEmision: event.target.value });
  };

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

            <p className="playTittle">
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
            
            {/* llll */}
            <p className="clientebox">
              <p className="columnaItem">
                <label htmlFor="cliente ">Cliente</label>
                <input className="heightinput" type="text" name="cliente" id="cliente" required />
              </p>
              <p className="blue">+ Nuevo Cliente</p>
            </p>
            {/* hhhhhh */}
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
              <select className="inputswidth heightinput" name="serie" id="serie">
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

          <div className="borderBox">
            <p>Registrar producto</p>
            <div className="productoBox">
              <p className="columnaItem">
                <label for="">Producto 'catalogo'</label>
                <input className="heightinput" type="text" name="" id="" />
              </p>
              <p className="columnaItem winput">
                <label for="">Cantidad</label>
                <input  className="heightinput" type="number" name="" id="" />
              </p>
              <p className="columnaItem winput">
                <label for="">Precio Unitario</label>
                <input  className="heightinput" type="number" name="" id="" />
              </p>
              <p className="columnaItem winput">
                <label for="">Total(sin igv 18%)</label>
                <input  className="heightinput" type="number" name="" id="" />
              </p>
              <p className="butonsProducto">
                <p className="bluecolor" id="agregarItem">
                  <ion-icon name="add-outline"></ion-icon>
                </p>
                <p className="redcolor">
                  <ion-icon name="trash-outline"></ion-icon>
                </p>
              </p>
            </div>
          </div>
        </div>

        <div className="utilitysBox">
            <p>Utilidad</p>
            <div className="listUtility">
                <ul>
                    <li className="listActive">Facturacion</li>
                    <li>Notas</li>
                    <li>Archivos</li>
                    <li>Estados</li>
                </ul>
            </div>
        </div>


        <div className="contentTable">
          <div className="flexitmlist">
            <div className="columnaTable">
              <label for="" className="listLabel">Lista de Productos</label>
              <table >
                <thead>
                  <tr className="tableHeader">
                    <th className="tableItem">Item</th>
                    <th className="tableItem">Producto</th>
                    <th className="tableItem">Cantidad</th>
                    <th className="tableItem">Precio Unitario</th>
                    <th className="tableItem">Total</th>
                  </tr>
                </thead>
                <tbody>
                    {/* //quiero agregar elementos en mi tabla al pulsar el id:agregarItem */}



                  <tr>
                    <td>1</td>
                    <td>Producto 1</td>
                    <td>2</td>
                    <td>50</td>
                    <td>100</td>
                    <td>
                        <p className="bluecolor" id="EditarItem">
                            <ion-icon name="create-outline"></ion-icon>
                        </p>
                        <p className="redcolor" id="EliminarItem">
                            <ion-icon name="trash-outline"></ion-icon>
                        </p>
                    </td>
                  </tr>

                </tbody>
              </table>
            </div>
            <div className="columnaItem">
              <label for="">Observaciones</label>
              <textarea name="" id=""></textarea>
            </div>
          </div>

          <div className="borderLine">
            <label for="">Precio final:</label>
            <p className="flexitm marg1">
              <p className="textItem">Subtotal:</p>
              <input type="text" name="" id="" value={0.00} disabled />
            </p>
            <p className="flexitm marg1">
              <p className="textItem">IGV:</p>
              <input type="text" name="" id="" value={0.00} disabled />
            </p>
            <p className="flexitm marg1">
              <p className="textItem">Total :</p>
              <input type="text" name="" id="" value={0.00} disabled />
            </p>
          </div>
        </div>
      </div>
    );
  }
}
