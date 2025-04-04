// import React, { useState } from "react";
import React from "react";
import { Link } from "react-router-dom";
import { IonIcon } from "@ionic/react";
import {
  // listOutline,
  homeOutline,
  bagAddOutline,
  bagRemoveOutline,
  documentTextOutline,
  ticketOutline,
  accessibilityOutline,
  cogOutline,
} from "ionicons/icons";
import { Tooltip } from "react-tooltip";

const Menulateral = () => {
  return (
    <div className="flexbox iconMenuBox">
      <div className="flexbox flexRow">
        <div className="MenuTopBox">
          <div className="flexbox hoverback">
            <Link className="" to={"/dashboard"}>
              <svg
                className="nombreLogo"
                version="1.0"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 343.000000 125.000000"
                preserveAspectRatio="xMidYMid meet"
              >
                <g
                  transform="translate(0.000000,125.000000) scale(0.1,-0.1)"
                  fill="#ffffff"
                  stroke="none"
                >
                  <path
                    d="M1620 1224 c-159 -42 -314 -171 -389 -324 -93 -190 -95 -399 -4 -573
          47 -91 163 -210 250 -255 133 -70 286 -88 427 -52 109 28 190 74 276 157 l75
          73 -110 110 c-109 110 -110 111 -125 88 -36 -53 -75 -89 -128 -115 -47 -23
          -70 -28 -132 -28 -126 0 -215 58 -272 175 -29 62 -29 182 1 261 57 149 206
          228 353 185 65 -19 139 -79 169 -139 l21 -40 111 111 110 110 -39 52 c-71 94
          -192 172 -319 205 -73 19 -202 18 -275 -1z"
                  />
                  <path
                    d="M2780 1224 c-165 -43 -308 -159 -378 -305 -54 -113 -67 -173 -66
          -304 0 -182 56 -319 178 -441 123 -122 282 -182 456 -170 101 6 156 22 252 73
          62 33 198 150 198 171 0 4 -49 56 -109 116 l-109 109 -16 -30 c-19 -38 -74
          -86 -129 -114 -47 -25 -170 -38 -181 -21 -3 6 117 160 269 342 151 183 275
          336 275 342 0 6 -31 41 -69 77 -75 74 -177 131 -276 156 -74 19 -222 18 -295
          -1z m219 -293 c10 -6 -28 -63 -155 -234 -93 -125 -172 -226 -176 -227 -14 0
          -28 76 -28 152 0 151 68 256 194 300 54 18 142 23 165 9z"
                  />
                  <path
                    d="M279 1176 c-99 -26 -187 -100 -235 -196 -39 -78 -46 -209 -14 -293
          29 -76 74 -134 140 -179 83 -57 143 -68 363 -68 111 0 196 -4 208 -10 23 -13
          25 -57 5 -86 -14 -18 -33 -19 -378 -24 l-363 -5 -3 -148 -3 -148 388 3 c375 3
          390 4 443 25 30 13 78 43 107 68 111 97 153 264 102 400 -30 81 -112 163 -194
          195 -55 22 -78 24 -265 27 -113 2 -215 6 -227 8 -29 7 -55 57 -47 90 12 49 16
          50 358 55 l321 5 3 148 3 147 -333 -1 c-231 0 -347 -4 -379 -13z"
                  />
                </g>
              </svg>
            </Link>
          </div>
          {/* <div className="hoverback cPointer">
            <IonIcon className="ioniconwhite" icon={listOutline} />
          </div> */}

          <Link
            to="/dashboard"
            className="hoverback"
            data-tooltip-id="home-tooltip"
            data-tooltip-content="Inicio"
          >
            <IonIcon className="ioniconwhite" icon={homeOutline} />
            <Tooltip id="home-tooltip" />
          </Link>

          <Link
            to="/ventas"
            data-tooltip-id="sell-tooltip"
            data-tooltip-content="Ventas"
            className="hoverback"
          >
            <IonIcon className="ioniconwhite" icon={bagAddOutline} />
            <Tooltip id="sell-tooltip" />
          </Link>

          <Link to="/compras" data-tooltip-id="buy-tooltip"
            data-tooltip-content="Compras" className="hoverback">
            <IonIcon className="ioniconwhite" icon={bagRemoveOutline} />
            <Tooltip id="buy-tooltip" />

          </Link>

          <Link to="/documentos" data-tooltip-id="docs-tooltip"
            data-tooltip-content="Documentos" className="hoverback">
            <IonIcon className="ioniconwhite" icon={documentTextOutline} />
            <Tooltip id="docs-tooltip" />

          </Link>

          <Link to="/pedidos" data-tooltip-id="box-tooltip"
            data-tooltip-content="Pedidos" className="hoverback">
            <IonIcon className="ioniconwhite" icon={ticketOutline} />
            <Tooltip id="box-tooltip" />

          </Link>

          <Link to="/clientes" data-tooltip-id="clients-tooltip"
            data-tooltip-content="Clientes" className="hoverback">
            <IonIcon className="ioniconwhite" icon={accessibilityOutline} />
            <Tooltip id="clients-tooltip" />

          </Link>

          <Link to="/proveedores" data-tooltip-id="provs-tooltip"
            data-tooltip-content="Proveedores" className="hoverback">
            <IonIcon className="ioniconwhite" icon={ticketOutline} />
            <Tooltip id="provs-tooltip" />

          </Link>
        </div>
        <Link to="/sce/configuracion" data-tooltip-id="provs-tooltip"
            data-tooltip-content="Configuracion">
          <div className="hoverback">
            <IonIcon className="ioniconwhite" icon={cogOutline} />
          </div>
          <Tooltip id="tool-tooltip" />

        </Link>
      </div>
    </div>
  );
};

export default Menulateral;
