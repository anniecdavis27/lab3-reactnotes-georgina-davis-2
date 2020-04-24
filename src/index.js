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
    this.counter = parseInt('0');
    this.state = { notes: iMap() };
  }


  // eslint-disable-next-line react/destructuring-assignment
  addNote = (text_) => {
    this.setState((prevState) => ({
      notes: prevState.notes.set(this.counter,
        {
          title: text_,
          text: '',
          x: 0,
          y: 0,
          zIndex: 0,
        }),
    }));
    this.counter += 1;
  };

  deleteNote = (id) => {
    console.log(id);
    this.setState((prevState) => ({
      notes: prevState.notes.delete(id),
    }));
  }

  updateNote = (id, note) => {
    this.setState((prevState) => ({
      notes: prevState.notes.update(id, (n) => { return { ...n, ...note }; }),
    }));
  }

  render() {
    return (
      <div id="page">
        <div id="startbox">
          <div id="title">DigiNotes</div>
          <Startbox addNote={this.addNote} />
        </div>
        <div id="notes">
          {this.state.notes.entrySeq().map(([id, note]) => { return <Note key={id} id={id} note={note} delete={this.deleteNote} update={this.updateNote} />; })}
        </div>
      </div>
    );
  }
}
ReactDOM.render(<App />, document.getElementById('main'));
