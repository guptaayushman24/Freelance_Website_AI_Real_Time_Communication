'use server'
import { PrismaClient } from '@prisma/client'
const client = new PrismaClient();
export default async function CheckUserUniqueId(email:string){
    const data = await client.walletSchema.findUnique({
        where:{
            email:email
        }
    })
    if (data==null){
        console.log("Something went wrong");
    }
    return data;
}