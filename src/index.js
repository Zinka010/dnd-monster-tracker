import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import AddNoteButton from './AddNoteButton';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <div id="app">
      <AddNoteButton />
    </div>
  </React.StrictMode>
);
