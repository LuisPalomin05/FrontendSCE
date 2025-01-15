import React, { Component } from "react";
import "../content/css/Configuracion.css";

export default class Configuracion extends Component {
  render() {
    return (
      <div className="ConfiguracionBox">
        <div>
          <p>Configuracion</p>
          <div>
            <div>
              <p>Temas y Colores</p>
              <div className="paleta">
                <div class="paleta1">
                  <div className="box20 verde"></div>
                  <div className="box20 azul">
                    <ion-icon name="checkmark-circle-outline"></ion-icon>
                  </div>
                  <div className="box20 violeta"></div>
                  <div className="box20 rojo"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
