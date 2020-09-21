import React ,{useState}  from 'react'
import './css/Chat.css'

import {Avatar, IconButton} from '@material-ui/core';

// import MessageIcon from '@material-ui/icons/Message';
import MoreVertIcon from '@material-ui/icons/MoreVert';
// import DonutLargeIcon from '@material-ui/icons/DonutLarge';
import SearchIcon from '@material-ui/icons/Search';
import PanoramaIcon from '@material-ui/icons/Panorama';
import SentimentVerySatisfiedIcon from '@material-ui/icons/SentimentVerySatisfied';
import SendIcon from '@material-ui/icons/Send';

import axios from 'axios'

function Chat( {messages}) {

    const [input,setInput] = useState("")

    const form_submit = async (e)=>{
        e.preventDefault()

        // console.log(input)
          
        await axios.post('http://localhost:9000/api/message/send' ,{
            name:"demo",
            message:input,
            time : "time",
            recieved:false
        })
        
        setInput("")

    }


    return (
        <div className="Chat" >

         <div className="Chat_top" >
         <Avatar/>
          <div className="chat_info">
          
             <h2>Name</h2>
             <span>Last seen ...</span>
          </div>
          <div className="Chat_icon" >

<IconButton>
<SearchIcon/>
</IconButton>
<IconButton>
<PanoramaIcon/>
</IconButton>
<IconButton>
<MoreVertIcon/>
</IconButton>
          </div>
         </div>

<div className="chat_body">

    
    {
        messages.map(message =>(
            // <div className='message_left right' >

             <div className={`message_left ${message.recieved && "right"}`} > 
            <h4>{message.name} </h4>
            <p>{message.message}</p>
             <span>{ message.time }</span>
            </div>
        ))
    }



</div>

<div className="message_type" >
<IconButton>
    <SentimentVerySatisfiedIcon/>
</IconButton>
<form onSubmit={form_submit} >
<input value={input} onChange={e => setInput(e.target.value)} placeholder="type message..." className="message_input"/>
<IconButton >
  {/* <button type='submit' onClick={form_submit} >
 send message
</button>    */}
</IconButton >
</form>

</div>

        </div>
    )
}

export default Chat 
