/* eslint-disable space-before-function-paren */
/* eslint-disable func-names */
/* eslint-disable import/prefer-default-export */
/* eslint-disable no-var */

import firebase from 'firebase';

var firebaseConfig = {
  apiKey: 'AIzaSyAsQJkV5YLuykYVt7tGc120hCYxMeCQsT4',
  authDomain: 'firenotes-a7694.firebaseapp.com',
  databaseURL: 'https://firenotes-a7694.firebaseio.com',
  projectId: 'firenotes-a7694',
  storageBucket: 'firenotes-a7694.appspot.com',
  messagingSenderId: '365475003870',
  appId: '1:365475003870:web:a01ebf33da965f1a3cf14f',
  measurementId: 'G-3VTFJYX2P3',
};
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);
const database = firebase.database();

function deleteNotes(id) {
  database.ref('notes').child(id).remove();
} // update similarly

function addNotes(newNote) {
  database.ref('notes').push(newNote)();
} // update similarly

export function fetchNotes(callback) {
  // eslint-disable-next-line prefer-arrow-callback
  firebase.database().ref('notes').on('value', function(snapshot) {
    const newNoteState = snapshot.val();
    callback(newNoteState);
  });
}
