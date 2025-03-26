import React, { Component } from "react";
import axios from "axios";

export default class CreateUser extends Component {
  componentDidMount() {
 axios
      .get("http://localhost:4000/api/users")
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    return <div>
      
      <p>users</p>

    </div>;
  }
}
