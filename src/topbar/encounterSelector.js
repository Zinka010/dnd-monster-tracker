import { 
    Select, 
    Input, 
    InputGroup, 
    InputRightElement, 
    Button } from '@chakra-ui/react'
import React from 'react';
import './encounterSelector.css'


const EncounterSelector = () => {
    const handleClick = () => {
        console.log('Button Clicked')
    }

    return (
        <div className='encounterSelector'>
            
            <div>
            <InputGroup size='md' className='encounterSelectorAddButton'>
                <Input
                    pr='4.5rem'
                    type='text'
                    placeholder='Encounter Name'
                />
                <InputRightElement width='5.5rem'>
                    <Button h='1.75rem' size='sm' onClick={handleClick}>
                    Create
                    </Button>
                </InputRightElement>
            </InputGroup>
            </div>
            <div className='encounterSelectorDropdown'>
                <Select >
                    <option value='option1'>Option 1353453</option>
                    <option value='option2'>Option 2</option>
                    <option value='option3'>Option 3</option>
                </Select>
            </div>
        </div>
    )
}

export default EncounterSelector
