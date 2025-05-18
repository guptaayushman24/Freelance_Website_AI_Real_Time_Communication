'use server'
// import { PrismaClient } from "@/db/generated/prisma"
import {prisma} from '../../lib/prisma'
// const client = new PrismaClient();

export async function Completedproject(client_id: number, useremail: string, projectitile: string, timeline: string, budget: string) {
    try {
        const data = await prisma.completedPoject.create({
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
        const data = await prisma.acceptedProject.delete({
            where: {
                aaplyproject: idtodelete
            }
        })
        if (data) {
            return {
                status: 1,
                message: 'Data is deleted from database successfully'
            }
        }
    }
    catch (err) {
        console.error(err);
    }
}