import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

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

  useEffect(() => {
    async function fetchData() {
      // const res = await axios.get("https://backendapi-6thn.onrender.com/api/clientes");
      // console.log(res.data);

      if (id) {
        console.log("exec");
        const noteRes = await axios.get("https://backendapi-6thn.onrender.com/api/clientes/" + id);
        setRuc(noteRes.data.ruc);
        setCliente(noteRes.data.cliente);
        setDireccion(noteRes.data.direccion);
        setTelefono(noteRes.data.telefono);
        setEmail(noteRes.data.email);
        setAtencion(noteRes.data.atencion);
        setEmpresa(noteRes.data.empresa);
        
      }
    }
    fetchData();
  }, [id]);


const onSubmitForm = async (e) => {
  e.preventDefault();
  const newCliente = { ruc, cliente, direccion, telefono, email, atencion, empresa };
  await axios.post("https://backendapi-6thn.onrender.com/api/clientes", newCliente);
  navigate("/clientes"); //  Redirige correctamente
};


  return (
    <div>
      <h1>Crear Clientes</h1>
      <div className="padd3">
        <form onSubmit={onSubmitForm}>
          <div>
            <p>RUC :</p>
            <input type="text" name="ruc" id="ruc" onChange={(e)=>setRuc(e.target.value)}/>
          </div>
          <div>
            <p>NOMBRE CLIENTE :</p>
            <input type="text" name="cliente" id="cliente" onChange={(e)=>setCliente(e.target.value)}/>
          </div>
          <div>
            <p>DIRECCION :</p>
            <input type="text" name="direccion" id="direccion" onChange={(e)=>setDireccion(e.target.value)}/>
          </div>
          <div>
            <p>TELEFONO :</p>
            <input type="text" name="telefono" id="telefono" onChange={(e)=>setTelefono(e.target.value)}/>
          </div>

          <div>
            <p>EMAIL :</p>
            <input type="text" name="email" id="email" onChange={(e)=>setEmail(e.target.value)}/>
          </div>

          <div>
            <p>ATENCION : </p>
            <input type="text" name="atencion" id="atencion" onChange={(e)=>setAtencion(e.target.value)}/>
          </div>

          <div>
            <p>EMPRESA :</p>
            <select name="empresa" id="empresa" onChange={(e)=>setEmpresa(e.target.value)}>
              <option value="Torque-G46">Torque-G46</option>
              <option value="Irontools">Irontools</option>
            </select>
          </div>

          <button type="submit">crear</button>

        </form>
      </div>
    </div>
  );
}
