import React, { useState } from 'react';
import './MonsterCard.css'

const MonsterCard = (props) => {

    const [changeAmount, setChangeAmount] = useState(0);

    const updateName = (event) => {
        props.handleUpdate(props.monster.id, event.target.value, 
            props.monster.curHealth, props.monster.maxHealth, props.monster.ac,
            props.monster.notes);
    }

    const updateCurrentHealth = (event) => {
        props.handleUpdate(props.monster.id, props.monster.name, 
            event.target.value, props.monster.maxHealth,  props.monster.ac,
            props.monster.initiative, props.monster.notes);
    }

    const updateMaxHealth = (event) => {
        props.handleUpdate(props.monster.id, props.monster.name, 
            props.monster.curHealth, event.target.value,  props.monster.ac,
            props.monster.initiative, props.monster.notes);
    }

    const updateNotes = (event) => {
        props.handleUpdate(props.monster.id, props.monster.name, 
            props.monster.curHealth, props.monster.maxHealth, props.monster.ac,
            props.monster.initiative, event.target.value);
    }

    const updateChangeAmount = (event) => {
        
        if (event.target.value === "") {
            setChangeAmount(0);
        } else {
            setChangeAmount(parseInt(event.target.value));
        }
    }

    const updateAc = (event) => {
        props.handleUpdate(props.monster.id, props.monster.name, 
            props.monster.curHealth, props.monster.maxHealth, event.target.value,
            props.monster.initiative, props.monster.notes);
    }

    const updateInitiative = (event) => {
        props.handleUpdate(props.monster.id, props.monster.name, 
            props.monster.curHealth, props.monster.maxHealth, props.monster.ac,
            event.target.value, props.monster.notes);
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
        <div className="monster-card" style={{background:props.backgroundColor}}>
            <div className="monster-card-text-box-div">
                <textarea id="monsterName" className="monster-card-monster-title" maxLength="12" defaultValue={props.monster.name} onChange={updateName}></textarea>
                <input maxLength={3} id="monsterCurrentHealth" className="monster-card-health" defaultValue={props.monster.curHealth} onChange={updateCurrentHealth}></input>
                {/* We use an input type here so it can be styled the same way as the the other two fields */}
                <input className="monster-card-slash" tabIndex="-1" value="/" disabled></input>
                <input maxLength={3} id="monsterMaxHealth" className="monster-card-health " defaultValue={props.monster.maxHealth} onChange={updateMaxHealth}></input>
            </div>
            <div className="monster-card-info-bar">
                <button className="monster-card-heal" onClick={heal}>HEAL</button>
                <input className="monster-card-health-points" maxLength={3} placeholder="amount" onChange={updateChangeAmount}></input>
                <button className="monster-card-damage" onClick={damage}>DMG</button>
            </div>
            <div className="monster-card-armor-class">
                <input className="monster-card-armor-class-input" placeholder="AC" maxLength="2" defaultValue={props.monster.ac} onChange={updateAc}></input>
                <input className="monster-card-initiative-input" placeholder="Initiative" maxLength="2" defaultValue={props.monster.initiative} onChange={updateInitiative}></input>
            </div>
            <textarea className="monster-card-general-text" id="monsterGeneralNotes" defaultValue={props.monster.notes} onChange={updateNotes}></textarea>
            <div className="monster-card-trash-wrapper">
                <button className="monster-card-delete-icon" onClick={() => props.handleDelete(props.monster.id)}>
                    <img src="/trash.svg" alt="TRASH"></img>
                </button>
            </div>
        </div>
    );
    
}

export default MonsterCard;


