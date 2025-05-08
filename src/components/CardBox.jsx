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
    <div className="cardContent">
      <div className="cardTitle padd2">
        <p className="cardtextTitle">{tipo}</p>
        <div className="ventaGreen cardCashIcon">
          {tipo === "Ventas" ? (<IonIcon icon={cashOutline}></IonIcon>) :
          (<IonIcon icon={basketOutline}></IonIcon>)}
          
        </div>
      </div>
      <div className="flexbox wd50 gapp4 martop"><p className={classtheme}>{montoSoles}</p> | <p className="cBlack">{montoDolar}</p> </div>
      <div className="padd2">{empresa}</div>
    </div>
  );
};

export default CardBoxCash;
