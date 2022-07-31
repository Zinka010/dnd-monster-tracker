import React from 'react';
import './Note.css'

class Note extends React.Component {

    render() {
        return (
            <div class="note">
                <div class="note-text-box-div">
                    <textarea id="monsterName" class="note-monster-title" maxlength="12">{this.props.monsterName}</textarea>
                    <input type="number" id="monsterCurrentHealth" class="note-health"></input>
                    <textarea class="note-slash" readonly="" tabindex="-1">/</textarea>
                    <input type="number" id="monsterMaxHealth" class="note-health"></input>
                </div>
                <div class="note-info-bar">
                    <button class="note-heal">HEAL</button>
                    <input type="number" class="note-health-points" maxlength="3" placeholder="amount"></input>
                    <button class="note-damage">DMG</button>
                </div>
                <textarea class="note-general-text" id="monsterGeneralNotes">Stranger Things reference!</textarea>
                <div class="note-trash-wrapper">
                    <button class="note-delete-icon">
                        <img src="/trash.svg" alt="TRASH"></img>
                    </button>
                </div>
            </div>
        );
    }
}

export default Note;


