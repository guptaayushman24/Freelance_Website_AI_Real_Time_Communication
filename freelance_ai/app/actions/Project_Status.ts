'use server'
// import { PrismaClient } from "@prisma/client";
// const client = new PrismaClient();
import {prisma} from '../../lib/prisma'
export default async function ProjectStatus(clientid:number){
    try{
        const data = await prisma.applyJob.findMany({
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