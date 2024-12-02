import React, {Component} from "react";
import { Link } from "react-router-dom";

export default class Navigation extends Component {
    toggleDiv = (selector) => {
        const element = document.querySelector(selector);
        if (element) {
          element.classList.toggle("activeted");
        }
      };
    render() {
        return (
        <div className="Nav-menu">
            <div className="menuIcons">
                <Link className="itemIcon" to={"/Dashboard"}>
                <img className="imgSize" src="../sce_text.svg" alt="" />
                </Link>
            </div>
            <div className="menuPaleta">
            <ion-icon class='cWhite icon'  name="attach"></ion-icon>
            <ion-icon class='cWhite icon' name="notifications"></ion-icon>
            <ion-icon onClick={() => this.toggleDiv(".profileCard")} class='cWhite icon' name="person"></ion-icon>
            </div>
        </div>
        );
    }
    }

