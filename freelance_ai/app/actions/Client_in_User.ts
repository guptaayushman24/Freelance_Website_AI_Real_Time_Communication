'use server'
import { PrismaClient } from "@prisma/client";
const client = new PrismaClient();
export default async function checkclientisinuser (clientid:number){
    try{
        const data = await client.userSchema.findUnique({
            where:{
              user_id:clientid   
            }
        })
        if (data){
            return 1;
        }
        return -1;
    }
    catch(err){
        return err;
    }

}