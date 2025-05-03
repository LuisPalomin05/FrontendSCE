import React, { useState, useEffect, useCallback } from "react";
import axios from "axios";
import { IonIcon } from "@ionic/react";
import { arrowRedoOutline, refreshOutline } from "ionicons/icons";
import { Link } from "react-router-dom";

const ItemRecent = () => {
  const [itemsdata, setItemsData] = useState([]);

  const formatearFecha = (fechaISO) => {
    const fecha = new Date(fechaISO);
    const dia = String(fecha.getUTCDate()).padStart(2, "0");
    const mes = String(fecha.getUTCMonth() + 1).padStart(2, "0");
    const anio = fecha.getUTCFullYear();
    return `${anio}-${mes}-${dia}`;
  };

  const fetchItems = useCallback(async () => {
    try {
      const today = new Date();
      const dateFilter = formatearFecha(today);

      const response = await axios.get(
        "https://backendapi-6thn.onrender.com/api/cotizacion"
      );
      const datosfiltrados = response.data.filter(
        (items) => formatearFecha(items.emision) === dateFilter
      );

      setItemsData(datosfiltrados);
    } catch (error) {
      console.error("Error fetching items:", error);
    }
  }, []);

  useEffect(() => {
    fetchItems();
  }, [fetchItems]); // ahora sin warnings

  return (
    <div className="ItemRecents bgWhite roundborder flex1">
      <div className="flexbox bottombordergray padd1">
        <p className="cBlack panelTitle flex1">Recientes:</p>
        <div className="btdaay" onClick={fetchItems}>
          <div className="flexcenter">
            <IonIcon icon={refreshOutline} className="cGray" />
          </div>
        </div>
      </div>

      <div className="flexColumn gapp4 padd2">
        {Array.isArray(itemsdata) && itemsdata.length > 0 ? (
          itemsdata.map((items, index) => (
            <div key={index} className="itemresdata">
              <div className="padd1 flexcenter">{index + 1}</div>
              <div className="flex1">
                <p className="boldtext cGreentext">{items.cliente}</p>
                <p className="fs10">{items.ruc}</p>
              </div>
              <Link to={'cotizacion/editar/'+items._id} className="itemarrow">
                <IonIcon icon={arrowRedoOutline} className="cGray" />
              </Link>
            </div>
          ))
        ) : (
          <div className="flexbox cGray hoverbgWhite">
            <div className="padd1 flexcenter">No hay datos</div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ItemRecent;
