import React from 'react';
import useLocalStorage from './database/UseLocalStorage';
import './App.css';
import AddNoteButton from './notes/AddNoteButton';
import Note from './notes/Note.js'

function App() {
  const [monsters, setMonsters] = useLocalStorage ("monsters", [{ id: 1, name: 'Demogorgon', maxHealth: 300, curHealth: 175, notes: "Stranger Things!"}]);

    const addMonster = () => {
        setMonsters(current => 
            [
                ...current,
                {
                    id: Math.floor(Math.random() * 1000000), 
                }
            ]);
    }

    const deleteMonster = id => {
        setMonsters(monsters.filter(curMonster => curMonster.id !== id));
    }

    const updateMonster = (monsterId, monsterName, monsterCurHealth, monsterMaxHealth, monsterNotes) => {
        setMonsters(
            monsters.map(current => {
                if (current.id === monsterId) {
                    return {id: monsterId, name: monsterName, maxHealth: monsterMaxHealth, curHealth: monsterCurHealth, notes: monsterNotes};
                }
                return current;
            })
        );
    }

    const updateMonsterCurrentHealth = (monsterId, monsterCurHealth) => {
        setMonsters(
            monsters.map(current => {
                if (current.id === monsterId) {
                    return {id: Math.floor(Math.random() * 1000000), name: current.name, maxHealth: current.maxHealth, curHealth: monsterCurHealth, notes: current.notes};
                }
                return current;
            })
        );
    }

    return (
        <div id="app">
            {monsters.map(monster => 
                <Note key={monster.id} 
                      monster={monster} 
                      handleDelete={deleteMonster} 
                      handleUpdate={updateMonster}
                      handleUpdateHealth={updateMonsterCurrentHealth}
                    />)}
            <AddNoteButton handleClick={addMonster}/>
        </div>
    )
}

export default App;
