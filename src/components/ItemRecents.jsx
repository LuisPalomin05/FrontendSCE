import React, { useState, useEffect } from "react";
import axios from "axios";

const ItemRecent = () => {
  const [itemsdata, setItemsData] = useState([]);
  const formatearFecha = (fechaISO) => {
    const fecha = new Date(fechaISO);
    const dia = String(fecha.getUTCDate()).padStart(2, "0");
    const mes = String(fecha.getUTCMonth() + 1).padStart(2, "0");
    const anio = fecha.getUTCFullYear();
    return `${anio}-${mes}-${dia}`;
  };

  useEffect(() => {
    const fetchItems = async () => {
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
    };

    fetchItems();
  }, []);

  return (
    <div className="ItemRecents bgWhite roundborder flex1">
      <div className="titleRecents bottombordergray">
        <p className="cBlack panelTitle">Recientes:</p>
      </div>
      <div className="flexColumn gapp4 padd2">
        {Array.isArray(itemsdata) &&
          itemsdata.map((items, index) => (
            <div key={index} className="flexbox cGray">
              <div className="padd1 flexcenter">{index+1}</div>
              <div>
              <p className="boldtext cGreentext">{items.cliente}</p>
              <p className="fs10">{items.ruc}</p>
              </div>

            </div>
          ))}
      </div>
    </div>
  );
};

export default ItemRecent;
