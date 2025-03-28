import React from "react";
import "../content/css/CardBoxCash.css";
import { IonIcon } from "@ionic/react";
import { cashOutline } from "ionicons/icons";

const CardBoxCash = ({ tipo, monto, empresa }) => {
  return (
    <div >
      <div className="cotheader">
        <p>{tipo}</p>
        <div className="bordericon">
          <IonIcon icon={cashOutline}></IonIcon>
        </div>
      </div>
      <div className="cotmonto">{monto}</div>
      <div className="cotempresa">{empresa}</div>
    </div>
  );
};

export default CardBoxCash;
