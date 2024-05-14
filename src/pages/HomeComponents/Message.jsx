import React from "react";
import { useState } from "react";

function Message(){

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

        await fetch("http://localhost:5000/message",{
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


    return(
  <div className="posMessage">
    <div className="messageDiv">
    <div className="divy">
      <input name="name" className="inputBar fadeIn in" onChange={handleChange} value={data.name} placeholder="Name" type="text" />
      <input name="email" className="inputBar fadeIn in" onChange={handleChange} value={data.email} placeholder="Email" type="text" />
      <textarea name="msg" className="inputBar inptMessage fadeIn in" onChange={handleChange} value={data.msg} placeholder="Message" />
     <div className="statusDiv">
       {status?
        <p className="status">Message sent succesfully!</p>
        :null
       }
      </div>
       <button className="btn" onClick={submit}> Send</button>
     </div>
    </div>
   </div>  
    )
}




export default Message