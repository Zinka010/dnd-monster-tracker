import React, {useState} from "react";
import './Sidebar.css'
import GithubFillIcon from 'remixicon-react/GithubFillIcon'
import SettingsFillIcon from 'remixicon-react/ToolsFillIcon'
import { ChromePicker } from "react-color";

const Sidebar = ({sidebar, handleUpdateBackground}) => {
    const [chromePickerColor, setChromePickerColor] = useState("#37d67a");

    return (
        <div className={sidebar?"sidebar sidebar--open":"sidebar"}>
            <li><SettingsFillIcon className="sidebar-item-icon"/> Settings</li>
            <div className="background-color-title-container">
                <text className="background-color-title">Background Colour</text>
            </div>
            <div className="color-picker-container">
                <ChromePicker 
                    disableAlpha={true}
                    color={chromePickerColor}
                    onChange={(color) => {
                        setChromePickerColor(color.hex)
                        handleUpdateBackground(color.hex)
                    }}/>
            </div>
            
            <li onClick={() => window.open('https://github.com/Zinka010/dnd-monster-tracker','_blank')}>
                <GithubFillIcon className="sidebar-item-icon"/> 
                GitHub
            </li>

            
            <h5 className="author-note">Created with love by Justin Toft</h5>
        </div>
    )
}

export default Sidebar