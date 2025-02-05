import React, { useState } from "react";

export default function CotizadorVista() {
  const [ruc, setRuc] = useState("");

  return (
    <div>
      <section>
        <div>
          <div>
            <p>Ruc</p>
            <input
              type="text"
              id="rucInputData"
              placeholder="2012345678X"
              value={ruc}
              onChange={(e) => setRuc(e.target.value)} // Actualiza el estado al escribir
            />
          </div>

          {ruc.length > 5 && (
            <div>
              <p>Nombre</p>
              <input type="text" placeholder="Nombre del cliente" />
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
