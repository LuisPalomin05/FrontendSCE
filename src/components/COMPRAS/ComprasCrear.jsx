import React from "react";
import { Link } from "react-router-dom";

const ComprasCrear = () => {
  return (
    <div className="padd2">
      <section className="marbot">
        <h1>Registrar Nueva Compra</h1>
        <p className="cGray">
          Ingresa los datos a registrar o arrastra un XML al área indicada.
        </p>
      </section>

      <form>
        <section className="flexbox gapp2">
          <div className="flexbox flex2 gapp4">
            <div className="flexcolumn gapp4">
              <section>
                <label htmlFor="cliente">Cliente</label>
                <input
                  className="inputbox"
                  type="text"
                  id="cliente"
                  name="cliente"
                  placeholder="Cliente"
                />
              </section>
              <section>
                <label htmlFor="ruc">RUC</label>
                <input
                  className="inputbox"
                  type="text"
                  id="ruc"
                  name="ruc"
                  placeholder="RUC: 20123456789"
                />
              </section>
            </div>

            <div className="flexcolumn gapp4">
              <section>
                <label htmlFor="fecha-emision">Fecha Emisión</label>
                <input
                  className="inputboxitm"
                  type="date"
                  id="fecha-emision"
                  name="fecha_emision"
                />
              </section>
              <section>
                <label htmlFor="fecha-vencimiento">Fecha Vencimiento</label>
                <input
                  className="inputboxitm"
                  type="date"
                  id="fecha-vencimiento"
                  name="fecha_vencimiento"
                />
              </section>
            </div>
          </div>

          <div className="flexcolumn flex1 gapp2">
            <section>
              <label htmlFor="empresa">Empresas</label>
              <select className="inputboxitm" id="empresa" name="empresa">
                <option>TORQUE-G46</option>
                <option>IRONTOOLS</option>
              </select>
            </section>
            <section>
              <label htmlFor="numero-serie">Número de Serie</label>
              <input
                className="inputbox"
                type="text"
                id="numero-serie"
                name="numero_serie"
                placeholder="Número de Serie"
              />
            </section>
          </div>
        </section>

        <div className="flexbox gapp2">
          <section>
            <label htmlFor="importe-total">Importe Total</label>
            <input
              className="inputbox"
              type="number"
              id="importe-total"
              name="importe_total"
              placeholder="Importe total"
            />
          </section>
          <section>
            <label htmlFor="moneda">Moneda</label>
            <select className="inputbox" id="moneda" name="moneda">
              <option>Soles</option>
              <option>Dólares</option>
            </select>
          </section>
        </div>

        <br />

        <section className="flexbox gapp8">
          <button type="submit" className="btnSuccess">Guardar</button>
          <button type="reset" className="btnWarning">Limpiar</button>
          <Link to={"/compras"} className="btnDanger">Cancelar</Link>
        </section>
      </form>

      <br />

      <section>
        <p>XML</p>
        <div className="flexbox padd1 xmldropbox">
          <p>Arrastra el archivo XML</p>
        </div>
      </section>
    </div>
  );
};

export default ComprasCrear;
