'use server'
// import { PrismaClient } from "@/db/generated/prisma";
// const client = new PrismaClient();
import {prisma} from '../../lib/prisma'
export default async function RejectProject (userid:number,jobtitle:string){
    try{
        await prisma.applyJob.deleteMany({
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