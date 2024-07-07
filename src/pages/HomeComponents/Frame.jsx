import React from "react";



function Frame(props){
      return(
        <div className="start center"  style={{minWidth:"320px", minHeight:"350px" }}>
        <div className="photoDiv anmPhoto" style={{borderColor: props.color}}>  
        </div>
        </div>
      )
}

export default Frame