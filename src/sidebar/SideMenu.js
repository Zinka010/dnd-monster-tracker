import React from "react";
import {useState} from 'react';

import ToolBar from "./ToolBar";
import Backdrop from "./Backdrop";
import Sidebar from "./Sidebar";


const SideMenu = ({handleUpdateBackground, deleteSelectedEncounter}) => {
    const [sidebar, setSidebar] = useState(false);

    const toggleSidebar = () => {
        setSidebar((prevState) => !prevState)
    }

    return(
        <div className="side-menu">
            <ToolBar openSidebar={toggleSidebar} />
            <Backdrop sidebar={sidebar} closeSidebar={toggleSidebar}/>
            <Sidebar 
                sidebar={sidebar} 
                handleUpdateBackground={handleUpdateBackground}
                deleteSelectedEncounter={deleteSelectedEncounter}/>
        </div>
    )
}

export default SideMenu
