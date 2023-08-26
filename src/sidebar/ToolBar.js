import React from 'react';
import { HamburgerIcon } from '@chakra-ui/icons'
import './ToolBar.css'

const ToolBar = ({openSidebar}) => {
    return (
        <div className="tool-bar">
            <div className="burger" onClick={openSidebar}>
                <HamburgerIcon boxSize={30}/>
            </div>
        </div>
    )
}

export default ToolBar
