import React, { Component } from "react";

export default class TableComponents extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedItems: new Set(), // Almacena los índices seleccionados
    };
  }

  // Maneja la selección de elementos
  handleCheckboxChange = (index) => {
    this.setState((prevState) => {
      const newSelected = new Set(prevState.selectedItems);
      if (newSelected.has(index)) {
        newSelected.delete(index);
      } else {
        newSelected.add(index);
      }
      return { selectedItems: newSelected };
    });
  };

  render() {
    const { arrayelements, arrayheaders, arraykeys } = this.props;
    const { selectedItems } = this.state;

    return (
      <div className="tableBox">
        <table>
          <thead>
            <tr>
              <th> <input type="checkbox" name="" id=""/> </th>
              <th>N°</th>

              {arrayheaders.map((header, index) => (
                <th key={index}>{header}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {arrayelements.map((element, index) => (
              <tr key={index}>
                <td>
                  <input
                    type="checkbox"
                    checked={selectedItems.has(index)}
                    onChange={() => this.handleCheckboxChange(index)}
                  />
                </td>
                <td>{index + 1}</td>

                {arraykeys.map((key, idx) => (
                  <td key={idx}>{element[key]}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}
