const express = require('express');
const {Server} = require('socket.io');
const {createServer} = require('http');
const cors = require('cors');
const PORT = 8001;

const app = express();
const server = new createServer(app);

// Creating the instance of io
const io = new Server(server,{
    cors:{
        origin:'http://localhost:3000',
        method:["GET","POST"],
        credentials:true
    }
})
// const userSocketMap: { [key: string]: string } = {};
let userSocketMap = new Map<string,string>();
// userSocketMap.set("alice@gmail.com",1)
// userSocketMap.set("jam@gmail.com",2)
app.use(cors());
app.get('/',(req:any,res:any)=>{
    return res.json({
        'msg':'Welcome to the Two Way communication'
    })
})

app.get('/map',(req:any,res:any)=>{
    return res.json({
        'Map':userSocketMap
    })
})

io.on("connection",(socket:any)=>{
    // console.log(`Client Added ${socket.id}`);
    // Registering the user and storing it's id in the HashMap
    socket.on("register-user",(email:any)=>{
        if (!userSocketMap.has(email)){
            userSocketMap.set(email,socket.id);
            console.log(`The email to create group ${email} is connected with socket ${socket.id}`);
        }
    })

    // When user will click on send message then it will recieve by the other user
    socket.on("startconversation",({message,email,sender})=>{
        const targetid = userSocketMap.get(email);
        
        if (targetid){
            io.emit("startconversation",{message,sender});
        }
      
        else{
            console.log("User is not connected");
        }
    })

   
})

server.listen(PORT,()=>{
    console.log(`Web Socket server is running on ${PORT}`);
})