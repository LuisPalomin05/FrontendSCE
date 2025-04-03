import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";


const localhost = "https://backendapi-6thn.onrender.com/api/ventas";

const VentasCrear = () => {

  const navigate = useNavigate();


  const [ruc, setRuc] = useState("");
  const [cliente, setCliente] = useState("");
  const [emision, setEmision] = useState("");
  const [vencimiento, setVencimiento] = useState("");
  const [empresa, setEmpresa] = useState("TORQUE-G46");
  const [nfactura, setnFactura] = useState("");
  const [total, setTotal] = useState("");
  const [moneda, setMoneda] = useState("Soles");

  useEffect(() => {
    async function fetchData() {
      // const res = await axios.get(localhost)
      // console.log(res)
    }
    fetchData();
  }, []);

  const onSubmitForm = async (e) => {
    e.preventDefault();
    const newVenta = {
      ruc,
      cliente,
      emision,
      vencimiento,
      empresa,
      nfactura,
      total,
      moneda,
    };
    try {
      const res = await axios.post(localhost,newVenta);
      console.log(res);
    } catch (error) {
      console.log(error)
    }


navigate("/ventas");
  };

  // Función para manejar archivos XML
  const handleFileDrop = (e) => {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    if (file && file.type === "text/xml") {
      console.log("Archivo XML cargado:", file.name);
    } else {
      alert("Por favor, sube un archivo XML válido.");
    }
  };

  return (
    <div className="padd2">
      <section className="marbot">
        <h1>Registrar Nueva Venta</h1>
        <p className="cGray">
          Ingresa los datos a registrar o arrastra un XML al área indicada
        </p>
      </section>

      <section>
        <form onSubmit={onSubmitForm} >
          <section className="flexbox gapp2">
            <div className="flexbox flex2 gapp4">
              <div className="flexcolumn gapp4">
                <section>
                  <p>Cliente</p>
                  <input
                    className="inputbox"
                    type="text"
                    name="cliente"
                    value={cliente}
                    onChange={(e)=> setCliente(e.target.value)}
                    placeholder="Cliente"
                  />
                </section>
                <section>
                  <p>RUC</p>
                  <input
                    className="inputbox"
                    type="text"
                    name="ruc"
                    value={ruc}
                    onChange={(e)=> setRuc(e.target.value)}
                    placeholder="RUC: 20123456789"
                  />
                </section>
              </div>

              <div className="flexcolumn gapp4">
                <section>
                  <p>Fecha Emisión</p>
                  <input
                    className="inputboxitm"
                    type="date"
                    name="fechaEmision"
                    value={emision}
                    onChange={(e)=> setEmision(e.target.value)}
                  />
                </section>
                <section>
                  <p>Fecha Vencimiento</p>
                  <input
                    className="inputboxitm"
                    type="date"
                    name="fechaVencimiento"
                    value={vencimiento}
                    onChange={(e)=> setVencimiento(e.target.value)}
                  />
                </section>
              </div>
            </div>

            <div className="flexcolumn flex1 gapp2">
              <section>
                <p>Empresas</p>
                <select
                  className="inputboxitm"
                  name="empresa"
                  value={empresa}
                  onChange={(e)=> setEmpresa(e.target.value)}
                >
                  <option value="TORQUE-G46">TORQUE-G46</option>
                  <option value="IRONTOOLS">IRONTOOLS</option>
                </select>
              </section>
              <section>
                <p>Número de Serie</p>
                <input
                  className="inputbox"
                  type="text"
                  name="numeroSerie"
                  
                  value={nfactura}
                  onChange={(e)=> setnFactura(e.target.value.toUpperCase())}
                  placeholder="Número de Serie"
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
                name="importeTotal"
                value={total}
                onChange={(e)=> setTotal(e.target.value)}
                placeholder="Importe total"
              />
            </section>
            <section>
              <p>Moneda</p>
              <select
                className="inputbox"
                name="moneda"
                value={moneda}
                onChange={(e)=> setMoneda(e.target.value)}
              >
                <option value="Soles">Soles</option>
                <option value="Dolares">Dólares</option>
              </select>
            </section>
          </div>

          <br />

          <section className="flexbox gapp8">
            <button type="submit" className="btnSuccess">
              Guardar
            </button>
            <button type="reset" className="btnWarning" onClick={(e) => e.preventDefault()}> 
              Limpiar
            </button>
            <Link to="/ventas" className="btnDanger">
              Cancelar
            </Link>
          </section>
        </form>

        <br />

        <section>
          <p>XML</p>
          <div>
            <div
              className="flexbox padd1 xmldropbox"
              onDrop={handleFileDrop}
              onDragOver={(e) => e.preventDefault()}
            >
              <p>Arrastra el archivo XML</p>
            </div>
          </div>
        </section>
      </section>
    </div>
  );
};

export default VentasCrear;
