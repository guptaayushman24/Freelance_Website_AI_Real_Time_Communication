'use server'
import { PrismaClient } from "@prisma/client";
const client = new PrismaClient();
export async function Completedproject(client_id: number, useremail: string, projectitile: string, timeline: string, budget: string) {
    try {
        const data = await client.completedPoject.create({
            data: {
                client_id: client_id,
                useremail: useremail,
                project_title: projectitile,
                timeline: timeline,
                budget: budget
            }
        });
        if (data) {
            return {
                status: 1,
                message: 'Data is inserted into the Completed Project',
                id: data.completedprojectid
            }
        }
    }
    catch (err) {
        console.error(err);
    }
}

export async function Deletedproject(idtodelete: number) {
    try {
        const data = await client.acceptedProject.delete({
            where: {
                aaplyproject: 1
            }
        })
        if (data) {
            return {
                status: idtodelete,
                message: 'Data is deleted from database successfully'
            }
        }
    }
    catch (err) {
        console.error(err);
    }
}