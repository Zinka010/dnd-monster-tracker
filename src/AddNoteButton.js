import React from 'react';
import './AddNoteButton.css'

class AddNoteButton extends React.Component {
    handleClick() {
        console.log("Button Click!");
    }

    render() {
        return (
            <div className='add-note-container'>
                <button className='add-note'
                        type="button"
                        onClick={this.handleClick}>+</button>
            </div>
        );
    }
}

export default AddNoteButton;


