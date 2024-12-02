import React, { Component } from "react";
import { Link } from "react-router-dom";
import ItemRecents from "./ItemRecents";

export default class LeftSide extends Component {
  state = {
    isPaletaOpen: false, // Estado inicial cerrado
  };
  toggleDiv = (selector) => {
    const element = document.querySelector(selector);
    if (element) {
      element.classList.toggle("activeted");
    }
  };

  toggleDivClass = () => {
    this.setState((prevState) => ({
      isPaletaOpen: !prevState.isPaletaOpen, // Alterna el estado
    }));
  };

  render() {
    const { isPaletaOpen } = this.state;
    return (
      <div className="leftmenu">
        <div className="leftIcons">
          <div className="iMenu" onClick={this.toggleDivClass}>
            <ion-icon class="cGray iconsize" name="list"></ion-icon>
          </div>
          <div className="iMenuIcon">
            <div className="iconsMenus">
              {" "}
              <Link to={"/Dashboard"}>
              <ion-icon class="cGray iconsize" name="home"></ion-icon>

              </Link>
            </div>

<Link to={"/sce/Configuracion"}>
<ion-icon class="cGray iconsize" name="cog"></ion-icon>

</Link>
          </div>
        </div>
        {/* ----- */}
        <div className={`leftPaleta ${isPaletaOpen ? "active" : ""}`}>
          <div className="menuCotizacion">
            <div className="recents">
              <div className="recient">
                <i>Empresas</i>
              </div>
              <ion-icon
                onClick={() => this.toggleDiv(".listEnterprice")}
                class="cGray"
                name="close-circle"
              ></ion-icon>
            </div>
            <div className="listEnterprice">
              {/* empresas */}
              <div className="enterprise">
                <div className="tTittle">
                  <ion-icon name="pricetags"></ion-icon>
                  <p>TORQUE-G46</p>
                </div>
                <ul className="tItem">
                  <Link to={"/Torque/soles"}>
                    <li>
                      <p>Soles</p>
                      <ion-icon name="chevron-forward"></ion-icon>
                    </li>
                  </Link>
                  <Link to={"/Torque/dolares"}>
                    <li>
                      <p>Dólares</p>
                      <ion-icon name="chevron-forward"></ion-icon>
                    </li>
                  </Link>
                </ul>
              </div>
              <div className="enterprise">
                <div className="tTittle">
                  <ion-icon name="pricetags"></ion-icon>
                  <p>IRONTOOLS</p>
                </div>
                <ul className="tItem">
                  <Link to={"/Irontools/soles"}>
                    <li>
                      <p>Soles</p>
                      <ion-icon name="chevron-forward"></ion-icon>
                    </li>
                  </Link>

                  <Link to={"/Irontools/dolares"}>
                    {" "}
                    <li>
                      <p>Dólares</p>
                      <ion-icon name="chevron-forward"></ion-icon>
                    </li>
                  </Link>
                </ul>
              </div>
            </div>

            <div className="hr"></div>
          </div>
          {/* recientes */}
          <div className="listrecents">
            <div className="recents">
              <div className="recient">
                <i>Recientes</i>
              </div>
              <ion-icon class="cGray" name="refresh"></ion-icon>
              <ion-icon class="cGray" name="close-circle"></ion-icon>
            </div>
            <div>
              {/* aquí va el contenido */}
              <ItemRecents />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
