import React from "react";
import "./styleSalas.css";
import { ExpandMore } from "@styled-icons/material";
import { Add } from "@styled-icons/material";
import SidebarChannel from "../SidebarChannel/SidebarChannel";
import { SignalCellularAlt } from "@styled-icons/material";
import { PhoneMissedCall } from "@styled-icons/heroicons-solid";
import { PersonCircle } from "@styled-icons/bootstrap"
import { Microphone } from "@styled-icons/boxicons-regular";
import { Headphones } from "@styled-icons/bootstrap";
import { Settings } from "@styled-icons/material";

const ServerRooms = () => {
  return (
    <div className="sidebar">
      <div className="sidebar_top">
        <h3>TechKoders</h3>
        <ExpandMore width="28px"/>
      </div>

      <div className="sidebar_channel">
        <div className="sidebar_channelHeader">
          <div className="sidebar_header">
            <ExpandMore width="28px"/>
            <h4 className="textchannel">Canais de Texto</h4>
          </div>
          <Add className="sidebar_addChannel" width="28px"/>
        </div>
     

        <div className="sidebar_channelList">
          <SidebarChannel />    
          <SidebarChannel />    
          <SidebarChannel />    
          <SidebarChannel />    
        </div>
        
        <div className="sidebar_voiceChannel">
          <div className="sidebar_channelVoice">
            <ExpandMore width="28px"/>
            <h4 className="textvoice">Canais de Voz</h4>
          </div>
          <Add className="sidebar_addChannel" width="28px"/>
        </div>

      </div>

      <div className="sidebar_voice">
        <SignalCellularAlt
          width="28px" 
          className="sidebar_voiceIcon"
          fontSize="large"
        />
        <div className="sidebar_voiceInfo">
          <h3>Voice Connected</h3>
          <p>Testando</p>
        </div>

        <div className="sidebar_voiceIcons">
          <PhoneMissedCall width="28px" height="28px"/>
        </div>

      </div>

      <div className="sidebar_profile">
          <PersonCircle width="28px" />
          <div className="sidebar_profileInfo">
            <h3>TechKoders</h3>
            <p>#5502</p>
          </div>

          <div className="sidebar_profileIcons">
            <Microphone width="28px" />
            <Headphones width="28px" />
            <Settings width="28px" />
          </div>

      </div>

    </div>
  );
}

export default ServerRooms;
