import React from "react";
import { Link } from "react-router-dom";
import "../../content/css/Cuenta.css";

const Cuenta = () => {
  return (
    <div className="cuentaBox">
      <p className="cBlack fs16">Perfil y Cuenta</p>
      <p className="cGray">
        Este es el nombre que aparece oficialmente en tu cuenta
      </p>
      <hr />
      <br />
      <section className="flexcolumn gapp4">
        <p>Nombres</p>
        <input
          className="inputbox wd1"
          type="text"
          placeholder="Luis Alfredo"
        />
      </section>
      <section className="flexcolumn gapp4 ptop">
        <p>Apellidos</p>
        <input
          className="inputbox wd1"
          type="text"
          placeholder="Palomino Medina"
        />
      </section>
      <section className="flexcolumn gapp4">
        <p>Contraseña</p>
        <div className="flexbox gapp4">
        <input className="inputbox wd1" type="text" placeholder="*********" />
        <Link to="/sce/configuracion/seguridad" className="wd10 btnSuccess">
        Modificar
        </Link>
        </div>

        <p className="cGray">Actualiza tu contraseña Contraseña</p>
      </section>
    </div>
  );
};

export default Cuenta;
