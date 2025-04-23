'use server'
import { PrismaClient } from "@/db/generated/prisma"
import {clientregister} from "@/app/zod/validation"
const client = new PrismaClient();
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
            const existinguser = await client.clientSchema.findUnique({
                where:{
                    Email:email
                }
            })
            if (existinguser){
                console.log("User Exist")
                return 1;
            }
                const user = await  client.clientSchema.create({
                    data: {
                        client_name:client_name,
                        Email:email,
                        Password:password,
                        Organization:organization
                    }
                })
                return user;
           
        }
        catch (err) {
            console.log(err);
            return "Error in inserting the data in the database"
        }
    }
    else {
        console.log("Please check the fields");
    }
}
export default ClientRegister;