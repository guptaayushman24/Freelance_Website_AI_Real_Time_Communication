'use server'
// import { PrismaClient } from "@prisma/client";
// const client = new PrismaClient();
import {prisma} from '../../lib/prisma'
export default async function Ongoingproject(client_id:number){
    try{
        const data = await prisma.acceptedProject.findMany({
            where:{
                client_id:client_id
            },
            include:{
                user:true
            }
        })
        return data;
    }
    catch(err){
        console.log(err);
    }
}