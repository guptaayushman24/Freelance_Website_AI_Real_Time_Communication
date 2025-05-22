'use server'
// import { PrismaClient } from "@prisma/client";
// const client = new PrismaClient();
import {prisma} from '../../lib/prisma'
export default async function PaymentToFreelancer(clientuniqueid:string,freelanceruniqueid:string,amount:string){

    const clientwalletbalance = await prisma.walletSchema.findUnique({
        where:{
            uniqueid:clientuniqueid
        }
    })
    const userwalletbalance = await prisma.walletSchema.findUnique({
        where:{
            uniqueid:freelanceruniqueid
        }
    })
    if (Number (amount)>Number (clientwalletbalance?.amount)){
        throw new Error("Inssufficent Balance in wallet add balance from bank to wallet")
    }

    await prisma.$transaction(async(tx)=>{
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