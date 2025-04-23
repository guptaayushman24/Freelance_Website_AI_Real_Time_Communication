'use server'
import { PrismaClient } from "@/db/generated/prisma"
const client = new PrismaClient();
async function Client_Detail(){
   try{
    const jobs = await client.jobSchema.findMany({
        include:{
            client:{
                select:{
                    client_name:true,
                    Email:true
                }
            }
        }
    })
    // if (!jobs){
    //     return ["-1"];
    // }
     return jobs.map((job)=>({
        clientName:job.client.client_name,
        clientEmail:job.client.Email
     }))
   }
   catch(err){
    //  return ["-1"];
   }
}
export default Client_Detail;