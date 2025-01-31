import React from "react";

const ComprasCrear = () => {
    return (
<div>
      <section>
        <h1>Registar Nueva Compra</h1>
        <p className="cGray">ingresa los datos a registrar o arrastra un xml al area indicada</p>
      </section>
      <section>
        <section>
          
          <form>
            <section>
              <label>Cliente</label>
              <input type="text" placeholder="Cliente" />
            </section>
            <section>
              <label>RUC</label>
              <input type="text" placeholder="RUC:20123456789" />
            </section>
            <section>
              <label>Fecha Emision</label>
              <input type="date" />
            </section>
            <section>
              <label>Fecha Vencimiento</label>
              <input type="date" />
            </section>
            <section>
              <label>Numero de Serie</label>
              <input type="text" placeholder="Numero de Serie" />
            </section>
            <section>
              <div>
              <label>Empresas</label>
              <select>
                <option>TORQUE-G46</option>
                <option>IRONTOOLS</option>
              </select>
              </div>
<div>
  <label>20601395801</label>
</div>
              
            </section>
            <section>
              <label>Moneda</label>
              <select>
                <option>Soles</option>
                <option>Dolares</option>
              </select>
            </section>
            <section>
              <label>Importe total</label>
              <input type="number" placeholder="Importe total" />
            </section>
          </form>
        </section>
        <section>
            <p>xml</p>
            <div>
                <div>
                    <p>Arrastra el archivo xml</p>
                </div>
            </div>
        </section>
      </section>
    </div>
    );
    };

    export default ComprasCrear;