import React from "react";



function SliderDiv(props){
    return(
    <div>
        <div className="logoImage">
           <img  height={"50px"} width={"50px"} src={props.src} alt="any"  />
        </div>
        <div className="center">
       <h3 className="logoName">{props.name}</h3>
       </div>
    </div>)
}

export default SliderDiv