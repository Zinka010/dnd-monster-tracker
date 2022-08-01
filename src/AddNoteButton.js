import React from 'react';
import './AddNoteButton.css'

class AddNoteButton extends React.Component {
    render() {
        return (
            <div className='add-note-container'>
                <button className='add-note'
                        type="button"
                        >+</button>
            </div>
        );
    }
}

export default AddNoteButton;


