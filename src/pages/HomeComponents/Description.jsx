import React from "react";
import Icon from "./sliderComponents/Icon";
import github from "../images/github.png"
import link from "../images/web.png"
import {aShop, carShop, restaurant} from "../info"
import Slider from 'react-infinite-logo-slider'



function Description(props){

  var logos
if(props.logos==="aShop"){
   logos= aShop
}else if(props.logos==="carShop"){
  logos = carShop
}
else if(props.logos==="restaurant"){
  logos = restaurant
}


    return(
<div className="dscPositioning">
  <div className="descriptionDiv">
  <a  href={props.project}> <p className="dscP1" style={{color: props.color}}>{props.description}</p> </a>
      <div className="dscLogos">
        <Slider
             width="100px"
              duration={15}
              pauseOnHover={true}
              blurBorders={false}
             blurBoderColor={'#F9F7C9'}
            >   

         {logos?
             logos.map((logo) => (
                <Slider.Slide key={logo.id}>
                   <Icon src={logo.icon} name={logo.name}  color={props.color} />
                 </Slider.Slide>
            
                  ))
          :null}
        </Slider>
      </div>
        
      
          <p className="dscP2" style={{color: props.color}}>{props.text}</p>
          <div className="dscLinks center">
            <div style={{display:"flex", gap:"20px"}}>
            <a href={props.code} style={{textDecoration:"none", cursor:"pointer"}} target="_blank" rel="noreferrer">
              <div className="center"><img  height={"40px"} width={"40px"} src={github} alt="any"  /></div>
               <h3 className="logoName logoNameSize" style={{color: props.color}}>Code</h3>
             </a>
             <a  href={props.project} style={{textDecoration:"none", cursor:"pointer"}} target="_blank" rel="noreferrer">
               <div className="center"><img  height={"40px"} width={"40px"} src={link } alt="any"  /></div>
               <h3 className="logoName logoNameSize" style={{color: props.color}}>Website</h3>
             </a>
            </div>
          </div>
    </div>
    </div>
    )
}




export default Description