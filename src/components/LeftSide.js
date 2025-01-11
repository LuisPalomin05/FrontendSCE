import React, { Component } from "react";
import { Link } from "react-router-dom";
import ItemRecents from "./ItemRecents";

export default class LeftSide extends Component {
  state = {
    isPaletaOpen: false, 
  };
  toggleDiv = (selector) => {
    const element = document.querySelector(selector);
    if (element) {
      element.classList.toggle("activeted");
    }
  };

  toggleDivClass = () => {
    this.setState((prevState) => ({
      isPaletaOpen: !prevState.isPaletaOpen, 
    }));
  };

  render() {
    const { isPaletaOpen } = this.state;
    return (
      <div className="flexAlign leftmenu">
        <div className="flexColumn leftIcons ">
          <div className="iMenu" onClick={this.toggleDivClass}>
            <ion-icon class="IconGray" name="list"></ion-icon>
          </div>
          <div className="flexColumn flex1 ">
            <div className="iconsMenus">
              
              <Link to={"/Dashboard"}>
                <ion-icon class="IconGray" name="home"></ion-icon>
              </Link>
            </div>

            <Link to={"/sce/Configuracion"}>
              <ion-icon class="IconGray" name="cog"></ion-icon>
            </Link>
          </div>
        </div>
        <div className={`leftPaleta ${isPaletaOpen ? "active" : ""}`}>
          <div className="flexColumn menuCotizacion">
            <div className="flexAlign">
              <div className="recient">
                <i>Empresas</i>
              </div>
              <ion-icon
                onClick={() => this.toggleDiv(".listEnterprice")}
                class="IconGray2"
                name="close-circle"
              ></ion-icon>
            </div>
            <div className="listEnterprice">
              {/* empresas */}
              <div className="enterprise">
                <div className="TagEmpresa">
                  <ion-icon name="pricetags"></ion-icon>
                  <p>TORQUE-G46</p>
                </div>
                <ul className="flexColumn">
                  <Link to={"/Torque/soles"}>
                    <li className="flexAlign itemlistleft">
                      <p>Soles</p>
                      <ion-icon name="chevron-forward"></ion-icon>
                    </li>
                  </Link>
                  <Link to={"/Torque/dolares"}>
                    <li  className="flexAlign itemlistleft">
                      <p>Dólares</p>
                      <ion-icon name="chevron-forward"></ion-icon>
                    </li>
                  </Link>
                </ul>
              </div>
              <div className="enterprise">
                <div className="TagEmpresa">
                  <ion-icon name="pricetags"></ion-icon>
                  <p>IRONTOOLS</p>
                </div>
                <ul className="tItem">
                  <Link to={"/Irontools/soles"}>
                    <li className="flexAlign itemlistleft">
                      <p>Soles</p>
                      <ion-icon name="chevron-forward"></ion-icon>
                    </li>
                  </Link>

                  <Link to={"/Irontools/dolares"}>
                    {" "}
                    <li className="flexAlign itemlistleft">
                      <p>Dólares</p>
                      <ion-icon name="chevron-forward"></ion-icon>
                    </li>
                  </Link>
                </ul>
              </div>
            </div>

            <div className="hr"></div>
          </div>
          <div className="listrecents">
            <div className="recents">
              <div className="recient">
                <i>Recientes</i>
              </div>
              <ion-icon class="IconGray2" name="refresh"></ion-icon>
              <ion-icon class="IconGray2" name="close-circle"></ion-icon>
            </div>
            <div>
              <ItemRecents />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
