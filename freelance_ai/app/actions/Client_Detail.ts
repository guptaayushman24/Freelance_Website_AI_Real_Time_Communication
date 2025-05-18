'use server'
// import { PrismaClient } from "@/db/generated/prisma"
// const client = new PrismaClient();
import {prisma} from '../../lib/prisma'
async function Client_Detail(){
   try{
    const jobs = await prisma.jobSchema.findMany({
        include:{
            client:{
                select:{
                    client_name:true,
                    Email:true
                }
            }
        }
    })
    
     return jobs.map((job)=>({
        clientName:job.client.client_name,
        clientEmail:job.client.Email
     }))
   }
   catch(err){
    return err;
   }
}
export default Client_Detail;