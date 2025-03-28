import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";

const localhost = "http://localhost:5000/";

export default function ClientesCrear() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [ruc, setRuc] = useState("");
  const [cliente, setCliente] = useState("");
  const [direccion, setDireccion] = useState("");
  const [telefono, setTelefono] = useState("");
  const [email, setEmail] = useState("");
  const [atencion, setAtencion] = useState("");
  const [empresa, setEmpresa] = useState("");

  const [editing, setEditing] = useState(false);

  useEffect(() => {
    console.log("ID recibido:", id);
    async function fetchData() {
      if (id) {
        const res = await axios.get(
          "https://backendapi-6thn.onrender.com/api/clientes/" + id
        );
        setRuc(res.data.ruc);
        setCliente(res.data.cliente);
        setDireccion(res.data.direccion);
        setTelefono(res.data.telefono);
        setEmail(res.data.email);
        setAtencion(res.data.atencion);
        setEmpresa(res.data.empresa);
        setEditing(true);
      }
    }
    fetchData();
  }, [id]);
  const onSubmitForm = async (e) => {
    e.preventDefault();
    const newCliente = {
      ruc,
      cliente,
      direccion,
      telefono,
      email,
      atencion,
      empresa,
    };
    // const res = await axios.post("https://backendapi-6thn.onrender.com/api/clientes", newCliente);
    if (editing) {
      await axios.put(localhost + "api/clientes/" + id, newCliente);
    } else {
      await axios.post(localhost + "api/clientes/", newCliente);
    }
    navigate("/clientes");
  };

  async function deleteitem() {
    await axios.delete(localhost + "api/clientes/" + id);
    navigate("/clientes");
  }
  return (
    <div>
      <h1>{editing ? "Editar Cliente" : "Crear Cliente"}</h1>
      <div className="padd3">
        <form onSubmit={onSubmitForm}>
          <div>
            <p>RUC :</p>
            <input
              type="text"
              name="ruc"
              value={ruc}
              maxLength={12}
              minLength={12}
              id="ruc"
              onChange={(e) => setRuc(e.target.value)}
            />
          </div>
          <div>
            <p>NOMBRE CLIENTE :</p>
            <input
              type="text"
              name="cliente"
              value={cliente}
              id="cliente"
              onChange={(e) => setCliente(e.target.value)}
            />
          </div>
          <div>
            <p>DIRECCION :</p>
            <input
              type="text"
              name="direccion"
              value={direccion}
              id="direccion"
              onChange={(e) => setDireccion(e.target.value)}
            />
          </div>
          <div>
            <p>TELEFONO :</p>
            <input
              type="text"
              name="telefono"
              value={telefono}
              id="telefono"
              onChange={(e) => setTelefono(e.target.value)}
            />
          </div>

          <div>
            <p>EMAIL :</p>
            <input
              type="text"
              name="email"
              value={email}
              id="email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div>
            <p>ATENCION : </p>
            <input
              type="text"
              name="atencion"
              value={atencion}
              id="atencion"
              onChange={(e) => setAtencion(e.target.value)}
            />
          </div>

          <div>
            <p>EMPRESA :</p>
            <select
              name="empresa"
              id="empresa"
              value={empresa}
              onChange={(e) => setEmpresa(e.target.value)}
            >
              <option value="Torque-G46">Torque-G46</option>
              <option value="Irontools">Irontools</option>
            </select>
          </div>
          <div className="flexbox gapp4">
            <button
              type="submit"
              className={editing ? "btnWarning martop" : "martop btnInfo"}
            >
              {editing ? "Actualizar" : "Crear"}
            </button>
            {editing ? (
              <button className="btnDanger martop" onClick={deleteitem}>
                Eliminar
              </button>
            ) : (
              <Link className="btnSuccess martop" to={'/clientes'}>Cancelar</Link>
            )}{" "}
          </div>
        </form>
      </div>
    </div>
  );
}
