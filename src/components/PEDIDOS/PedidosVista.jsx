import React, { useState } from "react";
import "../../content/css/Pedidos.css";
import { Link } from "react-router-dom";
import { IonIcon } from "@ionic/react";
import { cubeOutline } from "ionicons/icons";

const PedidosVista = () => {
  const [Pedidos, setPedidos] = useState([]);

  return (
<div className="PedidosBox">

<div className="timeline">
  <div className="timeline-item">
    <div className="timeline-icon">
      <IonIcon icon={cubeOutline} />
    </div>
    <div className="timeline-content">
      <h3>Pedidos</h3>
      <p>Lista de pedidos realizados</p>
      <Link to="/pedidos/crear" className="btn btn-primary">
        Crear Pedido
      </Link>
    </div>
  </div>

  {Pedidos.map((pedido) => (
    <div key={pedido.id} className="timeline-item">
      <div className="timeline-icon">
        <IonIcon icon={cubeOutline} />
      </div>
      <div className="timeline-content">
        <h3>{pedido.nombre}</h3>
        <p>{pedido.descripcion}</p>
        <Link to={`/pedidos/${pedido.id}`} className="btn btn-secondary">
          Ver Detalles
        </Link>
      </div>
    </div>
  ))}
</div>
</div>
  );
};

export default PedidosVista;
