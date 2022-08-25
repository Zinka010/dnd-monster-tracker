import React from 'react';
import {useEffect, useState} from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import AddNoteButton from './AddNoteButton';
import Note from './Note.js'

function App() {

  const [monsters, setMonsters] = useState([{ id: 1, monsterName: 'Demogorgon', maxHealth: 300, curHealth: 175, notes: "Stranger Things!"}]);

  // useEffect(() => {
  //   console.log("Stored!");
  //   localStorage.setItem('monsters', JSON.stringify(monsters));
  // }, [monsters]);

  // useEffect(() => {
  //   const monsters = JSON.parse(localStorage.getItem('monsters'));
  //   console.log("Retrieved!");
  //   if (monsters) {
  //     setMonsters(monsters);
  //   }
  // }, []);

  const addMonster = () => {
    setMonsters(current => [{id: Math.floor(Math.random() * 1000000), monsterName: 'Justin'}, ...current]);
  }

  const deleteMonster = id => {
    console.log(id);
    setMonsters(monsters.filter(curMonster => curMonster.id !== id));
  }

  return (
    <React.StrictMode>
      <div id="app">
        <AddNoteButton handleClick={addMonster}/>
        {monsters.map(monster => <Note key={monster.id} monsterInfo={monster} handleDelete={deleteMonster}/>)}
      </div>
    </React.StrictMode>
  )
}


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
