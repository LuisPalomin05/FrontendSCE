import React, { lazy, Suspense } from "react";
import { Link } from "react-router-dom";
import { IonIcon } from "@ionic/react";
import { chevronForward, cartOutline } from "ionicons/icons";

const Itemsrecents = lazy(() => import("./ItemRecents"));

const CotizadorPanel = () => {
  return (
    <div className="flexColumn gapp2 hg95">
      <div className="hg40">
        <div className="CotizacionPanelbox">
          <div className="titleCotizacion">
            <p className="cwhite panelTitle">Cotizar:</p>
          </div>

          <div className="padd1 ">
            <Link
              to={"/cotizacion/crear/"}
              className="flexalign liItemCash cwhite  roundborder"
            >
              <div className="flexbox gapp2 hg10">
                <IonIcon className="boldtext" icon={cartOutline} />
                <p>Crear Cotizacion</p>
              </div>
              <IonIcon icon={chevronForward} />
            </Link>
          </div>
        </div>
      </div>

      <Suspense fallback={<div className="spinner"></div>}>
        <div className="flex1 hg50">
          <Itemsrecents />
        </div>
      </Suspense>
    </div>
  );
};

export default CotizadorPanel;
