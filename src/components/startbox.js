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
    console.log(event.target.value);
    this.setState({ starttitle: event.target.value });
    console.log(this.state);
  }

  render() {
    return (
      // eslint-disable-next-line react/jsx-filename-extension
      <div>
        <input onChange={this.onInputChange} value={this.state} />
        <button id="create" onClick={() => this.props.addTitle(this.state)}>Create Note</button>
      </div>
    );
  }
}
export default Startbox;
