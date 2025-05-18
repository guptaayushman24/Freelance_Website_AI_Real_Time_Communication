'use server'
// import { PrismaClient } from  "@/db/generated/prisma"
import { userprofile } from "../zod/validation";
// const client = new PrismaClient();
import {prisma} from '../../lib/prisma'
async function createUserProfile (userid:number,profile:string,project:string []){
    try{
        // Do the zod validation here
        const success = userprofile.parse({
            about:profile,
            projectlink:project
        })
        if (success){
            await prisma.profileSchema.create({
                data:{
                    userid:userid,
                    About:profile,
                    ProjectLink:project
    
                }
            })
            return 1;
        }
       
    }
    catch(err){
        console.log(err);
        return -1;
    }
}
export default createUserProfile;