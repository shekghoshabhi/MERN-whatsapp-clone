import React ,{useEffect , useState } from 'react';
import './App.css';

import Sidebar from './components/Sidebar.js'
import Chat from './components/Chat.js'
import Pusher from 'pusher-js'
// import axios from './axios'
import axios from 'axios'

function App() {

const [messages , setMessages] = useState([])

useEffect(()=>{

  axios.get('http://localhost:9000/api/message/sync')
  .then(response=>{
    // console.log(response.data)
    setMessages(response.data)
  })


},[])



  useEffect(() => {
    
    // Pusher.logToConsole = true;

    const pusher = new Pusher('93768896684f7cd27e1c', {
      cluster: 'ap2'
    });

    const channel = pusher.subscribe('message');
    channel.bind('inserted', function(data) {
      // alert(JSON.stringify(data));
      setMessages([...messages,data])
    });

    return ()=>{
      channel.unbind_all()
      channel.unsubscribe()
    }

  }, [messages])


  // console.log(messages)

  return (
    <div className="App">
     
    <div  className="box">
     <Sidebar/>
     <Chat messages={messages} />
     </div>  
    </div>
  );
}

export default App;
