'use server'
// import { PrismaClient } from "@/db/generated/prisma"
// const client = new PrismaClient();
import {prisma} from '../../lib/prisma'
async function CreateWallet(name:string,email:string,role:string,amount:string,accountnumber:string,uniqueid:string){
    try{
        const data = await prisma.walletSchema.create({
            data:{
                name:name,
                email:email,
                role:role,
                accountnumber:accountnumber,
                amount:amount,
                uniqueid:uniqueid
            }
        })
        return data;
    }
    catch(err){
        console.log(err);
        return -1;
    }
}
export default CreateWallet;