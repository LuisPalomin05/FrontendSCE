import React, { Component } from "react";

export default class Cotizador extends Component {
  state = {
    rows: [],
  };

  // Función para convertir número a palabras
  numeroEnPalabras(numero) {
    if (numero === 0) return "cero";

    const unidades = [
      "",
      "Uno",
      "Dos",
      "Tres",
      "Cuatro",
      "Cinco",
      "Seis",
      "Siete",
      "Ocho",
      "Nueve",
    ];
    const especiales = [
      "",
      "Once",
      "Doce",
      "Trece",
      "Catorce",
      "Quince",
      "Dieciséis",
      "Diecisiete",
      "Dieciocho",
      "Diecinueve",
    ];
    const decenas = [
      "",
      "Diez",
      "Veinte",
      "Treinta",
      "Cuarenta",
      "Cincuenta",
      "Sesenta",
      "Setenta",
      "Ochenta",
      "Noventa",
    ];
    const centenas = [
      "",
      "Cien",
      "Doscientos",
      "Trescientos",
      "Cuatrocientos",
      "Quinientos",
      "Seiscientos",
      "Setecientos",
      "Ochocientos",
      "Novecientos",
    ];

    function convertirCentenas(num) {
      let palabras = "";

      if (num >= 100) {
        if (num === 100) {
          return "cien";
        } else {
          let centena = Math.floor(num / 100);
          palabras += centenas[centena] + " ";
          num %= 100;
        }
      }

      if (num >= 20) {
        let decena = Math.floor(num / 10);
        palabras += decenas[decena];
        num %= 10;
        if (num > 0) {
          palabras += " y ";
        }
      } else if (num >= 11 && num <= 19) {
        palabras += especiales[num - 10];
        num = 0;
      } else if (num === 10) {
        palabras += decenas[1];
        num = 0;
      }

      palabras += unidades[num];
      return palabras.trim();
    }

    function convertirMiles(num) {
      let palabras = "";

      if (num >= 1000) {
        let miles = Math.floor(num / 1000);
        if (miles === 1) {
          palabras += "mil ";
        } else {
          palabras += convertirCentenas(miles) + " mil ";
        }
        num %= 1000;
      }

      palabras += convertirCentenas(num);
      return palabras.trim();
    }

    function convertirMillones(num) {
      let palabras = "";

      if (num >= 1000000) {
        let millones = Math.floor(num / 1000000);
        if (millones === 1) {
          palabras += "un millón ";
        } else {
          palabras += convertirCentenas(millones) + " millones ";
        }
        num %= 1000000;
      }

      palabras += convertirMiles(num);
      return palabras.trim();
    }

    const parteEntera = Math.floor(numero);
    const parteDecimal = Math.round((numero - parteEntera) * 1000); // Redondeo a 3 decimales para los centavos

    let palabras = convertirMillones(parteEntera);

    if (parteDecimal > 0) {
      palabras += " con " + convertirCentenas(parteDecimal) + " centavos";
    }

    return palabras.trim();
  }

  // Función para agregar una nueva fila
  agregarItem = () => {
    this.setState((prevState) => {
      const newRow = {
        id: prevState.rows.length + 1,
        descripcion: "",
        cantidad: 0,
        valorUnitario: 0,
        totalSinIgv: 0,
      };
      return { rows: [...prevState.rows, newRow] };
    });
  };

  // Función para manejar cambios en los inputs de las filas
  handleInputChange = (event, rowId) => {
    const { name, value } = event.target;

    // Validación para asegurar que cantidad y valorUnitario sean números válidos
    const newValue = parseFloat(value) || 0; // Si no es un número válido, lo convierte a 0

    // Actualizamos el estado con el nuevo valor
    this.setState((prevState) => {
      const updatedRows = prevState.rows.map((row) => {
        if (row.id === rowId) {
          // Si el campo modificado es cantidad o valorUnitario, recalculamos el total
          if (name === "cantidad" || name === "valorUnitario") {
            const cantidad = name === "cantidad" ? newValue : row.cantidad;
            const valorUnitario =
              name === "valorUnitario" ? newValue : row.valorUnitario;
            const totalSinIgv = cantidad * valorUnitario;
            return { ...row, [name]: newValue, totalSinIgv };
          }
          return { ...row, [name]: newValue };
        }
        return row;
      });
      return { rows: updatedRows };
    });
  };

  // Calcular el total de todos los "Total (sin IGV)"
  getTotalSinIgv = () => {
    return this.state.rows.reduce((acc, row) => acc + row.totalSinIgv, 0);
  };

  // Calcular el 18% del total "Total (sin IGV)"
  getIgv = () => {
    const totalSinIgv = this.getTotalSinIgv();
    return totalSinIgv * 0.18;
  };

  // Calcular el total final (con IGV)
  getTotalFinal = () => {
    const totalSinIgv = this.getTotalSinIgv();
    const igv = this.getIgv();
    return totalSinIgv + igv;
  };

  render() {
    const totalFinal = this.getTotalFinal();
    const { moneda } = this.props;
    return (
      <div className="boxCotizador">
        <div className="page">
          <div className="topPage">
            <div className="logoEmpresa">
            <img
              src="https://avatars.githubusercontent.com/u/182690081?v=4"
              alt=""
            />
            </div>

            <div className="tittlePage">
              <p>TORQUE-G46</p>
              <p>direccion loasodalodoaldal aowmdowamoawmfoawf </p>
              <p>correo ventas@torqueg46.com</p>
              <p>telefono</p>
              <p>www.Torquegtienda.sce.com</p>
            </div>
            <div>
              <div>RUC: 20601395801</div>
              <div>COTIZACION N°</div>
              <div>000000</div>
            </div>
          </div>

          {/* informacion de cliente */}
          <div className="clientInfo">
            <div>
            <div className="txtInfo"><p>R.U.C</p> <p>:</p> </div>
            <div className="txtInfo"><p>Razon Social</p> <p>:</p> </div>
            <div className="txtInfo"><p>Direccion</p> <p>:</p> </div>
            <div className="txtInfo"><p>Forma De Pago</p> <p>:</p> </div>
            <div className="txtInfo"><p>Tipo de Moneda</p> <p>:</p> </div>
            <div className="txtInfo"><p>Fecha de emision</p> <p>:</p> </div>
          
            </div>
            <div>
                <div><input className="textInput" type="text" name="" id="ruc" /></div>
                <div><input className="textInput" type="text" name="" id="nombreCliente" /></div>
                <div><input className="textInput" type="text" name="" id="direccion" /></div>
                <div><input className="textInput" type="text" name="" id="paymentsMetodth" /></div>
                <div><input className="textInput" type="text" name="" id="divisa" value={moneda}/></div>
                <div><input className="textInput" type="text" name="" id="datePrint" /></div>

            </div>

          </div>

          {/* Tabla */}
          <div>
            <table className="itemstable" border="1">
              <thead>
                <tr>
                  <th>N° item</th>
                  <th>Descripcion</th>
                  <th>Cantidad</th>
                  <th>Valor Unitario</th>
                  <th>Total (sin IGV)</th>
                </tr>
              </thead>
              <tbody>
                {/* Renderizar las filas desde el estado */}
                {this.state.rows.map((row) => (
                  <tr key={row.id}>
                    <td className="numItem">{row.id}</td>
                    <td>
                      <input
                        name="descripcion"
                        // value={row.descripcion}
                        onChange={(e) => this.handleInputChange(e, row.id)}
                      />
                    </td>
                    <td>
                      <input
                        type="number"
                        name="cantidad"
                        value={row.cantidad}
                        onChange={(e) => this.handleInputChange(e, row.id)}
                      />
                    </td>
                    <td>
                      <input
                        type="number"
                        name="valorUnitario"
                        value={row.valorUnitario}
                        onChange={(e) => this.handleInputChange(e, row.id)}
                      />
                    </td>
                    <td>
                      {row.totalSinIgv.toFixed(3)}{" "}
                      {/* Mostrar total sin IGV con tres decimales */}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Botón para agregar nueva fila */}
          <button onClick={this.agregarItem} id="btnagregar">
            Agregar
          </button>

          {/* Mostrar el total sin IGV */}
          <div className="totalBox">
            <p>
              <strong>Total (sin IGV):</strong>{" "}
              {this.getTotalSinIgv().toFixed(3)}
            </p>
            <p>
              <strong>18% IGV:</strong> {this.getIgv().toFixed(3)}
            </p>
            <p>
              <strong>Total Final (con IGV):</strong>{" "}
              {this.getTotalFinal().toFixed(3)}
            </p>
          </div>

          <div>
            <p>OBSERBACIONES:</p>
            <p>
              Son: {this.numeroEnPalabras(totalFinal)} {moneda}
            </p>
          </div>
        </div>
      </div>
    );
  }
}
