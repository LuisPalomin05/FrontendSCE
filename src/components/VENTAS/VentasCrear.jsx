import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { procesarXMLFactura } from "../../utils/lectorXMLFactura";

const localhost = "https://backendapi-6thn.onrender.com/api/ventas/";

const VentasCrear = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [editing, setEditing] = useState(false);

  const [rucEmisor, setRucEmisor] = useState("2060139801");
  const [razonEmisor, setRazonEmisor] = useState("TORQUE-G46");
  const [rucReceptor, setRucReceptor] = useState("");
  const [razonReceptor, setRazonReceptor] = useState("");
  const [formaPago, setFormaPago] = useState("");
  const [fechaVencimiento, setFechaVencimiento] = useState("");
  const [fechaEmision, setFechaEmision] = useState("");
  const [tipoMoneda, setTipoMoneda] = useState("");
  const [numeroFactura, setNumeroFactura] = useState("");
  const [importeTotal, setImporteTotal] = useState("");
  const [guiaRemision, setGuiaRemision] = useState("");
  const [ordenCompra, setOrdenCompra] = useState("");

  useEffect(() => {
    async function fetchData() {
      if (id) {
        try {
          const res = await axios.get(localhost + id);

          setRucEmisor(res.data.rucEmisor);
          setRazonEmisor(res.data.razonEmisor);
          setRucReceptor(res.data.rucReceptor);
          setRazonReceptor(res.data.razonReceptor);
          setFormaPago(res.data.formaPago);
          setFechaVencimiento(res.data.fechaVencimiento);
          setFechaEmision(res.data.fechaEmision);
          setTipoMoneda(res.data.tipoMoneda);
          setNumeroFactura(res.data.numeroFactura);
          setImporteTotal(res.data.importeTotal);
          setGuiaRemision(res.data.guiaRemision);
          setOrdenCompra(res.data.ordenCompra);

          setEditing(true);
        } catch (error) {
          if (error.response && error.response.status === 404) {
            // Redirige a /error si es un 404
            navigate("/error/");
          } else {
            // Redirige a ventas u otro error general
            navigate("/ventas");
          }
        }
      }
    }
    fetchData();
  }, [id, navigate]);

  const onSubmitForm = async (e) => {
    e.preventDefault();
    const newVenta = {
      rucReceptor,
      razonReceptor,
      rucEmisor,
      razonEmisor,
      fechaEmision,
      fechaVencimiento,
      formaPago,
      tipoMoneda,
      numeroFactura,
      importeTotal,
      guiaRemision,
      ordenCompra
    };
    if (editing) {
      await axios.put(localhost + id, newVenta);
    } else {
      await axios.post(localhost, newVenta);
    }

    navigate("/ventas");
  };

  const handleDrop = async (e) => {
    e.preventDefault();
    const files = Array.from(e.dataTransfer.files);
    const resultados = [];

    for (const file of files) {
      const text = await file.text();
      const data = procesarXMLFactura(text);
      resultados.push(data);
    }

    // setFacturas(resultados[0]);
    setFormaPago(resultados[0].formaPago);
    setFechaVencimiento(resultados[0].fechaVencimiento);
    setFechaEmision(resultados[0].fechaEmision);
    setRucEmisor(resultados[0].rucEmisor);
    setRazonEmisor(resultados[0].razonEmisor);
    setRucReceptor(resultados[0].rucReceptor);
    setRazonReceptor(resultados[0].razonReceptor);
    setTipoMoneda(resultados[0].tipoMoneda);
    setNumeroFactura(resultados[0].numeroFactura);
    setImporteTotal(resultados[0].importeTotal);
    setGuiaRemision(resultados[0].guiaRemision);
    setOrdenCompra(resultados[0].ordenCompra);
  };

  async function deleteVenta() {
    await axios.delete(localhost + id);
    navigate("/ventas");
  }

  return (
    <div className="padd2">
      <section className="marbot">
        {/* <h1>Registrar Nueva Venta</h1> */}
        <h1>{editing ? "Editar Venta" : "Registrar Nueva Venta"}</h1>

        <p className="cGray">
          Ingresa los datos a registrar o arrastra un XML al área indicada
        </p>
      </section>

      <section>
        <form onSubmit={onSubmitForm}>
          <section className="flexbox gapp2">
            <div className="flexbox flex2 gapp4">
              <div className="flexcolumn gapp4">
                <section>
                  <p>Cliente</p>
                  <input
                    className="inputbox"
                    type="text"
                    name="cliente"
                    value={razonReceptor}
                    onChange={(e) => setRazonReceptor(e.target.value)}
                    placeholder="Cliente"
                  />
                </section>
                <section>
                  <p>RUC</p>
                  <input
                    className="inputbox"
                    type="text"
                    name="ruc"
                    maxLength={11}
                    minLength={11}
                    value={rucReceptor}
                    onChange={(e) => setRucReceptor(e.target.value)}
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
                    value={fechaEmision}
                    onChange={(e) => setFechaEmision(e.target.value)}
                  />
                </section>
                <section>
                  <p>Fecha Vencimiento</p>
                  <input
                    className="inputboxitm"
                    type="date"
                    name="fechaVencimiento"
                    value={fechaVencimiento}
                    onChange={(e) => setFechaVencimiento(e.target.value)}
                  />
                </section>
              </div>
            </div>

            <div className="flexcolumn flex1 gapp2">
              <section>
                <p>Empresas</p>
                <div className="flexbox gapp2">
                <select
                  className="inputboxitm"
                  name="empresa"
                  value={razonEmisor}
                  onChange={(e) => {setRazonEmisor(e.target.value)
                    setRucEmisor(e.target.value === "TORQUE-G46" ? "2060139801" : "20548129576")
                  }
                  }
                >
                  <option value="TORQUE-G46">TORQUE-G46</option>
                  <option value="IRONTOOLS">IRONTOOLS</option>
                </select>
                                  
                <input type="text" readOnly className="cGray" maxLength={11} value={rucEmisor}/>
                </div>
              </section>
              <section>
                <p>Número de Serie</p>
                <input
                  className="inputbox"
                  type="text"
                  name="numeroSerie"
                  value={numeroFactura}
                  onChange={(e) => setNumeroFactura(e.target.value.toUpperCase())}
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
                value={importeTotal}
                onChange={(e) => setImporteTotal(e.target.value)}
                placeholder="Importe total"
              />
            </section>
            <section>
              <p>Moneda</p>
              <select
                className="inputbox"
                name="moneda"
                value={tipoMoneda}
                onChange={(e) => setTipoMoneda(e.target.value)}
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
            {/* <button type="reset" className="btnWarning" onClick={(e) => e.preventDefault()}> Limpiar</button> */}
            {editing && (
              <button type="button" className="btnDanger" onClick={deleteVenta}>
                Eliminar
              </button>
            )}
            <Link to="/ventas" className="btnWarning">
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
              onDrop={handleDrop}
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
