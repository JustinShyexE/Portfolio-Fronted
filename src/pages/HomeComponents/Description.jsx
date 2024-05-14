import React from "react";
import Icon from "./sliderComponents/Icon";
import github from "../images/github.png"
import link from "../images/link.png"
import {aShop, carShop} from "../info"
import Slider from 'react-infinite-logo-slider'



function Description(props){

  var logos
if(props.logos==="aShop"){
   logos= aShop
}else if(props.logos==="carShop"){
  logos = carShop
}

    return(
<div className="dscPositioning">
  <div className="descriptionDiv">
  <p className="dscP1">{props.description}</p>
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
                   <Icon src={logo.icon} name={logo.name} />
                 </Slider.Slide>
            
                  ))
          :null}
        </Slider>
      </div>
        
      
          <p className="dscP2">{props.text}</p>
          <div className="dscLinks center">
            <div style={{display:"flex", gap:"20px"}}>
            <a href="/" style={{textDecoration:"none", cursor:"pointer"}}>
              <div className="center"><img  height={"40px"} width={"40px"} src={github} alt="any"  /></div>
               <h3 className="logoName logoNameSize">Code</h3>
             </a>
             <a  href="/" style={{textDecoration:"none", cursor:"pointer"}}>
               <div className="center"><img  height={"40px"} width={"40px"} src={link } alt="any"  /></div>
               <h3 className="logoName logoNameSize">Project</h3>
             </a>
            </div>
          </div>
    </div>
    </div>
    )
}




export default Description