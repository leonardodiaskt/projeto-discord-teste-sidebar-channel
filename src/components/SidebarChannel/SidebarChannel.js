import React from "react";
import './SidebarChannel.css';
import { Hash } from '@styled-icons/boxicons-regular'

const SidebarChannel = ({id, channel}) => {
    return(
    <div className="sidebarChannel">
        <Hash width="28px" height="28px"/>
        <h4><span className="sidebarChannel_hashtag"></span> CS:GO</h4>
    </div>
    );
}

export default SidebarChannel;