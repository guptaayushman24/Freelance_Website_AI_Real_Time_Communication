const express = require('express');
const cors = require('cors');
import { PrismaClient } from '@prisma/client';
const app = express();
// app.use(cors({
//   origin: 'https://freelance-website-ai-real-time-communication.vercel.app',
//   methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
//   allowedHeaders: ['Content-Type', 'Authorization'],
//   credentials: true
// }));
app.use(cors({
  origin: '*',
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: false  // MUST be false when using '*'
}));

app.use(express.json({limit:'10mb'}))
const PORT = 4001;
const client = new PrismaClient();
app.post('/prismaschema',async(req:any,res:any)=>{
   try{
     const {imagestring,userid} = req.body;
    console.log("Image string is",imagestring);
    console.log("Image id id is",userid);
    await client.faceAuthentication.create({
        data:{
            imagestring:imagestring,
            userid:userid
        }
    })
    return res.json({
        'msg':'Data inserted successfully in db'
    })
   }
   catch(err){
     return res.json({'msg':`Not able to create record ${err}`})
   }
   

})

app.get('/findthesizeofdb',async(req:any,res:any)=>{
    try{
        const data = await client.faceAuthentication.count();
        return res.status(200).json({data});
    }
    catch(err){
        return res.json({'msg':err});
    }
})
app.get('/getallimagestring',async(req:any,res:any)=>{
    try{
        const data = await client.faceAuthentication.findMany({});
        return res.status(200).json(data)
    }
    catch(err){
        return res.json({'message':`Something wrong ${err}`,'status':500})
    }
})
app.listen(PORT,()=>{
    console.log(`PORT is running on ${PORT}`)
})