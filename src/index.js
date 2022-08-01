import React from 'react';
import {useState} from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import AddNoteButton from './AddNoteButton';
import Note from './Note.js'


const root = ReactDOM.createRoot(document.getElementById('root'));

const data = [{ monsterName: 'Demogorgon'}, { monsterName: 'Mindflayer' }];

// const handleClick() {
//   setData(current => [...current, 'Carl']);
// }

root.render(
  <React.StrictMode>
    <div id="app">
      <AddNoteButton />
      {data.map(note => <Note key={note.monsterName + "=" + Math.random() * 10000} monsterName={note.monsterName}/>)}
    </div>
  </React.StrictMode>
);
