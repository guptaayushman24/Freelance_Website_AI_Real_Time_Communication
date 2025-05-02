'use server'
import { PrismaClient } from "@/db/generated/prisma"
const client = new PrismaClient();
export default async function AcceptProject(client_id: number, user_id: number, project_title: string, budget: string, timeline: string) {
    try {
        const result = await client.acceptedProject.create({
            data: {
                client_id: client_id,
                userid: user_id,
                project_title: project_title,
                budget: budget,
                timeline: timeline,
            }
        })
        if (result) {
            return {
                status: 1,
                data: result,
                id: result.aaplyproject
            };
        }

    }
    catch (err) {
        console.error(err);
    }
}