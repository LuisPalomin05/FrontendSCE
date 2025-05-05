import React from "react";
import "../content/css/CardBoxCash.css";
import { IonIcon } from "@ionic/react";
import { cashOutline,
  basketOutline
 } from "ionicons/icons";

const CardBoxCash = ({ tipo, montoSoles,montoDolar, empresa }) => {
  var classtheme = "";
  if (tipo === "Ventas") {
    classtheme = "ventablue";

  } else{
    classtheme = "ventaGray";

  }

  return (
    <div className="">
      <div className="">
        <p className="">{tipo}</p>
        <div className="">
          {tipo === "Ventas" ? (<IonIcon icon={cashOutline}></IonIcon>) :
          (<IonIcon icon={basketOutline}></IonIcon>)}
          
        </div>
      </div>
      <div className=""><p className={classtheme}>{montoSoles}</p> | <p className="cBlack">{montoDolar}</p> </div>
      <div className="">{empresa}</div>
    </div>
  );
};

export default CardBoxCash;
