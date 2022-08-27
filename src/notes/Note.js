import React, { useState } from 'react';
import './Note.css'

const Note = (props) => {

    const [changeAmount, setChangeAmount] = useState(0);

    const updateName = (event) => {
        props.handleUpdate(props.monster.id, event.target.value, props.monster.curHealth, props.monster.maxHealth, props.monster.notes);
    }

    const updateCurrentHealth = (event) => {
        props.handleUpdate(props.monster.id, props.monster.name, event.target.value, props.monster.maxHealth, props.monster.notes);
    }

    const updateMaxHealth = (event) => {
        props.handleUpdate(props.monster.id, props.monster.name, props.monster.curHealth, event.target.value, props.monster.notes);
    }

    const updateNotes = (event) => {
        props.handleUpdate(props.monster.id, props.monster.name, props.monster.curHealth, props.monster.maxHealth, event.target.value);
    }

    const updateChangeAmount = (event) => {
        
        if (event.target.value === "") {
            setChangeAmount(0);
        } else {
            setChangeAmount(parseInt(event.target.value));
        }
    }

    const curHealthInt = () => {
        if (props.monster.curHealth !== "") {
            return parseInt(props.monster.curHealth);
        }
        return 0;
    }

    const heal = () => {
        props.handleUpdateHealth(
            props.monster.id, 
            curHealthInt() + changeAmount);
    }

    const damage = () => {
        props.handleUpdateHealth(
            props.monster.id, 
            curHealthInt() - changeAmount);
    }

    return (
        <div className="note" >
            <div className="note-text-box-div">
                <textarea id="monsterName" className="note-monster-title" maxLength="12" defaultValue={props.monster.name} onChange={updateName}></textarea>
                <input type="number" id="monsterCurrentHealth" className="note-health" defaultValue={props.monster.curHealth} onChange={updateCurrentHealth}></input>
                <textarea className="note-slash" readOnly="" tabIndex="-1" defaultValue="/"></textarea>
                <input type="number" id="monsterMaxHealth" className="note-health" defaultValue={props.monster.maxHealth} onChange={updateMaxHealth}></input>
            </div>
            <div className="note-info-bar">
                <button className="note-heal" onClick={heal}>HEAL</button>
                <input type="number" className="note-health-points" maxLength="3" placeholder="amount" onChange={updateChangeAmount}></input>
                <button className="note-damage" onClick={damage}>DMG</button>
            </div>
            <textarea className="note-general-text" id="monsterGeneralNotes" defaultValue={props.monster.notes} onChange={updateNotes}></textarea>
            <div className="note-trash-wrapper">
                <button className="note-delete-icon" onClick={() => props.handleDelete(props.monster.id)}>
                    <img src="/trash.svg" alt="TRASH"></img>
                </button>
            </div>
        </div>
    );
    
}

export default Note;


