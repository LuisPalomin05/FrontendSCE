import React,{useEffect,useState} from "react";
import { Link ,useParams} from "react-router-dom";
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

  useEffect(() => {
    async function fetchData() {
      if (id) {
        const res = await axios.get(localhost + "/" + id);
        setRuc(res.data.ruc);
        setCliente(res.data.cliente);
        setEmision(res.data.emision);
        // setVencimiento(res.data.vencimiento);
        setEmpresa(res.data.empresa);
        setnFactura(res.data.nfactura);
        setTotal(res.data.total);
        setMoneda(res.data.moneda);
        setEditing(true);
      }
    }
    fetchData();
  }, [id]);





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

  const deleteCompra = async () => {
    await axios.delete(localhost + id);
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
                <p htmlFor="cliente">Cliente</p>
                <input
                  className="inputbox"
                  type="text"
                  id="cliente"
                  name="cliente"
                  value={cliente}
                  onChange={(e) => setCliente(e.target.value)}
                  placeholder="Cliente"
                />
              </section>
              <section className="flexcolumn">
                <p htmlFor="ruc">RUC</p>
                <input
                  className="inputbox"
                  type="text"
                  id="ruc"
                  name="ruc"
                  maxLength={11}
                  minLength={11}
                  value={ruc}
                  onChange={(e) => setRuc(e.target.value)}
                  placeholder="RUC: 20123456789"
                />
              </section>
            </div>

            <div className="flexcolumn gapp4">
              <section className="flexcolumn">
                <p htmlFor="fecha-emision">Fecha Emisión</p>
                <input
                  className="inputboxitm"
                  type="date"
                  id="fecha-emision"
value={emision}
                  onChange={(e) => setEmision(e.target.value)}
                  name="fecha_emision"
                />
              </section>
              {/* <section className="flexcolumn">
                <p htmlFor="fecha-vencimiento">Fecha Vencimiento</p>
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
              <p htmlFor="empresa">Empresas</p>
              <select className="inputboxitm" value={empresa} onChange={(e)=> setEmpresa(e.target.value)} id="empresa" name="empresa">
                <option>TORQUE-G46</option>
                <option>IRONTOOLS</option>
              </select>
            </section> 
            <section className="flexcolumn">
              <p htmlFor="numero-serie">Número de Serie</p>
              <input
                className="inputbox"
                type="text"
                id="numero-serie"
                name="numero_serie"
                value={nfactura}
                onChange={(e) => setnFactura(e.target.value)}
                placeholder="Número de Serie"
              />
            </section>
          </div>
        </section>

        <div className="flexbox gapp4">
          <section className="flexcolumn">
            <p htmlFor="importe-total">Importe Total</p>
            <input
              className="inputbox"
              type="number"
              id="importe-total"
              name="importe_total"
              value={total}
              onChange={(e) => setTotal(e.target.value)}
              placeholder="Importe total"
            />
          </section>
          <section className="flexcolumn">
            <p htmlFor="moneda">Moneda</p>
            <select value={moneda} onChange={(e)=> setMoneda(e.target.value)} className="inputbox" id="moneda" name="moneda">
              <option>Soles</option>
              <option>Dólares</option>
            </select>
          </section>
        </div>

        <br />

        <section className="flexbox gapp8">
          <button type="submit" className="btnSuccess">Guardar</button>
          {editing && (
              <button
                type="button"
                className="btnDanger"
                onClick={deleteCompra}
              >
                Eliminar
              </button>
            )}
            <Link to={"/compras"} className="btnWarning">Cancelar</Link>
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
