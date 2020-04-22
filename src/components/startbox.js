/* eslint-disable react/no-unused-state */
/* eslint-disable object-curly-spacing */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/button-has-type */
import React, { Component } from 'react';

class Startbox extends Component {
  constructor(props) {
    super(props);
    this.state = { starttitle: '' };
  }

  onInputChange = (event) => {
    this.setState({starttitle: event.target.value });
    this.props.inputChange(event.target.value);
  }

  onButtonClick = (event) => {
    this.props.addNote();
  }


  render() {
    return (
      <div>
        <input onChange={this.onInputChange} />
        <button id="create" onClick={this.onButtonClick}>Create Note</button>
      </div>
    );
  }
}
export default Startbox;
