import React, { Component } from 'react'
import axios from 'axios'

export default class CreateUser extends Component {

    state = {
        users: [],
        username: ''
    }

    getUsers = async () => {
        const res = await axios.get('http://localhost:7000/api/users')
        this.setState({users: res.data})
    }

    async componentDidMount() {
        this.getUsers();

    }

    onChangeUsername = (e) => {
        this.setState({
            username: e.target.value
        })
    }

    onSubmit = async e => {
        e.preventDefault();
        await axios.post('http://localhost:7000/api/users', {
            username: this.state.username
        })
        this.setState({username: ''})
        this.getUsers();
    }

    deleteUser = async (id) => {
        await axios.delete('http://localhost:7000/api/users/'+id)
        console.log(id)
        this.getUsers();
    }




  render() {
    return (
      
      <div className='row'>
        <div className="col-md-4">
            <div className="card card-body">
                <h3>Crear Usuario</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <input type="text" 
                        className='form-control' placeholder='Username' 
                        value={this.state.username}
                        name='username' onChange={this.onChangeUsername}/>
                    </div>
                    <br />
                    <button type='submit' className='btn btn-primary'>Save</button>
                </form>
            </div>



        </div>
        <div className="col-md-8">
              <ul className='list-group'>
                {
                    this.state.users.map(user => (
                        <li className='list-group-item list-group-item-action' key={user._id} onDoubleClick={  () => this.deleteUser(user._id)}>
                            {user.username}
                        </li>
                    ))
                }
                
                </ul>  
        </div>
      </div>
    )
  }
}
