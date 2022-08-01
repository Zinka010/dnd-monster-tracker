import React from 'react';
import './Note.css'

class Note extends React.Component {

    render() {
        return (
            <div className="note">
                <div className="note-text-box-div">
                    <textarea id="monsterName" className="note-monster-title" maxLength="12" defaultValue={this.props.monsterName}></textarea>
                    <input type="number" id="monsterCurrentHealth" className="note-health"></input>
                    <textarea className="note-slash" readOnly="" tabIndex="-1" defaultValue="/"></textarea>
                    <input type="number" id="monsterMaxHealth" className="note-health"></input>
                </div>
                <div className="note-info-bar">
                    <button className="note-heal">HEAL</button>
                    <input type="number" className="note-health-points" maxLength="3" placeholder="amount"></input>
                    <button className="note-damage">DMG</button>
                </div>
                <textarea className="note-general-text" id="monsterGeneralNotes"></textarea>
                <div className="note-trash-wrapper">
                    <button className="note-delete-icon">
                        <img src="/trash.svg" alt="TRASH"></img>
                    </button>
                </div>
            </div>
        );
    }
}

export default Note;


