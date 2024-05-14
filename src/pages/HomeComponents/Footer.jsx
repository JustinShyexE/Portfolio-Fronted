import React from "react";
import css from "../images/css.png"
import gmail from "../images/gmail.png"
import phone from "../images/phone.png"
import git from "../images/github.png"

function Footer(){
    return(<div className="ft center">
         <a href="https://gmail.com/"  className="contactBox fadeIn ">
            <img alt="" src={gmail} className="contactImg" />
            <p className="gmail center">bacaila.iustin.andrei@gmail.com</p>
         </a>
         <a href="tel:07442569505"   className="contactBox fadeIn">
            <img alt="" src={phone} className="contactImg" />
            <p className="gmail center">+7442569505</p>
         </a>
         <a href="https://github.com/ShyexEE"   className="contactBox fadeIn">
            <img alt="" src={git} className="contactImg" />
            <p className="gmail center">ShyexEE</p>
         </a>
    </div>)
}


export default Footer