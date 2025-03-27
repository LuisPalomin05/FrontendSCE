import React, { Component } from "react";
import axios from "axios";
// import { format } from "timeago.js";
import { Link } from "react-router-dom";

const httpURL = "https://backendapi-6thn.onrender.com/";
export default class NoteList extends Component {
  state = {
    notes: [],
  };

  async componentDidMount() {
    this.getNotes();
  }

  getNotes = async () => {
    const res = await axios.get(httpURL+"api/notes");
    this.setState({ notes: res.data });
  };
  ondeletenote = async (id) => {
    await axios.delete(httpURL+"api/notes/" + id);
    this.getNotes();
  };

  render() {
    return (
      <div>
        Note List
        {this.state.notes.map((note) => (
          <div key={note._id} className="martop padd2 card bordergray">
            <h1>{note.title}</h1>
            <p>{note.content}</p>
            <p>{note.author}</p>
            <p>{note.date}</p>
            <div className="flexbox gapp4">
              <Link className="btnInfo" to={"/edit/"+note._id}>EDIT</Link>
              <button
                className="btnDanger"
                onClick={() => this.ondeletenote(note._id)}
              >
                DELETE
              </button>
            </div>
          </div>
        ))}
      </div>
    );
  }
}
