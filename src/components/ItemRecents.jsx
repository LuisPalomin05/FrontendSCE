import React, { Component } from "react";

export default class ItemRecents extends Component {
  render() {
    const { titulo, contenido } = this.props;

    return (
      <div>
        <div></div>
        <div>
          
          <p>{titulo}</p>
          <p>{contenido}</p>
        </div>
      </div>
    );
  }
}
