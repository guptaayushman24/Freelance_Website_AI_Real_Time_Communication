'use server'
import { PrismaClient } from "@/db/generated/prisma"
const client = new PrismaClient();
export default async function PaymentToFreelancer(clientuniqueid:string,freelanceruniqueid:string,amount:string){

    const clientwalletbalance = await client.walletSchema.findUnique({
        where:{
            uniqueid:clientuniqueid
        }
    })
    const userwalletbalance = await client.walletSchema.findUnique({
        where:{
            uniqueid:freelanceruniqueid
        }
    })
    if (Number (amount)>Number (clientwalletbalance?.amount)){
        throw new Error("Inssufficent Balance in wallet add balance from bank to wallet")
    }

    const transaction = await client.$transaction(async(tx)=>{
        await tx.walletSchema.update({
            where:{
                uniqueid:clientuniqueid
            },
            data:{
                amount:String (Number (clientwalletbalance?.amount)- Number (amount))
            }
        })
        
        await tx.walletSchema.update({
            where:{
                uniqueid:freelanceruniqueid
            },
            data:{
                amount: String (Number(userwalletbalance?.amount)+Number(amount))
            }
        })

        return { success: true };
       
    })
    return 1;
}