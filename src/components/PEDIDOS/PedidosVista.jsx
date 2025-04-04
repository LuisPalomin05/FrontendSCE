import React from "react";
import "../../content/css/Pedidos.css";

const PedidosVista = () => {
  return (
    <div className="PedidosBox">
      <h1 className="cGray fs16 ptop">PedidosVista</h1>

      <section className="padd4 wd">
        <div className="flexbox gapp2">
          <div className="flex1">
            <p>Pedido en curso:</p>
            <div className="padd2">
              Pedido en curso
              <div>
                <p>Nombre Empresa</p>
                <p>RUC</p>
              </div>
              <div>
                <p>estado</p>
              </div>
            </div>
          </div>
          <div className="flex1">Proximo a trabajar</div>
        </div>
      </section>
      <section className="padd2">
        <div>
          <p>Lista Entregados/Pendientes</p>
          <div>datos de pedidos pendientes o entregados</div>
        </div>
      </section>
    </div>
  );
};

export default PedidosVista;
