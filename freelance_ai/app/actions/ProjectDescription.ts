'use server'
import { PrismaClient } from "@/db/generated/prisma";
const client = new PrismaClient();
import { jobschema } from "../zod/validation";
async function projectDescription(clintid: number, job_title: string, job_description: string, budget: string, timeline: string) {
    try {
        // Add the zod validation here
        const success = jobschema.parse({
            job_title: job_title,
            job_description: job_description,
            budget: budget,
            timeline: timeline
        })
        if (!success) {
            return -2;
        }
        const data = await client.jobSchema.createMany({
            data: {
                clientid: clintid,
                Job_titile: job_title,
                Job_description: job_description,
                Budget: budget,
                Timeline: timeline
            }
        })
        return data;

    }
    catch (err) {
        return -1;
    }
}
export default projectDescription;