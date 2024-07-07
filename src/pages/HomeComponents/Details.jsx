import React from "react";



function Details(props){
    return(<div className="details center">
        <div className="msgImg fadeIn" alt=""></div>
         <div className="detailsDiv fadeIn">
            <p className="msgTitle dscTitle" style={{color: props.color}}>About Me</p>
            <p className="msgText dscP2" style={{color: props.color}}>
            I am a peaceful individual who strives to improve and compete with himself everyday. 
            I'm obsessed with making things done perfectly and always happy helping others in need. 
            I can adapt really easy in a team and I'm a good team member.
            I like gaming, coding and COOKING:
            </p>
         </div>
    </div>)
}
export default Details