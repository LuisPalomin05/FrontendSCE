import React,{useEffect,useState, useParams} from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from "axios";

// const localhost = "http://localhost:5000/api/compras";
const localhost = "https://backendapi-6thn.onrender.com/api/compras";



const ComprasCrear = () => {

  const { id } = useParams();
  const navigate = useNavigate();


  const [ruc, setRuc] = useState("");
  const [cliente, setCliente] = useState("");
  const [emision, setEmision] = useState("");
  // const [vencimiento, setVencimiento] = useState("");
  const [empresa, setEmpresa] = useState("TORQUE-G46");
  const [nfactura, setnFactura] = useState("");
  const [total, setTotal] = useState("");
  const [moneda, setMoneda] = useState("Soles");

  const [editing, setEditing] = useState(false);

  const onSubmitForm = async (e) => {
    e.preventDefault();
    const newCompra = {
      ruc,
      cliente,
      emision,
      empresa,
      nfactura,
      total,
      moneda,
    };
    if(editing) {
      await axios.put(localhost + id, newCompra);
    }else{
      axios.post(localhost, newCompra)
    }
    navigate("/compras")
  }


  return (
    <div className="padd2">
      <section className="marbot">
      <h1>{editing ? "Editar Compra" : "Registrar Nueva Compra"}</h1>
      <p className="cGray">
          Ingresa los datos a registrar o arrastra un XML al área indicada.
        </p>
      </section>

      <form onSubmit={onSubmitForm}>
        <section className="flexbox gapp2">
          <div className="flexbox flex2 gapp4">
            <div className="flexcolumn gapp4">
              <section className="flexcolumn">
                <label htmlFor="cliente">Cliente</label>
                <input
                  className="inputbox"
                  type="text"
                  id="cliente"
                  name="cliente"

                  onChange={(e) => setCliente(e.target.value)}
                  placeholder="Cliente"
                />
              </section>
              <section className="flexcolumn">
                <label htmlFor="ruc">RUC</label>
                <input
                  className="inputbox"
                  type="text"
                  id="ruc"
                  name="ruc"
                  onChange={(e) => setRuc(e.target.value)}
                  placeholder="RUC: 20123456789"
                />
              </section>
            </div>

            <div className="flexcolumn gapp4">
              <section className="flexcolumn">
                <label htmlFor="fecha-emision">Fecha Emisión</label>
                <input
                  className="inputboxitm"
                  type="date"
                  id="fecha-emision"

                  onChange={(e) => setEmision(e.target.value)}
                  name="fecha_emision"
                />
              </section>
              {/* <section className="flexcolumn">
                <label htmlFor="fecha-vencimiento">Fecha Vencimiento</label>
                <input
                  className="inputboxitm"
                  type="date"
                  id="fecha-vencimiento"
                  name="fecha_vencimiento"
                />
              </section> */}
            </div>
          </div>

          <div className="flexcolumn flex1 gapp2">
            <section className="flexcolumn">
              <label htmlFor="empresa">Empresas</label>
              <select className="inputboxitm" onChange={(e)=> setEmpresa(e.target.value)} id="empresa" name="empresa">
                <option>TORQUE-G46</option>
                <option>IRONTOOLS</option>
              </select>
            </section> 
            <section className="flexcolumn">
              <label htmlFor="numero-serie">Número de Serie</label>
              <input
                className="inputbox"
                type="text"
                id="numero-serie"
                name="numero_serie"
                onChange={(e) => setnFactura(e.target.value)}
                placeholder="Número de Serie"
              />
            </section>
          </div>
        </section>

        <div className="flexbox gapp4">
          <section className="flexcolumn">
            <label htmlFor="importe-total">Importe Total</label>
            <input
              className="inputbox"
              type="number"
              id="importe-total"
              name="importe_total"
              onChange={(e) => setTotal(e.target.value)}
              placeholder="Importe total"
            />
          </section>
          <section className="flexcolumn">
            <label htmlFor="moneda">Moneda</label>
            <select onChange={(e)=> setMoneda(e.target.value)} className="inputbox" id="moneda" name="moneda">
              <option>Soles</option>
              <option>Dólares</option>
            </select>
          </section>
        </div>

        <br />

        <section className="flexbox gapp8">
          <button type="submit" className="btnSuccess">Guardar</button>
          <button type="reset" className="btnWarning">Limpiar</button>
          <Link to={"/compras"} className="btnDanger">Cancelar</Link>
        </section>
      </form>

      <br />

      <section>
        <p>XML</p>
        <div className="flexbox padd1 xmldropbox">
          <p>Arrastra el archivo XML</p>
        </div>
      </section>
    </div>
  );
};

export default ComprasCrear;
