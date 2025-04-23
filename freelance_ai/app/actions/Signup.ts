'use server'
import { PrismaClient } from "@/db/generated/prisma";
import { signupobject } from "../zod/validation";
import Email from "next-auth/providers/email";
const client = new PrismaClient();
async function Signup(name: string, email: string, password: string, experience: number, Rating: number, Skills: string[]) {
    // zod validation
    const success = signupobject.parse({
        name: name,
        email: email,
        password: password,
        experience: experience,
        rating: Rating,
        skills: Skills
    })
    if (success) {
        console.log(success);
        console.log("All fields are correct");
        try {
            const existinguser = await client.userSchema.findUnique({
                where:{
                    Email:email
                }
            })
            if (existinguser){
                console.log("User Exist")
                return 1;
            }
                const user = await  client.userSchema.create({
                    data: {
                        Name: name,
                        Email: email,
                        Password: password,
                        Experience: experience,
                        Rating: Rating,
                        Skills: Skills
    
                    }
                })
                return user.user_id;
           
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
export default Signup;