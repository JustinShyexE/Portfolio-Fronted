import React from "react";
import Frame  from "./HomeComponents/Frame"
import AppleLaptopDiv from "./HomeComponents/AppleLaptopDiv";
import video1 from "./videos/video1original.mp4"
import video2 from "./videos/video2original.mp4"
import Slider from "./HomeComponents/Slider"
import Description from "./HomeComponents/Description";
import Introduction from "./Introduction";
import Message from "./HomeComponents/Message";
import Footer from "./HomeComponents/Footer";


//import { useMediaQuery } from 'react-responsive';

function Home(){



  

  //const is320 = useMediaQuery({ query: `(max-width: 1000px)` });

     return (<div className="mainBody">

     
     <div className="boody">
       <Frame /> 
       <Introduction /> 
     </div>
     <div className="sliderDiv">
      <Slider /> 
      </div>
        <div className="anmBasic">
          <p className="anmProj">Projects:</p> 
        </div>
    <div className="firstDiv fadeIn">
    <div className="laptopTitlePost">
       <div> <h3 className="dscTitle" >Car Shop PorscheV2</h3>  
        <AppleLaptopDiv key="2"  video={video1} idd="Video1"  /></div>
    </div>
       <Description 
          logos="carShop"
          description="This is a car shop Website"
          text="This a FULLY-Responsive Website, that can be used by Porsche themselves to sell their cars. 
          It has a good presentation of the Porsche cars and an option to buy after creating a Porsche account."
       />
     </div>
    <div className="scroll-watcher"></div>
    

    <div className="firstDiv fadeIn">
      <div className="laptopTitlePost">
          <div><h3 className="dscTitle" >aShop</h3> 
           <AppleLaptopDiv key="1"  video={video2} idd="Video2" /></div>
      </div>
      <Description 
        description="This is an  eCommerce Website"
        text="aShop it's an eCommerce website that can be used by any entrepreneurs to sell their products online. Users can find their desired product and buy it, after creating an account."
        logos="aShop"
      />
    </div>   
        <div className="anmBasic ">
          <p className="anmProj me">Contact me:</p> 
        </div>
       < Message />
       <Footer />
     </div>)
}

export default Home
