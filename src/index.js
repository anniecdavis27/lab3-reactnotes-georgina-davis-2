import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Map } from 'immutable';
import './style.scss';
import Startbox from './components/startbox';


class App extends Component {
  constructor(props) {
    super(props);
    this.currnote = 0;
    this.title = '';
    this.note = {
      title: '',
      text: '',
      x: 0,
      y: 0,
      zIndex: 0,
    };
    this.state = {
      notes: Map(),
    };
  }

    onAddNote = (text) => {
      this.note.title = text;
      this.setState({
        // eslint-disable-next-line no-undef
        notes: prevState.notes.set(currnote, text),
      });
      this.currnote += 1;
    };

    render() {
      return (
      // eslint-disable-next-line react/jsx-filename-extension
        <div id="page">
          <div id="startbox" addTitle={this.addNote}>
            <div id="title">DigiNotes</div>
            <Startbox />
          </div>
        </div>
      );
    }
}
ReactDOM.render(<App />, document.getElementById('main'));
