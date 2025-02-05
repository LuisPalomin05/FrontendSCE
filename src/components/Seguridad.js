import React from "react";
// import { Link } from "react-router-dom";

const Seguridad = () => {
  return (
    <div className="padd3">
      <p className="cBlack fs16">Seguridad</p>
      <p className="cGray">Configura la seguridad de tu cuenta.</p>
      <hr />
      <br></br>
      <section className="flexcolumn gapp4">
        <p>Contraseña</p>
        <input className="inputboxitm" type="text" placeholder="*********" />
        <p className="cGray">Actualiza tu contraseña Contraseña</p>
      </section>
<br/>
      <section>
        <button type="submit" class="btnSuccess wd3">
        Guardar
        </button>
      </section>
    </div>
  );
}

export default Seguridad;