import React from "react";
import Slider from 'react-infinite-logo-slider'
import SliderDiv from "./sliderComponents/SliderDiv";
import react from "../images/react3.png"
import html from "../images/html.png"
import css from "../images/css.png"
import js from "../images/js.png"
import python from "../images/python.png"
import jquery from "../images/jquery.svg"
import nodejs from "../images/nodejs.png"
import sql from "../images/sql.png"
import api from "../images/api.png"
import git from "../images/git.png"
import { useMediaQuery } from 'react-responsive';

function Sllider(props){
    const is320 = useMediaQuery({ query: `(max-width: 700px)` });

    let width = "120px"
    let speed= "20"
    if(is320){
        width="101px"
        speed="10"
    }
    
   return(<div className="slider">
        <Slider
            width={width}
            duration={speed}
            pauseOnHover={true}
            blurBorders={false}
            blurBoderColor={'#F9F7C9'}
        >
            <Slider.Slide>
                <SliderDiv name="Html" src={html} color={props.color} />
            </Slider.Slide>
            <Slider.Slide>
                <SliderDiv name="CSS" src={css} color={props.color} />
            </Slider.Slide>
            <Slider.Slide>
                <SliderDiv name="Javascript" src={js} color={props.color} />
            </Slider.Slide>
            <Slider.Slide>
                <SliderDiv name="EexpressJs" src="https://inapp.com/wp-content/uploads/2023/01/express.png" color={props.color} />
            </Slider.Slide>
            <Slider.Slide>
                <SliderDiv name="React" src={react} color={props.color} />
            </Slider.Slide>
            <Slider.Slide>
                <SliderDiv name="APIs" src={api} color={props.color} />
            </Slider.Slide>
            <Slider.Slide>
                <SliderDiv name="Python" src={python} color={props.color} />
            </Slider.Slide>
            <Slider.Slide>
                <SliderDiv name="jQuery" src={jquery} color={props.color} />
            </Slider.Slide>
            <Slider.Slide>
                <SliderDiv name="Boostrap" src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Bootstrap_logo.svg/512px-Bootstrap_logo.svg.png" color={props.color} />
            </Slider.Slide>
            <Slider.Slide>
                <SliderDiv name="NodeJs" src={nodejs} color={props.color} />
            </Slider.Slide>
            <Slider.Slide>
                <SliderDiv name="EJS" src="https://img.icons8.com/color/480w/ejs.png" color={props.color} />
            </Slider.Slide>
            <Slider.Slide>
                <SliderDiv name="SQL" src={sql} color={props.color} />
            </Slider.Slide>
            <Slider.Slide>
                <SliderDiv name="PgSQL" src="https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/postgresql-icon.png" color={props.color} />
            </Slider.Slide>
            <Slider.Slide>
                <SliderDiv name="Git" src={git} color={props.color} />
            </Slider.Slide>
        </Slider>
   </div>)
}

export default Sllider;