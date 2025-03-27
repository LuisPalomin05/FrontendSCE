
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const httpURL = "https://backendapi-6thn.onrender.com/";

export default function CreateNote() {
  const { id } = useParams(); 
  const navigate = useNavigate(); 

  const [users, setUsers] = useState([]);
  const [userSelected, setUserSelected] = useState("");
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [date, setDate] = useState(new Date());
  const [editing, setEditing] = useState(false);

  useEffect(() => {
    async function fetchData() {
      const res = await axios.get(httpURL+"api/users");
      setUsers(res.data.map((user) => user.username));
      setUserSelected(res.data[0]?.username || "");

      if (id) {
        console.log("exec");
        const noteRes = await axios.get(httpURL+"api/notes/" + id);
        setTitle(noteRes.data.title);
        setContent(noteRes.data.content);
        setDate(new Date(noteRes.data.date));
        setUserSelected(noteRes.data.author);
        setEditing(true);
      }
    }
    fetchData();
  }, [id]);

  const onSubmitForm = async (e) => {
    e.preventDefault();
    const newNote = { title, content, date, author: userSelected };
    if (editing) {
      await axios.put(httpURL+"api/notes/" + id, newNote);
    } else {
      await axios.post(httpURL+"api/notes", newNote);
    }
    navigate("/"); //  Redirige correctamente
  };

  return (
    <div>
      <h4>{editing ? "Editar Nota" : "Crear Nota"}</h4>
      <form onSubmit={onSubmitForm}>
        <select value={userSelected} onChange={(e) => setUserSelected(e.target.value)}>
          {users.map((user) => (
            <option key={user} value={user}>{user}</option>
          ))}
        </select>
        <input type="text" placeholder="Título" value={title} onChange={(e) => setTitle(e.target.value)} />
        <input type="text" placeholder="Contenido" value={content} onChange={(e) => setContent(e.target.value)} />
        <DatePicker selected={date} onChange={setDate} />
        <button type="submit">{editing ? "Actualizar" : "Crear"}</button>
      </form>
    </div>
  );
}
