import React from "react";
import { Link } from "react-router-dom";

const VentasCrear = () => {
  return (
    <div className="padd2">
      <section className="marbot">
        <h1>Registar Nueva Venta</h1>
        <p className="cGray">
          ingresa los datos a registrar o arrastra un xml al area indicada
        </p>
      </section>
      <section>
        <section>
          <form>
          <section className="flexbox gapp2">
            <div className="flexbox flex2 gapp4">
              <div className="flexcolumn gapp4">
                <section >
                  <p>Cliente</p>
                  <input
                    className="inputbox"
                    type="text"
                    placeholder="Cliente"
                  />
                </section>
                <section>
                  <p>RUC</p>
                  <input
                    className="inputbox"
                    type="text"
                    placeholder="RUC:20123456789"
                  />
                </section>
              </div>
              <div className="flexcolumn gapp4">
                <section>
                  <p>Fecha Emision</p>
                  <input className="inputboxitm" type="date" />
                </section>
                <section>
                  <p>Fecha Vencimiento</p>
                  <input className="inputboxitm" type="date" />
                </section>
              </div>
            </div>

            <div className="flexcolumn flex1 gapp2">
              <section>
                <div>
                  <p>Empresas</p>
                  <select className="inputboxitm">
                    <option>TORQUE-G46</option>
                    <option>IRONTOOLS</option>
                  </select>
                </div>
                {/* <div>
                  <p>20601395801</p>
                </div> */}
              </section>
              <section>
                <p>Numero de Serie</p>
                <input
                  className="inputbox"
                  type="text"
                  placeholder="Numero de Serie"
                />
              </section>
            </div>
                  </section>
            <div className="flexbox gapp2">
            <section className="fl">
              <p>Importe total</p>
              <input
                className="inputbox"
                type="number"
                placeholder="Importe total"
              />
            </section>
            <section>
              <p>Moneda</p>
              <select className="inputbox">
                <option>Soles</option>
                <option>Dolares</option>
              </select>
            </section>

            </div>
            
            <br/>

            <section className="flexbox gapp8">
              <button type="submit" className="btnSuccess">
                Guardar
              </button>
              <button type="reset" className="btnWarning">
                Limpiar
              </button>
              <Link to={"/ventas"} className="btnDanger">
                Cancelar
              </Link>
            </section>
          </form>
        </section>
        <br/>
        <section>
          <p>xml</p>
          <div>
            <div className="flexbox padd1 xmldropbox">
              <p>Arrastra el archivo xml</p>
            </div>
          </div>
        </section>
      </section>
    </div>
  );
};

export default VentasCrear;
