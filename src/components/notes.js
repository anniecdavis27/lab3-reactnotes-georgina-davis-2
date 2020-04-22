/* eslint-disable no-sequences */
/* eslint-disable react/button-has-type */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/self-closing-comp */
/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/no-unused-state */
import React, { Component } from 'react';


class Note extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: this.props.note.id,
      title: this.props.note.title,
      text: this.props.note.text,
      x: this.props.note.x,
      y: this.props.note.y,
      zIndex: this.props.note.zIndex,
    };
  }

  handleClickDelete = (event) => {
    console.log(this.state.id);
    this.props.updateCurrent(this.state.id);
    this.props.delete();
  };

  render() {
    return (
        // eslint-disable-next-line react/jsx-indent
        <div id="note">
          <div id="notehead">
            <h1>{this.state.title}</h1>
            <button id="edit">Edit</button>
            <button className="delete" id={this.id} onClick={this.handleClickDelete}>Delete</button>
            <button id="move">Move</button>
          </div>
          <div id="notebody">
            <div id="text">{this.state.text}</div>
          </div>
        </div>
    );
  }
}

export default Note;
