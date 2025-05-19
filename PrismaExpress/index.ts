const express = require('express');
const cors = require('cors');
import {prisma} from '../freelance_ai/lib/prisma'
const app = express();
app.use(cors({
    origin:'https://vercel.com/guptaayushman24s-projects/freelance-website-ai-real-time-communication',
    credentials:true
}));
app.use(express.json({limit:'10mb'}))
const PORT = 4001;
// const client = new PrismaClient();
app.post('/prismaschema',async(req:any,res:any)=>{
   try{
     const {imagestring,userid} = req.body;
    await prisma.faceAuthentication.create({
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
     return res.json({'msg':'Not able to create record'})
   }
   

})

app.get('/findthesizeofdb',async(req:any,res:any)=>{
    try{
        const data = await prisma.faceAuthentication.count();
        return res.status(200).json({data});
    }
    catch(err){
        return res.json({'msg':err});
    }
})
app.get('/getallimagestring',async(req:any,res:any)=>{
    try{
        const data = await prisma.faceAuthentication.findMany({});
        return res.status(200).json(data)
    }
    catch(err){
        return res.json({'message':`Something wrong ${err}`,'status':500})
    }
})
app.listen(PORT,()=>{
    console.log(`PORT is running on ${PORT}`)
})