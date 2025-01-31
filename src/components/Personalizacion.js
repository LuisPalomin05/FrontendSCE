import React from "react";

const Personalizacion = () => {

    return (
<div>
<div>
  <p className="cBlack">Temas y Colores</p>
  <p className="cGray">Selecciona el color que deseas aplicar como tema de color en tu panel de trabajo.</p>
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
    );
    }

export default Personalizacion;
