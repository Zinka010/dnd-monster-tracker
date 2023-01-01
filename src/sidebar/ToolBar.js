import React from 'react';
import MenuLineIcon from 'remixicon-react/MenuLineIcon'
import './ToolBar.css'

const ToolBar = ({openSidebar}) => {
    return (
        <div className="tool-bar">
            <div className="burger" onClick={openSidebar}>
                <MenuLineIcon/>
            </div>
        </div>
    )
}

export default ToolBar