'use server'
// import { PrismaClient } from "@prisma/client";
// const client = new PrismaClient();
import {prisma} from '../../lib/prisma'
export default async function(clientid:number){
    try{
        const data = await prisma.completedPoject.findMany({
            where:{
                client_id:clientid
            }
        })
        return data;
    }
    catch(err){
        console.log(err);
    }
}
