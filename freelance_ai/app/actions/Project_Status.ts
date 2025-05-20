'use server'
import { PrismaClient } from "@prisma/client";
const client = new PrismaClient();
export default async function ProjectStatus(clientid:number){
    try{
        const data = await client.applyJob.findMany({
            where:{
                clientid:clientid
            }
        })
        return data;
    }
    catch(err){
        console.log(err);
    }
}