import React from 'react';
import './AddNoteButton.css'

function AddNoteButton({handleClick}) {
    return (
        <div className='add-note-container'>
            <button className='add-note'
                    type="button"
                    onClick={handleClick}
                    >+</button>
        </div>
    );
    
}

export default AddNoteButton;


