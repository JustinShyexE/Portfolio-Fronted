import React from "react";
import { useState} from "react";
import Playbutton from "./laptopCmpnt/Playbutton";
import Mutebutton from "./laptopCmpnt/Mutebutton";

function AppleLaptopDiv(props){
    const [hover, setHover] = useState(false)

    function MouseOverON(){
        setHover(true)
    }
    function MouseOverOFF(){
        setHover(false)
    }
   

   return (
    <div className="appleDiv" >
     <div className="parent">
          <img alt="" width={"100%"} height={"100%"} src="https://dennissnellenberg.com/assets/img/device-mbp-16-lower-nonotch.png" />
          <div onMouseOver={MouseOverON} onMouseLeave={MouseOverOFF} className="child">
            <video id={props.idd} controls="" style={{width:"100%", height: "100%"}} src={props.video}
              muted="muted" loop="loop" autoPlay="autplay" playsInline /> 
            <span>
             {hover?
             <div>
                <Playbutton idd={props.idd} />
                <Mutebutton idd={props.idd} />
              </div>
             :null}
             </span>
          </div>
     </div>
    </div>
   )
}

export default AppleLaptopDiv;