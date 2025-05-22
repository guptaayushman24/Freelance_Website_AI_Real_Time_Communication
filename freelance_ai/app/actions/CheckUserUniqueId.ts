'use server'
// import { PrismaClient } from '@prisma/client'
// const client = new PrismaClient();
import {prisma} from '../../lib/prisma'
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