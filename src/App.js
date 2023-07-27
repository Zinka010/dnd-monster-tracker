import React from 'react';
import useLocalStorage from './database/UseLocalStorage';
import './App.css';
import AddMonsterCardButton from './monsterCard/AddMonsterCardButton'
import MonsterCard from './monsterCard/MonsterCard.js'
import SideMenu from './sidebar/SideMenu'

function App() {
  const [monsters, setMonsters] = useLocalStorage("monsters", [{ id: 1, name: 'Demogorgon', maxHealth: 300, curHealth: 175, ac: 22, initiative: 18, notes: "Stranger Things!"}]);

    const addMonster = () => {
        setMonsters(current => 
            [
                ...current,
                {
                    id: Math.floor(Math.random() * 1000000), 
                    curHealth: 0
                }
            ]);
    }

    const deleteMonster = id => {
        setMonsters(monsters.filter(curMonster => curMonster.id !== id));
    }

    const updateMonster = (monsterId, monsterName, 
                           monsterCurHealth, monsterMaxHealth, 
                           monsterAc, monsterInitiative, monsterNotes) => {
        setMonsters(
            monsters.map(current => {
                if (current.id === monsterId) {
                    return {id: monsterId, name: monsterName, 
                            maxHealth: monsterMaxHealth, 
                            curHealth: monsterCurHealth,
                            ac: monsterAc, 
                            initiative: monsterInitiative,
                            notes: monsterNotes};
                }
                return current;
            })
        );
    }

    const updateMonsterCurrentHealth = (monsterId, monsterCurHealth) => {
        setMonsters(
            monsters.map(current => {
                if (current.id === monsterId) {
                    return {id: Math.floor(Math.random() * 1000000), 
                            name: current.name, 
                            maxHealth: current.maxHealth, 
                            curHealth: monsterCurHealth, 
                            ac: current.ac,
                            initiative: current.initiative,
                            notes: current.notes};
                }
                return current;
            })
        );
    }

    const [noteBackgroundColor, setNoteBackgroundColor] = 
        useLocalStorage("backgroundColor", "#8ED1FC")

    return (
        <div className="container" >
            <SideMenu handleUpdateBackground={setNoteBackgroundColor}/>
            <div id="app">
                {monsters.map(monster => 
                    <MonsterCard key={monster.id} 
                        monster={monster} 
                        handleDelete={deleteMonster} 
                        handleUpdate={updateMonster}
                        handleUpdateHealth={updateMonsterCurrentHealth}
                        backgroundColor={noteBackgroundColor}
                        />)}
                <AddMonsterCardButton handleClick={addMonster}/>
            </div>     
        </div>
    )
}

export default App;
