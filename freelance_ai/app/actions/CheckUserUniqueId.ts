'use server'
// import { PrismaClient } from "@/db/generated/prisma"
import {prisma} from '../../lib/prisma'
// const client = new PrismaClient();
export default async function CheckUserUniqueId(email:string){
    const data = await prisma.walletSchema.findUnique({
        where:{
            email:email
        }
    })
    if (data==null){
        console.log("Something went wrong");
    }
    return data;
}