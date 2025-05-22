'use server'
// import { PrismaClient } from "@prisma/client";
// const client = new PrismaClient()
import {prisma} from '../../lib/prisma'
export default async function(user_email:string){
    try{
        const data = await prisma.completedPoject.findMany({
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