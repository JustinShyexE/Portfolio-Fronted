import React from "react";
import { useState } from "react";
import PauseCircleOutlineOutlinedIcon from '@mui/icons-material/PauseCircleOutlineOutlined';
import PlayCircleFilledWhiteOutlinedIcon from '@mui/icons-material/PlayCircleFilledWhiteOutlined';


function Playbutton(props){
    const[pause, setPause]=useState(true)
    let vid= document.getElementById(props.idd)
    function onClickON(){
        setPause(true)
       vid.play()
  }
  function onClickOFF(){
        setPause(false)
        vid.pause()
}  

   return(
    <span>
    {!pause? 
        <div onClick={onClickON} className="Button">
           <PlayCircleFilledWhiteOutlinedIcon sx={{color:"#80BCBD", fontSize: 35 }} />
         </div>
        :
        <div onClick={onClickOFF} className="Button">
           <PauseCircleOutlineOutlinedIcon sx={{color:"#80BCBD", fontSize: 35 }} />
        </div>
        }
   </span>)
}


export default Playbutton;