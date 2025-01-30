import React, { Component } from 'react'
import axios from 'axios'

export default class NoteList extends Component {

  state = {
    notes: [],

  }

  getNotes = async () => {
    // Aquí va el código para obtener las notas
    const res = await axios.get('http://localhost:7000/api/notes')
    this.setState({notes: res.data})
  }

  async componentDidMount() {
    this.getNotes();
  }

  render() {
    return (
      <div>
        <p>Notes List</p>

      
          <div className="col-md-8">
            <div className="list-group">
              {
                this.state.notes.map(note => (
                  <div className="list-group-item list-group-item-action" key={note._id}>
                    <div className="d-flex w-100 justify-content-between">
                      <h5 className="mb-1">{note.title}</h5>
                      <small>{note.author}</small>
                    </div>
                    <p>{note._id}</p>
                    <p className="mb-1">{note.content}</p>
                    <small>{note.date}</small>
                  </div>
                ))
              }
            </div>
          </div>

        

      </div>
    )
  }
}

