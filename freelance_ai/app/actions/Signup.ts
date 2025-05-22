'use server'
import { signupobject } from "../zod/validation";
// import { PrismaClient } from "@prisma/client";
// const client = new PrismaClient();
import {prisma} from '../../lib/prisma'
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
            const existinguser = await prisma.userSchema.findUnique({
                where:{
                    Email:email
                }
            })
            if (existinguser){
                console.log("User Exist")
                return 1;
            }
                const user = await  prisma.userSchema.create({
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
        alert(`Name can have only numbers Password should be of minimum of 6 length and should contains alphabet and numbers experience and rating should be in numbers and skills are seperated by commas`)
        console.log("Please check the fields");
    }
}
export default Signup;