import React from "react";


function Introduction(props){
   return(
   <div className="intWrapPosition">
    <div className="intWrap anmSize">
    <div className="introduction anmTitle">
        <h1   id="font-aileronHeavy" style={{color: props.color}}>Hi, I'm Justin. I'm a Fullstack Developer!</h1>
     </div>
    <div className="content anmCont">
    <h3 id="font-aileronThin" style={{color: props.color}}>
    I am passionate about coding and confident in my skills. I approach coding with patience and dedication, continuously striving to improve. I am open-minded and eager to learn new technologies and techniques.
    </h3>
    </div>  
    </div>
    </div>
   )
}



export default Introduction