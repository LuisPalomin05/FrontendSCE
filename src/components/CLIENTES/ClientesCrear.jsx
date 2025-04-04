import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";

const localhost = "https://backendapi-6thn.onrender.com/api/clientes/";

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

    async function fetchData() {
      if (id) {
        const res = await axios.get(localhost + id
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
      await axios.put(localhost + id, newCliente);
    } else {
      await axios.post(localhost , newCliente);
    }
    navigate("/clientes");
  };

  async function deleteitem() {
    await axios.delete(localhost + id);
    navigate("/clientes");
  }
  return (
    <div className="padd3">
      <h1>{editing ? "Editar Cliente" : "Crear Cliente"}</h1>
      <div>
        <form className="flexcolumn padd3  gapp4" onSubmit={onSubmitForm}>
          <section className="flexbox gapp4">
            <div>
              <p>RUC :</p>
              <input
                type="text"
                name="ruc"
                className="inputbox"
                placeholder="RUC: 20123456789"
                value={ruc}
                maxLength={12}
                minLength={11}
                id="ruc"
                required
                onChange={(e) => setRuc(e.target.value)}
              />
            </div>
            <div>
              <p>NOMBRE CLIENTE :</p>
              <input
                type="text"
                className="inputbox"
                placeholder="Cliente"
                name="cliente"
                value={cliente}
                id="cliente"
                onChange={(e) => setCliente(e.target.value)}
              />
            </div>
          </section>

          <div>
            <p>DIRECCION :</p>
            <input
              type="text"
              name="direccion"
              className="inputboxitm w33"
              placeholder="Direccion"
              value={direccion}
              id="direccion"
              onChange={(e) => setDireccion(e.target.value)}
            />
          </div>

          <div>
            <p>EMAIL :</p>
            <input
              type="text"
              className="inputboxitm w33"
              placeholder="Email"
              name="email"
              value={email}
              id="email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <section className="flexbox gapp4">
            <div>
              <p>TELEFONO :</p>
              <input
                type="text"
                className="inputboxitm"
                placeholder="Telefono"
                name="telefono"
                value={telefono}
                id="telefono"
                onChange={(e) => setTelefono(e.target.value)}
              />
            </div>

            <div>
              <p>ATENCION : </p>
              <input
                type="text"
                name="atencion"
                className="inputboxitm"
                placeholder="nombre de contacto"
                value={atencion}
                id="atencion"
                onChange={(e) => setAtencion(e.target.value)}
              />
            </div>
          </section>
          <div>
            <p>EMPRESA :</p>
            <select
              name="empresa"
              id="empresa"
              className="inputboxitm w33"
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
              <Link className="btnSuccess martop" to={"/clientes"}>
                Cancelar
              </Link>
            )}{" "}
          </div>
        </form>
      </div>
    </div>
  );
}
