import React, { Component } from 'react'
import axios from 'axios';

export default class CreateUser extends Component {
  async componentDidMount(){
    const res = await axios.get('http://localhost:4000/user');
  console.log(res);
  }
  
  
  render() {
    return <div>
      
      <p>users</p>

    </div>;
  }
}
