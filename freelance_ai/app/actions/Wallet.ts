'use server'
import { PrismaClient } from "@/db/generated/prisma"
const client = new PrismaClient();
async function CreateWallet(name:string,email:string,role:string,amount:string,accountnumber:string,uniqueid:string){
    try{
        const data = await client.walletSchema.create({
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
        return -1;
    }
}
export default CreateWallet;