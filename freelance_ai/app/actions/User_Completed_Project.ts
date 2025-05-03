'use server'
import { PrismaClient } from "@/db/generated/prisma";
const client = new PrismaClient();
export default async function(user_email:string){
    try{
        const data = await client.completedPoject.findMany({
            where:{
                useremail:user_email
            }
        })
        return data;
    }
    catch(err){
        console.log(err);
    }
}