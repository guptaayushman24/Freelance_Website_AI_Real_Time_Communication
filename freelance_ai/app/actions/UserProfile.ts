'use server'
import { PrismaClient } from  "@/db/generated/prisma"
import { userprofile } from "../zod/validation";
const client = new PrismaClient();
async function createUserProfile (userid:number,profile:string,project:string []){
    try{
        // Do the zod validation here
        const success = userprofile.parse({
            about:profile,
            projectlink:project
        })
        if (success){
            await client.profileSchema.create({
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
        return -1;
    }
}
export default createUserProfile;