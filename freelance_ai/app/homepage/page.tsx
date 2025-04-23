import RoleBasedDashboard from "../components/Role_Based_Dashboard";
import { PrismaClient } from "@/db/generated/prisma";
import { NEXT_AUTH } from "@/lib/auth";
import { getServerSession } from "next-auth";
import { cookies } from 'next/headers'
import Apply_Client_details_button from '../components/Apply_Client_details_button'
const client = new PrismaClient();
export default async function ServerClientInfo() {
    const session = await getServerSession(NEXT_AUTH);
    const whichuser = session.user.whichuser;

    const cookieStore = await cookies();
    const cookieindex = await cookies();
    const datastate = cookieStore.get('buttonvisibility')?.value
    async function getAllJobs() {
        try {
            const jobs = await client.jobSchema.findMany({
                include: {
                    client: {
                        select: {
                            client_name: true,
                            Email: true,
                            client_id:true
                        }
                    }
                }
            });
            if (!jobs) {
                console.log("No jobs found in the db");
                return (
                    <div>Server is down try after some time</div>
                )
            }
            

            return jobs.map((job) => ({
                jobindex:job.job_id,
                jobbtitle: job.Job_titile,
                jobdescription: job.Job_description,
                budget: job.Budget,
                timeline: job.Timeline,
                clientName: job.client.client_name,
                clientEmail: job.client.Email,
                clientid:job.client.client_id
            }))

        }
        catch (error) {
            console.error("Database Error:", error)
        }
    }

    const jobdetails = await getAllJobs();
    return (
        <div>
            <RoleBasedDashboard></RoleBasedDashboard>
            <div className="p-6 space-y-4">
                {jobdetails?.map((job: any, index: any) => (
                    <div
                        key={index}
                        className="bg-white p-4 rounded-lg shadow-md border border-gray-200"
                    >
                        <h2 className="text-xl font-bold text-blue-600">{job.jobbtitle}</h2>
                        <p className="text-gray-700 mt-2">{job.jobdescription}</p>
                        <div className="mt-3 flex justify-between text-sm text-gray-600">
                            <span>💰 Budget: <strong>{job.budget}</strong></span>
                            <div className="flex flex-col gap-[1rem]">
                                <span>Client Name :{job.clientName || 'N/A'}</span>
                                <span>Client Name :{job.clientEmail || 'M/A'}</span>

                                <span>🕒 Timeline: <strong>{job.timeline}</strong></span>
                            </div>

                        </div>

                        <Apply_Client_details_button user={whichuser} clientid={job.clientid} jobtitle={job.jobbtitle} budget={job.budget} timeline={job.timeline} index={job.jobindex} client_email={job.clientEmail}></Apply_Client_details_button>

                    </div>
                ))}
            </div>
        </div>
    )
}

