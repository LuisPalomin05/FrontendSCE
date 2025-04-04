import React from "react";
import { Link } from "react-router-dom";
import { IonIcon } from "@ionic/react";
import { chevronForward, cartOutline } from "ionicons/icons";

const CotizadorPanel = () => {
  return (
    <div className="CotizadorPanel">
      <div className="CotizacionPanelbox">
        <div className="titleCotizacion">
          <p className="cwhite panelTitle">Cotizar:</p>
        </div>

        {/* Empresa TORQUE-G46 */}
        {/* <div className="EmpresaItembox">
          <div className="flexbox tagnamebox">
            <IonIcon icon={pricetags} />
            <p>TORQUE-G46</p>
          </div>
          <ul className="liItemCashbox">
            <li>
              <Link to="/cotizador/soles" className="flexbox liItemCash">
                <div className="flexbox">
                  <p className="pleft">S/.</p>
                  <p>Soles</p>
                </div>
                <IonIcon icon={chevronForward} />
              </Link>
            </li>
            <li>
              <Link to="/cotizador/dolares" className="flexbox liItemCash">
                <div className="flexbox">
                  <p className="pleft">$.</p>
                  <p>Dólares</p>
                </div>
                <IonIcon icon={chevronForward} />
              </Link>
            </li>
          </ul>
        </div> */}

        {/* Empresa IRONTOOLS */}
        {/* <div className="EmpresaItembox">
          <div className="flexbox tagnamebox">
            <IonIcon icon={pricetags} />
            <p>IRONTOOLS</p>
          </div>
          <ul className="liItemCashbox">
            <li className="flexbox liItemCash">
              <div className="flexbox">
                <p className="pleft">S/.</p>
                <p>Soles</p>
              </div>
              <IonIcon icon={chevronForward} />
            </li>
            <li className="flexbox liItemCash">
              <div className="flexbox">
                <p className="pleft">$.</p>
                <p>Dólares</p>
              </div>
              
            </li>
          </ul>

        </div> */}

        <div>
          <Link  to={"/cotizacion/crear/"}  className="flexalign liItemCash padd3 gapp4 cwhite  roundborder" >
            <div className="flexbox gapp2 hg10">
              <IonIcon className="boldtext" icon={cartOutline} />
              <p>Crear Cotizacion</p>
            </div>
            <IonIcon icon={chevronForward} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CotizadorPanel;
