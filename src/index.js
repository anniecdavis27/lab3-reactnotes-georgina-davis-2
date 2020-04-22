/* eslint-disable radix */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable array-callback-return */
/* eslint-disable react/jsx-filename-extension */

import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Map as iMap } from 'immutable';
import Startbox from './components/startbox';
import './style.scss';
import Note from './components/notes';

class App extends Component {
  constructor(props) {
    super(props);
    this.note = {
      id: 0,
      title: 'hi',
      text: '',
      x: 0,
      y: 0,
      zIndex: 0,
    };
    this.counter = parseInt('0');
    this.title = '';
    this.currentid = 1;
    this.state = {
      notes: iMap({
        0: {
          id: 0,
          title: 'hi',
          text: 'what',
          x: 0,
          y: 0,
          zIndex: 0,
        },
      }),
    };
  }

  inputChange = (text) => {
    this.title = text;
    console.log(this.title);
  }

  // eslint-disable-next-line react/destructuring-assignment
  addNote = () => {
    this.setState((prevState) => ({
      notes: prevState.notes.set(this.counter,
        {
          title: this.title,
          text: '',
          x: 0,
          y: 0,
          zIndex: 0,
        }),
    }));
    console.log(this.counter);
    this.counter += 1;
    console.log(this.counter);
  };

  updateCurrent = (text) => {
    this.currentid = text;
  };

  deleteNote = () => {
    this.setState((prevState) => ({
      notes: prevState.notes.delete(this.currentid),
    }));
    console.log(this.state.notes.get('0'));
    console.log(this.state.notes.get('1'));
  };

  render() {
    return (
      <div id="page">
        <div id="startbox">
          <div id="title">DigiNotes</div>
          <Startbox inputChange={this.inputChange} addNote={this.addNote} />
        </div>
        <div id="notes">
          {this.state.notes.entrySeq().map(([id, note]) => { return <Note id={id} note={note} delete={this.deleteNote} updateCurrent={this.updateCurrent} />; })}
        </div>
      </div>
    );
  }
}
ReactDOM.render(<App />, document.getElementById('main'));
