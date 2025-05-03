'use server'
import { PrismaClient } from "@/db/generated/prisma";
const client = new PrismaClient();
export default async function(clientid:number){
    try{
        const data = await client.completedPoject.findMany({
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
