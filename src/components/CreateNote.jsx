// import axios from "axios";
// import React, { Component } from "react";
// import DatePicker from "react-datepicker";
// import "react-datepicker/dist/react-datepicker.css";

// export default class CreateNote extends Component {

//   state = {
//     users: [],
//     userSelected: "",
//     title: "",
//     content: "",
//     date: new Date(),
//     editing: false,
//     _id:''
//   };

// //nota para le avance, hay un problema con el acceso a paremetros ya que la version de rect-router-dom es diferente a la que se usa en el proyecto
// //para solucionar este problema se debe de instalar la version 6 de react-router-dom
// //ademas de actualizar el componente de clase a uno funcional

//   async componentDidMount() {
//     const res = await axios.get("http://localhost:5000/api/users");
//     this.setState({
//       users: res.data.map((user) => user.username),
//       userSelected: res.data[0].username,
//     });
//     if (this.props.match.params.id) {
//       console.log('exec')
//       await axios.get(
//         "http://localhost:5000/api/notes/" + this.props.match.params.id
//       );
//       this.setState({
//         editing: true,
//         _id: this.props.match.params.id,
//       });
//     }
//   }

//   onSubmitForm = async (events) => {
//     events.preventDefault();
//     const newNote = {
//       title: this.state.title,
//       content: this.state.content,
//       date: this.state.date,
//       author: this.state.userSelected,
//     };
//     if (this.state.editing) {
//       await axios.put(
//         "http://localhost:5000/api/notes/" + this.state._id,
//         newNote
//       );
//     } else {
//       await axios.post("http://localhost:5000/api/notes", newNote);
//     }    

//     window.location.href = "/";
//   };

//   onChangeInput = (events) => {
//     this.setState({ [events.target.name]: events.target.value });
//     console.log(events.target.name);
//   };

//   onchangeuser = (events) => {
//     this.setState({ userSelected: events.target.value });
//   };

//   onChangeDate = (date) => {
//     this.setState({ date });
//   };

//   render() {
//     return (
//       <div>
//         CreateNote
//         <div>
//           <div className="card bordergray padd2 martop">
//             <h4>crea una nota</h4>
//             <form onSubmit={this.onSubmitForm}>
//               {/* SELECT USER */}
//               <div className="martop">
//                 <select name="user" id="user" onChange={this.onchangeuser}>
//                   {this.state.users.map((user) => (
//                     <option key={user} value={user}>
//                       {user}
//                     </option>
//                   ))}
//                 </select>
//               </div>
//               <button type="submit">crear</button>
//             </form>
//           </div>
//         </div>
//         <div>
//           <input
//             type="text"
//             name="title"
//             id=""
//             placeholder="titulo"
//             onChange={this.onChangeInput}
//           />
//         </div>
//         <div>
//           <input
//             type="text"
//             name="content"
//             id=""
//             placeholder="titulo"
//             onChange={this.onChangeInput}
//             className="martop bordergray padd2"
//           />
//         </div>
//         <div>
//           <DatePicker
//             className="bordergray martop"
//             selected={this.state.date}
//             onChange={this.onChangeDate}
//           />
//         </div>
//       </div>
//     );
//   }
// }


import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const httpURL = "https://backendapi-6thn.onrender.com/";
const localHost ="http://localhost:5000/";

export default function CreateNote() {
  const { id } = useParams(); // Obtiene el parámetro de la URL
  const navigate = useNavigate(); // Para redirigir

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
