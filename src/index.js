import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import AddNoteButton from './AddNoteButton';
import Note from './Note.js'

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <div id="app">
      <AddNoteButton />
      <Note monsterName="Mindflayer"/>
    </div>
  </React.StrictMode>
);
