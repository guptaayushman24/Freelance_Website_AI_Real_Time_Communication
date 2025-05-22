'use server'
// import { PrismaClient } from "@prisma/client";
// const client = new PrismaClient();
import {prisma} from '../../lib/prisma'
export default async function Userongoingproject(user_id:number){
    try{
        const data = await prisma.acceptedProject.findMany({
            where:{
                userid:user_id
                // and accepted status true
            },
            include:{
                client:true
            }
        })
        return data;
    }
    catch(err){
        console.log(err);
    }
}