import React from "react";
import VolumeUpOutlinedIcon from '@mui/icons-material/VolumeUpOutlined';
import VolumeOffOutlinedIcon from '@mui/icons-material/VolumeOffOutlined';
import { useState } from "react";


function Mutebutton(props){
    const [volume, setVolume] = useState(true)
    let vid= document.getElementById(props.idd)

    function VolumeON(){
        setVolume(true)
        vid.muted=true
    }
    function VolumeOFF(){
        setVolume(false)
        vid.muted=false
    }
    
    return( 
    <div className="soundButton">
    {!volume?
    <span onClick={VolumeON}>
         <VolumeUpOutlinedIcon  sx={{color:"#80BCBD", fontSize: 25 }} />
    </span>
    :
    <span onClick={VolumeOFF}>
      <VolumeOffOutlinedIcon sx={{color:"#80BCBD", fontSize: 25 }} />
    </span>
   }
</div>)
}

export default Mutebutton