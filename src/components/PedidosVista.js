import React from "react";

const PedidosVista = () => {
  return (
    <div>
      <h1>PedidosVista</h1>

      <section>
        <div className="flexbox gapp2">
          <div>
            <p>Pedido en curso:</p>
            <div>datos del pedido en curso</div>
          </div>
          <div>Proximo a trabajar</div>
        </div>
      </section>
      <section>
        <div>
          <p>Lista Entregados/Pendientes</p>
          <div>datos de pedidos pendientes o entregados</div>
        </div>
      </section>
    </div>
  );
};

export default PedidosVista;
