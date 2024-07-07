import React from "react";



function Icon(props){
    return (<div>
          <div className="center"><img  height={"35px"} width={"35px"} src={props.src} alt="any"  /></div>
           <h3 className="logoName logoNameSize" style={{color: props.color}}>{props.name}</h3>
    </div>)
}


export default Icon