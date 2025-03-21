import React from "react";

const Personalizacion = () => {

    return (
<div>
<div>
  <p className="cBlack">Temas y Colores</p>
  <p className="cGray">Selecciona el color que deseas aplicar como tema de color en tu panel de trabajo.</p>
  <div className="paleta">
    <div class="paleta1 gapp4 martop">
      <div className="box20 verde cPointer roundborder"></div>
      <div className="box20 azul cPointer roundborder">
        <ion-icon name="checkmark-circle-outline"></ion-icon>
      </div>
      <div className="box20 violeta cPointer roundborder"></div>
      <div className="box20 rojo cPointer roundborder"></div>
    </div>
  </div>
</div>
</div>
    );
    }

export default Personalizacion;
