import React from 'react';
import './Note.css'

function Note(props) {

    return (
        <div className="note">
            <div className="note-text-box-div">
                <textarea id="monsterName" className="note-monster-title" maxLength="12" defaultValue={props.monsterInfo.monsterName}></textarea>
                <input type="number" id="monsterCurrentHealth" className="note-health" defaultValue={props.monsterInfo.curHealth}></input>
                <textarea className="note-slash" readOnly="" tabIndex="-1" defaultValue="/"></textarea>
                <input type="number" id="monsterMaxHealth" className="note-health" defaultValue={props.monsterInfo.maxHealth}></input>
            </div>
            <div className="note-info-bar">
                <button className="note-heal">HEAL</button>
                <input type="number" className="note-health-points" maxLength="3" placeholder="amount"></input>
                <button className="note-damage">DMG</button>
            </div>
            <textarea className="note-general-text" id="monsterGeneralNotes" defaultValue={props.monsterInfo.notes}></textarea>
            <div className="note-trash-wrapper">
                <button className="note-delete-icon" onClick={() => props.handleDelete(props.monsterInfo.id)}>
                    <img src="/trash.svg" alt="TRASH"></img>
                </button>
            </div>
        </div>
    );
    
}

export default Note;


