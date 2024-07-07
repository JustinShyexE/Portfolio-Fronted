import React from "react";
import { useState } from "react";



function Message(props){

    const [data, setData] =useState({
        name:"",
        email:"",
        msg:""
      })
    const [status, setStatus] = useState(false)
    
      let submit=async(e)=>{
        e.preventDefault();
        setStatus(true)
        setTimeout(function(){
          setStatus(false)
          },3500)
        let dataa = data
        setData({
          name:"",
          email:"",
          msg:""
         })

        await fetch("/message",{
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(dataa)
       })
     }


     function handleChange (event) {
        const {name, value} = event.target
        setData(prevValue=>{
            if(name==="name") return {name:value, email:prevValue.email, msg:prevValue.msg}
            else if(name==="email") return {name:prevValue.name, email:value, msg:prevValue.msg}
            else if(name==="msg") return {name:prevValue.name, email:prevValue.email, msg:value}
        })
     }
  console.log("this isss" , props.color)

    return(
  <div className="posMessage">
    <div className="messageDiv">
    <div className="divy">
      <input name="name" className="inputBar fadeIn in" onChange={handleChange} value={data.name} placeholder="Name" type="text" style={{borderColor:props.ft, color: props.color, outlineColor: props.border, '--placeholder-color': props.color, textTransform: "capitalize" }} />
      <input name="email" className="inputBar fadeIn in" onChange={handleChange} value={data.email} placeholder="Email" type="text" style={{borderColor:props.ft, color: props.color, outlineColor: props.border, '--placeholder-color': props.color }} />
      <textarea name="msg" className="inputBar inptMessage fadeIn in" onChange={handleChange} value={data.msg} placeholder="Message" style={{borderColor:props.ft, color: props.color, outlineColor: props.border, '--placeholder-color': props.color }} />
     <div className="statusDiv">
       {status?
        <p className="status" style={{color: props.color}}>Message sent succesfully!</p>
        :null
       }
      </div>
       <button className="btn" onClick={submit} style={{borderColor:props.ft, color: props.color, outlineColor: props.border}}> Send</button>
     </div>
    </div>
   </div>  
    )
}




export default Message