'use server'
// import { PrismaClient } from "@prisma/client";
// const client = new PrismaClient();
import {clientregister} from "@/app/zod/validation"
import {prisma} from '../../lib/prisma'
async function ClientRegister(client_name: string, email: string, password: string, organization: string) {
    // zod validation
    const success = clientregister.parse({
        client_name:client_name,
        email:email,
        password:password,
        organization:organization
    })
    if (success) {
        console.log(success);
        console.log("All fields are correct");
        try {
            const existinguser = await prisma.clientSchema.findUnique({
                where:{
                    Email:email
                }
            })
            if (existinguser){
                console.log("User Exist")
                return 1;
            }
                const user = await  prisma.clientSchema.create({
                    data: {
                        client_name:client_name,
                        Email:email,
                        Password:password,
                        Organization:organization
                    }
                })
                return{
                    user:user,
                    id:user.client_id
                }
           
        }
        catch (err) {
            console.log(err);
            return -1;
        }
    }
    else {
        console.log("Please check the fields");
    }
}
export default ClientRegister;