import React from "react";
import { Link } from "react-router-dom";

const ComprasCrear = () => {

    return(
        <div>
        <section>
          <h1>Registar Nueva Compra</h1>
          <p className="cGray">
            ingresa los datos a registrar o arrastra un xml al area indicada
          </p>
        </section>
        <section>
          <section>
            <form>
              <section>
                <p>Cliente</p>
                <input type="text" placeholder="Cliente" />
              </section>
              <section>
                <p>RUC</p>
                <input type="text" placeholder="RUC:20123456789" />
              </section>
              <section>
                <p>Fecha Emision</p>
                <input type="date" />
              </section>
              <section>
                <p>Fecha Vencimiento</p>
                <input type="date" />
              </section>
              <section>
                <p>Numero de Serie</p>
                <input type="text" placeholder="Numero de Serie" />
              </section>
              <section>
                <div>
                <p>Empresas</p>
                <select>
                  <option>TORQUE-G46</option>
                  <option>IRONTOOLS</option>
                </select>
                </div>
  <div>
    <p>20601395801</p>
  </div>
                
              </section>
              <section>
                <p>Moneda</p>
                <select>
                  <option>Soles</option>
                  <option>Dolares</option>
                </select>
              </section>
              <section>
                <p>Importe total</p>
                <input type="number" placeholder="Importe total" />
              </section>
  
              <section className="flexbox gapp2">
                <button type="submit" className="btnbox">Guardar</button>
                <button type="reset" className="btnbox">Limpiar</button>
                <Link to={"/ventas"} className="btnbox">Cancelar</Link>
              </section>
            </form>
          </section>
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

export default ComprasCrear;