'use server'
import { PrismaClient } from "@prisma/client";
const client = new PrismaClient();
export default async function RejectProject (userid:number,jobtitle:string){
    try{
        await client.applyJob.deleteMany({
            where:{
                userid:userid,
                jobtitle:jobtitle
            }
        })
    }
    catch(err){
        console.error(err);
    }
}