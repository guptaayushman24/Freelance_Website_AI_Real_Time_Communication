'use server'
import { PrismaClient } from "@/db/generated/prisma";
const client = new PrismaClient();
export default async function Userongoingproject(user_id:number){
    try{
        const data = await client.acceptedProject.findMany({
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