import React from 'react';
import './AddMonsterCardButton.css'

function AddMonsterCardButton({handleClick}) {
    return (
        <div className='add-monster-card-container'>
            <button className='add-monster-card'
                    type="button"
                    onClick={handleClick}
                    >+</button>
        </div>
    );
    
}

export default AddMonsterCardButton;


