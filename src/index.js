import React from 'react';
// import {useState} from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import AddNoteButton from './AddNoteButton';
import Note from './Note.js'


const root = ReactDOM.createRoot(document.getElementById('root'));

const data = [{ monsterName: 'Demogorgon', maxHealth: 300, curHealth: 175, notes: "Stranger Things!"}, { monsterName: 'Mindflayer' }];

root.render(
  <React.StrictMode>
    <div id="app">
      <AddNoteButton />
      {data.map(note => <Note key={note.monsterName + "=" + Math.random() * 10000} monsterInfo={note}/>)}
    </div>
  </React.StrictMode>
);
