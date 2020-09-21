require('dotenv').config()


const express = require("express")
const app = express()
const mongoose = require('mongoose')
var Pusher = require('pusher');
const cors = require('cors')
const PORT = process.env.PORT

const message = require('./moels/message.js')

app.use(express.json())
app.use(express.urlencoded({extended:true}))

const mongo_url =  "mongodb+srv://user-whatsapp:zGJfsuSPSdD7P95@cluster0.hjkrh.mongodb.net/whatsapp-clone-db?retryWrites=true&w=majority"

var pusher = new Pusher({
    appId: '1076314',
    key: '93768896684f7cd27e1c',
    secret: 'de1dc6e8216e2a0c02a2',
    cluster: 'ap2',
    encrypted: true
  });

// app.use((req,res,next)=>{
//     res.setHeader("Access-Control-Allow-Origin","*")
//     res.setHeader("Access-Control-Allow-Headers","*")
//     next()

// })  
app.use(cors())

mongoose.connect(mongo_url,{
    useNewUrlParser:true ,
    useCreateIndex:true ,
    useUnifiedTopology:true
})
const db = mongoose.connection 
db.on("error",err=>{
    console.log(err)
})

db.once('open',()=>{
    console.log("DB synced")

    const collection = db.collection('messages')
    const stream = collection.watch()

    stream.on("change",(changData)=>{
        //    console.log(changData)

           if(changData.operationType=="insert"){
               const messageDetail = changData.fullDocument
               pusher.trigger('message','inserted',{
                   name: messageDetail.name ,
                   message : messageDetail.message,
                   time : messageDetail.time ,
                   recieved : messageDetail.recieved 

               })
           }else{
               console.log("error triggering")
           }
           

    })

})



app.get('/',(req,res)=>{
    return res.send("hello")
})

app.get('/api/message/sync',(req,res)=>{
    message.find((err,data)=>{
        if(err){
           res.status.send(err)
        }
        else{
            res.status(200).send(data)
        }
    })
})

app.post('/api/message/send',(req,res)=>{
    const mes = req.body 
 
    message.create(mes , (err,mes)=>{
        if(err) {
           res.status(500).send(err)
        }
        return res.status(201).send(mes)
    })

})

app.listen(PORT ,()=>{
    console.log("http://localhost:"+ PORT )
})