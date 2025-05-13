'use server'
import { PrismaClient } from "@/db/generated/prisma"
const client = new PrismaClient();
export default async function faceAuthentication(userid:number,densevector:number []){
    try{
        const data = await client.faceAuthentication.create({
            data:{
                userid:userid,
                densevector:densevector
            }
        })
        if (data){
            return{
                status:1,
                message:'Dense Vector is saved in database'
            }
        }
    }
    catch(err){
        console.log(err);
    }
}