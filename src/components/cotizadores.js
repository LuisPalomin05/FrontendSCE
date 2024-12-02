import React, { Component } from "react";

export default class Cotizador extends Component {
  state = {
    rows: []
  };

  // Función para convertir número a palabras
  numeroEnPalabras(numero) {
    if (numero === 0) return "cero";

    const unidades = ["", "uno", "dos", "tres", "cuatro", "cinco", "seis", "siete", "ocho", "nueve"];
    const especiales = ["", "once", "doce", "trece", "catorce", "quince", "dieciséis", "diecisiete", "dieciocho", "diecinueve"];
    const decenas = ["", "diez", "veinte", "treinta", "cuarenta", "cincuenta", "sesenta", "setenta", "ochenta", "noventa"];
    const centenas = ["", "cien", "doscientos", "trescientos", "cuatrocientos", "quinientos", "seiscientos", "setecientos", "ochocientos", "novecientos"];

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
        descripcion: '',
        cantidad: 0,
        valorUnitario: 0,
        totalSinIgv: 0
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
            const valorUnitario = name === "valorUnitario" ? newValue : row.valorUnitario;
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
    return (
      <div>
        {/* Botón para agregar nueva fila */}
        <button onClick={this.agregarItem} id="btnagregar">Agregar</button>

        {/* Tabla */}
        <div>
          <table border="1">
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
                  <td>{row.id}</td>
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
                    {row.totalSinIgv.toFixed(3)} {/* Mostrar total sin IGV con tres decimales */}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Mostrar el total sin IGV */}
        <div>
          <p><strong>Total (sin IGV):</strong> {this.getTotalSinIgv().toFixed(3)}</p>
          <p><strong>18% IGV:</strong> {this.getIgv().toFixed(3)}</p>
          <p><strong>Total Final (con IGV):</strong> {this.getTotalFinal().toFixed(3)}</p>
        </div>
        
        <div>
          <p>Son: {this.numeroEnPalabras(totalFinal)}</p>
        </div>
      </div>
    );
  }
}
