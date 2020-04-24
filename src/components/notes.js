/* eslint-disable no-return-assign */
/* eslint-disable react/no-danger */
/* eslint-disable no-sequences */
/* eslint-disable react/button-has-type */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/self-closing-comp */
/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/no-unused-state */
import React, { Component } from 'react';
import Draggable from 'react-draggable';
import marked from 'marked';


class Note extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: this.props.id,
      title: this.props.note.title,
      text: this.props.note.text,
      x: this.props.note.x,
      y: this.props.note.y,
      zIndex: this.props.note.zIndex,
      isEditing: false,
    };
  }

  handleClickDelete = (event) => {
    this.props.delete(this.state.id);
  };

  update = (event) => {
    this.setState({ text: event.target.value });
    this.props.update(this.state.id, { text: event.target.value });
  };

  updateState = () => {
    if (this.state.isEditing) {
      this.setState({ isEditing: false });
    } else {
      this.setState({ isEditing: true });
    }
  }

  renderText = () => {
    if (this.state.isEditing) {
      return <input value={this.state.text} onChange={this.update} />;
    } else {
      return <div className="noteBody" dangerouslySetInnerHTML={{ __html: marked(this.props.note.text || '') }} />;
    }
  };

  renderButtons = () => {
    if (this.state.isEditing === false) {
      return <button className="edit" id={this.state.id} onClick={this.updateState}>Edit</button>;
    } else {
      return <button className="finish" id={this.state.id} onClick={this.updateState}>Finish</button>;
    }
  }

  render() {
    return (
        // eslint-disable-next-line react/jsx-indent
        <Draggable
          handle="#move"
          grid={[25, 25]}
          defaultPosition={{ x: 20, y: 20 }}
          position={null}
          onStart={this.handleStartDrag}
          onDrag={this.handleDrag}
          onStop={this.handleStopDrag}
        >
          <div id="note">
            <div id="notehead">
              <h1>{this.state.title}</h1>
              <div>
                {this.renderButtons()}
              </div>
              <button className="delete" id={this.state.id} onClick={this.handleClickDelete}>Delete</button>
              <button id="move">Move</button>
            </div>
            <div id="notebody">
              {this.renderText()}
            </div>
          </div>
        </Draggable>
    );
  }
}

export default Note;
