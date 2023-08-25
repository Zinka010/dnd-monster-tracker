import { 
    Select, 
    Input, 
    InputGroup, 
    InputRightElement, 
    Button } from '@chakra-ui/react'
import React from 'react';
import './encounterSelector.css'


const EncounterSelector = ({encounters, addEncounter, selectedEncounterId, setSelectedEncounterId}) => {
    
    const handleClick = () => {
        console.log('Button Clicked');
        // console.log(encounters)
        var text = document.getElementById('encounterNameInput').value;
        console.log(text)
        if (text) {
            addEncounter(text);
            document.getElementById('encounterNameInput').value = '';
        }
    }

    return (
        <div className='encounterSelector'>
            <div className='encounterSelectorInputContainer'>
            <InputGroup size='md' className='encounterSelectorAddButton'>
                <Input
                    pr='4.5rem'
                    type='text'
                    placeholder='Encounter Name'
                    id='encounterNameInput'
                    maxLength="20"
                />
                <InputRightElement width='5.5rem'>
                    <Button h='1.75rem' size='sm' onClick={handleClick}>
                    Create
                    </Button>
                </InputRightElement>
            </InputGroup>
            </div>
            <div>
                <Select 
                    width='15rem'
                    id='encounterSelectorDropdown'
                    onChange={event => {
                            setSelectedEncounterId({id: event.target.value})
                        }}

                    value={selectedEncounterId.id}
                    >
                    {encounters.map(encouter => 
                        <option key={encouter.id} 
                                value={encouter.id}
                                >
                            {encouter.name}
                        </option>)}
                </Select>
            </div>
        </div>
    )
}

export default EncounterSelector
