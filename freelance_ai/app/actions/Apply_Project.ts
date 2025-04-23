'use server'
import { PrismaClient } from "@/db/generated/prisma";
const client = new PrismaClient();
export default async function Apply_Project(client_id:number,user_id:number,jobtitle:string,budget:string,timeline:string,index:number){
    try{    
        await client.applyJob.createMany({
            data:{
                clientid:client_id,
                userid:user_id,
                jobtitle:jobtitle,
                budget:budget,
                timeline:timeline,
                jobid:index,
            },
        })
        console.log("The index of the project is",index);
        console.log("Apply Project data is",jobtitle);
        return 1;
    }
    catch(err){
        console.log("The error is",err);
        return -1;
    }
}