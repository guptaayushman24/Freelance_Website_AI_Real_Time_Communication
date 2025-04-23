'use server'
import { PrismaClient } from "@/db/generated/prisma";
const client = new PrismaClient();
export default async function Ongoingproject(client_id:number){
    try{
        const data = await client.acceptedProject.findMany({
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