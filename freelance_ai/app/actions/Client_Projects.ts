'use server'
// import {  PrismaClient } from "@/db/generated/prisma";
// const client = new PrismaClient();
import {prisma} from '../../lib/prisma'
export default async function ClientProject(clientid:number){
    try{
        const data = await prisma.applyJob.findMany({
            where:{
                clientid:clientid,
            },
            include:{
                profile:true,
                user:true
            },
        })
        return data;
    }
    catch(err){
       console.log(err);
    }
}