import React, { Component } from "react";
import axios from "axios";

const httpURL = "https://backendapi-6thn.onrender.com/";
const localHost ="http://localhost:5000/";

export default class CreateUser extends Component {
  state = {
    users: [],
    username: "",
  };



  async componentDidMount() {
    this.getUsers();

    console.log(this.state.users);
  }


  getUsers = async  () =>{
    const res = await axios.get(httpURL+"api/users");

    this.setState({ users: res.data });
  }



  onChangeUsername = (events) => {
    this.setState({ username: events.target.value });

  };

  onSubmitForm = async events => {
    events.preventDefault();
     await axios.post(httpURL+"api/users", {
      username: this.state.username,
    });
    this.setState({ username: "" });
    this.getUsers();
    
  };

  onDeleteUser = async(id)=>{
    await axios.delete(httpURL+"api/users/"+id);
    this.getUsers();
  }

  render() {
    return (
      <div className="padd3">
        <p>users</p>

        <div className="martop">
          form users
          <form onSubmit={this.onSubmitForm}>
            <div className="martop">
              <input type="text" value={this.state.username} onChange={this.onChangeUsername} />
            </div>
            <button type="submit" className="btnInfo" > 
            GUARDAR
          </button>
          </form>
        </div>
        <div>
          <p>mis usuarios</p>
          <ul >
            {this.state.users.map((user) => (
              <li key={user._id} 
              onDoubleClick={()=>this.onDeleteUser(user._id)} className="padd3 bordergray martop">{user.username}</li>
            ))}
          </ul>

        </div>
      </div>
    );
  }
}
