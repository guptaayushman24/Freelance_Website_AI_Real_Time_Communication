'use server'
import { PrismaClient } from "@/db/generated/prisma"
const client = new PrismaClient();
export default async function DenseVector(){
    try{
        const data = await client.faceAuthentication.findMany({});
        // Convert Decimal[] to number[] manually
        const formattedData = data.map(entry=>({
            ...entry,
            densevector:entry.densevector.map(decimal=>Number(decimal))
        }));
        return{
            data:formattedData,
            status:1
        }
    }
    catch(err){
        console.log(err);
    }
}