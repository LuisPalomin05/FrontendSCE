
import React, { Component } from 'react'
import axios from 'axios'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'


export default class CreateNote extends Component {
    state = {
        users: [],
        userSelected: '',
        title: '',
        content: '',
        date: new Date(),
    }

    onSubmit = async (e) => {
        e.preventDefault();
        const newNote = {
            title: this.state.title,
            content: this.state.content,
            date: this.state.date,
            author: this.state.userSelected
        }
        const res = await axios.post('http://localhost:7000/api/notes', newNote)
        console.log(res)


    }

    async componentDidMount() {
        const res = await axios.get('http://localhost:7000/api/users')
        this.setState({ users: res.data.map(user => user.username),
            userSelected: res.data[0].username
         })
    }

    onInputChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    onChangeDate = date => {
        this.setState({ date })
    }

    render() {
        return (
            <div className='col-md-6 offset-md-3' >
                <div className="card card-body">
                    <h4>Crea una Nota</h4>
                    <form onSubmit={this.onSubmit}>

                        {/* Seleccionar Usuario */}

                        <div className="form-group">

                            <select className='form-control' name='userSelected' onChange={this.onInputChange}>

                                {
                                    this.state.users.map(user =>
                                        <option key={user} value={user.username}>
                                            {user}
                                        </option>
                                    )
                                }
                            </select>
                        </div>
                        <br />
                        {/* Titulo de la Nota */}
                        <div className="form-group">
                            <input type="text" className='form-control' placeholder='Titulo' name='title' onChange={this.onInputChange} required />
                        </div>
                        <br />
                        {/* Contenido de la Nota */}
                        <div className="form-group">
                            <textarea name="content" className='form-control' placeholder='contenido' onChange={this.onInputChange} required>
                            </textarea>                        </div>

                        <br />

                        {/* Fecha de la Nota */}
                        <div className="form-group d-flex justify-content-evenly align-items-center">
                            Fecha: 
                            <DatePicker className='form-control' selected={this.state.date} onChange={this.onChangeDate}/>
                        </div>
                                <br />
                        <button type="submit" className='btn btn-primary' onSubmit={this.onSubmit}>
                            Guardar Nota
                        </button>
                    </form>
                </div>

            </div>
        )
    }
}

