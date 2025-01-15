import React from "react";
import "../content/css/CardBoxCash.css";

const CardBoxCash = ({ tipo, icono, monto, empresa }) => {
    return (
        <div className="CardboxCash">
            <div className="cotheader">
                <p>{tipo}</p>
                <div className="bordericon">
                <ion-icon name={icono}></ion-icon>
                </div>
            </div>
            <div className="cotmonto">
                {monto}
            </div>
            <div className="cotempresa">
                {empresa}
            </div>
        </div>
    );
};

export default CardBoxCash;
